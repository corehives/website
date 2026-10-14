import { useEffect, useState, lazy, Suspense } from "react";
import {
  Sparkles,
  ShieldCheck,
  CheckCircle2,
  Calendar,
  GraduationCap,
  BookOpen,
  Clock,
  FileSpreadsheet,
  CreditCard,
  Users,
  UserCheck,
  ArrowRight,
  Award,
  Video,
} from "lucide-react";
import CTAButton from "../../components/shared/CTAButton";
import hero_bg from "../../assets/hero-bgs.webp";
import leftLight from "../../assets/left-light.webp";
import rightLight from "../../assets/right-light.webp";

// Authentic project screenshots
import dashboardImg from "../../assets/prodocet/dashboard.webp";
import coursesImg from "../../assets/prodocet/courses.webp";
import attendanceImg from "../../assets/prodocet/attendance.webp";
import reportsImg from "../../assets/prodocet/reports-analytics.webp";

const Footer = lazy(() => import("../../components/layout/footer.jsx"));

import {
  SiLaravel,
  SiMysql,
  SiPhp,
  SiBootstrap,
} from "react-icons/si";

// Official Tech Brand Icons
const LaravelIcon = () => <SiLaravel className="w-6 h-6 text-[#FF2D20]" />;
const MysqlIcon = () => <SiMysql className="w-6 h-6 text-[#00758F]" />;
const PhpIcon = () => <SiPhp className="w-6 h-6 text-[#777BB4]" />;
const BootstrapIcon = () => <SiBootstrap className="w-6 h-6 text-[#7952B3]" />;

export default function ProDocetLmsCaseStudy() {
  const [heroView, setHeroView] = useState("dashboard");
  const [activeWorkflowStep, setActiveWorkflowStep] = useState(0);

  useEffect(() => {
    // Scroll to top on mount
    window.scrollTo(0, 0);

    // SEO Title & Meta
    document.title =
      "ProDocet LMS Case Study | School Management Software | CoreHives";

    let metaDesc = document.querySelector('meta[name="description"]');
    if (!metaDesc) {
      metaDesc = document.createElement("meta");
      metaDesc.name = "description";
      document.head.appendChild(metaDesc);
    }
    metaDesc.content =
      "Explore ProDocet LMS, a school management platform combining curriculum planning, automated timetables, attendance tracking, academic assessment, tuition accounting, and teacher invoicing.";

    // Canonical Link
    let canonical = document.querySelector('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement("link");
      canonical.rel = "canonical";
      document.head.appendChild(canonical);
    }
    canonical.href = "https://corehives.com/portfolio/prodocet-lms";
  }, []);

  const scrollToOverview = (e) => {
    e.preventDefault();
    const element = document.getElementById("overview");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const workflowSteps = [
    {
      num: "01",
      title: "Student Enrollment",
      desc: "Student registers or is enrolled by sponsor HR with target course, subject package, and weekly availability.",
      role: "Enrollment Module",
    },
    {
      num: "02",
      title: "Course & Curriculum Planning",
      desc: "Curriculum team defines topics, attached study materials, and learning competencies for the subject.",
      role: "Academic CMS",
    },
    {
      num: "03",
      title: "Availability Matching",
      desc: "The scheduler checks teacher working hours, student availability slots, and school holiday exclusions.",
      role: "Scheduling Engine",
    },
    {
      num: "04",
      title: "Scheduled Class Delivery",
      desc: "Interactive session appears on user calendars with room assignment or Zoom / Google Meet classroom link.",
      role: "FullCalendar 6",
    },
    {
      num: "05",
      title: "Dual Attendance & Grading",
      desc: "Teacher logs class attendance and marks competency grades; student confirms participation.",
      role: "Verification Hub",
    },
    {
      num: "06",
      title: "Tuition & Invoicing Update",
      desc: "System debits student tuition balance and updates teacher monthly invoice drafts with rate multipliers.",
      role: "Billing Engine",
    },
  ];

  return (
    <div className="bg-[#000405] text-white min-h-screen">
      {/* ─────────────────────────────────────────────────────────────
          SECTION 1: HERO
      ───────────────────────────────────────────────────────────── */}
      <section className="relative z-0 pt-28 pb-16 md:pt-36 md:pb-24 overflow-hidden border-b border-white/10">
        {/* Background Layers */}
        <div className="absolute inset-0 z-0 pointer-events-none opacity-80">
          <img
            src={hero_bg}
            alt=""
            aria-hidden="true"
            className="w-full h-full object-cover object-center"
          />
        </div>
        <img
          src={leftLight}
          alt=""
          aria-hidden="true"
          width={700}
          height={560}
          className="pointer-events-none absolute left-0 top-0 z-[1] w-1/2 opacity-70"
        />
        <img
          src={rightLight}
          alt=""
          aria-hidden="true"
          width={700}
          height={560}
          className="pointer-events-none absolute right-0 top-0 z-[1] w-1/2 opacity-70"
        />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Eyebrow */}
          <div className="flex items-center gap-2 mb-4">
            <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full text-xs font-semibold tracking-wider uppercase border border-[#07BEB8]/40 bg-[#07BEB8]/10 text-[#07BEB8]">
              <Sparkles className="w-3.5 h-3.5" />
              CASE STUDY | EDUCATION TECHNOLOGY
            </span>
          </div>

          {/* Heading */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight text-white mb-3">
            ProDocet LMS
          </h1>
          <p className="text-xl sm:text-2xl md:text-3xl font-semibold text-[#8efcf8] mb-6 max-w-4xl leading-snug">
            Bringing Academic Operations Into One Connected Platform
          </p>

          {/* Description */}
          <p className="text-base sm:text-lg md:text-xl text-gray-300 max-w-3xl leading-relaxed mb-8">
            ProDocet LMS is a school learning management system designed to
            centralize curriculum planning, class scheduling, attendance tracking,
            academic performance, student tuition accounting, and teacher invoicing
            within a unified platform.
          </p>

          {/* Hero CTAs */}
          <div className="flex flex-wrap items-center gap-4 mb-12">
            <CTAButton
              onClick={scrollToOverview}
              className="bg-[#07BEB8] text-[#001925] border-transparent hover:bg-[#07BEB8]/90 font-semibold px-6 py-2.5"
            >
              Explore the Platform
            </CTAButton>
            <CTAButton to="/contact">
              Discuss Your Project
            </CTAButton>
          </div>

          {/* Metadata Card Bar */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 p-5 sm:p-6 rounded-2xl bg-[#010e14]/80 border border-white/10 backdrop-blur-md mb-12">
            <div>
              <p className="text-xs uppercase font-semibold tracking-wider text-[#07BEB8] mb-1">
                Industry &amp; Client Market
              </p>
              <p className="text-sm font-medium text-white">
                Education Technology
              </p>
              <p className="text-xs text-gray-400 mt-0.5">Spain Academic Sector</p>
            </div>
            <div>
              <p className="text-xs uppercase font-semibold tracking-wider text-[#07BEB8] mb-1">
                Core Services
              </p>
              <p className="text-sm font-medium text-white">
                Custom Software &amp; LMS
              </p>
              <p className="text-xs text-gray-400 mt-0.5">Workflow &amp; Scheduling Automation</p>
            </div>
            <div>
              <p className="text-xs uppercase font-semibold tracking-wider text-[#07BEB8] mb-1">
                Backend &amp; Database
              </p>
              <p className="text-sm font-medium text-white">
                Laravel 10 • PHP 8.2
              </p>
              <p className="text-xs text-gray-400 mt-0.5">MySQL 8 • 38 Domain Models</p>
            </div>
            <div>
              <p className="text-xs uppercase font-semibold tracking-wider text-[#07BEB8] mb-1">
                Frontend &amp; Components
              </p>
              <p className="text-sm font-medium text-white">
                Blade • Bootstrap 5
              </p>
              <p className="text-xs text-gray-400 mt-0.5">FullCalendar 6 • DataTables • Chart.js</p>
            </div>
          </div>

          {/* Primary Visual — Interactive Browser Showcase */}
          <div className="relative rounded-2xl overflow-hidden border border-white/15 bg-[#010A11] shadow-[0_20px_60px_rgba(7,190,184,0.15)]">
            {/* Browser Top Bar with View Selector */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between px-4 py-3 bg-[#00151c] border-b border-white/10 gap-3">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-red-500/80" />
                <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                <div className="w-3 h-3 rounded-full bg-green-500/80" />
                <span className="ml-3 text-xs text-gray-400 font-mono hidden sm:inline">
                  prodocet.internal / {heroView === "dashboard" ? "admin/dashboard" : heroView === "courses" ? "admin/courses" : heroView === "attendance" ? "admin/attendance" : "admin/reports"}
                </span>
              </div>

              {/* View Selector Tabs */}
              <div className="flex items-center gap-1.5 bg-[#000a0f] p-1 rounded-lg border border-white/10 self-start sm:self-auto">
                <button
                  onClick={() => setHeroView("dashboard")}
                  className={`px-3 py-1 rounded text-xs font-medium transition-all ${
                    heroView === "dashboard"
                      ? "bg-[#07BEB8] text-[#00151c] font-bold"
                      : "text-gray-300 hover:text-white"
                  }`}
                >
                  Dashboard
                </button>
                <button
                  onClick={() => setHeroView("courses")}
                  className={`px-3 py-1 rounded text-xs font-medium transition-all ${
                    heroView === "courses"
                      ? "bg-[#07BEB8] text-[#00151c] font-bold"
                      : "text-gray-300 hover:text-white"
                  }`}
                >
                  Courses
                </button>
                <button
                  onClick={() => setHeroView("attendance")}
                  className={`px-3 py-1 rounded text-xs font-medium transition-all ${
                    heroView === "attendance"
                      ? "bg-[#07BEB8] text-[#00151c] font-bold"
                      : "text-gray-300 hover:text-white"
                  }`}
                >
                  Attendance
                </button>
                <button
                  onClick={() => setHeroView("reports")}
                  className={`px-3 py-1 rounded text-xs font-medium transition-all ${
                    heroView === "reports"
                      ? "bg-[#07BEB8] text-[#00151c] font-bold"
                      : "text-gray-300 hover:text-white"
                  }`}
                >
                  Reports &amp; Billing
                </button>
              </div>
            </div>

            {/* Screen Content */}
            <div className="relative bg-[#020d13] flex justify-center items-start min-h-[420px] max-h-[640px] overflow-hidden">
              <img
                src={
                  heroView === "dashboard"
                    ? dashboardImg
                    : heroView === "courses"
                    ? coursesImg
                    : heroView === "attendance"
                    ? attendanceImg
                    : reportsImg
                }
                alt="ProDocet School Learning Management System Interface"
                width={1024}
                height={640}
                className="w-full h-auto object-cover object-top"
                loading="eager"
              />
              <div className="absolute bottom-4 right-4 bg-[#00151c]/90 backdrop-blur-md px-3.5 py-1.5 rounded-lg border border-[#07BEB8]/30 text-xs text-[#8efcf8] font-medium flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#07BEB8]" />
                {heroView === "dashboard"
                  ? "School Executive Dashboard • Registration Trends & Analytics"
                  : heroView === "courses"
                  ? "Curriculum Catalog • Multi-Level Subject Taxonomy"
                  : heroView === "attendance"
                  ? "Attendance Management • Dual Student & Teacher Verification"
                  : "Financial Analytics • Teacher Compensation & Invoice Exports"}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          SECTION 2: PROJECT OVERVIEW
      ───────────────────────────────────────────────────────────── */}
      <section id="overview" className="py-20 md:py-28 relative border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-16">
            <span className="text-xs uppercase font-bold tracking-widest text-[#07BEB8] mb-3 block">
              PROJECT OVERVIEW
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white mb-6 leading-tight">
              One Platform for the Entire School Workflow
            </h2>
            <p className="text-base sm:text-lg text-gray-300 leading-relaxed mb-4">
              ProDocet LMS brings academic planning, teaching operations, student
              management, attendance verification, and financial administration
              into one school management platform.
            </p>
            <p className="text-sm sm:text-base text-gray-400 leading-relaxed">
              The system supports administrators, curriculum teams, teachers,
              students, and client or sponsor HR teams through role-specific
              workflows, helping coordinate academic activities and institutional
              operations from a centralized environment.
            </p>
          </div>

          {/* 5 Stakeholder Roles Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Role 1 */}
            <div className="p-6 rounded-2xl bg-[#01141c]/60 border border-white/10 hover:border-[#07BEB8]/40 transition-colors flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-xl bg-[#07BEB8]/10 border border-[#07BEB8]/30 flex items-center justify-center text-[#07BEB8] mb-4">
                  <ShieldCheck className="w-6 h-6" />
                </div>
                <span className="text-xs font-mono uppercase text-[#07BEB8] tracking-wider block mb-1">
                  ROLE 01
                </span>
                <h3 className="text-lg font-bold text-white mb-2">
                  School Administrators
                </h3>
                <p className="text-sm text-gray-400 leading-relaxed">
                  Manage users, courses, rate schemes, academic operations, and
                  teacher invoice approvals with comprehensive governance tools.
                </p>
              </div>
            </div>

            {/* Role 2 */}
            <div className="p-6 rounded-2xl bg-[#01141c]/60 border border-white/10 hover:border-[#07BEB8]/40 transition-colors flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-xl bg-[#07BEB8]/10 border border-[#07BEB8]/30 flex items-center justify-center text-[#07BEB8] mb-4">
                  <BookOpen className="w-6 h-6" />
                </div>
                <span className="text-xs font-mono uppercase text-[#07BEB8] tracking-wider block mb-1">
                  ROLE 02
                </span>
                <h3 className="text-lg font-bold text-white mb-2">
                  Curriculum &amp; Academic Teams
                </h3>
                <p className="text-sm text-gray-400 leading-relaxed">
                  Organize syllabi, subject topics, lesson materials, academic
                  levels, and enrollment workflows with structured progression paths.
                </p>
              </div>
            </div>

            {/* Role 3 */}
            <div className="p-6 rounded-2xl bg-[#01141c]/60 border border-white/10 hover:border-[#07BEB8]/40 transition-colors flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-xl bg-[#07BEB8]/10 border border-[#07BEB8]/30 flex items-center justify-center text-[#07BEB8] mb-4">
                  <Users className="w-6 h-6" />
                </div>
                <span className="text-xs font-mono uppercase text-[#07BEB8] tracking-wider block mb-1">
                  ROLE 03
                </span>
                <h3 className="text-lg font-bold text-white mb-2">
                  Teachers
                </h3>
                <p className="text-sm text-gray-400 leading-relaxed">
                  View personalized schedules, record attendance, assess student
                  performance, and manage monthly teaching invoices with transparent multipliers.
                </p>
              </div>
            </div>

            {/* Role 4 */}
            <div className="p-6 rounded-2xl bg-[#01141c]/60 border border-white/10 hover:border-[#07BEB8]/40 transition-colors flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-xl bg-[#07BEB8]/10 border border-[#07BEB8]/30 flex items-center justify-center text-[#07BEB8] mb-4">
                  <GraduationCap className="w-6 h-6" />
                </div>
                <span className="text-xs font-mono uppercase text-[#07BEB8] tracking-wider block mb-1">
                  ROLE 04
                </span>
                <h3 className="text-lg font-bold text-white mb-2">
                  Students
                </h3>
                <p className="text-sm text-gray-400 leading-relaxed">
                  View timetables, join classes via virtual links, confirm attendance,
                  review competency grades, and monitor remaining tuition hours.
                </p>
              </div>
            </div>

            {/* Role 5 */}
            <div className="p-6 rounded-2xl bg-[#01141c]/60 border border-white/10 hover:border-[#07BEB8]/40 transition-colors flex flex-col justify-between md:col-span-2 lg:col-span-2">
              <div>
                <div className="w-12 h-12 rounded-xl bg-[#07BEB8]/10 border border-[#07BEB8]/30 flex items-center justify-center text-[#07BEB8] mb-4">
                  <UserCheck className="w-6 h-6" />
                </div>
                <span className="text-xs font-mono uppercase text-[#07BEB8] tracking-wider block mb-1">
                  ROLE 05
                </span>
                <h3 className="text-lg font-bold text-white mb-2">
                  Sponsor &amp; Client HR Teams
                </h3>
                <p className="text-sm text-gray-400 leading-relaxed">
                  Oversee assigned student cohorts, review attendance and academic
                  progress, and manage absence justifications within strictly
                  scoped organizational permissions.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          SECTION 3: THE CHALLENGE
      ───────────────────────────────────────────────────────────── */}
      <section className="py-20 md:py-28 relative border-b border-white/10 bg-[#00080d]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-16">
            <span className="text-xs uppercase font-bold tracking-widest text-[#07BEB8] mb-3 block">
              THE CHALLENGE
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white mb-4">
              Managing Academic Operations Across Disconnected Workflows
            </h2>
            <p className="text-base sm:text-lg text-gray-300 leading-relaxed">
              Managing an educational institution involves intricate coordination
              between curriculum progression, teacher availability, student
              scheduling, and hourly compensation rules.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                icon: BookOpen,
                title: "Fragmented Curriculum Materials",
                desc: "Lesson plans, study documents, and syllabi scattered across various drives and spreadsheets, leading to inconsistent course delivery.",
              },
              {
                icon: Calendar,
                title: "Complex Timetable Planning",
                desc: "Juggling student time slots, teacher working hours, room assignments, and regional school holiday exclusions manually.",
              },
              {
                icon: UserCheck,
                title: "Attendance & Verification Disputes",
                desc: "Unreliable paper records causing disagreements between teachers, students, and administration regarding completed hours.",
              },
              {
                icon: Clock,
                title: "Tuition Balance Accounting",
                desc: "Difficulty tracking prepaid student lesson packages and providing timely notifications when tuition hours near exhaustion.",
              },
              {
                icon: CreditCard,
                title: "Variable Teacher Compensation",
                desc: "Managing distinct rates for virtual vs in-person teaching, session duration multipliers (60-min vs 90-min), and no-show policies.",
              },
              {
                icon: FileSpreadsheet,
                title: "Manual Invoice Reconciliation",
                desc: "Administrators spending days validating monthly teaching records against paper invoices before payments can be processed.",
              },
            ].map((item, idx) => {
              const Icon = item.icon;
              return (
                <div
                  key={idx}
                  className="p-6 rounded-2xl bg-[#01141c]/50 border border-white/10 hover:border-[#07BEB8]/40 transition-all flex flex-col justify-between"
                >
                  <div>
                    <div className="w-10 h-10 rounded-xl bg-[#07BEB8]/10 border border-[#07BEB8]/30 flex items-center justify-center text-[#07BEB8] mb-4">
                      <Icon className="w-5 h-5" />
                    </div>
                    <h3 className="text-base font-bold text-white mb-2">
                      {item.title}
                    </h3>
                    <p className="text-sm text-gray-400 leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          SECTION 4: THE SOLUTION (4 Capability Groups)
      ───────────────────────────────────────────────────────────── */}
      <section id="solution" className="py-20 md:py-28 relative border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-16">
            <span className="text-xs uppercase font-bold tracking-widest text-[#07BEB8] mb-3 block">
              THE SOLUTION
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white mb-4">
              Connected Academic Management From Planning to Delivery
            </h2>
            <p className="text-base sm:text-lg text-gray-300 leading-relaxed">
              CoreHives designed ProDocet LMS around the complete teaching lifecycle,
              connecting curriculum administration, automated scheduling, attendance
              verification, and financial accounting into one cohesive system.
            </p>
          </div>

          <div className="space-y-16">
            {/* 4A. Curriculum and Course Management */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center p-6 sm:p-8 lg:p-10 rounded-3xl bg-[#011119] border border-white/10">
              <div className="lg:col-span-6">
                <span className="text-xs font-mono uppercase text-[#07BEB8] tracking-wider block mb-2 font-bold">
                  CAPABILITY A
                </span>
                <h3 className="text-2xl sm:text-3xl font-extrabold text-white mb-4">
                  Curriculum &amp; Course Management
                </h3>
                <p className="text-base text-gray-300 leading-relaxed mb-6">
                  Centralized academic management helps maintain consistent course
                  structures across subjects, levels, and classrooms.
                </p>

                <div className="space-y-2.5 text-sm text-gray-300 mb-6">
                  <div className="flex items-center gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-[#07BEB8] shrink-0" />
                    <span>Multi-subject course catalog with language and level filtering</span>
                  </div>
                  <div className="flex items-center gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-[#07BEB8] shrink-0" />
                    <span>Academic levels from beginner to advanced with ordered syllabus progression</span>
                  </div>
                  <div className="flex items-center gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-[#07BEB8] shrink-0" />
                    <span>Study documents and learning objectives attached directly to curriculum topics</span>
                  </div>
                  <div className="flex items-center gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-[#07BEB8] shrink-0" />
                    <span>Excel-based curriculum import/export and automated PDF syllabus generation</span>
                  </div>
                  <div className="flex items-center gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-[#07BEB8] shrink-0" />
                    <span>Automatic assignment of curriculum topics to scheduled class sessions</span>
                  </div>
                </div>
              </div>

              <div className="lg:col-span-7">
                <div className="rounded-2xl overflow-hidden border border-white/15 bg-[#00151c] shadow-2xl">
                  <div className="px-4 py-2.5 bg-[#001017] border-b border-white/10 flex items-center justify-between text-xs text-gray-400 font-mono">
                    <span>prodocet.internal / admin / courses</span>
                    <span className="text-[#07BEB8]">Active Catalog</span>
                  </div>
                  <img
                    src={coursesImg}
                    alt="ProDocet LMS Courses and Curriculum Management Interface"
                    width={1024}
                    height={861}
                    className="w-full h-auto object-cover"
                    loading="lazy"
                  />
                </div>
              </div>
            </div>

            {/* 4B. Intelligent Timetable and Scheduling */}
            <div className="p-8 sm:p-10 rounded-3xl bg-gradient-to-br from-[#01141c] via-[#010e14] to-[#001017] border border-[#07BEB8]/30">
              <div className="max-w-3xl mb-8">
                <span className="text-xs font-mono uppercase text-[#07BEB8] tracking-wider block mb-2 font-bold">
                  CAPABILITY B
                </span>
                <h3 className="text-2xl sm:text-3xl font-extrabold text-white mb-3">
                  Automating the Complexity of Class Scheduling
                </h3>
                <p className="text-base text-gray-300 leading-relaxed">
                  The scheduling engine matches student availability with teacher
                  working hours while honoring holiday closures, room assignments,
                  and subject eligibility.
                </p>
              </div>

              {/* Scheduling Workflow Visualization */}
              <div className="p-6 rounded-2xl bg-[#001017] border border-white/10 mb-8">
                <span className="text-xs font-mono text-[#07BEB8] uppercase block mb-3 font-semibold">
                  TIMETABLE GENERATION PIPELINE
                </span>
                <div className="flex flex-wrap items-center justify-between gap-3 text-xs sm:text-sm text-gray-200 font-medium">
                  <span className="px-3 py-1.5 rounded-lg bg-[#01141c] border border-white/10">
                    Student Availability
                  </span>
                  <span className="text-[#07BEB8] font-bold">+</span>
                  <span className="px-3 py-1.5 rounded-lg bg-[#01141c] border border-white/10">
                    Teacher Availability
                  </span>
                  <ArrowRight className="w-4 h-4 text-[#07BEB8]" />
                  <span className="px-3 py-1.5 rounded-lg bg-[#01141c] border border-white/10">
                    Subject &amp; Slot Matching
                  </span>
                  <ArrowRight className="w-4 h-4 text-[#07BEB8]" />
                  <span className="px-3 py-1.5 rounded-lg bg-[#01141c] border border-white/10">
                    Holiday Validation
                  </span>
                  <ArrowRight className="w-4 h-4 text-[#07BEB8]" />
                  <span className="px-3 py-1.5 rounded-lg bg-[#07BEB8]/20 border border-[#07BEB8] text-[#8efcf8]">
                    Calendar &amp; Classroom Link
                  </span>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-sm text-gray-300">
                <div className="p-4 rounded-xl bg-[#01141c]/60 border border-white/10">
                  <Calendar className="w-5 h-5 text-[#07BEB8] mb-2" />
                  <h4 className="font-bold text-white mb-1">Interactive FullCalendar Views</h4>
                  <p className="text-xs text-gray-400">Month, week, day, and agenda timelines with role-specific views for students, teachers, and admins.</p>
                </div>
                <div className="p-4 rounded-xl bg-[#01141c]/60 border border-white/10">
                  <Video className="w-5 h-5 text-[#07BEB8] mb-2" />
                  <h4 className="font-bold text-white mb-1">Virtual Classroom Links</h4>
                  <p className="text-xs text-gray-400">Automated generation of Zoom or Google Meet URLs alongside physical room allocations.</p>
                </div>
                <div className="p-4 rounded-xl bg-[#01141c]/60 border border-white/10">
                  <ShieldCheck className="w-5 h-5 text-[#07BEB8] mb-2" />
                  <h4 className="font-bold text-white mb-1">Holiday &amp; Conflict Checks</h4>
                  <p className="text-xs text-gray-400">Automated exclusion of institutional holidays and instant double-booking prevention.</p>
                </div>
              </div>
            </div>

            {/* 4C. Attendance and Academic Performance */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center p-6 sm:p-8 lg:p-10 rounded-3xl bg-[#011119] border border-white/10">
              <div className="lg:col-span-6 order-1 lg:order-2">
                <span className="text-xs font-mono uppercase text-[#07BEB8] tracking-wider block mb-2 font-bold">
                  CAPABILITY C
                </span>
                <h3 className="text-2xl sm:text-3xl font-extrabold text-white mb-4">
                  Transparent Attendance &amp; Student Progress Tracking
                </h3>
                <p className="text-base text-gray-300 leading-relaxed mb-6">
                  Recording and confirming attendance creates a verifiable record of
                  class delivery, safeguarding both teacher compensation and student tuition.
                </p>

                <div className="space-y-3 text-sm text-gray-300">
                  <div className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-[#07BEB8] shrink-0 mt-0.5" />
                    <span><strong>Four Attendance States:</strong> Present, Absent, Late, and Justified.</span>
                  </div>
                  <div className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-[#07BEB8] shrink-0 mt-0.5" />
                    <span><strong>Dual-Verification:</strong> Teacher logs participation and students confirm class completion.</span>
                  </div>
                  <div className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-[#07BEB8] shrink-0 mt-0.5" />
                    <span><strong>Academic Grading:</strong> Competency rubrics and qualitative feedback logged directly against curriculum modules.</span>
                  </div>
                  <div className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-[#07BEB8] shrink-0 mt-0.5" />
                    <span><strong>Audit Exports:</strong> Instant export of attendance matrices to Excel (.xlsx) and PDF formats.</span>
                  </div>
                </div>
              </div>

              <div className="lg:col-span-7 order-2 lg:order-1">
                <div className="rounded-2xl overflow-hidden border border-white/15 bg-[#00151c] shadow-2xl">
                  <div className="px-4 py-2.5 bg-[#001017] border-b border-white/10 flex items-center justify-between text-xs text-gray-400 font-mono">
                    <span>prodocet.internal / admin / attendance</span>
                    <span className="text-[#07BEB8]">Dual Status</span>
                  </div>
                  <img
                    src={attendanceImg}
                    alt="ProDocet LMS Attendance Management and Student Verification Interface"
                    width={1012}
                    height={1024}
                    className="w-full h-auto object-cover"
                    loading="lazy"
                  />
                </div>
              </div>
            </div>

            {/* 4D. Tuition Accounting and Teacher Invoicing */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center p-6 sm:p-8 lg:p-10 rounded-3xl bg-[#011119] border border-white/10">
              <div className="lg:col-span-6">
                <span className="text-xs font-mono uppercase text-[#07BEB8] tracking-wider block mb-2 font-bold">
                  CAPABILITY D
                </span>
                <h3 className="text-2xl sm:text-3xl font-extrabold text-white mb-4">
                  Bringing Teaching Hours and Financial Records Together
                </h3>
                <p className="text-base text-gray-300 leading-relaxed mb-6">
                  Configurable business logic reconciles student tuition hour
                  deductions with verified teacher compensation and invoice generation.
                </p>

                <div className="space-y-4 text-xs sm:text-sm text-gray-300">
                  <div className="p-4 rounded-xl bg-[#001017] border border-white/10">
                    <div className="flex items-center gap-2 font-bold text-white mb-1.5">
                      <CreditCard className="w-4 h-4 text-[#07BEB8]" />
                      Student Tuition Accounting
                    </div>
                    <p className="text-xs text-gray-400 leading-relaxed">
                      Tracks purchased teaching packages, calculates remaining hours, and triggers automated alerts when 5 or fewer sessions remain.
                    </p>
                  </div>

                  <div className="p-4 rounded-xl bg-[#001017] border border-white/10">
                    <div className="flex items-center gap-2 font-bold text-white mb-1.5">
                      <FileSpreadsheet className="w-4 h-4 text-[#07BEB8]" />
                      Teacher Invoicing &amp; Rate Multipliers
                    </div>
                    <p className="text-xs text-gray-400 leading-relaxed">
                      Standard 60-min sessions calculate at base rates, 90-min sessions apply a 1.5x multiplier, and eligible student no-shows apply a 0.75x compensation policy. Generates draft monthly invoices for review and administrative approval.
                    </p>
                  </div>
                </div>
              </div>

              <div className="lg:col-span-7">
                <div className="rounded-2xl overflow-hidden border border-white/15 bg-[#00151c] shadow-2xl">
                  <div className="px-4 py-2.5 bg-[#001017] border-b border-white/10 flex items-center justify-between text-xs text-gray-400 font-mono">
                    <span>prodocet.internal / admin / reports-analytics</span>
                    <span className="text-[#07BEB8]">Financial Reports</span>
                  </div>
                  <img
                    src={reportsImg}
                    alt="ProDocet LMS Reports, Analytics, and Financial Invoicing Interface"
                    width={839}
                    height={1024}
                    className="w-full h-auto object-cover"
                    loading="lazy"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          SECTION 5: OPERATIONAL WORKFLOW
      ───────────────────────────────────────────────────────────── */}
      <section className="py-20 md:py-28 relative border-b border-white/10 bg-[#00080d]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-16">
            <span className="text-xs uppercase font-bold tracking-widest text-[#07BEB8] mb-3 block">
              OPERATIONAL WORKFLOW
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white mb-4">
              From Enrollment Request to Completed Class
            </h2>
            <p className="text-base sm:text-lg text-gray-300 leading-relaxed">
              ProDocet connects the complete academic lifecycle through six coordinated stages.
            </p>
          </div>

          {/* Workflow Sequence */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {workflowSteps.map((step, idx) => (
              <div
                key={idx}
                onClick={() => setActiveWorkflowStep(idx)}
                role="button"
                tabIndex={0}
                className={`p-6 rounded-2xl border transition-all text-left flex flex-col justify-between cursor-pointer ${
                  activeWorkflowStep === idx
                    ? "bg-[#07BEB8]/15 border-[#07BEB8] shadow-lg shadow-[#07BEB8]/10"
                    : "bg-[#01141c]/60 border-white/10 hover:border-white/20"
                }`}
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-xs font-mono font-bold text-[#07BEB8]">
                      STAGE {step.num}
                    </span>
                    <span className="text-[10px] text-gray-400 font-mono">
                      {step.role}
                    </span>
                  </div>
                  <h3 className="text-base font-bold text-white mb-2">
                    {step.title}
                  </h3>
                  <p className="text-sm text-gray-400 leading-relaxed">
                    {step.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          SECTION 6: TECHNICAL ARCHITECTURE
      ───────────────────────────────────────────────────────────── */}
      <section id="architecture" className="py-20 md:py-28 relative border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-16">
            <span className="text-xs uppercase font-bold tracking-widest text-[#07BEB8] mb-3 block">
              SYSTEM ARCHITECTURE
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white mb-4">
              An Architecture Designed for Complex Academic Workflows
            </h2>
            <p className="text-base sm:text-lg text-gray-300 leading-relaxed">
              ProDocet LMS utilizes a modular Laravel 10 architecture with dedicated
              service and repository layers to manage 38 relational domain models.
            </p>
          </div>

          {/* 4 Architecture Pillars */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            <div className="p-6 rounded-2xl bg-[#01141c]/60 border border-white/10 flex flex-col justify-between">
              <div>
                <span className="text-xs font-mono text-[#07BEB8] uppercase block mb-1 font-bold">
                  LAYER 01
                </span>
                <h3 className="text-lg font-bold text-white mb-3">
                  Role-Based UIs
                </h3>
                <ul className="space-y-2 text-xs sm:text-sm text-gray-300">
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#07BEB8]" />
                    Laravel Blade &amp; Bootstrap 5
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#07BEB8]" />
                    FullCalendar 6 Interactive Views
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#07BEB8]" />
                    DataTables &amp; Chart.js Dashboards
                  </li>
                </ul>
              </div>
              <div className="mt-6 pt-4 border-t border-white/5 text-xs text-gray-400 font-mono">
                Presentation Tier
              </div>
            </div>

            <div className="p-6 rounded-2xl bg-[#01141c]/60 border border-white/10 flex flex-col justify-between">
              <div>
                <span className="text-xs font-mono text-[#07BEB8] uppercase block mb-1 font-bold">
                  LAYER 02
                </span>
                <h3 className="text-lg font-bold text-white mb-3">
                  Business Services
                </h3>
                <ul className="space-y-2 text-xs sm:text-sm text-gray-300">
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#07BEB8]" />
                    Laravel 10 &amp; PHP 8.2 Engine
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#07BEB8]" />
                    Availability Scheduling Services
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#07BEB8]" />
                    Tuition &amp; Invoicing Multipliers
                  </li>
                </ul>
              </div>
              <div className="mt-6 pt-4 border-t border-white/5 text-xs text-gray-400 font-mono">
                Application Core
              </div>
            </div>

            <div className="p-6 rounded-2xl bg-[#01141c]/60 border border-white/10 flex flex-col justify-between">
              <div>
                <span className="text-xs font-mono text-[#07BEB8] uppercase block mb-1 font-bold">
                  LAYER 03
                </span>
                <h3 className="text-lg font-bold text-white mb-3">
                  Data Persistence
                </h3>
                <ul className="space-y-2 text-xs sm:text-sm text-gray-300">
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#07BEB8]" />
                    MySQL 8 Database
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#07BEB8]" />
                    38 Eloquent Domain Models
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#07BEB8]" />
                    Transactional Audit Records
                  </li>
                </ul>
              </div>
              <div className="mt-6 pt-4 border-t border-white/5 text-xs text-gray-400 font-mono">
                Relational Layer
              </div>
            </div>

            <div className="p-6 rounded-2xl bg-[#01141c]/60 border border-white/10 flex flex-col justify-between">
              <div>
                <span className="text-xs font-mono text-[#07BEB8] uppercase block mb-1 font-bold">
                  LAYER 04
                </span>
                <h3 className="text-lg font-bold text-white mb-3">
                  Integrations
                </h3>
                <ul className="space-y-2 text-xs sm:text-sm text-gray-300">
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#07BEB8]" />
                    Zoom &amp; Google Meet Classrooms
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#07BEB8]" />
                    Excel Import/Export Pipelines
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#07BEB8]" />
                    PDF Syllabus &amp; Report Generator
                  </li>
                </ul>
              </div>
              <div className="mt-6 pt-4 border-t border-white/5 text-xs text-gray-400 font-mono">
                External Connectors
              </div>
            </div>
          </div>

          {/* Tech Badges */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            <div className="p-4 rounded-xl bg-[#01141c]/60 border border-white/10 flex items-center gap-3">
              <LaravelIcon />
              <div>
                <h4 className="text-sm font-bold text-white">Laravel 10</h4>
                <p className="text-xs text-gray-400">Core Framework</p>
              </div>
            </div>
            <div className="p-4 rounded-xl bg-[#01141c]/60 border border-white/10 flex items-center gap-3">
              <MysqlIcon />
              <div>
                <h4 className="text-sm font-bold text-white">MySQL 8</h4>
                <p className="text-xs text-gray-400">Database Engine</p>
              </div>
            </div>
            <div className="p-4 rounded-xl bg-[#01141c]/60 border border-white/10 flex items-center gap-3">
              <PhpIcon />
              <div>
                <h4 className="text-sm font-bold text-white">PHP 8.2</h4>
                <p className="text-xs text-gray-400">Server Runtime</p>
              </div>
            </div>
            <div className="p-4 rounded-xl bg-[#01141c]/60 border border-white/10 flex items-center gap-3">
              <BootstrapIcon />
              <div>
                <h4 className="text-sm font-bold text-white">Blade &amp; UI</h4>
                <p className="text-xs text-gray-400">Bootstrap 5</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          SECTION 7: ENGINEERING HIGHLIGHTS
      ───────────────────────────────────────────────────────────── */}
      <section className="py-20 md:py-28 relative border-b border-white/10 bg-[#00080d]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-16">
            <span className="text-xs uppercase font-bold tracking-widest text-[#07BEB8] mb-3 block">
              ENGINEERING HIGHLIGHTS
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white mb-4">
              Beyond a Standard School Dashboard
            </h2>
            <p className="text-base sm:text-lg text-gray-300 leading-relaxed">
              Three distinctive technical capabilities demonstrate the engineering depth behind ProDocet LMS.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Highlight 1 */}
            <div className="p-8 rounded-2xl bg-[#01141c]/60 border border-white/10 flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-xl bg-[#07BEB8]/10 border border-[#07BEB8]/30 flex items-center justify-center text-[#07BEB8] mb-6">
                  <Calendar className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">
                  Availability-Based Scheduling
                </h3>
                <p className="text-xs uppercase tracking-wider text-[#07BEB8] font-semibold mb-4">
                  Multi-Variable Constraint Engine
                </p>
                <p className="text-sm sm:text-base text-gray-300 leading-relaxed mb-4">
                  <strong>Technical Capability:</strong> The scheduler matches student and teacher availability while respecting academic holiday exclusions.
                </p>
                <p className="text-xs sm:text-sm text-gray-400 leading-relaxed">
                  <strong>Practical Importance:</strong> Prevents scheduling conflicts across recurring class series without requiring manual coordination for every session.
                </p>
              </div>
            </div>

            {/* Highlight 2 */}
            <div className="p-8 rounded-2xl bg-[#01141c]/60 border border-white/10 flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-xl bg-[#07BEB8]/10 border border-[#07BEB8]/30 flex items-center justify-center text-[#07BEB8] mb-6">
                  <UserCheck className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">
                  Dual-Verification Attendance
                </h3>
                <p className="text-xs uppercase tracking-wider text-[#07BEB8] font-semibold mb-4">
                  Verifiable Delivery Trail
                </p>
                <p className="text-sm sm:text-base text-gray-300 leading-relaxed mb-4">
                  <strong>Technical Capability:</strong> Teachers record attendance and students can confirm class participation.
                </p>
                <p className="text-xs sm:text-sm text-gray-400 leading-relaxed">
                  <strong>Practical Importance:</strong> Establishes a transparent audit record that resolves attendance disputes before invoices and tuition debits are finalized.
                </p>
              </div>
            </div>

            {/* Highlight 3 */}
            <div className="p-8 rounded-2xl bg-[#01141c]/60 border border-white/10 flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-xl bg-[#07BEB8]/10 border border-[#07BEB8]/30 flex items-center justify-center text-[#07BEB8] mb-6">
                  <CreditCard className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">
                  Rule-Based Financial Calculations
                </h3>
                <p className="text-xs uppercase tracking-wider text-[#07BEB8] font-semibold mb-4">
                  Configurable Multipliers
                </p>
                <p className="text-sm sm:text-base text-gray-300 leading-relaxed mb-4">
                  <strong>Technical Capability:</strong> The billing engine applies configurable teaching rates and session-specific multipliers to generate monthly invoice drafts.
                </p>
                <p className="text-xs sm:text-sm text-gray-400 leading-relaxed">
                  <strong>Practical Importance:</strong> Automates calculations for 60-min vs 90-min sessions and student no-show compensation, reducing billing administration cycles.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          SECTION 8: PROJECT OUTCOME
      ───────────────────────────────────────────────────────────── */}
      <section className="py-20 md:py-28 relative border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <span className="text-xs uppercase font-bold tracking-widest text-[#07BEB8] mb-3 block">
              PROJECT OUTCOME
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white mb-6 leading-tight">
              A More Connected Approach to School Management
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-gray-300 leading-relaxed mb-12">
              ProDocet LMS brings curriculum planning, scheduling, attendance,
              academic assessment, tuition tracking, and teacher invoicing into one
              coordinated platform. Its role-based workflows and structured
              academic records provide a foundation for managing the complete
              teaching lifecycle across multiple subjects and stakeholder groups.
            </p>

            {/* Verified Project Facts Strip */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 text-left">
              <div className="p-4 rounded-xl bg-[#01141c]/60 border border-white/10">
                <span className="text-xs font-mono text-[#07BEB8] block mb-1">CORE STACK</span>
                <p className="text-sm font-bold text-white">Laravel 10</p>
                <p className="text-xs text-gray-400">PHP 8.2 &amp; Blade</p>
              </div>
              <div className="p-4 rounded-xl bg-[#01141c]/60 border border-white/10">
                <span className="text-xs font-mono text-[#07BEB8] block mb-1">DATABASE</span>
                <p className="text-sm font-bold text-white">MySQL 8</p>
                <p className="text-xs text-gray-400">38 Domain Models</p>
              </div>
              <div className="p-4 rounded-xl bg-[#01141c]/60 border border-white/10">
                <span className="text-xs font-mono text-[#07BEB8] block mb-1">STAKEHOLDERS</span>
                <p className="text-sm font-bold text-white">5 Roles</p>
                <p className="text-xs text-gray-400">Admin, Teacher, Student, etc.</p>
              </div>
              <div className="p-4 rounded-xl bg-[#01141c]/60 border border-white/10">
                <span className="text-xs font-mono text-[#07BEB8] block mb-1">SCHEDULING</span>
                <p className="text-sm font-bold text-white">FullCalendar 6</p>
                <p className="text-xs text-gray-400">Availability &amp; Holiday Logic</p>
              </div>
              <div className="p-4 rounded-xl bg-[#01141c]/60 border border-white/10">
                <span className="text-xs font-mono text-[#07BEB8] block mb-1">ATTENDANCE</span>
                <p className="text-sm font-bold text-white">Dual Verify</p>
                <p className="text-xs text-gray-400">Teacher &amp; Student Auditing</p>
              </div>
              <div className="p-4 rounded-xl bg-[#01141c]/60 border border-white/10">
                <span className="text-xs font-mono text-[#07BEB8] block mb-1">FINANCIALS</span>
                <p className="text-sm font-bold text-white">Rule Multipliers</p>
                <p className="text-xs text-gray-400">Tuition &amp; Invoicing Engine</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          SECTION 9: PROJECT HIGHLIGHTS & PLATFORM VALIDATION
      ───────────────────────────────────────────────────────────── */}
      <section className="py-20 md:py-28 relative border-b border-white/10 bg-[#00080d]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="text-xs uppercase font-bold tracking-widest text-[#07BEB8] mb-2 block">
              PLATFORM VALIDATION
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white mb-3">
              Project Highlights
            </h2>
            <p className="text-base sm:text-lg text-gray-400">
              Verified technical capabilities and completed deliverables developed by CoreHives.
            </p>
          </div>

          <div className="p-8 sm:p-12 rounded-3xl bg-gradient-to-br from-[#01141c] via-[#010e14] to-[#001017] border border-[#07BEB8]/30 shadow-[0_20px_60px_rgba(7,190,184,0.1)] relative overflow-hidden">
            {/* Ambient background glow */}
            <div
              className="absolute -right-20 -bottom-20 w-80 h-80 rounded-full blur-[90px] pointer-events-none"
              style={{ background: "rgba(7,190,184,0.15)" }}
            />

            <div className="relative z-10 space-y-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-2xl bg-[#07BEB8]/15 border border-[#07BEB8]/30 flex items-center justify-center text-[#07BEB8]">
                  <Award className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white">
                    Delivering Enterprise Educational Software
                  </h3>
                  <p className="text-xs text-gray-400">Tailored for European Institutional Requirements</p>
                </div>
              </div>

              <p className="text-base sm:text-lg text-gray-300 leading-relaxed">
                CoreHives engineered ProDocet LMS as a tailored solution for school
                administration in Spain, structuring complex academic operations into
                automated, auditable workflows. By integrating curriculum management,
                constraint-based timetable planning, dual-verification attendance, and
                rule-based teacher invoicing, the platform eliminates administrative
                silos across departments.
              </p>

              <div className="pt-6 border-t border-white/10 grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs sm:text-sm">
                <div className="flex items-center gap-2 text-gray-300">
                  <CheckCircle2 className="w-4 h-4 text-[#07BEB8] shrink-0" />
                  <span>38 relational domain models</span>
                </div>
                <div className="flex items-center gap-2 text-gray-300">
                  <CheckCircle2 className="w-4 h-4 text-[#07BEB8] shrink-0" />
                  <span>Spatie RBAC multi-guard security</span>
                </div>
                <div className="flex items-center gap-2 text-gray-300">
                  <CheckCircle2 className="w-4 h-4 text-[#07BEB8] shrink-0" />
                  <span>Automated invoice &amp; Excel pipelines</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          SECTION 10: FINAL CTA
      ───────────────────────────────────────────────────────────── */}
      <section className="py-24 md:py-32 relative bg-gradient-to-b from-[#000405] to-[#011119]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="text-xs uppercase font-bold tracking-widest text-[#07BEB8] mb-4 block">
            WORK WITH COREHIVES
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white mb-6">
            Need a Custom Learning or Education Management Platform?
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-gray-300 leading-relaxed mb-10 max-w-2xl mx-auto">
            CoreHives develops custom software that helps educational organizations
            coordinate complex workflows, manage academic operations, and connect
            their teams through practical digital solutions.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4">
            <CTAButton
              to="/contact"
              className="bg-[#07BEB8] text-[#001925] border-transparent hover:bg-[#07BEB8]/90 font-semibold px-6 py-2.5"
            >
              Discuss Your Project
            </CTAButton>
            <CTAButton to="/our-portfolio">
              Explore More Projects
            </CTAButton>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Suspense fallback={null}>
        <Footer />
      </Suspense>
    </div>
  );
}
