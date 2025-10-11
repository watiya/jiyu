
import { Accordion, AccordionContent, AccordionPanel, AccordionTitle } from "flowbite-react";

const BasicAccordiancode = () => {
  return (
    <>
       <Accordion>
            <AccordionPanel>
                <AccordionTitle className="focus:ring-0 !border-b !border-border dark:!border-darkborder">
                    Accordion Item #1
                </AccordionTitle>
                <AccordionContent>
                    <p className="mb-2 ">
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
                    <p className="mb-2 ">
                        Contrary to popular belief, Lorem Ipsum is not simply random
                        text. It has roots in a piece of classical Latin literature from
                        45 BC, making it over 2000 years old.
                    </p>
                </AccordionContent>
            </AccordionPanel>
            <AccordionPanel>
                <AccordionTitle className="focus:ring-0">
                    Accordion Item #3
                </AccordionTitle>
                <AccordionContent>
                    <p className="mb-2 ">
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

export default BasicAccordiancode