import {useState } from "react";

function App() {
  const [newpassword, setnewpassword] = useState("");
  const [numbertick, setnumbertick] = useState(false);
  const [spechialtick, setspechialtick] = useState(false);
  const handleCheckboxChange = (event) => {
    setnumbertick(event.target.checked);
  };
  const spachialtick = (event) => {
    setspechialtick(event.target.checked);
  };
  const alphabet = 'abcdefghigklmnopqrstuvwxyz';
   const number = "123456789"
   const spechialcharacter = '!@#$%^&*()'
  let charset = alphabet;
  if(true == numbertick){
     charset += number
  } if(true == spechialtick){
    charset += spechialcharacter
    console.log("hello")
  }
 
  const handleButtonClick = () => {
    if (textRef.current) {
      const range = document.createRange();
      range.selectNodeContents(textRef.current);
      const selection = window.getSelection();
      selection.removeAllRanges();
      selection.addRange(range);
    }
  };
  
  const passgenrator = () => {
    let password = "";
    for (let i = 0; i < Range; i++) {
      const randomIndex = Math.floor(Math.random() * charset.length);
      password += charset[randomIndex];
    }
    setnewpassword(password);
  };


  const min = 0;
  let max = 20;
  const [Range, setRange] = useState(min);

  return (
    <>
      <div className="w-screen h-screen bg-slate-600 flex justify-center items-center">
       
        <div className="w-full  max-w-lg">
          <div className="flex flex-wrap -mx-3 mb-6">
            <div className="w-full px-3">
              <label className="block uppercase tracking-wide text-gray-200 text-xs font-bold mb-2">
                Password genrated
              </label>
              <div className="flex items-center justify-between appearance-none w-full bg-gray-200 text-gray-700 border border-gray-200 rounded  pl-3 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500">
                <h2>{newpassword}</h2>
                <button
                  onClick={passgenrator}
                  className="rounded-none border-none focus:outline-none hover:bg-slate-300  "
                >
                  click
                </button>
              </div>
            </div>
          </div>
          <div className="flex flex-wrap -mx-3 ">
            <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
              <div className="flex text-white justify-between items-center  h-5 w-[150px]">
                <input
                  type="range"
                  min={min}
                  max={max}
                  onChange={(e) => setRange(e.target.value)}
                  name="rng"
                  className="w-[130px] h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer dark:bg-gray-700"
                ></input>
                <div>{Range}</div>
              </div>
            </div>

            <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
              <div className="flex items-center h-5">
                <input
                  id="remember"
                  type="checkbox"
                  value=""
                  onChange={handleCheckboxChange}
                  className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800"
                  required
                />
                <label className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                  Number
                </label>
              </div>
            </div>

            <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
              <div className="flex items-center h-5">
              <input
                  id="remember"
                  type="checkbox"
                  value=""
                  onChange={spachialtick}
                  className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800"
                  required
                />
                <label className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                 Special character
                </label>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
