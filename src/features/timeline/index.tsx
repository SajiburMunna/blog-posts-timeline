import BlogPostContainer from "./components/blogPostContainer";
import Post from "./components/post";
import PostLayout from "./components/postLayout";
import TimelineContainer from "./components/timelineContainer";
import TimelineHeader from "./components/timelineHeader";

const postsData = [
  {
    title: "Something like a post title",
    description:
      "It will be a post description and many this what you would like to show here, I don't know how much long this will be.",
    author: "Isabel Maru",
  },
  {
    title: "Something like a post title",
    description:
      "It will be a post description and many this what you would like to show here, I don't know how much long this will be.",
    author: "Isabel Maru",
  },
  {
    title: "Something like a post title",
    description:
      "It will be a post description and many this what you would like to show here, I don't know how much long this will be.",
    author: "Isabel Maru",
  },
  {
    title: "Something like a post title",
    description:
      "It will be a post description and many this what you would like to show here, I don't know how much long this will be.",
    author: "Isabel Maru",
  },
];

function TimeLine() {
  return (
    <TimelineContainer className="mt-[96px]">
      <TimelineHeader>
        <TimelineHeader.Title>Timeline</TimelineHeader.Title>
        <TimelineHeader.Description>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nostrum
          iusto tempora deserunt ipsam optio itaque aut eaque aperiam tempore,
          laborum non accusantium sed, odit at fugit eos quod excepturi?
          Distinctio?
        </TimelineHeader.Description>
      </TimelineHeader>

      <BlogPostContainer title="Blog Post" className="mt-[96px]">
        <PostLayout>
          {postsData.map((post, index) => (
            <div className="mb-4">
              <Post key={index} className="break-inside-avoid">
                <Post.UserName userName={post.author} />
                <Post.Title title={post.title} />
                <Post.Description description={post.description} />
              </Post>
            </div>
          ))}
        </PostLayout>
      </BlogPostContainer>
    </TimelineContainer>
  );
}

export default TimeLine;
