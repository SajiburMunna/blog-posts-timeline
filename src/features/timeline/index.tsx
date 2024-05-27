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
      <Post>
        <Post.UserName userName="John Doe" />
        <Post.Title>Post Title</Post.Title>
        <Post.Description>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
          voluptate, quae, quos, quas quia repellendus dolorum doloribus
          voluptatum doloremque quidem nesciunt.
        </Post.Description>
      </Post>
    </TimelineContainer>
  );
}

export default TimeLine;
