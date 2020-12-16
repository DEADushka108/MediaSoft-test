import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import Header from '../header/header';
import Footer from '../footer/footer';
import CardReactFormContainer from 'card-react';
import Tabs from '../tabs/tabs';
import Tab from '../tab/tab';
import { TabNames } from '../../utils/const';

const FormScreen = () => {

  return <Fragment>
    <Header/>
    <main className="page-main">
      <h1 className="visually-hidden">Cart</h1>
      <Tabs>
        <Tab title={TabNames.USER}>
          <section className="contact-us feedback">
          <form className="feedback__form" action="#" method="GET">
            <fieldset className="feedback__item user-info">
              <legend className="visually-hidden">Introduce yourself an write us some word</legend>
              <p className="user-info__item">
                <label className="user-info__label" htmlFor="user-name">Full name</label>
                <input className="user-info__input" id="user-name" type="text" name="full-name" placeholder="Your Name" required/>
              </p>
              <p className="user-info__item">
                <label className="user-info__label" htmlFor="user-email">Email</label>
                <input className="user-info__input" id="user-email" type="email" name="email" placeholder="Your Email" required />
              </p>
              <p className="user-info__item">
                <label className="user-info__label" htmlFor="user-phone">Phone</label>
                <input className="user-info__input" id="user-phone" type="phone" name="phone" placeholder="Your Phone" required />
              </p>
            </fieldset>
            <button className="feedback__button" type="submit">Submit</button>
          </form>
        </section>
        </Tab>
        <Tab title={TabNames.CARD}>
          
        </Tab>
      </Tabs>
      
    </main>

    <Footer/>

  </Fragment>
};

export default FormScreen;