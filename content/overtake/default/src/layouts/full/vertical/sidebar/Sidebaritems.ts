export interface ChildItem {
  id?: number | string;
  name?: string;
  icon?: any;
  children?: ChildItem[];
  item?: any;
  url?: any;
  color?: string;
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
}

import { uniqueId } from "lodash";

const SidebarContent: MenuItem[] = [
  {
    heading: "Dashboards",
    children: [
      {
        name: "eCommerce",
        icon: "solar:atom-line-duotone",
        id: uniqueId(),
        url: "/",
      },
      {
        name: "Analytics",
        icon: "solar:chart-line-duotone",
        id: uniqueId(),
        url: "/dashboards/analytics",
      },
      {
        name: "CRM",
        icon: "solar:screencast-2-line-duotone",
        id: uniqueId(),
        url: "/dashboards/crm",
      },
      {
        name: "Front Pages",
        id: uniqueId(),
        icon: "solar:home-angle-linear",
        children: [
          {
            name: "Homepage",
            id: uniqueId(),
            url: "/frontend-pages/homepage",
          },
          {
            name: "About Us",
            id: uniqueId(),
            url: "/frontend-pages/aboutus",
          },
          {
            name: "Blog",
            id: uniqueId(),
            url: "/frontend-pages/blog",
          },
          {
            name: "Blog Details",
            id: uniqueId(),
            url: "/frontend-pages/blog/detail/streaming-video-way-before-it-was-cool-go-dark-tomorrow",
          },
          {
            name: "Contact Us",
            id: uniqueId(),
            url: "/frontend-pages/contact",
          },
          {
            name: "Portfolio",
            id: uniqueId(),
            url: "/frontend-pages/portfolio",
          },
          {
            name: "Pricing",
            id: uniqueId(),
            url: "/frontend-pages/pricing",
          },
        ],
      },
      {
        name: "Landingpage",
        icon: "solar:bill-list-line-duotone",
        id: uniqueId(),
        url: "/landingpage",
      },
    ],
  },
  {
    heading: "Apps",
    children: [
      {
        id: uniqueId(),
        name: "Contacts",
        icon: "solar:phone-line-duotone",
        url: "/apps/contacts",
      },
      {
        name: "Ecommerce",
        id: uniqueId(),
        icon: "solar:cart-3-line-duotone",
        children: [
          {
            id: uniqueId(),
            name: "Shop",
            url: "/apps/ecommerce/shop",
          },
          {
            id: uniqueId(),
            name: "Details",
            url: "/apps/ecommerce/detail/3",
          },
          {
            id: uniqueId(),
            name: "List",
            url: "/apps/ecommerce/list",
          },
          {
            id: uniqueId(),
            name: "Checkout",
            url: "/apps/ecommerce/checkout",
          },
          {
            id: uniqueId(),
            name: "Add Product",
            url: "/apps/ecommerce/addproduct",
          },
          {
            id: uniqueId(),
            name: "Edit Product",
            url: "/apps/ecommerce/editproduct",
          },
        ],
      },
      {
        name: "Blogs",
        id: uniqueId(),
        icon: "solar:widget-add-line-duotone",
        children: [
          {
            id: uniqueId(),
            name: "Blog Post",
            url: "/apps/blog/post",
          },
          {
            id: uniqueId(),
            name: "Blog Detail",
            url: "/apps/blog/detail/streaming-video-way-before-it-was-cool-go-dark-tomorrow",
          },
        ],
      },
      {
        id: uniqueId(),
        name: "Chats",
        icon: "solar:chat-round-line-line-duotone",
        url: "/apps/chats",
      },
      {
        name: "User Profile",
        id: uniqueId(),
        icon: "solar:shield-user-outline",
        children: [
          {
            id: uniqueId(),
            name: "Profile",
            url: "/apps/user-profile/profile",
          },
          {
            id: uniqueId(),
            name: "Followers",
            url: "/apps/user-profile/followers",
          },
          {
            id: uniqueId(),
            name: "Friends",
            url: "/apps/user-profile/friends",
          },
          {
            id: uniqueId(),
            name: "Gallery",
            url: "/apps/user-profile/gallery",
          },
        ],
      },

      {
        name: "Invoice",
        id: uniqueId(),
        icon: "solar:bill-check-outline",
        children: [
          {
            id: uniqueId(),
            name: "List",
            url: "/apps/invoice/list",
          },
          {
            id: uniqueId(),
            name: "Details",
            url: "/apps/invoice/detail/PineappleInc",
          },
          {
            id: uniqueId(),
            name: "Create",
            url: "/apps/invoice/create",
          },
          {
            id: uniqueId(),
            name: "Edit",
            url: "/apps/invoice/edit/PineappleInc",
          },
        ],
      },

      {
        id: uniqueId(),
        name: "Notes",
        icon: "solar:document-text-outline",
        url: "/apps/notes",
      },
      {
        id: uniqueId(),
        name: "Calendar",
        icon: "solar:calendar-mark-line-duotone",
        url: "/apps/calendar",
      },
      {
        id: uniqueId(),
        name: "Email",
        icon: "solar:letter-linear",
        url: "/apps/email",
      },
      {
        id: uniqueId(),
        name: "Tickets",
        icon: "solar:ticker-star-outline",
        url: "/apps/tickets",
      },
      {
        id: uniqueId(),
        name: "Kanban",
        icon: "solar:notebook-linear",
        url: "/apps/kanban",
      },
    ],
  },
  {
    heading: "Pages",
    children: [
      {
        name: "Account Setting",
        icon: "solar:settings-minimalistic-line-duotone",
        id: uniqueId(),
        url: "/theme-pages/account-settings",
      },
      {
        name: "FAQ",
        icon: "solar:question-circle-line-duotone",
        id: uniqueId(),
        url: "/theme-pages/faq",
      },
      {
        name: "Pricing",
        icon: "solar:dollar-minimalistic-linear",
        id: uniqueId(),
        url: "/theme-pages/pricing",
      },
      
      {
        name: "Roll Base Access",
        icon: "solar:accessibility-broken",
        id: uniqueId(),
        url: "/theme-pages/casl",
      },
    ],
  },
  {
    heading: "Widgets",
    children: [
      {
        id: uniqueId(),
        name: "Cards",
        icon: "solar:cardholder-line-duotone",
        url: "/widgets/cards",
      },
      {
        id: uniqueId(),
        name: "Banners",
        icon: "solar:align-vertical-spacing-line-duotone",
        url: "/widgets/banners",
      },
      {
        id: uniqueId(),
        name: "Charts",
        icon: "solar:chart-square-line-duotone",
        url: "/widgets/charts",
      },
    ],
  },
  {
    heading: "UI",
    children: [
      {
        name: "Ui Elements",
        id: uniqueId(),
        icon: "solar:widget-6-outline",
        children: [
          {
            id: uniqueId(),
            name: "Accordian",
            url: "/ui-components/accordion",
          },
          {
            id: uniqueId(),
            name: "Badge",
            url: "/ui-components/badge",
          },
          {
            id: uniqueId(),
            name: "Button",
            url: "/ui-components/buttons",
          },
          {
            id: uniqueId(),
            name: "Dropdowns",
            url: "/ui-components/dropdown",
          },
          {
            id: uniqueId(),
            name: "Modals",
            url: "/ui-components/modals",
          },
          {
            id: uniqueId(),
            name: "Tab",
            url: "/ui-components/tab",
          },
          {
            id: uniqueId(),
            name: "Tooltip",
            url: "/ui-components/tooltip",
          },
          {
            id: uniqueId(),
            name: "Alert",
            url: "/ui-components/alert",
          },
          {
            id: uniqueId(),
            name: "Progressbar",
            url: "/ui-components/progressbar",
          },
          {
            id: uniqueId(),
            name: "Pagination",
            url: "/ui-components/pagination",
          },
          {
            id: uniqueId(),
            name: "Breadcrumbs",
            url: "/ui-components/breadcrumb",
          },
          {
            id: uniqueId(),
            name: "Drawer",
            url: "/ui-components/drawer",
          },
          {
            id: uniqueId(),
            name: "Lists",
            url: "/ui-components/listgroup",
          },
          {
            id: uniqueId(),
            name: "Carousel",
            url: "/ui-components/carousel",
          },
          {
            id: uniqueId(),
            name: "Spinner",
            url: "/ui-components/spinner",
          },
          {
            id: uniqueId(),
            name: "Avatar",
            url: "/ui-components/avatar",
          },
          {
            id: uniqueId(),
            name: "Banner",
            url: "/ui-components/banner",
          },
          {
            id: uniqueId(),
            name: "Button Group",
            url: "/ui-components/button-group",
          },
          {
            id: uniqueId(),
            name: "Card",
            url: "/ui-components/card",
          },
          {
            id: uniqueId(),
            name: "Datepicker",
            url: "/ui-components/datepicker",
          },
          {
            id: uniqueId(),
            name: "Footer",
            url: "/ui-components/footer",
          },
          {
            id: uniqueId(),
            name: "KBD",
            url: "/ui-components/kbd",
          },
          {
            id: uniqueId(),
            name: "Mega Menu",
            url: "/ui-components/megamenu",
          },
          {
            id: uniqueId(),
            name: "Navbar",
            url: "/ui-components/navbar",
          },
          {
            id: uniqueId(),
            name: "Popover",
            url: "/ui-components/popover",
          },
          {
            id: uniqueId(),
            name: "Rating",
            url: "/ui-components/rating",
          },
          {
            id: uniqueId(),
            name: "Sidebar",
            url: "/ui-components/sidebar",
          },
          {
            id: uniqueId(),
            name: "Tables",
            url: "/ui-components/tables",
          },
          {
            id: uniqueId(),
            name: "Timeline",
            url: "/ui-components/timeline",
          },
          {
            id: uniqueId(),
            name: "Toast",
            url: "/ui-components/toast",
          },
          {
            id: uniqueId(),
            name: "Typography",
            url: "/ui-components/typography",
          },
        ],
      },
    ],
  },

  {
    heading: "Headless Ui",
    children: [
      {
        name: "Ui Elements",
        id: uniqueId(),
        icon: "solar:text-underline-cross-broken",
        children: [
          {
            name: "Dropdown",
            id: uniqueId(),
            url: "/headless-ui/dropdown",
          },
          {
            name: "Disclosure",
            id: uniqueId(),
            url: "/headless-ui/disclosure",
          },
          {
            name: "Dialog",
            id: uniqueId(),
            url: "/headless-ui/dialog",
          },
          {
            name: "Popover",
            id: uniqueId(),
            url: "/headless-ui/popover",
          },
          {
            name: "Tabs",
            id: uniqueId(),
            url: "/headless-ui/tabs",
          },
          {
            name: "Transition",
            id: uniqueId(),
            url: "/headless-ui/transition",
          },
        ],
      },
      {
        name: "Form Elements",
        id: uniqueId(),
        icon: "solar:align-vertical-spacing-line-duotone",
        children: [
          {
            id: uniqueId(),
            name: "Buttons",
            url: "/headless-form/buttons",
          },
          {
            id: uniqueId(),
            name: "Checkbox",
            url: "/headless-form/checkbox",
          },
          {
            id: uniqueId(),
            name: "Combobox",
            url: "/headless-form/combobox",
          },
          {
            id: uniqueId(),
            name: "Fieldset",
            url: "/headless-form/fieldset",
          },
          {
            id: uniqueId(),
            name: "Input",
            url: "/headless-form/input",
          },
          {
            id: uniqueId(),
            name: "Listbox",
            url: "/headless-form/listbox",
          },
          {
            id: uniqueId(),
            name: "Radio Group",
            url: "/headless-form/radiogroup",
          },
          {
            id: uniqueId(),
            name: "Select",
            url: "/headless-form/select",
          },
          {
            id: uniqueId(),
            name: "Switch",
            url: "/headless-form/switch",
          },
          {
            id: uniqueId(),
            name: "Textarea",
            url: "/headless-form/textarea",
          },
        ],
      },
    ],
  },

  {
    heading: "Shadcn Ui",
    children: [
      {
        name: "Ui Elements",
        id: uniqueId(),
        icon: "solar:adhesive-plaster-outline",
        children: [
          {
            id: uniqueId(),
            name: "Badge",
            url: "/shadcn-ui/badge",
          },
          {
            id: uniqueId(),
            name: "Button",
            url: "/shadcn-ui/buttons",
          },
          {
            id: uniqueId(),
            name: "Dropdowns",
            url: "/shadcn-ui/dropdown",
          },
          {
            id: uniqueId(),
            name: "Dialogs",
            url: "/shadcn-ui/dialogs",
          },
          {
            id: uniqueId(),
            name: "Alert",
            url: "/shadcn-ui/alert",
          },
          {
            id: uniqueId(),
            name: "Toast",
            url: "/shadcn-ui/toast",
          },
          {
            id: uniqueId(),
            name: "Breadcrumbs",
            url: "/shadcn-ui/breadcrumb",
          },
         
          {
            id: uniqueId(),
            name: "Carousel",
            url: "/shadcn-ui/carousel",
          },
          
          {
            id: uniqueId(),
            name: "Card",
            url: "/shadcn-ui/card",
          },
          {
            id: uniqueId(),
            name: "Datepicker",
            url: "/shadcn-ui/datepicker",
          },
          {
            id: uniqueId(),
            name: "Combobox",
            url: "/shadcn-ui/combobox",
          },
          {
            id: uniqueId(),
            name: "Collapsible",
            url: "/shadcn-ui/collapsible",
          },
          {
            id: uniqueId(),
            name: "Command",
            url: "/shadcn-ui/command",
          },
          {
            id: uniqueId(),
            name: "Skeleton",
            url: "/shadcn-ui/skeleton",
          },
          {
            id: uniqueId(),
            name: "Avatar",
            url: "/shadcn-ui/avatar",
          },
         
          {
            id: uniqueId(),
            name: "Tooltip",
            url: "/shadcn-ui/tooltip",
          },
          {
            name: "Accordion",
            id: uniqueId(),
            url: "/shadcn-ui/accordion",
          },
          {
            id: uniqueId(),
            name: "Tab",
            url: "/shadcn-ui/tab",
          },
          {
            id: uniqueId(),
            name: "Progressbar",
            url: "/shadcn-ui/progressbar",
          },
          {
            id: uniqueId(),
            name: "Drawer",
            url: "/shadcn-ui/drawer",
          },
        ],
      },
      {
        name: "Form Elements",
        id: uniqueId(),
        icon: "solar:widget-6-line-duotone",
        children: [
          {
            id: uniqueId(),
            name: "Input",
            url: "/shadcn-form/input",
          },
          {
            id: uniqueId(),
            name: "Select",
            url: "/shadcn-form/select",
          },
          {
            id: uniqueId(),
            name: "Checkbox",
            url: "/shadcn-form/checkbox",
          },
          {
            id: uniqueId(),
            name: "Radio",
            url: "/shadcn-form/radio",
          },
        ],
      },
    ],
  },

  {
    heading: "Tables",
    children: [
      {
        name: "Basic Tables",
        icon: "solar:tablet-line-duotone",
        id: uniqueId(),
        url: "/tables/basic",
      },
      {
        name: "Striped Rows Table",
        icon: "solar:tablet-line-duotone",
        id: uniqueId(),
        url: "/tables/striped-row",
      },
      {
        name: "Hover Table",
        icon: "solar:tablet-line-duotone",
        id: uniqueId(),
        url: "/tables/hover-table",
      },
      {
        name: "Checkbox Table",
        icon: "solar:tablet-line-duotone",
        id: uniqueId(),
        url: "/tables/checkbox-table",
      },
    ],
  },

  {
    heading: "Shadcn Table",
    children: [
      {
        name: "Basic Table",
        id: uniqueId(),
        icon: "solar:command-line-duotone",
        url: "/shadcn-tables/basic",
      },

    ],
  },

  {
    heading: "React Tables",
    children: [
      {
        id: uniqueId(),
        name: "Basic",
        icon:'solar:round-transfer-vertical-broken',
        url: "/react-tables/basic",
      },
      {
        id: uniqueId(),
        name: "Dense",
        icon:'solar:round-transfer-vertical-broken',
        url: "/react-tables/dense",
      },
      {
        id: uniqueId(),
        name: "Sorting",
        icon:'solar:round-transfer-vertical-broken',
        url: "/react-tables/sorting",
      },
      {
        id: uniqueId(),
        name: "Filtering",
        icon:'solar:round-transfer-vertical-broken',
        url: "/react-tables/filtering",
      },
      {
        id: uniqueId(),
        name: "Pagination",
        icon:'solar:round-transfer-vertical-broken',
        url: "/react-tables/pagination",
      },
      {
        id: uniqueId(),
        name: "Row Selection",
        icon:'solar:round-transfer-vertical-broken',
        url: "/react-tables/row-selection",
      },
      {
        id: uniqueId(),
        name: "Column Visibility",
        icon:'solar:round-transfer-vertical-broken',
        url: "/react-tables/column-visibility",
      },
      {
        id: uniqueId(),
        name: "Editable",
        icon:'solar:round-transfer-vertical-broken',
        url: "/react-tables/editable",
      },
      {
        id: uniqueId(),
        name: "Sticky",
        icon:'solar:round-transfer-vertical-broken',
        url: "/react-tables/sticky",
      },
      {
        id: uniqueId(),
        name: "Drag & Drop",
        icon:'solar:round-transfer-vertical-broken',
        url: "/react-tables/drag-drop",
      },
      {
        id: uniqueId(),
        name: "Empty",
        icon:'solar:round-transfer-vertical-broken',
        url: "/react-tables/empty",
      },
      {
        id: uniqueId(),
        name: "Expanding",
        icon:'solar:round-transfer-vertical-broken',
        url: "/react-tables/expanding",
      },
      
    ],
  },
  {
    heading: "Charts",
    children: [
      {
        name: "Line Chart",
        icon: "solar:chart-square-line-duotone",
        id: uniqueId(),
        url: "/charts/line",
      },
      {
        name: "Area Chart",
        icon: "solar:graph-new-broken",
        id: uniqueId(),
        url: "/charts/area",
      },
      {
        name: "Gradient Chart",
        icon: "solar:round-graph-outline",
        id: uniqueId(),
        url: "/charts/gradient",
      },
      {
        name: "Candlestick",
        icon: "solar:chandelier-outline",
        id: uniqueId(),
        url: "/charts/candlestick",
      },
      {
        name: "Column",
        icon: "solar:chart-2-bold-duotone",
        id: uniqueId(),
        url: "/charts/column",
      },
      {
        name: "Doughnut & Pie",
        icon: "solar:pie-chart-2-linear",
        id: uniqueId(),
        url: "/charts/doughnut",
      },
      {
        name: "Radialbar & Radar",
        icon: "solar:graph-line-duotone",
        id: uniqueId(),
        url: "/charts/radialbar",
      },
    ],
  },
  {
    heading: "Forms",
    children: [
      {
        id: uniqueId(),
        name: "Forms Elements",
        icon: "solar:text-selection-line-duotone",
        url: "/forms/form-elements",
      },
      {
        id: uniqueId(),
        name: "Forms Layouts",
        icon: "solar:document-text-outline",
        url: "/forms/form-layouts",
      },
      {
        id: uniqueId(),
        name: "Forms Horizontal",
        icon: "solar:slider-horizontal-line-duotone",
        url: "/forms/form-horizontal",
      },
      {
        id: uniqueId(),
        name: "Forms Vertical",
        icon: "solar:slider-vertical-line-duotone",
        url: "/forms/form-vertical",
      },
      {
        id: uniqueId(),
        name: "Forms Custom",
        icon: "solar:document-text-outline",
        url: "/forms/form-custom",
      },
      {
        id: uniqueId(),
        name: "Form Validation",
        icon: "solar:bill-check-linear",
        url: "/forms/form-validation",
      },
    ],
  },
  {
    heading: "Icons",
    children: [
      {
        id: uniqueId(),
        name: "Solar Icons",
        icon: "solar:sticker-smile-circle-outline",
        url: "/icons/solar",
      },
      {
        id: uniqueId(),
        name: "Tabler Icons",
        icon: "solar:sticker-smile-circle-outline",
        url: "/icons/tabler",
      },
    ],
  },
  {
    heading: "Auth",
    children: [
      {
        name: "Error",
        icon: "solar:bug-minimalistic-line-duotone",
        id: uniqueId(),
        url: "/auth/error",
      },
      {
        name: "Side Login",
        icon: "solar:login-3-line-duotone",
        id: uniqueId(),
        url: "/auth/auth1/login",
      },
      {
        name: "Boxed Login",
        icon: "solar:login-3-line-duotone",
        id: uniqueId(),
        url: "/auth/auth2/login",
      },
      {
        name: "Side Register",
        icon: "solar:user-plus-rounded-line-duotone",
        id: uniqueId(),
        url: "/auth/auth1/register",
      },
      {
        name: "Boxed Register",
        icon: "solar:user-plus-rounded-line-duotone",
        id: uniqueId(),
        url: "/auth/auth2/register",
      },
      {
        name: "Side Forgot Pwd",
        icon: "solar:password-outline",
        id: uniqueId(),
        url: "/auth/auth1/forgot-password",
      },
      {
        name: "Boxed Forgot Pwd",
        icon: "solar:password-outline",
        id: uniqueId(),
        url: "/auth/auth2/forgot-password",
      },
      {
        name: "Side Two Steps",
        icon: "solar:password-outline",
        id: uniqueId(),
        url: "/auth/auth1/two-steps",
      },
      {
        name: "Boxed Two Steps",
        icon: "solar:password-outline",
        id: uniqueId(),
        url: "/auth/auth2/two-steps",
      },
      {
        name: "Maintenance",
        icon: "solar:settings-outline",
        id: uniqueId(),
        url: "/auth/maintenance",
      },
    ],
  },
  {
    heading: "Multi level",
    children: [
      {
        name: "Menu Level",
        icon: "solar:widget-add-line-duotone",
        id: uniqueId(),
        children: [
          {
            id: uniqueId(),
            name: "Level 1",
            url: "",
          },
          {
            id: uniqueId(),
            name: "Level 1.1",
            icon: "fad:armrecording",
            url: "",
            children: [
              {
                id: uniqueId(),
                name: "Level 2",
                url: "",
              },
              {
                id: uniqueId(),
                name: "Level 2.1",
                icon: "fad:armrecording",
                url: "",
                children: [
                  {
                    id: uniqueId(),
                    name: "Level 3",
                    url: "",
                  },
                  {
                    id: uniqueId(),
                    name: "Level 3.1",
                    url: "",
                  },
                ],
              },
            ],
          },
        ],
      },
    ],
  },
  {
    heading: "More Options",
    children: [
      {
        id: uniqueId(),
        url: "/sample-page",
        name: "Applications",
        icon: "solar:check-circle-bold",
        color: "text-primary",
      },
      {
        id: uniqueId(),
        url: "",
        name: "Form Options",
        icon: "solar:check-circle-bold",
        color: "text-secondary",
      },
      {
        id: uniqueId(),
        url: "",
        name: "Table Variations",
        icon: "solar:check-circle-bold",
        color: "text-info",
      },
      {
        id: uniqueId(),
        url: "",
        name: "Charts Selection",
        icon: "solar:check-circle-bold",
        color: "text-warning",
      },
      {
        id: uniqueId(),
        url: "",
        name: "Widgets",
        icon: "solar:check-circle-bold",
        color: "text-success",
      },
    ],
  },
];

export default SidebarContent;
