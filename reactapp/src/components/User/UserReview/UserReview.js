import styles from './UserReview.module.css';

function UserReview(props) {

  const review = props.review;

  console.log('review',review);
  return(
    <div className={styles.container}>
      <div className={styles.header}>
        <h5>{review.user.name}</h5>
        <p>{`Date Created: ${review.dateCreated}`}</p>
      </div>
      <div className={styles.body}>
        <p>
          {review.reviewContent}
        </p>
      </div>
    </div>
  )
};

export default UserReview