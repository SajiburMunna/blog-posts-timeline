import { PropsWithChildren } from "react";

import { Button } from "../../../components/Button";

function PostLayout({
  children,
  hasPosts,
  onLoadMore,
}: PropsWithChildren<{
  hasPosts: boolean;
  onLoadMore: () => void;
}>) {
  return (
    <div className="relative flex flex-col items-center">
      <div className="relative w-full">
        <div className="columns-1 md:columns-2 gap-4">{children}</div>
        {hasPosts && (
          <div className="relative mt-8 flex justify-center">
            <div className="absolute bottom-[30px] left-0 right-0 h-[224px] bg-gradient-to-t from-[#111B21] to-transparent flex items-end justify-center">
              <Button
                onClick={onLoadMore}
                type="button"
                variant="outlined"
                size="lg"
              >
                Load More
              </Button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default PostLayout;
