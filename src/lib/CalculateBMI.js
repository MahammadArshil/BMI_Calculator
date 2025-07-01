const CalculateBMI = (data) =>{
    const answer = (data.weight)/((data.height)**2);
    return answer;
}


export default CalculateBMI;