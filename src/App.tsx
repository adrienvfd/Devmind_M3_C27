import React from 'react';
import logo from './logo.svg';
import './App.css';
import Counter from './component/Counter';
import StopWatch from './component/StopWatch';
import WelcomeMessage from './component/WelcomeMessage';

function App() {
        return (
            <div className="App">
                <header className="App-header">
                    <WelcomeMessage />
                    <Counter />
                    <StopWatch />
                </header>
            </div>
        );
    }

export default App;
