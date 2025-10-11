import { Carousel } from 'flowbite-react';

const SliderContentCode = () => {
  return (
    <div className="h-56 sm:h-64 xl:h-60">
      <Carousel>
        <div className="flex h-full items-center justify-center bg-muted text-lg font-semibold text-dark dark:bg-dark dark:text-white">
          Slide 1
        </div>
        <div className="flex h-full items-center justify-center bg-muted text-lg font-semibold text-dark dark:bg-dark dark:text-white">
          Slide 2
        </div>
        <div className="flex h-full items-center justify-center bg-muted text-lg font-semibold text-dark dark:bg-dark dark:text-white">
          Slide 3
        </div>
      </Carousel>
    </div>
  );
};

export default SliderContentCode;
