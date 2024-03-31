/* hold equipment stats */
var ring1JobStat = 0; var ring1AllStat = 0; var ring1Hp = 0; var ring1Mp = 0; var ring1Att = 0; var ring1MAtt = 0;
var ring2JobStat = 0; var ring2AllStat = 0; var ring2Hp = 0; var ring2Mp = 0; var ring2Att = 0; var ring2MAtt = 0;
var ring3JobStat = 0; var ring3AllStat = 0; var ring3Hp = 0; var ring3Mp = 0; var ring3Att = 0; var ring3MAtt = 0;
var ring4JobStat = 0; var ring4AllStat = 0; var ring4Hp = 0; var ring4Mp = 0; var ring4Att = 0; var ring4MAtt = 0;

var ring1potLabel = document.getElementById("ring1label");
var ring1pot1 = document.getElementById("ring1Pot1");
var ring1pot2 = document.getElementById("ring1Pot2");
var ring1pot3 = document.getElementById("ring1Pot3");
var ring1LvLabel = document.getElementById("ring1Ozlabel");
var ring1LvSelector = document.getElementById("ring1Level");

var ring2potLabel = document.getElementById("ring2label");
var ring2pot1 = document.getElementById("ring2Pot1");
var ring2pot2 = document.getElementById("ring2Pot2");
var ring2pot3 = document.getElementById("ring2Pot3");
var ring2LvLabel = document.getElementById("ring2Ozlabel");
var ring2LvSelector = document.getElementById("ring2Level");

var ring3potLabel = document.getElementById("ring3label");
var ring3pot1 = document.getElementById("ring3Pot1");
var ring3pot2 = document.getElementById("ring3Pot2");
var ring3pot3 = document.getElementById("ring3Pot3");
var ring3LvLabel = document.getElementById("ring3Ozlabel");
var ring3LvSelector = document.getElementById("ring3Level");

var ring4potLabel = document.getElementById("ring4label");
var ring4pot1 = document.getElementById("ring4Pot1");
var ring4pot2 = document.getElementById("ring4Pot2");
var ring4pot3 = document.getElementById("ring4Pot3");
var ring4LvLabel = document.getElementById("ring4Ozlabel");
var ring4LvSelector = document.getElementById("ring4Level");

function restoreOptions(selector, maxIndex){
	for (let i = 0; i < maxIndex; i++) {
		selector.options[i].style.display = "";
	}
}

/* Update star force options, change image on selection */
function updateRingStarForceOptions() {
    var selectedRing1 = document.getElementById("selectRing1").value;
	var selectedRing2 = document.getElementById("selectRing2").value;
	var selectedRing3 = document.getElementById("selectRing3").value;
	var selectedRing4 = document.getElementById("selectRing4").value;
	var selectDropdown1 = document.getElementById("selectRing1");
	var selectDropdown2 = document.getElementById("selectRing2");
	var selectDropdown3 = document.getElementById("selectRing3");
	var selectDropdown4 = document.getElementById("selectRing4");
	restoreOptions(selectDropdown1, 10);
	restoreOptions(selectDropdown2, 10);
	restoreOptions(selectDropdown3, 10);
	restoreOptions(selectDropdown4, 10);
    var starForceSelect1 = document.getElementById("ring1StarForce");
	var starForceSelect2 = document.getElementById("ring2StarForce");
	var starForceSelect3 = document.getElementById("ring3StarForce");
	var starForceSelect4 = document.getElementById("ring4StarForce");
    var ring1EquipImage = document.getElementById("ring1Image2");
	var ring2EquipImage = document.getElementById("ring2Image2");
	var ring3EquipImage = document.getElementById("ring3Image2");
	var ring4EquipImage = document.getElementById("ring4Image2");
    starForceSelect1.innerHTML = "";
	starForceSelect2.innerHTML = "";
	starForceSelect3.innerHTML = "";
	starForceSelect4.innerHTML = "";
    var options;
	updateRingOptions(selectedRing1, ring1LvLabel, ring1LvSelector, ring1potLabel, ring1pot1, ring1pot2, ring1pot3, selectDropdown2, selectDropdown3, selectDropdown4, ring1EquipImage, starForceSelect1);
	updateRingOptions(selectedRing2, ring2LvLabel, ring2LvSelector, ring2potLabel, ring2pot1, ring2pot2, ring2pot3, selectDropdown1, selectDropdown3, selectDropdown4, ring2EquipImage, starForceSelect2);
	updateRingOptions(selectedRing3, ring3LvLabel, ring3LvSelector, ring3potLabel, ring3pot1, ring3pot2, ring3pot3, selectDropdown1, selectDropdown2, selectDropdown4, ring3EquipImage, starForceSelect3);
	updateRingOptions(selectedRing4, ring4LvLabel, ring4LvSelector, ring4potLabel, ring4pot1, ring4pot2, ring4pot3, selectDropdown1, selectDropdown2, selectDropdown3, ring4EquipImage, starForceSelect4);
	updateRingStarForceStats();
}

/* Update ring options */
function updateRingOptions(selection, lvLabel, lvSelector, potLabel, pot1, pot2, pot3, other1, other2, other3, ringImage, sfSelector){
	options = [25, 24, 23, 22, 21, 20, 19, 18, 17, 16, 15, 14, 13, 12, 11, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1, 0];
	lvLabel.style.display = 'none'; lvSelector.hidden = true;
	potLabel.style.display = 'block'; pot1.hidden = false; pot2.hidden = false; pot3.hidden = false;
	switch(selection) {
        case "kannasTreasure":
            ringImage.src = "images/common/01113155.img.info.icon._outlink.png";
			other1.options[1].style.display = "none"; other2.options[1].style.display = "none"; other3.options[1].style.display = "none";
			break;
		case "meisterRing":
            ringImage.src = "images/common/01113055.img.info.icon._outlink.png";
			other1.options[2].style.display = "none"; other2.options[2].style.display = "none"; other3.options[2].style.display = "none";
			break;	
        case "reinforcedGolluxRing":
            ringImage.src = "images/common/01113074.img.info.icon._outlink.png";
			other1.options[3].style.display = "none"; other2.options[3].style.display = "none"; other3.options[3].style.display = "none";
			break;
		case "superiorGolluxRing":
            ringImage.src = "images/common/01113075.img.info.icon._outlink.png";
			other1.options[4].style.display = "none"; other2.options[4].style.display = "none"; other3.options[4].style.display = "none";
			break;
		case "dawnGuardianAngelRing":
            ringImage.src = "images/common/01113316.img.info.icon._outlink.png";
			other1.options[5].style.display = "none"; other2.options[5].style.display = "none"; other3.options[5].style.display = "none";
			break;
		case "endlessTerror":
            ringImage.src = "images/common/01113306.img.info.icon._outlink.png";
			other1.options[6].style.display = "none"; other2.options[6].style.display = "none"; other3.options[6].style.display = "none";
			break;
		case "ringOfRestraint":
			options = [0];
			lvLabel.style.display = 'block'; lvSelector.hidden = false;
			potLabel.style.display = 'none'; pot1.hidden = true; pot2.hidden = true; pot3.hidden = true;
			pot1.value = "none"; pot2.value = "none"; pot3.value = "none";
            ringImage.src = "images/common/01113333.img.info.icon._outlink.png";
			other1.options[7].style.display = "none"; other2.options[7].style.display = "none"; other3.options[7].style.display = "none";
			other1.options[8].style.display = "none"; other2.options[8].style.display = "none"; other3.options[8].style.display = "none";
			other1.options[9].style.display = "none"; other2.options[9].style.display = "none"; other3.options[9].style.display = "none";
			break;
		case "continuousRing":
			options = [0];
			lvLabel.style.display = 'block'; lvSelector.hidden = false;
			potLabel.style.display = 'none'; pot1.hidden = true; pot2.hidden = true; pot3.hidden = true;
			pot1.value = "none"; pot2.value = "none"; pot3.value = "none";
            ringImage.src = "images/common/01113329.img.info.icon._outlink.png";
			other1.options[7].style.display = "none"; other2.options[7].style.display = "none"; other3.options[7].style.display = "none";
			other1.options[8].style.display = "none"; other2.options[8].style.display = "none"; other3.options[8].style.display = "none";
			other1.options[9].style.display = "none"; other2.options[9].style.display = "none"; other3.options[9].style.display = "none";
			break;
		case "weaponJumpRing":
            options = [0];
			lvLabel.style.display = 'block'; lvSelector.hidden = false;
			potLabel.style.display = 'none'; pot1.hidden = true; pot2.hidden = true; pot3.hidden = true;
			pot1.value = "none"; pot2.value = "none"; pot3.value = "none";
            ringImage.src = "images/common/01113114.img.info.icon._outlink.png";
			other1.options[7].style.display = "none"; other2.options[7].style.display = "none"; other3.options[7].style.display = "none";
			other1.options[8].style.display = "none"; other2.options[8].style.display = "none"; other3.options[8].style.display = "none";
			other1.options[9].style.display = "none"; other2.options[9].style.display = "none"; other3.options[9].style.display = "none";
			break;	
		case "none":
            options = [0];
            ringImage.src = "images/UIelements/Equip.Equip.Slots.12._outlink.png";
			selection = "none"; lvLabel.style.display = 'none'; lvSelector.hidden = true;
			potLabel.style.display = 'none'; pot1.hidden = true; pot2.hidden = true; pot3.hidden = true;
			pot1.value = "none"; pot2.value = "none"; pot3.value = "none";
            break;	
    }
	for (var i = 0; i < options.length; i++) {
        var option = document.createElement("option");
        option.text = options[i];
        option.value = options[i];
        sfSelector.add(option);
		}
	}

/* Update ring stats */
function updateRingStarForceStats() {
	var selectedRing1 = document.getElementById("selectRing1").value;
	var selectedRing2 = document.getElementById("selectRing2").value;
	var selectedRing3 = document.getElementById("selectRing3").value;
	var selectedRing4 = document.getElementById("selectRing4").value;
	var starForceSelect1 = document.getElementById("ring1StarForce").value;
	var starForceSelect2 = document.getElementById("ring2StarForce").value;
	var starForceSelect3 = document.getElementById("ring3StarForce").value;
	var starForceSelect4 = document.getElementById("ring4StarForce").value;
	
	output = getRingStats(selectedRing1, starForceSelect1);
	ring1JobStat = parseInt(output.jobStat);
	ring1AllStat = parseInt(output.allStat);
	ring1Hp = parseInt(output.hp);
	ring1Mp = parseInt(output.mp);
	ring1Att = parseInt(output.att);
	ring1MAtt = parseInt(output.mAtt);

	output = getRingStats(selectedRing2, starForceSelect2);
	ring2JobStat = parseInt(output.jobStat);
	ring2AllStat = parseInt(output.allStat);
	ring2Hp = parseInt(output.hp);
	ring2Mp = parseInt(output.mp);
	ring2Att = parseInt(output.att);
	ring2MAtt = parseInt(output.mAtt);

	output = getRingStats(selectedRing3, starForceSelect3);
	ring3JobStat = parseInt(output.jobStat);
	ring3AllStat = parseInt(output.allStat);
	ring3Hp = parseInt(output.hp);
	ring3Mp = parseInt(output.mp);
	ring3Att = parseInt(output.att);
	ring3MAtt = parseInt(output.mAtt);

	output = getRingStats(selectedRing4, starForceSelect4);
	ring4JobStat = parseInt(output.jobStat);
	ring4AllStat = parseInt(output.allStat);
	ring4Hp = parseInt(output.hp);
	ring4Mp = parseInt(output.mp);
	ring4Att = parseInt(output.att);
	ring4MAtt = parseInt(output.mAtt);
}

/* Calculate and fetch stats */
function getRingStats(selectedRing, starForceSelect) {
    switch(selectedRing) {
        case "kannasTreasure":
        case "meisterRing":
            return getItemStats(140, starForceSelect, "accessory", 0, 5, 200, 200, 1, 1);
        case "reinforcedGolluxRing":
            return getItemStats(140, starForceSelect, "accessory", 0, 8, 200, 200, 5, 5);
        case "superiorGolluxRing":
            return getItemStats(150, starForceSelect, "accessory", 0, 10, 250, 250, 8, 8);
        case "dawnGuardianAngelRing":
            return getItemStats(160, starForceSelect, "accessory", 0, 5, 200, 200, 2, 2);
        case "endlessTerror":
            return getItemStats(200, starForceSelect, "accessory", 0, 5, 250, 250, 4, 4);
        case "ringOfRestraint":
        case "continuousRing":
        case "weaponJumpRing":
            return getItemStats(110, 0, "accessory", 0, 4, 0, 0, 4, 4);
        case "none":
            return getItemStats(0, 0, "accessory", 0, 0, 0, 0, 0, 0);
        default:
            return;
    }
}