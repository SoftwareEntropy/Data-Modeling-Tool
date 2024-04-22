/* hold equipment stats */
var shoulderJobStat = 0; var shoulderAllStat = 0; var shoulderHp = 0; var shoulderMp = 0; var shoulderAtt = 0; var shoulderMAtt = 0;  var shoulderBoss = 0; var shoulderIed = 0;

/* Update star force options, change image on selection */
function updateShoulderStarForceOptions() {
    var selectedShoulder = document.getElementById("selectShoulder").value;
    var starForceSelect = document.getElementById("shoulderStarForce");
    var shoulderEquipImage = document.getElementById("shoulderImage2");
    starForceSelect.innerHTML = "";
    var options = [25, 24, 23, 22, 21, 20, 19, 18, 17, 16, 15, 14, 13, 12, 11, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1, 0];
    switch(selectedShoulder) {
        case "absolabShoulder":
            shoulderEquipImage.src = "images/common/01152176.img.info.icon._outlink.png";
            break;
        case "arcaneShoulder":
            shoulderEquipImage.src = "images/common/01152197.img.info.icon._outlink.png";
            break;
		case "eternalShoulder":
            shoulderEquipImage.src = "images/common/01152213.img.info.icon._outlink.png";
            break;
		case "none":
            options = [0];
            shoulderEquipImage.src = "images/UIelements/Equip.Equip.Slots.23._outlink.png";
            break;	
    }
    for (var i = 0; i < options.length; i++) {
        var option = document.createElement("option");
        option.text = options[i];
        option.value = options[i];
        starForceSelect.add(option);
    }
	updateShoulderStarForceStats();
}

/* Calculate and fetch stats */
function updateShoulderStarForceStats() {
	var selectedShoulder = document.getElementById("selectShoulder").value;
	var starForceSelect = document.getElementById("shoulderStarForce").value;
	switch(selectedShoulder) {
		/* (itemLevel, starForceLevel, itemType, itemJobStats, itemAllStat, itemHp, itemMP, itemAttack, itemMagAttack) */
		case "absolabShoulder":
            output = getItemStats(160, starForceSelect, "accessory", 0, 14, 0, 0, 10, 10);
            break;
        case "arcaneShoulder":
            output = getItemStats(200, starForceSelect, "accessory", 0, 35, 0, 0, 20, 20);
            break;
		case "eternalShoulder":
            output = getItemStats(250, starForceSelect, "accessory", 0, 51, 0, 0, 28, 28);
            break;
		case "none":
            output = getItemStats(0, starForceSelect, "accessory", 0, 0, 0, 0, 0, 0);
            break;	
    }
	shoulderJobStat = parseInt(output.jobStat);
	shoulderAllStat = parseInt(output.allStat);
	shoulderHp = parseInt(output.hp);
	shoulderMp = parseInt(output.mp);
	shoulderAtt = parseInt(output.att);
	shoulderMAtt = parseInt(output.mAtt);
}