/* hold equipment stats */
var weaponJobStat = 0; var weaponAllStat = 0; var weaponHp = 0; var weaponMp = 0; var weaponAtt = 0; var weaponMAtt = 0;

/* Update star force options, change image on selection */
function updateWeaponStarForceOptions() {
    var selectedWeapon = document.getElementById("selectWeapon").value;
    var starForceSelect = document.getElementById("weaponStarForce");
    var weaponEquipImage = document.getElementById("weaponImage2");
    starForceSelect.innerHTML = "";
    var options = [25, 24, 23, 22, 21, 20, 19, 18, 17, 16, 15, 14, 13, 12, 11, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1, 0];;
    switch(selectedWeapon) {
        case "fafnirWeapon":
            weaponEquipImage.src = "images/magician/01252103.img.info.icon._outlink.png";
            break;
        case "absolabWeapon":
            weaponEquipImage.src = "images/magician/01252104.img.info.icon._outlink.png";
            break;
		case "arcaneWeapon":
            weaponEquipImage.src = "images/magician/01252108.img.info.icon._outlink.png";
            break;
		case "genesisWeapon":
            options = [22];
            weaponEquipImage.src = "images/magician/01252106.img.info.icon._outlink.png";
            break;
		case "none":
            options = [0];
            weaponEquipImage.src = "images/UIelements/Equip.Equip.Slots.11._outlink.png";
            break;	
    }
    for (var i = 0; i < options.length; i++) {
        var option = document.createElement("option");
        option.text = options[i];
        option.value = options[i];
        starForceSelect.add(option);
    }
	updateWeaponStarForceStats();
}

/* Calculate and fetch stats */
function updateWeaponStarForceStats() {
	var selectedWeapon = document.getElementById("selectWeapon").value;
	var starForceSelect = document.getElementById("weaponStarForce").value;
	switch(selectedWeapon) {
		/* (itemLevel, starForceLevel, itemType, itemJobStat, itemAllStat, itemHp, itemMP, itemAttack, itemMagAttack) */
        case "fafnirWeapon":
            output = getItemStats(150, starForceSelect, "weapon", 0, 0, 0, 0, 0, 0);
            break;
		case "absolabWeapon":
            output = getItemStats(160, starForceSelect, "weapon", 0, 0, 0, 0, 0, 0);
            break;
		case "arcaneWeapon":
            output = getItemStats(200, starForceSelect, "weapon", 0, 0, 0, 0, 0, 0);
            break;
		case "genesisWeapon":
            output = getItemStats(200, starForceSelect, "weapon", 0, 0, 0, 0, 0, 0);
            break;
		case "none":
            output = getItemStats(0, starForceSelect, "weapon", 0, 0, 0, 0, 0, 0);
            break;	
    }
	weaponJobStat = parseInt(output.jobStat);
	weaponAllStat = parseInt(output.allStat);
	weaponHp = parseInt(output.hp);
	weaponMp = parseInt(output.mp);
	weaponAtt = parseInt(output.att);
	weaponMAtt = parseInt(output.mAtt);
}

/* Calculate and fetch stats */
function updateWeaponStats(itemLevel, starForceLevel, itemType, jobStat, allStat, hp, mp, att, matt) {
    output = getItemStats(itemLevel, starForceLevel, itemType, jobStat, allStat, hp, mp, att, matt);
	weaponJobStat = parseInt(output.jobStat);
	weaponAllStat = parseInt(output.allStat);
	weaponHp = parseInt(output.hp);
	weaponMp = parseInt(output.mp);
	weaponAtt = parseInt(output.att);
	weaponMAtt = parseInt(output.mAtt);
}