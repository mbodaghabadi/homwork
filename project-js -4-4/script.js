const inputUser = prompt("write a sentence:");
console.log(inputUser);


function countRepeatedItems(str) {
    const obj = {}
    const strUser = str.replace(/\s/g, '').toLowerCase();
    console.log(strUser);
    for(const x of strUser){
        if(obj[x]){
            obj[x]++;
        }
        else{
            obj[x]=1;
        }
        console.log(obj)
    }
    for(const x in obj){
        if(obj[x]>1){
            console.log(`letter ${x} occurs ${obj[x]}` )
        }
        
    }
}
console.log(countRepeatedItems(inputUser))
