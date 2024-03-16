import { useState } from "react";
import { ReviewType } from "../../hooks/useReviews";
import { FaStar, FaThumbsUp, FaThumbsDown } from "react-icons/fa";

const Review = ({ review }: { review: ReviewType }) => {
  const [liked, setLiked] = useState(false);
  const [disliked, setDisliked] = useState(false);

  const handleLike = () => {
    if (!liked) {
      console.log("Liked review:", review.id);
      setLiked(true);
    }
  };

  const handleDislike = () => {
    if (!disliked) {
      console.log("Disliked review:", review.id);
      setDisliked(true);
    }
  };

  // Function to render star rating based on review rating
  const renderStarRating = (rating: number) => {
    const stars = [];
    for (let i = 0; i < 5; i++) {
      if (i < rating) {
        stars.push(<FaStar key={i} className="text-yellow-400" />);
      } else {
        stars.push(<FaStar key={i} className="text-gray-400" />);
      }
    }
    return stars;
  };

  function generateProfileIcon(name: string) {
    // Preset colors for background
    const colors = [
      "#FFC0CB", // Pink
      "#ADD8E6", // Light Blue
      "#FFA07A", // Light Salmon
      "#98FB98", // Pale Green
      "#FFD700", // Gold
      "#87CEEB", // Sky Blue
      "#FF6347", // Tomato
      "#20B2AA", // Light Sea Green
      "#FF69B4", // Hot Pink
      "#6495ED", // Cornflower Blue
    ];

    const firstLetter = name.charAt(0).toUpperCase();
    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    return (
      <div
        className="flex items-center justify-center rounded-full w-8 h-8 text-white"
        style={{ backgroundColor: randomColor }}
      >
        <span className="text-2xl">{firstLetter}</span>
      </div>
    );
  }

  return (
    <div className="bg-gray-900 p-4 rounded-lg shadow-md mb-4">
      <div className="text-gray-200">
        <div className="flex items-center my-2 justify-between">
          <div className="text-white flex items-center gap-1">
            {generateProfileIcon(review.userName)}
            <span className="mt-1"> {review.userName}</span>
          </div>{" "}
          <p className="flex gap-1">{renderStarRating(review.rating)}</p>
        </div>
        <p>{review.comment}</p>
      </div>
      <div className="mt-4 flex">
        <button
          onClick={handleLike}
          //   disabled={liked}
          className={`flex items-center text-gray-200 ${
            liked ? "opacity-50 cursor-not-allowed" : "hover:text-green-500"
          }`}
        >
          <FaThumbsUp className="mr-1" />({review.likes})
        </button>
        <button
          onClick={handleDislike}
          //   disabled={disliked}
          className={`flex items-center ml-4 text-gray-200 ${
            disliked ? "opacity-50 cursor-not-allowed" : "hover:text-red-500"
          }`}
        >
          <FaThumbsDown className="mr-1" />({review.dislikes})
        </button>
      </div>
    </div>
  );
};

export default Review;
