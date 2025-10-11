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
    id: 1,
    name: "Dashboard",
    items: [
      {
        heading: "Dashboards",
        children: [
          {
            name: "eCommerce",
            icon: "solar:widget-add-line-duotone",
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
            icon: "solar:layers-line-duotone",
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
                url: '/apps/ecommerce/detail/3'
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
            name: 'Kanban',
            icon: 'solar:notebook-linear',
            url: '/apps/kanban'
          },

        ],
      },
    ],
  },

  {
    id: 2,
    name: "Pages",
    items: [
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
            name: "Landingpage",
            icon: "solar:bill-list-line-duotone",
            id: uniqueId(),
            url: "/landingpage",
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
    ],
  },

  {
    id: 3,
    name: "Ui components",
    items: [
      {
        heading: "UI",
        children: [
          {
            id: uniqueId(),
            name: "Accordion",
            icon: "solar:waterdrops-line-duotone",
            url: "/ui-components/accordion",
          },
          {
            id: uniqueId(),
            name: "Badge",
            icon: "solar:tag-horizontal-line-duotone",
            url: "/ui-components/badge",
          },
          {
            id: uniqueId(),
            name: "Button",
            icon: "solar:airbuds-case-minimalistic-line-duotone",
            url: "/ui-components/buttons",
          },
          {
            id: uniqueId(),
            name: "Dropdowns",
            icon: "solar:airbuds-case-line-duotone",
            url: "/ui-components/dropdown",
          },
          {
            id: uniqueId(),
            name: "Modals",
            icon: "solar:bolt-line-duotone",
            url: "/ui-components/modals",
          },
          {
            id: uniqueId(),
            name: "Tab",
            icon: "solar:box-minimalistic-line-duotone",
            url: "/ui-components/tab",
          },
          {
            id: uniqueId(),
            name: "Tooltip",
            icon: "solar:feed-line-duotone",
            url: "/ui-components/tooltip",
          },
          {
            id: uniqueId(),
            name: "Alert",
            icon: "solar:flag-line-duotone",
            url: "/ui-components/alert",
          },
          {
            id: uniqueId(),
            name: "Progressbar",
            icon: "solar:programming-line-duotone",
            url: "/ui-components/progressbar",
          },
          {
            id: uniqueId(),
            name: "Pagination",
            icon: "solar:waterdrops-line-duotone",
            url: "/ui-components/pagination",
          },
          {
            id: uniqueId(),
            name: "Breadcrumbs",
            icon: "solar:slider-minimalistic-horizontal-line-duotone",
            url: "/ui-components/breadcrumb",
          },
          {
            id: uniqueId(),
            name: "Drawer",
            icon: "solar:laptop-minimalistic-line-duotone",
            url: "/ui-components/drawer",
          },
          {
            id: uniqueId(),
            name: "Lists",
            icon: "solar:checklist-bold-duotone",
            url: "/ui-components/listgroup",
          },
          {
            id: uniqueId(),
            name: "Carousel",
            icon: "solar:align-horizonta-spacing-line-duotone",
            url: "/ui-components/carousel",
          },
          {
            id: uniqueId(),
            name: "Spinner",
            icon: "solar:soundwave-bold-duotone",
            url: "/ui-components/spinner",
          },
          {
            id: uniqueId(),
            name: "Avatar",
            icon: "solar:user-line-duotone",
            url: "/ui-components/avatar",
          },
          {
            id: uniqueId(),
            name: "Banner",
            icon: "solar:banknote-linear",
            url: "/ui-components/banner",
          },
          {
            id: uniqueId(),
            name: "Button Group",
            icon: "solar:users-group-two-rounded-outline",
            url: "/ui-components/button-group",
          },
          {
            id: uniqueId(),
            name: "Card",
            icon: "solar:card-line-duotone",
            url: "/ui-components/card",
          },
          {
            id: uniqueId(),
            name: "Datepicker",
            icon: "solar:calendar-search-linear",
            url: "/ui-components/datepicker",
          },
          {
            id: uniqueId(),
            name: "Footer",
            icon: "solar:wad-of-money-outline",
            url: "/ui-components/footer",
          },
          {
            id: uniqueId(),
            name: "KBD",
            icon: "solar:keyboard-line-duotone",
            url: "/ui-components/kbd",
          },
          {
            id: uniqueId(),
            name: "Mega Menu",
            icon: "solar:clipboard-list-linear",
            url: "/ui-components/megamenu",
          },
          {
            id: uniqueId(),
            name: "Navbar",
            icon: "solar:slider-minimalistic-horizontal-linear",
            url: "/ui-components/navbar",
          },
          {
            id: uniqueId(),
            name: "Popover",
            icon: "solar:chat-line-line-duotone",
            url: "/ui-components/popover",
          },
          {
            id: uniqueId(),
            name: "Rating",
            icon: "solar:stars-linear",
            url: "/ui-components/rating",
          },
          {
            id: uniqueId(),
            name: "Sidebar",
            icon: "solar:siderbar-broken",
            url: "/ui-components/sidebar",
          },
          {
            id: uniqueId(),
            name: "Tables",
            icon: "solar:bedside-table-linear",
            url: "/ui-components/tables",
          },
          {
            id: uniqueId(),
            name: "Timeline",
            icon: "solar:align-horizontal-center-outline",
            url: "/ui-components/timeline",
          },
          {
            id: uniqueId(),
            name: "Toast",
            icon: "solar:check-square-linear",
            url: "/ui-components/toast",
          },
          {
            id: uniqueId(),
            name: "Typography",
            icon: "solar:text-bold-duotone",
            url: "/ui-components/typography",
          },
        ],
      },
    ],
  }, //three end

  {
    id: 4,
    name: "Tables",
    items: [
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
        heading: "Shadcn Table",
        children: [
          {
            id: uniqueId(),
            name: "Basic",
            icon: "solar:command-line-duotone",
            url: "/shadcn-tables/basic",
          },
        ]
      },
    ],
  },

  {
    id: 5,
    name: "Charts",
    items: [
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
    ],
  },

  {
    id: 6,
    name: "Forms",
    items: [
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
    ],
  },

  {
    id: 7,
    name: "Shadcn Ui",
    items: [
      {
        heading: "Shadcn Ui",
        children: [
         
          {
            id: uniqueId(),
            name: "Badge",
            icon: "solar:tag-horizontal-line-duotone",
            url: "/shadcn-ui/badge",
          },
          {
            id: uniqueId(),
            name: "Buttons",
            icon: "solar:airbuds-case-minimalistic-line-duotone",
            url: "/shadcn-ui/buttons",
          },
          {
            id: uniqueId(),
            name: "Dropdowns",
            icon: "solar:airbuds-case-line-duotone",
            url: "/shadcn-ui/dropdown",
          },
          {
            id: uniqueId(),
            name: "Dialogs",
            icon: "solar:bolt-line-duotone",
            url: "/shadcn-ui/dialogs",
          },
          {
            id: uniqueId(),
            name: "Alert",
            icon: "solar:flag-line-duotone",
            url: "/shadcn-ui/alert",
          },
          {
            id: uniqueId(),
            name: "Toast",
            icon: "solar:notification-unread-broken",
            url: "/shadcn-ui/toast",
          },
          {
            id: uniqueId(),
            name: "Breadcrumbs",
            icon: "solar:slider-minimalistic-horizontal-line-duotone",
            url: "/shadcn-ui/breadcrumb",
          },
         
          {
            id: uniqueId(),
            name: "Carousel",
            icon: "solar:align-horizonta-spacing-line-duotone",
            url: "/shadcn-ui/carousel",
          },
          
          {
            id: uniqueId(),
            name: "Card",
            icon: "solar:card-line-duotone",
            url: "/shadcn-ui/card",
          },
          {
            id: uniqueId(),
            name: "Datepicker",
            icon: "solar:calendar-search-linear",
            url: "/shadcn-ui/datepicker",
          },
          {
            id: uniqueId(),
            name: "Combobox",
            icon: "solar:wad-of-money-outline",
            url: "/shadcn-ui/combobox",
          },
          {
            id: uniqueId(),
            name: "Collapsible",
            icon: "solar:list-up-minimalistic-bold-duotone",
            url: "/shadcn-ui/collapsible",
          },
          {
            id: uniqueId(),
            name: "Command",
            icon: "solar:command-outline",
            url: "/shadcn-ui/command",
          },
          {
            id: uniqueId(),
            name: "Skeleton",
            icon: "solar:soundwave-bold-duotone",
            url: "/shadcn-ui/skeleton",
          },
          {
            id: uniqueId(),
            name: "Avatar",
            icon: "solar:user-line-duotone",
            url: "/shadcn-ui/avatar",
          },
         
          {
            id: uniqueId(),
            name: "Tooltip",
            icon: "solar:feed-line-duotone",
            url: "/shadcn-ui/tooltip",
          },
          {
            name: "Accordion",
            icon: "solar:round-alt-arrow-down-outline",
            id: uniqueId(),
            url: "/shadcn-ui/accordion",
          },
          {
            id: uniqueId(),
            name: "Tab",
            icon: "solar:box-minimalistic-line-duotone",
            url: "/shadcn-ui/tab",
          },
          {
            id: uniqueId(),
            name: "Progressbar",
            icon: "solar:programming-line-duotone",
            url: "/shadcn-ui/progressbar",
          },
          {
            id: uniqueId(),
            name: "Drawer",
            icon: "solar:laptop-minimalistic-line-duotone",
            url: "/shadcn-ui/drawer",
          },
        ],
      },
      {
        heading: "Shadcn Form Elements",
        children: [
          {
            id: uniqueId(),
            name: "Input",
            icon: "solar:text-circle-linear",
            url: "/shadcn-form/input",
          },
          {
            id: uniqueId(),
            name: "Select",
            icon: "solar:round-alt-arrow-down-outline",
            url: "/shadcn-form/select",
          },
          {
            id: uniqueId(),
            name: "Checkbox",
            icon: "solar:shield-check-linear",
            url: "/shadcn-form/checkbox",
          },
          {
            id: uniqueId(),
            name: "Radio",
            icon: "solar:record-linear",
            url: "/shadcn-form/radio",
          },
        ]
      },
    ],
  },

  {
    id: 8,
    name: "Headless",
    items: [
      {
        heading: "Headless Ui Elements",
        children: [
          {
            name: "Dropdown",
            icon: "solar:round-alt-arrow-down-outline",
            id: uniqueId(),
            url: "/headless-ui/dropdown",
          },
          {
            name: "Disclosure",
            icon: "solar:accumulator-broken",
            id: uniqueId(),
            url: "/headless-ui/disclosure",
          },
          {
            name: "Dialog",
            icon: "solar:smartphone-update-line-duotone",
            id: uniqueId(),
            url: "/headless-ui/dialog",
          },
          {
            name: "Popover",
            icon: "solar:airbuds-case-charge-line-duotone",
            id: uniqueId(),
            url: "/headless-ui/popover",
          },
          {
            name: "Tabs",
            icon: "solar:clapperboard-text-linear",
            id: uniqueId(),
            url: "/headless-ui/tabs",
          },
          {
            name: "Transition",
            icon: "solar:round-transfer-horizontal-line-duotone",
            id: uniqueId(),
            url: "/headless-ui/transition",
          },
         
        ],
      },
      {
        heading: "Headless Form Elements",
        children: [
          {
            id: uniqueId(),
            name: "Buttons",
            icon: "solar:adhesive-plaster-outline",
            url: "/headless-form/buttons",
          },
          {
            id: uniqueId(),
            name: "Checkbox",
            icon: "solar:check-circle-linear",
            url: "/headless-form/checkbox",
          },
          {
            id: uniqueId(),
            name: "Combobox",
            icon: "solar:archive-down-minimlistic-broken",
            url: "/headless-form/combobox",
          },
          {
            id: uniqueId(),
            name: "Fieldset",
            icon: "solar:password-minimalistic-input-outline",
            url: "/headless-form/fieldset",
          },
          {
            id: uniqueId(),
            name: "Input",
            icon: "solar:text-italic-circle-linear",
            url: "/headless-form/input",
          },
          {
            id: uniqueId(),
            name: "Listbox",
            icon: "solar:list-check-linear",
            url: "/headless-form/listbox",
          },
          {
            id: uniqueId(),
            name: "Radio Group",
            icon: "solar:round-graph-linear",
            url: "/headless-form/radiogroup",
          },
          {
            id: uniqueId(),
            name: "Select",
            icon: "solar:minimize-square-3-outline",
            url: "/headless-form/select",
          },
          {
            id: uniqueId(),
            name: "Switch",
            icon: "solar:branching-paths-down-outline",
            url: "/headless-form/switch",
          },
          {
            id: uniqueId(),
            name: "Textarea",
            icon: "solar:text-square-2-linear",
            url: "/headless-form/textarea",
          },
        
        ],
      },
     
    ],
  },

  {
    id: 9,
    name: "Auth",
    items: [
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
    ],
  },

  {
    id: 10,
    name: "Menu",
    items: [
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
    ],
  },
];

export default SidebarContent;
