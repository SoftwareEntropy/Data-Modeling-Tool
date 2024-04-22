/* hold equipment stats */
var subweaponJobStat = 0; var subweaponAllStat = 0; var subweaponHp = 0; var subweaponMp = 0; var subweaponAtt = 0; var subweaponMAtt = 0; var subweaponBoss = 0; var subweaponIed = 0;

var charClass = document.getElementById("selectClass");
var selectDropdown = document.getElementById("selectSubweapon");
var selectWeapon = document.getElementById("selectWeapon")
selectWeapon.addEventListener("change", updateSubweaponStarForceOptions);
for (var i = 2; i <= 8; i++) {
	selectDropdown.options[i].style.display = "none";
}
charClass.addEventListener("change", updateSubweaponStarForceOptions);

updateSubweaponStarForceOptions();

/* Update star force options, change image on selection */
function updateSubweaponStarForceOptions() {
    var selectedSubweapon = document.getElementById("selectSubweapon").value;
    var starForceSelect = document.getElementById("subweaponStarForce");
    var subweaponEquipImage = document.getElementById("subweaponImage2");
	var charClassSelected = document.getElementById("selectClass").value;
    starForceSelect.innerHTML = "";
	for (var i = 2; i <= 8; i++) {
		selectDropdown.options[i].style.display = "none";
	}
	switch (charClassSelected) {
		/* PNo only */
		case "adele": case "aran": case "ark": case "blaster": case "buccaneer": case "cannoneer": case "darkKnight": case "dawnWarrior":
		case "demonSlayer": case "hayato": case "hero": case "kaiser": case "mihile": case "paladin": case "shade": case "thunderBreaker":
		case "angelicBuster": case "bowmaster": case "corsair": case "kain": case "marksman": case "mechanic": case "mercedes": case "pathfinder":
		case "wildHunter": case "windArcher": case "archMageIceLightning": case "archMageFirePoison": case "battleMage": case "beastTamer":
		case "bishop": case "blazeWizard": case "evan": case "illium": case "kinesis": case "lara": case "luminous": case "hoyoung": case "khali":
		case "nightLord": case "nightWalker": case "phantom": case "cadena": case "shadower": case "demonAvenger": case "xenon":
			selectDropdown.options[1].style.display = "block";
			break;
		default:
			break;
	}
		/* Ruin force shield demon aegis */
	if (charClassSelected == "demonSlayer" || charClassSelected == "demonAvenger") {
		selectDropdown.options[6].style.display = "block";
	} else {
		if (selectDropdown.selectedIndex == 6) {
			selectDropdown.selectedIndex = 0;
			selectedSubweapon = "none";
		}
	};
		/* Mage shield */
	if (charClassSelected == "archMageIceLightning" || charClassSelected == "archMageFirePoison" || charClassSelected == "battleMage" || 
	charClassSelected == "beastTamer" || charClassSelected == "bishop" || charClassSelected == "blazeWizard" || charClassSelected == "evan") {	
		selectDropdown.options[3].style.display = "block";
	} else {
		if (selectDropdown.selectedIndex == 3) {
			selectDropdown.selectedIndex = 0;
			selectedSubweapon = "none";
		}
	};
	if (charClassSelected == "kanna") {
		selectDropdown.options[7].style.display = "block";
	} else {
		if (selectDropdown.selectedIndex == 7) {
			selectDropdown.selectedIndex = 0;
			selectedSubweapon = "none";
		}
	};
		/* Katara */
	if (charClassSelected == "dualBlade") {
		selectDropdown.options[2].style.display = "block";
		selectedSubweapon = "sweetwaterKatara";
		selectDropdown.selectedIndex = 2;
	} else {
		if (selectDropdown.selectedIndex == 2) {
			selectDropdown.selectedIndex = 0;
			selectedSubweapon = "none";
		}
	};
	if (charClassSelected == "shadower") {
		selectDropdown.options[5].style.display = "block";
	} else {
		if (selectDropdown.selectedIndex == 5) {
			selectDropdown.selectedIndex = 0;
			selectedSubweapon = "none";
		}
	};
	if (charClassSelected == "zero") {
		selectDropdown.options[8].style.display = "block";
		selectedSubweapon = "lapis";
		selectDropdown.selectedIndex = 8;
	} else {
		if (selectDropdown.selectedIndex == 8) {
			selectDropdown.selectedIndex = 0;
			selectedSubweapon = "none";
		}
	};
    var options = [25, 24, 23, 22, 21, 20, 19, 18, 17, 16, 15, 14, 13, 12, 11, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1, 0];
    switch(selectedSubweapon) {
        case "princessNoSubweapon":
            options = [0];
            subweaponEquipImage.src = "images/magician/01352815.img.info.icon._outlink.png"; subweaponBoss = 0; subweaponIed = 0;
            break;
        case "sweetwaterKatara":
            subweaponEquipImage.src = "images/thief/01342090.img.info.icon._outlink.png"; subweaponBoss = 30; subweaponIed = 10;
            break;
		case "deimosMageShield":
            options = [20, 19, 18, 17, 16, 15, 14, 13, 12, 11, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1, 0];
            subweaponEquipImage.src = "images/magician/01092089.img.info.icon._outlink.png"; subweaponBoss = 0; subweaponIed = 0;
            break;
		case "deimosWarriorShield":
			options = [20, 19, 18, 17, 16, 15, 14, 13, 12, 11, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1, 0];
            subweaponEquipImage.src = "images/warrior/01092087.img.info.icon._outlink.png"; subweaponBoss = 0; subweaponIed = 0;
            break;
		case "deimosThiefShield":
			options = [20, 19, 18, 17, 16, 15, 14, 13, 12, 11, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1, 0];
            subweaponEquipImage.src = "images/thief/01092088.img.info.icon._outlink.png"; subweaponBoss = 0; subweaponIed = 0;
            break;
		case "ruinForceShield":
            options = [0];
            subweaponEquipImage.src = "images/warrior/01099015.img.info.icon._outlink.png"; subweaponBoss = 0; subweaponIed = 0;
            break;
		case "kannaFan":
            options = [0];
            subweaponEquipImage.src = "images/magician/01552119.img.info.icon._outlink.png"; subweaponBoss = 0; subweaponIed = 0;
            break;
		case "lapis":
            subweaponEquipImage.src = "images/warrior/01562007.img.info.icon._outlink.png"; subweaponBoss = 0; subweaponIed = 0;
            break;	
		case "none":
            options = [0];
            subweaponEquipImage.src = "images/UIelements/Equip.Equip.Slots.10._outlink.png"; subweaponBoss = 0; subweaponIed = 0;
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

/* Calculate and fetch stats */
function updateSubweaponStarForceStats() {
	var selectedSubweapon = document.getElementById("selectSubweapon").value;
	var starForceSelect = document.getElementById("subweaponStarForce").value;
	switch(selectedSubweapon) {
		/* (itemLevel, starForceLevel, itemType, itemJobStat, itemAllStat, itemHp, itemMP, itemAttack, itemMagAttack) */
        case "princessNoSubweapon":
            output = getItemStats(140, starForceSelect, "weapon", 0, 0, 0, 0, 0, 0);
            break;
		case "sweetwaterKatara":
            output = getItemStats(160, starForceSelect, "weapon", 0, 0, 500, 0, 86, 0);
            break;
		case "deimosMageShield":
            output = getItemStats(130, starForceSelect, "weapon", 0, 0, 0, 0, 0, 0);
            break;
		case "deimosWarriorShield":
            output = getItemStats(130, starForceSelect, "weapon", 0, 0, 0, 0, 0, 0);
            break;
		case "ruinForceShield":
            output = getItemStats(100, starForceSelect, "weapon", 10, 0, 560, 0, 9, 9);
            break;
		case "deimosThiefShield":
			output = getItemStats(100, starForceSelect, "weapon", 0, 0, 0, 0, 0, 0);
            break;
		case "kannaFan":
			output = getItemStats(200, starForceSelect, "weapon", 100, 0, 0, 0, 206, 347);
			break;
		case "lapis":
			output = getItemStats(200, starForceSelect, "weapon", 0, 0, 0, 0, 0, 0);
			break;	
		default:
            output = getItemStats(0, starForceSelect, "weapon", 0, 0, 0, 0, 0, 0);
            break;	
    }
	subweaponJobStat = parseInt(output.jobStat);
	subweaponAllStat = parseInt(output.allStat);
	subweaponHp = parseInt(output.hp);
	subweaponMp = parseInt(output.mp);
	subweaponAtt = parseInt(output.att);
	subweaponMAtt = parseInt(output.mAtt);
}

/* Calculate and fetch stats */
function updateSubweaponStats(itemLevel, starForceLevel, itemType, jobStat, allStat, hp, mp, att, matt) {
    output = getItemStats(itemLevel, starForceLevel, itemType, jobStat, allStat, hp, mp, att, matt);
	subweaponJobStat = parseInt(output.jobStat);
	subweaponAllStat = parseInt(output.allStat);
	subweaponHp = parseInt(output.hp);
	subweaponMp = parseInt(output.mp);
	subweaponAtt = parseInt(output.att);
	subweaponMAtt = parseInt(output.mAtt);
}