import { useState } from "react";
import InputBox from "./Components/InputBox";
import useCurrencyInfo from "./Hooks/useCurrencyInfo";
import background from './background.jpg'

import "./App.css";

function App() {
  const [amount, setamount] = useState(null)
  const [from,setFrom] = useState("INR")
  const [to,setTo] = useState("USD")
  const [convertedAmount,setConvertedAmount]=useState(null)
  const currencyInfo = useCurrencyInfo(from)
  const options = Object.keys(currencyInfo)

  const swap =()=>{
    setFrom(to)
    setTo(from)
    setConvertedAmount(amount)
    setamount(setConvertedAmount)
  }

  const convert = () =>setConvertedAmount(amount * currencyInfo[to])
  return (
    <>
        <div
            className="w-full h-screen flex flex-wrap justify-center items-center bg-cover bg-no-repeat bg-transparent "
            style={{
                backgroundImage: `url('${background}')`,
            }}
        >
            <div className="w-full ">
              
                <div className="w-full max-w-md mx-auto rounded-lg p-5 backdrop-blur-md bg-white/30">
                <h1 className="text-center font-bold text-2xl mb-4 text-blue-700">CURRENCY CONVERTER</h1>
                    <form
                        onSubmit={(e) => {
                            e.preventDefault();
                            convert();
                           
                        }}
                    >
                        <div className="w-full mb-1">
                            <InputBox
                                label="From"
                                amount={amount}
                                currencyOptions={options}
                                OnCurrencyChange={(currency)=>setFrom(currency)}
                                OnAmountChange={(value)=>setamount(value)}
                                selectCurrency={from}                                
                            />
                        </div>
                        <div className="relative w-full h-0.5">
                            <button
                                type="button"
                                className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-white rounded-md bg-blue-600 text-white px-2 py-0.5"
                                onClick={swap}
                            >
                                swap
                            </button>
                        </div>
                        <div className="w-full mt-1 mb-4">
                            <InputBox
                                label="To"
                                amount={convertedAmount}
                                currencyOptions={options}
                                OnCurrencyChange={(currency)=>setTo(currency)}
                                selectCurrency={to}                                
                            />
                        </div>
                        <button type="submit" className="w-full bg-blue-600 text-white px-4 py-3 rounded-lg">
                            Convert {from} to {to}
                        </button>
                    </form>
                </div>
            </div>
        </div>
    </>
  );
}

export default App;
