import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "src/components/shadcn-ui/Default-Ui/collapsible";

const BasicCollapseCode = () => {
  return (
    <>
    <div>
      <Collapsible>
        <CollapsibleTrigger className="text-ld text-15 font-medium">
          Can I use this in my project?
        </CollapsibleTrigger>
        <CollapsibleContent className="mt-2 text-darklink dark:text-bodytext">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged. It was popularised in the 1960s with
          the release of Letraset sheets containing Lorem Ipsum passages, and
          more recently with desktop publishing software like Aldus PageMaker
          including versions of Lorem Ipsum.
        </CollapsibleContent>
      </Collapsible>
    </div>
    </>
  )
}

export default BasicCollapseCode