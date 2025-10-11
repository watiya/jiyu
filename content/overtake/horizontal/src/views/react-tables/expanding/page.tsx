import ExpandingTable from "src/components/react-tables/expanding/page";
import BreadcrumbComp from "src/layouts/full/shared/breadcrumb/BreadcrumbComp";


const BCrumb = [
    {
        to: "/",
        title: "Home",
    },
    {
        title: "Expanding Table",
    },
];
function page() {
    return (
        <>
            <BreadcrumbComp title="Expanding Table " items={BCrumb} />
            <ExpandingTable />
        </>
    );
}

export default page;
