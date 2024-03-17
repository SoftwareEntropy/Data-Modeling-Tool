/* hold equipment stats */
var badgeJobStat; var badgeAllStat; var badgeHp; var badgeMp; var badgeAtt; var badgeMAtt;

updateBadgeStarForceOptions();
updateBadgeStarForceStats();

/* Update star force options, change image on selection */
function updateBadgeStarForceOptions() {
    var selectedBadge = document.getElementById("selectBadge").value;
    var starForceSelect = document.getElementById("badgeStarForce");
    var badgeEquipImage = document.getElementById("badgeImage2");
	var label = document.getElementById("badgeLabel");
	var badgePot1 = document.getElementById("badgePot1");
	var badgePot2 = document.getElementById("badgePot2");
	var badgePot3 = document.getElementById("badgePot3");
	
    starForceSelect.innerHTML = "";

    var options;
    switch(selectedBadge) {
		/* [25, 24, 23, 22, 21, 20, 19, 18, 17, 16, 15, 14, 13, 12, 11, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1, 0]; 
		   [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25] */
        case "crystalVentusBadge":
            options = [0];
            badgeEquipImage.src = "images/01182087.img.info.icon._outlink.png";
			badgePot1.value = ""; badgePot2.value = ""; badgePot3.value = "";
			badgePot1.hidden = true; badgePot2.hidden = true; badgePot3.hidden = true; label.style.display = 'none';
            break;
        case "sevenDaysBadge":
            options = [0];
            badgeEquipImage.src = "images/01182200.img.info.icon._outlink.png";
			badgePot1.value = ""; badgePot2.value = ""; badgePot3.value = "";
			badgePot1.hidden = true; badgePot2.hidden = true; badgePot3.hidden = true; label.style.display = 'none';
            break;
        case "genesisBadge":
            options = [0];
            badgeEquipImage.src = "images/01182285.img.info.icon._outlink.png";
			badgePot1.value = ""; badgePot2.value = ""; badgePot3.value = "";
			badgePot1.hidden = true; badgePot2.hidden = true; badgePot3.hidden = true; label.style.display = 'none';
            break;
        case "ghostShipExorcistBadge":
            options = [25, 24, 23, 22, 21, 20, 19, 18, 17, 16, 15, 14, 13, 12, 11, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1, 0];
            badgeEquipImage.src = "images/01182060.img.info.icon._outlink.png";
			badgePot1.hidden = false; badgePot2.hidden = false; badgePot3.hidden = false; label.style.display = 'block';
            break;
		case "sengokuHakaseBadge":
            options = [25, 24, 23, 22, 21, 20, 19, 18, 17, 16, 15, 14, 13, 12, 11, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1, 0];
            badgeEquipImage.src = "images/01182273.img.info.icon._outlink.png";
			badgePot1.hidden = false; badgePot2.hidden = false; badgePot3.hidden = false; label.style.display = 'block';
            break;	
		case "none":
            options = [0];
            badgeEquipImage.src = "images/Equip.Equip.Slots.29._outlink.png";
			badgePot1.hidden = false; badgePot2.hidden = false; badgePot3.hidden = false; label.style.display = 'block';
            break;
    }
    for (var i = 0; i < options.length; i++) {
        var option = document.createElement("option");
        option.text = options[i];
        option.value = options[i];
        starForceSelect.add(option);
    }
	updateBadgeStarForceStats();
}

/* Params: Item level, selected Star Force, Item type, Item all stat, Item hp, Item mp, Item attack, Item magic attack */
/* Item types checked: weapon, gloves */
function calculateBadgeStarForce(itemLevel, starForceLevel, itemType, itemAllStat, itemHp, itemMp, itemAttack, itemMagAttack) {
	var jobStat = 0;
	var allStat = itemAllStat;
	var hp = itemHp;
	var mp = itemMp;
	var att = itemAttack;
	var mAtt = itemMagAttack;
	var weapon = "weapon";
	/* NOTE: Badges currently do not add ATT at any stage. Modified formula */
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
			}
		}
		if ((itemLevel >= 138) && (itemLevel <= 149)) {
			allStat += 9;
			if (itemType == weapon) {
				att += 7; mAtt += 7;
			}
		}
		if ((itemLevel >= 150) && (itemLevel <= 159)) {
			allStat += 11;
			if (itemType == weapon) {
				att += 8; mAtt += 8;
			}
		}
		if ((itemLevel >= 160) && (itemLevel <= 199)) {
			allStat += 13;
			if (itemType == weapon) {
				att += 9; mAtt += 9;
			}
		}
		if ((itemLevel >= 200) && (itemLevel <= 249)) {
			allStat += 15;
			if (itemType == weapon) {
				att += 13; mAtt += 13;
			}
		}
		if (itemLevel >= 250) {
			allStat += 17;
		}
	}
	if (starForceLevel >= 17) {
		if ((itemLevel >= 128) && (itemLevel <= 137)) {
			allStat += 7;
			if (itemType == weapon) {
				att += 7; mAtt += 7;
			}
		}
		if ((itemLevel >= 138) && (itemLevel <= 149)) {
			allStat += 9;
			if (itemType == weapon) {
				att += 8; mAtt += 8;
			}
		}
		if ((itemLevel >= 150) && (itemLevel <= 159)) {
			allStat += 11;
			if (itemType == weapon) {
				att += 9; mAtt += 9;
			}
		}
		if ((itemLevel >= 160) && (itemLevel <= 199)) {
			allStat += 13;
			if (itemType == weapon) {
				att += 9; mAtt += 9;
			}
		}
		if ((itemLevel >= 200) && (itemLevel <= 249)) {
			allStat += 15;
			if (itemType == weapon) {
				att += 13; mAtt += 13;
			}
		}
		if (itemLevel >= 250) {
			allStat += 17;
		}	
	}
	if (starForceLevel >= 18) {
		if ((itemLevel >= 128) && (itemLevel <= 137)) {
			allStat += 7;
			if (itemType == weapon) {
				att += 7; mAtt += 7;
			}
		}
		if ((itemLevel >= 138) && (itemLevel <= 149)) {
			allStat += 9;
			if (itemType == weapon) {
				att += 8; mAtt += 8;
			}
		}
		if ((itemLevel >= 150) && (itemLevel <= 159)) {
			allStat += 11;
			if (itemType == weapon) {
				att += 9; mAtt += 9;
			}
		}
		if ((itemLevel >= 160) && (itemLevel <= 199)) {
			allStat += 13;
			if (itemType == weapon) {
				att += 10; mAtt += 10;
			}
		}
		if ((itemLevel >= 200) && (itemLevel <= 249)) {
			allStat += 15;
			if (itemType == weapon) {
				att += 14; mAtt += 14;
			}
		}
		if (itemLevel >= 250) {
			allStat += 17;
		}
	}
	if (starForceLevel >= 19) {
		if ((itemLevel >= 128) && (itemLevel <= 137)) {
			allStat += 7;
			if (itemType == weapon) {
				att += 8; mAtt += 8;
			}
		}
		if ((itemLevel >= 138) && (itemLevel <= 149)) {
			allStat += 9;
			if (itemType == weapon) {
				att += 9; mAtt += 9;
			}
		}
		if ((itemLevel >= 150) && (itemLevel <= 159)) {
			allStat += 11;
			if (itemType == weapon) {
				att += 10; mAtt += 10;
			}
		}
		if ((itemLevel >= 160) && (itemLevel <= 199)) {
			allStat += 13;
			if (itemType == weapon) {
				att += 11; mAtt += 11;
			}
		}
		if ((itemLevel >= 200) && (itemLevel <= 249)) {
			allStat += 15;
			if (itemType == weapon) {
				att += 14; mAtt += 14;
			}
		}
		if (itemLevel >= 250) {
			allStat += 17;
		}	
	}
	if (starForceLevel >= 20) {
		if ((itemLevel >= 128) && (itemLevel <= 137)) {
			allStat += 7;
			if (itemType == weapon) {
				att += 9; mAtt += 9;
			}
		}
		if ((itemLevel >= 138) && (itemLevel <= 149)) {
			allStat += 9;
			if (itemType == weapon) {
				att += 10; mAtt += 10;
			}
		}
		if ((itemLevel >= 150) && (itemLevel <= 159)) {
			allStat += 11;
			if (itemType == weapon) {
				att += 11; mAtt += 11;
			}
		}
		if ((itemLevel >= 160) && (itemLevel <= 199)) {
			allStat += 13;
			if (itemType == weapon) {
				att += 12; mAtt += 12;
			}
		}
		if ((itemLevel >= 200) && (itemLevel <= 249)) {
			allStat += 15;
			if (itemType == weapon) {
				att += 15; mAtt += 15;
			}
		}
		if (itemLevel >= 250) {
			allStat += 17;
		}	
	}
	if (starForceLevel >= 21) {
		if ((itemLevel >= 138) && (itemLevel <= 149)) {
			allStat += 9;
			if (itemType == weapon) {
				att += 11; mAtt += 11;
			}
		}
		if ((itemLevel >= 150) && (itemLevel <= 159)) {
			allStat += 11;
			if (itemType == weapon) {
				att += 12; mAtt += 12;
			}
		}
		if ((itemLevel >= 160) && (itemLevel <= 199)) {
			allStat += 13;
			if (itemType == weapon) {
				att += 13; mAtt += 13;
			}
		}
		if ((itemLevel >= 200) && (itemLevel <= 249)) {
			allStat += 15;
			if (itemType == weapon) {
				att += 16; mAtt += 16;
			}
		}
		if (itemLevel >= 250) {
			allStat += 17;
		}
	}
	if (starForceLevel >= 22) {
		if ((itemLevel >= 138) && (itemLevel <= 149)) {
			allStat += 9;
			if (itemType == weapon) {
				att += 12; mAtt += 12;
			}
		}
		if ((itemLevel >= 150) && (itemLevel <= 159)) {
			allStat += 11;
			if (itemType == weapon) {
				att += 13; mAtt += 13;
			}
		}
		if ((itemLevel >= 160) && (itemLevel <= 199)) {
			allStat += 13;
			if (itemType == weapon) {
				att += 14; mAtt += 14;
			}
		}
		if ((itemLevel >= 200) && (itemLevel <= 249)) {
			allStat += 15;
			if (itemType == weapon) {
				att += 17; mAtt += 17;
			}
		}
		if (itemLevel >= 250) {
			allStat + 17;
		}	
	}
	if (starForceLevel >= 23) {
		if ((itemLevel >= 138) && (itemLevel <= 149)) {
			if (itemType == weapon) {
				att += 30; mAtt += 30;
			}
		}
		if ((itemLevel >= 150) && (itemLevel <= 159)) {
			if (itemType == weapon) {
				att += 31; mAtt += 31;
			}
		}
		if ((itemLevel >= 160) && (itemLevel <= 199)) {
			if (itemType == weapon) {
				att += 32; mAtt += 32;
			}
		}
		if ((itemLevel >= 200) && (itemLevel <= 249)) {
			if (itemType == weapon) {
				att += 34; mAtt += 34;
			}
		}
	}
	if (starForceLevel >= 24) {
		if ((itemLevel >= 138) && (itemLevel <= 149)) {
			if (itemType == weapon) {
				att += 31; mAtt += 31;
			}
		}
		if ((itemLevel >= 150) && (itemLevel <= 159)) {
			if (itemType == weapon) {
				att += 32; mAtt += 32;
			}
		}
		if ((itemLevel >= 160) && (itemLevel <= 199)) {
			if (itemType == weapon) {
				att += 33; mAtt += 33;
			}
		}
		if ((itemLevel >= 200) && (itemLevel <= 249)) {
			if (itemType == weapon) {
				att += 35; mAtt += 35;
			}
		}
	}
	if (starForceLevel >= 25) {
		if ((itemLevel >= 138) && (itemLevel <= 149)) {
			if (itemType == weapon) {
				att += 32; mAtt += 32;
			}
		}
		if ((itemLevel >= 150) && (itemLevel <= 159)) {
			if (itemType == weapon) {
				att += 33; mAtt += 33;
			}
		}
		if ((itemLevel >= 160) && (itemLevel <= 199)) {
			if (itemType == weapon) {
				att += 34; mAtt += 34;
			}
		}
		if ((itemLevel >= 200) && (itemLevel <= 249)) {
			if (itemType == weapon) {
				att += 36; mAtt += 36;
			}
		}
	}
	badgeJobStat = jobStat;
	badgeAllStat = allStat;
	badgeHp = hp;
	badgeMp = mp;
	badgeAtt = att;
	badgeMAtt = mAtt;
}

function updateBadgeStarForceStats() {
	var selectedBadge = document.getElementById("selectBadge").value;
	var starForceSelect = document.getElementById("badgeStarForce").value;
	switch(selectedBadge) {
		/* (itemLevel, starForceLevel, itemType, itemAllStat, itemHp, itemMP, itemAttack, itemMagAttack) */
        case "crystalVentusBadge":
			calculateBadgeStarForce(130, starForceSelect, "badge", 10, 0, 0, 5, 5);
            break;
        case "sevenDaysBadge":
			calculateBadgeStarForce(100, starForceSelect, "badge", 7, 0, 0, 7, 7);
            break;
        case "genesisBadge":
			calculateBadgeStarForce(200, starForceSelect, "badge", 15, 0, 0, 10, 10);
            break;
        case "ghostShipExorcistBadge":
			calculateBadgeStarForce(150, starForceSelect, "badge", 3, 0, 0, 2, 2);
            break;
		case "sengokuHakaseBadge":
			calculateBadgeStarForce(160, starForceSelect, "badge", 10, 0, 0, 10, 10);
            break;
		case "none":
			calculateBadgeStarForce(0, starForceSelect, "badge", 0, 0, 0, 0, 0);
            break;	
    }
	
	/* save badge accessory stats */
	document.getElementById("badgeJobStat").innerHTML = "Badge - Job Stat: " + badgeJobStat;
	document.getElementById("badgeAllStat").innerHTML = "Badge - All Stat: " + badgeAllStat;
	document.getElementById("badgeHp").innerHTML = "Badge - Hp: " + badgeHp;
	document.getElementById("badgeMp").innerHTML = "Badge - Mp: " + badgeMp;
	document.getElementById("badgeAtt").innerHTML = "Badge - Att: " + badgeAtt;
	document.getElementById("badgeMAtt").innerHTML = "Badge - M.Att: " + badgeMAtt;
}