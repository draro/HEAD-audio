import React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import withStyles from "@material-ui/core/styles/withStyles";
import { withTranslation } from "react-i18next";
class NewsDescription extends React.Component {
  render() {
    const { title, description, link, image, t } = this.props;
    return (
      <Card
        sx={{
          //   order: 4,
          //   flexDirection: "reversed",
          flex: "3 1 25%",
          margin: 5,
          //   maxWidth: "0%",
          maxHeight: "1000px",
          //   textOverflow: "ellipsis",
          boxShadow: "5px 5px rgba(0,0,0,.4)",
          textAlign: "center",
          //   overflow: "hidden",
          //   whiteSpace: "nowrap",

          //   maxWidth: "30%",
        }}
        // style={{ margin: 10, boxShadow: "5px 5px rgba(0,0,0,.4)" }}
        id="description"
      >
        <CardContent style={{ maxHeight: 300 }}>
          <Typography gutterBottom variant="h5" component="div">
            {title}
          </Typography>
          <Typography variant="body2" color="text.secondary" id="description">
            {description}
          </Typography>
        </CardContent>
        <CardMedia
          component="img"
          height="400px"
          style={{ objectFit: "fill" }}
          image={image}
          alt={title}
        />

        {link && (
          <CardActions>
            {/* <Button size="small">Share</Button> */}
            <a
              style={{
                textDecoration: "none",
                fontSize: "1rem",
                color: "blue",
              }}
              href={
                !link.startsWith("http") && link.startsWith("www")
                  ? "https://" + link
                  : link
              }
              target="_blank"
              rel="noreferrer"
            >
              {t("View more").toUpperCase()}
            </a>
          </CardActions>
        )}
      </Card>
    );
  }
}
export default withTranslation()(withStyles()(NewsDescription));
