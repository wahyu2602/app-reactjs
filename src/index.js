import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './index.css';
// import App from './App';
import Home from './pages/home/Home';
import DetailsProducts from './pages/detailsproduct/DetailsProducts';
import Cart from './pages/cart/Cart';
import PageNotFound from './pages/PageNotFound';
import reportWebVitals from './reportWebVitals';
import Order from './pages/order/Order';
import { Provider } from 'react-redux';
import store from './config/redux';
import 'bootstrap/dist/css/bootstrap.min.css';

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/detail" element={<DetailsProducts />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/order" element={< Order />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </BrowserRouter>
  </Provider >,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
