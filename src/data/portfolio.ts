/**
 * ─────────────────────────────────────────────────────────────
 * EDIT EVERYTHING HERE.
 * This is the single source of truth for the whole portfolio:
 * personal info, social links, skills, projects, journey,
 * achievements and contact details.
 * ─────────────────────────────────────────────────────────────
 */

import portraitAsset from "@/assets/lakshya-portrait.png.asset.json";

export const personal = {
  brand: "Lakshya.Tech",
  name: "Lakshya Chandra",
  role: "Aspiring AI/ML Engineer",
  tagline: "Building Today. Innovating Tomorrow.",
  footerTagline: "Think Today. Code Today. Create a New Tomorrow.",
  status: "Open to Opportunities",
  education: "B.Tech CSE — AI & ML",
  institute: "PW Institute of Innovation",
  focus: "AI / ML / Software Development",
  currentStatus: "Student & Builder",
  hero: {
    eyebrow: "ASPIRING",
    headlineLead: "AI/ML",
    headlineHighlight: "Engineer",
    subtitle:
      "Building intelligent solutions with code, data, and a vision for a better tomorrow.",
    primaryCta: "View My Work",
    secondaryCta: "Let's Connect",
    strengths: ["Python", "Java", "Machine Learning"],
  },
  about: {
    heading: "Turning Curiosity Into Code.",
    paragraphs: [
      "I'm Lakshya, a B.Tech CSE student specializing in Artificial Intelligence and Machine Learning at PW Institute of Innovation. I'm interested in understanding how technology works, building software, experimenting with AI, and continuously turning ideas into practical projects.",
      "I learn by building. Most of what I know comes from writing code, breaking things, reading documentation and rebuilding them better — across AI/ML, programming fundamentals and problem solving. Every project is an experiment in getting a little sharper than the last one.",
    ],
  },
};

// ── PROFILE PHOTO CARD (About section) ───────────────────────
// Drop your portrait in src/assets, then import it here.
// Recommended: a 4:5 portrait crop with you centered.
export const profile = {
  /** Set to your imported image URL. Empty string shows a placeholder frame. */
  photo: portraitAsset.url,
  photoAlt: "Portrait of Lakshya Chandra",
  name: "Lakshya Chandra",
  role: "Aspiring AI/ML Engineer",
  degree: "B.Tech CSE (AI/ML)",
  institute: "PW Institute of Innovation",
  keywords: ["AI/ML", "Python", "Java", "Generative AI"],
};

// ── SOCIAL / CONTACT LINKS (edit these) ──────────────────────
export const links = {
  github: "https://github.com/Lakshya-tech2026",
  githubUsername: "Lakshya-tech2026",
  linkedin: "https://www.linkedin.com/in/lakshya-tech-0042ba433",
  email: "lakshya.tech2026@gmail.com",
};

// ── NAVIGATION ───────────────────────────────────────────────
export const navItems = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#journey" },
  { label: "Achievements", href: "#achievements" },
  { label: "Contact", href: "#contact" },
];

// ── SKILLS ───────────────────────────────────────────────────
export type SkillIcon =
  | "code"
  | "coffee"
  | "brain"
  | "sparkles"
  | "cpu"
  | "layout"
  | "palette"
  | "braces"
  | "smartphone"
  | "git"
  | "github"
  | "figma"
  | "puzzle"
  | "pen"
  | "lightbulb";

export type Skill = {
  name: string;
  description: string;
  icon: SkillIcon;
  /** "learning" | "working" | "comfortable" — honest, no fake percentages */
  level?: "Learning" | "Working knowledge" | "Comfortable";
};

export const skillGroups: { group: string; skills: Skill[] }[] = [
  {
    group: "Programming",
    skills: [
      {
        name: "Python",
        description: "Core language for my AI/ML work, scripting and automation.",
        icon: "code",
        level: "Comfortable",
      },
      {
        name: "Java",
        description: "Object-oriented programming, data structures and logic building.",
        icon: "coffee",
        level: "Working knowledge",
      },
    ],
  },
  {
    group: "AI / ML",
    skills: [
      {
        name: "Machine Learning",
        description: "Supervised learning basics, model training and evaluation.",
        icon: "brain",
        level: "Learning",
      },
      {
        name: "Generative AI",
        description: "Prompting, LLM-based tooling and experimenting with AI workflows.",
        icon: "sparkles",
        level: "Working knowledge",
      },
      {
        name: "AI Concepts",
        description: "Neural networks, data pipelines and how models actually behave.",
        icon: "cpu",
        level: "Learning",
      },
    ],
  },
  {
    group: "Development",
    skills: [
      {
        name: "HTML",
        description: "Semantic, accessible markup as the base of every interface.",
        icon: "layout",
        level: "Comfortable",
      },
      {
        name: "CSS",
        description: "Layout, design systems and modern responsive styling.",
        icon: "palette",
        level: "Comfortable",
      },
      {
        name: "JavaScript",
        description: "Interactivity, DOM logic and building in the browser.",
        icon: "braces",
        level: "Working knowledge",
      },
      {
        name: "Responsive Web Development",
        description: "Interfaces that stay clean from 360px to ultrawide.",
        icon: "smartphone",
        level: "Working knowledge",
      },
    ],
  },
  {
    group: "Tools",
    skills: [
      {
        name: "Git",
        description: "Version control, branching and tracking my own progress.",
        icon: "git",
        level: "Working knowledge",
      },
      {
        name: "GitHub",
        description: "Hosting projects, collaboration and open-source reading.",
        icon: "github",
        level: "Comfortable",
      },
      {
        name: "Figma",
        description: "Wireframing and designing interfaces before writing code.",
        icon: "figma",
        level: "Working knowledge",
      },
    ],
  },
  {
    group: "Other",
    skills: [
      {
        name: "Problem Solving",
        description: "Breaking messy problems into small, testable steps.",
        icon: "puzzle",
      },
      {
        name: "UI/UX",
        description: "Clarity, hierarchy and interfaces that respect the user.",
        icon: "pen",
      },
      {
        name: "Creative Thinking",
        description: "Finding non-obvious approaches and shipping ideas fast.",
        icon: "lightbulb",
      },
    ],
  },
];

// ── PROJECTS ─────────────────────────────────────────────────
// NOTE: these are labelled PLACEHOLDER entries. Replace the copy
// and the links (liveUrl / repoUrl) with your real projects.
export type Project = {
  id: string;
  number: string;
  name: string;
  category: string;
  description: string;
  tags: string[];
  /** Set to false once the entry describes a real, finished project. */
  placeholder: boolean;
  liveUrl?: string;
  liveLabel?: string;
  repoUrl?: string;
  repoLabel?: string;
  caseStudy: {
    overview: string;
    problem: string;
    approach: string;
    technology: string[];
    keyFeatures: string[];
    challenges: string;
    learned: string;
    future: string[];
  };
};

export const projects: Project[] = [
  {
    id: "ai-ml-project",
    number: "01",
    name: "AI/ML Project",
    category: "Artificial Intelligence / Machine Learning",
    description:
      "An AI/ML project focused on applying machine learning concepts to a practical problem.",
    tags: ["Python", "Machine Learning", "Data"],
    placeholder: true,
    liveUrl: "#",
    liveLabel: "View Project",
    repoUrl: links.github,
    repoLabel: "GitHub",
    caseStudy: {
      overview:
        "Placeholder overview — describe what the project does and who it is for in two or three sentences.",
      problem: "Placeholder — the specific problem this project set out to solve.",
      approach:
        "Placeholder — how the data was prepared, which model or method was chosen, and why.",
      technology: ["Python", "scikit-learn / pandas", "Jupyter Notebook"],
      keyFeatures: [
        "Placeholder feature one",
        "Placeholder feature two",
        "Placeholder feature three",
      ],
      challenges: "Placeholder — the hardest part of building it and how it was handled.",
      learned: "Placeholder — the concepts and habits this project taught you.",
      future: ["Placeholder improvement one", "Placeholder improvement two"],
    },
  },
  {
    id: "generative-ai-experiment",
    number: "02",
    name: "Generative AI Experiment",
    category: "Generative AI",
    description:
      "An experimental project exploring how generative AI can be used to create useful and interactive experiences.",
    tags: ["Python", "Generative AI", "AI"],
    placeholder: true,
    liveUrl: "#",
    liveLabel: "View Project",
    repoUrl: links.github,
    repoLabel: "GitHub",
    caseStudy: {
      overview:
        "Placeholder overview — what the experiment explores and what makes the output interesting.",
      problem: "Placeholder — the question or gap that made this experiment worth running.",
      approach: "Placeholder — prompting strategy, model choice and evaluation method.",
      technology: ["Python", "LLM API", "Prompt engineering"],
      keyFeatures: ["Placeholder feature one", "Placeholder feature two"],
      challenges: "Placeholder — reliability, cost or prompt-quality issues encountered.",
      learned: "Placeholder — what working with generative models taught you.",
      future: ["Placeholder improvement one", "Placeholder improvement two"],
    },
  },
  {
    id: "personal-portfolio",
    number: "03",
    name: "Personal Portfolio",
    category: "Web Development",
    description:
      "A responsive personal portfolio designed to showcase projects, technical skills, learning progress, and experiments.",
    tags: ["HTML", "CSS", "JavaScript"],
    placeholder: true,
    liveUrl: "#",
    liveLabel: "Live Demo",
    repoUrl: links.github,
    repoLabel: "GitHub",
    caseStudy: {
      overview:
        "Placeholder overview — the goal of the portfolio and the impression it should create.",
      problem: "Placeholder — why a custom site instead of a generic profile page.",
      approach: "Placeholder — design system, layout decisions and content structure.",
      technology: ["HTML", "CSS", "JavaScript"],
      keyFeatures: ["Responsive layout", "Section-based storytelling", "Editable content data"],
      challenges: "Placeholder — the layout or performance challenge you solved.",
      learned: "Placeholder — what building the site taught you about front-end work.",
      future: ["Placeholder improvement one", "Placeholder improvement two"],
    },
  },
  {
    id: "pw-ioi-tech-club-website",
    number: "04",
    name: "PW IOI Tech Club Website",
    category: "Web / Community",
    description:
      "A modern technology-club website concept focused on innovation, technical excellence, collaboration, and student community.",
    tags: ["UI/UX", "Web Development", "Figma"],
    placeholder: true,
    liveUrl: "#",
    liveLabel: "View Design",
    repoUrl: "#",
    repoLabel: "Live Demo",
    caseStudy: {
      overview: "Placeholder overview — the club, its audience and the concept behind the site.",
      problem: "Placeholder — what the community needed that existing pages didn't provide.",
      approach: "Placeholder — research, wireframes in Figma, then build.",
      technology: ["Figma", "HTML", "CSS"],
      keyFeatures: ["Events section", "Member showcase", "Join flow"],
      challenges: "Placeholder — balancing information density with a clean look.",
      learned: "Placeholder — lessons about designing for a real group of people.",
      future: ["Placeholder improvement one", "Placeholder improvement two"],
    },
  },
];

// ── JOURNEY / TIMELINE ───────────────────────────────────────
export type TimelineEntry = {
  date: string;
  institution: string;
  role: string;
  description: string;
};

export const timeline: TimelineEntry[] = [
  {
    date: "Present",
    institution: "PW Institute of Innovation",
    role: "B.Tech CSE — Artificial Intelligence and Machine Learning",
    description:
      "Studying computer science with a specialization in AI and ML, while building projects alongside coursework.",
  },
];

/** Shown when no professional experience has been added. */
export const experienceFallback =
  "Currently focused on learning, building, experimenting, and developing real-world projects.";

// ── ACHIEVEMENTS ─────────────────────────────────────────────
export type Achievement = {
  title: string;
  category:
    | "Certification"
    | "Hackathon"
    | "Competition"
    | "Project"
    | "Course"
    | "Technical Milestone";
  date?: string;
  description?: string;
  url?: string;
};

/** Add real achievements here. Left empty on purpose — nothing invented. */
export const achievements: Achievement[] = [];

export const achievementsFallback = "More milestones coming soon.";
