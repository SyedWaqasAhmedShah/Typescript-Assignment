let Guest_List :string[] = ['Muzaffer Hussain','Shahzaib Hassan','Abdul Wahab'];
for(let i=0; i<Guest_List.length; i++){
    console.log('Dear Mr. ' + Guest_List[i] + ',\n\nIt Is Our Pleasure To Invite You In Our Party. \n\nThank You!\n\n')
}

let absent_Guest :string = 'Abdul Wahab';
let new_Guest : string ='Fayaz Ali';
Guest_List[0] = new_Guest;

for(let i=0; i<Guest_List.length; i++){
    console.log('Dear Mr. ' + Guest_List[i] + ',\n\nIt Is Our Pleasure To Invite You In Our Party. \n\nThank You!\n\n')
}

console.log(`Mr. ${absent_Guest} is not coming to the party.`)