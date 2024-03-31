/* hold equipment stats */
var faceJobStat = 0; var faceAllStat = 0; var faceHp = 0; var faceMp = 0; var faceAtt = 0; var faceMAtt = 0;

/* Update star force options, change image on selection */
function updateFaceStarForceOptions() {
    var selectedFace = document.getElementById("selectFace").value;
    var starForceSelect = document.getElementById("faceStarForce");
    var faceEquipImage = document.getElementById("faceImage2");
    starForceSelect.innerHTML = "";
    var options  = [25, 24, 23, 22, 21, 20, 19, 18, 17, 16, 15, 14, 13, 12, 11, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1, 0];
    switch(selectedFace) {
		/* [25, 24, 23, 22, 21, 20, 19, 18, 17, 16, 15, 14, 13, 12, 11, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1, 0]; 
		[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25] */
        case "condensedPowerCrystal":
            options = [10, 9, 8, 7, 6, 5, 4, 3, 2, 1, 0];
            faceEquipImage.src = "images/common/01012478.img.info.icon._outlink.png";
            break;
        case "twilightMark":
            faceEquipImage.src = "images/common/01012757.img.info.icon._outlink.png";
            break;
        case "sweetwaterTattoo":
            faceEquipImage.src = "images/common/01012438.img.info.icon._outlink.png";
            break;
        case "berserked":
            faceEquipImage.src = "images/common/01012632.img.info.icon._outlink.png";
            break;
		case "none":
            options = [0];
            faceEquipImage.src = "images/UIelements/Equip.Equip.Slots.2._outlink.png";
            break;
    }
    for (var i = 0; i < options.length; i++) {
        var option = document.createElement("option");
        option.text = options[i];
        option.value = options[i];
        starForceSelect.add(option);
    }
	updateFaceStarForceStats();
}

/* Calculate and fetch stats */
function updateFaceStarForceStats() {
	var selectedFace = document.getElementById("selectFace").value;
	var starForceSelect = document.getElementById("faceStarForce").value;
	switch(selectedFace) {
		/* (itemLevel, starForceLevel, itemType, itemJobStat, itemAllStat, itemHp, itemMP, itemAttack, itemMagAttack) */
        case "condensedPowerCrystal":
			output = getItemStats(100, starForceSelect, "accessory", 0, 5, 0, 0, 5, 5);
            break;
        case "twilightMark":
			output = getItemStats(140, starForceSelect, "accessory", 0, 5, 0, 0, 5, 5);
            break;
        case "sweetwaterTattoo":
			output = getItemStats(160, starForceSelect, "accessory", 0, 5, 120, 120, 0, 0);
            break;
        case "berserked":
			output = getItemStats(160, starForceSelect, "accessory", 0, 10, 0, 0, 10, 10);
            break;
		case "none":
			output = getItemStats(0, starForceSelect, "accessory", 0, 0, 0, 0, 0, 0);
            break;	
    }
	faceJobStat = parseInt(output.jobStat);
	faceAllStat = parseInt(output.allStat);
	faceHp = parseInt(output.hp);
	faceMp = parseInt(output.mp);
	faceAtt = parseInt(output.att);
	faceMAtt = parseInt(output.mAtt);
}