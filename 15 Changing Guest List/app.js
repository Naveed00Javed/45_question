var guest_list = ["Rayan", "Rohan", "Anaya"];
// for (let i=0; i<guest_list.length; i++){
//     console.log(`Dear ` + guest_list[i] + `\n\nYou are invited for a dinner tomorrow.\n\nthank you.`);
// }
var not_coming = "Rayan";
var new_guest = "Shanaya";
guest_list[0] = new_guest;
// for (let i=0; i<guest_list.length; i++){
//     console.log(`Dear ${guest_list[i]}\n\nYou are invited for a dinner tomorrow.\n\nthank you.\n\n`);
// }
// console.log(`Mr ${not_coming}, is not coming for dinner tomorrow.`)
guest_list.unshift("Naveed");
guest_list.splice(guest_list.length / 2, 2, "Junaid");
guest_list.push("Shafiq");
// for (let i=0; i<guest_list.length; i++){
//     console.log(`Dear ${guest_list[i]}\n\nYou are invited for a dinner tomorrow.\n\nthank you.\n\n`);
// }
// console.log(`We have found a bigger dinner table so we invited more guest`);
console.log("\n\nunfortunatly we are out of space, so have spase for two guest only.\n\n");
while (guest_list.length > 2) {
    var removed_guest = guest_list.pop();
    console.log("sorry, dear ".concat(removed_guest, ", you are not invited for a dinner tomorrow"));
}
for (var i = 0; i < guest_list.length; i++) {
    console.log("Dear ".concat(guest_list[i], "\n\nYou are all till invited for a dinner tomorrow.\n\nthank you.\n\n"));
}
guest_list.splice(0, 2);
console.log(guest_list);
