/* hold equipment stats */
var ring1JobStat; var ring1AllStat; var ring1Hp; var ring1Mp; var ring1Att; var ring1MAtt;
var ring2JobStat; var ring2AllStat; var ring2Hp; var ring2Mp; var ring2Att; var ring2MAtt;
var ring3JobStat; var ring3AllStat; var ring3Hp; var ring3Mp; var ring3Att; var ring3MAtt;
var ring4JobStat; var ring4AllStat; var ring4Hp; var ring4Mp; var ring4Att; var ring4MAtt;

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

updateRingStarForceOptions();
updateRingStarForceStats();

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
	
    switch(selectedRing1) {
		/* [25, 24, 23, 22, 21, 20, 19, 18, 17, 16, 15, 14, 13, 12, 11, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1, 0]; 
		   [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25] */
        case "kannasTreasure":
            options = [25, 24, 23, 22, 21, 20, 19, 18, 17, 16, 15, 14, 13, 12, 11, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1, 0];
			ring1LvLabel.style.display = 'none'; ring1LvSelector.hidden = true;
			ring1potLabel.style.display = 'block'; ring1pot1.hidden = false; ring1pot2.hidden = false; ring1pot3.hidden = false;
			if (selectedRing2 == "kannasTreasure" || selectedRing3 == "kannasTreasure" || selectedRing4 == "kannasTreasure") {
				selectedRing1 = "none"; options = [0]; ring1EquipImage.src = "images/Equip.Equip.Slots.12._outlink.png"; break;};
            ring1EquipImage.src = "images/01113155.img.info.icon._outlink.png";
			selectDropdown2.options[1].style.display = "none"; selectDropdown3.options[1].style.display = "none"; selectDropdown4.options[1].style.display = "none";
			break;
		case "meisterRing":
            options = [25, 24, 23, 22, 21, 20, 19, 18, 17, 16, 15, 14, 13, 12, 11, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1, 0];
			ring1LvLabel.style.display = 'none'; ring1LvSelector.hidden = true;
			ring1potLabel.style.display = 'block'; ring1pot1.hidden = false; ring1pot2.hidden = false; ring1pot3.hidden = false;
			if (selectedRing2 == "meisterRing" || selectedRing3 == "meisterRing" || selectedRing4 == "meisterRing") {
				selectedRing1 = "none"; options = [0]; ring1EquipImage.src = "images/Equip.Equip.Slots.12._outlink.png"; break;};
            ring1EquipImage.src = "images/01113055.img.info.icon._outlink.png";
			selectDropdown2.options[2].style.display = "none"; selectDropdown3.options[2].style.display = "none"; selectDropdown4.options[2].style.display = "none";
			break;	
        case "reinforcedGolluxRing":
            options = [25, 24, 23, 22, 21, 20, 19, 18, 17, 16, 15, 14, 13, 12, 11, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1, 0];
			ring1LvLabel.style.display = 'none'; ring1LvSelector.hidden = true;
			ring1potLabel.style.display = 'block'; ring1pot1.hidden = false; ring1pot2.hidden = false; ring1pot3.hidden = false;
			if (selectedRing2 == "reinforcedGolluxRing" || selectedRing3 == "reinforcedGolluxRing" || selectedRing4 == "reinforcedGolluxRing") {
				selectedRing1 = "none"; options = [0]; ring1EquipImage.src = "images/Equip.Equip.Slots.12._outlink.png"; break;};
            ring1EquipImage.src = "images/01113074.img.info.icon._outlink.png";
			selectDropdown2.options[3].style.display = "none"; selectDropdown3.options[3].style.display = "none"; selectDropdown4.options[3].style.display = "none";
			break;
		case "superiorGolluxRing":
            options = [25, 24, 23, 22, 21, 20, 19, 18, 17, 16, 15, 14, 13, 12, 11, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1, 0];
			ring1LvLabel.style.display = 'none'; ring1LvSelector.hidden = true;
			ring1potLabel.style.display = 'block'; ring1pot1.hidden = false; ring1pot2.hidden = false; ring1pot3.hidden = false;
			if (selectedRing2 == "superiorGolluxRing" || selectedRing3 == "superiorGolluxRing" || selectedRing4 == "superiorGolluxRing") {
				selectedRing1 = "none"; options = [0]; ring1EquipImage.src = "images/Equip.Equip.Slots.12._outlink.png"; break;};
            ring1EquipImage.src = "images/01113075.img.info.icon._outlink.png";
			selectDropdown2.options[4].style.display = "none"; selectDropdown3.options[4].style.display = "none"; selectDropdown4.options[4].style.display = "none";
			break;
		case "dawnGuardianAngelRing":
            options = [25, 24, 23, 22, 21, 20, 19, 18, 17, 16, 15, 14, 13, 12, 11, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1, 0];
			ring1LvLabel.style.display = 'none'; ring1LvSelector.hidden = true;
			ring1potLabel.style.display = 'block'; ring1pot1.hidden = false; ring1pot2.hidden = false; ring1pot3.hidden = false;
			if (selectedRing2 == "dawnGuardianAngelRing" || selectedRing3 == "dawnGuardianAngelRing" || selectedRing4 == "dawnGuardianAngelRing") {
				selectedRing1 = "none"; options = [0]; ring1EquipImage.src = "images/Equip.Equip.Slots.12._outlink.png"; break;};
            ring1EquipImage.src = "images/01113316.img.info.icon._outlink.png";
			selectDropdown2.options[5].style.display = "none"; selectDropdown3.options[5].style.display = "none"; selectDropdown4.options[5].style.display = "none";
			break;
		case "endlessTerror":
            options = [25, 24, 23, 22, 21, 20, 19, 18, 17, 16, 15, 14, 13, 12, 11, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1, 0];
			ring1LvLabel.style.display = 'none'; ring1LvSelector.hidden = true;
			ring1potLabel.style.display = 'block'; ring1pot1.hidden = false; ring1pot2.hidden = false; ring1pot3.hidden = false;
			if (selectedRing2 == "endlessTerror" || selectedRing3 == "endlessTerror" || selectedRing4 == "endlessTerror") {
				selectedRing1 = "none"; options = [0]; ring1EquipImage.src = "images/Equip.Equip.Slots.12._outlink.png"; break;};
            ring1EquipImage.src = "images/01113306.img.info.icon._outlink.png";
			selectDropdown2.options[6].style.display = "none"; selectDropdown3.options[6].style.display = "none"; selectDropdown4.options[6].style.display = "none";
			break;
		case "ringOfRestraint":
            options = [0];
			ring1LvLabel.style.display = 'block'; ring1LvSelector.hidden = false;
			ring1potLabel.style.display = 'none'; ring1pot1.hidden = true; ring1pot2.hidden = true; ring1pot3.hidden = true;
			ring1pot1.value = "none"; ring1pot2.value = "none"; ring1pot3.value = "none";
			if (selectedRing2 == "ringOfRestraint" || selectedRing3 == "ringOfRestraint" || selectedRing4 == "ringOfRestraint"
			|| selectedRing2 == "continuousRing" || selectedRing3 == "continuousRing" || selectedRing4 == "continuousRing"
			|| selectedRing2 == "weaponJumpRing" || selectedRing3 == "weaponJumpRing" || selectedRing4 == "weaponJumpRing") {
				selectedRing1 = "none"; options = [0]; ring1EquipImage.src = "images/Equip.Equip.Slots.12._outlink.png"; break;};
            ring1EquipImage.src = "images/info.icon._outlink.png";
			selectDropdown2.options[7].style.display = "none"; selectDropdown3.options[7].style.display = "none"; selectDropdown4.options[7].style.display = "none";
			selectDropdown2.options[8].style.display = "none"; selectDropdown3.options[8].style.display = "none"; selectDropdown4.options[8].style.display = "none";
			selectDropdown2.options[9].style.display = "none"; selectDropdown3.options[9].style.display = "none"; selectDropdown4.options[9].style.display = "none";
			break;
		case "continuousRing":
            options = [0];
			ring1LvLabel.style.display = 'block'; ring1LvSelector.hidden = false;
			ring1potLabel.style.display = 'none'; ring1pot1.hidden = true; ring1pot2.hidden = true; ring1pot3.hidden = true;
			ring1pot1.value = "none"; ring1pot2.value = "none"; ring1pot3.value = "none";
			if (selectedRing2 == "ringOfRestraint" || selectedRing3 == "ringOfRestraint" || selectedRing4 == "ringOfRestraint"
			|| selectedRing2 == "continuousRing" || selectedRing3 == "continuousRing" || selectedRing4 == "continuousRing"
			|| selectedRing2 == "weaponJumpRing" || selectedRing3 == "weaponJumpRing" || selectedRing4 == "weaponJumpRing") {
				selectedRing1 = "none"; options = [0]; ring1EquipImage.src = "images/Equip.Equip.Slots.12._outlink.png"; break};
            ring1EquipImage.src = "images/01113329.img.info.icon._outlink.png";
			selectDropdown2.options[7].style.display = "none"; selectDropdown3.options[7].style.display = "none"; selectDropdown4.options[7].style.display = "none";
			selectDropdown2.options[8].style.display = "none"; selectDropdown3.options[8].style.display = "none"; selectDropdown4.options[8].style.display = "none";
			selectDropdown2.options[9].style.display = "none"; selectDropdown3.options[9].style.display = "none"; selectDropdown4.options[9].style.display = "none";
			break;	
		case "weaponJumpRing":
            options = [0];
			ring1LvLabel.style.display = 'block'; ring1LvSelector.hidden = false;
			ring1potLabel.style.display = 'none'; ring1pot1.hidden = true; ring1pot2.hidden = true; ring1pot3.hidden = true;
			ring1pot1.value = "none"; ring1pot2.value = "none"; ring1pot3.value = "none";
			if (selectedRing2 == "ringOfRestraint" || selectedRing3 == "ringOfRestraint" || selectedRing4 == "ringOfRestraint"
			|| selectedRing2 == "continuousRing" || selectedRing3 == "continuousRing" || selectedRing4 == "continuousRing"
			|| selectedRing2 == "weaponJumpRing" || selectedRing3 == "weaponJumpRing" || selectedRing4 == "weaponJumpRing") {
				selectedRing1 = "none"; options = [0]; ring1EquipImage.src = "images/Equip.Equip.Slots.12._outlink.png"; break};
            ring1EquipImage.src = "images/01113114.img.info.icon._outlink.png";
			selectDropdown2.options[7].style.display = "none"; selectDropdown3.options[7].style.display = "none"; selectDropdown4.options[7].style.display = "none";
			selectDropdown2.options[8].style.display = "none"; selectDropdown3.options[8].style.display = "none"; selectDropdown4.options[8].style.display = "none";
			selectDropdown2.options[9].style.display = "none"; selectDropdown3.options[9].style.display = "none"; selectDropdown4.options[9].style.display = "none";
			break;	
		case "none":
            options = [0];
            ring1EquipImage.src = "images/Equip.Equip.Slots.12._outlink.png";
			ring1LvLabel.style.display = 'none'; ring1LvSelector.hidden = true;
			ring1potLabel.style.display = 'none'; ring1pot1.hidden = true; ring1pot2.hidden = true; ring1pot3.hidden = true;
			selectedRing1 = "none";
			ring1pot1.value = "none"; ring1pot2.value = "none"; ring1pot3.value = "none";
            break;	
    }
    for (var i = 0; i < options.length; i++) {
        var option = document.createElement("option");
        option.text = options[i];
        option.value = options[i];
        starForceSelect1.add(option);
    }
	
	switch(selectedRing2) {
		/* [25, 24, 23, 22, 21, 20, 19, 18, 17, 16, 15, 14, 13, 12, 11, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1, 0]; 
		   [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25] */
        case "kannasTreasure":
            options = [25, 24, 23, 22, 21, 20, 19, 18, 17, 16, 15, 14, 13, 12, 11, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1, 0];
			ring2LvLabel.style.display = 'none'; ring2LvSelector.hidden = true;
			ring2potLabel.style.display = 'block'; ring2pot1.hidden = false; ring2pot2.hidden = false; ring2pot3.hidden = false;
			if (selectedRing1 == "kannasTreasure" || selectedRing3 == "kannasTreasure" || selectedRing4 == "kannasTreasure") {
				selectedRing2 = "none"; options = [0]; ring2EquipImage.src = "images/Equip.Equip.Slots.12._outlink.png"; break;};
            ring2EquipImage.src = "images/01113155.img.info.icon._outlink.png";
			selectDropdown1.options[1].style.display = "none"; selectDropdown3.options[1].style.display = "none"; selectDropdown4.options[1].style.display = "none";
			break;
		case "meisterRing":
            options = [25, 24, 23, 22, 21, 20, 19, 18, 17, 16, 15, 14, 13, 12, 11, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1, 0];
			ring2LvLabel.style.display = 'none'; ring2LvSelector.hidden = true;
			ring2potLabel.style.display = 'block'; ring2pot1.hidden = false; ring2pot2.hidden = false; ring2pot3.hidden = false;
			if (selectedRing1 == "meisterRing" || selectedRing3 == "meisterRing" || selectedRing4 == "meisterRing") {
				selectedRing2 = "none"; options = [0]; ring2EquipImage.src = "images/Equip.Equip.Slots.12._outlink.png"; break;};
            ring2EquipImage.src = "images/01113055.img.info.icon._outlink.png";
			selectDropdown1.options[2].style.display = "none"; selectDropdown3.options[2].style.display = "none"; selectDropdown4.options[2].style.display = "none";
			break;	
        case "reinforcedGolluxRing":
            options = [25, 24, 23, 22, 21, 20, 19, 18, 17, 16, 15, 14, 13, 12, 11, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1, 0];
			ring2LvLabel.style.display = 'none'; ring2LvSelector.hidden = true;
			ring2potLabel.style.display = 'block'; ring2pot1.hidden = false; ring2pot2.hidden = false; ring2pot3.hidden = false;
			if (selectedRing1 == "reinforcedGolluxRing" || selectedRing3 == "reinforcedGolluxRing" || selectedRing4 == "reinforcedGolluxRing") {
				selectedRing2 = "none"; options = [0]; ring2EquipImage.src = "images/Equip.Equip.Slots.12._outlink.png"; break;};
            ring2EquipImage.src = "images/01113074.img.info.icon._outlink.png";
			selectDropdown1.options[3].style.display = "none"; selectDropdown3.options[3].style.display = "none"; selectDropdown4.options[3].style.display = "none";
			break;
		case "superiorGolluxRing":
            options = [25, 24, 23, 22, 21, 20, 19, 18, 17, 16, 15, 14, 13, 12, 11, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1, 0];
			ring2LvLabel.style.display = 'none'; ring2LvSelector.hidden = true;
			ring2potLabel.style.display = 'block'; ring2pot1.hidden = false; ring2pot2.hidden = false; ring2pot3.hidden = false;
			if (selectedRing1 == "superiorGolluxRing" || selectedRing3 == "superiorGolluxRing" || selectedRing4 == "superiorGolluxRing") {
				selectedRing2 = "none"; options = [0]; ring2EquipImage.src = "images/Equip.Equip.Slots.12._outlink.png"; break;};
            ring2EquipImage.src = "images/01113075.img.info.icon._outlink.png";
			selectDropdown1.options[4].style.display = "none"; selectDropdown3.options[4].style.display = "none"; selectDropdown4.options[4].style.display = "none";
			break;
		case "dawnGuardianAngelRing":
            options = [25, 24, 23, 22, 21, 20, 19, 18, 17, 16, 15, 14, 13, 12, 11, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1, 0];
			ring2LvLabel.style.display = 'none'; ring2LvSelector.hidden = true;
			ring2potLabel.style.display = 'block'; ring2pot1.hidden = false; ring2pot2.hidden = false; ring2pot3.hidden = false;
			if (selectedRing1 == "dawnGuardianAngelRing" || selectedRing3 == "dawnGuardianAngelRing" || selectedRing4 == "dawnGuardianAngelRing") {
				selectedRing2 = "none"; options = [0]; ring2EquipImage.src = "images/Equip.Equip.Slots.12._outlink.png"; break;};
            ring2EquipImage.src = "images/01113316.img.info.icon._outlink.png";
			selectDropdown1.options[5].style.display = "none"; selectDropdown3.options[5].style.display = "none"; selectDropdown4.options[5].style.display = "none";
			break;
		case "endlessTerror":
            options = [25, 24, 23, 22, 21, 20, 19, 18, 17, 16, 15, 14, 13, 12, 11, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1, 0];
			ring2LvLabel.style.display = 'none'; ring2LvSelector.hidden = true;
			ring2potLabel.style.display = 'block'; ring2pot1.hidden = false; ring2pot2.hidden = false; ring2pot3.hidden = false;
			if (selectedRing1 == "endlessTerror" || selectedRing3 == "endlessTerror" || selectedRing4 == "endlessTerror") {
				selectedRing2 = "none"; options = [0]; ring2EquipImage.src = "images/Equip.Equip.Slots.12._outlink.png"; 
				ring2LvLabel.style.display = 'none'; ring2LvSelector.style.display = 'none'; break;};
            ring2EquipImage.src = "images/01113306.img.info.icon._outlink.png";
			selectDropdown1.options[6].style.display = "none"; selectDropdown3.options[6].style.display = "none"; selectDropdown4.options[6].style.display = "none";
			break;
		case "ringOfRestraint":
            options = [0];
			ring2LvLabel.style.display = 'block'; ring2LvSelector.hidden = false;
			ring2potLabel.style.display = 'none'; ring2pot1.hidden = true; ring2pot2.hidden = true; ring2pot3.hidden = true;
			ring2pot1.value = "none"; ring2pot2.value = "none"; ring2pot3.value = "none";
			if (selectedRing1 == "ringOfRestraint" || selectedRing3 == "ringOfRestraint" || selectedRing4 == "ringOfRestraint"
			|| selectedRing1 == "continuousRing" || selectedRing3 == "continuousRing" || selectedRing4 == "continuousRing"
			|| selectedRing1 == "weaponJumpRing" || selectedRing3 == "weaponJumpRing" || selectedRing4 == "weaponJumpRing") {
				selectedRing2 = "none"; options = [0]; ring2EquipImage.src = "images/Equip.Equip.Slots.12._outlink.png"; break;};
            ring2EquipImage.src = "images/info.icon._outlink.png";
			selectDropdown1.options[7].style.display = "none"; selectDropdown3.options[7].style.display = "none"; selectDropdown4.options[7].style.display = "none";
			selectDropdown1.options[8].style.display = "none"; selectDropdown3.options[8].style.display = "none"; selectDropdown4.options[8].style.display = "none";
			selectDropdown1.options[9].style.display = "none"; selectDropdown3.options[9].style.display = "none"; selectDropdown4.options[9].style.display = "none";
			break;
		case "continuousRing":
            options = [0];
			ring2LvLabel.style.display = 'block'; ring2LvSelector.hidden = false;
			ring2potLabel.style.display = 'none'; ring2pot1.hidden = true; ring2pot2.hidden = true; ring2pot3.hidden = true;
			ring2pot1.value = "none"; ring2pot2.value = "none"; ring2pot3.value = "none";
			if (selectedRing1 == "ringOfRestraint" || selectedRing3 == "ringOfRestraint" || selectedRing4 == "ringOfRestraint"
			|| selectedRing1 == "continuousRing" || selectedRing3 == "continuousRing" || selectedRing4 == "continuousRing"
			|| selectedRing1 == "weaponJumpRing" || selectedRing3 == "weaponJumpRing" || selectedRing4 == "weaponJumpRing") {
				selectedRing2 = "none"; options = [0]; ring2EquipImage.src = "images/Equip.Equip.Slots.12._outlink.png"; break};
            ring2EquipImage.src = "images/01113329.img.info.icon._outlink.png";
			selectDropdown1.options[7].style.display = "none"; selectDropdown3.options[7].style.display = "none"; selectDropdown4.options[7].style.display = "none";
			selectDropdown1.options[8].style.display = "none"; selectDropdown3.options[8].style.display = "none"; selectDropdown4.options[8].style.display = "none";
			selectDropdown1.options[9].style.display = "none"; selectDropdown3.options[9].style.display = "none"; selectDropdown4.options[9].style.display = "none";
			break;	
		case "weaponJumpRing":
            options = [0];
			ring2LvLabel.style.display = 'block'; ring2LvSelector.hidden = false;
			ring2potLabel.style.display = 'none'; ring2pot1.hidden = true; ring2pot2.hidden = true; ring2pot3.hidden = true;
			ring2pot1.value = "none"; ring2pot2.value = "none"; ring2pot3.value = "none";
			if (selectedRing1 == "ringOfRestraint" || selectedRing3 == "ringOfRestraint" || selectedRing4 == "ringOfRestraint"
			|| selectedRing1 == "continuousRing" || selectedRing3 == "continuousRing" || selectedRing4 == "continuousRing"
			|| selectedRing1 == "weaponJumpRing" || selectedRing3 == "weaponJumpRing" || selectedRing4 == "weaponJumpRing") {
				selectedRing2 = "none"; options = [0]; ring2EquipImage.src = "images/Equip.Equip.Slots.12._outlink.png"; break};
            ring2EquipImage.src = "images/01113114.img.info.icon._outlink.png";
			selectDropdown1.options[7].style.display = "none"; selectDropdown3.options[7].style.display = "none"; selectDropdown4.options[7].style.display = "none";
			selectDropdown1.options[8].style.display = "none"; selectDropdown3.options[8].style.display = "none"; selectDropdown4.options[8].style.display = "none";
			selectDropdown1.options[9].style.display = "none"; selectDropdown3.options[9].style.display = "none"; selectDropdown4.options[9].style.display = "none";
			break;	
		case "none":
            options = [0];
            ring2EquipImage.src = "images/Equip.Equip.Slots.12._outlink.png";
			selectedRing2 = "none";
			ring2LvLabel.style.display = 'none'; ring2LvSelector.hidden = true;
			ring2potLabel.style.display = 'none'; ring2pot1.hidden = true; ring2pot2.hidden = true; ring2pot3.hidden = true;
			ring2pot1.value = "none"; ring2pot2.value = "none"; ring2pot3.value = "none";
            break;	
    }
    for (var i = 0; i < options.length; i++) {
        var option = document.createElement("option");
        option.text = options[i];
        option.value = options[i];
        starForceSelect2.add(option);
    }
	
	switch(selectedRing3) {
		/* [25, 24, 23, 22, 21, 20, 19, 18, 17, 16, 15, 14, 13, 12, 11, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1, 0]; 
		   [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25] */
        case "kannasTreasure":
            options = [25, 24, 23, 22, 21, 20, 19, 18, 17, 16, 15, 14, 13, 12, 11, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1, 0];
			ring3LvLabel.style.display = 'none'; ring3LvSelector.hidden = true;
			ring3potLabel.style.display = 'block'; ring3pot1.hidden = false; ring3pot2.hidden = false; ring3pot3.hidden = false;
			if (selectedRing2 == "kannasTreasure" || selectedRing1 == "kannasTreasure" || selectedRing4 == "kannasTreasure") {
				selectedRing3 = "none"; options = [0]; ring3EquipImage.src = "images/Equip.Equip.Slots.12._outlink.png"; break;};
            ring3EquipImage.src = "images/01113155.img.info.icon._outlink.png";
			selectDropdown1.options[1].style.display = "none"; selectDropdown2.options[1].style.display = "none"; selectDropdown4.options[1].style.display = "none";
			break;
		case "meisterRing":
            options = [25, 24, 23, 22, 21, 20, 19, 18, 17, 16, 15, 14, 13, 12, 11, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1, 0];
			ring3LvLabel.style.display = 'none'; ring3LvSelector.hidden = true;
			ring3potLabel.style.display = 'block'; ring3pot1.hidden = false; ring3pot2.hidden = false; ring3pot3.hidden = false;
			if (selectedRing2 == "meisterRing" || selectedRing1 == "meisterRing" || selectedRing4 == "meisterRing") {
				selectedRing3 = "none"; options = [0]; ring3EquipImage.src = "images/Equip.Equip.Slots.12._outlink.png"; break;};
            ring3EquipImage.src = "images/01113055.img.info.icon._outlink.png";
			selectDropdown1.options[2].style.display = "none"; selectDropdown2.options[2].style.display = "none"; selectDropdown4.options[2].style.display = "none";
			break;	
        case "reinforcedGolluxRing":
            options = [25, 24, 23, 22, 21, 20, 19, 18, 17, 16, 15, 14, 13, 12, 11, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1, 0];
			ring3LvLabel.style.display = 'none'; ring3LvSelector.hidden = true;
			ring3potLabel.style.display = 'block'; ring3pot1.hidden = false; ring3pot2.hidden = false; ring3pot3.hidden = false;
			if (selectedRing2 == "reinforcedGolluxRing" || selectedRing1 == "reinforcedGolluxRing" || selectedRing4 == "reinforcedGolluxRing") {
				selectedRing3 = "none"; options = [0]; ring3EquipImage.src = "images/Equip.Equip.Slots.12._outlink.png"; break;};
            ring3EquipImage.src = "images/01113074.img.info.icon._outlink.png";
			selectDropdown1.options[3].style.display = "none"; selectDropdown2.options[3].style.display = "none"; selectDropdown4.options[3].style.display = "none";
			break;
		case "superiorGolluxRing":
            options = [25, 24, 23, 22, 21, 20, 19, 18, 17, 16, 15, 14, 13, 12, 11, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1, 0];
			ring3LvLabel.style.display = 'none'; ring3LvSelector.hidden = true;
			ring3potLabel.style.display = 'block'; ring3pot1.hidden = false; ring3pot2.hidden = false; ring3pot3.hidden = false;
			if (selectedRing2 == "superiorGolluxRing" || selectedRing1 == "superiorGolluxRing" || selectedRing4 == "superiorGolluxRing") {
				selectedRing3 = "none"; options = [0]; ring3EquipImage.src = "images/Equip.Equip.Slots.12._outlink.png"; break;};
            ring3EquipImage.src = "images/01113075.img.info.icon._outlink.png";
			selectDropdown1.options[4].style.display = "none"; selectDropdown2.options[4].style.display = "none"; selectDropdown4.options[4].style.display = "none";
			break;
		case "dawnGuardianAngelRing":
            options = [25, 24, 23, 22, 21, 20, 19, 18, 17, 16, 15, 14, 13, 12, 11, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1, 0];
			ring3LvLabel.style.display = 'none'; ring3LvSelector.hidden = true;
			ring3potLabel.style.display = 'block'; ring3pot1.hidden = false; ring3pot2.hidden = false; ring3pot3.hidden = false;
			if (selectedRing2 == "dawnGuardianAngelRing" || selectedRing1 == "dawnGuardianAngelRing" || selectedRing4 == "dawnGuardianAngelRing") {
				selectedRing3 = "none"; options = [0]; ring3EquipImage.src = "images/Equip.Equip.Slots.12._outlink.png"; break;};
            ring3EquipImage.src = "images/01113316.img.info.icon._outlink.png";
			selectDropdown1.options[5].style.display = "none"; selectDropdown2.options[5].style.display = "none"; selectDropdown4.options[5].style.display = "none";
			break;
		case "endlessTerror":
            options = [25, 24, 23, 22, 21, 20, 19, 18, 17, 16, 15, 14, 13, 12, 11, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1, 0];
			ring3LvLabel.style.display = 'none'; ring3LvSelector.hidden = true;
			ring3potLabel.style.display = 'block'; ring3pot1.hidden = false; ring3pot2.hidden = false; ring3pot3.hidden = false;
			if (selectedRing2 == "endlessTerror" || selectedRing1 == "endlessTerror" || selectedRing4 == "endlessTerror") {
				selectedRing3 = "none"; options = [0]; ring3EquipImage.src = "images/Equip.Equip.Slots.12._outlink.png"; break;};
            ring3EquipImage.src = "images/01113306.img.info.icon._outlink.png";
			selectDropdown1.options[6].style.display = "none"; selectDropdown2.options[6].style.display = "none"; selectDropdown4.options[6].style.display = "none";
			break;
		case "ringOfRestraint":
            options = [0];
			ring3LvLabel.style.display = 'block'; ring3LvSelector.hidden = false;
			ring3potLabel.style.display = 'none'; ring3pot1.hidden = true; ring3pot2.hidden = true; ring3pot3.hidden = true;
			ring3pot1.value = "none"; ring3pot2.value = "none"; ring3pot3.value = "none";
			if (selectedRing2 == "ringOfRestraint" || selectedRing1 == "ringOfRestraint" || selectedRing4 == "ringOfRestraint"
			|| selectedRing2 == "continuousRing" || selectedRing1 == "continuousRing" || selectedRing4 == "continuousRing"
			|| selectedRing2 == "weaponJumpRing" || selectedRing1 == "weaponJumpRing" || selectedRing4 == "weaponJumpRing") {
				selectedRing3 = "none"; options = [0]; ring3EquipImage.src = "images/Equip.Equip.Slots.12._outlink.png"; break;};
            ring3EquipImage.src = "images/info.icon._outlink.png";
			selectDropdown1.options[7].style.display = "none"; selectDropdown2.options[7].style.display = "none"; selectDropdown4.options[7].style.display = "none";
			selectDropdown1.options[8].style.display = "none"; selectDropdown2.options[8].style.display = "none"; selectDropdown4.options[8].style.display = "none";
			selectDropdown1.options[9].style.display = "none"; selectDropdown2.options[9].style.display = "none"; selectDropdown4.options[9].style.display = "none";
			break;
		case "continuousRing":
            options = [0];
			ring3LvLabel.style.display = 'block'; ring3LvSelector.hidden = false;
			ring3potLabel.style.display = 'none'; ring3pot1.hidden = true; ring3pot2.hidden = true; ring3pot3.hidden = true;
			ring3pot1.value = "none"; ring3pot2.value = "none"; ring3pot3.value = "none";
			if (selectedRing2 == "ringOfRestraint" || selectedRing1 == "ringOfRestraint" || selectedRing4 == "ringOfRestraint"
			|| selectedRing2 == "continuousRing" || selectedRing1 == "continuousRing" || selectedRing4 == "continuousRing"
			|| selectedRing2 == "weaponJumpRing" || selectedRing1 == "weaponJumpRing" || selectedRing4 == "weaponJumpRing") {
				selectedRing3 = "none"; options = [0]; ring3EquipImage.src = "images/Equip.Equip.Slots.12._outlink.png"; break};
            ring3EquipImage.src = "images/01113329.img.info.icon._outlink.png";
			selectDropdown1.options[7].style.display = "none"; selectDropdown2.options[7].style.display = "none"; selectDropdown4.options[7].style.display = "none";
			selectDropdown1.options[8].style.display = "none"; selectDropdown2.options[8].style.display = "none"; selectDropdown4.options[8].style.display = "none";
			selectDropdown1.options[9].style.display = "none"; selectDropdown2.options[9].style.display = "none"; selectDropdown4.options[9].style.display = "none";
			break;	
		case "weaponJumpRing":
            options = [0];
			ring3LvLabel.style.display = 'block'; ring3LvSelector.hidden = false;
			ring3potLabel.style.display = 'none'; ring3pot1.hidden = true; ring3pot2.hidden = true; ring3pot3.hidden = true;
			ring3pot1.value = "none"; ring3pot2.value = "none"; ring3pot3.value = "none";
			if (selectedRing2 == "ringOfRestraint" || selectedRing1 == "ringOfRestraint" || selectedRing4 == "ringOfRestraint"
			|| selectedRing2 == "continuousRing" || selectedRing1 == "continuousRing" || selectedRing4 == "continuousRing"
			|| selectedRing2 == "weaponJumpRing" || selectedRing1 == "weaponJumpRing" || selectedRing4 == "weaponJumpRing") {
				selectedRing3 = "none"; options = [0]; ring3EquipImage.src = "images/Equip.Equip.Slots.12._outlink.png"; break};
            ring3EquipImage.src = "images/01113114.img.info.icon._outlink.png";
			selectDropdown1.options[7].style.display = "none"; selectDropdown2.options[7].style.display = "none"; selectDropdown4.options[7].style.display = "none";
			selectDropdown1.options[8].style.display = "none"; selectDropdown2.options[8].style.display = "none"; selectDropdown4.options[8].style.display = "none";
			selectDropdown1.options[9].style.display = "none"; selectDropdown2.options[9].style.display = "none"; selectDropdown4.options[9].style.display = "none";
			break;	
		case "none":
            options = [0];
            ring3EquipImage.src = "images/Equip.Equip.Slots.12._outlink.png";
			selectedRing3 = "none";
			ring3LvLabel.style.display = 'none'; ring3LvSelector.hidden = true;
			ring3potLabel.style.display = 'none'; ring3pot1.hidden = true; ring3pot2.hidden = true; ring3pot3.hidden = true;
			ring3pot1.value = "none"; ring3pot2.value = "none"; ring3pot3.value = "none";
            break;	
    }
    for (var i = 0; i < options.length; i++) {
        var option = document.createElement("option");
        option.text = options[i];
        option.value = options[i];
        starForceSelect3.add(option);
    }
	
	switch(selectedRing4) {
		/* [25, 24, 23, 22, 21, 20, 19, 18, 17, 16, 15, 14, 13, 12, 11, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1, 0]; 
		   [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25] */
        case "kannasTreasure":
            options = [25, 24, 23, 22, 21, 20, 19, 18, 17, 16, 15, 14, 13, 12, 11, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1, 0];
			ring4LvLabel.style.display = 'none'; ring4LvSelector.hidden = true;
			ring4potLabel.style.display = 'block'; ring4pot1.hidden = false; ring4pot2.hidden = false; ring4pot3.hidden = false;
			if (selectedRing2 == "kannasTreasure" || selectedRing3 == "kannasTreasure" || selectedRing1 == "kannasTreasure") {
				selectedRing4 = "none"; options = [0]; ring4EquipImage.src = "images/Equip.Equip.Slots.12._outlink.png"; break;};
            ring4EquipImage.src = "images/01113155.img.info.icon._outlink.png";
			selectDropdown1.options[1].style.display = "none"; selectDropdown2.options[1].style.display = "none"; selectDropdown3.options[1].style.display = "none";
			break;
		case "meisterRing":
            options = [25, 24, 23, 22, 21, 20, 19, 18, 17, 16, 15, 14, 13, 12, 11, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1, 0];
			ring4LvLabel.style.display = 'none'; ring4LvSelector.hidden = true;
			ring4potLabel.style.display = 'block'; ring4pot1.hidden = false; ring4pot2.hidden = false; ring4pot3.hidden = false;
			if (selectedRing2 == "meisterRing" || selectedRing3 == "meisterRing" || selectedRing1 == "meisterRing") {
				selectedRing4 = "none"; options = [0]; ring4EquipImage.src = "images/Equip.Equip.Slots.12._outlink.png"; break;};
            ring4EquipImage.src = "images/01113055.img.info.icon._outlink.png";
			selectDropdown1.options[2].style.display = "none"; selectDropdown2.options[2].style.display = "none"; selectDropdown3.options[2].style.display = "none";
			break;	
        case "reinforcedGolluxRing":
            options = [25, 24, 23, 22, 21, 20, 19, 18, 17, 16, 15, 14, 13, 12, 11, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1, 0];
			ring4LvLabel.style.display = 'none'; ring4LvSelector.hidden = true;
			ring4potLabel.style.display = 'block'; ring4pot1.hidden = false; ring4pot2.hidden = false; ring4pot3.hidden = false;
			if (selectedRing2 == "reinforcedGolluxRing" || selectedRing3 == "reinforcedGolluxRing" || selectedRing1 == "reinforcedGolluxRing") {
				selectedRing4 = "none"; options = [0]; ring4EquipImage.src = "images/Equip.Equip.Slots.12._outlink.png"; break;};
            ring4EquipImage.src = "images/01113074.img.info.icon._outlink.png";
			selectDropdown1.options[3].style.display = "none"; selectDropdown2.options[3].style.display = "none"; selectDropdown3.options[3].style.display = "none";
			break;
		case "superiorGolluxRing":
            options = [25, 24, 23, 22, 21, 20, 19, 18, 17, 16, 15, 14, 13, 12, 11, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1, 0];
			ring4LvLabel.style.display = 'none'; ring4LvSelector.hidden = true;
			ring4potLabel.style.display = 'block'; ring4pot1.hidden = false; ring4pot2.hidden = false; ring4pot3.hidden = false;
			if (selectedRing2 == "superiorGolluxRing" || selectedRing3 == "superiorGolluxRing" || selectedRing1 == "superiorGolluxRing") {
				selectedRing4 = "none"; options = [0]; ring4EquipImage.src = "images/Equip.Equip.Slots.12._outlink.png"; break;};
            ring4EquipImage.src = "images/01113075.img.info.icon._outlink.png";
			selectDropdown1.options[4].style.display = "none"; selectDropdown2.options[4].style.display = "none"; selectDropdown3.options[4].style.display = "none";
			break;
		case "dawnGuardianAngelRing":
            options = [25, 24, 23, 22, 21, 20, 19, 18, 17, 16, 15, 14, 13, 12, 11, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1, 0];
			ring4LvLabel.style.display = 'none'; ring4LvSelector.hidden = true;
			ring4potLabel.style.display = 'block'; ring4pot1.hidden = false; ring4pot2.hidden = false; ring4pot3.hidden = false;
			if (selectedRing2 == "dawnGuardianAngelRing" || selectedRing3 == "dawnGuardianAngelRing" || selectedRing1 == "dawnGuardianAngelRing") {
				selectedRing4 = "none"; options = [0]; ring4EquipImage.src = "images/Equip.Equip.Slots.12._outlink.png"; break;};
            ring4EquipImage.src = "images/01113316.img.info.icon._outlink.png";
			selectDropdown1.options[5].style.display = "none"; selectDropdown2.options[5].style.display = "none"; selectDropdown3.options[5].style.display = "none";
			break;
		case "endlessTerror":
            options = [25, 24, 23, 22, 21, 20, 19, 18, 17, 16, 15, 14, 13, 12, 11, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1, 0];
			ring4LvLabel.style.display = 'none'; ring4LvSelector.hidden = true;
			ring4potLabel.style.display = 'block'; ring4pot1.hidden = false; ring4pot2.hidden = false; ring4pot3.hidden = false;
			if (selectedRing2 == "endlessTerror" || selectedRing3 == "endlessTerror" || selectedRing1 == "endlessTerror") {
				selectedRing4 = "none"; options = [0]; ring4EquipImage.src = "images/Equip.Equip.Slots.12._outlink.png"; break;};
            ring4EquipImage.src = "images/01113306.img.info.icon._outlink.png";
			selectDropdown1.options[6].style.display = "none"; selectDropdown2.options[6].style.display = "none"; selectDropdown3.options[6].style.display = "none";
			break;
		case "ringOfRestraint":
            options = [0];
			ring4LvLabel.style.display = 'block'; ring4LvSelector.hidden = false;
			ring4potLabel.style.display = 'none'; ring4pot1.hidden = true; ring4pot2.hidden = true; ring4pot3.hidden = true;
			ring4pot1.value = "none"; ring4pot2.value = "none"; ring4pot3.value = "none";
			if (selectedRing2 == "ringOfRestraint" || selectedRing3 == "ringOfRestraint" || selectedRing1 == "ringOfRestraint"
			|| selectedRing2 == "continuousRing" || selectedRing3 == "continuousRing" || selectedRing1 == "continuousRing"
			|| selectedRing2 == "weaponJumpRing" || selectedRing3 == "weaponJumpRing" || selectedRing1 == "weaponJumpRing") {
				selectedRing4 = "none"; options = [0]; ring4EquipImage.src = "images/Equip.Equip.Slots.12._outlink.png"; break;};
            ring4EquipImage.src = "images/info.icon._outlink.png";
			selectDropdown1.options[7].style.display = "none"; selectDropdown2.options[7].style.display = "none"; selectDropdown3.options[7].style.display = "none";
			selectDropdown1.options[8].style.display = "none"; selectDropdown2.options[8].style.display = "none"; selectDropdown3.options[8].style.display = "none";
			selectDropdown1.options[9].style.display = "none"; selectDropdown2.options[9].style.display = "none"; selectDropdown3.options[9].style.display = "none";
			break;
		case "continuousRing":
            options = [0];
			ring4LvLabel.style.display = 'block'; ring4LvSelector.hidden = false;
			ring4potLabel.style.display = 'none'; ring4pot1.hidden = true; ring4pot2.hidden = true; ring4pot3.hidden = true;
			ring4pot1.value = "none"; ring4pot2.value = "none"; ring4pot3.value = "none";
			if (selectedRing2 == "ringOfRestraint" || selectedRing3 == "ringOfRestraint" || selectedRing1 == "ringOfRestraint"
			|| selectedRing2 == "continuousRing" || selectedRing3 == "continuousRing" || selectedRing1 == "continuousRing"
			|| selectedRing2 == "weaponJumpRing" || selectedRing3 == "weaponJumpRing" || selectedRing1 == "weaponJumpRing") {
				selectedRing4 = "none"; options = [0]; ring4EquipImage.src = "images/Equip.Equip.Slots.12._outlink.png"; break};
            ring4EquipImage.src = "images/01113329.img.info.icon._outlink.png";
			selectDropdown1.options[7].style.display = "none"; selectDropdown2.options[7].style.display = "none"; selectDropdown3.options[7].style.display = "none";
			selectDropdown1.options[8].style.display = "none"; selectDropdown2.options[8].style.display = "none"; selectDropdown3.options[8].style.display = "none";
			selectDropdown1.options[9].style.display = "none"; selectDropdown2.options[9].style.display = "none"; selectDropdown3.options[9].style.display = "none";
			break;	
		case "weaponJumpRing":
            options = [0];
			ring4LvLabel.style.display = 'block'; ring4LvSelector.hidden = false;
			ring4potLabel.style.display = 'none'; ring4pot1.hidden = true; ring4pot2.hidden = true; ring4pot3.hidden = true;
			ring4pot1.value = "none"; ring4pot2.value = "none"; ring4pot3.value = "none";
			if (selectedRing2 == "ringOfRestraint" || selectedRing3 == "ringOfRestraint" || selectedRing1 == "ringOfRestraint"
			|| selectedRing2 == "continuousRing" || selectedRing3 == "continuousRing" || selectedRing1 == "continuousRing"
			|| selectedRing2 == "weaponJumpRing" || selectedRing3 == "weaponJumpRing" || selectedRing1 == "weaponJumpRing") {
				selectedRing4 = "none"; options = [0]; ring4EquipImage.src = "images/Equip.Equip.Slots.12._outlink.png"; break};
            ring4EquipImage.src = "images/01113114.img.info.icon._outlink.png";
			selectDropdown1.options[7].style.display = "none"; selectDropdown2.options[7].style.display = "none"; selectDropdown3.options[7].style.display = "none";
			selectDropdown1.options[8].style.display = "none"; selectDropdown2.options[8].style.display = "none"; selectDropdown3.options[8].style.display = "none";
			selectDropdown1.options[9].style.display = "none"; selectDropdown2.options[9].style.display = "none"; selectDropdown3.options[9].style.display = "none";
			break;	
		case "none":
            options = [0];
            ring4EquipImage.src = "images/Equip.Equip.Slots.12._outlink.png";
			selectedRing4 = "none";
			ring4LvLabel.style.display = 'none'; ring4LvSelector.hidden = true;
			ring4potLabel.style.display = 'none'; ring4pot1.hidden = true; ring4pot2.hidden = true; ring4pot3.hidden = true;
			ring4pot1.value = "none"; ring4pot2.value = "none"; ring4pot3.value = "none";
            break;	
    }
    for (var i = 0; i < options.length; i++) {
        var option = document.createElement("option");
        option.text = options[i];
        option.value = options[i];
        starForceSelect4.add(option);
    }
	
	updateRingStarForceStats();
}

/* Params: RingSlot#, Item level, selected Star Force, Item type, Item all stat, Item hp, Item mp, Item attack, Item magic attack */
/* Item types checked: weapon, gloves */
function calculateRingStarForce(slotNum, itemLevel, starForceLevel, itemType, itemAllStat, itemHp, itemMp, itemAttack, itemMagAttack) {
	var jobStat = 0;
	var allStat = itemAllStat;
	var hp = itemHp;
	var mp = itemMp;
	var att = itemAttack;
	var mAtt = itemMagAttack;
	var weapon = "weapon";
	if (starForceLevel >= 1) {
		jobStat += 2; hp += 5;
		if (itemType == weapon) {
			att += 1 + Math.floor(itemAttack * (2 / 100));
			mAtt += 1 + Math.floor(itemMagAttack * (2 / 100));
		}
	}
	if (starForceLevel >= 2) {
		jobStat += 2; hp += 5;
		if (itemType == weapon) {
			att += 1 + Math.floor(itemAttack * (2 / 100));
			mAtt += 1 + Math.floor(itemMagAttack * (2 / 100));
		}
	}
	if (starForceLevel >= 3) {
		jobStat += 2; hp += 5;
		if (itemType == weapon) {
			att += 1 + Math.floor(itemAttack * (2 / 100));
			mAtt += 1 + Math.floor(itemMagAttack * (2 / 100));
		}
	}
	if (starForceLevel >= 4) {
		jobStat += 2; hp += 10;
		if (itemType == weapon) {
			att += 1 + Math.floor(itemAttack * (2 / 100));
			mAtt += 1 + Math.floor(itemMagAttack * (2 / 100));
		}
	}
	if (starForceLevel >= 5){
		jobStat += 2; hp += 10;
		if (itemType == weapon) {
			att += 1 + Math.floor(itemAttack * (2 / 100));
			mAtt += 1 + Math.floor(itemMagAttack * (2 / 100));
		}
		if (itemType === "gloves") {
			att += 1; mAtt += 1;
		}
	}
	if (starForceLevel >= 6) {
		jobStat += 3; hp += 15;
		if (itemType == weapon) {
			att += 1 + Math.floor(itemAttack * (2 / 100));
			mAtt += 1 + Math.floor(itemMagAttack * (2 / 100));
		}
	}
	if (starForceLevel >= 7){
		jobStat += 3; hp += 15;
		if (itemType == weapon) {
			att += 1 + Math.floor(itemAttack * (2 / 100));
			mAtt += 1 + Math.floor(itemMagAttack * (2 / 100));
		}
		if (itemType == "gloves") {
			att += 1; mAtt += 1;
		}
	}
	if (starForceLevel >= 8) {
		jobStat += 3; hp += 20;
		if (itemType == weapon) {
			att += 1 + Math.floor(itemAttack * (2 / 100));
			mAtt += 1 + Math.floor(itemMagAttack * (2 / 100));
		}
	}
	if (starForceLevel >= 9) {
		jobStat += 3; hp += 20;
		if (itemType == weapon) {
			att += 1 + Math.floor(itemAttack * (2 / 100));
			mAtt += 1 + Math.floor(itemMagAttack * (2 / 100));
		}
		if (itemType == "gloves") {
			att += 1; mAtt += 1;
		}
	}
	if (starForceLevel >= 10) {
		jobStat += 3; hp += 25;
		if (itemType == weapon) {
			att += 1 + Math.floor(itemAttack * (2 / 100));
			mAtt += 1 + Math.floor(itemMagAttack * (2 / 100));
		}
	}
	if (starForceLevel >= 11) {
		jobStat += 3; hp += 25;
		if (itemType == weapon) {
			att += 1 + Math.floor(itemAttack * (2 / 100));
			mAtt += 1 + Math.floor(itemMagAttack * (2 / 100));
		}
		if (itemType == "gloves") {
			att += 1; mAtt += 1;
		}	
	}
	if (starForceLevel >= 12) {
		jobStat += 3; hp += 25;
		if (itemType == weapon) {
			att += 1 + Math.floor(itemAttack * (2 / 100));
			mAtt += 1 + Math.floor(itemMagAttack * (2 / 100));
		}	
	}
	if (starForceLevel >= 13) {
		jobStat += 3; hp += 25;
		if (itemType == weapon) {
			att += 1 + Math.floor(itemAttack * (2 / 100));
			mAtt += 1 + Math.floor(itemMagAttack * (2 / 100));
		}
		if (itemType == "gloves") {
			att += 1; mAtt += 1;
		}	
	}
	if (starForceLevel >= 14) {
		jobStat += 3; hp += 25;
		if (itemType == weapon) {
			att += 1 + Math.floor(itemAttack * (2 / 100));
			mAtt += 1 + Math.floor(itemMagAttack * (2 / 100));
		}
		if (itemType == "gloves") {
			att += 1; mAtt += 1;
		}
	}
	if (starForceLevel >= 15) {
		jobStat += 3; hp += 25;
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
	ring1JobStat = jobStat;
	ring1AllStat = allStat;
	ring1Hp = hp;
	ring1Mp = mp;
	ring1Att = att;
	ring1MAtt = mAtt;
	}
	else if (slotNum == 2) {
	ring2JobStat = jobStat;
	ring2AllStat = allStat;
	ring2Hp = hp;
	ring2Mp = mp;
	ring2Att = att;
	ring2MAtt = mAtt;
	}
	else if (slotNum == 3) {
	ring3JobStat = jobStat;
	ring3AllStat = allStat;
	ring3Hp = hp;
	ring3Mp = mp;
	ring3Att = att;
	ring3MAtt = mAtt;
	} else {
	ring4JobStat = jobStat;
	ring4AllStat = allStat;
	ring4Hp = hp;
	ring4Mp = mp;
	ring4Att = att;
	ring4MAtt = mAtt;
	}
}

function updateRingStarForceStats() {
	var selectedRing1 = document.getElementById("selectRing1").value;
	var selectedRing2 = document.getElementById("selectRing2").value;
	var selectedRing3 = document.getElementById("selectRing3").value;
	var selectedRing4 = document.getElementById("selectRing4").value;
	var starForceSelect1 = document.getElementById("ring1StarForce").value;
	var starForceSelect2 = document.getElementById("ring2StarForce").value;
	var starForceSelect3 = document.getElementById("ring3StarForce").value;
	var starForceSelect4 = document.getElementById("ring4StarForce").value;
	switch(selectedRing1) {
		/* (selectedRing#, itemLevel, starForceLevel, itemType, itemAllStat, itemHp, itemMP, itemAttack, itemMagAttack) */
		case "kannasTreasure":
            calculateRingStarForce(1, 140, starForceSelect1, "accessory", 5, 200, 200, 1, 1);
            break;
        case "meisterRing":
            calculateRingStarForce(1, 140, starForceSelect1, "accessory", 5, 200, 200, 1, 1);
            break;
		case "reinforcedGolluxRing":
            calculateRingStarForce(1, 140, starForceSelect1, "accessory", 8, 200, 200, 5, 5);
            break;
		case "superiorGolluxRing":
            calculateRingStarForce(1, 150, starForceSelect1, "accessory", 10, 250, 250, 8, 8);
            break;
		case "dawnGuardianAngelRing":
            calculateRingStarForce(1, 160, starForceSelect1, "accessory", 5, 200, 200, 2, 2);
            break;
		case "endlessTerror":
            calculateRingStarForce(1, 200, starForceSelect1, "accessory", 5, 250, 250, 4, 4);
            break;
		case "ringOfRestraint":
            calculateRingStarForce(1, 110, 0, "accessory", 4, 0, 0, 4, 4);
            break;
		case "continuousRing":
            calculateRingStarForce(1, 110, 0, "accessory", 4, 0, 0, 4, 4);
            break;
		case "weaponJumpRing":
            calculateRingStarForce(1, 110, 0, "accessory", 4, 0, 0, 4, 4);
            break;
		case "none":
            calculateRingStarForce(1, 0, 0, "accessory", 0, 0, 0, 0, 0);
            break;	
    }
	
	switch(selectedRing2) {
		/* (selectedRing#, itemLevel, starForceLevel, itemType, itemAllStat, itemHp, itemMP, itemAttack, itemMagAttack) */
		case "kannasTreasure":
            calculateRingStarForce(2, 140, starForceSelect2, "accessory", 5, 200, 200, 1, 1);
            break;
        case "meisterRing":
            calculateRingStarForce(2, 140, starForceSelect2, "accessory", 5, 200, 200, 1, 1);
            break;
		case "reinforcedGolluxRing":
            calculateRingStarForce(2, 140, starForceSelect2, "accessory", 8, 200, 200, 5, 5);
            break;
		case "superiorGolluxRing":
            calculateRingStarForce(2, 150, starForceSelect2, "accessory", 10, 250, 250, 8, 8);
            break;
		case "dawnGuardianAngelRing":
            calculateRingStarForce(2, 160, starForceSelect2, "accessory", 5, 200, 200, 2, 2);
            break;
		case "endlessTerror":
            calculateRingStarForce(2, 200, starForceSelect2, "accessory", 5, 250, 250, 4, 4);
            break;
		case "ringOfRestraint":
            calculateRingStarForce(2, 110, 0, "accessory", 4, 0, 0, 4, 4);
            break;
		case "continuousRing":
            calculateRingStarForce(2, 110, 0, "accessory", 4, 0, 0, 4, 4);
            break;
		case "weaponJumpRing":
            calculateRingStarForce(2, 110, 0, "accessory", 4, 0, 0, 4, 4);
            break;
		case "none":
            calculateRingStarForce(2, 0, 0, "accessory", 0, 0, 0, 0, 0);
            break;	
    }
	
	switch(selectedRing3) {
		/* (selectedRing#, itemLevel, starForceLevel, itemType, itemAllStat, itemHp, itemMP, itemAttack, itemMagAttack) */
		case "kannasTreasure":
            calculateRingStarForce(3, 140, starForceSelect3, "accessory", 5, 200, 200, 1, 1);
            break;
        case "meisterRing":
            calculateRingStarForce(3, 140, starForceSelect3, "accessory", 5, 200, 200, 1, 1);
            break;
		case "reinforcedGolluxRing":
            calculateRingStarForce(3, 140, starForceSelect3, "accessory", 8, 200, 200, 5, 5);
            break;
		case "superiorGolluxRing":
            calculateRingStarForce(3, 150, starForceSelect3, "accessory", 10, 250, 250, 8, 8);
            break;
		case "dawnGuardianAngelRing":
            calculateRingStarForce(3, 160, starForceSelect3, "accessory", 5, 200, 200, 2, 2);
            break;
		case "endlessTerror":
            calculateRingStarForce(3, 200, starForceSelect3, "accessory", 5, 250, 250, 4, 4);
            break;
		case "ringOfRestraint":
            calculateRingStarForce(3, 110, 0, "accessory", 4, 0, 0, 4, 4);
            break;
		case "continuousRing":
            calculateRingStarForce(3, 110, 0, "accessory", 4, 0, 0, 4, 4);
            break;
		case "weaponJumpRing":
            calculateRingStarForce(3, 110, 0, "accessory", 4, 0, 0, 4, 4);
            break;
		case "none":
            calculateRingStarForce(3, 0, 0, "accessory", 0, 0, 0, 0, 0);
            break;	
    }
	
	switch(selectedRing4) {
		/* (selectedRing#, itemLevel, starForceLevel, itemType, itemAllStat, itemHp, itemMP, itemAttack, itemMagAttack) */
		case "kannasTreasure":
            calculateRingStarForce(4, 140, starForceSelect4, "accessory", 5, 200, 200, 1, 1);
            break;
        case "meisterRing":
            calculateRingStarForce(4, 140, starForceSelect4, "accessory", 5, 200, 200, 1, 1);
            break;
		case "reinforcedGolluxRing":
            calculateRingStarForce(4, 140, starForceSelect4, "accessory", 8, 200, 200, 5, 5);
            break;
		case "superiorGolluxRing":
            calculateRingStarForce(4, 150, starForceSelect4, "accessory", 10, 250, 250, 8, 8);
            break;
		case "dawnGuardianAngelRing":
            calculateRingStarForce(4, 160, starForceSelect4, "accessory", 5, 200, 200, 2, 2);
            break;
		case "endlessTerror":
            calculateRingStarForce(4, 200, starForceSelect4, "accessory", 5, 250, 250, 4, 4);
            break;
		case "ringOfRestraint":
            calculateRingStarForce(4, 110, 0, "accessory", 4, 0, 0, 4, 4);
            break;
		case "continuousRing":
            calculateRingStarForce(4, 110, 0, "accessory", 4, 0, 0, 4, 4);
            break;
		case "weaponJumpRing":
            calculateRingStarForce(4, 110, 0, "accessory", 4, 0, 0, 4, 4);
            break;
		case "none":
            calculateRingStarForce(4, 0, 0, "accessory", 0, 0, 0, 0, 0);
            break;	
    }
}