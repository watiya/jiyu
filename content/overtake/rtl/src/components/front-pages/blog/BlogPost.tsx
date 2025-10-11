
import { BlogProvider } from "src/context/BlogContext";
import BlogPageList from "./BlogPageList";

const BlogPost = () => {
  return (
    <>
      <BlogProvider>
       <BlogPageList/>
      </BlogProvider>
    </>
  )
}

export default BlogPost
