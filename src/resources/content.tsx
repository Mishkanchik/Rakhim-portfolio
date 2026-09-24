import { About, Blog, Gallery, Home, Newsletter, Person, Social, Work } from "@/types";
import { Line, Row, Text } from "@once-ui-system/core";

const person: Person = {
  firstName: "Mykhailo",
  lastName: "Shumilin",
  name: `Mykhailo Shumilin`,
  role: "Frontend Developer",
  avatar: "/images/avatar.jpg",
  email: "",
  location: "Europe/Kyiv", // Expecting the IANA time zone identifier
  languages: [], // optional: Leave the array empty if you don't want to display languages
  locale: "uk", // BCP 47 language tag for the HTML lang attribute
};

const newsletter: Newsletter = {
  display: false,
  title: <>Підпишіться на розсилку {person.firstName}</>,
  description: <>Мої новини про веб-розробку та нові проекти</>,
};

const social: Social = [
  // Links are automatically displayed.
  // Import new icons in /once-ui/icons.ts
  // Set essentials: true for links you want to show on the about page
  {
    name: "GitHub",
    icon: "github",
    link: "https://github.com/Mishkanchik",
    essential: true,
  },
  {
    name: "Telegram",
    icon: "telegram",
    link: "https://t.me/mishkanchik",
    essential: true,
  },
  {
    name: "Instagram",
    icon: "instagram",
    link: "https://www.instagram.com/___mishkanchik",
    essential: true,
  },
  {
    name: "Steam",
    icon: "steam",
    link: "https://steamcommunity.com/profiles/76561199496413147/",
    essential: false,
  },
];

const home: Home = {
  path: "/",
  image: "/images/og/home.jpg",
  label: "Головна",
  title: `${person.name} – Портфоліо`,
  description: `Портфоліо Frontend розробника ${person.name}`,
  headline: <>Створюю швидкі, сучасні та візуально довершені веб-інтерфейси</>,
  featured: {
    display: false,
    title: (
      <Row gap="12" vertical="center">
        <strong className="ml-4">Once UI</strong>{" "}
        <Line background="brand-alpha-strong" vert height="20" />
        <Text marginRight="4" onBackground="brand-medium">
          Featured work
        </Text>
      </Row>
    ),
    href: "",
  },
  subline: (
    <>
      Я {person.firstName}, {person.role.toLowerCase()} із Цуманя, Україна.
      Створюю сучасні веб-додатки та перетворюю складні ідеї на чистий, якісний та привабливий код.
    </>
  ),
};

const about: About = {
  path: "/about",
  label: "Про мене",
  title: `Про мене – ${person.name}`,
  description: `Познайомтеся з ${person.name}, ${person.role} із ${person.location}`,
  tableOfContent: {
    display: true,
    subItems: false,
  },
  avatar: {
    display: true,
  },
  calendar: {
    display: false,
    link: "",
  },
  intro: {
    display: true,
    title: "Вступ",
    description: (
      <>
        Старанний розробник, орієнтований на створення високоякісних, продуктивних та естетично довершених інтерфейсів з увагою до найменших деталей. Завжди прагну вдосконалювати свої навички та створювати веб-продукти, якими приємно користуватися.
      </>
    ),
  },
  work: {
    display: false, // Hide placeholder experience
    title: "Досвід роботи",
    experiences: [],
  },
  studies: {
    display: true,
    title: "Освіта",
    institutions: [
      {
        name: "ITSTEP Academy",
        description: <>Курси комп'ютерної академії, вивчення програмування та веб-розробки.</>,
      },
      {
        name: "SKILLUP",
        description: <>Професійні курси підготовки ІТ-спеціалістів, поглиблене вивчення Frontend.</>,
      },
    ],
  },
  technical: {
    display: true,
    title: "Технічні навички",
    skills: [
      {
        title: "Frontend Core",
        description: (
          <>Створюю адаптивну та сучасну верстку. Маю досвід роботи з HTML/CSS понад 4.5 роки, а також Tailwind CSS (1 рік), SASS / SCSS та Bootstrap (по 6 місяців).</>
        ),
        tags: [
          { name: "HTML/CSS (4.5 р.)", icon: "globe" },
          { name: "Tailwind CSS (1 р.)", icon: "globe" },
          { name: "SASS / SCSS (6 міс.)", icon: "globe" },
          { name: "Bootstrap (6 міс.)", icon: "globe" },
        ],
      },
      {
        title: "JavaScript & React Ecosystem",
        description: (
          <>Розробляю інтерактивні веб-додатки. Досвід роботи з React.js та JavaScript (ES6+) становить 1 рік, TypeScript та RCA — 6 місяців. Для збірки проектів використовую Vite (1.5 роки).</>
        ),
        tags: [
          { name: "React.js (1 р.)", icon: "nextjs" },
          { name: "JavaScript (1 р.)", icon: "javascript" },
          { name: "TypeScript (6 міс.)", icon: "javascript" },
          { name: "Vite (1.5 р.)", icon: "globe" },
          { name: "RCA (6 міс.)", icon: "globe" },
        ],
      },
      {
        title: "Backend, Bots & Automation",
        description: (
          <>Створюю Telegram ботів (досвід 6 місяців) на базі Python (6 місяців). Працюю з REST/JSON (1 рік) та безголовою CMS Strapi (6 місяців).</>
        ),
        tags: [
          { name: "Telegram bots (6 міс.)", icon: "telegram" },
          { name: "Python (6 міс.)", icon: "globe" },
          { name: "Strapi (6 міс.)", icon: "globe" },
          { name: "REST/JSON (1 р.)", icon: "globe" },
        ],
      },
      {
        title: "Git, GitHub & Design Tools",
        description: (
          <>Використовую Git (2 роки) та GitHub (3 роки) для контролю версій. Маю базові навички роботи з Figma та штучним інтелектом (AI) для прискорення веб-розробки.</>
        ),
        tags: [
          { name: "GitHub (3 р.)", icon: "github" },
          { name: "Git (2 р.)", icon: "github" },
          { name: "Figma & AI (6 міс.)", icon: "figma" },
        ],
      },
    ],
  },
};

const blog: Blog = {
  path: "/blog",
  label: "Блог",
  title: "Моя Музика & Подорожі",
  description: `Авторська музика та світлини з подорожей від ${person.name}`,
};

const work: Work = {
  path: "/work",
  label: "Роботи",
  title: `Проекти – ${person.name}`,
  description: `Розроблені проекти та веб-додатки від ${person.name}`,
};

const gallery: Gallery = {
  path: "/gallery",
  label: "Галерея",
  title: `Галерея – ${person.name}`,
  description: `Світлини та візуальні матеріали ${person.name}`,
  images: [
    {
      src: "/images/gallery/horizontal-1.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/vertical-4.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/horizontal-3.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/vertical-1.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/vertical-2.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/horizontal-2.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/horizontal-4.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/vertical-3.jpg",
      alt: "image",
      orientation: "vertical",
    },
  ],
};

export { person, social, newsletter, home, about, blog, work, gallery };
