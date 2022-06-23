import React from 'react'
import coverImage from "../assets/cover/headshot.jpg";

function About() {

  return (
    <section className="my-5" >
      <h1 id="about">Camille Hansen-Theobald</h1>
      <img src={coverImage} className="my-2" style={{ width: "50%" }} alt="Camille" />
      <div className="my-2">
        <p>
         I'm a Full Stack web developer leveraging a background in higher education and performing arts to build engaging user experiences. I earned a certificate in full stack development from Columbia University, with newly developed skills in JavaScript, Node.js, MongoDB, GraphQL and React. Known as an inventive problem solver excited to develop intuitive apps, with a focus on mobile-first design and development. With each project, I hope to attract my audience with a pleasant user experience. I’m excited to use my skills as a valuable team-member, at a company I believe in, to build better experiences.
      </p>
      </div>
    </section>
  )
}

export default About