import BasicRadioGroup from "src/components/headless-form/RadioGroup/BasicRadioGroup"
import DisabledRadioGroup from "src/components/headless-form/RadioGroup/DisabledRadioGroup"
import MainRadioGroup from "src/components/headless-form/RadioGroup/MainRadioGroup"
import RadioGroupWithDesc from "src/components/headless-form/RadioGroup/RadioGroupWithDesc"
import WithHtmlForms from "src/components/headless-form/RadioGroup/WithHtmlForms"
import BreadcrumbComp from "src/layouts/full/shared/breadcrumb/BreadcrumbComp"

const BCrumb = [
  {
    to: "/",
    title: "Home",
  },
  {
    title: "RadioGRoup",
  },
]

const HeadlessRadioGroup = () => {
  return (
    <>
      <BreadcrumbComp title="Radio Group" items={BCrumb} />
      <div className="grid grid-cols-12 gap-5 sm:gap-30">
        <div className="col-span-12">
          <MainRadioGroup />
        </div>

        <div className="col-span-12">
          <RadioGroupWithDesc />
        </div>
        <div className="col-span-12">
          <DisabledRadioGroup />
        </div>
        <div className="col-span-12">
          <BasicRadioGroup />
        </div>
        <div className="col-span-12">
          <WithHtmlForms />
        </div>
      </div>
    </>
  )
}

export default HeadlessRadioGroup