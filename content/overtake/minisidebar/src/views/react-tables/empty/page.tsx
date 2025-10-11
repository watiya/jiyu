import EmptyTable from "src/components/react-tables/empty/page";
import BreadcrumbComp from "src/layouts/full/shared/breadcrumb/BreadcrumbComp";

const BCrumb = [
    {
        to: "/",
        title: "Home",
    },
    {
        title: "Empty Table",
    },
];
function page() {
    return (
        <>
            <BreadcrumbComp title="Empty Table " items={BCrumb} />
            <EmptyTable />
        </>
    );
}

export default page;
