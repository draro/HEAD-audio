import React from "react";

class Reviews extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      rev: 0,
    };
  }
  render() {
    const { reviews } = this.props;
    console.log(reviews);
    return (
      <div
        style={{
          color: "white",
          flexDirection: "column",
          display: "flex",
          textAlign: "center",
          width: "90vw",
        }}
      >
        <h1>{reviews.reviewer}</h1>
        <h2>{reviews.review}</h2>
        {reviews.link ? (
          <h3>
            <a
              href={reviews.link}
              style={{ color: "white", textDecoration: "underline" }}
              rel="noreferrer"
              target="_blank"
            >
              {reviews.link}
            </a>
          </h3>
        ) : null}
      </div>
    );
  }
}
export default Reviews;
