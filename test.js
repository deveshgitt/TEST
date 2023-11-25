Q1
var num =[2,7,11,15];
 target=9;
 for (let i=0; i<=num.length; i++){
for(let j=0;j<=num.length; j++){
     if(num[i]+num[j]==target){
        return [i,j]
     }
 }
 }