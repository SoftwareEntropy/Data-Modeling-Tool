/* hold equipment stats */
var eyeJobStat = 0; var eyeAllStat = 0; var eyeHp = 0; var eyeMp = 0; var eyeAtt = 0; var eyeMAtt = 0;

/* Update star force options, change image on selection */
function updateEyeStarForceOptions() {
    var selectedEye = document.getElementById("selectEye").value;
    var starForceSelect = document.getElementById("eyeStarForce");
    var eyeEquipImage = document.getElementById("eyeImage2");
    starForceSelect.innerHTML = "";
    var options = [25, 24, 23, 22, 21, 20, 19, 18, 17, 16, 15, 14, 13, 12, 11, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1, 0];;
    switch(selectedEye) {
        case "aquaticLetterEyeAccessory":
            options = [8, 7, 6, 5, 4, 3, 2, 1, 0];
            eyeEquipImage.src = "images/common/01022231.img.info.icon._outlink.png";
            break;
        case "blackBeanMark":
            options = [20, 19, 18, 17, 16, 15, 14, 13, 12, 11, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1, 0];
            eyeEquipImage.src = "images/common/01022232.img.info.icon._outlink.png";
            break;
		case "papulatusMark":
            eyeEquipImage.src = "images/common/01022277.img.info.icon._outlink.png";
            break;
        case "sweetwaterMonocle":
            eyeEquipImage.src = "images/common/01022211.img.info.icon._outlink.png";
            break;
        case "magicEyepatch":
            eyeEquipImage.src = "images/common/01022278.img.info.icon._outlink.png";
            break;
		case "none":
            options = [0];
            eyeEquipImage.src = "images/UIelements/Equip.Equip.Slots.3._outlink.png";
            break;	
    }
    for (var i = 0; i < options.length; i++) {
        var option = document.createElement("option");
        option.text = options[i];
        option.value = options[i];
        starForceSelect.add(option);
    }
	updateEyeStarForceStats();
}

/* Calculate and fetch stats */
function updateEyeStarForceStats() {
	var selectedEye = document.getElementById("selectEye").value;
	var starForceSelect = document.getElementById("eyeStarForce").value;
	switch(selectedEye) {
		/* (itemLevel, starForceLevel, itemType, itemJobStat, itemAllStat, itemHp, itemMP, itemAttack, itemMagAttack) */
		case "aquaticLetterEyeAccessory":
            output = getItemStats(100, starForceSelect, "accessory", 0, 6, 0, 0, 1, 1);
            break;
        case "blackBeanMark":
            output = getItemStats(135, starForceSelect, "accessory", 0, 7, 0, 0, 1, 1);
            break;
		case "papulatusMark":
            output = getItemStats(145, starForceSelect, "accessory", 0, 8, 0, 0, 1, 1);
            break;
        case "sweetwaterMonocle":
            output = getItemStats(160, starForceSelect, "accessory", 0, 10, 240, 240, 0, 0);
            break;
        case "magicEyepatch":
            output = getItemStats(160, starForceSelect, "accessory", 0, 15, 0, 0, 3, 3);
            break;
		case "none":
            output = getItemStats(0, starForceSelect, "accessory", 0, 0, 0, 0, 0, 0);
            break;	
    }
	eyeJobStat = parseInt(output.jobStat);
	eyeAllStat = parseInt(output.allStat);
	eyeHp = parseInt(output.hp);
	eyeMp = parseInt(output.mp);
	eyeAtt = parseInt(output.att);
	eyeMAtt = parseInt(output.mAtt);
}