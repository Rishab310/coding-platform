import React, { Component } from 'react';
import './App.css';
import Main from './components/codeEditor/EditorMain';
import LoginPage from './components/loginPage';
class App extends Component {
    render() {
        return (
            <>
                <LoginPage/>
            </>
        );
    }
}

export default App;