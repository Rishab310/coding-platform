import React, { Component } from 'react';
import './App.css';
import Editor from "./components/EditorComponent";
import Problem from "./components/ProblemComponent";
class App extends Component {
    render() {
        return (
            <div className="container">
                <div className="row">
                    <h3>Hello i am a Coding Platform.</h3>
                </div>
                {/* <div className="row">
                    <Problem />
                </div> */}
                <div className="row">
                    <Editor />
                </div>
            </div>
        );
    }
}

export default App;