import GitHubIcon from '@material-ui/icons/GitHub'
import LinkedInIcon from '@material-ui/icons/LinkedIn'
import { about } from '../../portfolio'
import BackgroundAnimation from './BackgroundAnimation'
import Tabs from '../Tab/Tabs'
import './About.css'

const About = () => {
  const { name, role, description, resume, social, description1 } = about

  return (
  <div>
    <div className='about center'>
      {name && (
        <h2>
          Hi, I am <span className='about__name'>{name}.</span>
        </h2>
      )}

      {role && <h2 className='about__role'>A {role}.</h2>}
      <p className='about__desc'>{description && description}</p>
      <div className='aboutanimation'>
        <BackgroundAnimation />
      </div>
      <h2 id='about' className='section__title1'>About Me</h2>
      <p className='about__desc'>I’m a Computer Engineering graduate at <a id="atag" href="https://www.mit.asia/" target='_blank' rel="noreferrer">{description1 && description1}</a>. I’m interested in Software development,Full Stack Web Development and Blockchain.<br /><br />I’m quiet confident, naturally curious, and perpetually working on improving my problem in development at a time.I don’t like to define myself  by the work I’ve done. I define myself by the work I want to do. Skills can be taught, personality is inherent. I prefer to keep learning, continue challenging myself, and do interesting things that matter.I’m passionate, expressive, multi-talented spirit with a natural ability to entertain and inspire. I’m never satisfied to just come up with ideas. Instead I have an almost impulsive need to act on them.I’m a fast learner,able to pick up new skills and juggle di"erent projects and roles with relative ease.I work to make a better web; one that is fast, easy to use, beautiful, accessible to all, and frustration-free.</p>
      <div className='about__contact center'>
        {resume && (
          <a href={resume}>
            <span type='button' className='btn btn--outline'>
              Resume
            </span>
          </a>
        )}

        {social && (
          <>
            {social.github && (
              <a
                href={social.github}
                aria-label='github'
                className='link link--icon'
              >
                <GitHubIcon />
              </a>
            )}

            {social.linkedin && (
              <a
                href={social.linkedin}
                aria-label='linkedin'
                className='link link--icon'
              >
                <LinkedInIcon />
              </a>
            )}
          </>
        )}
      </div>
      <h2 id='Education' className='section__title1'>Education and Experience</h2>
        <Tabs />
    </div>
  </div>
  )
}

export default About
