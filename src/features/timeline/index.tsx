import { useQuery } from "@tanstack/react-query";
import { useState } from "react";

import BlogPostContainer from "./components/BlogPostContainer";
import Post from "./components/Post";
import PostLayout from "./components/PostLayout";
import TimelineContainer from "./components/TimelineContainer";
import TimelineHeader from "./components/TimelineHeader";
import { getUsers } from "../../services/users";
import { getPosts } from "../../services/posts";
import PostSkeleton from "./components/PostSkeleton";

function TimeLine() {
  const [visiblePosts, setVisiblePosts] = useState<number>(10);

  const { data: users, isLoading: isLoadingUsers } = useQuery({
    queryKey: ["get-users"],
    queryFn: getUsers,
  });

  const { data: posts, isLoading: isLoadingPosts } = useQuery({
    queryKey: ["get-posts"],
    queryFn: getPosts,
  });

  const getUserById = (id: number) => {
    return users?.find((user: { id: number }) => user.id === id);
  };

  const sortedPosts =
    posts?.sort((a: { id: number }, b: { id: number }) => b.id - a.id) ?? [];

  const handleLoadMore = () => {
    setVisiblePosts((prev) => Math.min(prev + 10, sortedPosts.length));
  };

  return (
    <TimelineContainer className="mt-[96px]">
      <TimelineHeader>
        <TimelineHeader.Title title="The Future of Technology" />
        <TimelineHeader.Description description="The rapid advancements in technology have significantly impacted various industries. In this post, we will explore how technology is shaping the future and what trends to watch out for." />
      </TimelineHeader>
      <BlogPostContainer title="Internet of Things (IoT)" className="mt-[96px]">
        <PostLayout
          hasPosts={sortedPosts?.length > visiblePosts}
          onLoadMore={handleLoadMore}
        >
          {isLoadingPosts || isLoadingUsers ? (
            <PostSkeleton />
          ) : (
            sortedPosts?.slice(0, visiblePosts).map((post, index) => {
              const user = getUserById(post.userId);
              if (!user) return null;
              return (
                <div className="mb-4">
                  <Post key={index} className="break-inside-avoid">
                    <Post.UserName userName={user.username} />
                    <Post.Title title={post.title} />
                    <Post.Description description={post.body} />
                  </Post>
                </div>
              );
            })
          )}
        </PostLayout>
      </BlogPostContainer>
    </TimelineContainer>
  );
}

export default TimeLine;
