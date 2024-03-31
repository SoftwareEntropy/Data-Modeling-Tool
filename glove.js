/* hold equipment stats */
var gloveJobStat = 0; var gloveAllStat = 0; var gloveHp = 0; var gloveMp = 0; var gloveAtt = 0; var gloveMAtt = 0;

/* Update star force options, change image on selection */
function updateGloveStarForceOptions() {
    var selectedGlove = document.getElementById("selectGlove").value;
    var starForceSelect = document.getElementById("gloveStarForce");
    var gloveEquipImage = document.getElementById("gloveImage2");
    starForceSelect.innerHTML = "";
    var options = [25, 24, 23, 22, 21, 20, 19, 18, 17, 16, 15, 14, 13, 12, 11, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1, 0];;
    switch(selectedGlove) {
        case "tyrantGloves":
            options = [15, 14, 13, 12, 11, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1, 0];
            gloveEquipImage.src = "images/common/01082544.img.info.icon._outlink.png";
            break;
        case "absolabGloves":
            gloveEquipImage.src = "images/common/01082637.img.info.icon._outlink.png";
            break;
		case "arcaneGloves":
            gloveEquipImage.src = "images/common/01082696.img.info.icon._outlink.png";
            break;
		case "none":
            options = [0];
            gloveEquipImage.src = "images/UIelements/Equip.Equip.Slots.8._outlink.png";
            break;	
    }
    for (var i = 0; i < options.length; i++) {
        var option = document.createElement("option");
        option.text = options[i];
        option.value = options[i];
        starForceSelect.add(option);
    }
	updateGloveStarForceStats();
}

/* Calculate and fetch stats */
function updateGloveStarForceStats() {
	var selectedGlove = document.getElementById("selectGlove").value;
	var starForceSelect = document.getElementById("gloveStarForce").value;
	switch(selectedGlove) {
		/* (itemLevel, starForceLevel, itemType, itemJobStat, itemAllStat, itemHp, itemMP, itemAttack, itemMagAttack) */
		case "tyrantGloves":
            output = getItemStats(150, starForceSelect, "superior", 12, 0, 0, 0, 15, 15);
            break;
        case "absolabGloves":
            output = getItemStats(160, starForceSelect, "gloves", 20, 0, 0, 0, 5, 5);
            break;
		case "arcaneGloves":
            output = getItemStats(200, starForceSelect, "gloves", 40, 0, 0, 0, 9, 9);
            break;
		case "none":
            output = getItemStats(0, starForceSelect, "gloves", 0, 0, 0, 0, 0, 0);
            break;	
    }
	gloveJobStat = parseInt(output.jobStat);
	gloveAllStat = parseInt(output.allStat);
	gloveHp = parseInt(output.hp);
	gloveMp = parseInt(output.mp);
	gloveAtt = parseInt(output.att);
	gloveMAtt = parseInt(output.mAtt);
}