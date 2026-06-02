export default function Loading() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-white">
      <div className="flex flex-col items-center">
        {/* Spinner */}
        <div className="w-12 h-12 border-4 border-[#c17f4a] border-t-transparent rounded-full animate-spin"></div>
        <p className="mt-4 text-[#c17f4a] font-medium animate-pulse">
          Loading...
        </p>
      </div>
    </div>
  );
}
