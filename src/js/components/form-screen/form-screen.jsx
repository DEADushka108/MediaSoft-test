import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import Header from '../header/header';
import Footer from '../footer/footer';
import Tabs from '../tabs/tabs';
import Tab from '../tab/tab';
import { TabNames } from '../../utils/const';

const FormScreen = () => {

  return <Fragment>
    <Header/>
    <main className="page-main">
      <h1 className="visually-hidden">Cart</h1>
      <Tabs>
        
      </Tabs>
      
    </main>

    <Footer/>

  </Fragment>
};

export default FormScreen;