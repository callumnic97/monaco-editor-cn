import React from "react";
import ReactDOM from "react-dom";

import Editor from "@monaco-editor/react";

function App() {
  
  function useEffect(editor, monaco) {
    monaco.editor.defineTheme('myTheme', {
      base: 'vs',
      inherit: true,
      rules: [{ background: 'EDF9FA' }],
      colors: {
        'editor.foreground': '#000000',  // font colour
        'editor.background': '#EDF9FA',    // backgroound of editor
        'editorCursor.foreground': '#8B0000', // cursor colour
        'editor.lineHighlightBackground': '#0000FF20', // line highlight
        'editorLineNumber.foreground': '#008800', // line number colour
        'editor.selectionBackground': '#88000030', // cursor highlight colour
        'editor.inactiveSelectionBackground': '#88000015' // cursor highlight when clicked away from editor
      }
    })

    monaco.editor.setTheme('myTheme');
  }

  function handleEditorChange(value, event) {
    // here is the current value
  }

  function handleEditorDidMount(editor, monaco) {
    console.log("onMount: the editor instance:", editor);
    console.log("onMount: the monaco instance:", monaco)
  }

  function handleEditorWillMount(monaco) {
    console.log("beforeMount: the monaco instance:", monaco);
  }

  function handleEditorValidation(markers) {
    // model markers
    // markers.forEach(marker => console.log('onValidate:', marker.message));
  }



  return (
    <Editor
      height="80vh"
      width="870px"
      defaultLanguage="json"
      defaultValue="// JSON Editor"
      theme="myTheme"
      line="2"
      options={{
        minimap: {
          enabled: false,
        },
        scrollbar: {
          horizontalSliderSize: 4,
          verticalSliderSize: 18,
      },
        fontSize: 16,
        cursorStyle: "block",
        wordWrap: "on",
        automaticLayout: true,
        contextmenu: true,
        hideCursorInOverviewRuler: true,
        matchBrackets: "always",
      }}
      onChange={handleEditorChange}
      onMount={handleEditorDidMount}
      beforeMount={handleEditorWillMount}
      onValidate={handleEditorValidation}
    />
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);

export default App;
