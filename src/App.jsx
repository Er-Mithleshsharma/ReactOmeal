import { useState } from 'react'
import './App.css'
import Header from './components/Header'
import Footer from './components/Footer'
import { Outlet } from 'react-router-dom';
import { Provider } from 'react-redux';
import appStore from './utils/appStore';
function App() {

  return (
    <div className="app">
      <Provider store = {appStore}>
      <Header />
      <Outlet />
      <Footer />
      </Provider>
    </div>
  );
}

export default App
