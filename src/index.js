import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Senators from './components/Senators'
import registerServiceWorker from './registerServiceWorker';


const DebuggingGoneWild = () =>  (<h1>Show Up please</h1>)

ReactDOM.render(<Senators />, document.getElementById('root'));
registerServiceWorker();
