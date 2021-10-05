import PropTypes from 'prop-types';
const Reviews = ({ reviews }) => {
  return (
    <ul>
      {reviews.map(review => (
        <li key={review.id}>
          <h3>Author: {review.author}</h3>
          <p>{review.content}</p>
        </li>
      ))}
    </ul>
  );
};

Reviews.propTypes = {
  onSubmit: PropTypes.object,
};
export default Reviews;
