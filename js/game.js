//Cookie Variables
var cookies = 0;
var cPerSec = 0;
var amountPerClick = 1;

//Upgrade Variables
var cursorEffect = 1;
var cursorCount = 0;
var cursorCost = 15;

var grandmaEffect = 3;
var grandmaCount = 0;
var grandmaCost = 100;

var farmEffect = 8;
var farmCount = 0;
var farmCost = 1100;

var mineEffect = 47;
var mineCount = 0;
var mineCost = 12000;

var factoryEffect = 260;
var factoryCount = 0;
var factoryCost = 130000;

var bankEffect = 1400;
var bankCount = 0;
var bankCost = 1400000;

var templeEffect = 7800;
var templeCount = 0;
var templeCost = 20000000;

var wizardEffect = 44000;
var wizardCount = 0;
var wizardCost = 330000000;

var shipmentEffect = 260000;
var shipmentCount = 0;
var shipmentEffect = 5100000000;

var alchemyEffect = 1600000;
var alchemyCount = 0;
var alchemyCost = 75000000000;

var portalEffect = 10000000;
var portalCount = 0;
var portalCost = 1000000000000;

var timeEffect = 65000000;
var timeCount = 0;
var timeCost = 14000000000000;

var antiEffect = 430000000;
var antiCount = 0;
var antiCost = 170000000000000;

var prismEffect = 2900000000;
var prismCount = 0;
var prismCost = 2100000000000000;

var chanceEffect = 21000000000;
var chanceCount = 0;
var chanceCost = 26000000000000000;

//Starting Commands
Start();
cookiesPerSecond();

//Update Functions
function Start(){
	updateCookieText();
	document.getElementById("cpc").innerHTML = "<b style=\"color:purple;\">Cookies per click: </b>" + amountPerClick;
	cPerSec = (cursorEffect * cursorCount);
	document.getElementById("cps").innerHTML = "<b style=\"color:purple;\">Cookies per second: </b>" + cPerSec;
}

function updateCookieText(){
	var temp = round(cookies, 1);
	document.getElementById("cookieText").innerHTML = temp;
	document.getElementById("title").innerHTML = "Cookie Clicker &bull; " + temp;
}

function clicked(){
	cookies += amountPerClick;
	updateCookieText();
}

function cookiesPerSecond(){
	calculateCPS();
	cookies += cPerSec;
	updateCookieText();
}

setInterval(cookiesPerSecond, 1000);

function updateCPSText(){
	calculateCPS();
	document.getElementById("cps").innerHTML = "<b style=\"color:purple;\">Cookies per second: </b>" + cPerSec;
}

function calculateCPS(){
	cPerSec = round(cursorEffect * cursorCount,1) + round(grandmaEffect * grandmaCount,1) + round(farmEffect * farmCount,1) + round(mineEffect * mineCount,1) + round(factoryEffect * factoryCount,1) + round(bankEffect * bankCount,1) + round(templeEffect * templeCount,1) + round(wizardEffect * wizardCount,1) + round(shipmentEffect * shipmentCount,1) + round(alchemyEffect * alchemyCount,1) + round(portalEffect * portalCount,1) + round(timeEffect * timeCount,1) + round(antiEffect * antiCount,1) + round(prismEffect * prismCount,1) + round(chanceEffect * chanceCount,1);
}

function shopButtonsToDanger(){
	document.getElementById("cusbutton").className = "btn btn-danger btn-block";
	document.getElementById("grabutton").className = "btn btn-danger btn-block";
	document.getElementById("farbutton").className = "btn btn-danger btn-block";
	document.getElementById("minbutton").className = "btn btn-danger btn-block";
	document.getElementById("facbutton").className = "btn btn-danger btn-block";
	document.getElementById("banbutton").className = "btn btn-danger btn-block";
	document.getElementById("tembutton").className = "btn btn-danger btn-block";
	document.getElementById("wizbutton").className = "btn btn-danger btn-block";
	document.getElementById("shibutton").className = "btn btn-danger btn-block";
	document.getElementById("alcbutton").className = "btn btn-danger btn-block";
	document.getElementById("porbutton").className = "btn btn-danger btn-block";
	document.getElementById("timbutton").className = "btn btn-danger btn-block";
	document.getElementById("antbutton").className = "btn btn-danger btn-block";
	document.getElementById("pributton").className = "btn btn-danger btn-block";
	document.getElementById("chabutton").className = "btn btn-danger btn-block";
}

function shopDisplayUpdate(type){
	if (type == "cursor"){
		document.getElementById("upDisplay").innerHTML = "<b>Cursor Upgrades</b><br/><p>Currently your cursors produce <strong>" + cursorEffect + "</strong> cookies each, with a combined total of <strong>" + round(cursorEffect * cursorCount, 1) + "</strong> cookies per second.<br/>You have <b> " + cursorCount + "</b> total cursors.<br/><br/><button class=\"btn btn-success\" onclick=\"boughtCursor()\"\>Cost: " + cursorCost + "</button><br/><p id=\"cantafford\"></p>";
	} else if (type == "grandma") {
		if (cursorCount > 0){
			document.getElementById("upDisplay").innerHTML = "<b>Grandma Upgrades</b><br/><p>Currently your grandmas produce <strong>" + grandmaEffect + "</strong> cookies each, with a combined total of <strong>" + (grandmaEffect * grandmaCount) + "</strong> cookies per second.<br/>You have <b> " + grandmaCount + "</b> total grandmas.<br/><br/><button class=\"btn btn-success\" onclick=\"boughtGrandma()\">Cost: " + grandmaCost + "</button><br/><p id=\"cantafford\"></p>";
		} else {
			document.getElementById("upDisplay").innerHTML = "<b>Grandma Upgrades</b><br/><p>Currently your grandmas produce <strong>" + grandmaEffect + "</strong> cookies each, with a combined total of <strong>" + (grandmaEffect * grandmaCount) + "</strong> cookies per second.<br/>You have <b> " + grandmaCount + "</b> total grandmas.<br/><br/><button class=\"btn btn-default\">You must have at least 1 cursor!</button><br/><p id=\"cantafford\"></p>";
		}
	} else if (type == "farm") {
		if (grandmaCount > 0){
			document.getElementById("upDisplay").innerHTML = "<b>Farm Upgrades</b><br/><p>Currently your farms produce <strong>" + farmEffect + "</strong> cookies each, with a combined total of <strong>" + (farmEffect * farmCount) + "</strong> cookies per second.<br/>You have <b> " + farmCount + "</b> total farms.<br/><br/><button class=\"btn btn-success\" onclick=\"boughtFarm()\">Cost: " + farmCost + "</button><br/><p id=\"cantafford\"></p>";
		} else {
			document.getElementById("upDisplay").innerHTML = "<b>Farm Upgrades</b><br/><p>Currently your farms produce <strong>" + farmEffect + "</strong> cookies each, with a combined total of <strong>" + (farmEffect * farmCount) + "</strong> cookies per second.<br/>You have <b> " + farmCount + "</b> total farms.<br/><br/><button class=\"btn btn-default\">You must have at least 1 grandma!</button><br/><p id=\"cantafford\"></p>";
		}
	} else if (type == "mine"){
		if (farmCount > 0){
			document.getElementById("upDisplay").innerHTML = "<b>Mine Upgrades</b><br/><p>Currently your mines produce <strong>" + mineEffect + "</strong> cookies each, with a combined total of <strong>" + (mineEffect * mineCount) + "</strong> cookies per second.<br/>You have <b> " + mineCount + "</b> total mines.<br/><br/><button class=\"btn btn-success\" onclick=\"boughtMine()\">Cost: " + mineCost + "</button><br/><p id=\"cantafford\"></p>";
		} else {
			document.getElementById("upDisplay").innerHTML = "<b>Mine Upgrades</b><br/><p>Currently your mines produce <strong>" + mineEffect + "</strong> cookies each, with a combined total of <strong>" + (mineEffect * mineCount) + "</strong> cookies per second.<br/>You have <b> " + mineCount + "</b> total mines.<br/><br/><button class=\"btn btn-default\">You must have at least 1 farm!</button><br/><p id=\"cantafford\"></p>";
		}
	} else if (type == "factory"){
		if (mineCount > 0){
			document.getElementById("upDisplay").innerHTML = "<b>Factory Upgrades</b><br/><p>Currently your factories produce <strong>" + factoryEffect + "</strong> cookies each, with a combined total of <strong>" + (factoryEffect * factoryCount) + "</strong> cookies per second.<br/>You have <b> " + factoryCount + "</b> total factories.<br/><br/><button class=\"btn btn-success\" onclick=\"boughtFactory()\">Cost: " + factoryCost + "</button><br/><p id=\"cantafford\"></p>";
		} else {
			document.getElementById("upDisplay").innerHTML = "<b>Factory Upgrades</b><br/><p>Currently your factories produce <strong>" + factoryEffect + "</strong> cookies each, with a combined total of <strong>" + (factoryEffect * factoryCount) + "</strong> cookies per second.<br/>You have <b> " + factoryCount + "</b> total factories.<br/><br/><button class=\"btn btn-default\">You must have at least 1 mine!</button><br/><p id=\"cantafford\"></p>";
		}
	} else if (type == "bank"){
		if (factoryCount > 0){
			document.getElementById("upDisplay").innerHTML = "<b>Bank Upgrades</b><br/><p>Currently your banks produce <strong>" + bankEffect + "</strong> cookies each, with a combined total of <strong>" + (bankEffect * bankCount) + "</strong> cookies per second.<br/>You have <b> " + bankCount + "</b> total banks.<br/><br/><button class=\"btn btn-success\" onclick=\"boughtBank()\">Cost: " + bankCost + "</button><br/><p id=\"cantafford\"></p>";
		} else {
			document.getElementById("upDisplay").innerHTML = "<b>Bank Upgrades</b><br/><p>Currently your banks produce <strong>" + bankEffect + "</strong> cookies each, with a combined total of <strong>" + (bankEffect * bankCount) + "</strong> cookies per second.<br/>You have <b> " + bankCount + "</b> total banks.<br/><br/><button class=\"btn btn-default\">You must have at least 1 factory!</button><br/><p id=\"cantafford\"></p>";
		}
	} else if (type == "temple"){
		if (bankCount > 0){
			document.getElementById("upDisplay").innerHTML = "<b>Temple Upgrades</b><br/><p>Currently your temples produce <strong>" + templeEffect + "</strong> cookies each, with a combined total of <strong>" + (templeEffect * templeCount) + "</strong> cookies per second.<br/>You have <b> " + templeCount + "</b> total temples.<br/><br/><button class=\"btn btn-success\" onclick=\"boughtTemple()\">Cost: " + templeCost + "</button><br/><p id=\"cantafford\"></p>";
		} else {
			document.getElementById("upDisplay").innerHTML = "<b>Temple Upgrades</b><br/><p>Currently your temples produce <strong>" + templeEffect + "</strong> cookies each, with a combined total of <strong>" + (templeEffect * templeCount) + "</strong> cookies per second.<br/>You have <b> " + templeCount + "</b> total temples.<br/><br/><button class=\"btn btn-default\">You must have at least 1 bank!</button><br/><p id=\"cantafford\"></p>";
		}
	}
}
//Upgrade Functions
//Cursors
function cursorNav(){
	shopDisplayUpdate("cursor");
	shopButtonsToDanger();
	document.getElementById("cusbutton").className = "btn btn-success btn-block"
}

function emptyCantAfford(){
	document.getElementById("cantafford").innerHTML = "";
}

function boughtCursor(){
	if (cookies >= cursorCost){
		cookies -= cursorCost;
		updateCookieText();
		cursorCount += 1;
		cursorCost = round(cursorCost * 1.15, 0);
		shopDisplayUpdate("cursor");
		updateCPSText();
	} else {
		document.getElementById("cantafford").innerHTML = "<b>You cannot afford this item yet! You need " + round((cursorCost - cookies),1) + " more cookies!</b>";
		setTimeout(emptyCantAfford, 1000);
	}
}
//Grandmas
function grandmaNav(){
	shopDisplayUpdate("grandma");
	shopButtonsToDanger();
	document.getElementById("grabutton").className = "btn btn-success btn-block"
}

function boughtGrandma(){
	if (cookies >= grandmaCost){
		cookies -= grandmaCost;
		updateCookieText();
		grandmaCount += 1;
		grandmaCost = round(grandmaCost * 1.15, 0);
		shopDisplayUpdate("grandma");
		updateCPSText();
	} else {
		document.getElementById("cantafford").innerHTML = "<b>You cannot afford this item yet! You need " + round((grandmaCost - cookies),1) + " more cookies!</b>";
		setTimeout(emptyCantAfford, 1000);
	}
}
//Farms
function farmNav(){
	shopDisplayUpdate("farm");
	shopButtonsToDanger();
	document.getElementById("farbutton").className = "btn btn-success btn-block"
}

function boughtFarm(){
	if (cookies >= farmCost){
		cookies -= farmCost;
		updateCookieText();
		farmCount += 1;
		farmCost = round(farmCost * 1.15, 0);
		shopDisplayUpdate("farm");
		updateCPSText();
	} else {
		document.getElementById("cantafford").innerHTML = "<b>You cannot afford this item yet! You need " + round((farmCost - cookies),1) + " more cookies!</b>";
		setTimeout(emptyCantAfford, 1000);
	}
}
//Mines
function mineNav(){
	shopDisplayUpdate("mine");
	shopButtonsToDanger();
	document.getElementById("minbutton").className = "btn btn-success btn-block"
}

function boughtMine(){
	if (cookies >= mineCost){
		cookies -= mineCost;
		updateCookieText();
		mineCount += 1;
		mineCost = round(mineCost * 1.15, 0);
		shopDisplayUpdate("mine");
		updateCPSText();
	} else {
		document.getElementById("cantafford").innerHTML = "<b>You cannot afford this item yet! You need " + round((mineCost - cookies),1) + " more cookies!</b>";
		setTimeout(emptyCantAfford, 1000);
	}
}
//Factories
function factoryNav(){
	shopDisplayUpdate("factory");
	shopButtonsToDanger();
	document.getElementById("facbutton").className = "btn btn-success btn-block";
}

function boughtFactory(){
	if (cookies >= factoryCost){
		cookies -= factoryCost;
		updateCookieText();
		factoryCount += 1;
		factoryCost = round(factoryCost * 1.15, 0);
		shopDisplayUpdate("factory");
		updateCPSText();
	} else {
		document.getElementById("cantafford").innerHTML = "<b>You cannot afford this item yet! You need " + round((factoryCost - cookies),1) + " more cookies!</b>";
		setTimeout(emptyCantAfford, 1000);
	}
}
//Banks
function bankNav(){
	shopDisplayUpdate("bank");
	shopButtonsToDanger();
	document.getElementById("banbutton").className = "btn btn-success btn-block";
}

function boughtBank(){
	if (cookies >= bankCost){
		cookies -= bankCost;
		updateCookieText();
		bankCount += 1;
		bankCost = round(bankCost * 1.15, 0);
		shopDisplayUpdate("factory");
		updateCPSText();
	} else {
		document.getElementById("cantafford").innerHTML = "<b>You cannot afford this item yet! You need " + round((bankCost - cookies),1) + " more cookies!</b>";
		setTimeout(emptyCantAfford, 1000);
	}
}
//Temples
function templeNav(){
	shopDisplayUpdate("temple");
	shopButtonsToDanger();
	document.getElementById("tembutton").className = "btn btn-success btn-block";
}

function boughtTemple(){
	if (cookies >= templeCost){
		cookies -= templeCost;
		updateCookieText();
		templeCount += 1;
		templeCost = round(templeCost * 1.15, 0);
		shopDisplayUpdate("temple");
		updateCPSText();
	} else {
		document.getElementById("cantafford").innerHTML = "<b>You cannot afford this item yet! You need " + round((templeCost - cookies),1) + " more cookies!</b>";
		setTimeout(emptyCantAfford, 1000);
	}
}
//Wizard Towers
//Shipments
//Alchemy Labs
//Portals
//Time Machines
//Antimatter Condensers
//Prisms
//Chancemakers

//Utility functions
function round(value, precision) {
    var multiplier = Math.pow(10, precision || 0);
    return Math.round(value * multiplier) / multiplier;
}
