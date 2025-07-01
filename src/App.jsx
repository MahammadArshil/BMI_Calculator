import { useState } from 'react'
import './App.css'
import BMI from './components/BMI'
import CalculateBMI from './lib/CalculateBMI'
import Details from './components/Details';
import Result from './components/Result';

function App() {
  const [bmiData, setBmiData] = useState({
    weight: '',
    height: '',
  });
  const [result, setResult] = useState(null);

  const handlesubmit = (e) => {
    e.preventDefault();
    const tempResult = parseFloat(CalculateBMI(bmiData).toFixed(2));
    setResult(tempResult);
  }

  return (
    <div className='flex flex-col justify-between items-center lg:gap-10 sm:flex-row md:p-4 md:mx-14'>
      <div className='w-[80%] flex flex-col justify-between items-center p-4 gap-4 sm:w-[65%]'>
        <BMI bmiData={bmiData} setBmiData={setBmiData} handlesubmit={handlesubmit} setResult={setResult} />
        <Result result={result} bmiData={bmiData} />
      </div>
      
      <div className='w-[80%] flex justify-center items-center p-4 sm:w-full'>
        <Details />
      </div>
    </div>
  )
}

export default App
