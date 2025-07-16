export const ROUTES = {
  HOME: "/",
  CONSULTING: "/consulting",
  CONSULTANTS: "/consultants",
  REQUEST_CONSULTATION: "/request-consultation",
  DIAGNOSTICS: "/diagnostics",
  HELP: "/help",
  CONTACT: "/contact",
};

export const NAVIGATION_ITEMS = [
  { path: ROUTES.HOME, name: "Головна" },
  { path: ROUTES.CONSULTING, name: "Консультації" },
  { path: ROUTES.CONSULTANTS, name: "Консультанти" },
  { path: ROUTES.REQUEST_CONSULTATION, name: "Замовити консультацію" },
  { path: ROUTES.DIAGNOSTICS, name: "Діагностика" },
  { path: ROUTES.HELP, name: "Допомога" },
  { path: ROUTES.CONTACT, name: "Контакти" },
];

export const PAGES = {
  [ROUTES.HOME]: "Home",
  [ROUTES.CONSULTING]: "Consulting",
  [ROUTES.CONSULTANTS]: "Consultants",
  [ROUTES.REQUEST_CONSULTATION]: "RequestConsultation",
  [ROUTES.DIAGNOSTICS]: "Diagnostics",
  [ROUTES.HELP]: "Help",
  [ROUTES.CONTACT]: "Contact",
};
