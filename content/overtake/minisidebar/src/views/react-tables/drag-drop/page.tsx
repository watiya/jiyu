import Columndragdrop from "src/components/react-tables/drag-drop/Columndragdrop";
import Rowdragdrop from "src/components/react-tables/drag-drop/Rowdragdrop";
import BreadcrumbComp from "src/layouts/full/shared/breadcrumb/BreadcrumbComp";

const BCrumb = [
    {
        to: "/",
        title: "Home",
    },
    {
        title: "Drag & Drop Table ",
    },
];
function page() {
    return (
        <>
            <BreadcrumbComp title="Drag & Drop Table " items={BCrumb} />
            <div className="grid grid-cols-12 gap-7">
                <div className="col-span-12">
                    <Rowdragdrop />
                </div>
                <div className="col-span-12">
                    <Columndragdrop />
                </div>
            </div>
        </>
    );
}

export default page;
