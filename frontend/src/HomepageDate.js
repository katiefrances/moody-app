import React from "react";
import Moment from "react-moment";

const dateToFormat = "1976-04-19T12:59-0500";

export default class HomepageDate extends React.Component {
  render() {
    return <Moment>{dateToFormat}</Moment>;
  }
}
