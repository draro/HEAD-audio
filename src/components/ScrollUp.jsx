import React from "react";
// import ArrowCircleUpRounded from '@mui/icons-material/ArrowCircleUp';
import { Button } from "@mui/material";
import { ArrowCircleUpRounded } from "@mui/icons-material";
import { useState } from "react";

const BackToTop = () => {
  const [visible, setVisible] = useState(false);

  const toggleVisible = () => {
    const scrolled = document.documentElement.scrollTop;
    if (scrolled > 300) {
      setVisible(true);
    } else if (scrolled <= 300) {
      setVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
      /* you can also use 'auto' behaviour
             in place of 'smooth' */
    });
  };

  window.addEventListener("scroll", toggleVisible);
  return (
    <Button
      id="backToTop"
      aria-label="up"
      onClick={scrollToTop}
      style={{ display: visible ? "inline" : "none" }}
      size="large"
    >
      <ArrowCircleUpRounded sx={{ fontSize: 60 }}></ArrowCircleUpRounded>
    </Button>
  );
};
export default BackToTop;
