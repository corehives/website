// Single source of truth for all blog posts
// Used by: FeaturedPost, BlogGrid, BlogDetail, RelatedBlogs

export const ALL_POSTS = [
  {
    id: 0,
    slug: "why-software-projects-fail-before-development",
    featured: true,
    category: "Development",
    title: "Why Most Software Projects Fail Before Development Even Begins",
    excerpt:
      "When a software project fails, people often blame poor development, missed deadlines, or technical challenges. But the real problem almost always starts much earlier — in the planning stage.",
    author: "CoreHives",
    authorInitials: "CH",
    authorRole: "CoreHives Team",
    authorBio:
      "CoreHives is a full-service digital agency specializing in AI, web, mobile, and branding solutions for enterprise and startup clients worldwide.",
    date: "June 11, 2026",
    readTime: "6 min read",
    content: [
      {
        type: "paragraph",
        text: "When a software project fails, people often blame poor development, missed deadlines, or technical challenges. While these issues can contribute to failure, the real problem often starts much earlier.",
      },
      {
        type: "paragraph",
        text: "Many projects face difficulties before development even begins. In our experience, the planning stage is where most costly mistakes are made.",
      },
      {
        type: "heading2",
        text: "1. Starting Without Clear Requirements",
      },
      {
        type: "paragraph",
        text: "Many businesses begin a project with a general idea rather than a detailed plan. They know what they want to build but haven't clearly defined how it should work.",
      },
      {
        type: "paragraph",
        text: 'Statements like "We need a website" or "We want an app like Uber" sound clear on the surface. However, they leave many important questions unanswered.',
      },
      {
        type: "paragraph",
        text: "Without clear requirements, developers are forced to make assumptions. This often leads to revisions, delays, and additional costs later in the project.",
      },
      {
        type: "paragraph",
        text: "Before starting development, businesses should define their goals, target audience, key features, and expected outcomes. A well-planned project always has a stronger chance of success.",
      },
      {
        type: "quote",
        text: "The hardest single part of building a software system is deciding precisely what to build.",
        author: "Fred Brooks, The Mythical Man-Month",
      },
      {
        type: "heading2",
        text: "2. Focusing on Features Instead of Problems",
      },
      {
        type: "paragraph",
        text: "Many projects start with a long list of desired features. Businesses often focus on what they want to include rather than the problem they want to solve.",
      },
      {
        type: "paragraph",
        text: "Features such as dashboards, reports, AI tools, and integrations can be valuable. However, not every feature contributes directly to business goals.",
      },
      {
        type: "paragraph",
        text: "The most successful software products solve a specific problem effectively. Once the problem is clearly understood, choosing the right features becomes much easier.",
      },
      {
        type: "heading2",
        text: "3. Choosing Technology Too Early",
      },
      {
        type: "paragraph",
        text: "It's common for businesses to select technologies before fully understanding project requirements. Decisions are often influenced by trends or recommendations from others.",
      },
      {
        type: "paragraph",
        text: "Frameworks like Laravel, React, Vue.js, Flutter, and WordPress all have their strengths. The right choice depends on the project's goals, complexity, budget, and future plans.",
      },
      {
        type: "paragraph",
        text: "Technology should support the business strategy rather than define it. Requirements should come first, and technology decisions should follow.",
      },
      {
        type: "heading2",
        text: "4. Ignoring Future Growth",
      },
      {
        type: "paragraph",
        text: "Many startups build software based only on their current needs. While this may seem practical, it can create challenges as the business grows.",
      },
      {
        type: "paragraph",
        text: "Applications that are not designed for growth may face performance issues, maintenance difficulties, and higher development costs in the future.",
      },
      {
        type: "paragraph",
        text: "Planning for scalability does not mean building unnecessary complexity. It means creating a solid foundation that can handle growth when the time comes.",
      },
      {
        type: "heading2",
        text: "5. Underestimating User Experience",
      },
      {
        type: "paragraph",
        text: "A product can be technically sound and still struggle to gain users. If people find it difficult to use, they are unlikely to continue using it.",
      },
      {
        type: "paragraph",
        text: "Users expect fast loading times, clear navigation, and a smooth experience across devices. Small usability issues can have a significant impact on customer satisfaction.",
      },
      {
        type: "paragraph",
        text: "Good user experience is not just about design. It plays a major role in product adoption, retention, and long-term success.",
      },
      {
        type: "heading2",
        text: "6. Poor Communication During Development",
      },
      {
        type: "paragraph",
        text: "Software development is most effective when clients and developers work closely together. Clear communication helps prevent misunderstandings and keeps everyone aligned.",
      },
      {
        type: "paragraph",
        text: "Projects often run into trouble when feedback is delayed or expectations are not discussed openly. Small issues can quickly become larger problems.",
      },
      {
        type: "paragraph",
        text: "Regular meetings, progress updates, and milestone reviews help ensure the project stays on track. Strong communication is often the difference between success and failure.",
      },
      {
        type: "heading2",
        text: "Final Thoughts",
      },
      {
        type: "paragraph",
        text: "Successful software projects are built on planning, communication, and clear objectives. Development becomes much easier when everyone understands the goals from the beginning.",
      },
      {
        type: "paragraph",
        text: "Many common project failures can be avoided by investing more time in the planning phase. A few extra days of preparation can save weeks of rework later.",
      },
      {
        type: "callout",
        text: "At CoreHives, we help businesses turn ideas into practical digital products through thoughtful planning and reliable development practices. Building the right foundation is often the first step toward a successful project.",
      },
    ],
  },
  {
    id: 1,
    slug: "why-good-design-is-more-than-aesthetics",
    category: "Design",
    title: "Why Good Design Is More Than Just Making Things Look Nice",
    excerpt:
      "Many businesses think design is mainly about colors and visual appeal. But good design goes far beyond aesthetics — it shapes how users behave, builds trust, and drives real business results.",
    author: "CoreHives",
    authorInitials: "CH",
    authorRole: "Senior UX Designer",
    authorBio:
      "Aiza is CoreHives' lead UX designer, focused on premium SaaS interfaces and the intersection of motion design and usability.",
    date: "June 11, 2026",
    readTime: "5 min read",
    content: [
      {
        type: "paragraph",
        text: "Many business owners think design is mainly about colors, fonts, and visual appeal. While appearance is important, good design goes far beyond aesthetics.",
      },
      {
        type: "paragraph",
        text: "A well-designed website or application helps users find information quickly, complete actions easily, and build trust in your brand.",
      },
      {
        type: "heading2",
        text: "First Impressions Matter",
      },
      {
        type: "paragraph",
        text: "Visitors often form an opinion about a business within seconds of landing on a website. A cluttered or outdated design can create doubt before they even read the content.",
      },
      {
        type: "paragraph",
        text: "A professional design immediately communicates credibility. It shows that a business cares about quality and pays attention to details.",
      },
      {
        type: "quote",
        text: "Design is not just what it looks like and feels like. Design is how it works.",
        author: "Steve Jobs",
      },
      {
        type: "heading2",
        text: "Design Influences User Behavior",
      },
      {
        type: "paragraph",
        text: "Every design decision affects how users interact with a product. The placement of buttons, navigation menus, and content can guide users toward important actions.",
      },
      {
        type: "paragraph",
        text: "When users can easily find what they need, they are more likely to stay longer, engage with the content, and become customers.",
      },
      {
        type: "callout",
        text: "Real-world example: When Airbnb redesigned their platform in 2014 with a focus on trust signals, cleaner layouts, and better photography presentation, their booking conversion rate increased significantly. The change wasn't more features — it was better design.",
      },
      {
        type: "heading2",
        text: "Simplicity Creates Better Experiences",
      },
      {
        type: "paragraph",
        text: "Many businesses try to include too much information on a single page. As a result, users can become overwhelmed and leave without taking action.",
      },
      {
        type: "paragraph",
        text: "Simple layouts help visitors focus on what matters most. Clear messaging and organized content often perform better than complex designs.",
      },
      {
        type: "heading2",
        text: "Mobile Users Can't Be Ignored",
      },
      {
        type: "paragraph",
        text: "A large portion of web traffic now comes from mobile devices. If a website is difficult to use on a phone, businesses risk losing potential customers.",
      },
      {
        type: "paragraph",
        text: "Responsive design ensures that websites work properly across different screen sizes. A good mobile experience is no longer optional.",
      },
      {
        type: "heading2",
        text: "Consistency Builds Trust",
      },
      {
        type: "paragraph",
        text: "Users feel more comfortable when a website maintains a consistent look and feel. Consistent colors, typography, spacing, and layouts create a sense of professionalism.",
      },
      {
        type: "paragraph",
        text: "When every page follows the same design language, users can navigate with confidence and focus on their goals.",
      },
      {
        type: "heading2",
        text: "Good Design Supports Business Goals",
      },
      {
        type: "paragraph",
        text: "Design should always serve a purpose. Whether the goal is generating leads, increasing sales, or improving customer engagement, design plays an important role in achieving those outcomes.",
      },
      {
        type: "paragraph",
        text: "A beautiful website that fails to generate results is not effective design. Success comes from balancing appearance with functionality.",
      },
      {
        type: "heading2",
        text: "Investing in Design Saves Time and Money",
      },
      {
        type: "paragraph",
        text: "Poor design often leads to user confusion, lower conversions, and costly redesigns. Businesses may spend more money fixing issues that could have been avoided from the beginning.",
      },
      {
        type: "paragraph",
        text: "Investing in thoughtful design early can reduce future problems and create a stronger foundation for growth.",
      },
      {
        type: "heading2",
        text: "Final Thoughts",
      },
      {
        type: "paragraph",
        text: "Good design is not about following trends or adding visual effects. It is about creating experiences that help users achieve their goals while supporting business objectives.",
      },
      {
        type: "callout",
        text: "At CoreHives, we believe design should combine clarity, usability, and purpose. When design and functionality work together, businesses can create digital products that leave a lasting impression and deliver real results.",
      },
    ],
  },
//   {
//     id: 2,
//     slug: "smart-contracts-enterprise-patterns-pitfalls",
//     category: "Blockchain",
//     title: "Smart Contracts in the Enterprise: Patterns and Pitfalls",
//     excerpt:
//       "Real-world lessons from deploying on-chain business logic for Fortune 500 clients — from gas optimisation to upgradeability.",
//     author: "CoreHives",
//     authorInitials: "CH",
//     authorRole: "Blockchain Architect",
//     authorBio:
//       "Omar leads blockchain solutions at CoreHives, with hands-on experience deploying smart contracts for enterprise clients across finance, supply chain, and digital identity.",
//     date: "May 15, 2025",
//     readTime: "9 min read",
//     content: [
//       {
//         type: "paragraph",
//         text: "Smart contracts were sold to enterprises as self-executing agreements that eliminate the need for intermediaries. The reality is more nuanced: they are code running on an immutable shared database, with all the implications that entails — bugs cannot be patched without a migration, state is visible to all participants, and every computation has a non-trivial cost.",
//       },
//       {
//         type: "heading2",
//         text: "The Upgradeability Problem",
//       },
//       {
//         type: "paragraph",
//         text: "The most common mistake we see enterprise teams make is deploying contracts without an upgrade path. The immutability of deployed code is a feature for trust, but a liability for software that needs to evolve. The proxy pattern — where a thin proxy contract delegates calls to an implementation contract that can be swapped — is now standard, but it adds complexity that must be understood before it is adopted.",
//       },
//       {
//         type: "callout",
//         text: "Use OpenZeppelin's Transparent Proxy or UUPS pattern for any contract managing significant value or requiring long-term maintenance. Never deploy business logic to a non-upgradeable contract in production.",
//       },
//       {
//         type: "heading2",
//         text: "Gas Optimisation in Practice",
//       },
//       {
//         type: "paragraph",
//         text: "Gas costs are not just a deployment concern — they affect user experience in real time. A poorly written contract can make a simple operation cost 10x what it should. The biggest wins usually come from storage layout optimization, avoiding on-chain computation that can be done off-chain, and using events instead of storage for data that only needs to be queried.",
//       },
//       {
//         type: "list",
//         items: [
//           "Pack struct fields to minimize storage slots used",
//           "Use mappings over arrays for frequent single-key lookups",
//           "Emit events instead of writing to storage for audit trails",
//           "Batch operations to amortize base transaction costs",
//           "Use calldata instead of memory for read-only function parameters",
//         ],
//       },
//       {
//         type: "heading2",
//         text: "Security Patterns Worth Knowing",
//       },
//       {
//         type: "paragraph",
//         text: "Re-entrancy, integer overflow, and access control failures remain the top three smart contract vulnerability classes. The checks-effects-interactions pattern, OpenZeppelin's ReentrancyGuard, and role-based access control (AccessControl) address the majority of surface area. Start every new contract by auditing these three dimensions before you write business logic.",
//       },
//     ],
//   },
//   {
//     id: 3,
//     slug: "micro-frontend-architectures-that-scale",
//     category: "Web Dev",
//     title: "Building Micro-Frontend Architectures That Actually Scale",
//     excerpt:
//       "A practical guide to splitting monolithic frontends into independently deployable modules without sacrificing developer experience or runtime performance.",
//     author: "CoreHives",
//     authorInitials: "CH",
//     authorRole: "Lead Frontend Engineer",
//     authorBio:
//       "Sara leads frontend architecture at CoreHives, specializing in large-scale React applications, performance engineering, and design systems.",
//     date: "May 20, 2025",
//     readTime: "6 min read",
//     content: [
//       {
//         type: "paragraph",
//         text: "Micro-frontends promised the same benefits for frontend code that microservices delivered for backends: independent deployability, team autonomy, and the ability to evolve parts of a large UI without touching everything. In practice, many teams that adopt micro-frontends find themselves managing significantly more complexity without a commensurate gain in speed or quality.",
//       },
//       {
//         type: "heading2",
//         text: "The Core Problem with Monolithic Frontends",
//       },
//       {
//         type: "paragraph",
//         text: "Large frontend codebases accumulate drag over time. Build times slow. A change to a shared component requires regression testing across dozens of features. Teams step on each other's work. Deployments batch unrelated changes together, making rollbacks risky.",
//       },
//       {
//         type: "paragraph",
//         text: "Micro-frontends attack these problems by defining clear ownership boundaries. Each team owns a slice of the UI end-to-end: the component library, the data layer, the deployment pipeline. They ship independently, on their own schedule.",
//       },
//       {
//         type: "heading2",
//         text: "Module Federation: The Practical Path",
//       },
//       {
//         type: "paragraph",
//         text: "Webpack's Module Federation (and its Vite counterpart) is the most practical route to micro-frontends for teams already on a React/Vue/Angular stack. It allows one application to expose components that another application consumes at runtime — no iframes, no separate routing layers, no complex shell application required for simple cases.",
//       },
//       {
//         type: "code",
//         language: "js",
//         code: `// vite.config.ts (host app)
// federation({
//   name: 'host',
//   remotes: {
//     dashboard: 'http://localhost:3001/assets/remoteEntry.js',
//     analytics: 'http://localhost:3002/assets/remoteEntry.js',
//   },
//   shared: ['react', 'react-dom'],
// })`,
//       },
//       {
//         type: "heading2",
//         text: "The Shared State Problem",
//       },
//       {
//         type: "paragraph",
//         text: "The hardest problem in micro-frontend architectures is not the initial split — it is shared state. User authentication state, shopping cart contents, feature flags, and notification counts need to be accessible across all micro-frontends. Naively duplicating this state leads to inconsistency; sharing it naively creates coupling.",
//       },
//       {
//         type: "list",
//         items: [
//           "Use a shared event bus for cross-module communication",
//           "Store global state in a dedicated shell application",
//           "Use URL and browser storage as the source of truth for simple shared state",
//           "Treat authentication as a service, not a module concern",
//         ],
//       },
//       {
//         type: "callout",
//         text: "Teams that succeed with micro-frontends treat them as an organizational solution first, a technical one second. The split should follow team boundaries, not arbitrary technical seams.",
//       },
//     ],
//   },
//   {
//     id: 4,
//     slug: "react-native-vs-flutter-2025",
//     category: "Mobile",
//     title: "React Native vs Flutter in 2025: An Honest Comparison",
//     excerpt:
//       "Two years of shipping production apps on both frameworks — performance benchmarks, DX trade-offs, and when to choose what.",
//     author: "CoreHives",
//     authorInitials: "CH",
//     authorRole: "Mobile Lead",
//     authorBio:
//       "Hamza leads mobile development at CoreHives, having shipped over 20 production apps across React Native and Flutter for clients in fintech, healthcare, and e-commerce.",
//     date: "May 5, 2025",
//     readTime: "7 min read",
//     content: [
//       {
//         type: "paragraph",
//         text: "For the last two years, CoreHives has shipped production apps on both React Native and Flutter. Our client mix spans fintech, e-commerce, and healthcare — each with different performance requirements, team compositions, and timelines. This is our honest assessment of where each framework wins and loses in 2025.",
//       },
//       {
//         type: "heading2",
//         text: "Performance: Flutter Wins on Raw Metrics",
//       },
//       {
//         type: "paragraph",
//         text: "Flutter's rendering engine (Impeller, now the default) bypasses the OS UI layer entirely, giving it consistent 120fps rendering on capable hardware. React Native's New Architecture (Fabric + JSI) eliminated the async bridge bottleneck, bringing its performance meaningfully closer to Flutter — but not identical, particularly on animation-heavy UIs.",
//       },
//       {
//         type: "heading2",
//         text: "Developer Experience: React Native for Web Teams",
//       },
//       {
//         type: "paragraph",
//         text: "If your team writes React for the web, React Native is a shorter ramp. JSX, hooks, and TypeScript carry over directly. The mental model of components, state, and props is identical. Flutter requires learning Dart and a different widget composition model that, while elegant, is genuinely unfamiliar to web developers.",
//       },
//       {
//         type: "heading2",
//         text: "When to Choose Each",
//       },
//       {
//         type: "list",
//         items: [
//           "Choose Flutter: Animation-heavy apps, games, highly custom UI components",
//           "Choose React Native: Team with existing React experience",
//           "Choose Flutter: Enterprise apps requiring consistent rendering across OS versions",
//           "Choose React Native: Shared logic with a Next.js or Expo web app",
//           "Either framework: Standard CRUD apps with moderate UI complexity",
//         ],
//       },
//       {
//         type: "callout",
//         text: "The best framework is the one your team ships fastest with. If your team writes React daily, React Native will ship first. If you have no frontend bias, Flutter's rendering consistency is worth the Dart learning curve.",
//       },
//     ],
//   },
//   {
//     id: 5,
//     slug: "rag-vs-fine-tuning-llm-strategy",
//     category: "AI & ML",
//     title: "RAG vs Fine-Tuning: Choosing the Right LLM Strategy",
//     excerpt:
//       "Retrieval-augmented generation and fine-tuning solve different problems. Here is a decision framework built from hands-on production deployments.",
//     author: "CoreHives",
//     authorInitials: "CH",
//     authorRole: "AI Engineer",
//     authorBio:
//       "Emaad leads AI product development at CoreHives, specializing in LLM integration, RAG pipelines, and enterprise AI deployment at scale.",
//     date: "Apr 29, 2025",
//     readTime: "10 min read",
//     content: [
//       {
//         type: "paragraph",
//         text: "Organizations exploring LLM-powered products quickly encounter a fork: should we fine-tune a model on our data, or build a retrieval system that feeds context to a general model? The answer depends on what problem you are actually solving — and many teams choose the wrong option because they conflate capability with knowledge.",
//       },
//       {
//         type: "heading2",
//         text: "The Core Distinction",
//       },
//       {
//         type: "paragraph",
//         text: "Fine-tuning changes how a model behaves — its style, its format preferences, its domain-specific reasoning patterns. RAG changes what a model knows — by providing relevant information at inference time. These are different levers that address different failure modes.",
//       },
//       {
//         type: "callout",
//         text: "If your model gives wrong answers because it lacks current or proprietary information, use RAG. If it gives correct information in the wrong format or style, consider fine-tuning. Most production problems are the former.",
//       },
//       {
//         type: "heading2",
//         text: "When RAG Wins",
//       },
//       {
//         type: "paragraph",
//         text: "RAG is the right default for most production use cases. It is cheaper to update (add documents, not retrain), more transparent (you can inspect what context was retrieved), and works immediately without training infrastructure.",
//       },
//       {
//         type: "list",
//         items: [
//           "Knowledge cutoff problems: Model lacks recent or proprietary information",
//           "Document QA: Users ask questions about a specific corpus",
//           "Customer support: Answers must reference your product documentation",
//           "Dynamic knowledge: Your information changes frequently",
//         ],
//       },
//       {
//         type: "heading2",
//         text: "When Fine-Tuning Wins",
//       },
//       {
//         type: "paragraph",
//         text: "Fine-tuning is worth the investment when you need consistent output format, domain-specific reasoning that cannot be prompted reliably, or latency savings from shorter system prompts. Legal document analysis, medical coding, and specialized technical domains are good candidates.",
//       },
//     ],
//   },
//   {
//     id: 6,
//     slug: "building-digital-brand-identity-first-principles",
//     category: "Branding",
//     title: "Building a Digital Brand Identity from First Principles",
//     excerpt:
//       "Logo, colour, motion, tone — how CoreHives approaches brand systems that remain coherent across every touchpoint at any scale.",
//     author: "CoreHives",
//     authorInitials: "CH",
//     authorRole: "Brand Strategist",
//     authorBio:
//       "Nida leads brand and visual identity at CoreHives, working with startups and enterprises to build design systems that scale from day one.",
//     date: "Apr 22, 2025",
//     readTime: "6 min read",
//     content: [
//       {
//         type: "paragraph",
//         text: "A brand is not a logo. It is the sum of every interaction a person has with your product — the color of your emails, the tone of your error messages, the way your loading animation moves. Designing a brand identity that scales means making decisions at the system level, not the asset level.",
//       },
//       {
//         type: "heading2",
//         text: "Start with Perception, Not Aesthetics",
//       },
//       {
//         type: "paragraph",
//         text: "Before opening Figma, we run a brand perception workshop with every new client. The core question: when a user encounters your product, what three words should come to mind? Premium, approachable, technical? Bold, minimal, authoritative? These three adjectives become the design brief — every visual decision is filtered through them.",
//       },
//       {
//         type: "heading2",
//         text: "The Color System",
//       },
//       {
//         type: "paragraph",
//         text: "A digital brand color system needs four tiers: primary (brand recognition), accent (interactive states), surface (backgrounds and cards), and semantic (success, warning, error). Most brand guides only define primary and accent, leaving teams to improvise surface and semantic colors — which is where inconsistency creeps in.",
//       },
//       {
//         type: "heading2",
//         text: "Motion as Brand Language",
//       },
//       {
//         type: "paragraph",
//         text: "Motion design is the most underinvested dimension of digital brand identity. How elements enter the screen, how transitions feel, how interactions respond — these create an emotional signature that users recognize subconsciously. A brand that uses bouncy, elastic animations feels different from one that uses precise, linear ones, even if every static asset is identical.",
//       },
//       {
//         type: "callout",
//         text: "Codify motion in a token system alongside color and typography. Define easing curves, duration scales, and animation principles the same way you define a color palette — before any component is built.",
//       },
//     ],
//   },
//   {
//     id: 7,
//     slug: "serverless-architecture-when-it-helps-hurts",
//     category: "Cloud",
//     title: "Serverless Architecture: When It Helps and When It Hurts",
//     excerpt:
//       "A candid look at the cold-start problem, vendor lock-in, and the classes of workloads where serverless genuinely outperforms containers.",
//     author: "CoreHives",
//     authorInitials: "CH",
//     authorRole: "Cloud Architect",
//     authorBio:
//       "Zain architects cloud infrastructure at CoreHives, specializing in serverless patterns, container orchestration, and cost optimization at scale.",
//     date: "Apr 16, 2025",
//     readTime: "8 min read",
//     content: [
//       {
//         type: "paragraph",
//         text: "Serverless functions are genuinely excellent for certain workloads: event-driven processing, infrequent background jobs, lightweight API endpoints that see bursty traffic. They are genuinely poor for others: latency-sensitive APIs serving interactive UIs, long-running data processing, and anything that needs persistent connections like WebSockets.",
//       },
//       {
//         type: "heading2",
//         text: "The Cold Start Problem",
//       },
//       {
//         type: "paragraph",
//         text: "Cold starts — the latency penalty when a function instance spins up from scratch — remain the primary operational concern with serverless. In AWS Lambda, cold starts range from ~100ms for lightweight Node.js functions to over 1s for JVM-based workloads. For synchronous APIs serving UI interactions, a 1s additional latency on low-traffic requests is often unacceptable.",
//       },
//       {
//         type: "heading2",
//         text: "Workload Classification",
//       },
//       {
//         type: "list",
//         items: [
//           "Good fit: Image processing, email sending, data export jobs",
//           "Good fit: Webhook receivers, scheduled batch jobs",
//           "Poor fit: Real-time APIs with strict p99 latency requirements",
//           "Poor fit: Long-running computations exceeding 15 minutes",
//           "Consider containers: High-throughput stateful services",
//         ],
//       },
//       {
//         type: "callout",
//         text: "Start with containers for APIs you own and control. Use serverless for event-driven glue code that runs infrequently. This default prevents cold-start surprises in production and keeps operational complexity manageable.",
//       },
//     ],
//   },
//   {
//     id: 8,
//     slug: "motion-design-principles-web-interfaces",
//     category: "Design",
//     title: "Motion Design Principles for Web Interfaces",
//     excerpt:
//       "How to use easing, staggering, and spatial hierarchy to create animations that feel natural rather than flashy.",
//     author: "CoreHives",
//     authorInitials: "CoreHives",
//     authorRole: "Senior UX Designer",
//     authorBio:
//       "Aiza is CoreHives' lead UX designer, focused on premium SaaS interfaces and the intersection of motion design and usability.",
//     date: "Apr 8, 2025",
//     readTime: "5 min read",
//     content: [
//       {
//         type: "paragraph",
//         text: "Good motion design is invisible. Users do not notice it — they simply feel that the interface is responsive, natural, and alive. Bad motion design is immediately visible: things zoom in from nowhere, spin for no reason, or animate so slowly that users give up waiting.",
//       },
//       {
//         type: "heading2",
//         text: "Easing: The Foundation of Natural Motion",
//       },
//       {
//         type: "paragraph",
//         text: "Nothing in nature moves at constant speed. Objects accelerate and decelerate according to physics and intent. Ease-in-out gives motion a natural feel for most transitions. Ease-out (decelerate) is best for elements entering the screen — they arrive with energy and come to rest. Ease-in (accelerate) works for elements leaving — they start slowly and disappear with purpose.",
//       },
//       {
//         type: "heading2",
//         text: "Stagger for Visual Hierarchy",
//       },
//       {
//         type: "paragraph",
//         text: "When multiple elements animate together, staggering them in sequence (usually 50–80ms apart) creates a sense of hierarchy and guides the eye. Lists, grids, and navigation menus benefit most from stagger. The delay should be proportional to the total number of elements.",
//       },
//       {
//         type: "callout",
//         text: "Always implement prefers-reduced-motion: reduce. Users with vestibular disorders can experience nausea from motion. Set all animation durations to 0.01ms when this media query is active.",
//       },
//       {
//         type: "list",
//         items: [
//           "Entrance animations: ease-out, 200–400ms",
//           "Exit animations: ease-in, 150–250ms",
//           "State transitions (hover, focus): 150–200ms",
//           "Page transitions: 300–500ms with stagger on child elements",
//         ],
//       },
//     ],
//   },
//   {
//     id: 9,
//     slug: "edge-rendering-nextjs-complete-guide",
//     category: "Web Dev",
//     title: "The Complete Guide to Edge Rendering with Next.js",
//     excerpt:
//       "Edge functions, ISR, and partial hydration — a working mental model for picking the right rendering strategy per route.",
//     author: "Sara Malik",
//     authorInitials: "SM",
//     authorRole: "Lead Frontend Engineer",
//     authorBio:
//       "Sara leads frontend architecture at CoreHives, specializing in large-scale React applications, performance engineering, and design systems.",
//     date: "Apr 1, 2025",
//     readTime: "11 min read",
//     content: [
//       {
//         type: "paragraph",
//         text: "Next.js 14 and 15 introduced a rendering model so flexible that it creates genuine decision fatigue: SSR, SSG, ISR, Edge SSR, Server Components, Client Components, Partial Prerendering. The good news is that a simple mental model covers 90% of decisions correctly.",
//       },
//       {
//         type: "heading2",
//         text: "The Decision Framework",
//       },
//       {
//         type: "paragraph",
//         text: "Start with one question: does this route need data that changes per-request? If yes, render at the edge or server. If no, render at build time (SSG) or revalidate on a schedule (ISR). Within server rendering, the choice between edge and Node.js is about cold start tolerance and available Node.js APIs.",
//       },
//       {
//         type: "heading2",
//         text: "When Edge Functions Pay Off",
//       },
//       {
//         type: "paragraph",
//         text: "Edge functions run in datacenters close to users, reducing geographic latency for dynamic content. They pay off when your user base is geographically distributed and your route is latency-sensitive but also uses per-request data. Marketing pages with personalization, geolocation-based content, and A/B testing are natural fits.",
//       },
//       {
//         type: "list",
//         items: [
//           "Use SSG: Blog posts, docs, marketing pages without personalization",
//           "Use ISR: Pricing pages, product listings that update a few times per day",
//           "Use Edge SSR: Personalized pages, geo-targeted content, session-dependent UI",
//           "Use Node.js SSR: Routes requiring fs access, Node.js-only packages",
//         ],
//       },
//       {
//         type: "callout",
//         text: "Partial Prerendering (PPR), available as experimental in Next.js 14+, is the best of both worlds for many routes: the static shell is served instantly from CDN while dynamic slots stream in. It is worth prototyping for routes that mix static layout with personalized content.",
//       },
//     ],
//   },
];

export const FEATURED_POST = ALL_POSTS[0];
export const GRID_POSTS = ALL_POSTS.slice(1);

// Category color map — shared across all blog components
export const CAT_COLORS = {
  "AI & ML": { text: "#07BEB8", glow: "rgba(7,190,184,0.22)", bg: "rgba(7,190,184,0.08)", border: "rgba(7,190,184,0.2)" },
  "Web Dev": { text: "#818cf8", glow: "rgba(129,140,248,0.22)", bg: "rgba(129,140,248,0.08)", border: "rgba(129,140,248,0.2)" },
  "Blockchain": { text: "#f59e0b", glow: "rgba(245,158,11,0.22)", bg: "rgba(245,158,11,0.08)", border: "rgba(245,158,11,0.2)" },
  "Design": { text: "#ec4899", glow: "rgba(236,72,153,0.22)", bg: "rgba(236,72,153,0.08)", border: "rgba(236,72,153,0.2)" },
  "Mobile": { text: "#34d399", glow: "rgba(52,211,153,0.22)", bg: "rgba(52,211,153,0.08)", border: "rgba(52,211,153,0.2)" },
  "Branding": { text: "#f97316", glow: "rgba(249,115,22,0.22)", bg: "rgba(249,115,22,0.08)", border: "rgba(249,115,22,0.2)" },
  "Cloud": { text: "#60a5fa", glow: "rgba(96,165,250,0.22)", bg: "rgba(96,165,250,0.08)", border: "rgba(96,165,250,0.2)" },
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
