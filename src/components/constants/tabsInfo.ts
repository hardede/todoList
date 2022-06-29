import { v4 as uuidv4 } from "uuid";

export const tabsInfo = [
  {
    id: uuidv4(),
    nameLink: "Todos",
    linkUrl: "/home",
  },
  {
    id: uuidv4(),
    nameLink: "Completed",
    linkUrl: "/completed",
  },
  {
    id: uuidv4(),
    nameLink: "Deleted",
    linkUrl: "/deleted",
  },
];
