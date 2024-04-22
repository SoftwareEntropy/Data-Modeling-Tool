	//stat value = totalPrimaryStat x 4 + totalSecondaryStat
	//for Demon Avenger, floor(PureHP/3.5) + 0.8 x floor((TotalHP - PureHP)/3.5) + STR
	//for Xenon, Primary Stats = Str/Dex/Luk, No secondary stats
	//for Shadowers, Dual Blades, Cadena, Secondary Stats = Dex + Str
		//var totalStr = (cStr * ((percentStr + percentAllStat) / 100)) + finalStr;
		//var totalDex = (cDex * ((percentDex + percentAllStat) / 100)) + finalDex;
		//var totalInt = (cInt * ((percentInt + percentAllStat) / 100)) + finalInt;
		//var totalLuk = (cLuk * ((percentLuk + percentAllStat) / 100)) + finalLuk;
		//var totalHp = (hp * percentHp) + finalHp;
		//var totalMp = (mp * percentMp);
		//var pureHp = 545 + 18 * parseInt(document.getElementById("hpAP").value);
	//warriorAndPirateStatValue = totalStr * 4 + totalDex;
	//magicianStatValue = totalInt * 4 + totalLuk;
	//bowmanAndPirateStatValue = totalDex * 4 + totalStr;
	//thief1StatValue = totalLuk * 4 + totalDex;
	//thief2StatValue = totalLuk * 4 + totalDex + totalStr;
	//xenonStatValue = (totalStr + totalDex + totalLuk) * 4;
	//demonAvengerStatValue = Math.floor(pureHp/3.5) + 0.8 * Math.floor((totalHp - pureHp)/3.5) + totalStr;
	//var ignoreDefenseValue = 100;
	//for (var source of ied) {
	//	ignoreDefenseValue *= (1 - source / 100);
	//}
	//ignoreDefenseValue = 100 - ignoreDefenseValue;
		//var lowerCriticalDamage = 20 + critDmg;
		//var upperCriticalDamage = 50 + critDmg;
		//var totalAttack = att * (1 + (percentAtt / 100));
		//var totalMagicAttack = mAtt * (1 + (percentMagAtt / 100));
	//upperActualDamageRange = weaponMultiplier * statValue * totalAttack / 100 ROUNDED
	//lowerActualDamageRange = upperActual * mastery%/100 ROUNDED
	//upperShownDamageRange = upperActualDamageRange * (1 + dmg / 100) * (1 + finalDamage / 100) ROUNDED DOWN
	//lowerShownDamageRange = 1 + lowerActualDamageRange * (1 + dmg / 100) * (1 * finalDamage / 100) ROUNDED DOWN
	// + Elemental Resist 50% * (1 - [(bonus) / 100)]^each source )
		// Immune: ignoreResist%/100
		// Strong 0.5 x (1 + IgnoreResist%/100)
		// Neutral 1
		// Weak 1.5
	// ++ Level Advantage Multiplier
		// 0 or more levels above monster level: *(10% + 2%per)
		// 1-5 levels below: *((1.1-.02p)*(1-.025p))
		// 6 or more below: *((p + 1) * (-2.5p) multiplier
	// Arcane force (Applied after above)
		//round down, 0-9% = -90% / 10-29 = -70% / 30-49 = - 40% / 50-69 = -30% / 70-99 = -20%
		// 100-109% = 0%/ 110-129 = 10%/ 130-149 = 30%/ 150%+ = +50%
	// Sacred force
		//each point below required = -p%FD, cap -95%
		//each 2 points above = +1%FD, cap +25%
	// Damage over Time: only subject to elem resist, level advantage, force maps
	// Attack Speed casting delay % modifier compared to level 4(new), or level 6(old)
		// 100*(20 - AtkSpeed)/16
	// Buff duration
		// (base + hyperBonus) * (1 + buff% / 100)
	// Skill cooldown
		//baseCD * (1-CDR%/100) - PotentialCDR
		//potentialCDR does not apply at <5 seconds
		//potentialCDR applies at rate of 0.05% reduction for every 0.01 seconds of cd reduction from 5-10 seconds.
	// Actual damage:
	// 	normal monsters : shownDamage/(1 + TotalDamage% / 100) * skill%/100 * 1 + (TotalDamage% + NormalMonsterDmg%) / 100)
	// 	boss monsters : shownDamage/(1 + TotalDamage% / 100) * skill%/100 * 1 + (TotalDamage% + BossMonster%%) / 100)
	// ADDITIONAL crit multiplier: (1 + CD%/100)  //check if >100% rate
	// Elemental Resist + force multiplier

// Add eventlistener on class selector to add following stats

selectElements.forEach(element => {
    element.addEventListener('change', checkAdele);
});
inputElements.forEach(element => {
    element.addEventListener('change', checkAdele);
});
buttonElements.forEach(element => {
    element.addEventListener('click', checkAdele);
});
checkAdele();

var adeleDmg = 0;
var adeleBossDmg = 0;
var adeleTotalIed = 0;
var adeleAvgShownDamage = 0;
var adeleAvgCritDamage = 0;

var enemyDefense = 380;
var enemyLevel = 275;

var adeleCurTime = 0;
var lastAetherForgeTrigger = 0;
var aetherForgeTriggerCount = 0;
var lastMagicDispatchTrigger = 0;
var magicDispatchTriggerCount = 0;
var adeleSwords = 6;

//Buff trackers
var adeleRingOfRestraintActive = false; var adeleWeaponJumpRingActive = false; var adeleTermsAndConditionsActive = false;
var adeleDivineWrathActive = false; var adeleLegacyRestorationActive = false; var adeleGrandisGoddessBlessingActive = false;
var adeleWeaponAuraActive = false; var adeleImpenetrableSkinActive = false;

//cooldown, if time < current time, enable use
var adeleRingOfRestraintAvilable = 0; var adeleWeaponJumpRingAvilable = 0; var adeleTermsAndConditionsAvilable = 0;
var adeleDivineWrathAvilable = 0; var adeleLegacyRestorationAvilable = 0; var adeleGrandisGoddessBlessingAvilable = 0;
var adeleWeaponAuraAvilable = 0; var adeleImpenetrableSkinAvilable = 0;

//cooldown Trackers
var adeleMaestroUnavailableUntil = 0; var adeleRuinUnavailableUntil = 0; var adeleInfinityBladeUnavailableUntil = 0;
var adeleStormUnavailableUntil = 0;
//Enhance Skills
var adeleEnhancedCleaveLastUsed = 0;

function checkAdele() {
	if (charClass == "adele") {
		dmg += combatDmg;
		for (var source of combatIed) {
			ied.push(source);
		}
		cStr += 60; //2nd Job: Elite Training
		cStr += 30; //5th Job: Impenetrable Skin
		percentHp += 15; //4th Job: Strive
		att += Math.floor(weaponAtt/15);	//Beginner: Magic conversion
		att += 30; //3rd Job: Ascent
		att += 30; //2nd/4th Job: Bladecaster Mastery upgrade Bladecaster Control
		att += 30; //4th Job: Strive
		att += 20; //Decent Advanced Blessing
		critRate += 20; //4th Job: Strive
		critRate += 20; //3rd Job: Ascent
		critRate += 10; //Decent Sharp Eyes
		critDmg += 10; //Beginner: Recalling Greatness
		critDmg += 8; //Decent Sharp Eyes
		percentAtt += 10; //Beginner: Recalling Greatness
		percentAtt += 4; //Beginner: Exclusive spell (ign. +4% magic attack)
		weaponAttackSpeed += 2; //2nd Job: Weave infusion
		weaponAttackSpeed += 1; //Decent speed infusion
		weaponAttackSpeed += 1; //Monster Park Green
		finalDamage += 10; //2nd Job: Resonance Rush (assume 100% uptime)
		finalDamage += 15; //3rd Job: Ascent
		finalDamage += 30; //4th Job: Ruination
		dmg += 20; //4th Job: Grave Proclamation (assume 100% application)
		bossDmg += 10; //4th Job: Strive
		ied.push(5); ied.push(5) //2nd Job: Resonance Rush (assume 100% uptime)
		ied.push(10); //3rd Job: Noble Summons (assume 100% application)
		ied.push(10); //4th Job: Grave Proclamation (assume 100% application)
		ied.push(20); //4th Job: Ruination
		percentAllStat += 15; //4th Job: Hero of the Flora
		//var adeletotalHp = (hp * percentHp) + finalHp;
		//var adeletotalMp = (mp * percentMp);
		//var adelepureHp = 545 + 18 * parseInt(document.getElementById("hpAP").value);
		let adeleTotalStr = Math.floor((cStr * (1 + (percentStr + percentAllStat) / 100)) + finalStr);
		let adeleTotalDex = Math.floor((cDex * (1 + (percentDex + percentAllStat) / 100)) + finalDex);
		let adeleStatValue = adeleTotalStr * 4 + adeleTotalDex;
		//let adeleLowerCriticalDamage = 20 + critDmg;
		//let adeleUpperCriticalDamage = 50 + critDmg;
		//let adeleAverageCritDmg = 35 + critDmg;
		let adeleTotalAttack = att * (1 + (percentAtt / 100));
		let ageleTotalMagicAttack = mAtt * (1 + (percentMagAtt / 100));
		let adeleUpperActualDamageRange = weaponMultiplier * adeleStatValue * (1 + adeleTotalAttack / 100);
		let adeleLowerActualDamageRange = adeleUpperActualDamageRange * 90 / 100; //20 base + 70 weapon mastery
		let adeleUpperShownDamageRange = Math.floor(adeleUpperActualDamageRange * (1 + dmg / 100) * (1 + finalDamage / 100));
		let adeleLowerShownDamageRange = Math.floor(1 + adeleLowerActualDamageRange * (1 + dmg / 100) * (1 + finalDamage / 100));
		document.getElementById("combatRange").placeholder = adeleLowerShownDamageRange + " - " + adeleUpperShownDamageRange;
		document.getElementById("combatStr").placeholder = Math.floor((cStr * (1 + (percentStr + percentAllStat) / 100)) + finalStr);
		document.getElementById("combatDex").placeholder = Math.floor((cDex * (1 + (percentDex + percentAllStat) / 100)) + finalDex);
		document.getElementById("combatInt").placeholder = Math.floor((cInt * (1 + (percentInt + percentAllStat) / 100)) + finalInt);
		document.getElementById("combatLuk").placeholder = Math.floor((cLuk * (1 + (percentLuk + percentAllStat) / 100)) + finalLuk);
		document.getElementById("combatAtt").placeholder = Math.floor(att * (1 + percentAtt / 100));
		document.getElementById("combatMAtt").placeholder = Math.floor(mAtt * (1 + percentMagAtt / 100));
		document.getElementById("combatAF").placeholder = arcaneForce;
		document.getElementById("combatSF").placeholder = sacredForce;
		document.getElementById("combatCritRate").placeholder = critRate;
		document.getElementById("combatCritDamage").placeholder = critDmg;
		document.getElementById("combatDmg").placeholder = dmg;
		document.getElementById("combatBossDmg").placeholder = bossDmg;
		document.getElementById("combatMonDmg").placeholder = monsterDmg;
		let adeleIgnoreDefenseValue = 100;
		for (var source of ied) {
			adeleIgnoreDefenseValue *= (1 - source / 100);
		}
		adeleIgnoreDefenseValue = 100 - adeleIgnoreDefenseValue;
		document.getElementById("combatIED").placeholder = adeleIgnoreDefenseValue;
		document.getElementById("combatFD").placeholder = finalDamage;
		document.getElementById("combatBuffDuration").placeholder = buffDuration;
		if (weaponAttackSpeed > 10) {
			weaponAttackSpeed = 10;
		}
		document.getElementById("combatAttSpeed").placeholder = weaponAttackSpeed;
		
		adeleDmg = dmg;
		adeleBossDmg = bossDmg;
		adeleTotalIed = adeleIgnoreDefenseValue;
		adeleAvgCritDamage = critDmg + 35;
		adeleAvgShownDamage = adeleUpperShownDamageRange - adeleLowerShownDamageRange;
	}
}
		
// Chart data
// Define a function to generate custom tooltips with random numbers
// Keep track of the index to display numbers in order
var index = 0;

const tooltipConfig = {
    0: {  //Dataset index 0
        0: () => "Success", //tooltip for data index 2
        default: (value) => "Total Damage: " + value
    },
    1: {  //Dataset index 1
		0: () => "Success", //tooltip for data index 3
        default: (value) => "Skill Damage: " + value
    }
};

function customTooltips(context) {
    var datasetIndex = context.datasetIndex;
    var dataIndex = context.dataIndex;
    var value = context.dataset.data[dataIndex];
    var tooltipText = ""; // Default empty tooltip

    if (tooltipConfig.hasOwnProperty(datasetIndex)) {
        let datasetConfig = tooltipConfig[datasetIndex];
        if (datasetConfig.hasOwnProperty(dataIndex)) { //use specific tooltip function if defined for this data index
            tooltipText = datasetConfig[dataIndex](value);
        } else if (datasetConfig.hasOwnProperty('default')) { //use default tooltip function for this dataset
            tooltipText = datasetConfig['default'](value);
        }
    }

    return tooltipText;
}

const dataLine = {
    type: 'line',
    data: {
        labels: [100, 200, 300, 400, 500, 600, 700],
        datasets: [{
            label: "Total Damage",
            data: [0, 59, 80, 81, 56, 55, 40],
            backgroundColor: 'rgba(105, 0, 132, .2)',
            borderColor: 'rgba(255, 99, 132, 0.8)',
            borderWidth: 2,
            tension: 0.4
        },
        {
            label: "Skill Damage",
            data: [0, 48, 40, 19, 86, 27, 90],
            backgroundColor: 'rgba(0, 137, 132, .2)',
            borderColor: 'rgba(50, 150, 255, 1)',
            borderWidth: 2,
            tension: 0.4
        }]
    },
    options: {
        responsive: true,
        plugins: {
            zoom: {
                pan: {
                    enabled: true,
                    mode: 'x',
                    speed: 20
                },
                zoom: {
                    wheel: {
                        enabled: true
                    },
                    pinch: {
                        enabled: true
                    },
                    mode: 'x',
                    speed: 0.1
                }
            },
            tooltip: {
                callbacks: {
                    label: customTooltips // Reference the custom tooltips function
                }
            }
        }
    }
};

const ctx = document.getElementById('line-chart').getContext('2d');
const lineChart = new Chart(ctx, {
    type: dataLine.type,
    data: dataLine.data,
    options: dataLine.options
});

//ADDS CUSTOM TOOLTIP AT DATASETNUM, DATAINDEX
//USE EX: addTooltipCustomization(0, 2, "Special Tooltip");
function addTooltipCustomization(datasetIndex, dataIndex, tooltipText) {
    //ensure tooltipConfig object for the dataset index exists
    if (!tooltipConfig[datasetIndex]) {
        tooltipConfig[datasetIndex] = {};
    }
    //set the custom tooltip function for the specified data index
    tooltipConfig[datasetIndex][dataIndex] = () => tooltipText;
}

//SHIFTS ALL HIGHER INDEX TOOLTIPS +1 WHEN INSERTING NEW EVENT AT CERTAIN INDEX
//USE EX: shiftTooltipConfig(0, 3);, CALL BEFORE INSERTING DATA, THIS IS DATASET 0, FROM INDEX 3
function shiftTooltipConfig(datasetIndex, insertAtIndex) {
    //check if the dataset index exists in tooltip configuration
    if (tooltipConfig[datasetIndex]) {
        //create a new object to hold shifted configuration
        const newConfig = {};
        //iterate over the existing keys in configuration
        Object.keys(tooltipConfig[datasetIndex]).sort((a, b) => b - a)  //sort keys in descending order, prevent overwrite
            .forEach(key => {
                const index = parseInt(key);
                //shift all tooltips from the insertion index upwards by one
                if (index >= insertAtIndex) {
                    newConfig[index + 1] = tooltipConfig[datasetIndex][index];
                } else {
                    newConfig[index] = tooltipConfig[datasetIndex][index];
                }
            });
        //replace the old configuration with the new shifted configuration
        tooltipConfig[datasetIndex] = newConfig;
    }
}


document.getElementById("adeleHexaCleave").addEventListener("click", addToChart);
function addToChart() {
	console.log(dataLine);
    //add new entries to the "Total Damage" dataset
    lineChart.data.datasets[0].data.push(70); //add new value to the "Total Damage" data array
    lineChart.data.labels.push("August"); //add a corresponding label for new value
    //add new entries to the "Skill Damage" dataset
    lineChart.data.datasets[1].data.push(35); //add new value to the "Skill Damage" data array
    //update chart after modifying
    lineChart.update();
	
	//test: call function to modify the data at index 1 for "Total Damage" dataset to 75
	modifyChartData(0, 1, 75);

	//test: call function to modify the data at index 2 for "Skill Damage" dataset to 50
	modifyChartData(1, 2, 50);

	addTooltipCustomization(0, 2, "Tooltip Test1");
	addTooltipCustomization(1, 4, "Tooltip Test2");

	shiftTooltipConfig(1, 3);
}


function modifyChartData(datasetIndex, index, newValue) {
    //modify the data at the specified index
    lineChart.data.datasets[datasetIndex].data[index] = newValue;
    //update chart
    lineChart.update();
}


function getBuffStats() {
	//results index[0] = %Att/MAtt, index[1] = %Main Stat, index[2] = %Dmg, index[3] = %fd, index[4] = flatAtt, index[5] = %ied
	let results = [0, 0, 0, 0, 0, 0];
	if (adeleRingOfRestraintActive) {
		switch (ozRingLv) {
			case "5"://20sec
			case "4"://15sec
				results[0] += 100;
				break;
			case "3"://13sec
				results[0] += 75;
				break
			case "2"://11sec
				results[0] += 50;
				break
			case "1"://9sec
				results[0] += 25;
				break;
			default:
				results[0] += 0;
		}
	}
	if (adeleWeaponJumpRingActive) {
		switch (ozRingLv) {
			case "5"://20sec
			case "4"://15sec
				results[1] += 400;
				break;
			case "3"://13sec
				results[1] += 300;
				break
			case "2"://11sec
				results[1] += 200;
				break
			case "1"://9sec
				results[1] += 100;
				break;
			default:
				results[1] += 0;
		}
	}
	if (adeleTermsAndConditionsActive) {
		results[2] += 60;
	}
	if (adeleDivineWrathActive) {
		results[2] += 10;
	}
	if (adeleLegacyRestorationActive) {
		results[2] += 45;
		results[3] += 10; //boost
	}
	if (adeleGrandisGoddessBlessingActive) {
		results[4] += (weaponAtt * 1.5) + 85; //recalculate
	}
	if (weaponAuraActive) {
		results[5] += 15;
		results[3] += 5;
	}
	if (adeleImpenetrableSkinActive) {
		results[2] += 30;
	}
	return results;
}


//document.getElementById("adeleHexaCleave").addEventListener("click", useHexaCleave);
function useHexaCleave() {
	let delay = applyAttackSpeed(780);
	let level = 30;
	let attackCount = 6;
	let skillDamage = (390 + 12 * level + 20) * attackCount; //+20 from hyper
	if (adeleEnhancedCleaveLastUsed + 6000 > adeleCurTime) { //every 6 seconds
		attackCount = 7;
		skillDamage = (300 + 9 * level + 20) * attackCount; //+20 from hyper
		adeleEnhancedCleaveLastUsed = adeleCurTime;
	}
	skillDamage *= 2; //Boost
	//hyper: apply 20ied, 20 boss   boost: apply 20% ied   Trigger: apply aetherial arms/aether forge
	let extra = getBuffStats();
	let skillDamageMultiplier = skillDamage / 100;
	let totalIed = adeleTotalIed * (1 - 20 / 100)/*hyper*/ * (1 - 20 / 100)/*boost*/ * (1 - extra[5] / 100);
	let monsterDef = 1 - (enemyDefense / 100 * (1 - totalIed) / 100);
	let monsterResistance = 0.5 * (1 + elementalIgnore / 100);
	let damageMultiplier = (1 + dmg + extra[2] / 100);
	let totalDmgToBosses = 1 + (dmg + bossDmg + extra[2] + 20/*hyper*/) / 100;
	let damage = adeleAvgShownDamage / damageMultiplier * skillDamageMultiplier * totalDmgToBosses * monsterDef * monsterResistance * (1 + finalDamage + extra[3]/ 100);
	//Trigger: apply aetherial arms/aether forge
	let followUp = useTrigger();
	adeleCurTime += delay;
	damage += followUp;
	//add Damage to chart
}

document.getElementById("adeleMaestro").addEventListener("click", useMaestro);
function useMaestro() {
	let cooldown = applyCooldownReduction(360000, false); //360 sec
	let delay = 7380; //cinematic unaffected by reduction
	let level = 30;
	let attackCount = 10;
	let skillDamage = (3300 + 110 * level) * attackCount;
	let attackCount2 = 10 * 14;
	let skillDamage2 = (3900 + 130 * level) * attackCount2;
	skillDamage += skillDamage2;
	let extra = getBuffStats();
	let skillDamageMultiplier = skillDamage / 100;
	let totalIed = adeleTotalIed * (1 - 20 / 100)/*level boost*/ * (1 - 30 / 100)/*level boost*/ * (1 - extra[5] / 100);
	let monsterDef = 1 - (enemyDefense / 100 * (1 - totalIed) / 100);
	let monsterResistance = 0.5 * (1 + elementalIgnore / 100);
	let damageMultiplier = (1 + dmg + extra[2] / 100);
	let totalDmgToBosses = 1 + (dmg + bossDmg + extra[2] + 20 + 30/*level boost*/) / 100;
	let damage = adeleAvgShownDamage / damageMultiplier * skillDamageMultiplier * totalDmgToBosses * monsterDef * monsterResistance * (1 + finalDamage + extra[3]/ 100);
	adeleCurTime += delay;
	adeleMaestroUnavailableUntil = adeleCurTime + cooldown;
	//add Damage to chart
}

document.getElementById("adeleRuin").addEventListener("click", useRuin);
function useRuin() {
	let cooldown = applyCooldownReduction(60000, false); //60 sec
	let delay = applyAttackSpeed(780);
	let level = 30;
	let attackCount = 6;
	let repeat = 12;
	let skillDamage = (250 + 10 * level) * attackCount * repeat;
	let attackCount2 = 9;
	let repeat2 = 8;
	let skillDamage2 = (450 + 18 * level) * attackCount2 * repeat2;
	skillDamage += skillDamage2;
	skillDamage *= 1.6; //Boost
	let extra = getBuffStats();
	let skillDamageMultiplier = skillDamage / 100;
	let totalIed = adeleTotalIed * (1 - extra[5] / 100);
	let monsterDef = 1 - (enemyDefense / 100 * (1 - totalIed) / 100);
	let monsterResistance = 0.5 * (1 + elementalIgnore / 100);
	let damageMultiplier = (1 + dmg + extra[2] / 100);
	let totalDmgToBosses = 1 + (dmg + bossDmg + extra[2]) / 100;
	let damage = adeleAvgShownDamage / damageMultiplier * skillDamageMultiplier * totalDmgToBosses * monsterDef * monsterResistance * (1 + finalDamage + extra[3]/ 100);
	adeleCurTime += delay;
	adeleRuinUnavailableUntil = adeleCurTime + cooldown;
	//add Damage to chart
}

document.getElementById("adeleInfinityBlade").addEventListener("click", useInfinityBlade);
function useInfinityBlade() {
	let cooldown = applyCooldownReduction(180000); //180 sec
	let delay = applyAttackSpeed(540);
	let level = 30;
	let duration = 30000; //30 sec
	// Level 30, bossDmg + 50, ied +20 + 30
	let attackCount = 2;
	let swords = 18;
	let attackIteration = 1000; //1 sec between attacks
	let skillDamage = (350 + 14 * level) * attackCount * swords * (duration / attackIteration);
	skillDamage = skillDamage * 1.6; //Boost
	let extra = getBuffStats();
	let skillDamageMultiplier = skillDamage / 100;
	let totalIed = adeleTotalIed * (1 - extra[5] / 100);
	let monsterDef = 1 - (enemyDefense / 100 * (1 - totalIed) / 100);
	let monsterResistance = 0.5 * (1 + elementalIgnore / 100);
	let damageMultiplier = (1 + dmg + extra[2] / 100);
	let totalDmgToBosses = 1 + (dmg + bossDmg + extra[2]) / 100;
	let damage = adeleAvgShownDamage / damageMultiplier * skillDamageMultiplier * totalDmgToBosses * monsterDef * monsterResistance * (1 + finalDamage + extra[3]/ 100);
	adeleCurTime += delay;
	adeleInfinityBladeUnavailableUntil = adeleCurTime + cooldown;
	//add Damage to chart
}

document.getElementById("adeleStorm").addEventListener("click", useStorm);
function useStorm() {
	let cooldown = applyCooldownReduction(90000); //90 sec
	let delay = applyAttackSpeed(780);
	let level = 30;
	let duration = 14000; //14 sec
	let attackCount = 2 + adeleSwords; //attackCount +2 for each additional 2 swords
	let attackIteration = 300; //~3 attacks per second
	let skillDamage = (350 + 14 * level) * attackCount * adeleSwords * (duration / attackIteration - (duration % attackIteration));
	skillDamage *= 1.6; //Boost
	let extra = getBuffStats();
	let skillDamageMultiplier = skillDamage / 100;
	let totalIed = adeleTotalIed * (1 - extra[5] / 100);
	let monsterDef = 1 - (enemyDefense / 100 * (1 - totalIed) / 100);
	let monsterResistance = 0.5 * (1 + elementalIgnore / 100);
	let damageMultiplier = (1 + dmg + extra[2] / 100);
	let totalDmgToBosses = 1 + (dmg + bossDmg + extra[2]) / 100;
	let damage = adeleAvgShownDamage / damageMultiplier * skillDamageMultiplier * totalDmgToBosses * monsterDef * monsterResistance * (1 + finalDamage + extra[3]/ 100);
	adeleCurTime += delay;
	adeleStormUnavailableUntil = adeleCurTime + cooldown;
	//add Damage to chart
}

document.getElementById("adeleAetherBloom").addEventListener("click", useAetherBloom);
function useAetherBloom() {
	//let cooldown = 20000; //20 sec
	let cooldown = 16000; //16 sec, -25%, with Hyper
	let delay = 420;
	let level = 30;
	let attackCount = 8;
	//let swords =  number of swords
	let damage = (350 + 14 * level) * attackCount * /* EDIT NUMBER */ swords * .75; //-25% damage on single enemy
	damage = damage * 2; //Boost
	// + 20% ied from boost
}

document.getElementById("adeleGraveProclamation").addEventListener("click", useGraveProclamation);
function useGraveProclamation() {
	let cooldown = 10000; //10 sec
	let delay = 660; //660 in file
	let level = 20;
	let attackCount = 10;
	let damage = (120 + 5 * level) * attackCount;
	damage = damage * 2; //Boost
	//+10 normal monster, +20 ied from boost
}

document.getElementById("adelePlummet").addEventListener("click", usePlummet);
function usePlummet() {
	let cooldown = 1500; //1.5 sec
	let delay = 840;
	let level = 20;
	let attackCount = 6;
	let damage = (450 + 5 * level) * attackCount;
	damage = damage * 2; //Boost
	//Trigger
	//+20 ied from boost
}

document.getElementById("adeleNobleSummons").addEventListener("click", useNobleSummons);
function useNobleSummons() {
	let cooldown = 12000; //12 sec
	let delay = 0;
	let level = 20;
	let attackCount = 4;
	//let swords =  number of swords
	let damage = (200 + 300 + 3 * level) * attackCount * swords; //+300 Perfection
	damage = damage * 2; //Boost
	//20 ied from boost
	//Note+ x2 for aether forge
}

document.getElementById("adeleReignOfDestruction").addEventListener("click", useReignOfDestruction);
function useReignOfDestruction() {
	let cooldown = 30000; //30 sec
	let delay = 540;
	let level = 20;
	let attackDuration = 7000 + 4000; //+4 sec from Hyper
	let attackCount = 4;
	let attackIteration = 350;
	let damage = (80 + 300 + level) * attackCount * (attackDuration / attackIteration - (attackDuration % attackIteration)); //+300 Perfection
	let attackCount2 = 12;
	let damage2 = (450 + 5 * level) * attackCount2;
	damage = (damage + damage2) * 2; //Boost
	//20ied from boost
}

document.getElementById("adeleResonanceRush").addEventListener("click", useResonanceRush);
function useResonanceRush() {
	let delay = 900;
	let level = 10;
	let attackCount = 6;
	let damage = (462 + 265 + 4 * level); //+265 Perfection
	damage = damage  * 2; //Boost
	//20ied from boost
}

document.getElementById("adeleHexaMagicDispatch").addEventListener("click", useHexaMagicDispatch);
function useHexaMagicDispatch() {
	let delay = 810;
	let level = 30;
	let attackCount = 3;
	let bulletCount = 5;
	let damage = (480 + 30 + 225 + 8 * level) * attackCount * bulletCount; //+30 aetherial arms, + 225 Perfection
	damage = damage  * 2; //Boost
	//10 normal monster, 20 ied from boost
}

document.getElementById("adeleShardbreaker").addEventListener("click", useShardbreaker);
function useShardbreaker() {
	let cooldown = 60000; //60 sec
	let delay = 900;
	let level = 1;
	let attackCount = 6;
	let collision = 2; //assume 2 hits
	let damage = (2000 * level) * attackCount * collision;
	damage = damage  * 2; //Boost
	//20 ied from boost
}

document.getElementById("adeleHuntingDecree").addEventListener("click", useHuntingDecree);
function useHuntingDecree() {
	let delay = 1000; //1 second per strike
	let level = 20;
	let attackCount = 1; // make secondary variable to hold swords
	let damage = (200 + 120 + 2 * level) * attackCount * swords; //+120 hunting decree
	damage = damage  * 2; //Boost
	//10 normal monster, 20 ied from boost
}

			// ADD OZ RING, AB LINK

//Buffs
document.getElementById("adeleLegacyRestoration").addEventListener("click", useLegacyRestoration);
function useLegacyRestoration() {
	let cooldown = 180000; //180 sec
	let delay = 720;
	let level = 30;
	let duration = 30000; //30 sec
		//during duration
		// + 45% damage
		// + 2 aether swords
		// + 10% final damage
	let attackCount = 3;
	let attackIteration = 3000;
	let damage = (900 + 36 * level) * attackCount * (duration / attackIteration);
	damage = damage * 1.6; //Boost
}

document.getElementById("adeleGrandisGoddessBlessing").addEventListener("click", useAdeleGrandisGoddessBlessing);
function useAdeleGrandisGoddessBlessing() {
	let cooldown = 180000; //180 sec
	let charges = 2;
	let delay = 630;
	let level = 30;
	let duration = 40000; //40 sec
		//during duration
		// + 150% base weapon attack power
			//get from weaponstats[weapon][8].att
		// + 100 Att/MAtt
		// + 10% final damage
}

document.getElementById("adeleWeaponAura").addEventListener("click", useAdeleWeaponAura);
function useAdeleWeaponAura() {
	let cooldown = 180000; //180 sec
	let charges = 2;
	let delay = 720;
	let level = 30;
	let duration = 130000; //130 sec
		//during duration
		// + 15% ied
		// + 5% final damage
		// Every 5 seconds, aura wave damage = 500 + 20 * level * attackCountOf6
}

document.getElementById("adeleImpenetrableSkin").addEventListener("click", useAdeleImpenetrableSkin);
function useAdeleImpenetrableSkin() {
	let cooldown = 120000; //120 sec
	let delay = 720;
	let level = 30;
	let duration = 18000; //18 sec
		//during duration
		// + 36% damage (6x6 max stacks)
		// + 5% final damage
}

function useTrigger() {
	//Magic Dispatch
	let cooldown = applyCooldownReduction(6000, true); //6 sec
	let damage = 0;
	if (lastMagicDispatchTrigger + cooldown < adeleCurTime) {
		let triggerCount = Math.floor(adeleCurTime / cooldown);
		if (triggerCount > magicDispatchTriggerCount) {
			let newTriggers = triggerCount - magicDispatchTriggerCount;
			let level = 30;
			let attackCount = 3;
			let bulletCount = 5;
			let skillDamage = (480 + 30 + 225 + 8 * level) * attackCount * bulletCount * newTriggers; //+30 aetherial arms, + 225 Perfection
			skillDamage *= 2; //Boost
			//10 normal monster, 20 ied from boost
			let extra = getBuffStats();
			let skillDamageMultiplier = skillDamage / 100;
			let totalIed = adeleTotalIed * (1 - 20 / 100)/*boost*/ * (1 - extra[5] / 100);
			let monsterDef = 1 - (enemyDefense / 100 * (1 - totalIed) / 100);
			let monsterResistance = 0.5 * (1 + elementalIgnore / 100);
			let damageMultiplier = (1 + dmg + extra[2] / 100);
			let totalDmgToBosses = 1 + (dmg + bossDmg + extra[2]) / 100;
			damage = adeleAvgShownDamage / damageMultiplier * skillDamageMultiplier * totalDmgToBosses * monsterDef * monsterResistance * (1 + finalDamage + extra[3]/ 100);
			magicDispatchTriggerCount = triggerCount;
		}
	}
	//Aether Forge
	cooldown = applyCooldownReduction(1500, true); //1.5 sec (9.5 - 4 - 4)
	if (aetherForgeTriggerCount + cooldown < adeleCurTime) {
		let triggerCount = Math.floor(adeleCurTime / cooldown);
		if (triggerCount > aetherForgeTriggerCount) {
			let newTriggers = triggerCount - aetherForgeTriggerCount;
			let level = 30;
			let attackCount = adeleSwords;
			let bulletCount = 5;
			let skillDamage = (200 + 270 + 8 * level) * attackCount * bulletCount; //+ 270 Perfection
			skillDamage *= 2; //Boost
			//20 ied from boost
			let extra = getBuffStats();
			let skillDamageMultiplier = skillDamage / 100;
			let totalIed = adeleTotalIed * (1 - 20 / 100)/*boost*/ * (1 - extra[5] / 100);
			let monsterDef = 1 - (enemyDefense / 100 * (1 - totalIed) / 100);
			let monsterResistance = 0.5 * (1 + elementalIgnore / 100);
			let damageMultiplier = (1 + dmg + extra[2] / 100);
			let totalDmgToBosses = 1 + (dmg + bossDmg + extra[2]) / 100;
			damage += adeleAvgShownDamage / damageMultiplier * skillDamageMultiplier * totalDmgToBosses * monsterDef * monsterResistance * (1 + finalDamage + extra[3]/ 100);
			aetherForgeTriggerCount = triggerCount;
		}
	}
	return damage;
}

function usePassiveAetherForge() {
	let cooldown = 1500; //1.5 sec (9.5 - 4 - 4)
	let level = 30;
	let attackCount = swords; //Uses swords number
	let bulletCount = 5;
	let damage = (200 + 270 + 8 * level) * attackCount * bulletCount; //+ 270 Perfection
	damage = damage  * 2; //Boost
	//20 ied from boost
}




