import { Card, CardContent } from "src/components/shadcn-ui/Default-Ui/card"
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "src/components/shadcn-ui/Default-Ui/carousel"

const BasicCarouselCode = () => {
  return (
   <>
   <div className="flex flex-wrap items-center justify-center gap-3 mt-4">
                <Carousel className="w-full max-w-xs">
                    <CarouselContent>
                        {Array.from({ length: 5 }).map((_, index) => (
                            <CarouselItem key={index}>
                                <div className="p-1">
                                    <Card className='border-ld'>
                                        <CardContent className="flex aspect-square items-center justify-center p-6">
                                            <span className="text-4xl text-ld font-semibold">{index + 1}</span>
                                        </CardContent>
                                    </Card>
                                </div>
                            </CarouselItem>
                        ))}
                    </CarouselContent>
                    <CarouselPrevious className='text-primary' />
                    <CarouselNext />
                </Carousel>
            </div>
   </>
  )
}

export default BasicCarouselCode