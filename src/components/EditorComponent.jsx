import React, { Component } from 'react';
import AceEditor from "react-ace";

import "ace-builds/src-noconflict/mode-java";
import "ace-builds/src-noconflict/theme-github";
import "ace-builds/src-noconflict/ext-language_tools"

class Editor extends Component {
    constructor(props) {
        super(props);
        this.onChange = this.onChange.bind(this);
    }
    onChange = (newValue) => {
        console.log("change", newValue);
    }
    render() {
        return (
            <div className="container m-2">
                <div className="row ">
                    <div className="d-flex col-10 offset-1 col-sm-8 offset-sm-2 justify-content-center ">
                        <h4>Hello I am a Code Editor.</h4>
                    </div>
                </div>
                <div className="row">
                    <div className=" d-flex col-10 col-sm-10 offset-sm-1 col-md-8 offset-md-2 ">
                        
                    </div>
                </div>
                <div className="row m-1">
                    <div className=" d-flex col-10 col-sm-10 offset-sm-1 col-md-8 offset-md-2 ">
                        <div className="d-flex justify-content-center border border-dark "
                            style={{ height: "100%", width: "100%", minHeight: "500px", minWidth: "300px" }}>
                            <AceEditor
                                mode="java"
                                theme="github"
                                onChange={this.onChange}
                                name="UNIQUE_ID_OF_DIV"
                                height="100%"
                                width="100%"
                                enableSnippets="true"
                                editorProps={{ $blockScrolling: true }}
                                setOptions={{
                                    enableBasicAutocompletion: true,
                                    enableLiveAutocompletion: true,
                                    enableSnippets: true
                                }}
                            />
                        </div>
                    </div>
                    <div>

                    </div>
                </div>
            </div>
        );
    }
}

export default Editor;