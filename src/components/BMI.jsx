import React from 'react';

const BMI = ({ bmiData, setBmiData, handlesubmit, setResult }) => {
    const onClear = (e) => {
        e.preventDefault();
        setBmiData({
            weight: '',
            height: '',
        });
        setResult(null);
    }
    
    return (
        <form onSubmit={handlesubmit}
            className='w-[90%] flex flex-col justify-center items-center border-2 border-black rounded-lg p-5 sm:w-full'>
            <h1 className='text-3xl p-4 text-blue-800 font-bold underline text-center'>BMI Calculator</h1>
            <div className='w-full mt-5 flex flex-col justify-between items-center sm:flex-row'>
                <label className='mr-3 text-xl font-semibold text-slate-800'>Weight(in kg)</label>
                <input type="number" step="any" required value={bmiData.weight} onChange={(e) => setBmiData({ ...bmiData, weight: Number(e.target.value) })}
                    className='border-1 border-slate-400 rounded outline-none px-2 py-1 text-base md:text-lg font-semibold'
                />
            </div>
            <div className='w-full mt-5 flex flex-col justify-between items-center sm:flex-row'>
                <label className='mr-3 text-xl font-semibold text-slate-800'>Height(in meter)</label>
                <input type="number" step="any" required value={bmiData.height} onChange={(e) => setBmiData({ ...bmiData, height: Number(e.target.value) })}
                    className='border-1 border-slate-400 rounded outline-none px-2 py-1 text-base md:text-lg font-semibold'
                />
            </div>
            <div className='w-full mt-7 flex flex-col justify-center items-center text-xl gap-8 sm:flex-row'>
                <button onClick={onClear}
                    type='button' className='w-full py-1 border-2 rounded-xl font-bold cursor-pointer'>Clear</button>
                <button type='submit' className='w-full py-1 border-2 rounded-xl font-bold cursor-pointer'>Calculate BMI</button>
            </div>
        </form>
    );
}

export default BMI;
