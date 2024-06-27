// import {} from 'react'
import "./index.css";
import "./App.css";
import { ThreeCircles } from "react-loader-spinner";

const Loader = () => {
  return (
    <div className="w-full flex justify-center my-3">
      <ThreeCircles
        visible={true}
        height="40"
        width="40"
        color="black"
        ariaLabel="three-circles-loading"
        wrapperStyle={{}}
        wrapperClass=""
      />
    </div>
  );
};

export default Loader;
