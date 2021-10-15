import React from "react";
import { withTranslation } from "react-i18next";
class Reviews extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      rev: 0,
    };
  }
  render() {
    const { reviews, t } = this.props;
    console.log(reviews);
    const isMobile = () => {
      if (
        /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
          navigator.userAgent
        )
      ) {
        return true;
      } else {
        return false;
      }
    };
    return (
      <div
        style={{
          color: "white",
          flexDirection: "column",
          display: "flex",
          textAlign: "center",
          // width: "90vw",
        }}
      >
        <h1 style={isMobile ? { fontSize: 16 } : null}>{reviews.reviewer}</h1>
        <h2 style={isMobile ? { fontSize: 14 } : null}>{reviews.review}</h2>
        {reviews.link ? (
          <h3 style={isMobile ? { fontSize: 12 } : null}>
            {t("See More :")} <br />
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
export default withTranslation()(Reviews);
