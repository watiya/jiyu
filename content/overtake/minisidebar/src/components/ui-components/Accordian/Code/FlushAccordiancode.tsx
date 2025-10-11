
import { Accordion, AccordionContent, AccordionPanel, AccordionTitle } from "flowbite-react";

const FlushAccordiancode = () => {
  return (
    <>
           <Accordion collapseAll>
          <AccordionPanel>
            <AccordionTitle className="focus:ring-0 border-b border-border dark:border-darkborder">
              Accordion Item
            </AccordionTitle>
            <AccordionContent>
              <p>
                Contrary to popular belief, Lorem Ipsum is not simply random
                text. It has roots in a piece of classical Latin literature from
                45 BC, making it over 2000 years old.
              </p>
            </AccordionContent>
          </AccordionPanel>
          <AccordionPanel>
            <AccordionTitle className="focus:ring-0 border-b border-border dark:border-darkborder">
              Accordion Item #2
            </AccordionTitle>
            <AccordionContent>
              <p>
                Contrary to popular belief, Lorem Ipsum is not simply random
                text. It has roots in a piece of classical Latin literature from
                45 BC, making it over 2000 years old.
              </p>
            </AccordionContent>
          </AccordionPanel  >
          <AccordionPanel >
            <AccordionTitle>
              Accordion Item #3
            </AccordionTitle>
            <AccordionContent>
              <p>
                Contrary to popular belief, Lorem Ipsum is not simply random
                text. It has roots in a piece of classical Latin literature from
                45 BC, making it over 2000 years old.
              </p>
            </AccordionContent>
          </AccordionPanel>
        </Accordion>
    </>
  )
}

export default FlushAccordiancode