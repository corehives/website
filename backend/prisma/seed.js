// Seeds the admin user + all three content tables with real CoreHives data.
// Run: npm run db:seed  (node prisma/seed.js)
require("dotenv").config({ path: require("path").join(__dirname, "../../.env") });
const { PrismaClient } = require("@prisma/client");
const bcrypt = require("bcryptjs");

const prisma = new PrismaClient();

// ─── TESTIMONIALS ─────────────────────────────────────────────────────────────
const testimonials = [
  {
    name: "Greg",
    initials: "G",
    role: "Verified Client · United States",
    rating: 5,
    title: "Exceptional Professionalism and High-Quality Digital Solutions!",
    text: "We partnered with Corehives for our web design and development needs, and the experience was flawless. Their team is highly skilled, professional, and deeply committed to client success. They didn't just build a website; they provided a complete branding solution that perfectly aligns with our vision. What stands out most about Corehives is their attention to detail and seamless communication. They hit every milestone on time and were always available to provide technical support and creative insights. If you are looking for a reliable software house that delivers top-tier results, I highly recommend Corehives!",
    sortOrder: 0,
  },
  {
    name: "CMMB IT",
    initials: "CI",
    role: "IT Services · United States",
    rating: 5,
    title: "Issue with PHP Portal",
    text: "We hired this developer to help us fix a number of security issues on our PHP website, and the quality of their work exceeded our expectations. They approached the project with professionalism from start to finish — diagnosing the problems efficiently, explaining the risks in clear terms, and implementing secure, well-structured fixes. Their communication was consistent and transparent, and they demonstrated strong technical expertise throughout the entire process. Thanks to their work, our site is now stable, secure, and performing better than before. Highly recommended for anyone needing dependable and knowledgeable PHP development support.",
    sortOrder: 1,
  },
  {
    name: "Andrew",
    initials: "A",
    role: "Verified Client · Colorado, US",
    rating: 5,
    title: "Professional Team with Great Development and Design Work",
    text: "I had a really good experience working with CoreHives. Their team handled both development and design, and everything felt smooth from start to finish. On the development side, they were very organized and understood the requirements quickly. The final product was clean, functional, and delivered on time without any issues. Communication was always clear, which made the whole process much easier. The design work was just as impressive — they paid attention to detail and created a modern, polished look that matched exactly what I had in mind. They were also open to feedback and made changes quickly when needed. I'd definitely recommend CoreHives if you're looking for both strong development and quality design in one place.",
    sortOrder: 2,
  },
];

// ─── BLOGS ────────────────────────────────────────────────────────────────────
const blogs = [
  {
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
    readTime: "6 min read",
    publishedAt: new Date("2026-06-11"),
    content: [
      { type: "paragraph", text: "When a software project fails, people often blame poor development, missed deadlines, or technical challenges. While these issues can contribute to failure, the real problem often starts much earlier." },
      { type: "paragraph", text: "Many projects face difficulties before development even begins. In our experience, the planning stage is where most costly mistakes are made." },
      { type: "heading2", text: "1. Starting Without Clear Requirements" },
      { type: "paragraph", text: "Many businesses begin a project with a general idea rather than a detailed plan. They know what they want to build but haven't clearly defined how it should work." },
      { type: "paragraph", text: 'Statements like "We need a website" or "We want an app like Uber" sound clear on the surface. However, they leave many important questions unanswered.' },
      { type: "paragraph", text: "Without clear requirements, developers are forced to make assumptions. This often leads to revisions, delays, and additional costs later in the project." },
      { type: "paragraph", text: "Before starting development, businesses should define their goals, target audience, key features, and expected outcomes. A well-planned project always has a stronger chance of success." },
      { type: "quote", text: "The hardest single part of building a software system is deciding precisely what to build.", author: "Fred Brooks, The Mythical Man-Month" },
      { type: "heading2", text: "2. Focusing on Features Instead of Problems" },
      { type: "paragraph", text: "Many projects start with a long list of desired features. Businesses often focus on what they want to include rather than the problem they want to solve." },
      { type: "paragraph", text: "Features such as dashboards, reports, AI tools, and integrations can be valuable. However, not every feature contributes directly to business goals." },
      { type: "paragraph", text: "The most successful software products solve a specific problem effectively. Once the problem is clearly understood, choosing the right features becomes much easier." },
      { type: "heading2", text: "3. Choosing Technology Too Early" },
      { type: "paragraph", text: "It's common for businesses to select technologies before fully understanding project requirements. Decisions are often influenced by trends or recommendations from others." },
      { type: "paragraph", text: "Frameworks like Laravel, React, Vue.js, Flutter, and WordPress all have their strengths. The right choice depends on the project's goals, complexity, budget, and future plans." },
      { type: "paragraph", text: "Technology should support the business strategy rather than define it. Requirements should come first, and technology decisions should follow." },
      { type: "heading2", text: "4. Ignoring Future Growth" },
      { type: "paragraph", text: "Many startups build software based only on their current needs. While this may seem practical, it can create challenges as the business grows." },
      { type: "paragraph", text: "Applications that are not designed for growth may face performance issues, maintenance difficulties, and higher development costs in the future." },
      { type: "paragraph", text: "Planning for scalability does not mean building unnecessary complexity. It means creating a solid foundation that can handle growth when the time comes." },
      { type: "heading2", text: "5. Underestimating User Experience" },
      { type: "paragraph", text: "A product can be technically sound and still struggle to gain users. If people find it difficult to use, they are unlikely to continue using it." },
      { type: "paragraph", text: "Users expect fast loading times, clear navigation, and a smooth experience across devices. Small usability issues can have a significant impact on customer satisfaction." },
      { type: "paragraph", text: "Good user experience is not just about design. It plays a major role in product adoption, retention, and long-term success." },
      { type: "heading2", text: "6. Poor Communication During Development" },
      { type: "paragraph", text: "Software development is most effective when clients and developers work closely together. Clear communication helps prevent misunderstandings and keeps everyone aligned." },
      { type: "paragraph", text: "Projects often run into trouble when feedback is delayed or expectations are not discussed openly. Small issues can quickly become larger problems." },
      { type: "paragraph", text: "Regular meetings, progress updates, and milestone reviews help ensure the project stays on track. Strong communication is often the difference between success and failure." },
      { type: "heading2", text: "Final Thoughts" },
      { type: "paragraph", text: "Successful software projects are built on planning, communication, and clear objectives. Development becomes much easier when everyone understands the goals from the beginning." },
      { type: "paragraph", text: "Many common project failures can be avoided by investing more time in the planning phase. A few extra days of preparation can save weeks of rework later." },
      { type: "callout", text: "At CoreHives, we help businesses turn ideas into practical digital products through thoughtful planning and reliable development practices. Building the right foundation is often the first step toward a successful project." },
    ],
  },
  {
    slug: "why-good-design-is-more-than-aesthetics",
    featured: false,
    category: "Design",
    title: "Why Good Design Is More Than Just Making Things Look Nice",
    excerpt:
      "Many businesses think design is mainly about colors and visual appeal. But good design goes far beyond aesthetics — it shapes how users behave, builds trust, and drives real business results.",
    author: "CoreHives",
    authorInitials: "CH",
    authorRole: "Senior UX Designer",
    authorBio:
      "Aiza is CoreHives' lead UX designer, focused on premium SaaS interfaces and the intersection of motion design and usability.",
    readTime: "5 min read",
    publishedAt: new Date("2026-06-11"),
    content: [
      { type: "paragraph", text: "Many business owners think design is mainly about colors, fonts, and visual appeal. While appearance is important, good design goes far beyond aesthetics." },
      { type: "paragraph", text: "A well-designed website or application helps users find information quickly, complete actions easily, and build trust in your brand." },
      { type: "heading2", text: "First Impressions Matter" },
      { type: "paragraph", text: "Visitors often form an opinion about a business within seconds of landing on a website. A cluttered or outdated design can create doubt before they even read the content." },
      { type: "paragraph", text: "A professional design immediately communicates credibility. It shows that a business cares about quality and pays attention to details." },
      { type: "quote", text: "Design is not just what it looks like and feels like. Design is how it works.", author: "Steve Jobs" },
      { type: "heading2", text: "Design Influences User Behavior" },
      { type: "paragraph", text: "Every design decision affects how users interact with a product. The placement of buttons, navigation menus, and content can guide users toward important actions." },
      { type: "paragraph", text: "When users can easily find what they need, they are more likely to stay longer, engage with the content, and become customers." },
      { type: "callout", text: "Real-world example: When Airbnb redesigned their platform in 2014 with a focus on trust signals, cleaner layouts, and better photography presentation, their booking conversion rate increased significantly. The change wasn't more features — it was better design." },
      { type: "heading2", text: "Simplicity Creates Better Experiences" },
      { type: "paragraph", text: "Many businesses try to include too much information on a single page. As a result, users can become overwhelmed and leave without taking action." },
      { type: "paragraph", text: "Simple layouts help visitors focus on what matters most. Clear messaging and organized content often perform better than complex designs." },
      { type: "heading2", text: "Mobile Users Can't Be Ignored" },
      { type: "paragraph", text: "A large portion of web traffic now comes from mobile devices. If a website is difficult to use on a phone, businesses risk losing potential customers." },
      { type: "paragraph", text: "Responsive design ensures that websites work properly across different screen sizes. A good mobile experience is no longer optional." },
      { type: "heading2", text: "Consistency Builds Trust" },
      { type: "paragraph", text: "Users feel more comfortable when a website maintains a consistent look and feel. Consistent colors, typography, spacing, and layouts create a sense of professionalism." },
      { type: "paragraph", text: "When every page follows the same design language, users can navigate with confidence and focus on their goals." },
      { type: "heading2", text: "Good Design Supports Business Goals" },
      { type: "paragraph", text: "Design should always serve a purpose. Whether the goal is generating leads, increasing sales, or improving customer engagement, design plays an important role in achieving those outcomes." },
      { type: "paragraph", text: "A beautiful website that fails to generate results is not effective design. Success comes from balancing appearance with functionality." },
      { type: "heading2", text: "Investing in Design Saves Time and Money" },
      { type: "paragraph", text: "Poor design often leads to user confusion, lower conversions, and costly redesigns. Businesses may spend more money fixing issues that could have been avoided from the beginning." },
      { type: "paragraph", text: "Investing in thoughtful design early can reduce future problems and create a stronger foundation for growth." },
      { type: "heading2", text: "Final Thoughts" },
      { type: "paragraph", text: "Good design is not about following trends or adding visual effects. It is about creating experiences that help users achieve their goals while supporting business objectives." },
      { type: "callout", text: "At CoreHives, we believe design should combine clarity, usability, and purpose. When design and functionality work together, businesses can create digital products that leave a lasting impression and deliver real results." },
    ],
  },
  {
    slug: "why-most-startup-websites-fail",
    featured: false,
    category: "Design",
    title: "Why Most Start-Up Websites Fail (It’s Not Just the Design)",
    excerpt:
      "Many founders believe strong visuals are enough, but the biggest website failures come from not answering the user's core questions quickly.",
    author: "CoreHives",
    authorInitials: "CH",
    authorRole: "Design Strategist",
    authorBio:
      "CoreHives helps startups build websites that convert by balancing visual polish with clear goals and user-first messaging.",
    readTime: "5 min read",
    publishedAt: new Date("2026-06-16"),
    content: [
      { type: "paragraph", text: "Every business founder wants their website to be attractive, with modern animations, stunning visuals, and branding that stands out. That has become the standard. Yet thousands of startup websites still fail to generate leads, convert visitors, or drive meaningful business growth." },
      { type: "paragraph", text: "The problem isn't the design. The problem is that many websites are built to impress shareholders instead of helping end users achieve their goals." },
      { type: "heading2", text: "A high-performing website answers three questions within seconds" },
      { type: "list", items: ["What does this company do?", "Why should I trust them?", "What should I do next?"] },
      { type: "paragraph", text: "When users can't find those answers quickly, they tend to get bored and leave. The website may be beautiful, but if it does not communicate relevance and a clear next step, it will not perform." },
      { type: "callout", text: "Example: If a startup homepage opens with a portfolio gallery but no clear headline, visitors may not understand the product before scrolling away." },
      { type: "heading2", text: "Design should solve business problems, not just create visual appeal" },
      { type: "paragraph", text: "Every interface, page, and interaction should guide the end user naturally toward the next step. The most successful digital products are built around consumer behavior, not assumptions." },
      { type: "list", items: ["Use a plain statement of what you do in the hero section.", "Show trust quickly with testimonials, logos, or results.", "Make the next action obvious with a strong CTA."] },
      { type: "callout", text: "At CoreHives, we build websites that look modern and perform like a business tool. When design and user goals align, conversion improves without sacrificing style." },
    ],
  },
  {
    slug: "how-to-build-an-mvp-that-everyone-wants",
    featured: false,
    category: "Web Dev",
    title: "How To Build an MVP That Everyone Wants",
    excerpt:
      "An MVP is a strategic validation tool, not a stripped-down product. It helps startups learn quickly and build the right thing first.",
    author: "CoreHives",
    authorInitials: "CH",
    authorRole: "Product Lead",
    authorBio:
      "CoreHives partners with founders to turn early ideas into scalable MVPs through strategic design and agile development.",
    readTime: "6 min read",
    publishedAt: new Date("2026-06-16"),
    content: [
      { type: "paragraph", text: "Launching a startup is exciting, but one of the biggest mistakes founders make is spending months building features nobody asked for." },
      { type: "paragraph", text: "An MVP isn't a 'cheap version' of your product. It's a strategic tool designed to validate your idea with real users before investing heavily in development." },
      { type: "heading2", text: "Step 1: Identify the Core Issue" },
      { type: "paragraph", text: "Focus on a single problem your product solves. Avoid adding unnecessary features during the first phase." },
      { type: "callout", text: "Example: For a remote collaboration tool, the MVP should include scheduling, invites, and one-click joining — not analytics or advanced automation." },
      { type: "heading2", text: "Step 2: Design Your Essential Features" },
      { type: "paragraph", text: "Ask yourself: What is the minimum functionality needed to solve the problem? Which features can wait until later versions? The goal is speed and validation." },
      { type: "heading2", text: "Step 3: Prioritise User Experience" },
      { type: "paragraph", text: "Many startups focus entirely on functionality and ignore usability. A confusing product can fail even when the idea is great. Investing in intuitive UI/UX design early helps users understand and adopt your product faster." },
      { type: "heading2", text: "Step 4: Launch Quickly but Precisely" },
      { type: "paragraph", text: "The sooner you launch, the sooner you collect feedback. Real users provide insights that no brainstorming session can replace." },
      { type: "heading2", text: "Step 5: Data Iteration" },
      { type: "list", items: ["Track user behavior to identify the biggest friction points.", "Use feedback to decide what to build next.", "Improve the product incrementally based on real use."] },
      { type: "paragraph", text: "The most successful startups aren't those that launch perfectly. They're the ones that learn and adapt the fastest." },
      { type: "callout", text: "At CoreHives, we help founders transform ideas into scalable MVPs through strategic design, agile development, and user-centred product thinking." },
    ],
  },
  {
    slug: "ai-is-changing-software-development-but-human-centred-design-matters-more-than-ever",
    featured: false,
    category: "AI & ML",
    title: "AI Is Changing Software Development, but Human-Centred Design Matters More Than Ever",
    excerpt:
      "AI is transforming product creation, but the strongest digital experiences still depend on human-centred design.",
    author: "CoreHives",
    authorInitials: "CH",
    authorRole: "AI Product Designer",
    authorBio:
      "CoreHives combines AI innovation with human-centred design to build products that feel natural and useful.",
    readTime: "6 min read",
    publishedAt: new Date("2026-06-16"),
    content: [
      { type: "paragraph", text: "The way companies create digital products is changing due to artificial intelligence. Businesses are finding new methods to boost productivity and enhance customer experiences, from AI-powered chatbots to automated workflows and sophisticated analytics." },
      { type: "paragraph", text: "However, despite the enthusiasm surrounding AI, one thing is still true: your product is still in use. No matter how sophisticated the technology becomes, consumers demand user-friendly, accessible, and intuitive experiences." },
      { type: "heading2", text: "The future belongs to companies that combine technology and experience" },
      { type: "list", items: ["Intelligent Automation: Reduce repetitive tasks and improve operational efficiency.", "Data-Driven Decision Making: Leverage AI insights to make smarter business decisions.", "Human-Centred Design: Ensure technology feels natural and useful to the people who use it."] },
      { type: "callout", text: "Example: An AI assistant can make recommendations, but if users cannot understand why a suggestion was made, they lose trust instead of gaining value." },
      { type: "heading2", text: "AI should enhance usability, not complicate it" },
      { type: "paragraph", text: "An AI-powered platform with poor usability creates frustration instead of value. A truly successful product makes intelligent technology feel effortless and helpful." },
      { type: "heading2", text: "Keep the human experience at the centre" },
      { type: "list", items: ["Automate repetitive tasks without hiding control from users.", "Use AI insights to support decision-making, not replace it.", "Build interfaces that feel familiar and predictable."] },
      { type: "callout", text: "At CoreHives, we believe AI should improve user experiences rather than make them more difficult. The future is built by combining innovation with thoughtful UX." },
    ],
  },
];

// ─── JOBS ─────────────────────────────────────────────────────────────────────
const jobs = [
  {
    title: "Senior Full-Stack Engineer",
    department: "Engineering",
    location: "Remote",
    type: "FULL_TIME",
    shortDesc:
      "Build scalable, high-performance web applications for enterprise clients across finance, health-tech, and SaaS verticals. You'll own features end-to-end and collaborate with product and design.",
    fullDesc: `We're looking for a Senior Full-Stack Engineer who thrives in a fast-paced, product-driven environment. You'll work across our React/Next.js frontend and Node.js backend, contributing to architecture decisions and mentoring junior engineers.\n\nResponsibilities:\n• Design and ship production-grade features across the full stack\n• Lead code reviews and enforce engineering best practices\n• Collaborate with product managers and designers to shape requirements\n• Optimize for performance, scalability, and reliability\n\nRequirements:\n• 5+ years of production experience with React, TypeScript, and Node.js\n• Solid understanding of databases (PostgreSQL, Redis)\n• Experience with cloud infrastructure (AWS/GCP) and CI/CD pipelines\n• Strong communication skills and a bias for action`,
    requirements: ["5+ yrs React/Node.js", "TypeScript", "PostgreSQL", "AWS"],
  },
  {
    title: "UI/UX Product Designer",
    department: "Design",
    location: "Remote / Hybrid",
    type: "FULL_TIME",
    shortDesc:
      "Craft pixel-perfect, human-centered interfaces for complex enterprise products. You'll drive the design system, run user research, and collaborate daily with engineering.",
    fullDesc: `We need a Product Designer who is equally strong in systems thinking and visual polish. You'll define the design language for our core products, run user research, and ship high-fidelity designs that engineering loves to build.\n\nResponsibilities:\n• Own the product design process from discovery to handoff\n• Build and maintain a scalable design system in Figma\n• Conduct user interviews and synthesize insights into design decisions\n• Work closely with engineering to ensure pixel-perfect implementation\n\nRequirements:\n• 4+ years of product design experience for digital products\n• Expert-level Figma skills\n• Portfolio demonstrating systems thinking and strong visual craft\n• Experience with user research methods`,
    requirements: ["4+ yrs Product Design", "Figma", "Design Systems", "User Research"],
  },
  {
    title: "DevOps & Cloud Engineer",
    department: "Infrastructure",
    location: "Remote",
    type: "FULL_TIME",
    shortDesc:
      "Own our cloud infrastructure, CI/CD pipelines, and observability stack. You'll build for reliability at scale and drive a culture of automation across the engineering team.",
    fullDesc: `We're hiring a DevOps Engineer to own and scale our cloud infrastructure across AWS and GCP. You'll architect CI/CD systems, improve observability, and enable engineering teams to ship faster with confidence.\n\nResponsibilities:\n• Design and manage containerized infrastructure (Kubernetes, Docker)\n• Build and maintain CI/CD pipelines for multiple product teams\n• Implement monitoring, alerting, and incident response processes\n• Optimize infrastructure costs and improve system reliability\n\nRequirements:\n• 4+ years in DevOps/Platform engineering\n• Deep expertise in Kubernetes and Docker\n• Experience with Terraform and infrastructure as code\n• Strong background in monitoring tools (Datadog, Grafana, PagerDuty)`,
    requirements: ["Kubernetes", "Terraform", "AWS / GCP", "CI/CD"],
  },
  {
    title: "AI / ML Research Engineer",
    department: "AI Division",
    location: "Remote",
    type: "FULL_TIME",
    shortDesc:
      "Research, prototype, and productionize machine learning models for our AI-powered product suite. You'll work at the frontier of applied ML and directly shape our AI roadmap.",
    fullDesc: `We're building an AI division and need a Research Engineer who can bridge the gap between research and production. You'll design experiments, fine-tune LLMs, and deploy models at scale for our product suite.\n\nResponsibilities:\n• Research and prototype ML models for product use cases\n• Fine-tune and evaluate large language models (LLMs)\n• Build model serving infrastructure and monitoring pipelines\n• Collaborate with product to identify AI opportunities\n\nRequirements:\n• 3+ years ML engineering experience\n• Proficiency in Python, PyTorch / TensorFlow\n• Experience with LLM fine-tuning and prompt engineering\n• Knowledge of MLOps practices and model deployment`,
    requirements: ["Python", "PyTorch", "LLMs", "MLOps"],
  },
];

async function main() {
  console.log("🌱 Seeding database...");

  // ─── Admin user (upsert so re-seeding never duplicates) ───────────────────
  const adminUsername = process.env.ADMIN_USERNAME || "corehivesadmin";
  const adminPassword = process.env.ADMIN_PASSWORD || "password";
  const passwordHash = await bcrypt.hash(adminPassword, 10);

  await prisma.user.upsert({
    where: { username: adminUsername },
    update: { password: passwordHash, role: "admin" },
    create: {
      username: adminUsername,
      password: passwordHash,
      name: "CoreHives Admin",
      role: "admin",
    },
  });
  console.log(`✓ Seeded admin user (${adminUsername})`);

  // Clear existing content (idempotent re-seed)
  await prisma.testimonial.deleteMany();
  await prisma.blog.deleteMany();
  await prisma.job.deleteMany();

  await prisma.testimonial.createMany({ data: testimonials });
  console.log(`✓ Seeded ${testimonials.length} testimonials`);

  // createMany does not support Json on some connectors reliably — create one-by-one
  for (const blog of blogs) {
    await prisma.blog.create({ data: blog });
  }
  console.log(`✓ Seeded ${blogs.length} blogs`);

  for (const job of jobs) {
    await prisma.job.create({ data: job });
  }
  console.log(`✓ Seeded ${jobs.length} jobs`);

  console.log("✅ Seeding complete.");
}

main()
  .catch((e) => {
    console.error("❌ Seed failed:", e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
