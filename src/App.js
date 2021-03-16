import React, { Component } from 'react';
import './App.css';
import Editor from "./components/codeEditor/EditorComponent";
import AceExample from "./components/codeEditor/AceComponent"; 
import Problem from "./components/codeEditor/ProblemComponent";
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