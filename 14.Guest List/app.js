var guest_list = ["Ali", "Saad", "Raza", "Sara", "Fahad", "Anus", "Haris"];
var Absent_peron = "Anus";
var new_guest = "Haider";
guest_list[1] = new_guest;
for (var i = 0; i < guest_list.length; i++) {
    console.log("Respected Sir/Madam" + guest_list[i] + ",\nI invite you on my Birthday.\n\nTHANK YOU");
}
guest_list.unshift(`Abdullah`, `Ahad`, `Laiba`);
for (var i = 0; i < guest_list.length; i++){
    console.log("Respected Sir/Madam" + guest_list[i] + ",\nI invite you on my Birthday.\n\nTHANK YOU");
}
