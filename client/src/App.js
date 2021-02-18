import { makeStyles } from "@material-ui/core/styles";
import React, { useEffect, useState } from "react";

import Header from "./component/Header";
import MainList from "./component/List";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
}));

function App() {
  const [corns, setCorns] = useState([]);

  //useEffect
  useEffect(() => {
    fetch("api/v1/corns", {
      method: "get",
    })
      .then((res) => {
        return res.json();
      })
      .then(({ status, data }) => {
        if (status === 200) return setCorns(data);
        throw new Error("error", status);
      })
      .catch((err) => console.log(err));
  }, []);

  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Header />
      <MainList list={corns} />
    </div>
  );
}

export default App;
