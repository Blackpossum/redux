import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals';
// import redux from @reduxjs/toolkit
import { configureStore } from '@reduxjs/toolkit'
// import provide to make store available Global
import { Provider } from 'react-redux';
// import reducer from features
import userReducer from './features/User'

//create store 
const store = configureStore({
    //pass reducer here
    reducer:{
      user: userReducer,
      // add another reducer here

    },
})

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* wrap App with provider and pass store as prop */}
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode> 
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
