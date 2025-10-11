
import BlogPost from "src/components/front-pages/blog/BlogPost";
import PurchaseTemp from "src/components/front-pages/homepage/PurchaseTemp";
import FrontEndBreadcrumb from "src/layouts/full/shared/breadcrumb/FrontBreadcrumb";



const BlogPage = () => {
  return (
    <>
      <FrontEndBreadcrumb title="Latest blog & news" link="Blog Page" />
      <div className="bg-lightgray dark:bg-darkgray">
        <BlogPost />
      </div>
      <PurchaseTemp />
    </>
  );
};

export default BlogPage;
