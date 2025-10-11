import FooterTable from "src/components/react-tables/react-basics/FooterTable";
import StripedTable from "src/components/react-tables/react-basics/StripedTable";
import BreadcrumbComp from "src/layouts/full/shared/breadcrumb/BreadcrumbComp";
import ReactBasicTables from 'src/components/react-tables/react-basics/BasicTables';

const BCrumb = [
    {
        to: "/",
        title: "Home",
    },
    {
        title: "Tables List",
    },
];
function page() {
    return (
        <>
            <BreadcrumbComp title="Basic Tables List" items={BCrumb} />
            <div className="grid grid-cols-12 gap-7">
                <div className="col-span-12">
                    <ReactBasicTables />
                </div>
                <div className="col-span-12">
                    <StripedTable />
                </div>
                <div className="col-span-12">
                    <FooterTable />
                </div>
            </div>

        </>
    )
}

export default page
