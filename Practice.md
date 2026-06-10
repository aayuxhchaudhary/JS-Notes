const reverseString=(word)=>{
   let bag=""
  for(let i=word.length-1;i>=0;i--){
  bag+=word[i]
  }
 
  return bag;
}

console.log(reverseString("hello")); // Should output: "olleh"
console.log(reverseString("mern"));  // Should output: "nrem"



