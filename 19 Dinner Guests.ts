let Guest_List :string[] = ['Muzaffer Hussain','Shahzaib Hassan','Abdul Wahab'];
//for(let i=0; i<Guest_List.length; i++){
//  console.log('Dear Mr. ' + Guest_List[i] + ',\n\nIt Is Our Pleasure To Invite You In Our Party. \n\nThank You!\n\n')
//}
let absent_Guest :string = 'Abdul Wahab';
let new_Guest : string ='Fayaz Ali';
Guest_List[0] = new_Guest;
//for(let i=0; i<Guest_List.length; i++){
//  console.log('Dear Mr. ' + Guest_List[i] + ',\n\nIt Is Our Pleasure To Invite You In Our Party. \n\nThank You!\n\n')
//}
console.log(`Mr. ${absent_Guest} is not coming to the party.`);
console.log('Good News! We Find Big Table So We Are Inviting 3 More Guests.')
Guest_List.unshift('Hasnain');
Guest_List.splice(2 , 0 , 'Zakir');
Guest_List.push('Abdul Hanan');
//for(let i=0; i<Guest_List.length; i++){
//  console.log('Dear Mr. ' + Guest_List[i] + ',\n\nIt Is Our Pleasure To Invite You In Our Party. \n\nThank You!\n\n')
//}
//console.log('\nsorry we can not arrange big table, only two peoples will be invited.');
while(Guest_List.length> 2){
let remove_Guest = Guest_List.pop();
//console.log(`Sorry Mr. ${remove_Guest}, You are not invited for Dinner.`);
}
//for(let i=0; i<Guest_List.length; i++){
//  console.log('Dear Mr. ' + Guest_List[i] + ',\n\nYou are still invited. \n\nThank You!\n\n')
//}

Guest_List.splice(0, 2);
console.log(Guest_List);


// Exercise 19

//print a message indicating the number of people you are inviting to dinner.

console.log(`Total number of Guest Are: ${Guest_List.length}`);