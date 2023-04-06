import "./App.css";
import Copy from "./comps/Copy";
import { useRef } from "react";

function App() {
  //const variable that grabs the current URL
  const stringToCopy =
    "https://www.facebook.com/share.php?u=" + window.location.href;

  const handleCopy = () => {
    console.log("Copied");
  };

  return (
    <div className="flex items-center justify-center h-screen p-4 bg-slate-200">
      <div className="flex flex-col items-center justify-center w-full max-w-md p-4 bg-white rounded shadow">
        <a href={stringToCopy} target="_blank" rel="noreferrer">
          Share To Facebook{" "}
        </a>
      </div>
    </div>
  );
}

export default App;
