let n = [4, 2, 1, 5];

n = n.sort();


let tempsum = 0;
for (let i = n[0]; i <= n[n.length - 1]; i++) {
  tempsum = tempsum + i;

}

finalsum = 0;
for (let i = 0; i <= n.length - 1; i++) {
  finalsum = finalsum + n[i];
}

console.log(tempsum - finalsum);


