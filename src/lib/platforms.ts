export type PlatformStatus = "Active Development" | "R&D" | "Coming Soon";

export interface Platform {
  slug: string;
  part: string; // catalog part number
  name: string;
  shortName: string;
  category: string;
  status: PlatformStatus;
  tagline: string;
  summary: string; // one-liner for cards
  description: string;
  cta: string;
  features: { title: string; description: string }[];
  industries: { name: string; note: string }[];
  closing: { headline: string; body: string };
}

export const platforms: Platform[] = [
  {
    slug: "tab",
    part: "BI-01",
    name: "TAB Point of Sales",
    shortName: "TAB",
    category: "Commerce & Operations",
    status: "Active Development",
    tagline: "High-Performance Commerce Platform",
    summary: "High-performance POS for hospitality and retail",
    description:
      "A comprehensive point-of-sale and operations platform built for the demanding environments of hospitality and retail. TAB delivers real-time transaction processing, inventory management, and analytics with enterprise-grade reliability.",
    cta: "Request Access",
    features: [
      {
        title: "Real-Time Transactions",
        description:
          "Process payments instantly with sub-second response times. Support for all major payment methods including contactless, chip, and mobile wallets.",
      },
      {
        title: "Inventory Management",
        description:
          "Track stock levels in real-time across all locations. Automated reorder alerts and supplier integration keep your shelves stocked.",
      },
      {
        title: "Staff Management",
        description:
          "Schedule shifts, track hours, and manage permissions. Built-in time clock and performance analytics for your team.",
      },
      {
        title: "Analytics Dashboard",
        description:
          "Comprehensive reporting with real-time insights. Track sales trends, peak hours, and customer behavior patterns.",
      },
      {
        title: "Multi-Location Support",
        description:
          "Manage multiple stores from a single dashboard. Centralized reporting and inventory visibility across all locations.",
      },
      {
        title: "Offline-First Architecture",
        description:
          "Keep operating even when internet goes down. Automatic sync when connection is restored ensures no lost transactions.",
      },
    ],
    industries: [
      { name: "Hospitality", note: "Restaurants, bars, and cafes" },
      { name: "Retail", note: "Stores and boutiques" },
      { name: "Quick Service", note: "Fast food and takeaway" },
      { name: "Food Trucks", note: "Mobile vendors" },
    ],
    closing: {
      headline: "Ready to modernize your operations?",
      body: "Get in touch to learn how TAB can transform your business.",
    },
  },
  {
    slug: "yapr",
    part: "BI-02",
    name: "Yapr",
    shortName: "Yapr",
    category: "Language & Communication",
    status: "Active Development",
    tagline: "AI-Powered Language Companion",
    summary: "AI-powered language companion",
    description:
      "Breaking down language barriers with real-time AI-powered translation and communication assistance. Yapr enables seamless cross-language interaction for learning, accessibility, and professional communication.",
    cta: "Request Access",
    features: [
      {
        title: "Real-Time Translation",
        description:
          "Instant translation across 100+ languages with context-aware accuracy. Perfect for live conversations and meetings.",
      },
      {
        title: "Speech-to-Text",
        description:
          "Advanced voice recognition that handles accents, dialects, and background noise. Transcribe meetings and conversations effortlessly.",
      },
      {
        title: "Language Learning",
        description:
          "AI-powered tutoring that adapts to your level. Practice conversations, get pronunciation feedback, and track progress.",
      },
      {
        title: "Accessibility Tools",
        description:
          "Breaking barriers for the deaf and hard of hearing. Real-time captions, sign language interpretation, and audio descriptions.",
      },
      {
        title: "Context-Aware AI",
        description:
          "Understands idioms, cultural nuances, and domain-specific terminology. Medical, legal, and technical translations done right.",
      },
      {
        title: "Multi-Modal Input",
        description:
          "Voice, text, images, and documents. Translate menus, signs, and handwritten notes with your camera.",
      },
    ],
    industries: [
      { name: "Education", note: "Schools and universities" },
      { name: "Travel", note: "Tourism and hospitality" },
      { name: "Healthcare", note: "Patient communication" },
      { name: "Business", note: "Global teams" },
    ],
    closing: {
      headline: "Ready to break language barriers?",
      body: "Get in touch to learn how Yapr can connect your world.",
    },
  },
  {
    slug: "probono",
    part: "BI-03",
    name: "Probono AI",
    shortName: "Probono",
    category: "Legal Technology",
    status: "R&D",
    tagline: "Democratizing Legal Access",
    summary: "On-demand legal assistance platform",
    description:
      "An on-demand legal assistance platform that expands access to legal information and guidance. Probono AI uses advanced language models to help users understand their legal rights and navigate complex legal processes.",
    cta: "Join Waitlist",
    features: [
      {
        title: "Legal Information Access",
        description:
          "Instant access to legal information across multiple practice areas. Understand your rights without expensive consultations.",
      },
      {
        title: "Document Understanding",
        description:
          "Upload contracts, leases, and legal documents. Get plain-language explanations of complex terms and clauses.",
      },
      {
        title: "Rights Guidance",
        description:
          "Step-by-step guidance through legal processes. Know your rights in employment, housing, consumer, and family matters.",
      },
      {
        title: "Plain-Language Explanations",
        description:
          "No more legal jargon. Complex legal concepts explained in simple, understandable terms anyone can follow.",
      },
      {
        title: "Jurisdiction-Aware",
        description:
          "Laws vary by location. Probono AI provides information specific to your state, country, and local jurisdiction.",
      },
      {
        title: "Privacy-First Design",
        description:
          "Your legal matters stay private. End-to-end encryption and no data retention ensures complete confidentiality.",
      },
    ],
    industries: [
      { name: "Individuals", note: "Personal legal matters" },
      { name: "Non-Profits", note: "Community legal aid" },
      { name: "Small Business", note: "Business compliance" },
      { name: "Legal Aid", note: "Pro bono support" },
    ],
    closing: {
      headline: "Interested in democratizing legal access?",
      body: "Join our research program and help shape the future of legal technology.",
    },
  },
  {
    slug: "thirdeye",
    part: "BI-04",
    name: "Third Eye Security",
    shortName: "Third Eye",
    category: "Security & Surveillance",
    status: "R&D",
    tagline: "Intelligent Visual Monitoring",
    summary: "Computer vision-powered security",
    description:
      "Computer vision-powered security and monitoring systems that combine edge computing with cloud intelligence. Third Eye delivers real-time threat detection, anomaly identification, and comprehensive surveillance analytics.",
    cta: "Join Waitlist",
    features: [
      {
        title: "Real-Time Object Detection",
        description:
          "Identify people, vehicles, and objects instantly. Advanced neural networks deliver sub-second detection with high accuracy.",
      },
      {
        title: "Behavioral Analysis",
        description:
          "Understand patterns and detect suspicious activities. AI learns normal behavior to identify anomalies automatically.",
      },
      {
        title: "Anomaly Detection",
        description:
          "Spot unusual events before they become incidents. Crowd formation, abandoned objects, and perimeter breaches detected instantly.",
      },
      {
        title: "Edge Processing",
        description:
          "Process video on-device for instant response. Reduce bandwidth costs and latency with intelligent edge computing.",
      },
      {
        title: "Cloud Analytics",
        description:
          "Deep insights from aggregated data. Historical analysis, trend detection, and comprehensive reporting dashboards.",
      },
      {
        title: "Alert Management",
        description:
          "Smart notifications that matter. Customizable rules, escalation paths, and integration with existing security systems.",
      },
    ],
    industries: [
      { name: "Enterprise", note: "Corporate campuses" },
      { name: "Retail", note: "Loss prevention" },
      { name: "Property", note: "Building management" },
      { name: "Public Safety", note: "Municipal security" },
    ],
    closing: {
      headline: "Ready to upgrade your security?",
      body: "Join our pilot program and experience the future of intelligent surveillance.",
    },
  },
  {
    slug: "growthly",
    part: "BI-05",
    name: "Growth-ly",
    shortName: "Growth-ly",
    category: "Customer Relationship Management",
    status: "Coming Soon",
    tagline: "Intelligent CRM for Modern Businesses",
    summary: "Intelligent CRM for modern businesses",
    description:
      "A next-generation customer relationship management platform powered by AI. Growth-ly helps sales teams work smarter with intelligent lead scoring, automated outreach, and predictive analytics that actually drive revenue.",
    cta: "Get Notified",
    features: [
      {
        title: "Intelligent Lead Scoring",
        description:
          "AI analyzes prospect behavior to prioritize your hottest leads. Focus your team's energy on opportunities most likely to close.",
      },
      {
        title: "Automated Outreach",
        description:
          "Smart sequences that adapt to prospect engagement. Personalized messaging at scale without losing the human touch.",
      },
      {
        title: "Pipeline Management",
        description:
          "Visual deal tracking with AI-powered forecasting. Know exactly where every opportunity stands and what's needed to close.",
      },
      {
        title: "Contact Intelligence",
        description:
          "Automatically enrich contact data from across the web. Complete profiles with social links, company info, and engagement history.",
      },
      {
        title: "Revenue Analytics",
        description:
          "Track every metric that matters. Conversion rates, deal velocity, rep performance, and revenue forecasting in real-time.",
      },
      {
        title: "Seamless Integrations",
        description:
          "Connect with your existing tools. Email, calendar, Slack, and hundreds of other apps work together seamlessly.",
      },
    ],
    industries: [
      { name: "SMB", note: "Growing businesses" },
      { name: "Enterprise", note: "Large sales teams" },
      { name: "SaaS", note: "Subscription businesses" },
      { name: "Agencies", note: "Service providers" },
    ],
    closing: {
      headline: "Be the first to know",
      body: "Growth-ly is currently in development. Sign up to get early access when we launch.",
    },
  },
  {
    slug: "kinly",
    part: "BI-06",
    name: "Kinly",
    shortName: "Kinly",
    category: "Accessibility & Assistance",
    status: "Active Development",
    tagline: "Technology, on your terms",
    summary: "AI companion for understanding and operating your phone",
    description:
      "An AI-powered technology companion for Android that helps people understand and operate their phones through natural conversation. Instead of learning menus, icons, and ever-changing app layouts, you say what you're trying to do — Kinly explains the screen, highlights the right control, guides you step by step, or safely performs the steps with you. Built on the belief that technology should adapt to the person, not the other way around.",
    cta: "Join Waitlist",
    features: [
      {
        title: "Show Me",
        description:
          "Explains what's on screen and highlights the right control. In this mode Kinly never taps or types — you stay in charge of every action.",
      },
      {
        title: "Help Me",
        description:
          "Guides you one step at a time in plain language while you perform each action yourself, at your own pace.",
      },
      {
        title: "Do It With Me",
        description:
          "Performs simple, low-risk steps for you and always asks before anything consequential — sending, buying, or deleting.",
      },
      {
        title: "On-Device Safety Engine",
        description:
          "Every AI-proposed action passes through a deterministic safety engine on the phone. Consequential actions require explicit confirmation, and the result of every step is verified rather than assumed.",
      },
      {
        title: "Private by Design",
        description:
          "Passwords, codes, and card numbers are masked on-device and never leave the phone. No stored screenshots, and no screen access outside an active session.",
      },
      {
        title: "Always in Control",
        description:
          "A Stop button is always available. Large readable text, big touch targets, and full light and dark themes adapt the interface to you.",
      },
    ],
    industries: [
      { name: "Individuals", note: "Anyone who finds technology frustrating" },
      { name: "Accessibility", note: "Visual, motor, and cognitive support" },
      { name: "Older Adults", note: "Independence with modern devices" },
      { name: "Families", note: "Helping the people you love stay connected" },
    ],
    closing: {
      headline: "Technology, on your terms",
      body: "Kinly is in development — the production foundation and safety architecture are complete, and guided screen assistance is the current milestone. Join the waitlist to be first in line.",
    },
  },
];

export function getPlatform(slug: string): Platform | undefined {
  return platforms.find((p) => p.slug === slug);
}
