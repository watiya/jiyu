import BlogPosts from "../../../components/apps/blog/BlogPosts";
import BreadcrumbComp from "../../../layouts/full/shared/breadcrumb/BreadcrumbComp";


const BCrumb = [
  {
    to: "/",
    title: "Home",
  },
  {
    title: "Blog Listing",
  },
];

const Blog = () => {
  return (
    <>
     <BreadcrumbComp title="Blog app" items={BCrumb} />
     <BlogPosts/>
    </>
  );
};
export default Blog;
