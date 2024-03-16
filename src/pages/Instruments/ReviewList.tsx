import { ReviewType  } from "../../hooks/useReviews";

import Review from "./Review";

const ReviewList = ({ reviews }: { reviews: ReviewType[] }) => {
  return (
    <div className="review-list">
      {reviews.map((review) => (
        <Review key={review.id} review={review} />
      ))}
    </div>
  );
};

export default ReviewList;
