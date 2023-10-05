let array = [1,2,3,4,5,6,6,-1]
let number= 0
 let cute = []
 if(number!=0){
function sp(array,number){
    
    if(array.length >= 1){
        cute.push(array.splice(0,number))
        sp(array,number)
    }
    return cute;
}

console.log(sp(array,number))
}else{
console.log(array)
}