type DialogNode = {
  id: string;
  analystMessage: string;
  nextOptions: {
    label: string;
    userMessage?: string;
    next: string | null;
  }[];
};

export type Message = {
  id: number;
  author: "user" | "analyst";
  text: string;
};

export type DialogOption = {
  label: string;
  userMessage?: string;
  next: string | null;
};


export const dialogTree: Record<string, DialogNode> = {
  start: {
    id: "start",
    analystMessage: "Аналитик на связи. Спрашивай.",
    nextOptions: [
      { label: "Где макет?", next: "figma" },
      { label: "Когда будет API?", next: "api" },
      { label: "Что вообще за задача?", next: "task" },
    ],
  },

  figma: {
    id: "figma",
    analystMessage: "В Figma же всё есть!",
    nextOptions: [
      { label: "Ссылка битая", next: "figma_broken" },
      { label: "Я не вижу ссылку", next: "figma_nolink" },
      { label: "Там пусто", next: "figma_empty" },
    ],
  },

  figma_broken: {
    id: "figma_broken",
    analystMessage: "Значит, еще не готово. Начни без макета.",
    nextOptions: [
      { label: "Как без макета?", next: "figma_nomaket" },
      { label: "Ок", next: null },
    ],
  },

  figma_nolink: {
    id: "figma_nolink",
    analystMessage: "Странно. У меня всё открывается. Попробуй ещё раз.",
    nextOptions: [
      { label: "Не работает", next: "figma_nomaket" },
      { label: "Ладно", next: null },
    ],
  },

  figma_empty: {
    id: "figma_empty",
    analystMessage: "Значит, дизайн ещё в тумане. Начни без макета.",
    nextOptions: [
      { label: "Как без макета?", next: "figma_nomaket" },
      { label: "Ок", next: null },
    ],
  },

  figma_nomaket: {
    id: "figma_nomaket",
    analystMessage: "Ну сделай красиво. Ты же фронтендер.",
    nextOptions: [{ label: "Понял, работаю", next: null }],
  },

  api: {
    id: "api",
    analystMessage: "API будет, но пока не готово. Начинай верстать.",
    nextOptions: [
      { label: "На чём верстать без данных?", next: "api_mock" },
      { label: "Когда будет?", next: "api_when" },
    ],
  },

  api_mock: {
    id: "api_mock",
    analystMessage: "Ну сделай как в предыдущем разделе. Потом заменишь.",
    nextOptions: [
      { label: "А структура ответа?", next: "api_schema" },
      { label: "Ок", next: null },
    ],
  },

  api_schema: {
    id: "api_schema",
    analystMessage: "Структура стандартная. Всё как обычно.",
    nextOptions: [{ label: "Это не ответ", next: null }],
  },

  api_when: {
    id: "api_when",
    analystMessage: "В течение спринта. Может, двух. Не торопи.",
    nextOptions: [{ label: "Понял, жду", next: null }],
  },

  task: {
    id: "task",
    analystMessage: "Нужно сделать кнопку, которая при нажатии делает что-то.",
    nextOptions: [
      { label: "Что именно «что-то»?", next: "task_what" },
      { label: "Где кнопка?", next: "task_where" },
    ],
  },

  task_what: {
    id: "task_what",
    analystMessage: "Уточню у бизнеса. Пока делай кнопку.",
    nextOptions: [{ label: "Какую кнопку?", next: null }],
  },

  task_where: {
    id: "task_where",
    analystMessage: "На странице.",
    nextOptions: [{ label: "На какой странице?", next: null }],
  },
};
