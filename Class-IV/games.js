let games = ["basketball", "golf", "hockey","baseball", "tennis", "cricket" ];
// for (let i=0; i< games.length; i++){
//     if (games[i]=="cricket"){
//     console.log('cricket exist');
//     }
//  else{
//    console.log('cricket does not exist');
// }
// }
games.pop();
console.log(games);
games.push('rugby');
console.log(games);
games.shift();
console.log(games);
games.unshift('icehockey');
console.log(games);
games.splice(3,0,"a", "b");
console.log(games);
