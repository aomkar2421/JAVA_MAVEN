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

  const command20 = "Summarize the given text into 20-30 words depending on length of text. ";
  const command40 = "Summarize the given text into 40-60 words depending on length of text. ";
  const command70 = "Summarize the given text into 70-100 words depending on length of text. ";

    async function generate20Answer() {
      // setAnswer("Loading...");
      setShowLoader(true);
      const response = await axios({
        url: "https://generativelanguage.googleapis.com/v1beta/models/gemini-pro:generateContent?key=AIzaSyDpHnOvkDZCR24DM4z9U-nB1j3jaCF_w30",
        method: "post",
        data: {
          contents: [
            {
              parts: [{ text: question + "\n" + command20 }],
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
  
  
    async function generate40Answer() {
      // setAnswer("Loading...");
      setShowLoader(true);
      const response = await axios({
        url: "https://generativelanguage.googleapis.com/v1beta/models/gemini-pro:generateContent?key=AIzaSyDpHnOvkDZCR24DM4z9U-nB1j3jaCF_w30",
        method: "post",
        data: {
          contents: [
            {
              parts: [{ text: question + "\n" + command40 }],
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
  
  
    async function generate70Answer() {
      // setAnswer("Loading...");
      setShowLoader(true);
      const response = await axios({
        url: "https://generativelanguage.googleapis.com/v1beta/models/gemini-pro:generateContent?key=AIzaSyDpHnOvkDZCR24DM4z9U-nB1j3jaCF_w30",
        method: "post",
        data: {
          contents: [
            {
              parts: [{ text: question + "\n" + command70 }],
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


  // const notify = () => {
  //   toast("Content is Copied");
  // };

  return (
    <div className=' text-white w-[660px] h-[400px] font-mono '>
      <div className=" text-center text-xs text-black">
      <h2 className='text-3xl py-4 font-bold'>Summarizer</h2>
        <textarea
          onChange={(e) => setQuestion(e.target.value)}
          value={question}
          name=""
          id=""
          cols="90"
          rows="10"
          className="my-3 px-2 text-justify border-2 border-black rounded-sm text-xs"
        ></textarea>{" "}
        <br />
        {/* <input type="text" className='px-1 h-16 w-72 border-2 border-black rounded-sm ' onChange={ (e) => setQuestion(e.target.value) } /> <br /> */}
        <button
          className="h-10 w-36 bg-green-400 border-2 border-black rounded-md mx-2 hover:bg-cyan-300 hover:scale-105"
          onClick={generate20Answer}
        >
          Short (20-30 Words)
        </button>
        <button
          className="h-10 w-36 bg-green-400 border-2 border-black rounded-md mx-2 hover:bg-cyan-300 hover:scale-105"
          onClick={generate40Answer}
        >
          Medium (40-60 Words)
        </button>
        <button
          className="h-10 w-36 bg-green-400 border-2 border-black rounded-md mx-2 hover:bg-cyan-300 hover:scale-105"
          onClick={generate70Answer}
        >
          Long (70-100 Words)
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
            <button className="h-8 w-36  border-2 border-black rounded-md bg-fuchsia-200 hover:bg-fuchsia-600">
              Copy to clipboard
            </button>
          </CopyToClipboard>
        ) : null}
      </div>
    </div>
  );
}

export default App;
