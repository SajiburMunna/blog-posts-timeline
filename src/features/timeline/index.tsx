import BlogPostContainer from "./components/blogPostContainer";
import Post from "./components/post";
import TimelineContainer from "./components/timelineContainer";
import TimelineHeader from "./components/timelineHeader";

function TimeLine() {
  return (
    <TimelineContainer>
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
        <Post>
          <Post.UserName userName="John Doe" />
          <Post.Title title="Post Title" />
          <Post.Description
            description="  Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
            voluptate, quae, quos, quas quia repellendus dolorum doloribus
            voluptatum doloremque quidem nesciunt."
          />
        </Post>
        <Post>
          <Post.UserName userName="John Doe" />
          <Post.Title title="Post Title" />
          <Post.Description
            description=" Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
            voluptate, quae, quos, quas quia repellendus dolorum doloribus
            voluptatum doloremque quidem nesciunt."
          />
        </Post>
      </BlogPostContainer>
    </TimelineContainer>
  );
}

export default TimeLine;
