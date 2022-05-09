import React from "react";
import { Document } from 'react-pdf';
import resume from '../../assets/resume.pdf'



export default function Resume() {
  
    return (
      <section id="resume" className="body-font">
      <a href={resume} download={resume} > Click Here to Download</a>
  </section>
)};
