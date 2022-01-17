import uniqid from 'uniqid'
import { Programming,frameworks,Databases,Others } from '../../portfolio'
import './Skills.css'

const Skills = () => {
  if (!Programming.length) return null
  if (!frameworks.length) return null
  if (!Others.length) return null
  if (!Databases.length) return null

  return (
    <section className='section skills' id='skills'>
      <h2 id="skills" className='section__title'>Skills</h2>
      <h2 className='section__title2'>languages</h2>
      <ul className='skills__list'>
        {Programming.map((Programming) => (
          <li key={uniqid()} className='skills__list-item btn btn--plain'>
            {Programming}
          </li>
        ))}
      </ul>

      <h2 className='section__title2'>frameworks and Libraries</h2>
      <ul className='skills__list'>
        {frameworks.map((frameworks) => (
          <li key={uniqid()} className='skills__list-item btn btn--plain'>
            {frameworks}
          </li>
        ))}
      </ul>

      <h2 className='section__title2'>Databases</h2>
      <ul className='skills__list'>
        {Databases.map((Databases) => (
          <li key={uniqid()} className='skills__list-item btn btn--plain'>
            {Databases}
          </li>
        ))}
      </ul>

      <h2 className='section__title2'>Others</h2>
      <ul className='skills__list'>
        {Others.map((Others) => (
          <li key={uniqid()} className='skills__list-item btn btn--plain'>
            {Others}
          </li>
        ))}
      </ul>
    </section>
  )
}

export default Skills
