const myName = []
while (true) {
    const names = prompt('please enter name');
    myName.push(names);

    if (names === 'stop') {
        break;
    }

}
myName.pop();
console.log(myName);


function joinTogether(joinNames) {
    const length=joinNames.length


    if(length === 0){
        return 'nobody like this';
     }

     else if(length === 1){
        return `${joinNames[0]} likes this.`
     }
     
     

    else if (length === 2) {
        return `${joinNames[0]} and ${joinNames[1]} like this.`
    }

    else {
            const lastTwoNames = joinNames.slice(-2).join(' and ');
            const remainingNames = joinNames.slice(0, -2).join(', ');
            return remainingNames + ', ' + lastTwoNames + ' like this';
     
        }


}


console.log(joinTogether(myName));
