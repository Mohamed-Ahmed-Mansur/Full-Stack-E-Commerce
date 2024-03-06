import React, { useState } from 'react';
import styled from 'styled-components';
import Swal from 'sweetalert2';

const RoundedShadowBox = styled.div`
  background:#f8f8f8;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  margin-bottom: 20px;
  padding: 20px;
  font-family: 'Spartan', sans-serif;
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
  width: 30px;
  height: 30px;
  padding:20px;
  background-color: #088178;
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 15px;
`;

const MediaBody = styled.div`
  flex: 1;
  font-size: 15px;
`;

const ReviewsMembersHeader = styled.div`
  display: block;
  margin-bottom: 3px;
  
`;


// const Hr = styled.hr`
//   margin: 0 -24px;
// `;

const LeaveCommentBox = styled.div`
  background: #fff;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  margin-bottom: 20px;
  padding: 20px;
  
  font-family: 'Spartan', sans-serif;
`;


const CommentTextArea = styled.textarea`
  width: 100%;
  height: 100px;
  margin-bottom: 15px;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
`;

const SubmitButton = styled.button`
border:none;
border-radius:5px;
background-color: #088178;
color: #fff;
padding: 10px  15px;
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

//old shape
// const Reviews = () => {
//   const getInitials = (firstName, lastName) => {
//     const firstInitial = firstName ? firstName.charAt(0) : '';
//     const lastInitial = lastName ? lastName.charAt(0) : '';
//     return `${firstInitial}${lastInitial}`;
//   };

//   return (
//     <div className='container mt-5'>
//       <RoundedShadowBox>
//         <h5 className="mb-5">All Ratings and Reviews</h5>
//         <ReviewsMembers>
//           <Media>
//             <Avatar>
//               {getInitials('Singh', 'Osahan')}
//             </Avatar>
//             <MediaBody className='ml-auto align-self-center '>
//               <ReviewsMembersHeader>
//                 <h6 className="mb-1  ">
//                   <a className="text-black" href="#">
//                     Singh Osahan
//                   </a>
//                 </h6>
//                 <p className="text-gray " style={{color:"grey" }}>Tue, 20 Mar 2020</p>
//               </ReviewsMembersHeader>
//               <div className="reviews-members-body col-11">
//                 <p>
//                   Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature
//                   from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia,
//                   looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the
//                   word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections
//                 </p>
//               </div>
//             </MediaBody>
//           </Media>
//         </ReviewsMembers>
//         <Hr />
//         {/* ... Repeat the above structure for each review ... */}
//         <a className="text-center w-100 d-block mt-4  font-weight-bold" style={{color:'#088178'}} href="#">
//           See All Reviews
//         </a>
//       </RoundedShadowBox>

//       <LeaveCommentBox>
//         <CommentHeading>Leave Comment</CommentHeading>
//         <p>Rate the product</p>
//         <div>
//           <StarRatingBig>
//             <a href="#">
//               <i className="icofont-ui-rating icofont-2x"></i>
//             </a>
//             {/* ... Repeat the above line for each star ... */}
//           </StarRatingBig>
//         </div>
//         <form>
//           <div>
//             <label>Your Comment</label>
//             <CommentTextArea></CommentTextArea>
//           </div>
//           <div>
//             <SubmitButton type="button" className=" btn-sm">
//               Submit Comment
//             </SubmitButton>
//           </div>
//         </form>
//       </LeaveCommentBox>
//     </div>
//   );
// }

// export default Reviews;


// ... (your styled components)

// const Reviews = ({ productId }) => {
const Reviews = () => {
    const products = [
        {
            proid:1,
          title: 'Cartoon Astronut T-Shirts',
          price: '500',
          brand: 'adidas',
          rating: 1,
          Reviews:[ { id:1,
                        firstName: 'sara',
                        lastName: 'hamed',
                        date:"data",
                        content:"good",
                        rating:1,
                        },
                        { id:2,
                            firstName: 'mariam',
                            lastName: 'ahmed',
                            date:"data",
                            content:"loremjfnfjnfjkndjkdnkjnfjk",
                            rating:2,
                            }]
        },
        {
            proid:2,
          title: 'Cartoon Astronut T-Shirts',
          price: '900',
          brand: 'Nike',
          rating: 2,
          Reviews:[ { id:1,
                    firstName: 'New',
                    lastName: 'User',
                    date:"data",
                    content:"loremjfnfjnfjkndjkdnkjnfjk",
                    rating:1,
                    },
                    { id:2,
                        firstName: 'Newwwwwwwww',
                        lastName: 'User',
                        date:"data",
                        content:"loremjfnfjnfjkndjkdnkjnfjk",
                        rating:2,
                        }]}
    ];

    // Ensure product and its reviews are defined before rendering
    const [rating, setRating] = useState(0); // Initial rating is 0
    const [comment, setcomment] = useState("");
    // const [reviews, setReviews] = useState([]);
    const [submitted, setSubmitted] = useState(false);
    const product = products.find(product => product.proid === 1);
    const [reviews, setReviews] = useState(product ? product.Reviews : []);
    console.log(product);
//     if (!product || !product.Reviews) {
//      return <p>Product not found or has no reviews.</p>;
//    }
    const handleComment = (e) => {
        setcomment(e.target.value);
      };

      const handleSubmit = (e) => {
        e.preventDefault();
        
        // Set submitted to true to render a different UI if needed
        setSubmitted(true);

        Swal.fire({
            title: 'Thank you!',
            text: 'Your comment has been submitted.',
            icon: 'success',
        });
    };   
   
    const handleRating = (selectedRating) => {
        // Set the selected rating
        setRating(selectedRating);
      };
    
    const addReview = () => {
        const currentDate = new Date().toLocaleString(); // Get the current date and time as a string

        const newReview = {
            id: reviews.length + 1,
            firstName: 'New',
            lastName: 'User',
            date: currentDate,
            content: comment,
            rating: rating,
            
    };
    setReviews([...reviews, newReview]);
    
    
  };

  //for avatar letters
  const getInitials = (firstName, lastName) => {
    const firstInitial = firstName ? firstName.charAt(0).toUpperCase() : '';
    const lastInitial = lastName ? lastName.charAt(0).toUpperCase() : '';
    return `${firstInitial}${lastInitial}`;
  };

   
  return (
    <div className='container mt-5'>
        <h5 className="mb-5">All Ratings and Reviews</h5>
        {/* {product.Reviews.map((review) => ( */}
        {reviews.map((review) => (
      <RoundedShadowBox>
         <>
         <ReviewsMembers key={review.id}>
            <Media>
              <Avatar>{getInitials(review.firstName, review.lastName)}</Avatar>
              <MediaBody className='ml-auto align-self-center '>
                <ReviewsMembersHeader>
                  <h6 className="mb-1" style={{ fontWeight:"800"}}>
                    
                      {`${review.firstName} ${review.lastName}    `}
                      <Star style={{ fontSize:'13px' ,fontWeight:"700" ,margin:"5px"}}>★{review.rating}.0</Star>
                  </h6>
                  <p style={{  fontSize:'7px' ,color: "grey" }}>{review.date}</p>
    
                 
                </ReviewsMembersHeader>
                <div className="reviews-members-body col-11">

                  <p>{review.content}</p>
                </div>
              </MediaBody>
            </Media>
          </ReviewsMembers>
          
          </>
        </RoundedShadowBox>
        ))
        }
        
     
        {/* <a className="text-center w-100 d-block mt-4  font-weight-bold" style={{ color: '#088178' }} href="#">
          See All Reviews
        </a> */}

   

{submitted ? (
        <div>
        {/* alret will accure */}
        </div>
      ) : (
        <LeaveCommentBox>
          <p>Rate the product</p>
        <div>
          {/* Star rating */}
          {[1, 2, 3, 4, 5].map((index) => (
            <Star key={index} onClick={() => handleRating(index)}>
              {index <= rating ? '★' : '☆'}
            </Star>
          ))}
        </div>
          <form onSubmit={handleSubmit}>
            <div>
              <label>Your Comment</label>
              <CommentTextArea
              
                onChange={handleComment}
              />
            </div>
            <div>
              <SubmitButton type="sumbit" onClick={addReview} className=" btn-sm">
                Submit Comment
              </SubmitButton>
            </div>
          </form>
        </LeaveCommentBox>
      )}
    </div>
  );
}

export default Reviews;

