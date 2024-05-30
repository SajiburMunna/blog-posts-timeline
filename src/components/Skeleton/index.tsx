import clsx from "clsx";

interface Props {
  className?: string;
}

const Skeleton = ({ className = "" }: Props) => {
  const classNames = clsx("skeleton", className);

  return <div className={classNames} />;
};

export default Skeleton;
