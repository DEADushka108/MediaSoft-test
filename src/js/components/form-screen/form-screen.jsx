import React, {Fragment} from 'react';
import Header from '../header/header';
import Footer from '../footer/footer';
import Tabs from '../tabs/tabs';

const FormScreen = () => {

  return <Fragment>
    <Header/>
    <main className="page-main">
      <h1 className="visually-hidden">Cart</h1>
      <Tabs/>
    </main>

    <Footer/>

  </Fragment>;
};

export default FormScreen;
