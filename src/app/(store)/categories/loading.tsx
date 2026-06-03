export default function CategoriesLoading() {
  return (
    <main className="w-full">
      {/* Hero skeleton */}
      <div className="w-full h-[530px] bg-gray-200 animate-pulse" />

      {/* Grid skeleton */}
      <div className="w-full px-4 md:px-8 lg:px-14 py-6 max-w-[1400px] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-[1.2fr_1fr] gap-4 mb-4">
          <div className="h-[270px] bg-gray-200 animate-pulse" />
          <div className="h-[270px] bg-gray-200 animate-pulse" />
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          {Array.from({ length: 3 }).map((_, i) => (
            <div key={i} className="h-[220px] bg-gray-200 animate-pulse" />
          ))}
        </div>
      </div>

      {/* Carousel skeleton */}
      <div className="w-full px-4 md:px-8 lg:px-14 py-10 max-w-[1400px] mx-auto">
        <div className="h-5 w-48 bg-gray-200 animate-pulse rounded mb-8" />
        <div className="flex gap-5">
          {Array.from({ length: 4 }).map((_, i) => (
            <div key={i} className="flex-none w-[270px]">
              <div className="h-[270px] bg-gray-200 animate-pulse mb-3" />
              <div className="h-3 w-16 bg-gray-200 animate-pulse rounded mb-1" />
              <div className="h-4 w-40 bg-gray-200 animate-pulse rounded mb-1" />
              <div className="h-3 w-12 bg-gray-200 animate-pulse rounded" />
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}