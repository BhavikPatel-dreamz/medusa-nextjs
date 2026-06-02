export function NewArrivalsSkeleton() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="h-10 w-64 bg-gray-200 mx-auto mb-4 animate-pulse rounded"></div>
          <div className="h-4 w-full max-w-2xl bg-gray-100 mx-auto animate-pulse rounded mb-2"></div>
          <div className="h-4 w-3/4 max-w-xl bg-gray-100 mx-auto animate-pulse rounded"></div>
        </div>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-x-6 gap-y-12">
          {[...Array(4)].map((_, i) => (
            <div key={i} className="animate-pulse">
              <div className="aspect-square bg-gray-200 mb-4 rounded"></div>
              <div className="h-4 w-20 bg-gray-200 mb-2 rounded"></div>
              <div className="h-5 w-40 bg-gray-200 mb-2 rounded"></div>
              <div className="h-4 w-24 bg-gray-200 rounded"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function ShopSkeleton() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 animate-pulse">
      <div className="flex flex-col lg:flex-row gap-12">
        {/* Sidebar Skeleton */}
        <aside className="lg:w-1/4 space-y-8">
          {[...Array(3)].map((_, i) => (
            <div key={i}>
              <div className="h-6 w-32 bg-gray-200 mb-4 rounded"></div>
              <div className="space-y-2">
                {[...Array(5)].map((_, j) => (
                  <div key={j} className="h-4 w-full bg-gray-100 rounded"></div>
                ))}
              </div>
            </div>
          ))}
        </aside>
        {/* Grid Skeleton */}
        <main className="lg:w-3/4">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {[...Array(6)].map((_, i) => (
              <div key={i}>
                <div className="aspect-[4/5] bg-gray-200 mb-4 rounded"></div>
                <div className="h-5 w-48 bg-gray-200 mb-2 rounded"></div>
                <div className="h-4 w-32 bg-gray-100 rounded"></div>
              </div>
            ))}
          </div>
        </main>
      </div>
    </div>
  );
}
