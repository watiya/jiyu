import CardBox from "src/components/shared/CardBox";
import ListingtabChange from "./Code/ListingTabChangeCode";
import ListingTabChangeCode from "./Code/ListingTabChangeCode.tsx?raw";
import CodeDialog from "src/components/ui-components/CodeDialog";

const ListingForChangeTab = () => {
  return (
    <div>
      <CardBox className="p-0">
        <div>
        <div className="p-6">
          <h4 className="text-lg font-semibold">Listening For Changes Tab</h4>
          <ListingtabChange/>
        </div>
        <CodeDialog>{ListingTabChangeCode}</CodeDialog>
       </div> 
      </CardBox>
    </div>
  );
};

export default ListingForChangeTab;
