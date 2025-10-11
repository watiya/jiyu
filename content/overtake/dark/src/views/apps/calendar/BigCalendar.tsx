import CalendarApp from "src/components/apps/calendar";
import BreadcrumbComp from "src/layouts/full/shared/breadcrumb/BreadcrumbComp";



const BCrumb = [
  {
    to: "/",
    title: "Home",
  },
  {
    title: "Calendar",
  },
];

const BigCalendar = () => {
  return (
    <>
      <BreadcrumbComp title="Calendar" items={BCrumb} />
      <CalendarApp />
    </>
  );
};

export default BigCalendar;
