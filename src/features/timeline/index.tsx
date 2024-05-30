import { useQuery } from "@tanstack/react-query";

import BlogPostContainer from "./components/blogPostContainer";
import Post from "./components/post";
import PostLayout from "./components/postLayout";
import TimelineContainer from "./components/timelineContainer";
import TimelineHeader from "./components/timelineHeader";
import { getUsers } from "../../services/users";
import { getPosts } from "../../services/posts";
import PostSkeleton from "./components/postSkeleton";
 
 
 
function TimeLine() {

 const {data:users, isLoading:isLoadingUsers}= useQuery({
    queryKey: ['get-users'],
    queryFn: getUsers
  });

  const {data:posts, isLoading:isLoadingPosts}= useQuery({
    queryKey: ['get-posts'],
    queryFn: getPosts
  });

//  if(isLoadingUsers || isLoadingPosts){
//    return <div>Loading...</div>
//   }
 
  const getUserById = (id: number) => {
    return  users.find((user: { id: number }) => user.id === id);
  }

  const sortedPosts = posts?.sort((a: { id: number }, b: { id: number }) => b.id - a.id) ?? [];


 
  return (
    <TimelineContainer className="mt-[96px]">
      <TimelineHeader>
        <TimelineHeader.Title title="The Future of Technology"/> 
        <TimelineHeader.Description description="The rapid advancements in technology have significantly impacted various industries. In this post, we will explore how technology is shaping the future and what trends to watch out for."/>
      </TimelineHeader>

      <BlogPostContainer title="Internet of Things (IoT)" className="mt-[96px]">
        <PostLayout isHasPosts ={!isLoadingPosts && !isLoadingUsers}>
          {
            isLoadingPosts || isLoadingUsers ? <PostSkeleton></PostSkeleton> : sortedPosts.map((post, index) => (
              <div className="mb-4">
                <Post key={index} className="break-inside-avoid">
                  <Post.UserName userName={getUserById(post.userId).username} />
                  <Post.Title title={post.title} />
                  <Post.Description description={post.body} />
                </Post>
              </div>
            ))
          }
         
        </PostLayout>
      </BlogPostContainer>
    </TimelineContainer>
  );
}

export default TimeLine;
