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
  const { nickname, avatar, owner } = item;
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
          secondary={
            <>
              <Typography component="span" className={classes.inline}>
                Owner: {owner}
              </Typography>
            </>
          }
        />
      </ListItem>
    </List>
  );
}

Item.propTypes = {
  item: PropTypes.shape({
    nickname: PropTypes.string.isRequired,
    avatar: PropTypes.string.isRequired,
    owner: PropTypes.string.isRequired,
  }),
};

Item.defaultProps = {
  item: {
    nickname: "title",
    avatar:
      "https://www.quirkbooks.com/sites/default/files/styles/blog_detail_featured_image/public/editor_uploads/original/unicorn.jpg?itok=qas6sjwq",
    owner: "avatar",
  },
};

export default Item;
