import React, { Component } from 'react';
import './App.css';
import Editor from "./components/EditorComponent";
import Problem from "./components/ProblemComponent";
class App extends Component {
    render() {
        return (
            <div className="container m-5">
                <div className="row">
                    <div className="col-12">
                        <h3>Hello I am a Coding Platform.</h3>
                    </div>
                </div>
                <Editor />
            </div>
        );
    }
}

export default App;