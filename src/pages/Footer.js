import React from "react";
import linkedIn from "../assets/images/linkedIn.png";
import github from "../assets/images/githubIcon.png"

export default function Footer() {
    
    return (
        <footer className="footer flex-row justify-center mt-20">
      
        <a href="https://www.linkedin.com/in/camille-hansen-theobald" className="space-between text-light m-1"
                data-mdb-ripple-color="dark" target="_blank"><img src={linkedIn} width="40px" /></a>
        
        <a href="http://github.com/camilleNicoleT"className="space-between text-light m-1" 
                data-mdb-ripple-color="dark" target="_blank"><img src={github} width="40px" /></a>
</footer>
)};