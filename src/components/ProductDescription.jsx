import * as React from "react";
import Dialog from "@mui/material/Dialog";
import ListItemText from "@mui/material/ListItemText";
import ListItem from "@mui/material/ListItem";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import Slide from "@mui/material/Slide";
import { ImageList, ImageListItem, Typography } from "@material-ui/core";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function ProductDescription(
  { images, title, classes, callback, open },
  ...props
) {
  //   const [open, setOpen] = React.useState(false);

  //   const handleClickOpen = () => {
  //     callback(true);
  //   };

  const handleClose = () => {
    callback(false);
    // setOpen(false);
  };

  return (
    <div>
      {open && (
        <Dialog
          style={{ zIndex: 1000, backgroundColor: "rgba(0,0,0,.6)" }}
          fullScreen
          open={open}
          onClose={handleClose}
          TransitionComponent={Transition}
        >
          <AppBar
            sx={{
              position: "relative",
              backgroundColor: "#848587",
              fontFamily: "Usuzi",
            }}
          >
            <Toolbar>
              <IconButton
                edge="start"
                color="inherit"
                onClick={handleClose}
                aria-label="close"
              >
                <CloseIcon />
              </IconButton>
              <Typography
                sx={{ ml: 2, flex: 1 }}
                style={{ fontFamily: "Usuzi" }}
                variant="h3"
                component="div"
              >
                {title}
              </Typography>
            </Toolbar>
          </AppBar>
          <div className="">
            {console.log("IMAGES=", images)}
            {images && (
              <ImageList cellHeight={220} className="" cols={3}>
                {images.map((tile) => (
                  <ImageListItem key={tile} cols={1}>
                    <img src={tile} alt={tile} />
                  </ImageListItem>
                ))}
              </ImageList>
            )}
          </div>
          {/* <List>
                  <ListItem button>
                    <ListItemText
                      primary="Phone ringtone"
                      secondary="Titania"
                    />
                  </ListItem>
                  <Divider />
                  <ListItem button>
                    <ListItemText
                      primary="Default notification ringtone"
                      secondary="Tethys"
                    />
                  </ListItem>
                </List> */}
          {/* {images.map(())} */}
        </Dialog>
      )}
    </div>
  );
}
