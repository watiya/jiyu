export interface ChildItem {
  id?: number | string;
  name?: string;
  icon?: any;
  children?: ChildItem[];
  item?: any;
  url?: any;
  color?: string;
  disabled?:boolean,
  subtitle?:string,
  badge?:boolean,
  badgeType?:string,
}

export interface MenuItem {
  heading?: string;
  name?: string;
  icon?: any;
  id?: number;
  to?: string;
  items?: MenuItem[];
  children?: ChildItem[];
  url?: any;
  disabled?:boolean,
  subtitle?:string,
  badgeType?:string,
  badge?:boolean,
}


import { uniqueId } from "lodash";

const SidebarContent: MenuItem[] = [
  {
    heading: "Home",
    children: [
      {
        name: "Sample",
        icon: 'tabler:aperture',
        id: uniqueId(),
        url: "/",
      },
    ],
  },
  {
    heading: "Others",
    children: [
      {
        name: "Menu Level",
        id: uniqueId(),
        icon: 'tabler:layers-subtract',
        children: [
          {
            id: uniqueId(),
            name: "Level 1",
            icon: "tabler:circle",
            url: "/l1",
          },
          {
            id: uniqueId(),
            name: "Level 1.1",
            icon: "tabler:circle",
            url: "/l1.1",
            children: [
              {
                id: uniqueId(),
                name: "Level 2",
                icon: "tabler:circle",
                url: "/l2",
  
              },
              {
                id: uniqueId(),
                name: "Level 2.1",
                icon: "tabler:circle",
                url: "/l2.1",
  
                children: [
                  {
                    id: uniqueId(),
                    name: "Level 3",
                    icon: "tabler:circle",
                    url: "/l3",
                  },
                  {
                    id: uniqueId(),
                    name: "Level 3.1",
                    icon: "tabler:circle",
                    url: "/l3.1",
                  },
                ],
              },
            ],
          },
        ],
      },
      {
        name: "Disabled",
        icon: 'tabler:ban',
        id: uniqueId(),
        url: "#",
        disabled:true
      },
      {
        name: "SubCaption",
        icon: 'tabler:star',
        id: uniqueId(),
        url: "#",
        disabled:false,
        subtitle:"This is the subtitle"
      },
      {
        name: "Chip",
        icon: 'tabler:award',
        id: uniqueId(),
        url: "#",
        badge:true,
        badgeType:"filled"
      },
      {
        name: "Outlined",
        icon: 'tabler:mood-smile',
        id: uniqueId(),
        url: "#",
        badge:true,
        badgeType:"outlined"
      },
      {
        name: "External Link",
        icon: 'tabler:star',
        id: uniqueId(),
        url: "https://www.google.co.in/",
      },
    ],
  },

];

export default SidebarContent;
