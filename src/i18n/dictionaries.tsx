import React from "react";
import type { Language } from "../context/LanguageContext";
import { about as aboutDefault, person as personDefault } from "../resources/content";

export const dictionaries: Record<string, any> = {
  ru: {
    person: { ...personDefault, role: "Frontend-разработчик" },
    about: {
      ...aboutDefault,
      label: "Обо мне",
      title: `Обо мне – ${personDefault.name}`,
      description: `Познакомьтесь с ${personDefault.name}, ${personDefault.location}`,
      intro: {
        display: true,
        title: "Введение",
        description: (
          <>Старательный разработчик, ориентированный на создание высококачественных интерфейсов.</>
        ),
      },
      work: { display: false, title: "Опыт работы", experiences: [] },
      studies: {
        display: true,
        title: "Образование",
        institutions: [
          { name: "ITSTEP Academy", description: <>Курсы программирования.</> },
        ],
      },
      technical: {
        display: true,
        title: "Технические навыки",
        skills: [
          {
            title: "Web & Styling",
            description: <>Уверенная верстка современных адаптивных интерфейсов. Опыт HTML5/CSS3 — 1.5 года.</>,
            tags: [
              { name: "HTML5 (1.5 г.)", icon: "html" }, { name: "CSS3 (1.5 г.)", icon: "css" },
              { name: "SASS / SCSS (6 мес.)", icon: "globe" }, { name: "Bootstrap (6 мес.)", icon: "globe" },
            ],
          },
          {
            title: "JavaScript & React",
            description: <>Разрабатываю интерактивные приложения. Опыт React.js и JS (ES6+) — 1 год, TypeScript — 6 мес.</>,
            tags: [
              { name: "React.js (1 г.)", icon: "nextjs" }, { name: "JavaScript (1 г.)", icon: "javascript" },
              { name: "TypeScript (6 мес.)", icon: "javascript" }, { name: "Vite (1.5 г.)", icon: "globe" }, { name: "RCA (6 мес.)", icon: "globe" },
            ],
          },
          {
            title: "Backend & Bots",
            description: <>Создаю Telegram-ботов на базе Python (6 мес). Работаю с REST/JSON (1 год) и Strapi (6 мес).</>,
            tags: [
              { name: "Telegram bots (6 мес.)", icon: "telegram" }, { name: "Python (6 мес.)", icon: "globe" },
              { name: "Strapi (6 мес.)", icon: "globe" }, { name: "REST/JSON (1 г.)", icon: "globe" },
            ],
          },
          {
            title: "Tools & AI",
            description: <>Использую Git/GitHub. Базовые навыки Figma и AI для ускорения разработки.</>,
            tags: [
              { name: "GitHub (3 г.)", icon: "github" }, { name: "Git (2 г.)", icon: "github" },
              { name: "Figma & AI (6 мес.)", icon: "figma" },
            ],
          }
        ]
      },
    }
  },
  en: {
    person: { ...personDefault, role: "Frontend Developer" },
    about: {
      ...aboutDefault,
      label: "About Me",
      title: `About Me – ${personDefault.name}`,
      description: `Meet ${personDefault.name}, ${personDefault.location}`,
      intro: {
        display: true,
        title: "Introduction",
        description: (
          <>Dedicated developer focused on creating high-quality interfaces.</>
        ),
      },
      work: { display: false, title: "Work", experiences: [] },
      studies: {
        display: true,
        title: "Education",
        institutions: [
          { name: "ITSTEP Academy", description: <>Programming courses.</> },
        ],
      },
      technical: {
        display: true,
        title: "Skills",
        skills: [
          {
            title: "Web & Styling",
            description: <>Fluent markup of modern responsive interfaces. 1.5 years experience with HTML5 and CSS3.</>,
            tags: [
              { name: "HTML5 (1.5 yrs)", icon: "html" }, { name: "CSS3 (1.5 yrs)", icon: "css" },
              { name: "SASS / SCSS (6 mos)", icon: "globe" }, { name: "Bootstrap (6 mos)", icon: "globe" },
            ],
          },
          {
            title: "JavaScript & React",
            description: <>Developing interactive web apps. Experience with React.js and JS (ES6+) is 1 year, TypeScript — 6 months.</>,
            tags: [
              { name: "React.js (1 yr)", icon: "nextjs" }, { name: "JavaScript (1 yr)", icon: "javascript" },
              { name: "TypeScript (6 mos)", icon: "javascript" }, { name: "Vite (1.5 yrs)", icon: "globe" }, { name: "RCA (6 mos)", icon: "globe" },
            ],
          },
          {
            title: "Backend & Bots",
            description: <>Creating Telegram bots using Python (6 mos). Working with REST/JSON APIs (1 year) and Strapi (6 mos).</>,
            tags: [
              { name: "Telegram bots (6 mos)", icon: "telegram" }, { name: "Python (6 mos)", icon: "globe" },
              { name: "Strapi (6 mos)", icon: "globe" }, { name: "REST/JSON (1 yr)", icon: "globe" },
            ],
          },
          {
            title: "Tools & AI",
            description: <>Using Git/GitHub. Basic Figma skills and using AI tools to accelerate development.</>,
            tags: [
              { name: "GitHub (3 yrs)", icon: "github" }, { name: "Git (2 yrs)", icon: "github" },
              { name: "Figma & AI (6 mos)", icon: "figma" },
            ],
          }
        ]
      },
    }
  },
  az: {
    person: { ...personDefault, role: "Frontend Tərtibatçısı" },
    about: {
      ...aboutDefault,
      label: "Haqqımda",
      title: `Haqqımda – ${personDefault.name}`,
      description: `${personDefault.name} ilə tanış olun, ${personDefault.location}`,
      intro: {
        display: true,
        title: "Giriş",
        description: (
          <>Yüksək keyfiyyətli interfeyslər yaratmağa yönəlmiş proqramçı.</>
        ),
      },
      work: { display: false, title: "İş", experiences: [] },
      studies: {
        display: true,
        title: "Təhsil",
        institutions: [
          { name: "ITSTEP Academy", description: <>Proqramlaşdırma kursları.</> },
        ],
      },
      technical: {
        display: true,
        title: "Texniki Bacarıqlar",
        skills: [
          {
            title: "Web & Styling",
            description: <>Müasir responsiv interfeyslərin peşəkar tərtibatı. HTML5 və CSS3 üzrə 1.5 il təcrübə.</>,
            tags: [
              { name: "HTML5 (1.5 il)", icon: "html" }, { name: "CSS3 (1.5 il)", icon: "css" },
              { name: "SASS / SCSS (6 ay)", icon: "globe" }, { name: "Bootstrap (6 ay)", icon: "globe" },
            ],
          },
          {
            title: "JavaScript & React",
            description: <>İnteraktiv tətbiqlər. React.js və JS (ES6+) üzrə 1 il, TypeScript üzrə 6 ay təcrübə.</>,
            tags: [
              { name: "React.js (1 il)", icon: "nextjs" }, { name: "JavaScript (1 il)", icon: "javascript" },
              { name: "TypeScript (6 ay)", icon: "javascript" }, { name: "Vite (1.5 il)", icon: "globe" }, { name: "RCA (6 ay)", icon: "globe" },
            ],
          },
          {
            title: "Backend & Bots",
            description: <>Python əsasında Telegram botları (6 ay). REST/JSON (1 il) və Strapi CMS (6 ay) ilə işləyirəm.</>,
            tags: [
              { name: "Telegram botları (6 ay)", icon: "telegram" }, { name: "Python (6 ay)", icon: "globe" },
              { name: "Strapi (6 ay)", icon: "globe" }, { name: "REST/JSON (1 il)", icon: "globe" },
            ],
          },
          {
            title: "Tools & AI",
            description: <>Git/GitHub istifadə edirəm. Veb tərtibatını sürətləndirmək üçün Figma və süni intellekt (AI) bacarıqları.</>,
            tags: [
              { name: "GitHub (3 il)", icon: "github" }, { name: "Git (2 il)", icon: "github" },
              { name: "Figma & AI (6 ay)", icon: "figma" },
            ],
          }
        ]
      },
    }
  },
};
export const getDictionary = (lang: Language) => dictionaries[lang] || dictionaries.ru;