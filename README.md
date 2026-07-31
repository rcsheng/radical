# radical

Five interactive prototypes reverse-engineered from Radical AI's public site, blog posts, and one peer-reviewed benchmark paper — built as a study exercise ahead of a Product Manager interview. Each console cites exactly what it's grounded in; nothing here is confirmed by the company.

Open `index.html` for the gallery, or jump straight into a screen below.

## The five consoles

Ordered to follow Radical AI's own closed loop: predict a candidate → run it in the lab → read the result → mine the literature that seeded the prediction → decide how much of this an agent should be allowed to do on its own.

1. **[Antimatter](prototypes/antimatter.html)** — Inverse-design console. Spec a target property and screen 10 billion candidate compositions down to the ~100 worth synthesizing. (AI / prediction, GaN semiconductor case)
2. **[Autonomous Lab](prototypes/autonomous-lab.html)** — Live run-queue for the physical lab. 25+ alloys/day, a digital trail per sample, and an explore-vs-exploit dial on what gets tested next. (Physical / robotics, ops dashboard)
3. **[Microstructure Copilot](prototypes/microstructure-copilot.html)** — SEM image review tool. Automated dendrite-spacing measurement that cuts 15 minutes down to 1 second and removes ±16% operator variance. (Physical / vision, scientist QA tool)
4. **[LitXBench Agent](prototypes/litxbench.html)** — Literature-mining assistant. Extracts structured experiments from published alloy papers, built on Radical AI's own arXiv benchmark. (AI / literature, research tool)
5. **[Agent Autonomy Console](prototypes/agent-console.html)** — The trust layer: how much should an AI agent be allowed to do to real lab equipment before a human signs off. (AI / agents, most speculative)

## How to use each console

- **Journey steps** — click through the numbered steps atop each console; the screen actually changes state, it isn't a static image.
- **Dashed terms** — any underlined term is clickable and opens a plain-language definition inline.
- **Learning mode** — flip the toggle in the top-right of any console page to reveal "why this matters" annotations pinned to the real research.
- **Copper vs. cyan** — copper marks the physical/lab side of the product; cyan marks the AI/prediction side, carried consistently across all five screens.
