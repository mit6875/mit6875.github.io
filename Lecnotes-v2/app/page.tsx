"use client";

import { useState } from "react";

type Lecture = { number: string; date: string; title: string; description: string };
type Module = { number: string; title: string; description: string; lectures: Lecture[] };

const modules: Module[] = [
  {
    number: "01",
    title: "Basics & private-key cryptography",
    description: "Perfect secrecy, computational security, pseudorandomness, and the foundations of symmetric encryption.",
    lectures: [
      { number: "01", date: "Sep 09", title: "Introduction & perfect secrecy", description: "Secure communication, Shannon’s definition, the one-time pad, and Shannon’s lower bound." },
      { number: "02", date: "Sep 14", title: "Computational security & PRGs", description: "Computational adversaries, pseudorandom generators, and stateful secret-key encryption." },
      { number: "03", date: "Sep 16", title: "Hybrids, PRGs & PRFs", description: "The hybrid argument, PRG length extension, pseudorandom functions, and encryption from PRFs." },
      { number: "04", date: "Sep 21", title: "Pseudorandom functions", description: "Formal PRF security, the GGM construction, and the definition of IND-CPA security." },
      { number: "05", date: "Sep 23", title: "Authentication & chosen-ciphertext security", description: "Identification protocols, message-authentication codes, and CCA-secure symmetric encryption." },
      { number: "06", date: "Sep 28", title: "One-way functions", description: "Hard-core bits, pseudorandom generators, and the Goldreich–Levin theorem." },
      { number: "07", date: "Sep 30", title: "Goldreich–Levin, continued", description: "A complexity-theoretic view of Goldreich–Levin through local list decoding." },
    ],
  },
  {
    number: "02",
    title: "Public-key cryptography",
    description: "Key exchange, public-key encryption, signatures, and collision-resistant hashing.",
    lectures: [
      { number: "08", date: "Oct 05", title: "Public-key cryptography I", description: "Key exchange and the number-theoretic ideas behind it." },
      { number: "09", date: "Oct 07", title: "Public-key cryptography II", description: "Key exchange, continued, and the hardness assumptions that support it." },
      { number: "10", date: "Oct 13", title: "Public-key cryptography III", description: "From key exchange to probabilistic public-key encryption." },
      { number: "11", date: "Oct 14", title: "Public-key encryption IV", description: "Trapdoor permutations, RSA, and further constructions for public-key encryption." },
      { number: "12", date: "Oct 21", title: "Digital signatures I", description: "Signature syntax, security, and the leftover hash lemma." },
      { number: "13", date: "Oct 26", title: "Digital signatures II", description: "Signature constructions and collision-resistant hash functions." },
      { number: "14", date: "Oct 28", title: "Digital signatures III", description: "Hash-and-sign, random oracles, and compact signature schemes." },
      { number: "15", date: "Nov 02", title: "Identity-based encryption", description: "Public-key encryption where a user’s identity can serve as a public key." },
    ],
  },
  {
    number: "03",
    title: "Zero knowledge",
    description: "Proofs that reveal nothing beyond validity, from interactive definitions to non-interactive systems.",
    lectures: [
      { number: "16", date: "Nov 04", title: "Zero knowledge I", description: "Definitions, examples, simulation, and the knowledge-complexity viewpoint." },
      { number: "17", date: "Nov 09", title: "Zero knowledge II", description: "Placing NP in zero knowledge and the GMW paradigm." },
      { number: "18", date: "Nov 16", title: "Zero knowledge III", description: "Non-interactive zero knowledge, non-malleability, and applications." },
    ],
  },
  {
    number: "04",
    title: "Secure computation",
    description: "How mutually distrustful parties compute together: from secret sharing to fully homomorphic encryption.",
    lectures: [
      { number: "19", date: "Nov 18", title: "Secure computation: the toolkit", description: "Secret sharing and oblivious transfer." },
      { number: "20", date: "Nov 23", title: "The GMW protocol", description: "Secure two-party and multi-party computation in the semi-honest setting." },
      { number: "21", date: "Nov 25", title: "Yao’s garbled circuits", description: "Secure two-party computation through garbling and oblivious transfer." },
      { number: "22", date: "Nov 30", title: "Fully homomorphic encryption I", description: "Computing on encrypted data: definitions and first constructions." },
      { number: "23", date: "Dec 02", title: "Fully homomorphic encryption II", description: "Bootstrapping and the path to fully homomorphic evaluation." },
      { number: "24", date: "Dec 07", title: "The BGW protocol", description: "Information-theoretic multi-party computation." },
    ],
  },
  {
    number: "05",
    title: "Advanced topics",
    description: "A view toward the frontiers of modern cryptography.",
    lectures: [
      { number: "25", date: "Dec 09", title: "The frontiers of cryptography", description: "Recent directions and open questions across modern cryptography." },
    ],
  },
];

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const lectureCount = modules.reduce((total, module) => total + module.lectures.length, 0);

  return (
    <main className="site-shell">
      <aside className={`sidebar ${menuOpen ? "menu-open" : ""}`}>
        <div className="mobile-head">
          <a className="wordmark" href="#top" onClick={() => setMenuOpen(false)} aria-label="MIT 6.5620 home">
            <span className="wordmark-code">6.5620</span>
            <span className="wordmark-name">Foundations of<br />Cryptography</span>
          </a>
          <button className="menu-toggle" type="button" onClick={() => setMenuOpen(false)} aria-label="Close contents">×</button>
        </div>

        <div className="side-scroll">
          <nav className="side-nav" aria-label="Course navigation">
            <a className="active" href="#top" onClick={() => setMenuOpen(false)}><span>⌂</span> Overview</a>
            <a href="#lectures" onClick={() => setMenuOpen(false)}><span>≡</span> Lecture sequence</a>
          </nav>

          <div className="toc-label"><span>COURSE MODULES</span><span>{lectureCount} LECTURES</span></div>
          <nav className="module-nav" aria-label="Course modules">
            {modules.map((module) => (
              <a key={module.number} href={`#module-${module.number}`} onClick={() => setMenuOpen(false)}>
                <span>{module.number}</span><b>{module.title}</b>
              </a>
            ))}
          </nav>
        </div>

        <div className="side-footer"><span>Fall 2026</span><span>MIT EECS</span></div>
      </aside>

      <section className="page" id="top">
        <header className="topbar">
          <button className="mobile-course" onClick={() => setMenuOpen(true)} type="button">6.5620 <span>Contents</span></button>
          <span className="edition">MIT EECS · LECTURE NOTES</span>
          <button className="print-link" type="button" onClick={() => window.print()}>Offline edition <span>↓</span></button>
        </header>

        <div className="content-wrap home-content">
          <section className="hero" id="about">
            <div className="hero-kicker">Massachusetts Institute of Technology</div>
            <h1>Foundations of<br /><em>Cryptography</em></h1>
            <p className="hero-deck">A rigorous introduction to modern cryptography.</p>
            <div className="hero-meta">
              <div><span>COURSE</span><strong>6.5620 · 6.875 · 18.425</strong></div>
              <div><span>TERM</span><strong>Fall 2026</strong></div>
              <div><span>INSTRUCTORS</span><strong>S. Goldwasser · V. Vaikuntanathan</strong></div>
            </div>
          </section>

          <section className="intro" id="resources">
            <div>
              <span className="eyebrow">ABOUT THESE NOTES</span>
              <p>This site follows the course’s official twenty-five-lecture sequence. Detailed notes will be added lecture by lecture.</p>
            </div>
            <div className="quick-links single-link">
              <button type="button" onClick={() => window.print()}><span>OFFLINE EDITION</span><b>Save the lecture index <i>↓</i></b></button>
            </div>
          </section>

          <section className="chapters-section lecture-index" id="lectures">
            <div className="section-heading">
              <div><span className="eyebrow">THE COURSE</span><h2>Lecture sequence</h2></div>
              <p>{lectureCount} lectures · 5 modules</p>
            </div>

            {modules.map((module) => (
              <section className="module-section" id={`module-${module.number}`} key={module.number}>
                <header className="module-heading">
                  <span>MODULE {module.number}</span>
                  <div><h3>{module.title}</h3><p>{module.description}</p></div>
                </header>
                <div className="chapter-list">
                  {module.lectures.map((lecture) => (
                    <div className="chapter-row lecture-row" key={lecture.number}>
                      <span className="chapter-number">{lecture.number}</span>
                      <span className="chapter-title"><small>{lecture.date}</small>{lecture.title}</span>
                      <span className="chapter-description">{lecture.description}</span>
                      <span className="lecture-status">NOTES<br />FORTHCOMING</span>
                    </div>
                  ))}
                </div>
              </section>
            ))}
          </section>

          <footer className="site-footer">
            <div><span className="wordmark-code">6.5620</span><p>Foundations of Cryptography<br />Massachusetts Institute of Technology</p></div>
            <p>Fall 2026 · Lecture notes forthcoming</p>
          </footer>
        </div>
      </section>
    </main>
  );
}
