import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import Header from '../header/header';
import Footer from '../footer/footer';

const Form = () => {
  return <Fragment>
    <Header/>
    <main className="page-main">
      <h1 className="page-main__title">Title</h1>
    </main>

    <Footer/>

  </Fragment>
}

export default Form;
