import React from 'react'
import coverImage from "../assets/cover/headshot.jpg";

function Home() {

  return (
    <section className="my-1" >
      <h1 id="home" className='AboutTitle' >Hello! My name is Camille Hansen-Theobald</h1>
      <div className='flex'>
      <img src={coverImage} className="my-2" style={{ width: "45%" }} alt="Camille" />
      <h3 className='about flex mt-10 ml-3' >
        Thank you for taking a peak at my work! I'm a Full Stack web developer leveraging a background in higher education and performing arts to build engaging user experiences. I earned a certificate in full stack development from Columbia's Engineering Coding Boot Camp, with newly developed skills in JavaScript, Node.js, MongoDB, GraphQL and React. 
        Known as an inventive problem solver excited to develop intuitive apps, with a focus on mobile-first design and development. With each project, I hope to attract my audience with a pleasant user experience. I’m excited to use my skills as a valuable team-member, at a company I believe in, to build better experiences.
      </h3>
      </div>
    </section>
  )
}

export default Home