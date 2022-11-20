import React, { Component } from 'react';
import './App.css';
import EnrolmentForm from './EnrolmentForm';

function App() {
    const handleClick = () => {
        alert('start reacting');
    };

    return (
        <div className="App">
            <button onClick={handleClick}>Just React</button>
            <br />
            <EnrolmentForm>Just React</EnrolmentForm>
        </div>
    );
}
export default App;
