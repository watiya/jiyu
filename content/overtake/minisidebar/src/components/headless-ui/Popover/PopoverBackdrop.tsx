import CardBox from "src/components/shared/CardBox";
import PopoverbgDrop from "./Code/PopoverBgDropcode";
import PopoverBgDropcode from "./Code/PopoverBgDropcode.tsx?raw";
import CodeDialog from "src/components/ui-components/CodeDialog";

const PopoverBackdrops = () => {
  return (
    <div>
      <CardBox className="p-0">
        <div>
        <div className="p-6 max-w-sm">
          <h4 className="text-lg font-semibold">Popover Backdrop</h4>
          <PopoverbgDrop />
        </div>
        <CodeDialog>{PopoverBgDropcode}</CodeDialog>
       </div>
      </CardBox>
    </div>
  );
};

export default PopoverBackdrops;
