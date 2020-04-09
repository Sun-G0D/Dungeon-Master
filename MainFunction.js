var money = 0;
var random = Math.floor(Math.random() * 10);
var actions = ["shine some shoes", "sell some gaymer juice", "trade some 	stock options", "offer some microsoft tech support", "mug some poor 	kid", "ring of decades in stock", "use ur 60 fps webcam", "sell some 	toilet paper", "make a roblox vid", "sell durgs"];

function Randomize() {
	random = Math.floor(Math.random() * 10);
}

function MainButton() {
	money += 1;
	Randomize();
	document.getElementById("action").innerHTML = actions[random];
	document.getElementById("MoneyDisplay").innerHTML = "ur money:" + 	money;
}

