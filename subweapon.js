/* hold equipment stats */
var subweaponJobStat = 0; var subweaponAllStat = 0; var subweaponHp = 0; var subweaponMp = 0; var subweaponAtt = 0; var subweaponMAtt = 0;

updateSubweaponStarForceOptions();
updateSubweaponStarForceStats();

/* Update star force options, change image on selection */
function updateSubweaponStarForceOptions() {
    var selectedSubweapon = document.getElementById("selectSubweapon").value;
    var starForceSelect = document.getElementById("subweaponStarForce");
    var subweaponEquipImage = document.getElementById("subweaponImage2");
    starForceSelect.innerHTML = "";

    var options;
    switch(selectedSubweapon) {
		/* [25, 24, 23, 22, 21, 20, 19, 18, 17, 16, 15, 14, 13, 12, 11, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1, 0]; 
		   [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25] */
        case "princessNoSubweapon":
            options = [0];
            subweaponEquipImage.src = "images/02630594.info.icon._outlink.png";
            break;
        case "sweetwaterKatara":
            options = [25, 24, 23, 22, 21, 20, 19, 18, 17, 16, 15, 14, 13, 12, 11, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1, 0];
            subweaponEquipImage.src = "images/01342090.img.info.icon._outlink.png";
            break;
		case "deimosMageShield":
            options = [20, 19, 18, 17, 16, 15, 14, 13, 12, 11, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1, 0];
            subweaponEquipImage.src = "images/01092089.img.info.icon._outlink.png";
            break;
		case "deimosWarriorShield":
            options = [25, 24, 23, 22, 21, 20, 19, 18, 17, 16, 15, 14, 13, 12, 11, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1, 0];
            subweaponEquipImage.src = "images/01092087.img.info.icon._outlink.png";
            break;
		case "deimosThiefShield":
            options = [25, 24, 23, 22, 21, 20, 19, 18, 17, 16, 15, 14, 13, 12, 11, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1, 0];
            subweaponEquipImage.src = "images/01092088.img.info.icon._outlink.png";
            break;
		case "ruinForceShield":
            options = [0];
            subweaponEquipImage.src = "images/01099015.img.info.icon._outlink.png";
            break;
		case "kannaFan":
            options = [0];
            subweaponEquipImage.src = "images/magician/01552119.img.info.icon._outlink.png";
            break;
		case "lapis":
            options = [25, 24, 23, 22, 21, 20, 19, 18, 17, 16, 15, 14, 13, 12, 11, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1, 0];
            subweaponEquipImage.src = "images/";
            break;	
		case "none":
            options = [0];
            subweaponEquipImage.src = "images/Equip.Equip.Slots.10._outlink.png";
            break;	
    }
    for (var i = 0; i < options.length; i++) {
        var option = document.createElement("option");
        option.text = options[i];
        option.value = options[i];
        starForceSelect.add(option);
    }
	updateSubweaponStarForceStats();
}

/* Params: Item level, selected Star Force, Item type, Item all stat, Item hp, Item mp, Item attack, Item magic attack */
/* Item types checked: weapon, gloves */
function calculateSubweaponStarForce(itemLevel, starForceLevel, itemType, itemJobStat, itemAllStat, itemHp, itemMp, itemAttack, itemMagAttack) {
	var jobStat = itemJobStat;
	var allStat = itemAllStat;
	var hp = itemHp;
	var mp = itemMp;
	var att = itemAttack;
	var mAtt = itemMagAttack;
	if (starForceLevel >= 1) {
		jobStat += 2; hp += 5; mp += 5;
		if (itemType == "weapon") {
			att += 1 + Math.floor(att * (2 / 100));
			mAtt += 1 + Math.floor(mAtt * (2 / 100));
		}
	}
	if (starForceLevel >= 2) {
		jobStat += 2; hp += 5; mp += 5;
		if (itemType == "weapon") {
			att += 1 + Math.floor(att * (2 / 100));
			mAtt += 1 + Math.floor(mAtt * (2 / 100));
		}
	}
	if (starForceLevel >= 3) {
		jobStat += 2; hp += 5; mp += 5;
		if (itemType == "weapon") {
			att += 1 + Math.floor(att * (2 / 100));
			mAtt += 1 + Math.floor(mAtt * (2 / 100));
		}
	}
	if (starForceLevel >= 4) {
		jobStat += 2; hp += 10; mp += 10;
		if (itemType == "weapon") {
			att += 1 + Math.floor(att * (2 / 100));
			mAtt += 1 + Math.floor(mAtt * (2 / 100));
		}
	}
	if (starForceLevel >= 5){
		jobStat += 2; hp += 10; mp += 10;
		if (itemType == "weapon") {
			att += 1 + Math.floor(att * (2 / 100));
			mAtt += 1 + Math.floor(mAtt * (2 / 100));
		}
		if (itemType === "gloves") {
			att += 1; mAtt += 1;
		}
	}
	if (starForceLevel >= 6) {
		jobStat += 3; hp += 15; mp += 15;
		if (itemType == "weapon") {
			att += 1 + Math.floor(att * (2 / 100));
			mAtt += 1 + Math.floor(mAtt * (2 / 100));
		}
	}
	if (starForceLevel >= 7){
		jobStat += 3; hp += 15; mp += 15;
		if (itemType == "weapon") {
			att += 1 + Math.floor(att * (2 / 100));
			mAtt += 1 + Math.floor(mAtt * (2 / 100));
		}
		if (itemType == "gloves") {
			att += 1; mAtt += 1;
		}
	}
	if (starForceLevel >= 8) {
		jobStat += 3; hp += 20; mp += 20;
		if (itemType == "weapon") {
			att += 1 + Math.floor(att * (2 / 100));
			mAtt += 1 + Math.floor(mAtt * (2 / 100));
		}
	}
	if (starForceLevel >= 9) {
		jobStat += 3; hp += 20; mp += 20;
		if (itemType == "weapon") {
			att += 1 + Math.floor(att * (2 / 100));
			mAtt += 1 + Math.floor(mAtt * (2 / 100));
		}
		if (itemType == "gloves") {
			att += 1; mAtt += 1;
		}
	}
	if (starForceLevel >= 10) {
		jobStat += 3; hp += 25; mp += 25;
		if (itemType == "weapon") {
			att += 1 + Math.floor(att * (2 / 100));
			mAtt += 1 + Math.floor(mAtt * (2 / 100));
		}
	}
	if (starForceLevel >= 11) {
		jobStat += 3; hp += 25; mp += 25;
		if (itemType == "weapon") {
			att += 1 + Math.floor(att * (2 / 100));
			mAtt += 1 + Math.floor(mAtt * (2 / 100));
		}
		if (itemType == "gloves") {
			att += 1; mAtt += 1;
		}	
	}
	if (starForceLevel >= 12) {
		jobStat += 3; hp += 25; mp += 25;
		if (itemType == "weapon") {
			att += 1 + Math.floor(att * (2 / 100));
			mAtt += 1 + Math.floor(mAtt * (2 / 100));
		}	
	}
	if (starForceLevel >= 13) {
		jobStat += 3; hp += 25; mp += 25;
		if (itemType == "weapon") {
			att += 1 + Math.floor(att * (2 / 100));
			mAtt += 1 + Math.floor(mAtt * (2 / 100));
		}
		if (itemType == "gloves") {
			att += 1; mAtt += 1;
		}	
	}
	if (starForceLevel >= 14) {
		jobStat += 3; hp += 25; mp += 25;
		if (itemType == "weapon") {
			att += 1 + Math.floor(att * (2 / 100));
			mAtt += 1 + Math.floor(mAtt * (2 / 100));
		}
		if (itemType == "gloves") {
			att += 1; mAtt += 1;
		}
	}
	if (starForceLevel >= 15) {
		jobStat += 3; hp += 25; mp += 25;
		if (itemType == "weapon") {
			att += 1 + Math.floor(att * (2 / 100));
			mAtt += 1 + Math.floor(mAtt * (2 / 100));
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
	subweaponJobStat = jobStat;
	subweaponAllStat = allStat;
	subweaponHp = hp;
	subweaponMp = mp;
	subweaponAtt = att;
	subweaponMAtt = mAtt;
}

function updateSubweaponStarForceStats() {
	var selectedSubweapon = document.getElementById("selectSubweapon").value;
	var starForceSelect = document.getElementById("subweaponStarForce").value;
	switch(selectedSubweapon) {
		/* (itemLevel, starForceLevel, itemType, jobStats, itemAllStat, itemHp, itemMP, itemAttack, itemMagAttack) */
        case "princessNoSubweapon":
            calculateSubweaponStarForce(140, starForceSelect, "weapon", 0, 0, 0, 0, 0, 0);
            break;
		case "sweetwaterKatara":
            calculateSubweaponStarForce(160, starForceSelect, "weapon", 0, 0, 500, 0, 86, 0);
            break;
		case "deimosMageShield":
            calculateSubweaponStarForce(130, starForceSelect, "weapon", 10, 0, 0, 0, 0, 0); /*only int*/
            break;
		case "deimosWarriorShield":
            calculateSubweaponStarForce(130, starForceSelect, "weapon", 10, 0, 0, 0, 0, 0);
            break;
		case "ruinForceShield":
            calculateSubweaponStarForce(100, starForceSelect, "weapon", 10, 0, 560, 0, 9, 9);
            break;
		case "deimosThiefShield":
			calculateSubweaponStarForce(100, starForceSelect, "weapon", 10, 0, 0, 0, 0, 0);
            break;
		case "kannaFan":
			calculateSubweaponStarForce(200, starForceSelect, "weapon", 100, 0, 0, 0, 206, 347);
			break;
		case "lapis":
			calculateSubweaponStarForce(200, starForceSelect, "weapon", 0, 0, 0, 0, 0, 0);
			break;	
		case "none":
            calculateSubweaponStarForce(0, starForceSelect, "weapon", 0, 0, 0, 0, 0, 0);
            break;	
    }
}