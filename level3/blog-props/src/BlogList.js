import React from "react"
import BlogPost from "./BlogPost"
import posts from "./posts"
//import Header from "./Header"



function BlogList(){
   const blogPosts = posts.map((post,index)=>{
        return(
            <BlogPost
                key={index}
                title={post.title}
                subTitle={post.subTitle}
                author={post.author}
                date={post.date}
            />
        )
   })
   
   return(
        <div>   
            {blogPosts}
        </div>
   )
}

export default BlogList;