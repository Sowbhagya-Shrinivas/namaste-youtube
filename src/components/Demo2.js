import React, { useEffect, useRef, useState } from "react";
/**Let value get reset when the rendering happens */
const Demo2 = () => {
  const [y, setY] = useState(0);
  let x = 0;

  const ref = useRef(0);
  /**
   * not like => ref = 0;
   * it is like => ref = {current : 0}
   */

  console.log("Rendering...");
  const i = useRef(null);
  useEffect(() => {
    i.current = setInterval(() => {
      console.log("Namaste React", Math.random());
    }, 1000);
    return () => clearInterval(i.current);
  }, []);

  return (
    <div className="w-96 h-96 m-4 p-2 bg-slate-50 border border-black">
      <div>
        <button
          className="bg-green-100 px-2 m-4"
          onClick={() => {
            x = x + 1;
            console.log("x = " + x);
          }}
        >
          {" "}
          Increase x{" "}
        </button>
        <span className="font-bold text-xl">Let = {x}</span>
      </div>
      <div>
        <button
          className="bg-green-100 px-2 m-4"
          onClick={() => {
            setY(y + 1);
          }}
        >
          {" "}
          Increase Y{" "}
        </button>
        <span className="font-bold text-xl">State Variable = {y}</span>
      </div>
      <div>
        <button
          className="bg-green-100 px-2 m-4"
          onClick={() => {
            ref.current = ref.current + 1;
            console.log("ref = " + ref.current);
          }}
        >
          {" "}
          Increase Ref{" "}
        </button>
        <span className="font-bold text-xl">Ref = {ref.current}</span>
      </div>
      <button
        onClick={() => {
          clearInterval(i.current);
        }}
        className="bg-red-900 p-4 m-4 text-white font-bold rounded-lg"
      >
        Stop Printing
      </button>
    </div>
  );
};

export default Demo2;
