import React from "react";
import {
  Avatar,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Typography,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import PropTypes from "prop-types";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    maxWidth: "36ch",
    backgroundColor: theme.palette.background.paper,
  },
  inline: {
    display: "inline",
  },
}));

function Item({ item }) {
  const { nickname , avatar } = item;
  console.log(nickname);
  const classes = useStyles();
  return (
    <List className={classes.root}>
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt="my avatar" src={avatar} />
        </ListItemAvatar>
        <ListItemText
          primary={nickname}
          // secondary={
          //   <>
          //     <Typography component="span" className={classes.inline}>
          //       {post}
          //     </Typography>
          //   </>
          // }
        />
      </ListItem>
    </List>
  );
}

Item.propTypes = {
  item: PropTypes.shape({
    title: PropTypes.string.isRequired,
    post: PropTypes.string.isRequired,
  }),
};

Item.defaultProps = {
  item: {
    title: "title",
    post: "post",
  },
};

export default Item;
