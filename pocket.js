/* hold equipment stats */
var pocketJobStat; var pocketAllStat; var pocketHp; var pocketMp; var pocketAtt; var pocketMAtt;

updatePocketOptions();

/* Update options, change image on selection */
function updatePocketOptions() {
    var selectedPocket = document.getElementById("selectPocket").value;
    var pocketEquipImage = document.getElementById("pocketImage2");

    switch(selectedPocket) {
        case "pinkHolyCup":
            pocketEquipImage.src = "images/01162025.img.info.icon._outlink.png";
            break;
        case "cursedSpellbook":
            pocketEquipImage.src = "images/sbinfo.icon._outlink.png";
            break;
		case "none":
            pocketEquipImage.src = "images/Equip.Equip.Slots.26._outlink.png";
            break;	
    }
	updatePocketStats();
}

function updatePocketStats() {
	var selectedPocket = document.getElementById("selectPocket").value;
	switch(selectedPocket) {
		case "pinkHolyCup":
            pocketJobStat = 0; pocketAllStat = 5; pocketHp = 50; pocketMp = 50; pocketAtt = 5; pocketMAtt = 5;
            break;
        case "cursedSpellbook":
            pocketJobStat = 20; pocketAllStat = 10; pocketHp = 100; pocketMp = 100; pocketAtt = 10; pocketMAtt = 10;
            break;
		case "none":
			pocketJobStat = 0; pocketAllStat = 0; pocketHp = 0; pocketMp = 0; pocketAtt = 0; pocketMAtt = 0;
            break;	
    }
}