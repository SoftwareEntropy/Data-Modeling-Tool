/* hold equipment stats */
var shoeJobStat; var shoeAllStat; var shoeHp; var shoeMp; var shoeAtt; var shoeMAtt;

updateShoeStarForceOptions();
updateShoeStarForceStats();

/* Update star force options, change image on selection */
function updateShoeStarForceOptions() {
    var selectedShoe = document.getElementById("selectShoe").value;
    var starForceSelect = document.getElementById("shoeStarForce");
    var shoeEquipImage = document.getElementById("shoeImage2");
    starForceSelect.innerHTML = "";

    var options;
    switch(selectedShoe) {
		/* [25, 24, 23, 22, 21, 20, 19, 18, 17, 16, 15, 14, 13, 12, 11, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1, 0]; 
		   [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25] */
        case "tyrantShoe":
            options = [15, 14, 13, 12, 11, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1, 0];
            shoeEquipImage.src = "images/01072743.img.info.icon._outlink.png";
            break;
        case "absolabShoe":
            options = [25, 24, 23, 22, 21, 20, 19, 18, 17, 16, 15, 14, 13, 12, 11, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1, 0];
            shoeEquipImage.src = "images/01073032.img.info.icon._outlink.png";
            break;
		case "arcaneShoe":
            options = [25, 24, 23, 22, 21, 20, 19, 18, 17, 16, 15, 14, 13, 12, 11, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1, 0];
            shoeEquipImage.src = "images/01073159.img.info.icon._outlink.png";
            break;
		case "none":
            options = [0];
            shoeEquipImage.src = "images/Equip.Equip.Slots.7._outlink.png";
            break;	
    }
    for (var i = 0; i < options.length; i++) {
        var option = document.createElement("option");
        option.text = options[i];
        option.value = options[i];
        starForceSelect.add(option);
    }
	updateShoeStarForceStats();
}

/* Params: Item level, selected Star Force, Item type, Item all stat, Item hp, Item mp, Item attack, Item magic attack */
/* Item types checked: weapon, gloves */
function calculateShoeStarForce(itemLevel, starForceLevel, itemType, itemJobStat, itemAllStat, itemHp, itemMp, itemAttack, itemMagAttack) {
	var jobStat = itemJobStat;
	var allStat = itemAllStat;
	var hp = itemHp;
	var mp = itemMp;
	var att = itemAttack;
	var mAtt = itemMagAttack;
	var weapon = "weapon";
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
	shoeJobStat = jobStat;
	shoeAllStat = allStat;
	shoeHp = hp;
	shoeMp = mp;
	shoeAtt = att;
	shoeMAtt = mAtt;
}

function calculateSuperiorShoeStarForce(itemLevel, starForceLevel, itemType, itemJobStat, itemAllStat, itemHp, itemMp, itemAttack, itemMagAttack) {
	var jobStat = itemJobStat;
	var allStat = itemAllStat;
	var hp = itemHp;
	var mp = itemMp;
	var att = itemAttack;
	var mAtt = itemMagAttack;
	if (starForceLevel >= 1) {
		allStat += 19;
	}
	if (starForceLevel >= 2) {
		allStat += 20;
	}
	if (starForceLevel >= 3) {
		allStat += 22;
	}
	if (starForceLevel >= 4) {
		allStat += 25;
	}
	if (starForceLevel >= 5){
		allStat += 29;
	}
	if (starForceLevel >= 6) {
		att += 9; mAtt += 9;
	}
	if (starForceLevel >= 7){
		att += 10; mAtt += 10;
	}
	if (starForceLevel >= 8) {
		att += 11; mAtt += 11;
	}
	if (starForceLevel >= 9) {
		att += 12; mAtt += 12;
	}
	if (starForceLevel >= 10) {
		att += 13; mAtt += 13;
	}
	if (starForceLevel >= 11) {
		att += 15; mAtt += 15;	
	}
	if (starForceLevel >= 12) {
		att += 17; mAtt += 17;	
	}
	if (starForceLevel >= 13) {
		att += 19; mAtt += 19;	
	}
	if (starForceLevel >= 14) {
		att += 21; mAtt += 21;
	}
	if (starForceLevel >= 15) {
		att += 23; mAtt += 23;	
	}
	shoeJobStat = jobStat;
	shoeAllStat = allStat;
	shoeHp = hp;
	shoeMp = mp;
	shoeAtt = att;
	shoeMAtt = mAtt;
}

function updateShoeStarForceStats() {
	var selectedShoe = document.getElementById("selectShoe").value;
	var starForceSelect = document.getElementById("shoeStarForce").value;
	switch(selectedShoe) {
		/* (itemLevel, starForceLevel, itemType, jobStats, itemAllStat, itemHp, itemMP, itemAttack, itemMagAttack) */
		case "tyrantShoe":
            calculateSuperiorShoeStarForce(150, starForceSelect, "superior", 0, 50, 0, 0, 30, 30);
            break;
        case "absolabShoe":
            calculateShoeStarForce(160, starForceSelect, "shoe", 20, 0, 0, 0, 5, 5);
            break;
		case "arcaneShoe":
            calculateShoeStarForce(200, starForceSelect, "shoe", 40, 00, 0, 0, 9, 9);
            break;
		case "none":
            calculateShoeStarForce(0, starForceSelect, "shoe", 0, 0, 0, 0, 0, 0);
            break;	
    }
	
	/* save shoes stats */
	document.getElementById("shoeJobStat").innerHTML = "Shoes - Job Stat: " + shoeJobStat;
	document.getElementById("shoeAllStat").innerHTML = "Shoes - All Stat: " + shoeAllStat;
	document.getElementById("shoeHp").innerHTML = "Shoes - Hp: " + shoeHp;
	document.getElementById("shoeMp").innerHTML = "Shoes - Mp: " + shoeMp;
	document.getElementById("shoeAtt").innerHTML = "Shoes - Att: " + shoeAtt;
	document.getElementById("shoeMAtt").innerHTML = "Shoes - M.Att: " + shoeMAtt;
}