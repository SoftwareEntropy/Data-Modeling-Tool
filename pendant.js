/* hold equipment stats */
var pendant1JobStat = 0; var pendant1AllStat = 0; var pendant1Hp = 0; var pendant1Mp = 0; var pendant1Att = 0; var pendant1MAtt = 0; var pendant1Boss = 0; var pendant1Ied = 0;
var pendant2JobStat = 0; var pendant2AllStat = 0; var pendant2Hp = 0; var pendant2Mp = 0; var pendant2Att = 0; var pendant2MAtt = 0; var pendant2Boss = 0; var pendant2Ied = 0;

function restoreOptions(selector, maxIndex){
	for (let i = 0; i < maxIndex; i++) {
		selector.options[i].style.display = "";
	}
}

/* Update star force options, change image on selection */
function updatePendantStarForceOptions() {
    var selectedPendant1 = document.getElementById("selectPendant1").value;
	var selectedPendant2 = document.getElementById("selectPendant2").value;
	var selectDropdown1 = document.getElementById("selectPendant1");
	var selectDropdown2 = document.getElementById("selectPendant2");
	restoreOptions(selectDropdown1, 6);
	restoreOptions(selectDropdown2, 6);
    var starForceSelect1 = document.getElementById("pendant1StarForce");
	var starForceSelect2 = document.getElementById("pendant2StarForce");
    var pendant1EquipImage = document.getElementById("pendant1Image2");
	var pendant2EquipImage = document.getElementById("pendant2Image2");
    starForceSelect1.innerHTML = "";
	starForceSelect2.innerHTML = "";
    updatePendantOptions(selectedPendant1, pendant1EquipImage, selectDropdown2, starForceSelect1);
	updatePendantOptions(selectedPendant2, pendant2EquipImage, selectDropdown1, starForceSelect2);
	updatePendantStarForceStats();
}

/* Update pendant options */
function updatePendantOptions(selected, pendantImage, otherDropdown, sfSelector) {
	var options = [25, 24, 23, 22, 21, 20, 19, 18, 17, 16, 15, 14, 13, 12, 11, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1, 0];
	switch(selected) {
        case "daybreakPendant":
            pendantImage.src = "images/common/01122443.img.info.icon._outlink.png";
			otherDropdown.options[1].style.display = "none";
			break;
		case "dominatorPendant":
            pendantImage.src = "images/common/01122150.img.info.icon._outlink.png";
			otherDropdown.options[2].style.display = "none";
			break;	
        case "superiorGolluxPendant":
            pendantImage.src = "images/common/01122267.img.info.icon._outlink.png";
			otherDropdown.options[3].style.display = "none";
			break;
		case "sourceOfSuffering":
            pendantImage.src = "images/common/01122430.img.info.icon._outlink.png";
			otherDropdown.options[4].style.display = "none";
			break;
		case "sweetwaterPendant":
            pendantImage.src = "images/common/01122269.img.info.icon._outlink.png";
			otherDropdown.options[5].style.display = "none";
			break;
		case "none":
            options = [0];
            pendantImage.src = "images/UIelements/Equip.Equip.Slots.65._outlink.png";
			selected = "none";
            break;	
    }
    for (var i = 0; i < options.length; i++) {
        var option = document.createElement("option");
        option.text = options[i];
        option.value = options[i];
        sfSelector.add(option);
    }
}

/* Calculate and fetch stats */
function updatePendantStarForceStats() {
	var selectedPendant1 = document.getElementById("selectPendant1").value;
	var selectedPendant2 = document.getElementById("selectPendant2").value;
	var starForceSelect1 = document.getElementById("pendant1StarForce").value;
	var starForceSelect2 = document.getElementById("pendant2StarForce").value;
	switch(selectedPendant1) {
		/* (itemLevel, starForceLevel, itemType, itemJobStat, itemAllStat, itemHp, itemMP, itemAttack, itemMagAttack) */
		case "daybreakPendant":
            output = getItemStats(140, starForceSelect1, "accessory", 0, 8, 0, 0, 2, 2);
            break;
        case "dominatorPendant":
            output = getItemStats(140, starForceSelect1, "accessory", 0, 20, 0, 0, 3, 3);
            break;
		case "superiorGolluxPendant":
            output = getItemStats(150, starForceSelect1, "accessory", 0, 28, 300, 300, 5, 5);
            break;
		case "sourceOfSuffering":
            output = getItemStats(160, starForceSelect1, "accessory", 0, 10, 0, 0, 3, 3);
            break;
		case "sweetwaterPendant":
            output = getItemStats(160, starForceSelect1, "accessory", 0, 34, 0, 342, 0, 0);
            break;
		case "none":
            output = getItemStats(0, 0, "accessory", 0, 0, 0, 0, 0, 0);
            break;	
    }
	pendant1JobStat = parseInt(output.jobStat);
	pendant1AllStat = parseInt(output.allStat);
	pendant1Hp = parseInt(output.hp);
	pendant1Mp = parseInt(output.mp);
	pendant1Att = parseInt(output.att);
	pendant1MAtt = parseInt(output.mAtt);
	switch(selectedPendant2) {
		/* (itemLevel, starForceLevel, itemType, jobStat, itemAllStat, itemHp, itemMP, itemAttack, itemMagAttack) */
		case "daybreakPendant":
            output = getItemStats(140, starForceSelect2, "accessory", 0, 8, 0, 0, 2, 2);
            break;
        case "dominatorPendant":
            output = getItemStats(140, starForceSelect2, "accessory", 0, 20, 0, 0, 3, 3);
            break;
		case "superiorGolluxPendant":
            output = getItemStats(150, starForceSelect2, "accessory", 0, 28, 300, 300, 5, 5);
            break;
		case "sourceOfSuffering":
            output = getItemStats(160, starForceSelect2, "accessory", 0, 10, 0, 0, 3, 3);
            break;
		case "sweetwaterPendant":
            output = getItemStats(160, starForceSelect2, "accessory", 0, 34, 0, 342, 0, 0);
            break;
		case "none":
            output = getItemStats(0, 0, "accessory", 0, 0, 0, 0, 0, 0);
            break;	
    }
	pendant2JobStat = parseInt(output.jobStat);
	pendant2AllStat = parseInt(output.allStat);
	pendant2Hp = parseInt(output.hp);
	pendant2Mp = parseInt(output.mp);
	pendant2Att = parseInt(output.att);
	pendant2MAtt = parseInt(output.mAtt);
}