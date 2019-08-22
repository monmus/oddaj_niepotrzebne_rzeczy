import React from 'react';
import '../../scss/about.scss';
import ornament from '../../images/ornament.png';
import people from '../../images/about.png';

const About = () => {
  return (
    <section id="about">
      <div className="about_container">
        <p className="title_paragraph">O nas</p>
        <img src={ornament} alt="" />
        <p className="text_paragraph">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          Aenean dolor turpis, tincidunt vel sollicitudin et,
          ultricies a neque. Duis sed fermentum arcu, at auctor.
        </p>
      </div>
      <img className="people" src={people} alt="" />
    </section>
  )
}

export default About;