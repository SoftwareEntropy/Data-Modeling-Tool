/* hold equipment stats */
var pendant1JobStat; var pendant1AllStat; var pendant1Hp; var pendant1Mp; var pendant1Att; var pendant1MAtt;
var pendant2JobStat; var pendant2AllStat; var pendant2Hp; var pendant2Mp; var pendant2Att; var pendant2MAtt;

updatePendantStarForceOptions();
updatePendantStarForceStats();

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

    var options;
	
    switch(selectedPendant1) {
		/* [25, 24, 23, 22, 21, 20, 19, 18, 17, 16, 15, 14, 13, 12, 11, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1, 0]; 
		   [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25] */
        case "daybreakPendant":
            options = [25, 24, 23, 22, 21, 20, 19, 18, 17, 16, 15, 14, 13, 12, 11, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1, 0];
			if (selectedPendant2 == "daybreakPendant") { selectedPendant1 = "none"; options = [0]; selectedPendant1.src = "images/Equip.Equip.Slots.17._outlink.png"; break;};
            pendant1EquipImage.src = "images/01122443.img.info.icon._outlink.png";
			selectDropdown2.options[1].style.display = "none";
			break;
		case "dominatorPendant":
            options = [25, 24, 23, 22, 21, 20, 19, 18, 17, 16, 15, 14, 13, 12, 11, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1, 0];
			if (selectedPendant2 == "dominatorPendant") { selectedPendant1 = "none"; options = [0]; selectedPendant1.src = "images/Equip.Equip.Slots.17._outlink.png"; break;};
            pendant1EquipImage.src = "images/01122150.img.info.icon._outlink.png";
			selectDropdown2.options[2].style.display = "none";
			break;	
        case "superiorGolluxPendant":
            options = [25, 24, 23, 22, 21, 20, 19, 18, 17, 16, 15, 14, 13, 12, 11, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1, 0];
			if (selectedPendant2 == "superiorGolluxPendant") { selectedPendant1 = "none"; options = [0]; selectedPendant1.src = "images/Equip.Equip.Slots.17._outlink.png"; break;};
            pendant1EquipImage.src = "images/01122267.img.info.icon._outlink.png";
			selectDropdown2.options[3].style.display = "none";
			break;
		case "sourceOfSuffering":
            options = [25, 24, 23, 22, 21, 20, 19, 18, 17, 16, 15, 14, 13, 12, 11, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1, 0];
			if (selectedPendant2 == "sourceOfSuffering") { selectedPendant1 = "none"; options = [0]; selectedPendant1.src = "images/Equip.Equip.Slots.17._outlink.png"; break;};
            pendant1EquipImage.src = "images/01122430.img.info.icon._outlink.png";
			selectDropdown2.options[4].style.display = "none";
			break;
		case "sweetwaterPendant":
            options = [25, 24, 23, 22, 21, 20, 19, 18, 17, 16, 15, 14, 13, 12, 11, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1, 0];
			if (selectedPendant2 == "sweetwaterPendant") { selectedPendant1 = "none"; options = [0]; selectedPendant1.src = "images/Equip.Equip.Slots.17._outlink.png"; break;};
            pendant1EquipImage.src = "images/01122269.img.info.icon._outlink.png";
			selectDropdown2.options[5].style.display = "none";
			break;
		case "none":
            options = [0];
            pendant1EquipImage.src = "images/Equip.Equip.Slots.17._outlink.png";
			selectedPendant1 = "none";
            break;	
    }
    for (var i = 0; i < options.length; i++) {
        var option = document.createElement("option");
        option.text = options[i];
        option.value = options[i];
        starForceSelect1.add(option);
    }
	
	switch(selectedPendant2) {
		/* [25, 24, 23, 22, 21, 20, 19, 18, 17, 16, 15, 14, 13, 12, 11, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1, 0]; 
		   [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25] */
        case "daybreakPendant":
            options = [25, 24, 23, 22, 21, 20, 19, 18, 17, 16, 15, 14, 13, 12, 11, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1, 0];
			if (selectedPendant1 == "daybreakPendant") { selectedPendant2 = "none"; options = [0]; selectedPendant2.src = "images/Equip.Equip.Slots.65._outlink.png"; break;};
            pendant2EquipImage.src = "images/01122443.img.info.icon._outlink.png";
			selectDropdown1.options[1].style.display = "none";
			break;
		case "dominatorPendant":
            options = [25, 24, 23, 22, 21, 20, 19, 18, 17, 16, 15, 14, 13, 12, 11, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1, 0];
			if (selectedPendant1 == "dominatorPendant") { selectedPendant2 = "none"; options = [0]; selectedPendant2.src = "images/Equip.Equip.Slots.65._outlink.png"; break;};
            pendant2EquipImage.src = "images/01122150.img.info.icon._outlink.png";
			selectDropdown1.options[2].style.display = "none";
			break;	
        case "superiorGolluxPendant":
            options = [25, 24, 23, 22, 21, 20, 19, 18, 17, 16, 15, 14, 13, 12, 11, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1, 0];
			if (selectedPendant1 == "superiorGolluxPendant") { selectedPendant2 = "none"; options = [0]; selectedPendant2.src = "images/Equip.Equip.Slots.65._outlink.png"; break;};
            pendant2EquipImage.src = "images/01122267.img.info.icon._outlink.png";
			selectDropdown1.options[3].style.display = "none";
			break;
		case "sourceOfSuffering":
            options = [25, 24, 23, 22, 21, 20, 19, 18, 17, 16, 15, 14, 13, 12, 11, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1, 0];
			if (selectedPendant1 == "sourceOfSuffering") { selectedPendant2 = "none"; options = [0]; selectedPendant2.src = "images/Equip.Equip.Slots.65._outlink.png"; break;};
            pendant2EquipImage.src = "images/01122430.img.info.icon._outlink.png";
			selectDropdown1.options[4].style.display = "none";
			break;
		case "sweetwaterPendant":
            options = [25, 24, 23, 22, 21, 20, 19, 18, 17, 16, 15, 14, 13, 12, 11, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1, 0];
			if (selectedPendant1 == "sweetwaterPendant") { selectedPendant2 = "none"; options = [0]; selectedPendant2.src = "images/Equip.Equip.Slots.65._outlink.png"; break;};
            pendant2EquipImage.src = "images/01122269.img.info.icon._outlink.png";
			selectDropdown1.options[5].style.display = "none";
			break;
		case "none":
            options = [0];
            pendant2EquipImage.src = "images/Equip.Equip.Slots.65._outlink.png";
			selectedPendant2 = "none";
            break;	
    }
    for (var i = 0; i < options.length; i++) {
        var option = document.createElement("option");
        option.text = options[i];
        option.value = options[i];
        starForceSelect2.add(option);
    }
	
	updatePendantStarForceStats();
}

/* Params: RingSlot#, Item level, selected Star Force, Item type, Item all stat, Item hp, Item mp, Item attack, Item magic attack */
/* Item types checked: weapon, gloves */
function calculatePendantStarForce(slotNum, itemLevel, starForceLevel, itemType, itemAllStat, itemHp, itemMp, itemAttack, itemMagAttack) {
	var jobStat = 0;
	var allStat = itemAllStat;
	var hp = itemHp;
	var mp = itemMp;
	var att = itemAttack;
	var mAtt = itemMagAttack;
	if (starForceLevel >= 1) {
		jobStat += 2; hp += 5; mp += 5;
		if (itemType == weapon) {
			att += 1 + Math.floor(itemAttack * (2 / 100));
			mAtt += 1 + Math.floor(itemMagAttack * (2 / 100));
		}
	}
	if (starForceLevel >= 2) {
		jobStat += 2; hp += 5; mp += 5;
		if (itemType == weapon) {
			att += 1 + Math.floor(itemAttack * (2 / 100));
			mAtt += 1 + Math.floor(itemMagAttack * (2 / 100));
		}
	}
	if (starForceLevel >= 3) {
		jobStat += 2; hp += 5; mp += 5;
		if (itemType == weapon) {
			att += 1 + Math.floor(itemAttack * (2 / 100));
			mAtt += 1 + Math.floor(itemMagAttack * (2 / 100));
		}
	}
	if (starForceLevel >= 4) {
		jobStat += 2; hp += 10; mp += 10;
		if (itemType == weapon) {
			att += 1 + Math.floor(itemAttack * (2 / 100));
			mAtt += 1 + Math.floor(itemMagAttack * (2 / 100));
		}
	}
	if (starForceLevel >= 5){
		jobStat += 2; hp += 10; mp += 10;
		if (itemType == weapon) {
			att += 1 + Math.floor(itemAttack * (2 / 100));
			mAtt += 1 + Math.floor(itemMagAttack * (2 / 100));
		}
		if (itemType == "gloves") {
			att += 1; mAtt += 1;
		}
	}
	if (starForceLevel >= 6) {
		jobStat += 3; hp += 15; mp += 15;
		if (itemType == weapon) {
			att += 1 + Math.floor(itemAttack * (2 / 100));
			mAtt += 1 + Math.floor(itemMagAttack * (2 / 100));
		}
	}
	if (starForceLevel >= 7){
		jobStat += 3; hp += 15; mp += 15;
		if (itemType == weapon) {
			att += 1 + Math.floor(itemAttack * (2 / 100));
			mAtt += 1 + Math.floor(itemMagAttack * (2 / 100));
		}
		if (itemType == "gloves") {
			att += 1; mAtt += 1;
		}
	}
	if (starForceLevel >= 8) {
		jobStat += 3; hp += 20; mp += 20;
		if (itemType == weapon) {
			att += 1 + Math.floor(itemAttack * (2 / 100));
			mAtt += 1 + Math.floor(itemMagAttack * (2 / 100));
		}
	}
	if (starForceLevel >= 9) {
		jobStat += 3; hp += 20; mp += 20;
		if (itemType == weapon) {
			att += 1 + Math.floor(itemAttack * (2 / 100));
			mAtt += 1 + Math.floor(itemMagAttack * (2 / 100));
		}
		if (itemType == "gloves") {
			att += 1; mAtt += 1;
		}
	}
	if (starForceLevel >= 10) {
		jobStat += 3; hp += 25; mp += 25;
		if (itemType == weapon) {
			att += 1 + Math.floor(itemAttack * (2 / 100));
			mAtt += 1 + Math.floor(itemMagAttack * (2 / 100));
		}
	}
	if (starForceLevel >= 11) {
		jobStat += 3; hp += 25; mp += 25;
		if (itemType == weapon) {
			att += 1 + Math.floor(itemAttack * (2 / 100));
			mAtt += 1 + Math.floor(itemMagAttack * (2 / 100));
		}
		if (itemType == "gloves") {
			att += 1; mAtt += 1;
		}	
	}
	if (starForceLevel >= 12) {
		jobStat += 3; hp += 25; mp += 25;
		if (itemType == weapon) {
			att += 1 + Math.floor(itemAttack * (2 / 100));
			mAtt += 1 + Math.floor(itemMagAttack * (2 / 100));
		}	
	}
	if (starForceLevel >= 13) {
		jobStat += 3; hp += 25; mp += 25;
		if (itemType == weapon) {
			att += 1 + Math.floor(itemAttack * (2 / 100));
			mAtt += 1 + Math.floor(itemMagAttack * (2 / 100));
		}
		if (itemType == "gloves") {
			att += 1; mAtt += 1;
		}	
	}
	if (starForceLevel >= 14) {
		jobStat += 3; hp += 25; mp += 25;
		if (itemType == weapon) {
			att += 1 + Math.floor(itemAttack * (2 / 100));
			mAtt += 1 + Math.floor(itemMagAttack * (2 / 100));
		}
		if (itemType == "gloves") {
			att += 1; mAtt += 1;
		}
	}
	if (starForceLevel >= 15) {
		jobStat += 3; hp += 25; mp += 25;
		if (itemType == weapon) {
			att += 1 + Math.floor(itemAttack * (2 / 100));
			mAtt += 1 + Math.floor(itemMagAttack * (2 / 100));
		}
		if (itemType == "gloves") {
			att += 1; mAtt += 1;
		}	
	}
	if (starForceLevel >= 16) {
		if ((itemLevel >= 128) && (itemLevel <= 137)) {
			allStat += 7;
			if (itemType == weapon) {
				att += 6; mAtt += 6;
			} else {
				att += 7; mAtt += 7;
			}
		}
		if ((itemLevel >= 138) && (itemLevel <= 149)) {
			allStat += 9;
			if (itemType == weapon) {
				att += 7; mAtt += 7;
			} else {
				att += 8; mAtt += 8;
			}
		}
		if ((itemLevel >= 150) && (itemLevel <= 159)) {
			allStat += 11;
			if (itemType == weapon) {
				att += 8; mAtt += 8;
			} else {
				att += 9; mAtt += 9;
			}
		}
		if ((itemLevel >= 160) && (itemLevel <= 199)) {
			allStat += 13;
			if (itemType == weapon) {
				att += 9; mAtt += 9;
			} else {
				att += 10; mAtt += 10;
			}
		}
		if ((itemLevel >= 200) && (itemLevel <= 249)) {
			allStat += 15;
			if (itemType == weapon) {
				att += 13; mAtt += 13;
			} else {
				att += 12; mAtt += 12;
			}
		}
		if (itemLevel >= 250) {
			allStat += 17; att += 14; mAtt += 14;
		}
	}
	if (starForceLevel >= 17) {
		if ((itemLevel >= 128) && (itemLevel <= 137)) {
			allStat += 7;
			if (itemType == weapon) {
				att += 7; mAtt += 7;
			} else {
				att += 8; mAtt += 8;
			}
		}
		if ((itemLevel >= 138) && (itemLevel <= 149)) {
			allStat += 9;
			if (itemType == weapon) {
				att += 8; mAtt += 8;
			} else {
				att += 9; mAtt += 9;
			}
		}
		if ((itemLevel >= 150) && (itemLevel <= 159)) {
			allStat += 11;
			if (itemType == weapon) {
				att += 9; mAtt += 9;
			} else {
				att += 10; mAtt += 10;
			}
		}
		if ((itemLevel >= 160) && (itemLevel <= 199)) {
			allStat += 13;
			if (itemType == weapon) {
				att += 9; mAtt += 9;
			} else {
				att += 11; mAtt += 11;
			}
		}
		if ((itemLevel >= 200) && (itemLevel <= 249)) {
			allStat += 15;
			if (itemType == weapon) {
				att += 13; mAtt += 13;
			} else {
				att += 13; mAtt += 13;
			}
		}
		if (itemLevel >= 250) {
			allStat += 17; att += 15; mAtt += 15;
		}	
	}
	if (starForceLevel >= 18) {
		if ((itemLevel >= 128) && (itemLevel <= 137)) {
			allStat += 7;
			if (itemType == weapon) {
				att += 7; mAtt += 7;
			} else {
				att += 9; mAtt += 9;
			}
		}
		if ((itemLevel >= 138) && (itemLevel <= 149)) {
			allStat += 9;
			if (itemType == weapon) {
				att += 8; mAtt += 8;
			} else {
				att += 10; mAtt += 10;
			}
		}
		if ((itemLevel >= 150) && (itemLevel <= 159)) {
			allStat += 11;
			if (itemType == weapon) {
				att += 9; mAtt += 9;
			} else {
				att += 11; mAtt += 11;
			}
		}
		if ((itemLevel >= 160) && (itemLevel <= 199)) {
			allStat += 13;
			if (itemType == weapon) {
				att += 10; mAtt += 10;
			} else {
				att += 12; mAtt += 12;
			}
		}
		if ((itemLevel >= 200) && (itemLevel <= 249)) {
			allStat += 15;
			if (itemType == weapon) {
				att += 14; mAtt += 14;
			} else {
				att += 14; mAtt += 14;
			}
		}
		if (itemLevel >= 250) {
			allStat += 17; att += 16; mAtt += 16;
		}
	}
	if (starForceLevel >= 19) {
		if ((itemLevel >= 128) && (itemLevel <= 137)) {
			allStat += 7;
			if (itemType == weapon) {
				att += 8; mAtt += 8;
			} else {
				att += 10; mAtt += 10;
			}
		}
		if ((itemLevel >= 138) && (itemLevel <= 149)) {
			allStat += 9;
			if (itemType == weapon) {
				att += 9; mAtt += 9;
			} else {
				att += 11; mAtt += 11;
			}
		}
		if ((itemLevel >= 150) && (itemLevel <= 159)) {
			allStat += 11;
			if (itemType == weapon) {
				att += 10; mAtt += 10;
			} else {
				att += 12; mAtt += 12;
			}
		}
		if ((itemLevel >= 160) && (itemLevel <= 199)) {
			allStat += 13;
			if (itemType == weapon) {
				att += 11; mAtt += 11;
			} else {
				att += 13; mAtt += 13;
			}
		}
		if ((itemLevel >= 200) && (itemLevel <= 249)) {
			allStat += 15;
			if (itemType == weapon) {
				att += 14; mAtt += 14;
			} else {
				att += 15; mAtt += 15;
			}
		}
		if (itemLevel >= 250) {
			allStat += 17; att += 17; mAtt += 17;
		}	
	}
	if (starForceLevel >= 20) {
		if ((itemLevel >= 128) && (itemLevel <= 137)) {
			allStat += 7;
			if (itemType == weapon) {
				att += 9; mAtt += 9;
			} else {
				att += 11; mAtt += 11;
			}
		}
		if ((itemLevel >= 138) && (itemLevel <= 149)) {
			allStat += 9;
			if (itemType == weapon) {
				att += 10; mAtt += 10;
			} else {
				att += 12; mAtt += 12;
			}
		}
		if ((itemLevel >= 150) && (itemLevel <= 159)) {
			allStat += 11;
			if (itemType == weapon) {
				att += 11; mAtt += 11;
			} else {
				att += 13; mAtt += 13;
			}
		}
		if ((itemLevel >= 160) && (itemLevel <= 199)) {
			allStat += 13;
			if (itemType == weapon) {
				att += 12; mAtt += 12;
			} else {
				att += 14; mAtt += 14;
			}
		}
		if ((itemLevel >= 200) && (itemLevel <= 249)) {
			allStat += 15;
			if (itemType == weapon) {
				att += 15; mAtt += 15;
			} else {
				att += 16; mAtt += 16;
			}
		}
		if (itemLevel >= 250) {
			allStat += 17; att += 18; mAtt += 18;
		}	
	}
	if (starForceLevel >= 21) {
		if ((itemLevel >= 138) && (itemLevel <= 149)) {
			allStat += 9;
			if (itemType == weapon) {
				att += 11; mAtt += 11;
			} else {
				att += 13; mAtt += 13;
			}
		}
		if ((itemLevel >= 150) && (itemLevel <= 159)) {
			allStat += 11;
			if (itemType == weapon) {
				att += 12; mAtt += 12;
			} else {
				att += 14; mAtt += 14;
			}
		}
		if ((itemLevel >= 160) && (itemLevel <= 199)) {
			allStat += 13;
			if (itemType == weapon) {
				att += 13; mAtt += 13;
			} else {
				att += 15; mAtt += 15;
			}
		}
		if ((itemLevel >= 200) && (itemLevel <= 249)) {
			allStat += 15;
			if (itemType == weapon) {
				att += 16; mAtt += 16;
			} else {
				att += 17; mAtt += 17;
			}
		}
		if (itemLevel >= 250) {
			allStat += 17; att += 19; mAtt += 19;
		}
	}
	if (starForceLevel >= 22) {
		if ((itemLevel >= 138) && (itemLevel <= 149)) {
			allStat += 9;
			if (itemType == weapon) {
				att += 12; mAtt += 12;
			} else {
				att += 15; mAtt += 15;
			}
		}
		if ((itemLevel >= 150) && (itemLevel <= 159)) {
			allStat += 11;
			if (itemType == weapon) {
				att += 13; mAtt += 13;
			} else {
				att += 16; mAtt += 16;
			}
		}
		if ((itemLevel >= 160) && (itemLevel <= 199)) {
			allStat += 13;
			if (itemType == weapon) {
				att += 14; mAtt += 14;
			} else {
				att += 17; mAtt += 17;
			}
		}
		if ((itemLevel >= 200) && (itemLevel <= 249)) {
			allStat += 15;
			if (itemType == weapon) {
				att += 17; mAtt += 17;
			} else {
				att += 19; mAtt += 19;
			}
		}
		if (itemLevel >= 250) {
			allStat + 17; att + 21; mAtt + 21;
		}	
	}
	if (starForceLevel >= 23) {
		if ((itemLevel >= 138) && (itemLevel <= 149)) {
			if (itemType == weapon) {
				att += 30; mAtt += 30;
			} else {
				att += 17; mAtt += 17;
			}
		}
		if ((itemLevel >= 150) && (itemLevel <= 159)) {
			if (itemType == weapon) {
				att += 31; mAtt += 31;
			} else {
				att += 18; mAtt += 18;
			}
		}
		if ((itemLevel >= 160) && (itemLevel <= 199)) {
			if (itemType == weapon) {
				att += 32; mAtt += 32;
			} else {
				att += 19; mAtt += 19;
			}
		}
		if ((itemLevel >= 200) && (itemLevel <= 249)) {
			if (itemType == weapon) {
				att += 34; mAtt += 34;
			} else {
				att += 21; mAtt += 21;
			}
		}
		if (itemLevel >= 250) {
			att += 23; mAtt += 23;
		}	
	}
	if (starForceLevel >= 24) {
		if ((itemLevel >= 138) && (itemLevel <= 149)) {
			if (itemType == weapon) {
				att += 31; mAtt += 31;
			} else {
				att += 19; mAtt += 19;
			}
		}
		if ((itemLevel >= 150) && (itemLevel <= 159)) {
			if (itemType == weapon) {
				att += 32; mAtt += 32;
			} else {
				att += 20; mAtt += 20;
			}
		}
		if ((itemLevel >= 160) && (itemLevel <= 199)) {
			if (itemType == weapon) {
				att += 33; mAtt += 33;
			} else {
				att += 21; mAtt += 21;
			}
		}
		if ((itemLevel >= 200) && (itemLevel <= 249)) {
			if (itemType == weapon) {
				att += 35; mAtt += 35;
			} else {
				att += 23; mAtt += 23;
			}
		}
		if (itemLevel >= 250) {
			att += 25; mAtt += 25;
		}	
	}
	if (starForceLevel >= 25) {
		if ((itemLevel >= 138) && (itemLevel <= 149)) {
			if (itemType == weapon) {
				att += 32; mAtt += 32;
			} else {
				att += 21; mAtt += 21;
			}
		}
		if ((itemLevel >= 150) && (itemLevel <= 159)) {
			if (itemType == weapon) {
				att += 33; mAtt += 33;
			} else {
				att += 22; mAtt += 22;
			}
		}
		if ((itemLevel >= 160) && (itemLevel <= 199)) {
			if (itemType == weapon) {
				att += 34; mAtt += 34;
			} else {
				att += 23; mAtt += 23;
			}
		}
		if ((itemLevel >= 200) && (itemLevel <= 249)) {
			if (itemType == weapon) {
				att += 36; mAtt += 36;
			} else {
				att += 25; mAtt += 25;
			}
		}
		if (itemLevel >= 250) {
			att += 27; mAtt += 27;
		}	
	}
	
	if (slotNum == 1) {
	pendant1JobStat = jobStat;
	pendant1AllStat = allStat;
	pendant1Hp = hp;
	pendant1Mp = mp;
	pendant1Att = att;
	pendant1MAtt = mAtt;
	}
	else {
	pendant2JobStat = jobStat;
	pendant2AllStat = allStat;
	pendant2Hp = hp;
	pendant2Mp = mp;
	pendant2Att = att;
	pendant2MAtt = mAtt;
	}
}

function updatePendantStarForceStats() {
	var selectedPendant1 = document.getElementById("selectPendant1").value;
	var selectedPendant2 = document.getElementById("selectPendant2").value;
	var starForceSelect1 = document.getElementById("pendant1StarForce").value;
	var starForceSelect2 = document.getElementById("pendant2StarForce").value;
	switch(selectedPendant1) {
		/* (selectedPendant#, itemLevel, starForceLevel, itemType, itemAllStat, itemHp, itemMP, itemAttack, itemMagAttack) */
		case "daybreakPendant":
            calculatePendantStarForce(1, 140, starForceSelect1, "accessory", 8, 0, 0, 2, 2);
            break;
        case "dominatorPendant":
            calculatePendantStarForce(1, 140, starForceSelect1, "accessory", 20, 0, 0, 3, 3);
            break;
		case "superiorGolluxPendant":
            calculatePendantStarForce(1, 150, starForceSelect1, "accessory", 28, 300, 300, 5, 5);
            break;
		case "sourceOfSuffering":
            calculatePendantStarForce(1, 160, starForceSelect1, "accessory", 10, 0, 0, 3, 3);
            break;
		case "sweetwaterPendant":
            calculatePendantStarForce(1, 160, starForceSelect1, "accessory", 34, 0, 342, 0, 0);
            break;
		case "none":
            calculatePendantStarForce(1, 0, 0, "accessory", 0, 0, 0, 0, 0);
            break;	
    }
	
	switch(selectedPendant2) {
		/* (selectedPendant#, itemLevel, starForceLevel, itemType, itemAllStat, itemHp, itemMP, itemAttack, itemMagAttack) */
		case "daybreakPendant":
            calculatePendantStarForce(2, 140, starForceSelect2, "accessory", 8, 0, 0, 2, 2);
            break;
        case "dominatorPendant":
            calculatePendantStarForce(2, 140, starForceSelect2, "accessory", 20, 0, 0, 3, 3);
            break;
		case "superiorGolluxPendant":
            calculatePendantStarForce(2, 150, starForceSelect2, "accessory", 28, 300, 300, 5, 5);
            break;
		case "sourceOfSuffering":
            calculatePendantStarForce(2, 160, starForceSelect2, "accessory", 10, 0, 0, 3, 3);
            break;
		case "sweetwaterPendant":
            calculatePendantStarForce(2, 160, starForceSelect2, "accessory", 34, 0, 342, 0, 0);
            break;
		case "none":
            calculatePendantStarForce(2, 0, 0, "accessory", 0, 0, 0, 0, 0);
            break;	
    }

	/* save pendant stats */
	document.getElementById("pendant1JobStat").innerHTML = "Pendant(1) - Job Stat: " + pendant1JobStat;
	document.getElementById("pendant1AllStat").innerHTML = "Pendant(1) - All Stat: " + pendant1AllStat;
	document.getElementById("pendant1Hp").innerHTML = "Pendant(1) - Hp: " + pendant1Hp;
	document.getElementById("pendant1Mp").innerHTML = "Pendant(1) - Mp: " + pendant1Mp;
	document.getElementById("pendant1Att").innerHTML = "Pendant(1) - Att: " + pendant1Att;
	document.getElementById("pendant1MAtt").innerHTML = "Pendant(1) - M.Att: " + pendant1MAtt;
	
	document.getElementById("pendant2JobStat").innerHTML = "Pendant(2) - Job Stat: " + pendant2JobStat;
	document.getElementById("pendant2AllStat").innerHTML = "Pendant(2) - All Stat: " + pendant2AllStat;
	document.getElementById("pendant2Hp").innerHTML = "Pendant(2) - Hp: " + pendant2Hp;
	document.getElementById("pendant2Mp").innerHTML = "Pendant(2) - Mp: " + pendant2Mp;
	document.getElementById("pendant2Att").innerHTML = "Pendant(2) - Att: " + pendant2Att;
	document.getElementById("pendant2MAtt").innerHTML = "Pendant(2) - M.Att: " + pendant2MAtt;
}