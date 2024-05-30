import Skeleton from "../../../components/skeleton"

 

function PostSkeleton() {
  return (
    <div className="min-w-full">
        {
        Array.from({ length: 5 }).map((_, index) => (
          <Skeleton key={index} className="mb-4 max-w-[588px] h-[190px] break-inside-avoid" />
        ))
    }
    </div>
  )
}

export default PostSkeleton