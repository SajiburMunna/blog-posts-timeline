import { PropsWithChildren } from "react";
import clsx from "clsx";

import Card from "../../../components/card";
import UserAvatar from "../../../assets/user-avatar";

function Post({
  children,
  className,
}: PropsWithChildren<{
  className?: string;
}>) {
  const classNames = clsx("bg-[#18262E] rounded-lg p-4", className);
  return (
    <Card>
      <div className={classNames}>{children}</div>
    </Card>
  );
}

export default Post;

Post.UserName = function UserName({ userName }: { userName: string }) {
  return (
    <div className="flex items-center space-x-2 mb-4">
      <UserAvatar />
      <p className="text-[#E6E6E6] font-normal text-base leading-[19px]">
        {userName}
      </p>
    </div>
  );
};

Post.Title = function Title({ title }: { title: string }) {
  return (
    <h2 className="font-semibold text-xl leading-6 text-white mb-2">{title}</h2>
  );
};

Post.Description = function Description({
  description,
}: {
  description: string;
}) {
  return (
    <p className="text-base font-normal text-[#E6E6E6] leading-5">
      {description}
    </p>
  );
};
