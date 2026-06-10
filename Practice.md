const reverseString=(word)=>{
   let bag=""
  for(let i=word.length-1;i>=0;i--){
  bag+=word[i]
  }
 
  return bag;
}

console.log(reverseString("hello")); // Should output: "olleh"
console.log(reverseString("mern"));  // Should output: "nrem"




const findSecondMax=(arr)=>{
    let uniquearr=[]
    for(let char of arr){
        if(!uniquearr.includes(char)){
            uniquearr.push(char)
        }
        
    }
   sorted=uniquearr.sort((a,b)=>a-b)
   return sorted[sorted.length-2]
   

}
console.log(findSecondMax([10, 5, 20, 8]));  // Should output: 10
console.log(findSecondMax([3, 12, 9, 12, 5])); // Should output: 9


