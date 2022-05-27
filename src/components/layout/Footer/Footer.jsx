import React from 'react'
import blogger from "../../../images/blogger.png"
import facebook from "../../../images/facebook.png"
import gitHub from "../../../images/github.png"
import gitLab from "../../../images/gitlab.png"
import gmail from "../../../images/gmail.png"
import twiter from "../../../images/gorjeo.png"
import instagram from "../../../images/instagram.png"

export const Footer = () => {
  return (
    <>
      <div className="contact">
            <img src={gmail} alt="" />
            <h2>@juaanmarin2007@gmail.com</h2>
        </div>
        <div className="icons">
            <img src={blogger} alt="" />
            <img src={facebook} alt="" />
            <img src={gitHub} alt="" />
            <img src={gitLab} alt="" />
            <img src={twiter} alt="" />
            <img src={instagram} alt="" />
        </div>
    </>
         
  )
}
