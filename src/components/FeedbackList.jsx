import React from "react";
import FeedbackIiem from "./Feedbackitem";

function FeedbackList({ feedback }) {
  if (!feedback || feedback.length === 0) {
    return <p>No Feedback Yet</p>;
  }
  return (
    <div className="feedback-list">
      {feedback.map((item) => (
        <FeedbackIiem key={item.id} item={item} />
      ))}
    </div>
  );
}

export default FeedbackList;
