
import { BlogProvider } from "src/context/BlogContext"
import BlogListing from "./BlogListing"



const BlogPosts = () => {
  return (
    <>
      <BlogProvider>
        <BlogListing />
      </BlogProvider>
    </>
  )
}

export default BlogPosts
