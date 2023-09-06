

const myNumber1 = [];
while(true){
    const response = prompt('Enter your number');

    if( response.toLowerCase().trim() === 'q'){
        break;
    }

    myNumber1.push(response);
}

const myNnumber2=[];
while(true){
    const response = prompt('Enter your number');

    if( response.toLowerCase().trim() === 'q'){
        break;
    }

    myNnumber2.push(response);
}

console.log(myNumber1);
console.log(myNnumber2);

function diffrencearray(arr1,arr2){
    const filteredarray1 =arr1.filter(value => !arr2.includes(value));
    const filteredarray2 =arr2.filter(value => !arr1.includes(value));
    // console.log(filteredarray1);
    // console.log(filteredarray2);
    return filteredarray1.concat(filteredarray2)
}
console.log(diffrencearray(myNumber1,myNnumber2)) 