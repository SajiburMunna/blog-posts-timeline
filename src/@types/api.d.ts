type Posts = {
  userId: number;
  id: number;
  title: string;
  body: string;
};

type Users = {
  id: number;
  username: string;
};

type Comments = {
  id: number;
  postId: number;
  name: string;
  email: string;
  body: string;
};
