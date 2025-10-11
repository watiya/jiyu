import StickyTable from "src/components/react-tables/sticky/page";
import BreadcrumbComp from "src/layouts/full/shared/breadcrumb/BreadcrumbComp";

const BCrumb = [
    {
        to: "/",
        title: "Home",
    },
    {
        title: "Sticky Table",
    },
];
function page() {
    return (
        <>
            <BreadcrumbComp title="Sticky Table" items={BCrumb} />
            <StickyTable />
        </>
    );
}

export default page;
