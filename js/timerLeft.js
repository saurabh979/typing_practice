// var i=0
// var hello=setInterval(function(){
//   i+=.2
//   console.log(i);
// },200)
// if (i>10){
//   clearInterval(hello)
// }
// console.log(saur)
//
// let saur=function(){
//   return 5;
// }
// var a=true;
// var check=new Promise((resolve,reject)=>{
//     if (a){
//       resolve('start')
//     }
//     else{
//       reject('restart')
//     }
// });
// check.then((succes)=>{
//   console.log(succes)
// }).catch((fail)=>{
//   console.log(fail)
// })
// var arr=[1,"saua",3,4,5]
// // for (let i in arr){
// //   console.log(arr[i])
// // }
// var v1=arr.length
// // console.log(v1)
// var v1 =[3,4,2,2,4]
// var v2=[3 ,2 ,2 ,7]
// v1.sort((a,b)=>{
//         return a-b
//         print(v1)
//     })
//     var n= v1.length
//     v2.sort((a,b)=>{
//         return a-b
//     })
//     var m=v2.length
//     var i=0
//     var j=0
//     var ans=[]
//     // console.log(v1)
//     // console.log(v2)
//     console.log(n)
//     if (i<n){
//       console.log('ss')
//     }
//     while (i<n && j<m){
//         console.log(v1[i])
//         if (v1[i]==v2[j]){
//             ans.push(v1[i])
//             // console.log('sss')
//             i++
//             j++
//         }
//         else if (v1[i]<v2[j]){
//             i++
//         }
        // else{
//             j++
//         }
//     }
//     ans.sort((a,b)=>{
//         return a-b
//     })
//     console.log(ans)
var temp=10
var account = new Promise((resolve, reject)=>{
  if (temp>10){
    resolve('hello')}
  else{
    reject('new')

    }
});
account.then((succes)=>{
  // console.log();
  console.log(succes)

}).catch((fail)=>{
  console.log(fail)
})
// check.then((succes)=>{
//   console.log(succes)
// }).catch((fail)=>{
//   console.log(fail)
// })
