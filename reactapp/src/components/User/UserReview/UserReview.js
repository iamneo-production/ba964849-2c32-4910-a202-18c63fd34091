import { useState } from "react";
import styles from './UserReview.module.css';
import  Star  from "react-rating-stars-component";



function UserReview() {
  return(
    <div><h2>Ratings and Reviews</h2>
    <div className={styles.container}>
<div><Star classNames={styles.stars}
activeColor="yellow"
size={50}
isHalf={true}
/>
  <textarea
      rows={5}
      cols={50}
        placeholder="Write your experience"
        className={styles.textarea}
      />
    
<div>
<p className="btn btn-dark mt-3"> submit</p><br></br>
<p className="btn btn-dark mt-2"> View Previous Reviews</p>
    </div>
    </div>
    </div>
    </div>
  );
};







export default UserReview