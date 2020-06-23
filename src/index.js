import React from 'react';
import ReactDOM from 'react-dom'; 
import CouterApp from './CounterApp';
import './index.css';  

const div = document.getElementById('root');

ReactDOM.render(<CouterApp value ={10}/>, div); 