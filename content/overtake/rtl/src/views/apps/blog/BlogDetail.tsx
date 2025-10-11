import BlogDetailData from "../../../components/apps/blog/detail";
import { BlogProvider } from "../../../context/BlogContext";
import BreadcrumbComp from "../../../layouts/full/shared/breadcrumb/BreadcrumbComp";




const BCrumb = [
  {
    to: "/",
    title: "Home",
  },
  {
    title: "Blog Detail",
  },
];
const BlogDetail = () => {
  return (
    <>
      <BlogProvider>
        <BreadcrumbComp title="Blog Detail" items={BCrumb} />
        <BlogDetailData />
      </BlogProvider>
    </>
  )
}

export default BlogDetail
