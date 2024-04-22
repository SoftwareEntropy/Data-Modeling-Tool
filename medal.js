/* hold equipment stats */
var medalJobStat = 0; var medalAllStat = 0; var medalHp = 0; var medalMp = 0; var medalAtt = 0; var medalMAtt = 0; var medalBoss = 0; var medalIed = 0;

/* Update star force options, change image on selection */
function updateMedalStarForceOptions() {
    var selectedMedal = document.getElementById("selectMedal").value;
    var starForceSelect = document.getElementById("medalStarForce");
    var medalEquipImage = document.getElementById("medalImage2");
    starForceSelect.innerHTML = "";
    var options = [0];
    switch(selectedMedal) {
        case "sevenDayMonsterParker":
            medalEquipImage.src = "images/common/01142922.img.info.icon._outlink.png"; medalBoss = 0; medalIed = 10;
            break;
		case "none":
			medalEquipImage.src = "images/UIelements/Equip.Equip.Slots.21._outlink.png"; medalBoss = 0; medalIed = 0;
            break;
    }
    for (var i = 0; i < options.length; i++) {
        var option = document.createElement("option");
        option.text = options[i];
        option.value = options[i];
        starForceSelect.add(option);
    }
	updateMedalStarForceStats();
}

/* Calculate and fetch stats */
function updateMedalStarForceStats() {
	var selectedMedal = document.getElementById("selectMedal").value;
	var starForceSelect = document.getElementById("medalStarForce").value;
	switch(selectedMedal) {
		/* (itemLevel, starForceLevel, itemType, jobStats, itemAllStat, itemHp, itemMP, itemAttack, itemMagAttack) */
        case "sevenDayMonsterParker":
            output = getItemStats(100, starForceSelect, "emblem", 0, 7, 0, 0, 7, 7);
            break;
		case "none":
            output = getItemStats(0, starForceSelect, "emblem", 0, 0, 0, 0, 0, 0);
            break;	
    }
	medalJobStat = parseInt(output.jobStat);
	medalAllStat = parseInt(output.allStat);
	medalHp = parseInt(output.hp);
	medalMp = parseInt(output.mp);
	medalAtt = parseInt(output.att);
	medalMAtt = parseInt(output.mAtt);
}