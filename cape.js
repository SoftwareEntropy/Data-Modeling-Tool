/* hold equipment stats */
var capeJobStat = 0; var capeAllStat = 0; var capeHp = 0; var capeMp = 0; var capeAtt = 0; var capeMAtt = 0;

/* Update star force options, change image on selection */
function updateCapeStarForceOptions() {
    var selectedCape = document.getElementById("selectCape").value;
    var starForceSelect = document.getElementById("capeStarForce");
    var capeEquipImage = document.getElementById("capeImage2");
    starForceSelect.innerHTML = "";
    var options = [25, 24, 23, 22, 21, 20, 19, 18, 17, 16, 15, 14, 13, 12, 11, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1, 0];
    switch(selectedCape) {
        case "tyrantCape":
            options = [15, 14, 13, 12, 11, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1, 0];
            capeEquipImage.src = "images/common/01102482.img.info.icon._outlink.png";
            break;
        case "absolabCape":
            capeEquipImage.src = "images/common/01102794.img.info.icon._outlink.png";
            break;
		case "arcaneCape":
            capeEquipImage.src = "images/common/01102941.img.info.icon._outlink.png";
            break;
		case "none":
            options = [0];
            capeEquipImage.src = "images/UIelements/Equip.Equip.Slots.9._outlink.png";
            break;	
    }
    for (var i = 0; i < options.length; i++) {
        var option = document.createElement("option");
        option.text = options[i];
        option.value = options[i];
        starForceSelect.add(option);
    }
	updateCapeStarForceStats();
}

/* Calculate and fetch stats */
function updateCapeStarForceStats() {
	var selectedCape = document.getElementById("selectCape").value;
	var starForceSelect = document.getElementById("capeStarForce").value;
	switch(selectedCape) {
		/* (itemLevel, starForceLevel, itemType, itemJobStat, itemAllStat, itemHp, itemMP, itemAttack, itemMagAttack) */
		case "tyrantCape":
            output = getItemStats(150, starForceSelect, "superior", 0, 50, 0, 0, 30, 30);
            break;
        case "absolabCape":
            output = getItemStats(160, starForceSelect, "cape", 0, 15, 0, 0, 2, 2);
            break;
		case "arcaneCape":
            output = getItemStats(200, starForceSelect, "cape", 0, 35, 0, 0, 6, 6);
            break;
		case "none":
            output = getItemStats(0, starForceSelect, "cape", 0, 0, 0, 0, 0, 0);
            break;	
    }
	capeJobStat = parseInt(output.jobStat);
	capeAllStat = parseInt(output.allStat);
	capeHp = parseInt(output.hp);
	capeMp = parseInt(output.mp);
	capeAtt = parseInt(output.att);
	capeMAtt = parseInt(output.mAtt);
}