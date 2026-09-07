import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import test from "node:test";

async function render() {
  const workerUrl = new URL("../dist/server/index.js", import.meta.url);
  workerUrl.searchParams.set("test", `${process.pid}-${Date.now()}`);
  const { default: worker } = await import(workerUrl.href);

  return worker.fetch(
    new Request("http://localhost/", { headers: { accept: "text/html" } }),
    { ASSETS: { fetch: async () => new Response("Not found", { status: 404 }) } },
    { waitUntil() {}, passThroughOnException() {} },
  );
}

test("server-renders the course site", async () => {
  const response = await render();
  assert.equal(response.status, 200);
  assert.match(response.headers.get("content-type") ?? "", /^text\/html\b/i);

  const html = await response.text();
  assert.match(html, /MIT 6\.5620/);
  assert.match(html, /Foundations of Cryptography/);
  assert.match(html, /A rigorous introduction to modern cryptography\./);
});

test("uses the official lecture sequence without placeholder note links", async () => {
  const page = await readFile(new URL("../app/page.tsx", import.meta.url), "utf8");

  assert.match(page, /Introduction & perfect secrecy/);
  assert.match(page, /The frontiers of cryptography/);
  assert.match(page, /NOTES<br \/>FORTHCOMING/);
  assert.doesNotMatch(page, /Cryptography begins where intuition ends/);
  assert.doesNotMatch(page, /Read online/i);
  assert.doesNotMatch(page, /intensecrypto/i);
});
