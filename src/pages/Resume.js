import React from "react";
import resume from '../assets/UpdatedResume_CamilleHansenTheobald.pdf';

export default function Resume() {
  
    return (
      <section id="resume" className="body-font justify-center resume">
      <a href={resume} download={resume} className="justify-center"> <h1>Click Here to Download</h1></a>
  </section>
)};
