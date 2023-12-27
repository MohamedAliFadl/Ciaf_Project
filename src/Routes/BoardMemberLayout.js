import React, { Fragment } from "react";
import {Navbar, BoardMember, Footer } from "../Component/Index_Imports";


const BoardMemberLayout = () => {
  return (
    <Fragment>
      <Navbar />
      <BoardMember />
      <Footer />
    </Fragment>
  );
};

export default BoardMemberLayout;
