/* hold equipment stats */
var earJobStat = 0; var earAllStat = 0; var earHp = 0; var earMp = 0; var earAtt = 0; var earMAtt = 0;

/* Update star force options, change image on selection */
function updateEarStarForceOptions() {
    var selectedEar = document.getElementById("selectEar").value;
    var starForceSelect = document.getElementById("earStarForce");
    var earEquipImage = document.getElementById("earImage2");
    starForceSelect.innerHTML = "";
    var options = [25, 24, 23, 22, 21, 20, 19, 18, 17, 16, 15, 14, 13, 12, 11, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1, 0];;
    switch(selectedEar) {
        case "superiorGolluxEarrings":
            earEquipImage.src = "images/common/01032223.img.info.icon._outlink.png";
            break;
        case "sweetwaterEarrings":
            earEquipImage.src = "images/common/01032224.img.info.icon._outlink.png";
            break;
		case "estellaEarrings":
            earEquipImage.src = "images/common/01032330.img.info.icon._outlink.png";
            break;
        case "commandingForceEarrings":
            earEquipImage.src = "images/common/01032316.img.info.icon._outlink.png";
            break;
		case "none":
            options = [0];
            earEquipImage.src = "images/UIelements/Equip.Equip.Slots.4._outlink.png";
            break;	
    }
    for (var i = 0; i < options.length; i++) {
        var option = document.createElement("option");
        option.text = options[i];
        option.value = options[i];
        starForceSelect.add(option);
    }
	updateEarStarForceStats();
}

/* Calculate and fetch stats */
function updateEarStarForceStats() {
	var selectedEar = document.getElementById("selectEar").value;
	var starForceSelect = document.getElementById("earStarForce").value;
	switch(selectedEar) {
		/* (itemLevel, starForceLevel, itemType, itemJobStat, itemAllStat, itemHp, itemMP, itemAttack, itemMagAttack) */
		case "superiorGolluxEarrings":
            output = getItemStats(150, starForceSelect, "accessory", 0, 15, 150, 150, 10, 10);
            break;
        case "sweetwaterEarrings":
            output = getItemStats(160, starForceSelect, "accessory", 0, 10, 240, 240, 0, 0);
            break;
		case "estellaEarrings":
            output = getItemStats(160, starForceSelect, "accessory", 0, 7, 300, 300, 2, 2);
            break;
        case "commandingForceEarrings":
            output = getItemStats(200, starForceSelect, "accessory", 0, 7, 500, 500, 5, 5);
            break;
		case "none":
            output = getItemStats(0, starForceSelect, "accessory", 0, 0, 0, 0, 0, 0);
            break;	
    }
	earJobStat = parseInt(output.jobStat);
	earAllStat = parseInt(output.allStat);
	earHp = parseInt(output.hp);
	earMp = parseInt(output.mp);
	earAtt = parseInt(output.att);
	earMAtt = parseInt(output.mAtt);
}