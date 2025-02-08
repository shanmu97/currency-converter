import React,{useId} from 'react'

function InputBox({
  label,
  className="",
  amount,
  OnAmountChange,
  OnCurrencyChange,
  currencyOptions=[],
  selectCurrency="USD"}
  ) {
    const amountInputId = useId()

  return (
    <>
      <div className={`bg-white p-3 rounded-lg text-sm flex ${className}`}>
        <div className='w-1/2'>
          <label htmlFor={amountInputId} className='text-black/40 mb-2'>
            {label}
          </label>
          <input
          id={amountInputId}
          className='outline-none w-full bg-transparent py-1.5'
          type="number"
          placeholder='Amount'
          value={amount===0?"":amount}
          onChange={e=>OnAmountChange && OnAmountChange(Number(e.target.value))}
          />
        </div>
        <div className='w-1/2 flex flex-wrap justify-end text-right'>
      <p className='text-black/40 mb-2 w-full'>Currency Type</p>
      <select 
      className='rounded-lg px-1 py-1 bg-gray-100 cursor-pointer outline-none' 
      value={selectCurrency}
      onChange={e=>OnCurrencyChange && OnCurrencyChange(e.target.value)}
      
      >
        {currencyOptions.map((curr)=>(
          <option key={curr} value={curr}>{curr}</option>
        ))}

      </select>
        </div>
      </div>
    </>
    
  )
}

export default InputBox
