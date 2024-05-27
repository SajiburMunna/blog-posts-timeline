import { PropsWithChildren } from "react";

import Card from "../../../components/card";
import UserAvatar from "../../../assets/user-avatar";

function Post({ children }: PropsWithChildren<unknown> = { children: "Post" }) {
  return (
    <Card>
      <div className="bg-[#18262E] rounded-lg p-4">{children}</div>
    </Card>
  );
}

export default Post;

Post.UserName = function UserName({ userName }: { userName: string }) {
  return (
    <div className="flex items-center space-x-2">
      <UserAvatar />
      <p className="text-[#E6E6E6] font-normal text-base leading-[19px]">
        {userName}
      </p>
    </div>
  );
};

Post.Title = function Title({ children }: PropsWithChildren<unknown>) {
  return <h2 className="font-semibold text-lg leading-6">{children}</h2>;
};

Post.Description = function Description({
  children,
}: PropsWithChildren<unknown>) {
  return <p className="text-base leading-5">{children}</p>;
};
