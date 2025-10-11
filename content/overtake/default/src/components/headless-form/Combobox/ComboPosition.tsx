import CardBox from "src/components/shared/CardBox";
import Comboposition from "./Codes/ComboPositionCode";
import ComboPositionCode from "./Codes/ComboPositionCode.tsx?raw";
import CodeDialog from "src/components/ui-components/CodeDialog";




const ComboPosition = () => {

    
    
  return (
    <div>
      <CardBox className="p-0">
        <div>
        <div className="p-6 max-w-sm">
          <h4 className="text-lg font-semibold">Dropdown Position</h4>
          <Comboposition/>
        </div>
        <CodeDialog>{ComboPositionCode}</CodeDialog>
        </div>
      </CardBox>
    </div>
  )
}

export default ComboPosition
