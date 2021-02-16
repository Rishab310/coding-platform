import React, { Component } from 'react';
import './App.css';
import Editor from "./components/EditorComponent";
import AceExample from "./components/AceComponent"; 
import Problem from "./components/ProblemComponent";
class App extends Component {
    render() {
        return (
            <div className="container m-5">
                <div className="row">
                    <div className="col-12">
                        <h3>Coding Platform.</h3>
                    </div>
                </div>
                <Editor />
                <AceExample/>
            </div>
        );
    }
}

export default App;