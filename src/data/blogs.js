// Single source of truth for all blog posts
// Used by: FeaturedPost, BlogGrid, BlogDetail, RelatedBlogs

export const ALL_POSTS = [
  {
    id: 0,
    slug: "generative-ai-redefining-software-development",
    featured: true,
    category: "AI & ML",
    title: "How Generative AI Is Redefining the Future of Software Development",
    excerpt:
      "From intelligent code completion to fully autonomous agents, generative AI is not just a productivity booster — it is fundamentally reshaping how software gets built, reviewed, and shipped at scale.",
    author: "CoreHives",
    authorInitials: "CH",
    authorRole: "CoreHives Team",
    authorBio:
      "CoreHives is a full-service digital agency specializing in AI, web, mobile, and branding solutions for enterprise and startup clients worldwide.",
    date: "May 28, 2025",
    readTime: "8 min read",
    content: [
      {
        type: "paragraph",
        text: "Not long ago, the most sophisticated AI tool a developer could use was autocomplete — a minor convenience that suggested variable names and saved a few keystrokes. Today, AI writes entire functions, suggests architectural patterns, reviews pull requests, and in some cases operates as a semi-autonomous collaborator that can take a task from spec to shipped code with minimal intervention.",
      },
      {
        type: "heading2",
        text: "From Autocomplete to Autonomous Agents",
      },
      {
        type: "paragraph",
        text: "The shift happened faster than most engineers expected. Tools like GitHub Copilot and Cursor normalized the idea of AI as a pair programmer. But the real transformation is happening at a higher level of abstraction: AI is beginning to operate on tasks, not keystrokes.",
      },
      {
        type: "paragraph",
        text: 'In agentic setups, a model receives a goal — "add OAuth2 support to this Express app" — and autonomously reads the relevant files, writes the implementation, runs tests, and iterates on failures. The developer reviews the resulting diff, not every line written.',
      },
      {
        type: "callout",
        text: "By 2026, analysts estimate that over 30% of new enterprise software will be authored primarily by AI agents, with human developers focused on requirements, review, and strategic architecture decisions.",
      },
      {
        type: "heading2",
        text: "What Actually Changes in Practice",
      },
      {
        type: "paragraph",
        text: "The impact is not uniform. Some tasks — boilerplate generation, test writing, documentation, API client scaffolding — are already cheaper and faster when delegated to AI. Other tasks — deeply coupled refactors, cross-cutting security changes, nuanced UX decisions — still require experienced human judgment and domain knowledge.",
      },
      {
        type: "list",
        items: [
          "Boilerplate and scaffolding: Near-complete delegation possible today",
          "Unit test generation: High-quality output with light review",
          "Code review and security analysis: AI as first pass, human for final decision",
          "Architecture design: AI for options and trade-off summaries, human for decisions",
          "Complex refactors: AI for suggestions, human for execution and judgment",
        ],
      },
      {
        type: "heading3",
        text: "The Prompt Engineering Discipline",
      },
      {
        type: "paragraph",
        text: "A new skill has emerged in engineering teams: prompt engineering for code generation. Writing a clear, scoped task description — complete with constraints, output format, and edge cases — now produces dramatically better results than vague instructions. This mirrors how senior engineers write task specifications for junior teammates.",
      },
      {
        type: "code",
        language: "markdown",
        code: `# Task: Add rate limiting to the /api/auth/login endpoint
## Constraints
- Use Redis for distributed state (already configured)
- Limit: 5 attempts per IP per 15-minute window
- Return 429 with Retry-After header on violation
- Do not change the existing response shape for successful logins
## Files to edit
- src/routes/auth.ts
- src/middleware/rateLimiter.ts (create if missing)`,
      },
      {
        type: "paragraph",
        text: "Teams that invest in writing good task specifications for AI agents report dramatically better first-attempt quality than those who use ad-hoc prompting. The discipline transfers to human task delegation too.",
      },
      {
        type: "heading2",
        text: "The Code Review Problem",
      },
      {
        type: "paragraph",
        text: "AI-generated code introduces a subtle risk: it looks correct. It passes linters, compiles cleanly, and often passes tests. But it can contain logical errors, security anti-patterns, and subtle race conditions that humans introduced intentionally as tests of AI judgment.",
      },
      {
        type: "quote",
        text: "The hardest bugs to find are the ones that are syntactically perfect but semantically wrong. AI writes a lot of code that is syntactically perfect.",
        author: "Andrej Karpathy",
      },
      {
        type: "paragraph",
        text: "This has elevated the importance of code review at engineering organizations. The reviewer's job is no longer just catching bugs — it is understanding intent, verifying business logic, and ensuring the code is maintainable by humans who inherit it. AI can generate code faster than humans can review it, so review quality has become the binding constraint.",
      },
      {
        type: "heading2",
        text: "What This Means for Teams at CoreHives",
      },
      {
        type: "paragraph",
        text: "At CoreHives, we have integrated AI into every phase of our development workflow — from initial spec writing to post-deployment monitoring. The teams that adapted fastest were those who treated AI as a capable junior contributor: useful, fast, and occasionally confidently wrong.",
      },
      {
        type: "paragraph",
        text: "The key insight: AI amplifies the quality of your engineering culture. Clear specifications, strong code review, good test coverage — these practices were always good engineering. They are now table stakes if you want AI to produce safe, maintainable output.",
      },
      {
        type: "callout",
        text: "The future does not belong to developers who resist AI, nor to those who blindly trust it. It belongs to engineers who learn to collaborate with AI — directing it with precision and verifying its output with rigor.",
      },
    ],
  },
  {
    id: 1,
    slug: "micro-frontend-architectures-that-scale",
    category: "Web Dev",
    title: "Building Micro-Frontend Architectures That Actually Scale",
    excerpt:
      "A practical guide to splitting monolithic frontends into independently deployable modules without sacrificing developer experience or runtime performance.",
    author: "CoreHives",
    authorInitials: "CH",
    authorRole: "Lead Frontend Engineer",
    authorBio:
      "Sara leads frontend architecture at CoreHives, specializing in large-scale React applications, performance engineering, and design systems.",
    date: "May 20, 2025",
    readTime: "6 min read",
    content: [
      {
        type: "paragraph",
        text: "Micro-frontends promised the same benefits for frontend code that microservices delivered for backends: independent deployability, team autonomy, and the ability to evolve parts of a large UI without touching everything. In practice, many teams that adopt micro-frontends find themselves managing significantly more complexity without a commensurate gain in speed or quality.",
      },
      {
        type: "heading2",
        text: "The Core Problem with Monolithic Frontends",
      },
      {
        type: "paragraph",
        text: "Large frontend codebases accumulate drag over time. Build times slow. A change to a shared component requires regression testing across dozens of features. Teams step on each other's work. Deployments batch unrelated changes together, making rollbacks risky.",
      },
      {
        type: "paragraph",
        text: "Micro-frontends attack these problems by defining clear ownership boundaries. Each team owns a slice of the UI end-to-end: the component library, the data layer, the deployment pipeline. They ship independently, on their own schedule.",
      },
      {
        type: "heading2",
        text: "Module Federation: The Practical Path",
      },
      {
        type: "paragraph",
        text: "Webpack's Module Federation (and its Vite counterpart) is the most practical route to micro-frontends for teams already on a React/Vue/Angular stack. It allows one application to expose components that another application consumes at runtime — no iframes, no separate routing layers, no complex shell application required for simple cases.",
      },
      {
        type: "code",
        language: "js",
        code: `// vite.config.ts (host app)
federation({
  name: 'host',
  remotes: {
    dashboard: 'http://localhost:3001/assets/remoteEntry.js',
    analytics: 'http://localhost:3002/assets/remoteEntry.js',
  },
  shared: ['react', 'react-dom'],
})`,
      },
      {
        type: "heading2",
        text: "The Shared State Problem",
      },
      {
        type: "paragraph",
        text: "The hardest problem in micro-frontend architectures is not the initial split — it is shared state. User authentication state, shopping cart contents, feature flags, and notification counts need to be accessible across all micro-frontends. Naively duplicating this state leads to inconsistency; sharing it naively creates coupling.",
      },
      {
        type: "list",
        items: [
          "Use a shared event bus for cross-module communication",
          "Store global state in a dedicated shell application",
          "Use URL and browser storage as the source of truth for simple shared state",
          "Treat authentication as a service, not a module concern",
        ],
      },
      {
        type: "callout",
        text: "Teams that succeed with micro-frontends treat them as an organizational solution first, a technical one second. The split should follow team boundaries, not arbitrary technical seams.",
      },
    ],
  },
  {
    id: 2,
    slug: "smart-contracts-enterprise-patterns-pitfalls",
    category: "Blockchain",
    title: "Smart Contracts in the Enterprise: Patterns and Pitfalls",
    excerpt:
      "Real-world lessons from deploying on-chain business logic for Fortune 500 clients — from gas optimisation to upgradeability.",
    author: "CoreHives",
    authorInitials: "CH",
    authorRole: "Blockchain Architect",
    authorBio:
      "Omar leads blockchain solutions at CoreHives, with hands-on experience deploying smart contracts for enterprise clients across finance, supply chain, and digital identity.",
    date: "May 15, 2025",
    readTime: "9 min read",
    content: [
      {
        type: "paragraph",
        text: "Smart contracts were sold to enterprises as self-executing agreements that eliminate the need for intermediaries. The reality is more nuanced: they are code running on an immutable shared database, with all the implications that entails — bugs cannot be patched without a migration, state is visible to all participants, and every computation has a non-trivial cost.",
      },
      {
        type: "heading2",
        text: "The Upgradeability Problem",
      },
      {
        type: "paragraph",
        text: "The most common mistake we see enterprise teams make is deploying contracts without an upgrade path. The immutability of deployed code is a feature for trust, but a liability for software that needs to evolve. The proxy pattern — where a thin proxy contract delegates calls to an implementation contract that can be swapped — is now standard, but it adds complexity that must be understood before it is adopted.",
      },
      {
        type: "callout",
        text: "Use OpenZeppelin's Transparent Proxy or UUPS pattern for any contract managing significant value or requiring long-term maintenance. Never deploy business logic to a non-upgradeable contract in production.",
      },
      {
        type: "heading2",
        text: "Gas Optimisation in Practice",
      },
      {
        type: "paragraph",
        text: "Gas costs are not just a deployment concern — they affect user experience in real time. A poorly written contract can make a simple operation cost 10x what it should. The biggest wins usually come from storage layout optimization, avoiding on-chain computation that can be done off-chain, and using events instead of storage for data that only needs to be queried.",
      },
      {
        type: "list",
        items: [
          "Pack struct fields to minimize storage slots used",
          "Use mappings over arrays for frequent single-key lookups",
          "Emit events instead of writing to storage for audit trails",
          "Batch operations to amortize base transaction costs",
          "Use calldata instead of memory for read-only function parameters",
        ],
      },
      {
        type: "heading2",
        text: "Security Patterns Worth Knowing",
      },
      {
        type: "paragraph",
        text: "Re-entrancy, integer overflow, and access control failures remain the top three smart contract vulnerability classes. The checks-effects-interactions pattern, OpenZeppelin's ReentrancyGuard, and role-based access control (AccessControl) address the majority of surface area. Start every new contract by auditing these three dimensions before you write business logic.",
      },
    ],
  },
  {
    id: 3,
    slug: "dark-ui-design-beyond-colour-swap",
    category: "Design",
    title: "Dark UI Design: Going Beyond the Obvious Colour Swap",
    excerpt:
      "Designing for dark mode is more than inverting a palette. Explore contrast, depth, and glow-state principles that make dark interfaces feel premium.",
    author: "CoreHives",
    authorInitials: "CH",
    authorRole: "Senior UX Designer",
    authorBio:
      "Aiza is CoreHives' lead UX designer, focused on premium SaaS interfaces and the intersection of motion design and usability.",
    date: "May 10, 2025",
    readTime: "5 min read",
    content: [
      {
        type: "paragraph",
        text: "The first time most designers implement dark mode, they invert their light palette — white becomes near-black, black becomes near-white, and accent colors shift slightly. This produces a dark interface that feels flat, muddy, and unconvincing. The problem is that light and dark UIs have fundamentally different depth models.",
      },
      {
        type: "heading2",
        text: "Light vs Dark: Different Depth Models",
      },
      {
        type: "paragraph",
        text: "In a light interface, depth is expressed through shadow and darker overlays. Cards appear elevated because they cast shadows onto a lighter background. In a dark interface, this model breaks — dark shadows on dark backgrounds are invisible. Instead, dark UIs express depth through luminosity: elements closer to the viewer are lighter, not darker.",
      },
      {
        type: "heading2",
        text: "The Glow-State Principle",
      },
      {
        type: "paragraph",
        text: "Interactive elements in dark UIs communicate state through glow rather than shadow. A focused input field glows with a subtle teal bloom. A hovered button gains an inner glow at its top edge — simulating a light source from above. Active states are expressed by increasing this luminosity, not by changing color.",
      },
      {
        type: "callout",
        text: "Avoid pure black (#000000) backgrounds in dark UIs — they create excessive contrast that feels harsh. Use a very dark blue or teal-tinted near-black (e.g., #020617) to add warmth and reduce eye strain.",
      },
      {
        type: "heading2",
        text: "Typography in Dark Mode",
      },
      {
        type: "paragraph",
        text: "Pure white text on a dark background creates uncomfortable contrast. Use white at 60–80% opacity for body text, reserving true white for headings and primary content. This hierarchy communicates importance without harshness.",
      },
      {
        type: "list",
        items: [
          "Primary text: white at 90–100% opacity",
          "Secondary text: white at 55–70% opacity",
          "Tertiary / metadata: white at 30–45% opacity",
          "Placeholder / disabled: white at 18–25% opacity",
        ],
      },
    ],
  },
  {
    id: 4,
    slug: "react-native-vs-flutter-2025",
    category: "Mobile",
    title: "React Native vs Flutter in 2025: An Honest Comparison",
    excerpt:
      "Two years of shipping production apps on both frameworks — performance benchmarks, DX trade-offs, and when to choose what.",
    author: "CoreHives",
    authorInitials: "CH",
    authorRole: "Mobile Lead",
    authorBio:
      "Hamza leads mobile development at CoreHives, having shipped over 20 production apps across React Native and Flutter for clients in fintech, healthcare, and e-commerce.",
    date: "May 5, 2025",
    readTime: "7 min read",
    content: [
      {
        type: "paragraph",
        text: "For the last two years, CoreHives has shipped production apps on both React Native and Flutter. Our client mix spans fintech, e-commerce, and healthcare — each with different performance requirements, team compositions, and timelines. This is our honest assessment of where each framework wins and loses in 2025.",
      },
      {
        type: "heading2",
        text: "Performance: Flutter Wins on Raw Metrics",
      },
      {
        type: "paragraph",
        text: "Flutter's rendering engine (Impeller, now the default) bypasses the OS UI layer entirely, giving it consistent 120fps rendering on capable hardware. React Native's New Architecture (Fabric + JSI) eliminated the async bridge bottleneck, bringing its performance meaningfully closer to Flutter — but not identical, particularly on animation-heavy UIs.",
      },
      {
        type: "heading2",
        text: "Developer Experience: React Native for Web Teams",
      },
      {
        type: "paragraph",
        text: "If your team writes React for the web, React Native is a shorter ramp. JSX, hooks, and TypeScript carry over directly. The mental model of components, state, and props is identical. Flutter requires learning Dart and a different widget composition model that, while elegant, is genuinely unfamiliar to web developers.",
      },
      {
        type: "heading2",
        text: "When to Choose Each",
      },
      {
        type: "list",
        items: [
          "Choose Flutter: Animation-heavy apps, games, highly custom UI components",
          "Choose React Native: Team with existing React experience",
          "Choose Flutter: Enterprise apps requiring consistent rendering across OS versions",
          "Choose React Native: Shared logic with a Next.js or Expo web app",
          "Either framework: Standard CRUD apps with moderate UI complexity",
        ],
      },
      {
        type: "callout",
        text: "The best framework is the one your team ships fastest with. If your team writes React daily, React Native will ship first. If you have no frontend bias, Flutter's rendering consistency is worth the Dart learning curve.",
      },
    ],
  },
  {
    id: 5,
    slug: "rag-vs-fine-tuning-llm-strategy",
    category: "AI & ML",
    title: "RAG vs Fine-Tuning: Choosing the Right LLM Strategy",
    excerpt:
      "Retrieval-augmented generation and fine-tuning solve different problems. Here is a decision framework built from hands-on production deployments.",
    author: "CoreHives",
    authorInitials: "CH",
    authorRole: "AI Engineer",
    authorBio:
      "Emaad leads AI product development at CoreHives, specializing in LLM integration, RAG pipelines, and enterprise AI deployment at scale.",
    date: "Apr 29, 2025",
    readTime: "10 min read",
    content: [
      {
        type: "paragraph",
        text: "Organizations exploring LLM-powered products quickly encounter a fork: should we fine-tune a model on our data, or build a retrieval system that feeds context to a general model? The answer depends on what problem you are actually solving — and many teams choose the wrong option because they conflate capability with knowledge.",
      },
      {
        type: "heading2",
        text: "The Core Distinction",
      },
      {
        type: "paragraph",
        text: "Fine-tuning changes how a model behaves — its style, its format preferences, its domain-specific reasoning patterns. RAG changes what a model knows — by providing relevant information at inference time. These are different levers that address different failure modes.",
      },
      {
        type: "callout",
        text: "If your model gives wrong answers because it lacks current or proprietary information, use RAG. If it gives correct information in the wrong format or style, consider fine-tuning. Most production problems are the former.",
      },
      {
        type: "heading2",
        text: "When RAG Wins",
      },
      {
        type: "paragraph",
        text: "RAG is the right default for most production use cases. It is cheaper to update (add documents, not retrain), more transparent (you can inspect what context was retrieved), and works immediately without training infrastructure.",
      },
      {
        type: "list",
        items: [
          "Knowledge cutoff problems: Model lacks recent or proprietary information",
          "Document QA: Users ask questions about a specific corpus",
          "Customer support: Answers must reference your product documentation",
          "Dynamic knowledge: Your information changes frequently",
        ],
      },
      {
        type: "heading2",
        text: "When Fine-Tuning Wins",
      },
      {
        type: "paragraph",
        text: "Fine-tuning is worth the investment when you need consistent output format, domain-specific reasoning that cannot be prompted reliably, or latency savings from shorter system prompts. Legal document analysis, medical coding, and specialized technical domains are good candidates.",
      },
    ],
  },
  {
    id: 6,
    slug: "building-digital-brand-identity-first-principles",
    category: "Branding",
    title: "Building a Digital Brand Identity from First Principles",
    excerpt:
      "Logo, colour, motion, tone — how CoreHives approaches brand systems that remain coherent across every touchpoint at any scale.",
    author: "CoreHives",
    authorInitials: "CH",
    authorRole: "Brand Strategist",
    authorBio:
      "Nida leads brand and visual identity at CoreHives, working with startups and enterprises to build design systems that scale from day one.",
    date: "Apr 22, 2025",
    readTime: "6 min read",
    content: [
      {
        type: "paragraph",
        text: "A brand is not a logo. It is the sum of every interaction a person has with your product — the color of your emails, the tone of your error messages, the way your loading animation moves. Designing a brand identity that scales means making decisions at the system level, not the asset level.",
      },
      {
        type: "heading2",
        text: "Start with Perception, Not Aesthetics",
      },
      {
        type: "paragraph",
        text: "Before opening Figma, we run a brand perception workshop with every new client. The core question: when a user encounters your product, what three words should come to mind? Premium, approachable, technical? Bold, minimal, authoritative? These three adjectives become the design brief — every visual decision is filtered through them.",
      },
      {
        type: "heading2",
        text: "The Color System",
      },
      {
        type: "paragraph",
        text: "A digital brand color system needs four tiers: primary (brand recognition), accent (interactive states), surface (backgrounds and cards), and semantic (success, warning, error). Most brand guides only define primary and accent, leaving teams to improvise surface and semantic colors — which is where inconsistency creeps in.",
      },
      {
        type: "heading2",
        text: "Motion as Brand Language",
      },
      {
        type: "paragraph",
        text: "Motion design is the most underinvested dimension of digital brand identity. How elements enter the screen, how transitions feel, how interactions respond — these create an emotional signature that users recognize subconsciously. A brand that uses bouncy, elastic animations feels different from one that uses precise, linear ones, even if every static asset is identical.",
      },
      {
        type: "callout",
        text: "Codify motion in a token system alongside color and typography. Define easing curves, duration scales, and animation principles the same way you define a color palette — before any component is built.",
      },
    ],
  },
  {
    id: 7,
    slug: "serverless-architecture-when-it-helps-hurts",
    category: "Cloud",
    title: "Serverless Architecture: When It Helps and When It Hurts",
    excerpt:
      "A candid look at the cold-start problem, vendor lock-in, and the classes of workloads where serverless genuinely outperforms containers.",
    author: "CoreHives",
    authorInitials: "CH",
    authorRole: "Cloud Architect",
    authorBio:
      "Zain architects cloud infrastructure at CoreHives, specializing in serverless patterns, container orchestration, and cost optimization at scale.",
    date: "Apr 16, 2025",
    readTime: "8 min read",
    content: [
      {
        type: "paragraph",
        text: "Serverless functions are genuinely excellent for certain workloads: event-driven processing, infrequent background jobs, lightweight API endpoints that see bursty traffic. They are genuinely poor for others: latency-sensitive APIs serving interactive UIs, long-running data processing, and anything that needs persistent connections like WebSockets.",
      },
      {
        type: "heading2",
        text: "The Cold Start Problem",
      },
      {
        type: "paragraph",
        text: "Cold starts — the latency penalty when a function instance spins up from scratch — remain the primary operational concern with serverless. In AWS Lambda, cold starts range from ~100ms for lightweight Node.js functions to over 1s for JVM-based workloads. For synchronous APIs serving UI interactions, a 1s additional latency on low-traffic requests is often unacceptable.",
      },
      {
        type: "heading2",
        text: "Workload Classification",
      },
      {
        type: "list",
        items: [
          "Good fit: Image processing, email sending, data export jobs",
          "Good fit: Webhook receivers, scheduled batch jobs",
          "Poor fit: Real-time APIs with strict p99 latency requirements",
          "Poor fit: Long-running computations exceeding 15 minutes",
          "Consider containers: High-throughput stateful services",
        ],
      },
      {
        type: "callout",
        text: "Start with containers for APIs you own and control. Use serverless for event-driven glue code that runs infrequently. This default prevents cold-start surprises in production and keeps operational complexity manageable.",
      },
    ],
  },
  {
    id: 8,
    slug: "motion-design-principles-web-interfaces",
    category: "Design",
    title: "Motion Design Principles for Web Interfaces",
    excerpt:
      "How to use easing, staggering, and spatial hierarchy to create animations that feel natural rather than flashy.",
    author: "CoreHives",
    authorInitials: "CoreHives",
    authorRole: "Senior UX Designer",
    authorBio:
      "Aiza is CoreHives' lead UX designer, focused on premium SaaS interfaces and the intersection of motion design and usability.",
    date: "Apr 8, 2025",
    readTime: "5 min read",
    content: [
      {
        type: "paragraph",
        text: "Good motion design is invisible. Users do not notice it — they simply feel that the interface is responsive, natural, and alive. Bad motion design is immediately visible: things zoom in from nowhere, spin for no reason, or animate so slowly that users give up waiting.",
      },
      {
        type: "heading2",
        text: "Easing: The Foundation of Natural Motion",
      },
      {
        type: "paragraph",
        text: "Nothing in nature moves at constant speed. Objects accelerate and decelerate according to physics and intent. Ease-in-out gives motion a natural feel for most transitions. Ease-out (decelerate) is best for elements entering the screen — they arrive with energy and come to rest. Ease-in (accelerate) works for elements leaving — they start slowly and disappear with purpose.",
      },
      {
        type: "heading2",
        text: "Stagger for Visual Hierarchy",
      },
      {
        type: "paragraph",
        text: "When multiple elements animate together, staggering them in sequence (usually 50–80ms apart) creates a sense of hierarchy and guides the eye. Lists, grids, and navigation menus benefit most from stagger. The delay should be proportional to the total number of elements.",
      },
      {
        type: "callout",
        text: "Always implement prefers-reduced-motion: reduce. Users with vestibular disorders can experience nausea from motion. Set all animation durations to 0.01ms when this media query is active.",
      },
      {
        type: "list",
        items: [
          "Entrance animations: ease-out, 200–400ms",
          "Exit animations: ease-in, 150–250ms",
          "State transitions (hover, focus): 150–200ms",
          "Page transitions: 300–500ms with stagger on child elements",
        ],
      },
    ],
  },
  {
    id: 9,
    slug: "edge-rendering-nextjs-complete-guide",
    category: "Web Dev",
    title: "The Complete Guide to Edge Rendering with Next.js",
    excerpt:
      "Edge functions, ISR, and partial hydration — a working mental model for picking the right rendering strategy per route.",
    author: "Sara Malik",
    authorInitials: "SM",
    authorRole: "Lead Frontend Engineer",
    authorBio:
      "Sara leads frontend architecture at CoreHives, specializing in large-scale React applications, performance engineering, and design systems.",
    date: "Apr 1, 2025",
    readTime: "11 min read",
    content: [
      {
        type: "paragraph",
        text: "Next.js 14 and 15 introduced a rendering model so flexible that it creates genuine decision fatigue: SSR, SSG, ISR, Edge SSR, Server Components, Client Components, Partial Prerendering. The good news is that a simple mental model covers 90% of decisions correctly.",
      },
      {
        type: "heading2",
        text: "The Decision Framework",
      },
      {
        type: "paragraph",
        text: "Start with one question: does this route need data that changes per-request? If yes, render at the edge or server. If no, render at build time (SSG) or revalidate on a schedule (ISR). Within server rendering, the choice between edge and Node.js is about cold start tolerance and available Node.js APIs.",
      },
      {
        type: "heading2",
        text: "When Edge Functions Pay Off",
      },
      {
        type: "paragraph",
        text: "Edge functions run in datacenters close to users, reducing geographic latency for dynamic content. They pay off when your user base is geographically distributed and your route is latency-sensitive but also uses per-request data. Marketing pages with personalization, geolocation-based content, and A/B testing are natural fits.",
      },
      {
        type: "list",
        items: [
          "Use SSG: Blog posts, docs, marketing pages without personalization",
          "Use ISR: Pricing pages, product listings that update a few times per day",
          "Use Edge SSR: Personalized pages, geo-targeted content, session-dependent UI",
          "Use Node.js SSR: Routes requiring fs access, Node.js-only packages",
        ],
      },
      {
        type: "callout",
        text: "Partial Prerendering (PPR), available as experimental in Next.js 14+, is the best of both worlds for many routes: the static shell is served instantly from CDN while dynamic slots stream in. It is worth prototyping for routes that mix static layout with personalized content.",
      },
    ],
  },
];

export const FEATURED_POST = ALL_POSTS[0];
export const GRID_POSTS = ALL_POSTS.slice(1);

// Category color map — shared across all blog components
export const CAT_COLORS = {
  "AI & ML":    { text: "#07BEB8", glow: "rgba(7,190,184,0.22)",   bg: "rgba(7,190,184,0.08)",   border: "rgba(7,190,184,0.2)"   },
  "Web Dev":    { text: "#818cf8", glow: "rgba(129,140,248,0.22)",  bg: "rgba(129,140,248,0.08)", border: "rgba(129,140,248,0.2)" },
  "Blockchain": { text: "#f59e0b", glow: "rgba(245,158,11,0.22)",   bg: "rgba(245,158,11,0.08)",  border: "rgba(245,158,11,0.2)"  },
  "Design":     { text: "#ec4899", glow: "rgba(236,72,153,0.22)",   bg: "rgba(236,72,153,0.08)",  border: "rgba(236,72,153,0.2)"  },
  "Mobile":     { text: "#34d399", glow: "rgba(52,211,153,0.22)",   bg: "rgba(52,211,153,0.08)",  border: "rgba(52,211,153,0.2)"  },
  "Branding":   { text: "#f97316", glow: "rgba(249,115,22,0.22)",   bg: "rgba(249,115,22,0.08)",  border: "rgba(249,115,22,0.2)"  },
  "Cloud":      { text: "#60a5fa", glow: "rgba(96,165,250,0.22)",   bg: "rgba(96,165,250,0.08)",  border: "rgba(96,165,250,0.2)"  },
};

export const VISUAL_GRADIENTS = [
  ["#020c1b", "#041f1e"],
  ["#0f0c29", "#041f1e"],
  ["#1a0533", "#041320"],
  ["#1a0a00", "#041f1e"],
  ["#041f1e", "#001833"],
  ["#0c1a00", "#041f1e"],
  ["#1a0020", "#041320"],
  ["#00101a", "#041f1e"],
];
