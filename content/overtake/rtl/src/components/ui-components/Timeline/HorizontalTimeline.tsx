
import { Timeline, Button, TimelineItem, TimelineBody, TimelineContent, TimelinePoint, TimelineTime, TimelineTitle } from 'flowbite-react'
import CardBox from 'src/components/shared/CardBox'
import { HiArrowNarrowRight, HiCalendar } from "react-icons/hi";
const HorizontalTimeline = () => {
  return (
    <div>
      <CardBox>
            <h4 className="text-lg font-semibold mb-2">Horizontal Timeline</h4>
            <Timeline horizontal>
              <TimelineItem>
                <TimelinePoint icon={HiCalendar} />
                <TimelineContent>
                  <TimelineTime>February 2022</TimelineTime>
                  <TimelineTitle>
                    Application UI code in Tailwind CSS
                  </TimelineTitle>
                  <TimelineBody>
                    Get access to over 20+ pages including a dashboard layout,
                    charts, kanban board, calendar, and pre-order E-commerce &
                    Marketing pages.
                  </TimelineBody>
                  <Button color="primary">
                    Learn More
                    <HiArrowNarrowRight className="ml-2 h-3 w-3" />
                  </Button>
                </TimelineContent>
              </TimelineItem>
              <TimelineItem>
                <TimelinePoint icon={HiCalendar} />
                <TimelineContent>
                  <TimelineTime>March 2022</TimelineTime>
                  <TimelineTitle>Marketing UI design in Figma</TimelineTitle>
                  <TimelineBody>
                    All of the pages and components are first designed in Figma
                    and we keep a parity between the two versions even as we
                    update the project.
                  </TimelineBody>
                </TimelineContent>
              </TimelineItem>
              <TimelineItem>
                <TimelinePoint icon={HiCalendar} />
                <TimelineContent>
                  <TimelineTime>April 2022</TimelineTime>
                  <TimelineTitle>
                    E-Commerce UI code in Tailwind CSS
                  </TimelineTitle>
                  <TimelineBody>
                    Get started with dozens of web components and interactive
                    elements built on top of Tailwind CSS.
                  </TimelineBody>
                </TimelineContent>
              </TimelineItem>
            </Timeline>
          </CardBox> 
    </div>
  )
}

export default HorizontalTimeline
