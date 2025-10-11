import GalleryApp from "src/components/apps/userprofile/Gallery";
import BreadcrumbComp from "src/layouts/full/shared/breadcrumb/BreadcrumbComp";



const BCrumb = [
  {
    to: "/",
    title: "Home",
  },
  {
    title: "Gallery",
  },
];
const Gallery = () => {
  return (
    <>
      <BreadcrumbComp title="Gallery" items={BCrumb} />
      <GalleryApp />
    </>
  );
};

export default Gallery;
