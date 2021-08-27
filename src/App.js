import "./App.css";
import parse from "html-react-parser";
import draftToHtml from "draftjs-to-html";
import { useState } from "react";
import { EditorState, convertToRaw } from "draft-js";
import { Editor } from "react-draft-wysiwyg";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";

function App() {
  const [text, setText] = useState("");
  const state = EditorState.createEmpty();
  const [editorState, setEditorState] = useState(state);

  console.log(text);

  return (
    <div className="container">
      <h1 className="text-center pt-5 text-white">Rich Text Editor</h1>
      <div className="row">
        <div className="col-lg-6 mt-5 py-3 h-100">
          <Editor
            editorState={editorState}
            wrapperClassName="card"
            editorClassName="card-body"
            onEditorStateChange={(newState) => {
              setEditorState(newState);
              setText(draftToHtml(convertToRaw(newState.getCurrentContent())));
            }}
          />
        </div>
        <div className="col-lg-6 mt-3">
          <h4 className="text-center mb-3 text-white">Content Output</h4>
          <p className="card border h-100 p-2 bg-white output ">
            {parse(text)}
          </p>
        </div>
      </div>
    </div>
  );
}

export default App;
