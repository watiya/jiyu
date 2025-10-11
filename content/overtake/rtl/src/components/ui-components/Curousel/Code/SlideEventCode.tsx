import { Carousel } from 'flowbite-react';

const SlideEventCode = () => {
  return (
    <div className="h-56 sm:h-64 xl:h-60">
      <Carousel onSlideChange={(index) => console.log('onSlideChange()', index)}>
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

export default SlideEventCode;
