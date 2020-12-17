import React, {createRef, useRef, useState} from 'react';
import PropTypes from 'prop-types';
import {TabNames} from '../../utils/const.js';
import { YMaps, Map, Placemark } from 'react-yandex-maps';

const Tabs = () => {
  const [activeItem, setActiveItem] = useState(TabNames.USER);
  const mapRef = createRef();
  const paymentRef = useRef();

  return <React.Fragment> 
  <div className="delivery">
    <nav className="delivery__nav">
      <ol className="delivery__list">
        {Object.values(TabNames).map((title, index) => {
          return <li key={`${title}-${index}`}
            className={`delivery__item ${(activeItem === title) ? `delivery__item--active` : ``}`}>
            <p className="delivery__title">{index + 1} {title}</p>
          </li>;
        })}
      </ol>
    </nav>
    <React.Fragment>
      <section className="contact-us feedback" style={TabNames.USER === activeItem ? {display:"block"} : {display:"none"}}>
        <form className="feedback__form">
          <fieldset className="feedback__item user-info">
            <legend className="visually-hidden">Introduce yourself an write us some word</legend>
            <div className="user-info__item">
              <label className="user-info__label" htmlFor="user-name">Full name</label>
              <input className="user-info__input" id="user-name" type="text" name="full-name" placeholder="Your Name" required/>
            </div>
            <div className="user-info__item">
              <label className="user-info__label" htmlFor="user-email">Email</label>
              <input className="user-info__input" id="user-email" type="email" name="email" placeholder="Your Email" required />
            </div>
            <div className="user-info__item">
              <label className="user-info__label" htmlFor="user-phone">Phone</label>
              <input className="user-info__input" id="user-phone" type="tel" name="phone" placeholder="Your Phone" required />
            </div>
          </fieldset>
          <button className="feedback__button" type="submit" onClick={() => {
              setActiveItem(TabNames.CARD);
            }}>Next</button>
        </form>
      </section>
    </React.Fragment>
    <React.Fragment>
      <section className="payment" style={TabNames.CARD === activeItem ? {display:"block"} : {display:"none"}}>
        <a className="feedback__button-back" onClick={() => {
              setActiveItem(TabNames.USER);
            }}>
          <svg className="feedback__arrow-icon">
            <use xlinkHref="#icon-right-arrow"></use>      
          </svg> 
          Back
        </a>
        <form ref={paymentRef} className="payment__form">
          <div className="payment__outro outro-number">
            <p className="outro-number__text">Card number</p>
            <p className="outro-number__text">{`#### #### #### ####`}</p>
          </div>
          <div className="payment__outro outro-expire">
            <p className="outro-expire__text">Expires</p>
            <p className="outro-expire__text">{`00/00`}</p>
          </div>
          <div className="payment__outro outro-name">
            <p className="outro-name__text">Card holder</p>
            <p className="outro-name__text">{`Jonh Smith`}</p>
          </div>
          <img className="payment__img" src="./img/bg/credit-card-bg.png" alt="Credit card"></img>
          <fieldset className="payment__fieldset">
            <legend className="visually-hidden">Introduce yourself an write us some word</legend>
            <div className="payment__item">
              <label className="payment__label" htmlFor="card-number">Card number</label>
              <input className="payment__input" id="card-number" type="number" name="card-number" placeholder="0000 00000 0000 0000" required/>
            </div>
            <div className="payment__item">
              <label className="payment__label" htmlFor="card-name">Card Name</label>
              <input className="payment__input" id="card-name" type="text" name="card-name" placeholder="Jonh Smith" required />
            </div>
            <div className="payment__item">
              <div className="payment__expire">
                <label className="payment__label" htmlFor="month">Expires</label>
                <input className="payment__input payment__input-month" id="month" type="month" name="month" required />
              </div>
              <div className="payment__cvv">
                <label className="payment__label" htmlFor="card-cvv">Secret code</label>
                <input className="payment__input payment__input-cvv" id="card-cvv" type="number" name="card-cvv" placeholder="CVV" required />
              </div>
            </div>
          </fieldset>
          <button className="payment__button" onClick={() => {
              setActiveItem(TabNames.ADRESS);
            }}>Next</button>
        </form>
      </section>
    </React.Fragment>
    <React.Fragment>
      <section className="address" style={TabNames.ADRESS === activeItem ? {display:"block"} : {display:"none"}}>
        <a className="feedback__button-back" onClick={() => {
              setActiveItem(TabNames.CARD);
            }}>
          <svg className="feedback__arrow-icon">
            <use xlinkHref="#icon-right-arrow"></use>      
          </svg> 
          Back
        </a>
        <form className="address__form">
          <fieldset className="address__fieldset">
            <legend className="visually-hidden">Introduce yourself an write us some word</legend>
            <div className="address__item">
              <label className="address__label" htmlFor="adress">Delivery address</label>
              <input className="address__input" id="address" type="text" name="address" placeholder="Delivery Address" required/>
            </div>
            <YMaps>
              <div>
                <Map  instanceRef={mapRef} defaultState={{ center: [55.75, 37.57], zoom: 9 }} >
                <Placemark geometry={[55.684758, 37.738521]} 
                  options={{
                    draggable: true,
                    useMapMarginInDragging: false,
                    hasHint: false
                  }}
                  />
                </Map>
              </div>
            </YMaps>
          </fieldset>
          <button className="feedback__button" type="submit">Submit</button>
        </form>
      </section>
    </React.Fragment>
  </div>;
  </React.Fragment>
};



export default Tabs;