import React, { Component } from 'react';
import AceEditor from "react-ace";
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';
import "ace-builds/src-min-noconflict/ext-searchbox";
import "ace-builds/src-min-noconflict/ext-language_tools";

const languages = [
    "javascript",
    "java",
    "python",
    "xml",
    "ruby",
    "sass",
    "markdown",
    "mysql",
    "json",
    "html",
    "handlebars",
    "golang",
    "csharp",
    "elixir",
    "typescript",
    "css"
];

const themes = [
    "monokai",
    "github",
    "tomorrow",
    "kuroir",
    "twilight",
    "xcode",
    "textmate",
    "solarized_dark",
    "solarized_light",
    "terminal"
];

languages.forEach(lang => {
    require(`ace-builds/src-noconflict/mode-${lang}`);
    require(`ace-builds/src-noconflict/snippets/${lang}`);
});

themes.forEach(theme => require(`ace-builds/src-noconflict/theme-${theme}`));



class Editor extends Component {
    constructor(props) {
        super(props);
        this.state = {
            dropdownOpen: false,
            langName: "Java",
            mode: "java",
            // editorCode: "//Enter your code here",
        }
        this.onChange = this.onChange.bind(this);
        this.toggle = this.toggle.bind(this);
        this.select = this.select.bind(this);
    }
    onChange = (newValue) => {
        console.log("change", newValue);
        // this.setState({
        //     editorCode:{newValue}
        // });
    }
    toggle = () => {
        this.setState({
            dropdownOpen: !this.state.dropdownOpen
        });
    }
    select = (event) => {
        this.setState({
            dropdownOpen: !this.state.dropdownOpen,
            langName: event.target.innerText,
            mode: event.target.value,
            // editorCode: "//Enter your code here"
        });
        console.log(event.target.value);
    }
    render() {
        return (
            <div className="container m-2">
                <div className="row ">
                    <div className="d-flex col-10 offset-1 col-sm-8 offset-sm-2 justify-content-center">
                        <h4>Code Editor.</h4>
                    </div>
                </div>
                <div className="row">
                    <div className=" d-flex col-10 col-sm-10 offset-sm-1 col-md-8 offset-md-2 ">
                        <div className="px-3 py-1" >
                            <Dropdown isOpen={this.state.dropdownOpen} toggle={this.toggle} >
                                <DropdownToggle color="" caret style={{ minwidth: "80px",textAlign:"left" }}>{this.state.langName} </DropdownToggle>
                                <DropdownMenu>
                                    <DropdownItem value="c_cpp" onClick={this.select}>C</DropdownItem>
                                    <DropdownItem value="c_cpp" onClick={this.select}>C++</DropdownItem>
                                    <DropdownItem value= "java" onClick={this.select}>Java</DropdownItem>
                                    <DropdownItem value="python"onClick={this.select}>Python</DropdownItem>
                                </DropdownMenu>
                            </Dropdown>
                        </div>
                    </div>
                </div>
                <div className="row m-1">
                    <div className=" d-flex col-10 col-sm-10 offset-sm-1 col-md-8 offset-md-2 ">
                        <div className="d-flex justify-content-center border border-dark "
                            style={{ height: "100%", width: "100%", minHeight: "500px", minWidth: "300px" }}>
                            <AceEditor
                                mode={this.state.mode}
                                theme="dreamweaver"
                                onChange={this.onChange}
                                name="aceEditor"
                                height="100%"
                                width="100%"
                                // value={this.state.editorCode}
                                enableSnippets="true"
                                editorProps={{ $blockScrolling: true }}
                                setOptions={{
                                    enableBasicAutocompletion: true,
                                    enableLiveAutocompletion: true,
                                    enableSnippets: true,
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