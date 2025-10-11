// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import  { lazy } from 'react';
import { Navigate, createBrowserRouter } from "react-router";
import Loadable from '../layouts/full/shared/loadable/Loadable';



/* ***Layouts**** */
const FullLayout = Loadable(lazy(() => import('../layouts/full/FullLayout')));
const BlankLayout = Loadable(lazy(() => import('../layouts/blank/BlankLayout')));
const FrontendPageLayout = Loadable(lazy(() => import('../layouts/blank/FrontendLayout')));

// Dashboards
const EcommerceDashboard = Loadable(lazy(() => import('../views/dashboards/Ecommerce')));
const Analytics = Loadable(lazy(() => import('../views/dashboards/Analytics')));
const Crm = Loadable(lazy(() => import('../views/dashboards/Crm')));

/* ****Apps***** */
const Contact = Loadable(lazy(() => import('../views/apps/contact/Contact')));
const Ecommerce = Loadable(lazy(() => import('../views/apps/eCommerce/Ecommerce')));
const EcommerceDetail = Loadable(lazy(() => import('../views/apps/eCommerce/EcommerceDetail')));
const EcommerceAddProduct = Loadable(
  lazy(() => import('../views/apps/eCommerce/EcommerceAddProduct')),
);
const EcommerceEditProduct = Loadable(
  lazy(() => import('../views/apps/eCommerce/EcommerceEditProduct')),
);
const EcomProductList = Loadable(lazy(() => import('../views/apps/eCommerce/EcomProductList')));
const EcomProductCheckout = Loadable(
  lazy(() => import('../views/apps/eCommerce/EcommerceCheckout')),
);
const Blog = Loadable(lazy(() => import('../views/apps/blog/Blog')));
const BlogDetail = Loadable(lazy(() => import('../views/apps/blog/BlogDetail')));
const Chats = Loadable(lazy(() => import('../views/apps/chat/Chats')));
const UserProfile = Loadable(lazy(() => import('../views/apps/user-profile/UserProfile')));
const Followers = Loadable(lazy(() => import('../views/apps/user-profile/Followers')));
const Friends = Loadable(lazy(() => import('../views/apps/user-profile/Friends')));
const Gallery = Loadable(lazy(() => import('../views/apps/user-profile/Gallery')));
const InvoiceList = Loadable(lazy(() => import('../views/apps/invoice/List')));
const InvoiceCreate = Loadable(lazy(() => import('../views/apps/invoice/Create')));
const InvoiceDetail = Loadable(lazy(() => import('../views/apps/invoice/Detail')));
const InvoiceEdit = Loadable(lazy(() => import('../views/apps/invoice/Edit')));
const Notes = Loadable(lazy(() => import('../views/apps/notes/Notes')));
const Calendar = Loadable(lazy(() => import('../views/apps/calendar/BigCalendar')));
const Email = Loadable(lazy(() => import('../views/apps/email/Email')));
const Tickets = Loadable(lazy(() => import('../views/apps/tickets/Tickets')));
const CreateTickets = Loadable(lazy(() => import('../views/apps/tickets/CreateTickets')));
const Kanban = Loadable(lazy(() => import('../views/apps/kanban/Kanban')));

// theme pages
const RollbaseCASL = Loadable(lazy(() => import('../views/pages/rollbaseCASL/RollbaseCASL')));
const Faq = Loadable(lazy(() => import('../views/pages/faq/Faq')));
const Pricing = Loadable(lazy(() => import('../views/pages/pricing/Pricing')));
const AccountSetting = Loadable(
  lazy(() => import('../views/pages/account-setting/AccountSetting')),
);

// widget
const WidgetCards = Loadable(lazy(() => import('../views/widgets/cards/WidgetCards')));
const WidgetBanners = Loadable(lazy(() => import('../views/widgets/banners/WidgetBanners')));
const WidgetCharts = Loadable(lazy(() => import('../views/widgets/charts/WidgetCharts')));

// icons
const SolarIcon = Loadable(lazy(() => import('../views/icons/SolarIcon')));
const TablerIcon = Loadable(lazy(() => import('../views/icons/TablerIcon')));

// ui components
const FlowbiteAccordion = Loadable(lazy(() => import('../views/ui-components/FlowbiteAccordion')));
const FlowbiteAlert = Loadable(lazy(() => import('../views/ui-components/FlowbiteAlert')));
const FlowbiteAvatar = Loadable(lazy(() => import('../views/ui-components/FlowbiteAvatar')));
const FlowbiteBadge = Loadable(lazy(() => import('../views/ui-components/FlowbiteBadge')));
const FlowbiteBanner = Loadable(lazy(() => import('../views/ui-components/FlowbiteBanner')));
const FlowbiteBreadcrumb = Loadable(lazy(() => import('../views/ui-components/FlowbiteBreadcrumb')));
const FlowbiteButtonGroup = Loadable(lazy(() => import('../views/ui-components/FlowbiteButtonGroup')));
const FlowbiteButtons = Loadable(lazy(() => import('../views/ui-components/FlowbiteButtons')));
const FlowbiteCard = Loadable(lazy(() => import('../views/ui-components/FlowbiteCard')));
const FlowbiteCarousel = Loadable(lazy(() => import('../views/ui-components/FlowbiteCarousel')));
const FlowbiteDatePicker = Loadable(lazy(() => import('../views/ui-components/FlowbiteDatePicker')));
const FlowbiteDrawer = Loadable(lazy(() => import('../views/ui-components/FlowbiteDrawer')));
const FlowbiteDropdown = Loadable(lazy(() => import('../views/ui-components/FlowbiteDropdown')));
const FlowbiteFooter = Loadable(lazy(() => import('../views/ui-components/FlowbiteFooter')));
const FlowbiteKbd = Loadable(lazy(() => import('../views/ui-components/FlowbiteKbd')));
const FlowbiteListgroup = Loadable(lazy(() => import('../views/ui-components/FlowbiteListgroup')));
const FlowbiteMegamenu = Loadable(lazy(() => import('../views/ui-components/FlowbiteMegamenu')));
const FlowbiteModals = Loadable(lazy(() => import('../views/ui-components/FlowbiteModals')));
const FlowbiteNavbar = Loadable(lazy(() => import('../views/ui-components/FlowbiteNavbar')));
const FlowbitePagination = Loadable(lazy(() => import('../views/ui-components/FlowbitePagination')));
const FlowbitePopover = Loadable(lazy(() => import('../views/ui-components/FlowbitePopover')));
const FlowbiteProgressbar = Loadable(lazy(() => import('../views/ui-components/FlowbiteProgressbar')));
const FlowbiteRating = Loadable(lazy(() => import('../views/ui-components/FlowbiteRating')));
const FlowbiteSidebar = Loadable(lazy(() => import('../views/ui-components/FlowbiteSidebar')));
const FlowbiteSpinner = Loadable(lazy(() => import('../views/ui-components/FlowbiteSpinner')));
const FlowbiteTab = Loadable(lazy(() => import('../views/ui-components/FlowbiteTab')));
const FlowbiteTables = Loadable(lazy(() => import('../views/ui-components/FlowbiteTables')));
const FlowbiteTimeline = Loadable(lazy(() => import('../views/ui-components/FlowbiteTimeline')));
const FlowbiteToast = Loadable(lazy(() => import('../views/ui-components/FlowbiteToast')));
const FlowbiteTooltip = Loadable(lazy(() => import('../views/ui-components/FlowbiteTooltip')));
const FlowbiteTypography = Loadable(lazy(() => import('../views/ui-components/FlowbiteTypography')));

// tables
const BasicTable = Loadable(lazy(() => import('../views/tables/BasicTable')));
const CheckboxTable = Loadable(lazy(() => import('../views/tables/CheckboxTables')));
const HoverTable = Loadable(lazy(() => import('../views/tables/HoverTable')));
const StrippedTable = Loadable(lazy(() => import('../views/tables/StrippedTable')));

//react tables
const ReactBasicTable = Loadable(lazy(() => import('../views/react-tables/basic/page')));
const ReactColumnVisibilityTable = Loadable(
  lazy(() => import('../views/react-tables/columnvisibility/page')),
);
const ReactDenseTable = Loadable(lazy(() => import('../views/react-tables/dense/page')));
const ReactDragDropTable = Loadable(lazy(() => import('../views/react-tables/drag-drop/page')));
const ReactEditableTable = Loadable(lazy(() => import('../views/react-tables/editable/page')));
const ReactEmptyTable = Loadable(lazy(() => import('../views/react-tables/empty/page')));
const ReactExpandingTable = Loadable(lazy(() => import('../views/react-tables/expanding/page')));
const ReactFilterTable = Loadable(lazy(() => import('../views/react-tables/filtering/page')));
const ReactPaginationTable = Loadable(lazy(() => import('../views/react-tables/pagination/page')));
const ReactRowSelectionTable = Loadable(
  lazy(() => import('../views/react-tables/row-selection/page')),
);
const ReactSortingTable = Loadable(lazy(() => import('../views/react-tables/sorting/page')));
const ReactStickyTable = Loadable(lazy(() => import('../views/react-tables/sticky/page')));

// charts
const AreaChart = Loadable(lazy(() => import('../views/charts/AreaChart')));
const CandlestickChart = Loadable(lazy(() => import('../views/charts/CandlestickChart')));
const ColumnChart = Loadable(lazy(() => import('../views/charts/ColumnChart')));
const DoughnutChart = Loadable(lazy(() => import('../views/charts/DoughnutChart')));
const GredientChart = Loadable(lazy(() => import('../views/charts/GredientChart')));
const RadialbarChart = Loadable(lazy(() => import('../views/charts/RadialbarChart')));
const LineChart = Loadable(lazy(() => import('../views/charts/LineChart')));

// forms
const FormLayouts = Loadable(lazy(() => import('../views/forms/FormLayouts')));
const FormCustom = Loadable(lazy(() => import('../views/forms/FormCustom')));
const FormHorizontal = Loadable(lazy(() => import('../views/forms/FormHorizontal')));
const FormVertical = Loadable(lazy(() => import('../views/forms/FormVertical')));
const FormValidation = Loadable(lazy(() => import('../views/forms/FormValidation')));
const FormElements = Loadable(lazy(() => import('../views/forms/FormElements')));

// headless-ui
const Dialog = Loadable(lazy(() => import('../views/headless-ui/Dialog')));
const Disclosure = Loadable(lazy(() => import('../views/headless-ui/Disclosure')));
const Dropdown = Loadable(lazy(() => import('../views/headless-ui/Dropdown')));
const Popover = Loadable(lazy(() => import('../views/headless-ui/Popover')));
const Tabs = Loadable(lazy(() => import('../views/headless-ui/Tabs')));
const Transition = Loadable(lazy(() => import('../views/headless-ui/Transition')));

// headless-ui
const HeadlessButtons = Loadable(lazy(() => import('../views/headless-form/HeadlessButtons')));
const HeadlessCheckbox = Loadable(lazy(() => import('../views/headless-form/HeadlessCheckbox')));
const HeadlessComboBox = Loadable(lazy(() => import('../views/headless-form/HeadlessComboBox')));
const HeadlessFieldset = Loadable(lazy(() => import('../views/headless-form/HeadlessFieldset')));
const HeadlessInput = Loadable(lazy(() => import('../views/headless-form/HeadlessInput')));
const HeadlessListbox = Loadable(lazy(() => import('../views/headless-form/HeadlessListbox')));
const HeadlessRadioGroup = Loadable(lazy(() => import('../views/headless-form/HeadlessRadioGroup')));
const HeadlessSelect = Loadable(lazy(() => import('../views/headless-form/HeadlessSelect')));
const HeadlessSwitch = Loadable(lazy(() => import('../views/headless-form/HeadlessSwitch')));
const HeadlessTextarea = Loadable(lazy(() => import('../views/headless-form/HeadlessTextarea')));


// Shadcn-ui
const ShadcnButton = Loadable(lazy(() => import('../views/shadcn-ui/ShadcnButton')));
const ShadcnBadge = Loadable(lazy(() => import('../views/shadcn-ui/ShadcnBadge')));
const ShadcnDropdown = Loadable(lazy(() => import('../views/shadcn-ui/ShadcnDropdown')));
const ShadcnDialog = Loadable(lazy(() => import('../views/shadcn-ui/ShadcnDialog')));
const ShadcnAlert = Loadable(lazy(() => import('../views/shadcn-ui/ShadcnAlert')));
const ShadcnBreadcrumb = Loadable(lazy(() => import('../views/shadcn-ui/ShadcnBreadcrumb')));
const ShadcnCurosel = Loadable(lazy(() => import('../views/shadcn-ui/ShadcnCurosel')));
const ShadcnCard = Loadable(lazy(() => import('../views/shadcn-ui/ShadcnCard')));
const ShadcnDatepicker = Loadable(lazy(() => import('../views/shadcn-ui/ShadcnDatepicker')));
const ShadcnCombobox = Loadable(lazy(() => import('../views/shadcn-ui/ShadcnCombobox')));
const ShadcnCollapsible = Loadable(lazy(() => import('../views/shadcn-ui/ShadcnCollapsible')));
const ShadcnCommand = Loadable(lazy(() => import('../views/shadcn-ui/ShadcnCommand')));
const ShadcnSkeleton = Loadable(lazy(() => import('../views/shadcn-ui/ShadcnSkeleton')));
const ShadcnAvatar = Loadable(lazy(() => import('../views/shadcn-ui/ShadcnAvatar')));
const ShadcnTooltip = Loadable(lazy(() => import('../views/shadcn-ui/ShadcnTooltip')));
const ShadcnAccordion = Loadable(lazy(() => import('../views/shadcn-ui/ShadcnAccordion')));
const ShadcnTab = Loadable(lazy(() => import('../views/shadcn-ui/ShadcnTab')));
const ShadcnProgress = Loadable(lazy(() => import('../views/shadcn-ui/ShadcnProgress')));
const ShadcnDrawer = Loadable(lazy(() => import('../views/shadcn-ui/ShadcnDrawer')));
const ShadcnToast = Loadable(lazy(() => import('../views/shadcn-ui/ShadcnToast')));

// Shadcn Form
const ShadcnInput = Loadable(lazy(() => import('../views/shadcn-form/ShadcnInput')));
const ShadcnSelect = Loadable(lazy(() => import('../views/shadcn-form/ShadcnSelect')));
const ShadcnCheckbox = Loadable(lazy(() => import('../views/shadcn-form/ShadcnCheckbox')));
const ShadcnRadio = Loadable(lazy(() => import('../views/shadcn-form/ShadcnRadio')));

// Shadcn Table
const ShadcnBasicTable = Loadable(lazy(() => import('../views/shadcn-tables/BasicTable')));

// authentication
const Login = Loadable(lazy(() => import('../views/authentication/auth1/Login')));
const Login2 = Loadable(lazy(() => import('../views/authentication/auth2/Login')));
const Register = Loadable(lazy(() => import('../views/authentication/auth1/Register')));
const Register2 = Loadable(lazy(() => import('../views/authentication/auth2/Register')));
const ForgotPassword = Loadable(lazy(() => import('../views/authentication/auth1/ForgotPassword')));
const ForgotPassword2 = Loadable(
  lazy(() => import('../views/authentication/auth2/ForgotPassword')),
);
const TwoSteps = Loadable(lazy(() => import('../views/authentication/auth1/TwoSteps')));
const TwoSteps2 = Loadable(lazy(() => import('../views/authentication/auth2/TwoSteps')));
const SamplePage = Loadable(lazy(() => import('../views/sample-page/SamplePage')));
const Error = Loadable(lazy(() => import('../views/authentication/Error')));
const Maintainance = Loadable(lazy(() => import('../views/authentication/Maintainance')));

// landingpage
const Landingpage = Loadable(lazy(() => import('../views/pages/landingpages/LandingPages')));


// front end pages
const Homepage = Loadable(lazy(() => import('../views/pages/frontend-pages/Homepage')));
const About = Loadable(lazy(() => import('../views/pages/frontend-pages/About')));
const ContactPage = Loadable(lazy(() => import('../views/pages/frontend-pages/Contact')));
const Portfolio = Loadable(lazy(() => import('../views/pages/frontend-pages/Portfolio')));
const PagePricing = Loadable(lazy(() => import('../views/pages/frontend-pages/Pricing')));
const BlogPage = Loadable(lazy(() => import('../views/pages/frontend-pages/Blog')));
const BlogPost = Loadable(lazy(() => import('../views/pages/frontend-pages/BlogPost')));

const Router = [
  {
    path: '/',
    element: <FullLayout />,
    children: [
      { path: '/', exact: true, element: <EcommerceDashboard /> },
      { path: '/dashboards/analytics', exact: true, element: <Analytics /> },
      { path: '/dashboards/crm', exact: true, element: <Crm /> },
            // Apps
      { path: '/apps/contacts', element: <Contact /> },
      { path: '/apps/ecommerce/shop', element: <Ecommerce /> },
      { path: '/apps/ecommerce/list', element: <EcomProductList /> },
      { path: '/apps/ecommerce/checkout', element: <EcomProductCheckout /> },
      { path: '/apps/ecommerce/addproduct', element: <EcommerceAddProduct /> },
      { path: '/apps/ecommerce/editproduct', element: <EcommerceEditProduct /> },
      { path: '/apps/ecommerce/detail/:id', element: <EcommerceDetail /> },
      { path: '/apps/blog/post', element: <Blog/> },
      { path: '/apps/blog/detail/:id', element: <BlogDetail /> },
      { path: '/apps/chats', element: <Chats /> },
      { path: '/apps/user-profile/profile', element: <UserProfile /> },
      { path: '/apps/user-profile/followers', element: <Followers /> },
      { path: '/apps/user-profile/friends', element: <Friends /> },
      { path: '/apps/user-profile/gallery', element: <Gallery /> },
      { path: '/apps/invoice/list', element: <InvoiceList /> },
      { path: '/apps/invoice/create', element: <InvoiceCreate /> },
      { path: '/apps/invoice/detail/:id', element: <InvoiceDetail /> },
      { path: '/apps/invoice/edit/:id', element: <InvoiceEdit /> },
      { path: '/apps/notes', element: <Notes /> },
      { path: '/apps/calendar', element: <Calendar /> },
      { path: '/apps/email', element: <Email /> },
      { path: '/apps/tickets', element: <Tickets /> },
      { path: '/apps/tickets/create', element: <CreateTickets /> },
      { path: '/apps/kanban', element: <Kanban /> },
      { path: '/theme-pages/casl', element: <RollbaseCASL /> },
      { path: '/theme-pages/pricing', element: <Pricing /> },
      { path: '/theme-pages/faq', element: <Faq /> },
      { path: '/theme-pages/account-settings', element: <AccountSetting /> }, 
      { path: '/widgets/cards', element: <WidgetCards /> },
      { path: '/widgets/banners', element: <WidgetBanners /> },
      { path: '/widgets/charts', element: <WidgetCharts /> },
      { path: '/icons/solar', element: <SolarIcon /> },
      { path: '/icons/tabler', element: <TablerIcon /> },
      { path: '/ui-components/accordion', element: <FlowbiteAccordion /> },
      { path: '/ui-components/alert', element: <FlowbiteAlert /> },
      { path: '/ui-components/avatar', element: <FlowbiteAvatar /> },
      { path: '/ui-components/badge', element: <FlowbiteBadge /> },
      { path: '/ui-components/banner', element: <FlowbiteBanner /> },
      { path: '/ui-components/breadcrumb', element: <FlowbiteBreadcrumb /> },
      { path: '/ui-components/button-group', element: <FlowbiteButtonGroup /> },
      { path: '/ui-components/buttons', element: <FlowbiteButtons /> },
      { path: '/ui-components/card', element: <FlowbiteCard /> },
      { path: '/ui-components/carousel', element: <FlowbiteCarousel /> },
      { path: '/ui-components/datepicker', element: <FlowbiteDatePicker /> },
      { path: '/ui-components/drawer', element: <FlowbiteDrawer /> },
      { path: '/ui-components/dropdown', element: <FlowbiteDropdown /> },
      { path: '/ui-components/footer', element: <FlowbiteFooter /> },
      { path: '/ui-components/kbd', element: <FlowbiteKbd /> },
      { path: '/ui-components/listgroup', element: <FlowbiteListgroup /> },
      { path: '/ui-components/megamenu', element: <FlowbiteMegamenu /> },
      { path: '/ui-components/modals', element: <FlowbiteModals /> },
      { path: '/ui-components/navbar', element: <FlowbiteNavbar /> },
      { path: '/ui-components/pagination', element: <FlowbitePagination /> },
      { path: '/ui-components/popover', element: <FlowbitePopover /> },
      { path: '/ui-components/progressbar', element: <FlowbiteProgressbar /> },
      { path: '/ui-components/rating', element: <FlowbiteRating /> },
      { path: '/ui-components/sidebar', element: <FlowbiteSidebar /> },
      { path: '/ui-components/spinner', element: <FlowbiteSpinner /> },
      { path: '/ui-components/tab', element: <FlowbiteTab /> },
      { path: '/ui-components/tables', element: <FlowbiteTables /> },
      { path: '/ui-components/timeline', element: <FlowbiteTimeline /> },
      { path: '/ui-components/toast', element: <FlowbiteToast /> },
      { path: '/ui-components/tooltip', element: <FlowbiteTooltip /> },
      { path: '/ui-components/typography', element: <FlowbiteTypography /> },
      { path: '/charts/area', element: <AreaChart /> },
      { path: '/charts/line', element: <LineChart /> },
      { path: '/charts/gradient', element: <GredientChart /> },
      { path: '/charts/candlestick', element: <CandlestickChart /> },
      { path: '/charts/column', element: <ColumnChart /> },
      { path: '/charts/doughnut', element: <DoughnutChart /> },
      { path: '/charts/radialbar', element: <RadialbarChart /> },
      { path: '/tables/basic', element: <BasicTable /> },
      { path: '/tables/striped-row', element: <StrippedTable /> },
      { path: '/tables/hover-table', element: <HoverTable /> },
      { path: '/tables/checkbox-table', element: <CheckboxTable /> },
      { path: '/react-tables/basic', element: <ReactBasicTable /> },
      { path: '/react-tables/column-visibility', element: <ReactColumnVisibilityTable /> },
      { path: '/react-tables/drag-drop', element: <ReactDragDropTable /> },
      { path: '/react-tables/dense', element: <ReactDenseTable /> },
      { path: '/react-tables/editable', element: <ReactEditableTable /> },
      { path: '/react-tables/empty', element: <ReactEmptyTable /> },
      { path: '/react-tables/expanding', element: <ReactExpandingTable /> },
      { path: '/react-tables/filtering', element: <ReactFilterTable /> },
      { path: '/react-tables/pagination', element: <ReactPaginationTable /> },
      { path: '/react-tables/row-selection', element: <ReactRowSelectionTable /> },
      { path: '/react-tables/sorting', element: <ReactSortingTable /> },
      { path: '/react-tables/sticky', element: <ReactStickyTable /> },
      { path: '/forms/form-elements', element: <FormElements /> },
      { path: '/forms/form-validation', element: <FormValidation /> },
      { path: '/forms/form-horizontal', element: <FormHorizontal /> },
      { path: '/forms/form-vertical', element: <FormVertical /> },
      { path: '/forms/form-layouts', element: <FormLayouts /> },
      { path: '/forms/form-custom', element: <FormCustom /> },
      { path: '/headless-ui/dialog', element: <Dialog /> },
      { path: '/headless-ui/disclosure', element: <Disclosure /> },
      { path: '/headless-ui/dropdown', element: <Dropdown /> },
      { path: '/headless-ui/popover', element: <Popover /> },
      { path: '/headless-ui/tabs', element: <Tabs /> },
      { path: '/headless-ui/transition', element: <Transition /> },
      { path: '/headless-form/buttons', element: <HeadlessButtons /> },
      { path: '/headless-form/checkbox', element: <HeadlessCheckbox /> },
      { path: '/headless-form/combobox', element: <HeadlessComboBox /> },
      { path: '/headless-form/fieldset', element: <HeadlessFieldset /> },
      { path: '/headless-form/input', element: <HeadlessInput /> },
      { path: '/headless-form/listbox', element: <HeadlessListbox /> },
      { path: '/headless-form/radiogroup', element: <HeadlessRadioGroup /> },
      { path: '/headless-form/select', element: <HeadlessSelect /> },
      { path: '/headless-form/switch', element: <HeadlessSwitch /> },
      { path: '/headless-form/textarea', element: <HeadlessTextarea /> },  
      
            /*Shadcn-ui*/
            { path: '/shadcn-ui/buttons', element: <ShadcnButton/> },
            { path: '/shadcn-ui/badge', element: <ShadcnBadge/> },
            { path: '/shadcn-ui/dropdown', element: <ShadcnDropdown/> },
            { path: '/shadcn-ui/dialogs', element: <ShadcnDialog/> },
            { path: '/shadcn-ui/alert', element: <ShadcnAlert/> },
            { path: '/shadcn-ui/toast', element: <ShadcnToast/> },
            { path: '/shadcn-ui/breadcrumb', element: <ShadcnBreadcrumb/> },
            { path: '/shadcn-ui/carousel', element: <ShadcnCurosel/> },
            { path: '/shadcn-ui/card', element: <ShadcnCard/> },
            { path: '/shadcn-ui/datepicker', element: <ShadcnDatepicker/> },
            { path: '/shadcn-ui/combobox', element: <ShadcnCombobox/> },
            { path: '/shadcn-ui/collapsible', element: <ShadcnCollapsible/> },
            { path: '/shadcn-ui/command', element: <ShadcnCommand/> },
            { path: '/shadcn-ui/skeleton', element: <ShadcnSkeleton/> },
            { path: '/shadcn-ui/avatar', element: <ShadcnAvatar/> },
            { path: '/shadcn-ui/tooltip', element: <ShadcnTooltip/> },
            { path: '/shadcn-ui/accordion', element: <ShadcnAccordion/> },
            { path: '/shadcn-ui/tab', element: <ShadcnTab/> },
            { path: '/shadcn-ui/progressbar', element: <ShadcnProgress/> },
            { path: '/shadcn-ui/drawer', element: <ShadcnDrawer/> },
      
            /*Shadcn-Form*/
            { path: '/shadcn-form/input', element: <ShadcnInput/> },
            { path: '/shadcn-form/select', element: <ShadcnSelect/> },
            { path: '/shadcn-form/checkbox', element: <ShadcnCheckbox/> },
            { path: '/shadcn-form/radio', element: <ShadcnRadio/> },      
            { path: '/shadcn-tables/basic', element: <ShadcnBasicTable/> },

      { path: '/sample-page', exact: true, element: <SamplePage /> },
      { path: '*', element: <Navigate to="/auth/404" /> },
    ],
  },
  {
    path: '/',
    element: <BlankLayout />,
    children: [
      {
        path: '/frontend-pages',
        element: <FrontendPageLayout />,
        children: [
          { path: 'homepage', element: <Homepage /> },
          { path: 'aboutus', element: <About /> },
          { path: 'contact', element: <ContactPage /> },
          { path: 'portfolio', element: <Portfolio /> },
          { path: 'pricing', element: <PagePricing /> },
          { path: 'blog', element: <BlogPage /> },
          { path: 'blog/detail/:id', element: <BlogPost /> },
        ]
      },
      { path: '/landingpage', element: <Landingpage /> },
      { path: '/auth/auth1/login', element: <Login /> },
      { path: '/auth/auth2/login', element: <Login2 /> },
      { path: '/auth/auth1/register', element: <Register /> },
      { path: '/auth/auth2/register', element: <Register2 /> },
      { path: '/auth/auth1/forgot-password', element: <ForgotPassword /> },
      { path: '/auth/auth2/forgot-password', element: <ForgotPassword2 /> },
      { path: '/auth/auth1/two-steps', element: <TwoSteps /> },
      { path: '/auth/auth2/two-steps', element: <TwoSteps2 /> },
      { path: '/auth/maintenance', element: <Maintainance /> },
      { path: '404', element: <Error /> },
      { path: '/auth/404', element: <Error /> },
      { path: '*', element: <Navigate to="/auth/404" /> },
    ],
  }
  ,
];

const router = createBrowserRouter(Router)

export default router;
