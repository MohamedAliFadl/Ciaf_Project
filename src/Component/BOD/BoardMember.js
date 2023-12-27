import React, { Fragment } from "react";
import BMSection1 from "./BMSection1(Chairman)";
import BMSection2 from "./BMSection2(BoardMembers)";
import BMHeader from "./BMHeader";
import "./BoardMember.css";

function BoardMember() {
  return (
    <Fragment>
      <BMHeader />
      <BMSection1 />
      <BMSection2 />
    </Fragment>
  );
}

export default BoardMember;
