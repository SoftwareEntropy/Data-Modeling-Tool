/* hold equipment stats */
var topJobStat = 0; var topAllStat = 0; var topHp = 0; var topMp = 0; var topAtt = 0; var topMAtt = 0; var topBoss = 0; var topIed = 0;

/* Update star force options, change image on selection */
function updateTopStarForceOptions() {
    var selectedTop = document.getElementById("selectTop").value;
    var starForceSelect = document.getElementById("topStarForce");
    var topEquipImage = document.getElementById("topImage2");
    starForceSelect.innerHTML = "";
    var options = [25, 24, 23, 22, 21, 20, 19, 18, 17, 16, 15, 14, 13, 12, 11, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1, 0];
    switch(selectedTop) {
		case "rootAbyssTop":
            topEquipImage.src = "images/magician/01042393.img.info.icon._outlink.png"; topBoss = 0; topIed = 5;
            break;
		case "eternalTop":
            topEquipImage.src = "images/magician/01042434.img.info.icon._outlink.png"; topBoss = 0; topIed = 5;
            break;
		case "none":
            options = [0];
            topEquipImage.src = "images/UIelements/Equip.Equip.Slots.5._outlink.png"; topBoss = 0; topIed = 5;
            break;	
    }
    for (var i = 0; i < options.length; i++) {
        var option = document.createElement("option");
        option.text = options[i];
        option.value = options[i];
        starForceSelect.add(option);
    }
	updateTopStarForceStats();
}

/* Calculate and fetch stats */
function updateTopStarForceStats() {
	var selectedTop = document.getElementById("selectTop").value;
	var starForceSelect = document.getElementById("topStarForce").value;
	var selectedClass = document.getElementById("selectClass").value;
	if (selectedClass == "archMageIceLightning" || selectedClass == "archMageFirePoison" || selectedClass == "battleMage" || 
		selectedClass == "beastTamer" || selectedClass == "bishop" || selectedClass == "blazeWizard" || 
		selectedClass == "evan" || selectedClass == "illium" || selectedClass == "kanna" || 
		selectedClass == "kinesis" || selectedClass == "lara" || selectedClass == "luminous") {
		switch(selectedTop) {
			/* (itemLevel, starForceLevel, itemType, jobStats, itemAllStat, itemHp, itemMP, itemAttack, itemMagAttack) */
			case "rootAbyssTop":
				output = getItemStats(150, starForceSelect, "top", 30, 0, 0, 0, 0, 2);
				break;
			case "eternalTop":
				output = getItemStats(250, starForceSelect, "top", 50, 0, 0, 0, 0, 6);
				break;	
			case "none":
				output = getItemStats(0, starForceSelect, "top", 0, 0, 0, 0, 0, 0);
				break;	
		}
	} else {
		switch(selectedTop) {
			/* (itemLevel, starForceLevel, itemType, jobStats, itemAllStat, itemHp, itemMP, itemAttack, itemMagAttack) */
			case "rootAbyssTop":
				output = getItemStats(150, starForceSelect, "top", 30, 0, 0, 0, 2, 0);
				break;
			case "eternalTop":
				output = getItemStats(250, starForceSelect, "top", 50, 0, 0, 0, 6, 0);
				break;	
			case "none":
				output = getItemStats(0, starForceSelect, "top", 0, 0, 0, 0, 0, 0);
				break;	
		}
	}
	topJobStat = parseInt(output.jobStat);
	topAllStat = parseInt(output.allStat);
	topHp = parseInt(output.hp);
	topMp = parseInt(output.mp);
	topAtt = parseInt(output.att);
	topMAtt = parseInt(output.mAtt);
}