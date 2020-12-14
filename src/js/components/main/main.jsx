import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import Header from '../header/header';
import Footer from '../footer/footer';

const Main = () => {
  return <Fragment>
    <Header/>
    <main className="page-main">
      <h1 className="visually-hidden">Главная страница тестового задания</h1>
      
    </main>

    <Footer/>

  </Fragment>
}

export default Main;
