import React from 'react';
const browserHistory = require('react-router/lib/browserHistory');

const Home =  ()=> <div>Welcome，this is a react-redux-webpack demo<li onClick={()=> browserHistory.push('/about')}>about</li></div>;

export default Home;