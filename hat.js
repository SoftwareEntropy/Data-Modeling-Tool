/* hold equipment stats */
var hatJobStat = 0; var hatAllStat = 0; var hatHp = 0; var hatMp = 0; var hatAtt = 0; var hatMAtt = 0; var hatBoss = 0; var hatIed = 0;

/* Update star force options, change image on selection */
function updateHatStarForceOptions() {
    var selectedHat = document.getElementById("selectHat").value;
    var starForceSelect = document.getElementById("hatStarForce");
    var hatEquipImage = document.getElementById("hatImage2");
    starForceSelect.innerHTML = "";
    var options = [25, 24, 23, 22, 21, 20, 19, 18, 17, 16, 15, 14, 13, 12, 11, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1, 0];
    switch(selectedHat) {
		case "rootAbyssHat":
            hatEquipImage.src = "images/magician/01005303.img.info.icon._outlink.png"; hatBoss = 0; hatIed = 10;
            break;
        case "absolabHat":
            hatEquipImage.src = "images/magician/01004423.img.info.icon._outlink.png"; hatBoss = 0; hatIed = 10;
            break;
        case "arcaneHat":
            hatEquipImage.src = "images/magician/01004809.img.info.icon._outlink.png"; hatBoss = 0; hatIed = 15;
            break;
		case "eternalHat":
            hatEquipImage.src = "images/magician/01005981.img.info.icon._outlink.png"; hatBoss = 0; hatIed = 15;
            break;
		case "none":
            options = [0];
            hatEquipImage.src = "images/UIelements/Equip.Equip.Slots.1._outlink.png"; hatBoss = 0; hatIed = 0;
            break;	
    }
    for (var i = 0; i < options.length; i++) {
        var option = document.createElement("option");
        option.text = options[i];
        option.value = options[i];
        starForceSelect.add(option);
    }
	updateHatStarForceStats();
}

/* Calculate and fetch stats */
function updateHatStarForceStats() {
	var selectedHat = document.getElementById("selectHat").value;
	var starForceSelect = document.getElementById("hatStarForce").value;
	var selectedClass = document.getElementById("selectClass").value;
	if (selectedClass == "archMageIceLightning" || selectedClass == "archMageFirePoison" || selectedClass == "battleMage" || 
		selectedClass == "beastTamer" || selectedClass == "bishop" || selectedClass == "blazeWizard" || 
		selectedClass == "evan" || selectedClass == "illium" || selectedClass == "kanna" || 
		selectedClass == "kinesis" || selectedClass == "lara" || selectedClass == "luminous") {
		switch(selectedHat) {
			/* (itemLevel, starForceLevel, itemType, jobStats, itemAllStat, itemHp, itemMP, itemAttack, itemMagAttack) */
			case "rootAbyssHat":
				output = getItemStats(150, starForceSelect, "hat", 40, 0, 360, 360, 0, 2);
				break;
			case "absolabHat":
				output = getItemStats(160, starForceSelect, "hat", 45, 0, 0, 0, 0, 3);
				break;
			case "arcaneHat":
				output = getItemStats(200, starForceSelect, "hat", 65, 0, 0, 0, 0, 7);
				break;
			case "eternalHatHat":
				output = getItemStats(250, starForceSelect, "hat", 80, 0, 0, 0, 0, 10);
				break;	
			case "none":
				output = getItemStats(0, starForceSelect, "hat", 0, 0, 0, 0, 0, 0);
				break;	
		}
	} else {
		switch(selectedHat) {
			/* (itemLevel, starForceLevel, itemType, jobStats, itemAllStat, itemHp, itemMP, itemAttack, itemMagAttack) */
			case "rootAbyssHat":
				output = getItemStats(150, starForceSelect, "hat", 40, 0, 360, 360, 2, 0);
				break;
			case "absolabHat":
				output = getItemStats(160, starForceSelect, "hat", 45, 0, 0, 0, 3, 0);
				break;
			case "arcaneHat":
				output = getItemStats(200, starForceSelect, "hat", 65, 0, 0, 0, 7, 0);
				break;
			case "eternalHatHat":
				output = getItemStats(250, starForceSelect, "hat", 80, 0, 0, 0, 10, 0);
				break;	
			case "none":
				output = getItemStats(0, starForceSelect, "hat", 0, 0, 0, 0, 0, 0);
				break;	
		}
	}
	hatJobStat = parseInt(output.jobStat);
	hatAllStat = parseInt(output.allStat);
	hatHp = parseInt(output.hp);
	hatMp = parseInt(output.mp);
	hatAtt = parseInt(output.att);
	hatMAtt = parseInt(output.mAtt);
}