import React, { Fragment } from 'react'
import Hesham from "../../images/BOD Members/Hesham Hallouda.jpg";
import MohamedMohei from "../../images/BOD Members/Mohamed Mohei El-din.jpg";
import Yehia from "../../images/BOD Members/Yehia Esmail.jpg";
import logo from '../../images/BOD Members/CIAf_Logo2.png'
import Mahmoud from "../../images/BOD Members/Mahmoud El-Sakka.jpg";
import BoardMemberItem from "./BoardMemberItem";

function BMSection2() {
  return (
    <Fragment>
    <section id="team" class="pb-5">
    <div class="container">
      <h5 class="section-title h1">
        Our <span style={{ color: "#a4c639" }}>Board Members</span>
      </h5>
      <div class="row">
        <BoardMemberItem name="Mr. Mahmoud El-Sakka" img={Mahmoud} title="Board Member" backname="Mr. Mahmoud El-Sakka" backdesc="independent Board Member at ciaf Holding"/>
        <BoardMemberItem name="Eng. Yahia Zakaria Ismail" img={Yehia} title="Board Member" backname="Eng. Yahia Zakaria Ismail" backdesc="EgyptAir Holding Company"/>
        <BoardMemberItem name="Mr. Hesham Hallouda" img={Hesham} title="Board Member" backname="Mr. Hesham Hallouda" backdesc="independent Board Member at ciaf Holding"/>
        <BoardMemberItem name="Mr. Mohamed Mohie El-Din Taher" img={MohamedMohei} title="Board Member" backname="Mr. Mohamed Mohei El-Din" backdesc="Independent Board Member at ciaf Holding"/>
        <BoardMemberItem name="Mr. Rady Mostafa Rady" img={logo} title="Board Member" backname="Rady" backdesc="Support & Development Civil Aviation Fund(SADCAF)"/>
        <BoardMemberItem name="Ms. Mona El Baiar" img={logo} title="Board Member" backname="Miss. Mona El-Byaar" backdesc="Egyptian Holding Company for Airports and Air Navigation"/>
      </div>
    </div>
  </section>
    </Fragment>
  )
}

export default BMSection2
