/* hold equipment stats */
var beltJobStat = 0; var beltAllStat = 0; var beltHp = 0; var beltMp = 0; var beltAtt = 0; var beltMAtt = 0;

/* Update star force options, change image on selection */
function updateBeltStarForceOptions() {
    var selectedBelt = document.getElementById("selectBelt").value;
    var starForceSelect = document.getElementById("beltStarForce");
    var beltEquipImage = document.getElementById("beltImage2");
    starForceSelect.innerHTML = "";
    var options = [25, 24, 23, 22, 21, 20, 19, 18, 17, 16, 15, 14, 13, 12, 11, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1, 0];;
    switch(selectedBelt) {
        case "tyrantBelt":
            options = [15, 14, 13, 12, 11, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1, 0];
            beltEquipImage.src = "images/common/01132175.img.info.icon._outlink.png";
            break;
        case "superiorGolluxBelt":
            beltEquipImage.src = "images/common/01132246.img.info.icon._outlink.png";
            break;
		case "dreamyBelt":
            beltEquipImage.src = "images/common/01132308.img.info.icon._outlink.png";
            break;
		case "none":
            options = [0];
            beltEquipImage.src = "images/UIelements/Equip.Equip.Slots.22._outlink.png";
            break;	
    }
    for (var i = 0; i < options.length; i++) {
        var option = document.createElement("option");
        option.text = options[i];
        option.value = options[i];
        starForceSelect.add(option);
    }
	updateBeltStarForceStats();
}

/* Calculate and fetch stats */
function updateBeltStarForceStats() {
	var selectedBelt = document.getElementById("selectBelt").value;
	var starForceSelect = document.getElementById("beltStarForce").value;
	switch(selectedBelt) {
		/* (itemLevel, starForceLevel, itemType, itemJobStat, itemAllStat, itemHp, itemMP, itemAttack, itemMagAttack) */
		case "tyrantBelt":
            output = getItemStats(150, starForceSelect, "superior", 0, 50, 0, 0, 25, 25);
            break;
        case "superiorGolluxBelt":
            output = getItemStats(150, starForceSelect, "accessory", 0, 60, 200, 200, 35, 35);
            break;
		case "dreamyBelt":
            output = getItemStats(200, starForceSelect, "accessory", 0, 50, 150, 150, 6, 6);
            break;
		case "none":
            output = getItemStats(0, starForceSelect, "accessory", 0, 0, 0, 0, 0, 0);
            break;	
    }
	beltJobStat = parseInt(output.jobStat);
	beltAllStat = parseInt(output.allStat);
	beltHp = parseInt(output.hp);
	beltMp = parseInt(output.mp);
	beltAtt = parseInt(output.att);
	beltMAtt = parseInt(output.mAtt);
}