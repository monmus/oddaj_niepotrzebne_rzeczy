import React from 'react';
import '../../scss/foursteps.scss';
import ornament from '../../images/ornament.png';
import select from '../../images/select1.jpg';
import pack from '../../images/pack.png';
import whoHelps from '../../images/whoHelps.png';
import orderCourier from '../../images/orderCourier.png';

const FourSteps = () => {
  return (
    <section id="four_steps">
      <div className="four_steps_container">
        <p>Wystarczą 4 proste kroki</p>
        <img src={ornament} alt="" />
        <div className="photo-container">
          <div className="photo">
          <img src={select} alt="" />
            <p>Wybierz rzeczy</p>
            <hr></hr>
            <p>ubrania, zabawki, sprzęt i inne</p>
          </div>
          <div className="photo">
          <img src={pack} alt="" />
            <p>Spakuj je</p>
            <hr></hr>
            <p>skorzystaj z worków na śmieci</p>
          </div>
          <div className="photo">
          <img src={whoHelps} alt="" />
            <p>Zdecyduj komu chcesz pomóc</p>
            <hr></hr>
            <p>wybierz zaufane miejsce</p>
          </div>
          <div className="photo">
          <img src={orderCourier} alt="" />
            <p>Zamów kuriera</p>
            <hr></hr>
            <p>kurier przyjedzie w dogodnym terminie</p>
          </div>
        </div>
        <button>Załóz konto</button>
      </div>
    </section>
  )
}

export default FourSteps;