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

import Item from "./Item";

const useStyles = makeStyles((theme) => ({
  root: {
    margin: "10ch auto",
  },
}));

function MainList({ list }) {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      {list.length &&
        list.map((item) => (
          <div
            key={item.id}
            style={{ display: "flex", justifyContent: "center" }}
          >
            <Item item={item} />
          </div>
        ))}
    </div>
  );
}

export default MainList;
