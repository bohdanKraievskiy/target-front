export const options = [
  {
    id: 1,
    name: "subscribe_1_month",
    price: 249,
    stars: "249 ",
    benefits: ["full_access", "online_support"],
    type: 1,
  },
  {
    id: 2,
    name: "buy_forever",
    price: 499,
    stars: "499 ",
    benefits: ["full_access_forever", "community", "online_support"],
    type: 2,
  },
];

export const mentors = [
  { name: "David Kruel", status: "1", price: 1, company: "Kruel Live" },
];

export const CoursesData = [
  {
    id: 2925675,
    title: "Курс по TON блокчейну и Телеграм",
    description:
      "Курс предназначен для разработчиков и IT-специалистов. Он даёт теоретические и практические знания о технологиях и концепциях блокчейна TON, включая язык программирования FunC, смарт-контракты и их тестирование, а также создание мини-приложений.",
    slug: "my-course",
    category: "Crypto", // Здесь оставляем категорию как есть, так как она уже соответствует новым названиям
    chapters: [
      "1. Introduction to TON Blockchain",
      "2. TVM, Transactions, Scalability, and Business Cases",
      "3. Smart Contract Development Lifecycle",
      "4. Mastering FunC Contract Writing",
      "5. Frontend Interaction with TON Blockchain",
      "6. Creating Telegram-Compatible Interfaces with TON Blockchain",
      "7. NFTs and Jettons",
      "8. Smart Contract Security",
      "9. Ecosystem Products, Future Plans, and Vision",
    ],
    img: "/courses/TON & TG.png",
  },
  {
    id: 2930629,
    title: "Product Analytics for Beginners",
    description:
      "Получите фундаментальное понимание аналитики продукта и ее роли в бизнесе. К концу этой главы студенты узнают, что такое продуктовая аналитика, поймут, почему она имеет решающее значение для успеха продукта, и познакомятся с ключевыми показателями и терминами в этой области.",
    slug: "ai-placeholder",
    category: "Digital Marketing", // Категория обновлена на английский
    chapters: [
      "1. Introduction to Product Analytics",
      "2. Setting Up Analytics Frameworks",
      "3. User Behavior Analysis",
      "4. Experimentation and A/B Testing",
      "5. Making Data-Driven Decisions and Communicating Insights",
    ],
    img: "/courses/Product Analytics for Beginners.png",
  },
  {
    id: 2930630,
    title: "Introduction to UX Research",
    description:
      "В этой главе вы получите глубокое представление об UX-исследованиях, важности UX в дизайне и основных концепциях UX-исследований. После завершения этой главы вы поймете основную роль UX-исследований в разработке продукта, как они формируют пользовательский опыт, а также основные концепции, которые лежат в основе работы UX-исследователей.",
    category: "UX&UI Design", // Обновлена категория на английский
    chapters: [
      "1. Understanding the Foundations of UX Research",
      "2. User Research Methods",
      "3. Analyzing and Synthesizing Research Findings",
      "4. Communicating UX Research Findings",
      "5. Applying UX Research to Design Decisions",
    ],
    img: "/courses/Introduction to UX Research.png",
  },
  {
    id: 2930631,
    title: "Data Science for Beginners",
    description:
      "Этот курс для начинающих знакомит с основными понятиями, инструментами и методами data science. Благодаря практическим занятиям учащиеся получат прочную основу для работы с данными, их анализа, визуализации и основ машинного обучения. К концу курса студенты будут обладать навыками анализа данных, раскрытия сути и построения простых прогностических моделей.",
    category: "Machine Learning", // Обновлена категория на английский
    chapters: [
      "1. Introduction to Data Science",
      "2. Data Collection and Preparation",
      "3. Exploratory Data Analysis (EDA)",
      "4. Data Visualization",
      "5. Basic Machine Learning",
    ],
    img: "/courses/Data Science for Beginners.png",
  },
  {
    id: 2930632,
    title: "Telegram Mini Apps. First Steps.",
    avatar: "Transform your body.png",
    description:
      "Unlock the potential of Telegram Mini Apps with this beginner's course! Learn to create engaging mini apps that enhance user interaction and boost productivity.",
    category: "QA Tester&Testing", // Обновлена категория на английский
    chapters: [
      "1. Introduction to Telegram Mini Apps",
      "2. Basics of Creating Mini Apps",
      "3. Designing for Mini Apps",
      "4. Designing Mini Apps Functionality and UX",
      "5. Deploying the App",
    ],
    img: "/courses/Telegram Mini Apps. First steps.png",
  },
  {
    id: 2926478,
    title: "Прокачай свое тело за 21 день.",
    avatar: "Transform your body.png",
    description:
      "Програма онлайн тренеровок и питания от професионального тренера и нутрициолога. Улучши свою физическую форму.",
    category: "Psychology", // Обновлена категория на английский
    chapters: [
      "1. Full-Body Workout with Resistance Bands",
      "2. Roller Workout",
      "3. Dumbbell Circuit Training",
      "4. Functional Training",
      "5. Dumbbell Intensive",
      "6. Core Workout",
      "7. Strength Training",
      "8. Coordination Training",
      "9. 20-Minute Dumbbell Circuit",
    ],
    img: "/courses/Transform your body.png",
  },
];

export const CategoriesData = [
  {
    name: "QA Tester&Testing",
  },
  {
    name: "Machine Learning",
  },
  {
    name: "SMM",
  },
  {
    name: "Accounting&Lawyers",
  },
  {
    name: "1C",
  },
  {
    name: "Manicure",
  },
  {
    name: "UX&UI Design",
  },
  {
    name: "Psychology",
  },
  {
    name: "Digital Marketing",
  },
  {
    name: "Machine Learning",
  },
  {
    name: "SQL",
  },
  {
    name: "Stock Market (Finance)",
  },
  {
    name: "Crypto",
  },
  {
    name: "Ads",
  },
];

export const groupedVideos = {
  1: [
    { id: "1.2", size: "48.8 MB", duration: "00:09:28" },
    { id: "1.5", size: "33.8 MB", duration: "00:07:36" },
  ],
  3: [
    { id: "3.5", size: "109 MB", duration: "00:31:36" },
    { id: "3.6", size: "47.7 MB", duration: "00:10:18" },
    { id: "3.4", size: "78 MB", duration: "00:23:59" },
  ],
  4: [
    { id: "4.5", size: "55.2 MB", duration: "00:15:26" },
    { id: "4.4", size: "74.9 MB", duration: "00:19:29" },
    { id: "4.6", size: "44.5 MB", duration: "00:12:27" },
    { id: "4.3", size: "103 MB", duration: "00:30:08" },
    { id: "4.2", size: "47.7 MB", duration: "00:13:57" },
  ],
  5: [
    { id: "5.1", size: "40.8 MB", duration: "00:08:00" },
    { id: "5.4", size: "59.4 MB", duration: "00:19:13" },
    { id: "5.2", size: "19.2 MB", duration: "00:05:58" },
    { id: "5.3", size: "38.6 MB", duration: "00:10:58" },
    { id: "5.5", size: "79.3 MB", duration: "00:20:46" },
  ],
  6: [
    { id: "6.4", size: "140 MB", duration: "00:30:10" },
    { id: "6.3", size: "41.7 MB", duration: "00:07:43" },
    { id: "6.2", size: "35.6 MB", duration: "00:05:34" },
  ],
  7: [
    { id: "7.3", size: "81.9 MB", duration: "00:16:30" },
    { id: "7.2", size: "125 MB", duration: "00:25:05" },
    { id: "7.5", size: "61.9 MB", duration: "00:12:46" },
    { id: "7.4", size: "50.4 MB", duration: "00:09:29" },
  ],
  8: [
    { id: "8.3", size: "15.8 MB", duration: "00:04:58" },
    { id: "8.4", size: "19.2 MB", duration: "00:06:13" },
    { id: "8.2", size: "30.9 MB", duration: "00:10:32" },
  ],
  9: [
    { id: "9.5", size: "20.4 MB", duration: "00:04:08" },
    { id: "9.4", size: "30.1 MB", duration: "00:06:37" },
    { id: "9.3", size: "22.8 MB", duration: "00:03:42" },
    { id: "9.2", size: "41.6 MB", duration: "00:09:39" },
  ],
};

export const courseConfig = {
  2925675: {
    img: "/courses/TON & TG.png",
    chapters: "9 ",
    videos: "32 ",
    duration: "15 ",
  },
  2926478: {
    img: "/courses/Transform your body.png",
    chapters: "9 ",
    videos: "9 ",
    duration: "4.5",
  },
  2930629: {
    img: "/courses/Product Analytics for Beginners.png",
    chapters: "5 ",
    videos: "0 ",
    duration: "6 ",
  },
  2930630: {
    img: "/courses/Introduction to UX Research.png",
    chapters: "5 ",
    videos: "0 ",
    duration: "6 ",
  },
  2930631: {
    img: "/courses/Data Science for Beginners.png",
    chapters: "5 ",
    videos: "0 ",
    duration: "6 ",
  },
  2930632: {
    img: "/courses/Telegram Mini Apps. First steps.png",
    chapters: "5 ",
    videos: "0 ",
    duration: "6 ",
  },
};

export const courseTagsConfig = {
  2925675: ["Digital", "TON", "Telegram"],
  2926478: ["Fitness", "Training"],
  2930629: ["Analytic", "Beginners"],
  2930630: ["Digital", "UX"],
  2930631: ["Digital", "Beginners", "Data"],
  2930632: ["Telegram", "TON", "Digital", "TMA"],
};

export const salaryData = [
  {
    title: "Junior",
    experience: "Experience up to 1 year",
    salary: "70",
  },
  {
    title: "Middle",
    experience: "Experience 1 3 years",
    salary: "130",
  },
  {
    title: "Senior",
    experience: "Experience over 3 years",
    salary: "190",
  },
];

export const averageSalaries = {
  "Machine Learning": 120000, // Data Scientist
  "UX&UI Design": 100000, // UX/UI Designer
  "Digital Marketing": 95000, // Marketing
  "QA Tester&Testing": 75000, // QA Tester
  Crypto: 130000, // Blockchain Developer
};
