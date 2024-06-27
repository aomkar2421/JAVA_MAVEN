import "./App.css";
import "./index.css";
import axios from "axios";
import { useState } from "react";
import Loader from "./Loader";
import { CopyToClipboard } from "react-copy-to-clipboard";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState("");
  const [showLoader, setShowLoader] = useState(false);
  const [copied, setCopied] = useState(false);

  const command =
    "This sentence is encountering Plagiarism, please can you modify or restructure it so that plagiarism can be avoided. And strict instruction are that you need to dont reduce pararaph length. Keep paragraph length as it is.";

  async function generateAnswer() {
    // setAnswer("Loading...");
    setShowLoader(true);
    const response = await axios({
      url: "https://generativelanguage.googleapis.com/v1beta/models/gemini-pro:generateContent?key=AIzaSyDpHnOvkDZCR24DM4z9U-nB1j3jaCF_w30",
      method: "post",
      data: {
        contents: [
          {
            parts: [{ text: question + "\n" + command }],
          },
        ],
      },
    });

    console.log(
      response["data"]["candidates"][0]["content"]["parts"][0]["text"]
    );
    setAnswer(response["data"]["candidates"][0]["content"]["parts"][0]["text"]);
    setShowLoader(false);
    setCopied(true);
  }

  return (
    <div className=" text-white bg w-[660px] h-[400px] font-mono ">
      <div className="bg1 h-full overflow-y-auto w-full text-center text-l text-black">
        <h2 className="text-3xl py-4 font-bold">Plagiarism Remover</h2>
        <textarea
          onChange={(e) => setQuestion(e.target.value)}
          value={question}
          name=""
          id=""
          cols="55"
          rows="7"
          className="my-3 p-3 text-justify border-2 border-black rounded-sm text-xl"
        ></textarea>{" "}
        <br />
        {/* <input type="text" className='px-1 h-16 w-72 border-2 border-black rounded-sm ' onChange={ (e) => setQuestion(e.target.value) } /> <br /> */}
        <button
          className="h-10 w-44 bg-green-400 border-2 border-black rounded-md"
          onClick={generateAnswer}
        >
          Plagiarsim Remover
        </button>
        {showLoader ? (
          <Loader />
        ) : (
          <pre className="flex text-wrap text-justify px-3 py-3 ">{answer}</pre>
        )}
        {copied ? (
          <CopyToClipboard
            text={answer}
            onCopy={() => toast("Content is copied")}
          >
            <button className="h-8 w-40 mb-3 border-2 border-black rounded-md bg-fuchsia-200 hover:bg-fuchsia-600">
              Copy to clipboard
            </button>
          </CopyToClipboard>
        ) : null}
      </div>
    </div>
  );
}

export default App;
