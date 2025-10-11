import CheckBoxes from "src/components/form-components/Form-Elements/CheckBoxes";
import DefaultForm from "src/components/form-components/Form-Elements/DefaultForm";
import DisableInputs from "src/components/form-components/Form-Elements/DisableInputs";
import DropZone from "src/components/form-components/Form-Elements/DropZone";
import FileUploadEle from "src/components/form-components/Form-Elements/FileUploadEle";
import FileUploadSizings from "src/components/form-components/Form-Elements/FileUploadSizings";
import FormHelperText from "src/components/form-components/Form-Elements/FormHelperText";
import FormValidation from "src/components/form-components/Form-Elements/FormValidation";
import InputColors from "src/components/form-components/Form-Elements/InputColors";
import InputShadow from "src/components/form-components/Form-Elements/InputShadow";
import InputSizing from "src/components/form-components/Form-Elements/InputSizing";
import InputWithIcon from "src/components/form-components/Form-Elements/InputWithIcon";
import RadioButtons from "src/components/form-components/Form-Elements/RadioButtons";
import RangeSliders from "src/components/form-components/Form-Elements/RangeSlider";
import RoundedInputs from "src/components/form-components/Form-Elements/RoundedInputs";
import SelectInput from "src/components/form-components/Form-Elements/SelectInput";
import SquareInputs from "src/components/form-components/Form-Elements/SquareInputs";
import TextAreaEle from "src/components/form-components/Form-Elements/TextArea";
import ToggelSwitches from "src/components/form-components/Form-Elements/ToggelSwitches";
import BreadcrumbComp from "src/layouts/full/shared/breadcrumb/BreadcrumbComp";




const BCrumb = [
  {
    to: "/",
    title: "Home",
  },
  {
    title: "Form Elements",
  },
];

const FormElements = () => {
  return (
    <>
      <BreadcrumbComp title="Form Elements" items={BCrumb} />
      <div className="grid grid-cols-12 gap-30">
        <div className="lg:col-span-6 col-span-12">
          <RoundedInputs />
        </div>
        <div className="lg:col-span-6 col-span-12">
          <SquareInputs />
        </div>
        <div className="lg:col-span-4 col-span-12">
          <DefaultForm />
        </div>
        <div className="lg:col-span-4 col-span-12">
          <InputSizing />
        </div>
        <div className="lg:col-span-4 col-span-12">
          <DisableInputs />
        </div>
        <div className="lg:col-span-4 col-span-12">
          <InputShadow />
        </div>
        <div className="lg:col-span-4 col-span-12">
          <InputWithIcon />
        </div>
        <div className="lg:col-span-4 col-span-12">
          <RangeSliders />
        </div>
        <div className="lg:col-span-4 col-span-12">
          <FormValidation />
        </div>
        <div className="lg:col-span-4 col-span-12">
          <TextAreaEle />
        </div>
        <div className="lg:col-span-4 col-span-12">
          <ToggelSwitches />
        </div>
        <div className="lg:col-span-4 col-span-12">
          <CheckBoxes />
        </div>
        <div className="lg:col-span-4 col-span-12">
          <RadioButtons />
        </div>
        <div className="lg:col-span-4 col-span-12">
          <FileUploadEle />
        </div>
        <div className="md:col-span-6 col-span-12">
          <FileUploadSizings />
        </div>
        <div className="md:col-span-6 col-span-12">
          <DropZone />
        </div>
        <div className="md:col-span-6 col-span-12">
          <SelectInput />
        </div>
        <div className="md:col-span-6 col-span-12">
          <FormHelperText />
        </div>
        <div className="col-span-12">
          <InputColors />
        </div>
      </div>
    </>
  );
};

export default FormElements;
