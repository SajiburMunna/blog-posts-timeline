function PostLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="relative min-h-screen flex flex-col items-center">
      <div className="relative w-full">
        <div className="columns-1 md:columns-2 gap-4">{children}</div>
        <div className="relative mt-8 flex justify-center">
          <div className="absolute bottom-[30px] left-0 right-0 h-[224px] bg-gradient-to-t from-[#111B21] to-transparent flex items-end justify-center">
            <button className="px-4 py-2 bg-blue-600 text-white rounded-lg">
              Show more
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PostLayout;
