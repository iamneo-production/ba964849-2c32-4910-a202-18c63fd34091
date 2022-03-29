package com.examly.springapp.service;

import com.examly.springapp.model.Review;

public interface ReviewService {

    public Review addReview(Review review);

    public Review deleteReview(long id);

    public Review editReview(Review review, long id);
}
