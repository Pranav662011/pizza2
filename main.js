menu_list_array = ["Veg Margherita Pizza",
 "Chiken Tandoori Pizza",
  "Veg Supreme Pizza",
   "Paneer Tikka Pizza",
    "Delux Veggi Pizza",
     "Veg Extravaganza Pizza", //add more items];

function getmenu(){
var htmldata;
htmldata="<ol class="menullist"">
menu_list_array.sort();
for (var i=0;i<menu_list_array.lenght;i++){
     htmldata=htmldata+"<li>"+menu_list_array[i]+"</li>"
}
     
}

htmldata=htmldata+"</ol>"
document.getElementById("display_menu").innerHTML=htmldata;

function add_item(){
var htmldata;
var item=document.getElementById("add_item").value;
menu_list_array.sort();
htmldata="<section class="cards>"
for (var i=0;i<menu_list_array.lenght;i++){
     htmldata=htmldata+"<div class="card>"
     +img src="pizzaImg.png"
     menu_list_array[i]+"</div>"
}
htmldata=htmldata+"<s/ection>
document.getElementById("display_addmenu").innerHTML=htmldata;
}

function add_top(){
var item=document.getElementById("add_item").value;
menu_list_array.push(item);
add_item();
}