import React, { useEffect } from 'react'
import '../App.css';
import Contact from './Contact';
import AOS from 'aos';
import 'aos/dist/aos.css';

function Home() {

  useEffect(() => {
    AOS.init({duration: 1100});
  })

  return (
    <div className='home-body'>
    <section data-aos="fade-up">
        <h1 className='home-h1'><u>About Me</u></h1>
        <p >I am a 23 year old Software Development Student from New Zealand.</p>
        <p>I am currently in my final full semester, of my Bachelors of I.T, with a major in Software Development at <a href='https://www.nmit.ac.nz/' target="_blank" rel="noreferrer">Nelson Marlborough Institute of Technology.</a></p>
        <p>Once I have completed 2022's classes, I will have 2 classes remaining; Software Development 702, and my final project class.</p>
        <p>My plan for 2023 is to explore employment in software development or web developement, and complete the remaining classes for my Bachelors degree.</p>
        <p className='bottom-p'>Please see the 'Contact Me' section to leave me some feedback!</p>
    </section>
    <section data-aos="fade-up">
      <h1 className='home-h1'><u>Why did I choose to learn coding?</u></h1>
      <p>I really started to get passionate about Software Developement after completing a Certification in Automotive Engineering and finding out it wasn't what I wanted to do for a living.</p>
      <p>I have always had a computer, and been interested by Software, particularly Gaming and how everything works behind the scenes.</p>
      <p>After building my first gaming computer and realising that computers aren't as complex and scary as I first thought, I started looking at other areas of computing that I haven't really thought about much.</p>
      <p>Thus, leading me to start learning about surface level coding, such as HTML and CSS. I found these languages very fun and creating websites was satisfying to me, but I wanted to learn more.</p>
      <p>Ultimately, I decided to take advantage of the Institute in my town and start my journey on obtaining a Bachelors Degree in Software Developement.</p>
    </section>
    {/* <section>
      <h1 className='home-h1'><u>Goals Of Mine</u></h1>
    </section> */}
    <section data-aos="fade-right">
      <h1 className='home-h1'><u>Programming Languages I Am Focused On</u></h1>
      <div className='learning-program-img'>
        <figure className='learning-program-img-img' data-aos="fade-right">
          <img className='learning-program-img' alt='python-img' src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" />
          <figcaption>Python</figcaption>
        </figure>
        <figure className='learning-program-img-img' data-aos="fade-right">
          <img className='learning-program-img' alt='react-img' src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" />
          <figcaption>React</figcaption>
        </figure>
        <figure className='learning-program-img-img' data-aos="fade-right">
          <img className='learning-program-img' alt='msql-img' src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" />
          <figcaption>MySQL</figcaption>
        </figure>
        <figure className='learning-program-img-img' data-aos="fade-right">
          <img className='learning-program-img' alt='next.js-img' src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-line.svg" />
          <figcaption>Next.js</figcaption>
        </figure>
      </div>
    </section>
    <section className='learning-program-img'>
    <h1 className='home-h1' data-aos="fade-right"><u>What I Know</u></h1>
    <h2 data-aos="fade-right"><u>Web</u></h2>
    <figure className='learning-program-img-img' data-aos="fade-right">
      <img className='learning-program-img' alt="html-img" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg"/>
      <figcaption>HTML5</figcaption>
    </figure>
    <figure className='learning-program-img-img' data-aos="fade-right">
      <img className='learning-program-img' alt="css" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" />
      <figcaption>CSS3</figcaption>
    </figure>
    <figure className='learning-program-img-img' data-aos="fade-right">
      <img className='learning-program-img' alt="js" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" />
      <figcaption>JavaScript</figcaption>
    </figure>
    <figure className='learning-program-img-img' data-aos="fade-right">
      <img className='learning-program-img' alt="react" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg"/>
      <figcaption>React</figcaption>
    </figure>
    <h2 data-aos="fade-right"><u>Software</u></h2>
    <figure className='learning-program-img-img' data-aos="fade-right">
      <img className='learning-program-img' alt="c#" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/csharp/csharp-original.svg"/>
      <figcaption>C#</figcaption>
    </figure>
    <figure className='learning-program-img-img' data-aos="fade-right">
      <img className='learning-program-img' alt="python" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg"/>
      <figcaption>Python</figcaption>
    </figure>
    <h2 data-aos="fade-right"><u>Database</u></h2>
    <figure className='learning-program-img-img' data-aos="fade-right">
      <img className='learning-program-img' alt="git" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" />
      <figcaption>Git</figcaption>
    </figure>
    <figure className='learning-program-img-img' data-aos="fade-right">
      <img className='learning-program-img' alt="node"src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original-wordmark.svg" />
      <figcaption>Node.js</figcaption>
    </figure>
    <figure className='learning-program-img-img' data-aos="fade-right">
      <img className='learning-program-img' alt="mongo" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" />
      <figcaption>MongoDB</figcaption>
    </figure>
    <figure className='learning-program-img-img' data-aos="fade-right">
      <img className='learning-program-img' alt="mysql" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" />
      <figcaption>MySQL</figcaption>
    </figure>
    <figure className='learning-program-img-img' data-aos="fade-right">
      <img className='learning-program-img' alt="sqlserver" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/microsoftsqlserver/microsoftsqlserver-plain.svg" />
      <figcaption> SQL Server</figcaption>
    </figure>
    </section>
    <section data-aos="fade-right">
      <h1 className='home-h1'><u>Contact Me</u></h1>
      <h2>If you would like to get in touch, or would like to leave some feedback.</h2>
      <h3>Please enter your details below.</h3>
      <Contact />
    </section>
    <section className='media-section' data-aos="fade-right">
      <h1 className='home-h1'><u>Social Media</u></h1>
      <div className='home-social-media-btns'>
        <a href="https://www.facebook.com/roryfolster/" target="_blank" rel="noreferrer"><input type="image" src="https://img.icons8.com/ios-glyphs/344/facebook-new.png" alt='facebook-img'/></a>
        <a href="https://twitter.com/rorukzz" target="_blank" rel="noreferrer"><input type="image" src="https://img.icons8.com/ios-glyphs/344/twitter--v1.png" alt='twitter-img'/></a>
        <a href="https://github.com/Rory-Folster?tab=repositories" target="_blank" rel="noreferrer"><input type="image" src="https://img.icons8.com/ios-glyphs/344/github.png" alt='github-img'/></a>
        <a href="https://www.linkedin.com/in/rory-folster-3904991b3/" target="_blank" rel="noreferrer"><input type="image" src="https://img.icons8.com/ios-glyphs/344/linkedin.png" alt='linkedin-img'/></a>
      </div>
    </section>
    </div>
  )
}

export default Home