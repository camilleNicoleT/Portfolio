import React from "react";
import linkedIn from "../../assets/images/linkedIn.png";
import github from "../../assets/images/githubIcon.jpeg"

export default function Footer() {
    
    return (
        <section className="footer pt-3 text-center">
      
        <a href="https://www.linkedin.com/in/camille-hansen-theobald" className="btn btn-link btn-floating btn-lg text-light m-1"  role="button"
                data-mdb-ripple-color="dark" target="_blank"><img src={linkedIn} width="50px" /></a>
        
        <a href="http://github.com/camilleNicoleT"className="text-light m-1"  role="button"
                data-mdb-ripple-color="dark" target="_blank"><img src={github} width="50px" /></a>
</section>
)};