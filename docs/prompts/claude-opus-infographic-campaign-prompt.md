# Claude Opus Max Prompt: World-Shock Infographic Campaign

Use this in Claude.ai Opus Max.

---

You are not making a single infographic.
You are designing a **world-class editorial campaign** that turns a software codebase into a set of visual artifacts, lessons, diagrams, posters, explainers, and web pages that make technical people say:

**"what the hell did these people figure out inside this repo?"**

Your job is to turn the `claude-code` Atlas into a **multi-format visual publication** that does 2 things at once:

1. **Shock the world with the hidden sophistication of the codebase**
2. **Teach people what Anthropic appears to have learned about building real agent systems**

Important nuance:
Do **not** claim private intent, internal secrets, or unsupported company doctrine.
Instead, frame it as:

- what the codebase appears to reveal
- what engineering values are visible in the implementation
- what lessons can be inferred from the architecture, safety systems, agent control plane, and extensibility model

## Source Material

Base everything on these public Atlas routes:
- https://dhawalc.github.io/claude-code-atlas/
- https://dhawalc.github.io/claude-code-atlas/maps/
- https://dhawalc.github.io/claude-code-atlas/lenses/
- https://dhawalc.github.io/claude-code-atlas/lessons/
- https://dhawalc.github.io/claude-code-atlas/inventions/
- https://dhawalc.github.io/claude-code-atlas/tensions/
- https://dhawalc.github.io/claude-code-atlas/deep-cuts/
- https://dhawalc.github.io/claude-code-atlas/control-plane/
- https://dhawalc.github.io/claude-code-atlas/futures/
- https://dhawalc.github.io/claude-code-atlas/safety/
- https://dhawalc.github.io/claude-code-atlas/xray/
- https://dhawalc.github.io/claude-code-atlas/sources/

## Core Thesis

The strongest framing is:

**This is not just a coding CLI. It is a visible blueprint for a terminal-native agent operating system, and the codebase contains a set of design lessons about safety, control, extensibility, memory, and product evolution that most of the world has not yet learned to articulate.**

## The 3 Editorial Lenses

Everything should map back to these:

1. **Lessons**
   What this codebase teaches the world about building real agents.

2. **Invisible Inventions**
   The hidden architecture moves, safety patterns, control-plane ideas, and weird subsystems most people would miss.

3. **Resolved Tensions**
   The hard tradeoffs the system is negotiating:
   - autonomy vs control
   - local vs remote
   - speed vs safety
   - platform vs product
   - one agent vs a team of agents
   - flexibility vs trust boundaries

## What This Campaign Must Teach

You must teach readers that this codebase suggests the following:

- agents should be treated like runtimes, not chatbots
- safety is compositional
- shell access is a first-class security problem
- worktrees matter because parallelism is not just cognitive, it is filesystem/process isolation
- subagents are really a coordination and control-plane problem
- plugins, MCP, bridge layers, and skills turn an app into an ecosystem
- memory is an operational concern, not just context stuffing
- product futures leak through flags, experiments, split surfaces, and orphan subsystems
- great systems are beautiful because of the tensions they resolve, not because they are simple

## Tone

This should feel like:
- a leaked blueprint
- a field guide from the frontier
- a beautifully designed technical dossier
- an editorial package for a very online engineering audience
- a museum exhibit for agent systems

Avoid:
- generic startup copy
- "AI will change everything" fluff
- boring corporate diagrams
- superficial architecture overviews
- weak, hedged language when the evidence is strong

## Deliverables

I want a **campaign**, not a single object.
Design a system that includes **all** of the following:

### A. Flagship Artifacts
Generate concepts for at least:
- 1 giant master architecture map
- 1 giant safety map
- 1 giant control-plane map
- 1 giant product-archaeology map
- 1 giant extensibility ecosystem map
- 1 giant “how real agent systems work” teaching graphic

### B. Editorial Infographics
Generate at least **12 distinct infographic concepts**, each with a unique point of view.
Examples of acceptable categories:
- poster
- long-scroll web graphic
- split-screen comparison
- dossier page
- timeline
- control-room dashboard
- systems cutaway
- architecture foldout
- thesis page
- field guide spread

### C. Teaching Artifacts
Generate at least:
- 1 “What Anthropic Appears To Teach Us” explainer
- 1 “10 Lessons Hidden In Claude Code” artifact
- 1 “Invisible Inventions” artifact
- 1 “Resolved Tensions” artifact
- 1 “How to Build Safer Agent Systems” artifact
- 1 “What Most People Miss In This Repo” artifact

### D. Distribution Artifacts
Generate at least:
- 1 social-card pack concept
- 1 tweet-thread visual pack concept
- 1 downloadable PDF / mini-book concept
- 1 GitHub Pages mini-site structure
- 1 Markdown-first documentation package

## Mandatory Output Modes

You must provide **both** of these:

### Mode 1: GitHub Pages / Web Experience
Design a public-facing mini-site or expansion of the current Atlas with:
- routes/pages
- section structure
- copy blocks
- diagram concepts
- chart concepts
- CTA ideas
- motion or interaction ideas
- layout guidance
- visual hierarchy guidance
- components that could be built in React/Next.js

### Mode 2: Markdown / Static Publishing Pack
Design a Markdown-based publishing pack with:
- file names
- purpose of each file
- section outline
- exact opening copy
- Mermaid diagram suggestions
- poster-caption text
- pull quotes
- figure captions
- shareable excerpts
- report sequencing

## For Each Infographic Concept, Include

For every concept, provide:
- title
- one-line thesis
- why it matters
- target audience
- best format: web / poster / markdown / PDF / social
- recommended layout
- required panels or sections
- exact copy ideas or pull quotes
- what evidence from the Atlas it should draw on
- what makes it memorable or shocking

## Specific Concepts I Expect To See

Include strong versions of these, even if you rename them:
- **The Agent OS Map**
- **The Safety Stack**
- **The Control Plane**
- **The Browser Split**
- **The Worktree Thesis**
- **The Memory Problem**
- **The Future Leak Diagram**
- **Anthropic’s Apparent Lessons**
- **Why This Is Not Just a CLI**
- **How Multi-Agent Coding Actually Works**
- **The Extensibility Mesh**
- **Beautiful Tensions**

## What Makes It World-Class

I do not want summary graphics.
I want artifacts that feel:
- collectible
- quotable
- teachable
- screenshot-worthy
- conference-worthy
- GitHub-native and also shareable outside GitHub

This should produce assets that can live in:
- GitHub Pages
- Markdown docs
- PDFs
- social posts
- talks
- keynote slides
- posters

## Visual Direction

Push toward:
- editorial brutality
- blueprint energy
- dossier energy
- operator-console density
- crisp typography
- restrained but high-contrast palette
- shapes, paths, lanes, callouts, legends, overlays
- rich annotation and layered storytelling

Avoid:
- glossy SaaS sameness
- random futuristic nonsense
- neon sludge
- trendy-but-empty visuals

## Output Structure

Respond in this exact order:

1. **Campaign Thesis**
2. **What The World Has Not Seen Yet**
3. **What This Codebase Appears To Teach**
4. **Best Overall Format Strategy**
5. **Master Artifact System**
6. **12+ Infographic Concepts**
7. **GitHub Pages Experience Plan**
8. **Markdown Publishing Pack**
9. **Diagram and Visual Specs**
10. **Pull Quotes and Poster Lines**
11. **How To Make It Go Viral Without Becoming Cringe**
12. **Execution Priority Order**

## Final Push

Make the result feel like we are revealing a hidden curriculum for agent systems.

Not:
- “here is a nice architecture diagram”

But:
- “here is a new visual language for understanding the future of coding agents”

Be ambitious.
Be specific.
Be visually opinionated.
Be technically grounded.
And make sure the campaign can be executed both as a GitHub Pages experience and as Markdown-first publishing assets.
