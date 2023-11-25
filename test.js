// Q1
// var num =[2,7,11,15];
// target=9;
// for (let i=0; i<=num.length; i++){
// for(let j=0;j<=num.length; j++){
//     if(num[i]+num[j]==target){
//         return [i,j]
//     }
// }
// }

// Q3
// var emptyarray=[];
// var num=122;
// var reversenum=[];

// for (var i=0;i< num.length;i++){
//     emptyarray.push(num[i])
//     reversenum=reversenum+emptyarray.pop();
// }
// if(reversenum=num){
//     console.log(reversenum,"is palindrome")
// }
// else{
//     console.log(reversenum,"is not palindrome")
// }

// Q6
// const missing=[2,4,1,3,6,7,8,]
// missing.sort()

// console.log(missing)

// function findmissing(array){
//     let missingNo = array[0]
//     for (var i=0; i< array.length; i++){
//         if(missingNo !== array[i]){
//             break;
//             console.log(missingNo)
//         }
//         missingNo= missingNo+1
//     }
//     return missingNo
// }
// console.log(findmissing(missing))



//Q7
// var arr=[1,1,2,2,3,4,]
// array.sort()
// function removeduplicates(array){
//      for (var i=0;i<arr.length;i++){
//         for (var j=i+1; j<Array.length; j++){
//             if (!newarray.includes(array[i])){
//                 newarray.push(array[i])
//             }
//         }
//      }
//      return newarray;
// }

// console.log(removeduplicates(array))