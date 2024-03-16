export interface ReviewType {
  id: number;
  userName: string;
  userId: number;
  productId: number;
  rating: number;
  comment: string;
  likes: number;
  dislikes: number;
}

import { useState } from "react";
import demoReviews from "./../data/demoReviews";

const useReviews = () => {
  const [reviews, setReviews] = useState<ReviewType[]>(demoReviews);

  return { reviews, setReviews };
};

export default useReviews;
