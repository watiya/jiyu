import { Carousel } from 'flowbite-react';
import blogImg1 from '/src/assets/images/blog/blog-img1.jpg';
import blogImg2 from '/src/assets/images/blog/blog-img2.jpg';
import blogImg3 from '/src/assets/images/blog/blog-img3.jpg';
import blogImg4 from '/src/assets/images/blog/blog-img4.jpg';
import blogImg5 from '/src/assets/images/blog/blog-img5.jpg';

const IndicatorsCode = () => {
  return (
    <div>
      <div className="grid h-56 grid-cols-2 gap-4 sm:h-64 xl:h-80 2xl:h-96">
        <Carousel>
          <img src={blogImg1} alt="..." />
          <img src={blogImg2} alt="..." />
          <img src={blogImg3} alt="..." />
          <img src={blogImg4} alt="..." />
          <img src={blogImg5} alt="..." />
        </Carousel>
        <Carousel indicators={false}>
          <img src={blogImg1} alt="..." />
          <img src={blogImg2} alt="..." />
          <img src={blogImg3} alt="..." />
          <img src={blogImg4} alt="..." />
          <img src={blogImg5} alt="..." />
        </Carousel>
      </div>
    </div>
  );
};

export default IndicatorsCode;
