let max = Number.MAX_SAFE_INTEGER;
console.log(max);
let s = max.toFixed(0);
console.log(s);
let s1 = '';
for (let i=0; i<s.length; i++) {
  let index = s.length - i - 1;
  if(index<(s.length-1) && (index % 3) ==0) {
    s1 = '.' + s1;
  }
  s1 = s.charAt(index) + s1;
}
console.log(s1);
