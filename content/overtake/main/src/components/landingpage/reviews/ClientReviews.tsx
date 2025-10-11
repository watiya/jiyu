import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from 'src/components/shadcn-ui/Default-Ui/carousel';
import * as ClientRev from '../Data';
import { Rating, RatingStar } from 'flowbite-react';

 
const ClientReviews = () => {
  return (
    <>
      <div className="bg-white dark:bg-dark overflow-x-hidden">
        <div className="container md:py-20 py-12">
          <div data-aos="fade-up" data-aos-delay="400" data-aos-duration="1000">
            <Carousel className="text-center mx-auto w-full">
              <div className="max-w-4xl mx-auto">
                <CarouselContent className="">
                  {ClientRev.userReview.map((item, index) => (
                    <CarouselItem key={index}>
                      <div className="mx-auto">
                        <Rating className="justify-center mb-4" size="md">
                          <RatingStar />
                          <RatingStar />
                          <RatingStar />
                          <RatingStar />
                          <RatingStar />
                        </Rating>
                      </div>
                      <h2 className="md:text-4xl text-2xl pb-8 font-medium">{item.review}</h2>
                      <div className="flex gap-3.5 items-center justify-center">
                        <div>
                          <img src={item.img} alt="review" className="rounded-full h-14 w-14" />
                        </div>
                        <div>
                          <h5 className="text-lg text-left">{item.title}</h5>
                          <p>{item.subtitle}</p>
                        </div>
                      </div>
                    </CarouselItem>
                  ))}
                </CarouselContent>
              </div>
              <CarouselPrevious className="!left-0" />
              <CarouselNext className="!right-0" />
            </Carousel>
          </div>
        </div>
      </div>
    </>
  );
};
 
export default ClientReviews;