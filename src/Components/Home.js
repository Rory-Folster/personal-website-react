import React, { useEffect } from 'react'
import '../App.css';
import Contact from './Contact';
import AOS from 'aos';
import 'aos/dist/aos.css';

function Home() {

  useEffect(() => {
    AOS.init({duration: 1250});
  })

  return (
    <div className='home-body'>
    <section data-aos="fade-up">
        <h1 className='home-h1'><u>About Me</u></h1>
        <p >I am a 23 year old Software Development Student from New Zealand.</p>
        <p>I am currently in my final full semester,  my Bachelors of I.T, with a major in Software Development.</p>
        <p>I am very passionate about software development and web developement, and I am looking forward to increasing my skills to a business level.</p>
        <p className='bottom-p'>Please see the 'Contact Me' section to leave me some feedback!</p>
    </section>
    <section data-aos="fade-up">
      <h1 className='home-h1'><u>About this page</u></h1>
      <p>This website was created from scratch, using <u>MongoDB</u>, <u>Express</u>, <u>React</u> and <u>Node.js</u></p>
      <p>The 'projects' section of this website, is pulling data from my MongoDB database and creating a button for each entry</p>
      <p>I then use React's 'useParams' function to fetch more information about the individual entry.</p>
    </section>
    {/* <section>
      <h1 className='home-h1'><u>Goals Of Mine</u></h1>
    </section> */}
    <section data-aos="fade-right">
      <h1 className='home-h1'><u>Programming Languages I Am Focused On</u></h1>
      <div className='learning-program-img'>
        <figure className='learning-program-img-img'>
          <img className='learning-program-img' alt='python-img' src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" />
          <figcaption>Python</figcaption>
        </figure>
        <figure className='learning-program-img-img'>
          <img className='learning-program-img' alt='react-img' src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" />
          <figcaption>React</figcaption>
        </figure>
        <figure className='learning-program-img-img'>
          <img className='learning-program-img' alt='msql-img' src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" />
          <figcaption>MySQL</figcaption>
        </figure>
        <figure className='learning-program-img-img'>
          <img className='learning-program-img' alt='next.js-img' src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-line.svg" />
          <figcaption>Next.js</figcaption>
        </figure>
      </div>
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