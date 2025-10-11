"use client";
import CodeDialog from "src/components/ui-components/CodeDialog";
import CardBox from "../../shared/CardBox";
import Formselect from "./code/FormSelectCode";
import FormSelectCode from "./code/FormSelectCode.tsx?raw";
const FormSelect = () => {
 

  return (
    <CardBox className="p-0">
      <div>
      <div className="p-6">
        <h4 className="text-lg font-semibold">Form Select</h4>
        <Formselect />
      </div>
      <CodeDialog>{FormSelectCode}</CodeDialog>
      </div>
    </CardBox>
  );
};

export default FormSelect;
