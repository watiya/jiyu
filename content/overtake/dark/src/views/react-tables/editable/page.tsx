import Editable from "src/components/react-tables/editable/page";
import BreadcrumbComp from "src/layouts/full/shared/breadcrumb/BreadcrumbComp";

const BCrumb = [
    {
        to: "/",
        title: "Home",
    },
    {
        title: "Editable Table",
    },
];
function page() {
    return (
        <>
            <BreadcrumbComp title="Editable Table " items={BCrumb} />
            <Editable />
        </>
    );
}

export default page;
