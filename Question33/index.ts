let number=[1,2,3,4,5,6,7,8,9]

for(let one_number of number){
    let oridinalNum: string;
    if(one_number ===1){
        oridinalNum ="st"
    }else if(one_number === 2){
        oridinalNum ="nd"
    }else if(one_number === 3){
        oridinalNum ="rd"
    }else{
        oridinalNum="th"
    }
    console.log(`${one_number}${oridinalNum} this is oridinal number`)
}