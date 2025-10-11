import CardBox from "src/components/shared/CardBox";
import Dropdwonwidth from "./Codes/DropdwonWidthCode";
import DropdwonWidthCode from "./Codes/DropdwonWidthCode.tsx?raw";
import CodeDialog from "src/components/ui-components/CodeDialog";


const DropdownWidth = () => {
  return (
    <div>
      <CardBox className="p-0">
        <div>
        <div className="p-6">
          <h4 className="text-lg font-semibold">Dropdown Width</h4>
          <Dropdwonwidth/>
        </div>
        <CodeDialog>{DropdwonWidthCode}</CodeDialog>
        </div>
      </CardBox>
    </div>
  )
}

export default DropdownWidth



