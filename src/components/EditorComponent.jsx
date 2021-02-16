import React, { Component } from 'react';
import AceEditor from "react-ace";
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';
import "ace-builds/src-min-noconflict/ext-searchbox";
import "ace-builds/src-min-noconflict/ext-language_tools";

const languages = [
    "c_cpp",
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
            modeList: false,
            themeList: false,
            mode: "java",
            value: "defaultValue",
            placeholder: "Placeholder Text",
            theme: "monokai",
            enableBasicAutocompletion: false,
            enableLiveAutocompletion: false,
            fontSize: 14,
            showGutter: true,
            showPrintMargin: true,
            highlightActiveLine: true,
            enableSnippets: false,
            showLineNumbers: true
            // editorCode: "//Enter your code here",
        }
        this.onChange = this.onChange.bind(this);
        this.setMode = this.setMode.bind(this);
        this.setTheme = this.setTheme.bind(this);
    }
    onChange = (newValue) => {
        console.log("change", newValue);
        // this.setState({
        //     editorCode:{newValue}
        // });
    }
    
    select = (event) => {
        this.setState({
            dropdownOpen: !this.state.dropdownOpen,
            mode: event.target.value,
        });
        console.log(event.target.value);
    }
    setTheme(e) {
        this.setState({
            themeList: !this.state.themeList,
            theme: e.target.value
        });
        console.log(e.target.value);
    }
    setMode(e) {
        this.setState({
            modeList: !this.state.modeList,
            mode: e.target.value
        });
        console.log(e.target.value);
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
                    <div className=" d-flex col-5 col-sm-5 offset-sm-1 col-md-4 offset-md-2 ">
                        <div className="px-3 py-1" >
                            <Dropdown isOpen={this.state.modeList} toggle={()=> { this.setState({ modeList: !this.state.modeList }); }} >
                                <DropdownToggle color="" caret style={{ minwidth: "80px",textAlign:"left" }}>{this.state.mode} </DropdownToggle>
                                <DropdownMenu modifiers={{
                                    setMaxHeight: { enabled: true, order: 890,
                                        fn: (data) => {
                                            return {
                                                ...data,
                                                styles: {
                                                    ...data.styles,
                                                    overflow: 'auto',
                                                    maxHeight: '300px',
                                                },
                                            };
                                        },
                                    },
                                }}>
                                    {languages.map(lang => (
                                        <DropdownItem key={lang} value={lang} onClick={this.setMode}>{lang}</DropdownItem>
                                    ))}
                                </DropdownMenu>
                            </Dropdown>
                        </div>
                    </div>
                    <div className=" d-flex col-5 col-sm-5 offset-sm-1 col-md-4">
                        <div className="px-3 py-1" >
                            <Dropdown isOpen={this.state.themeList} toggle={() => { this.setState({ themeList: !this.state.themeList }); }}  >
                                <DropdownToggle color="" caret style={{ minwidth: "80px",textAlign:"left" }}>{this.state.theme} </DropdownToggle>
                                <DropdownMenu modifiers={{
                                    setMaxHeight: { enabled: true, order: 890,
                                        fn: (data) => {
                                            return {
                                                ...data,
                                                styles: {
                                                    ...data.styles,
                                                    overflow: 'auto',
                                                    maxHeight: '300px',
                                                },
                                            };
                                        },
                                    },
                                }}>
                                    {themes.map(theme => (
                                        <DropdownItem key={theme} value={theme} onClick={this.setTheme}>{theme}</DropdownItem>
                                    ))}
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
                                theme={this.state.theme}
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