import React, { Component } from 'react';
import {Route} from 'react-router-dom';
//import Plyr from 'react-plyr';
import './App.css';

import Header from './layout/Header';
import Footer from './layout/Footer';
import MainPage from './sections/MainPage';
import CoursesPage from './sections/CoursesPage';
import TeachersPage from './sections/TeachersPage';
import WishlistPage from './sections/WishlistPage';
import CartPage from './sections/CartPage';
import ChatPage from './sections/ChatPage';
import UserPage from './sections/UserPage';

class App extends Component {
  render() {
    return (
      <div className="app">
      	<Header />
      	<Route exact path="/" component={MainPage} />
      	<Route path="/courses" component={CoursesPage} />
      	<Route path="/teachers" component={TeachersPage} />
      	<Route path="/wishlist" component={WishlistPage} />
      	<Route path="/cart" component={CartPage} />
      	<Route path="/chat" component={ChatPage} />
      	<Route path="/user" component={UserPage} />
      	<Footer />
      </div>
    );
  }
}

export default App;
