import axios from "axios";
import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Swal from "sweetalert2";
import Cookies from "universal-cookie";
import { jwtDecode } from "jwt-decode";
import { toast } from "react-toastify";

const RoundedShadowBox = styled.div`
  background: #f8f8f8;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  margin-bottom: 20px;
  padding: 20px;
  font-family: "Spartan", sans-serif;
`;

const ReviewsMembers = styled.div`
  margin-top: 20px;
  margin-bottom: 20px;
`;

const Media = styled.div`
  display: flex;
`;

const Avatar = styled.div`
  border-radius: 50%;
  margin-right: 15px;
  width: 48px;
  height: 48px;
  padding: 10px;
  background-color: #088178;
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 22px;
`;

const MediaBody = styled.div`
  flex: 1;
  font-size: 20px;
`;

const ReviewsMembersHeader = styled.div`
  display: block;
  margin-bottom: 3px;
`;

const LeaveCommentBox = styled.div`
  background: #fff;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  margin-bottom: 20px;
  padding: 20px;
  font-size: 20px;
  font-weight: 600;
  font-family: "Spartan", sans-serif;
`;

const CommentTextArea = styled.textarea`
  width: 100%;
  height: 100px;
  margin-bottom: 15px;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  font-size: 20px;
`;

const SubmitButton = styled.button`
  border: none;
  border-radius: 5px;
  background-color: #088178;
  color: #fff;
  padding: 10px 15px;
  margin-top: 10px;
  margin-bottom: 15px;
  cursor: pointer;
  &:hover {
    opacity: 0.8;
  }
`;

const Star = styled.span`
  font-size: 18px;
  color: #fdba3b;
  cursor: pointer;
  margin-right: 5px;

  &:hover {
    color: #ffcc00;
  }
`;

const Reviews = ({ ProDetails }) => {
  const cookies = new Cookies();
  const JWT = cookies.get("x-auth-token");
  // console.log(JWT);
  // console.log(jwtDecode(JWT));
  if (JWT) {
    var { user } = jwtDecode(JWT);
  }

  // Ensure ProDetails and its reviews are defined before rendering
  const [rating, setRating] = useState(0); // Initial rating is 0
  const [comment, setcomment] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [reviews, setReviews] = useState([]);

  //for first load
  useEffect(() => {
    setReviews(ProDetails.comments || []);
  }, [ProDetails]);

  useEffect(() => {
    // Update reviews whenever ProDetails changes
    if (ProDetails && ProDetails.comments) {
      setReviews(ProDetails.comments);
    }
  }, [ProDetails]);

  const handleComment = (e) => {
    setcomment(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Set submitted to true to render a different UI if needed
    if (JWT) {
      setSubmitted(true);
      Swal.fire({
        title: "Thank you!",
        text: "Your comment has been submitted.",
        icon: "success",
      });
    }
  };

  const handleRating = (selectedRating) => {
    // Set the selected rating
    setRating(selectedRating);
  };

  const addReview = () => {
    if (JWT) {
      const newReview = {
        ratings: rating,
        userName: user.name,
        Comment: comment,
        userEmail: user.email,
        userID: user.userID,
      };
      setReviews([...reviews, newReview]);
    } else {
      toast.warning("Please Log in First!");
    }
  };

  //for avatar letters
  const getInitials = (name) => {
    const firstInitial = name ? name.charAt(0).toUpperCase() : "";
    return `${firstInitial}`;
  };

  useEffect(() => {
    // console.log('Updated Reviews:', reviews);
    // console.log({comments: reviews })
    if (JWT) {
      const header = {
        headers: {
          "x-auth-token": JWT,
        },
      };
      axios
        .patch(
          `http://localhost:3001/products/${ProDetails.id}`,
          { comments: reviews },
          header
        )
        .then((response) => {
          console.log(response.data);
        })
        .catch((error) => {
          // console.error('Error updating comments:', error);
          if (error.response) {
            // The request was made and the server responded with a status code
            // console.error('Response data:', error.response.data);
            // console.error('Response status:', error.response.status);
            // console.error('Response headers:', error.response.headers);
          } else if (error.request) {
            // The request was made but no response was received
            // console.error('No response received. Request details:', error.request);
          } else {
            // Something happened in setting up the request that triggered an Error
            // console.error('Error setting up the request. Error details:', error.message);
          }
        });
    }
  }, [reviews, JWT, ProDetails.id]);

  return (
    <div className="container mt-5">
      <h5 className="mb-5 fs-4">All Ratings and Reviews</h5>

      {reviews.length === 0 ? (
        <p>No comments yet.</p>
      ) : (
        reviews.map((review) => (
          <RoundedShadowBox key={review.userID}>
            <>
              <ReviewsMembers key={review.userID}>
                <Media>
                  <Avatar>{getInitials(review.userName)}</Avatar>
                  <MediaBody className="ml-auto align-self-center ">
                    <ReviewsMembersHeader>
                      <h6 className="mb-1 fs-5" style={{ fontWeight: "800" }}>
                        {`${review.userName}`}
                        <Star
                          style={{
                            fontSize: "13px",
                            fontWeight: "700",
                            margin: "5px",
                          }}
                        >
                          ★{review.ratings}.0
                        </Star>
                      </h6>
                    </ReviewsMembersHeader>
                    <div className="reviews-members-body col-11">
                      <p>{review.Comment}</p>
                    </div>
                  </MediaBody>
                </Media>
              </ReviewsMembers>
            </>
          </RoundedShadowBox>
        ))
      )}

      {submitted ? (
        <div>{/* alret will accure */}</div>
      ) : (
        <LeaveCommentBox>
          <p>Rate the ProDetails</p>
          <div>
            {/* Star rating */}
            {[1, 2, 3, 4, 5].map((index) => (
              <Star key={index} onClick={() => handleRating(index)}>
                {index <= rating ? "★" : "☆"}
              </Star>
            ))}
          </div>
          <form onSubmit={handleSubmit}>
            <div>
              <label>Your Comment</label>
              <CommentTextArea onChange={handleComment} />
            </div>
            <div>
              <SubmitButton
                type="sumbit"
                onClick={addReview}
                className=" btn-sm"
              >
                Submit Comment
              </SubmitButton>
            </div>
          </form>
        </LeaveCommentBox>
      )}
    </div>
  );
};

export default Reviews;
