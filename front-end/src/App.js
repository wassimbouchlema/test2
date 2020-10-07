import React from 'react';
import ContactCard from './components/ContactCard';
import './App.css';
import {connect} from 'react-redux'


function App() {
  return (
    <div className="App">
<ContactCard/>
    </div>
  );
}

export default connect() (App);
