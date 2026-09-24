import type { About, Blog, Gallery, Home, Newsletter, Person, Social, Work } from "@/types";
import { Line, Row, Text } from "@once-ui-system/core";

const person: Person = {
  firstName: "Rahim",
  lastName: "Aghazada",
  name: "Rahim Aghazada",
  role: "Data & Business Analyst",
  avatar: "/images/avatar.jpg",
  email: "raxheem1@gmail.com",
  location: "Asia/Baku",
  languages: ["English", "Russian", "Azerbaijani"],
  locale: "ru",
};

const newsletter: Newsletter = {
  display: false,
  title: <>Подпишитесь на рассылку {person.firstName}</>,
  description: <>Мои новости</>,
};

const social: Social = [
  { name: "Telegram", icon: "telegram", link: "https://t.me/raxheem1", essential: true },
  { name: "Email", icon: "email", link: "mailto:raxheem1@gmail.com", essential: true },
];

const home: Home = {
  path: "/",
  image: "/images/og/home.jpg",
  label: "Главная",
  title: `${person.name} – Аналитика данных`,
  description: `Портфолио аналитика ${person.name}`,
  headline: <>Преобразую данные в инсайты и эффективные бизнес-решения</>,
  featured: {
    display: false,
    title: (
      <Row gap="12" vertical="center">
        <strong className="ml-4">Featured</strong>{" "}
        <Line background="brand-alpha-strong" vert height="20" />
        <Text marginRight="4" onBackground="brand-medium">
          work
        </Text>
      </Row>
    ),
    href: "",
  },
  subline: (
    <>
      Я {person.firstName}, {person.role}. Специализируюсь на клиентской аналитике, бизнес аналитике
      данных (BI) и оценке экономической эффективности.
    </>
  ),
};

const about: About = {
  path: "/about",
  label: "Обо мне",
  title: `Обо мне – ${person.name}`,
  description: `Узнайте больше о ${person.name}, аналитике данных из ${person.location}`,
  tableOfContent: { display: true, subItems: false },
  avatar: { display: true },
  calendar: { display: false, link: "" },
  intro: {
    display: true,
    title: "Введение",
    description: (
      <>
        Я аналитик с высшим образованием и практическим опытом в продажах и обслуживании клиентов.
        Работал кассиром в Gloria Jean's в условиях высокой клиентской нагрузки, часто выполняя
        функции менеджера, а в компании Infocus взаимодействовал с премиальными клиентами.
        <br />
        <br />
        Этот опыт помог мне глубоко понять клиентов, бизнес-процессы и влияние операционных решений
        на показатели и отчётность. В магистратуре я специализировался на бизнес-аналитике данных и
        исследовал тему анализа и оптимизации клиентских данных в долгосрочном бизнесе. Сейчас
        продолжаю обучение в докторантуре по экономике.
      </>
    ),
  },
  work: {
    display: true,
    title: "Опыт работы",
    experiences: [
      {
        company: "Gloria Jean's",
        timeframe: "Прошлый опыт",
        role: "Кассир / И.о. менеджера",
        achievements: [
          "Работа в условиях высокой клиентской нагрузки.",
          "Выполнение функций менеджера, управление операционными процессами.",
        ],
        images: [],
      },
      {
        company: "Infocus",
        timeframe: "Прошлый опыт",
        role: "Специалист по работе с клиентами",
        achievements: [
          "Взаимодействие с премиальными клиентами.",
          "Глубокое понимание бизнес-процессов и влияния операционных решений на отчётность сервиса.",
        ],
        images: [],
      },
    ],
  },
  studies: {
    display: true,
    title: "Образование",
    institutions: [
      {
        name: "Kozybaev University",
        description: <>Докторантура по специальности «Экономика» (по настоящее время).</>,
      },
      {
        name: "UNEC Azerbaijan",
        description: <>Управление бизнесом, специализация «Аналитика данных».</>,
      },
      { name: "WayUp Academy", description: <>Web and UX/UI design.</> },
    ],
  },
  technical: {
    display: true,
    title: "Технические навыки",
    skills: [
      {
        title: "Data Analysis",
        description: (
          <>
            Преобразую сырые данные в структурированный аналитический слой: очищаю, обрабатываю,
            рассчитываю и формирую датасет для моделей. Строю воспроизводимые пайплайны подготовки
            данных для последующего моделирования.
          </>
        ),
        tags: [
          { name: "SQL", icon: "database" },
          { name: "Python", icon: "node" },
        ],
      },
      {
        title: "Customer Analytics",
        description: (
          <>
            Строю клиентскую аналитику на основе транзакционных данных: рассчитываю скоринг, провожу
            сегментацию и моделирую риск оттока. Использую результаты для выделения прибыльных
            сегментов, оценки риска ухода, таргетирования маркетинговых активностей и другое.
          </>
        ),
        tags: [
          { name: "RFM", icon: "chart" },
          { name: "K-Means", icon: "chart" },
          { name: "CLV", icon: "chart" },
          { name: "Churn", icon: "chart" },
        ],
      },
      {
        title: "Business Intelligence",
        description: (
          <>
            Разрабатываю отчётность и дашборды для мониторинга продаж, клиентских сегментов и
            эффективности маркетинга. Перевожу результаты анализа в понятные KPI и визуальные
            инсайты для поддержки управленческих решений.
          </>
        ),
        tags: [
          { name: "Tableau", icon: "layout" },
          { name: "Excel", icon: "layout" },
          { name: "KPI Dashboards", icon: "dashboard" },
        ],
      },
      {
        title: "Economic Analysis",
        description: (
          <>
            Оцениваю экономическую эффективность маркетинговых решений: моделирую влияние бюджета,
            скидок на прибыль по клиентским сегментам и тд. Интегрирую статистику, бизнес‑аналитику
            и ML‑прогнозы в задачи оптимизации расходов и доходности.
          </>
        ),
        tags: [
          { name: "Statistics", icon: "chart" },
          { name: "Risk Management", icon: "shield" },
        ],
      },
    ],
  },
};

const blog: Blog = {
  path: "/blog",
  label: "Блог",
  title: "Мои Заметки",
  description: `Статьи и материалы от ${person.name}`,
};
const work: Work = {
  path: "/work",
  label: "Работы",
  title: `Проекты – ${person.name}`,
  description: `Аналитические исследования и проекты от ${person.name}`,
};
const gallery: Gallery = {
  path: "/gallery",
  label: "Галерея",
  title: `Галерея – ${person.name}`,
  description: `Визуальные материалы от ${person.name}`,
  images: [],
};

export { person, social, newsletter, home, about, blog, work, gallery };
