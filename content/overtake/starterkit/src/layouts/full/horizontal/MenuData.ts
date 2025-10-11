import { uniqueId } from "lodash";

const Menuitems = [
  {
    id: uniqueId(),
    title: "Dashboard",
    icon: "solar:layers-line-duotone",
    href: "",
    column:1,
    children: [
      {
        id: uniqueId(),
        title: "Sample Page 1",
        icon: "solar:home-angle-outline",
        href: "/",
      },
      {
        id: uniqueId(),
        title: "Sample Page 2",
        icon: "solar:settings-minimalistic-line-duotone",
        href: "/sample-page",
      },
    ],
  },

];
export default Menuitems;
