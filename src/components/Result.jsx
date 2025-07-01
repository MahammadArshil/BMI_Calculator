import { useEffect, useState } from 'react';
import { buildStyles, CircularProgressbar } from 'react-circular-progressbar';

const Result = ({ result, bmiData }) => {
    const [classification, setClassification] = useState('');
    const [classificationColor, setClassificationColor] = useState('');
    const [healthyWeight, setHealthyWeight] = useState({
        minWeight:null,
        maxWeight:null,
    });
    useEffect(() => {
        if (result < 18.5) {
            setClassification('Underweight');
            setClassificationColor('text-blue-700');
        } else if (result < 25) {
            setClassification('Normal weight');
            setClassificationColor('text-green-700');
        } else if (result < 30) {
            setClassification('Overweight');
            setClassificationColor('text-yellow-600');
        } else if (result < 35) {
            setClassification('Obese Class I');
            setClassificationColor('text-orange-700');
        } else if (result < 40) {
            setClassification('Obese Class II');
            setClassificationColor('text-red-700');
        } else {
            setClassification('Obese Class III');
            setClassificationColor('text-red-800');
        }
        setHealthyWeight({
            minWeight: 18.5 * bmiData.height * bmiData.height,
            maxWeight: 25 * bmiData.height * bmiData.height,
        })
    }, [result, bmiData.height]);

    return (
        <div className='w-[90%] mt-4 border-2 border-black p-5 rounded-xl sm:w-full'>
            <h1 className='flex justify-center items-center text-2xl font-bold mb-3'>📊Result</h1>
            {
                !result ? <p className='text-red-700 mt-8 p-5'>*Enter Your Data</p> :
                    <>
                        <div className='flex flex-col justify-center items-center gap-10 mb-4 md:flex-row'>
                            <div className='h-[150px] w-[150px]'>
                                {<CircularProgressbar
                                    value={result}
                                    maxValue={50}
                                    text={`${result.toFixed(1)}`}
                                    styles={buildStyles({
                                        pathColor: result < 18.5 ? 'blue' : result < 25 ? 'green' : result < 30 ? 'orange' : 'red',
                                        textColor: '#333',
                                        trailColor: '#eee',
                                        strokeLinecap: 'butt'
                                    })}
                                />}
                            </div>
                            <p className='font-semibold text-md'>
                                BMI = {result} kg/m<sup>2</sup>
                                <br /><span className={`ml-3 ${classificationColor}`}>( {classification} )</span>
                            </p>
                        </div>
                        <ul className='list-disc ml-4.5'>
                            <li><b>Healthy BMI range:</b> 18.5 kg/m<sup>2</sup> - 25 kg/m<sup>2</sup></li>
                            <li><b>Healthy weight for the height:</b> {healthyWeight.minWeight.toFixed(2)} Kg - {healthyWeight.maxWeight.toFixed(2)} Kg</li>
                            {/* <li><b></b></li> */}
                        </ul>
                    </>
            }
        </div>
    );
}

export default Result;
