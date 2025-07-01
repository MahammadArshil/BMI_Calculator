import React from 'react';

const Details = () => {
    return (
        <div className='border-2 border-blue-500 rounded-xl p-4'>
            <h1 className='text-2xl font-bold mb-2'>🧠BMI Introduction</h1>

            <p className='text-justify mb-2'>
                <span className='font-semibold'>Body Mass Index (BMI)</span> is a measurement of a person's leanness or corpulence based on their height and weight, and is intended to quantify tissue mass. It is widely used as a general indicator of whether a person has a healthy body weight for their height. Specifically, the value obtained from the calculation of BMI is used to categorize whether a person is underweight, normal weight, overweight, or obese depending on what range the value falls between.
            </p>

            <p className='text-justify mb-2'><span className='font-semibold'>BMI</span> is a numerical value calculated using a person's weight and height, and it's used to categorize individuals into different weight categories:</p>

            <div className='w-full flex justify-center items-center'>
                <img src="/equation.png" alt="" className='rounded-2xl' />
            </div>

            <h1 className='text-2xl font-bold my-2'>🧭BMI Categories (as per WHO)</h1>

            <div className='w-full flex justify-center items-center'>
                <table className='border-2 border-black'>
                    <tr className='border-2 border-black bg-blue-700 text-white'>
                        <th className='border-2 border-black p-2'>Classification</th>
                        <th className='border-2 border-black p-2'>BMI Range - kg/m<sup>2</sup></th>
                    </tr>
                    <tr className='border-2 border-black'>
                        <td className='border-2 border-black p-2 font-semibold'>Underweight</td>
                        <td className='border-2 border-black p-2'>Less than 18.5</td>
                    </tr>
                    <tr className='border-2 border-black'>
                        <td className='border-2 border-black p-2 font-semibold'>Normal weight</td>
                        <td className='border-2 border-black p-2'>18.5 - 24.9</td>
                    </tr>
                    <tr className='border-2 border-black'>
                        <td className='border-2 border-black p-2 font-semibold'>Overweight</td>
                        <td className='border-2 border-black p-2'>25.0 - 29.9</td>
                    </tr>
                    <tr className='border-2 border-black'>
                        <td className='border-2 border-black p-2 font-semibold'>Obese Class I</td>
                        <td className='border-2 border-black p-2'>30.0 - 34.9</td>
                    </tr>
                    <tr className='border-2 border-black'>
                        <td className='border-2 border-black p-2 font-semibold'>Obese Class II</td>
                        <td className='border-2 border-black p-2'>35.0 - 39.9</td>
                    </tr>
                    <tr className='border-2 border-black'>
                        <td className='border-2 border-black p-2 font-semibold'>Obese Class III</td>
                        <td className='border-2 border-black p-2'>40.0 and above</td>
                    </tr>
                </table>
            </div>
        </div>
    );
}

export default Details;
