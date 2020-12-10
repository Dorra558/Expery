import React from 'react';
import './App.css'
import Banner from './components/Banner';
import NavigationBar from './components/NavigationBar'
import Form from './components/Form'
import Login from './components/Login'
import { FooterContainer } from './containers/footer'


function App() {
  return (
   <>
   <NavigationBar />
   <Banner />
   <Form />
   <FooterContainer />
   
   </>
  );
}

export default App;

