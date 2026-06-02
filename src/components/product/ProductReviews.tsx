export default function ProductReviews({
  reviews,
}: {
  reviews: any[];
}) {
  return (
    <>
      <section className="max-w-[1280px] mx-auto mt-5 border-t border-gray-200 pt-16">

  <div className="flex justify-between items-center mb-16">

    <h2 className="text-[28px] font-bold">
      Reviews:
    </h2>

    <button className="text-[#c87a4c] font-semibold">
      + Leave Feedback
    </button>

  </div>

  {reviews.map((review) => (
    <div
      key={review.id}
      className="flex gap-10 py-10 border-b border-gray-100"
    >
      <img
        src={review.avatar}
        className="w-28 h-28 rounded-full object-cover"
      />

      <div className="flex-1">

        <div className="flex justify-between">

          <div>

            <h3 className="font-bold text-lg mb-4">
              {review.name}
            </h3>

            <div className="text-[#d8a46c] text-lg mb-4">
              ★★★★★
            </div>

          </div>

          <span className="text-gray-400">
            {review.date}
          </span>

        </div>

        <p className="text-gray-600 leading-8 text-[18px]">
          {review.comment}
        </p>

      </div>
    </div>
  ))}
</section>
    </>
  );
}