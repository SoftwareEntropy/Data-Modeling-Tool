/* Hold equipment stats */
var bottomJobStat = 0; var bottomAllStat = 0; var bottomHp = 0; var bottomMp = 0; var bottomAtt = 0; var bottomMAtt = 0;

/* Update star force options, change image on selection */
function updateBottomStarForceOptions() {
    var selectedBottom = document.getElementById("selectBottom").value;
    var starForceSelect = document.getElementById("bottomStarForce");
    var bottomEquipImage = document.getElementById("bottomImage2");
    starForceSelect.innerHTML = "";
    var options = [25, 24, 23, 22, 21, 20, 19, 18, 17, 16, 15, 14, 13, 12, 11, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1, 0];
    switch(selectedBottom) {
		case "rootAbyssBottom":
            bottomEquipImage.src = "images/magician/01062259.img.info.icon._outlink.png";
            break;
		case "eternalBottom":
            bottomEquipImage.src = "images/magician/01062286.img.info.icon._outlink.png";
            break;
		case "none":
            options = [0];
            bottomEquipImage.src = "images/UIelements/Equip.Equip.Slots.6._outlink.png";
            break;	
    }
    for (var i = 0; i < options.length; i++) {
        var option = document.createElement("option");
        option.text = options[i];
        option.value = options[i];
        starForceSelect.add(option);
    }
	updateBottomStarForceStats();
}

/* Calculate and fetch stats */
function updateBottomStarForceStats() {
	var selectedBottom = document.getElementById("selectBottom").value;
	var starForceSelect = document.getElementById("bottomStarForce").value;
	var output;
	var selectedClass = document.getElementById("selectClass").value;
	if (selectedClass == "archMageIceLightning" || selectedClass == "archMageFirePoison" || selectedClass == "battleMage" || 
		selectedClass == "beastTamer" || selectedClass == "bishop" || selectedClass == "blazeWizard" || 
		selectedClass == "evan" || selectedClass == "illium" || selectedClass == "kanna" || 
		selectedClass == "kinesis" || selectedClass == "lara" || selectedClass == "luminous") {
		switch(selectedBottom) {
			/* (itemLevel, starForceLevel, itemType, jobStats, itemAllStat, itemHp, itemMP, itemAttack, itemMagAttack) */
			case "rootAbyssBottom":
				output = getItemStats(150, starForceSelect, "bottom", 30, 0, 0, 0, 0, 2);
				break;
			case "eternalBottom":
				output = getItemStats(250, starForceSelect, "bottom", 50, 0, 0, 0, 0, 6);
				break;	
			case "none":
				output = getItemStats(0, starForceSelect, "bottom", 0, 0, 0, 0, 0, 0);
				break;	
		}
	} else {
		switch(selectedBottom) {
			/* (itemLevel, starForceLevel, itemType, jobStats, itemAllStat, itemHp, itemMP, itemAttack, itemMagAttack) */
			case "rootAbyssBottom":
				output = getItemStats(150, starForceSelect, "bottom", 30, 0, 0, 0, 2, 0);
				break;
			case "eternalBottom":
				output = getItemStats(250, starForceSelect, "bottom", 50, 0, 0, 0, 6, 0);
				break;	
			case "none":
				output = getItemStats(0, starForceSelect, "bottom", 0, 0, 0, 0, 0, 0);
				break;	
		}
	}
	bottomJobStat = parseInt(output.jobStat);
	bottomAllStat = parseInt(output.allStat);
	bottomHp = parseInt(output.hp);
	bottomMp = parseInt(output.mp);
	bottomAtt = parseInt(output.att);
	bottomMAtt = parseInt(output.mAtt);
}