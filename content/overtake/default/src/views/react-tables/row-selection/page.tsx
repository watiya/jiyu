import ReactEditable from "src/components/react-tables/row-selection/page";
import BreadcrumbComp from "src/layouts/full/shared/breadcrumb/BreadcrumbComp";

const BCrumb = [
    {
        to: "/",
        title: "Home",
    },
    {
        title: "Row Selection Table",
    },
];
function page() {
    return (
        <>
            <BreadcrumbComp title="Row Selection Table " items={BCrumb} />
            <ReactEditable />
        </>
    );
}

export default page;
