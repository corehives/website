import ProductPageTemplate from "../../components/shared/ProductPageTemplate";
import overviewImg from "../../assets/web-cover.jpg";
import {
  BarChart2, PieChart, TrendingUp, Bell, Database,
  Layout, Zap, Globe, Shield,
} from "lucide-react";
import {
  FaPython, FaAws, FaDocker,
} from "react-icons/fa";
import {
  SiApachekafka, SiClickhouse, SiGrafana, SiTensorflow,
  SiPostgresql, SiKubernetes,
} from "react-icons/si";

const data = {
  banner: {
    badge: "CoreHives Product",
    title: "CoreHive Analytics",
    titleAccent: "Turn Data Into Decisions",
    subtitle:
      "A real-time business intelligence platform that connects every data source, surfaces actionable insights, and puts the right metrics in front of the right people.",
  },
  overview: {
    image: overviewImg,
    accentHeading: "One Platform",
    heading: "for Every Business Intelligence Need",
    paragraphs: [
      "CoreHive Analytics eliminates the gap between raw data and business decisions. Connect databases, SaaS tools, and third-party APIs in minutes, then build dashboards that refresh in real time and speak the language your stakeholders actually use.",
      "Whether your analysts need granular SQL-level access or your executives need a one-screen weekly summary, CoreHive Analytics scales to both audiences from the same unified data layer, no duplicate reports, no stale exports.",
    ],
  },
  features: [
    { Icon: Layout, title: "Real-Time Dashboards", description: "Live dashboards with sub-second refresh rates, drill-down capabilities, and cross-filter interactions across all your KPIs." },
    { Icon: BarChart2, title: "Data Visualisation", description: "50+ chart types including heatmaps, sankey flows, geospatial maps, and funnel charts, all drag-and-drop configurable." },
    { Icon: TrendingUp, title: "Predictive Analytics", description: "Built-in ML models for churn prediction, demand forecasting, and anomaly detection that train on your own data." },
    { Icon: PieChart, title: "Custom Reports", description: "Schedule pixel-perfect PDF and Excel reports to be delivered to any stakeholder inbox on your chosen cadence." },
    { Icon: Database, title: "Multi-Source Integration", description: "Native connectors for PostgreSQL, MySQL, BigQuery, Snowflake, Stripe, Salesforce, Google Analytics, and 100+ more." },
    { Icon: Bell, title: "Intelligent Alerts", description: "Set threshold alerts and trend watchers that notify your team via Slack, email, or webhook the moment metrics deviate." },
    { Icon: Shield, title: "Row-Level Security", description: "Define data access rules so each team, region, or role sees only the data they are permitted to query." },
    { Icon: Globe, title: "Embedded Analytics", description: "White-label the entire analytics layer and embed it directly inside your SaaS product with a single iframe tag." },
    { Icon: Zap, title: "Query Acceleration", description: "Materialised view caching and columnar storage mean even billion-row queries return results in milliseconds." },
  ],
  processHeading:
    "From data connection to actionable insight in a structured four-week delivery sprint.",
  process: [
    { number: "01", title: "Data Audit", description: "We catalogue your existing data sources, assess quality, and identify the critical metrics your business decisions actually depend on." },
    { number: "02", title: "Schema Design", description: "A unified semantic layer is built on top of your raw data, clean, consistent definitions that every dashboard and report shares." },
    { number: "03", title: "Dashboard Build", description: "Your most important dashboards are built first: executive overview, operational metrics, and department-level deep dives." },
    { number: "04", title: "Alert Configuration", description: "Threshold alerts and anomaly watchers are configured and tested across your most business-critical KPIs." },
    { number: "05", title: "Team Training", description: "Live sessions for analysts (SQL mode, calculated fields) and business users (self-serve dashboard creation, report scheduling)." },
    { number: "06", title: "Iterate & Expand", description: "Regular monthly check-ins to add new data sources, refine models, and scale the platform as your data estate grows." },
  ],
  technologies: [
    { name: "Python", Icon: FaPython },
    { name: "Apache Kafka", Icon: SiApachekafka },
    { name: "ClickHouse", Icon: SiClickhouse },
    { name: "Grafana", Icon: SiGrafana },
    { name: "TensorFlow", Icon: SiTensorflow },
    { name: "PostgreSQL", Icon: SiPostgresql },
    { name: "AWS", Icon: FaAws },
    { name: "Docker", Icon: FaDocker },
    { name: "Kubernetes", Icon: SiKubernetes },
  ],
  benefits: [
    { title: "Data-Driven Culture", description: "Every team member has access to the metrics that matter to them, reducing bottlenecks on the data and analyst teams." },
    { title: "10× Faster Reporting", description: "Automated report generation replaces hours of weekly manual exports with scheduled, accurate, always-up-to-date outputs." },
    { title: "Predictive Advantage", description: "Built-in ML forecasting gives your team a head start on demand shifts, churn risk, and revenue shortfalls before they happen." },
    { title: "Single Source of Truth", description: "A shared semantic layer eliminates conflicting numbers between departments and ensures everyone is working from the same data." },
    { title: "Embeddable Anywhere", description: "Deliver analytics as a product feature, embed live dashboards inside your own application with full white-label control." },
    { title: "Scales to Billions of Rows", description: "Columnar storage and query caching ensure dashboards remain instant even as your data volume grows year over year." },
  ],
  stats: [
    { number: "10×", label: "Faster Insights", description: "Teams cut time-to-insight from hours to minutes with automated pipelines and live dashboards." },
    { number: "100+", label: "Native Connectors", description: "Connect every tool in your stack without writing a single line of custom ETL code." },
    { number: "< 1s", label: "Dashboard Load Time", description: "Columnar caching delivers sub-second query results across datasets of any size." },
    { number: "99.95%", label: "Pipeline Uptime", description: "Redundant infrastructure ensures your data pipelines keep flowing around the clock." },
  ],
  faq: [
    { question: "How long does it take to connect our data sources?", answer: "Most native connectors (PostgreSQL, Stripe, Google Analytics, Salesforce) can be activated and syncing in under 15 minutes. Custom API integrations are typically built and tested within 2–3 business days." },
    { question: "Do we need a dedicated data engineer to use CoreHive Analytics?", answer: "No. Business users can build dashboards and schedule reports using the drag-and-drop interface. Analysts who want SQL access have it, but it is never required for day-to-day use." },
    { question: "Can we embed dashboards inside our own product?", answer: "Yes. CoreHive Analytics supports fully white-labelled embedding via iframe with JWT-based row-level security, so each of your customers sees only their own data." },
    { question: "How does the predictive analytics work?", answer: "Built-in AutoML models are trained on your historical data and retrained nightly. You select the metric you want to forecast, choose the horizon, and the model handles the rest, no data science experience required." },
    { question: "Is our data stored in CoreHive's infrastructure?", answer: "You choose. CoreHive Analytics can query your data in-place (no copy), or you can stream it to our managed ClickHouse cluster. BYOC (Bring Your Own Cloud) deployments on AWS, GCP, or Azure are also supported." },
  ],
  cta: {
    heading: "Start Analysing",
    subtitle: "Connect your first data source in minutes and see your metrics come to life on a live dashboard, no engineering required.",
    highlights: ["14-day free trial", "No credit card needed", "Free onboarding session"],
    buttonText: "Start Free Trial",
    buttonHref: "/contact",
  },
};

export default function CoreHiveAnalytics() {
  return <ProductPageTemplate data={data} />;
}
