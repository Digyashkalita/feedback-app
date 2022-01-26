import Card from "../shared/Card";
import PropTypes from "prop-types";

function FeedbackIiem({ item }) {
  return (
    <Card reverse={true}>
      <div className="num-display">{item.rating}</div>
      <div className="text-display">{item.text}</div>
    </Card>
  );
}

Card.defaultProps = {
  reverse: false,
};

Card.protoTypes = {
  children: PropTypes.node.isrequired,
  reverse: PropTypes.bool,
};
export default FeedbackIiem;
