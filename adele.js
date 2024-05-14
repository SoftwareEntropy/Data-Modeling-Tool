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

var adeleStartState = [];
// Chart data
// Define a function to generate custom tooltips with random numbers
// Keep track of the index to display numbers in order
var adeleSaveState = [];
var index = adeleStartState[0] = 0;

var adeleDmg = adeleStartState[1] = 0;
var adeleTotalIed = adeleStartState[2] = 0;
var adeleAvgCritDamage = adeleStartState[3] = 0;
var adeleFinalDamage = adeleStartState[4] = 0;
var adeleAvgShownDamage = adeleStartState[5] = 0;
var adeleCritMultiplier = adeleStartState[6] = 1;

var enemyDefense = adeleStartState[7] = 380;
var enemyLevel = adeleStartState[8] = 275;

var adeleCurTime = adeleStartState[9] = 0;
var lastAetherForgeTrigger = adeleStartState[10] = 0;
var aetherForgeTriggerCount = adeleStartState[11] = 0;
var lastMagicDispatchTrigger = adeleStartState[12] = 0;
var magicDispatchTriggerCount = adeleStartState[13] = 0;
var adeleSwords = adeleStartState[14] = 6;
var huntingDecreeAttackCount = adeleStartState[15] = 0;

//Chart index tracker, start at 1
var adeleChartStep = adeleStartState[16] = 1; var adeleChartTotalDamage = adeleStartState[17] = 0;

//Buff trackers
var adeleRingOfRestraintActiveTo = adeleStartState[18] = -1; var adeleWeaponJumpRingActiveTo = adeleStartState[19] = -1;
var adeleTermsAndConditionsActiveTo = adeleStartState[20] = -1; var adeleDivineWrathActiveTo = adeleStartState[21] = -1;
var adeleLegacyRestorationActiveTo  = adeleStartState[22]= -1; var adeleWeaponAuraActiveTo = adeleStartState[23] = -1;
var adeleGrandisGoddessBlessingActiveTo = adeleStartState[24] = -1; var adeleImpenetrableSkinActiveTo = adeleStartState[25] = -1;

//Buff trackers
var adeleRingOfRestraintUnavailableUntil = adeleStartState[26] = -1; var adeleWeaponJumpRingUnavailableUntil = adeleStartState[27] = -1;
var adeleTermsAndConditionsUnavailableUntil = adeleStartState[28] = -1; var adeleDivineWrathUnavailableUntil = adeleStartState[29] = -1;
var adeleLegacyRestorationUnavailableUntil = adeleStartState[30] = -1; var adeleWeaponAuraNextCharge = adeleStartState[31] = 0;
var adeleWeaponAuraCharges = adeleStartState[32] = 2; var adeleGrandisGoddessBlessingNextCharge = adeleStartState[33] = 0;
var adeleGrandisGoddessBlessingCharges = adeleStartState[34] = 2; var adeleImpenetrableSkinUnavailableUntil = adeleStartState[35] = -1;

//skill cooldown Trackers
var adeleMaestroUnavailableUntil = adeleStartState[36] = -1; var adeleRuinUnavailableUntil = adeleStartState[37] = -1;
var adeleInfinityBladeUnavailableUntil = adeleStartState[38] = -1; var adeleStormUnavailableUntil = adeleStartState[39] = -1;
var adeleAetherBloomUnavailableUntil = adeleStartState[40] = -1; var adeleGraveProclamationUnavailableUntil = adeleStartState[41] = -1;
var adelePlummetUnavailableUntil = adeleStartState[42] = -1; var adeleNobleSummonsUnavailableUntil = adeleStartState[43] = -1;
var adeleReignOfDestructionUnavailableUntil = adeleStartState[44] = -1; var adeleMagicDispatchUnavailableUntil = adeleStartState[45] = -1;
var adeleShardbreakerUnavailableUntil = adeleStartState[46] = -1;

//Enhance Skills
var adeleEnhancedCleaveLastUsed = adeleStartState[47] = -6001;

//Save start state
adeleSaveState[0] = adeleStartState;
	
//Chart & data
var dataLine  = adeleStartState[48] = {
    type: 'line',
    data: {
        labels: [0],
        datasets: [{
            label: "Total Damage",
            data: [0],
            backgroundColor: 'rgba(105, 0, 132, .2)',
            borderColor: 'rgba(255, 99, 132, 0.8)',
            borderWidth: 2,
            tension: 0.4
        },
        {
            label: "Skill Damage",
            data: [0],
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
                    label: customTooltips//function
                }
            }
        },
		scales: {
			y: {
				beginAtZero: true,
				ticks: {
					callback: function(value) {
					return formatLargeNumber(value);
					}
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

//Other trackers
var adeleNonDamagingSkillUsed = adeleStartState[49] = false;

//Attack skills
document.getElementById("adeleHexaCleave").addEventListener("click", useHexaCleave);
function useHexaCleave() {
	let delay = applyAttackSpeed(780);
	let level = 30;
	let attackCount = 6;
	let skillDamage = (390 + 12 * level + 20) * attackCount; //+20 from hyper
	var enhanced = false;
	if (adeleEnhancedCleaveLastUsed + 6000 < adeleCurTime) { //every 6 seconds
		enhanced = true;
		var chaseCuts = 3
		attackCount = 7;
		skillDamage = (300 + 9 * level + 20) * attackCount * chaseCuts; //+20 from hyper
		adeleEnhancedCleaveLastUsed = adeleCurTime;
	}
	skillDamage *= 2; //Boost
	adeleCurTime += delay;
	getAdeleBuffStats();
	let skillDamageMultiplier = skillDamage / 100;
	let totalIed = adeleTotalIed * (1 - 20 / 100)/*hyper*/ * (1 - 20 / 100)/*boost*/;
	let monsterDef = 1 - (enemyDefense / 100 * (1 - totalIed) / 100);
	let monsterResistance = 0.5 * (1 + elementalIgnore / 100);
	let damageMultiplier = (1 + adeleDmg / 100);
	let totalDmgToBosses = 1 + (adeleDmg + bossDmg + 20/*hyper*/) / 100;
	let damage = adeleAvgShownDamage / damageMultiplier * skillDamageMultiplier * totalDmgToBosses * monsterDef * monsterResistance * (1 + adeleFinalDamage / 100);
	damage += (damage * adeleCritMultiplier);
	//Trigger: apply aetherial arms/aether forge
	let followUp = useTrigger();
	damage += followUp[0];
	//add Damage to chart, round value
	let str = "\nHexa Cleave: " + formatLargeNumber(damage) + "";
	if (enhanced) {
		str = "\nHexa Cleave (Enhanced): " + formatLargeNumber(damage) + "";
	}
	if (followUp[0] > 0) {
		str += followUp[1];
	}
	addDamageToAdeleChart(damage, str);
}

document.getElementById("adeleReignOfDestruction").addEventListener("click", useReignOfDestruction);
function useReignOfDestruction() {
	let cooldown = applyCooldownReduction(30000, true); //30 sec
	let delay = applyAttackSpeed(540);
	let level = 20;
	let attackDuration = 7000 + 4000; //+4 sec from Hyper
	let attackCount = 4;
	let attackIteration = 350;
	let skillDamage = (80 + 300 + level) * attackCount * (Math.floor(attackDuration / attackIteration)); //+300 Perfection
	let attackCount2 = 12;
	let skillDamage2 = (450 + 5 * level) * attackCount2;
	skillDamage = (skillDamage + skillDamage2) * 2; //Boost
	adeleCurTime += delay;
	getAdeleBuffStats();
	let skillDamageMultiplier = skillDamage / 100;
	let totalIed = adeleTotalIed * (1 - 20 / 100); //+ 20% ied from boost;
	let monsterDef = 1 - (enemyDefense / 100 * (1 - totalIed) / 100);
	let monsterResistance = 0.5 * (1 + elementalIgnore / 100);
	let damageMultiplier = (1 + adeleDmg / 100);
	let totalDmgToBosses = 1 + (adeleDmg + bossDmg) / 100;
	let damage = adeleAvgShownDamage / damageMultiplier * skillDamageMultiplier * totalDmgToBosses * monsterDef * monsterResistance * (1 + adeleFinalDamage / 100);
	damage += (damage * adeleCritMultiplier);
	adeleReignOfDestructionUnavailableUntil = adeleCurTime + cooldown;
	addDamageToAdeleChart(damage, "\nReign of Destruction: " + formatLargeNumber(damage));
}

//additional +10 normal monster damage
document.getElementById("adeleHexaMagicDispatch").addEventListener("click", useHexaMagicDispatch);
function useHexaMagicDispatch() {
	let cooldown = applyCooldownReduction(6000, false); //6 sec
	let delay = applyAttackSpeed(810);
	let level = 30;
	let attackCount = 3;
	let bulletCount = 5;
	let skillDamage = (480 + 30 + 225 + 8 * level) * attackCount * bulletCount; //+30 aetherial arms, + 225 Perfection
	skillDamage *= 2; //Boost
	adeleCurTime += delay;
	getAdeleBuffStats();
	let skillDamageMultiplier = skillDamage / 100;
	let totalIed = adeleTotalIed * (1 - 20 / 100); //+ 20% ied from boost;
	let monsterDef = 1 - (enemyDefense / 100 * (1 - totalIed) / 100);
	let monsterResistance = 0.5 * (1 + elementalIgnore / 100);
	let damageMultiplier = (1 + adeleDmg / 100);
	let totalDmgToBosses = 1 + (adeleDmg + bossDmg) / 100;
	let damage = adeleAvgShownDamage / damageMultiplier * skillDamageMultiplier * totalDmgToBosses * monsterDef * monsterResistance * (1 + adeleFinalDamage / 100);
	damage += (damage * adeleCritMultiplier);
	adeleMagicDispatchUnavailableUntil = adeleCurTime + cooldown;
	addDamageToAdeleChart(damage, "\nHEXA Magic Dispatch: " + formatLargeNumber(damage));
}

document.getElementById("adeleShardbreaker").addEventListener("click", useShardbreaker);
function useShardbreaker() {
	let cooldown = applyCooldownReduction(60000, true); //60 sec
	let delay = applyAttackSpeed(900);
	let level = 1;
	let attackCount = 6;
	let collision = 2; //assume 2 hits
	let skillDamage = (2000 * level) * attackCount * collision;
	skillDamage *= 2; //Boost
	adeleCurTime += delay;
	getAdeleBuffStats();
	let skillDamageMultiplier = skillDamage / 100;
	let totalIed = adeleTotalIed * (1 - 20 / 100); //+ 20% ied from boost;
	let monsterDef = 1 - (enemyDefense / 100 * (1 - totalIed) / 100);
	let monsterResistance = 0.5 * (1 + elementalIgnore / 100);
	let damageMultiplier = (1 + adeleDmg / 100);
	let totalDmgToBosses = 1 + (adeleDmg + bossDmg) / 100;
	let damage = adeleAvgShownDamage / damageMultiplier * skillDamageMultiplier * totalDmgToBosses * monsterDef * monsterResistance * (1 + adeleFinalDamage / 100);
	damage += (damage * adeleCritMultiplier);
	adeleShardbreakerUnavailableUntil = adeleCurTime + cooldown;
	addDamageToAdeleChart(damage, "\nShardbreaker: " + formatLargeNumber(damage));
}

document.getElementById("adeleMaestro").addEventListener("click", useMaestro);
function useMaestro() {
	let cooldown = applyCooldownReduction(360000, false); //360 sec
	let delay = 7380; //cinematic unaffected by reduction
	let level = 30;
	let attackCount = 6 * 10;
	let skillDamage = (3300 + 110 * level) * attackCount;
	let attackCount2 = 10 * 14;
	let skillDamage2 = (3900 + 130 * level) * attackCount2;
	skillDamage += skillDamage2;
	adeleCurTime += delay;
	getAdeleBuffStats();
	let skillDamageMultiplier = skillDamage / 100;
	let totalIed = adeleTotalIed * (1 - 20 / 100)/*level boost*/ * (1 - 30 / 100)/*level boost*/;
	let monsterDef = 1 - (enemyDefense / 100 * (1 - totalIed) / 100);
	let monsterResistance = 0.5 * (1 + elementalIgnore / 100);
	let damageMultiplier = (1 + adeleDmg / 100);
	let totalDmgToBosses = 1 + (adeleDmg + bossDmg + 20 + 30/*level boost*/) / 100;
	let damage = adeleAvgShownDamage / damageMultiplier * skillDamageMultiplier * totalDmgToBosses * monsterDef * monsterResistance * (1 + adeleFinalDamage / 100);
	damage += (damage * adeleCritMultiplier);
	adeleMaestroUnavailableUntil = adeleCurTime + cooldown;
	addDamageToAdeleChart(damage, "\nMaestro: " + formatLargeNumber(damage));
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
	adeleCurTime += delay;
	getAdeleBuffStats();
	let skillDamageMultiplier = skillDamage / 100;
	let totalIed = adeleTotalIed;
	let monsterDef = 1 - (enemyDefense / 100 * (1 - totalIed) / 100);
	let monsterResistance = 0.5 * (1 + elementalIgnore / 100);
	let damageMultiplier = (1 + adeleDmg / 100);
	let totalDmgToBosses = 1 + (adeleDmg + bossDmg) / 100;
	let damage = adeleAvgShownDamage / damageMultiplier * skillDamageMultiplier * totalDmgToBosses * monsterDef * monsterResistance * (1 + adeleFinalDamage / 100);
	damage += (damage * adeleCritMultiplier);
	adeleRuinUnavailableUntil = adeleCurTime + cooldown;
	addDamageToAdeleChart(damage, "\nRuin: " + formatLargeNumber(damage));
}

document.getElementById("adeleInfinityBlade").addEventListener("click", useInfinityBlade);
function useInfinityBlade() {
	let cooldown = applyCooldownReduction(180000, false); //180 sec
	let delay = applyAttackSpeed(540);
	let level = 30;
	let duration = 30000; //30 sec, unaffected by buff duration
	let attackCount = 2;
	let swords = 18;
	let attackIteration = 1000; //1 sec between attacks
	let skillDamage = (350 + 14 * level) * attackCount * swords * (duration / attackIteration);
	skillDamage = skillDamage * 1.6; //Boost
	adeleCurTime += delay;
	getAdeleBuffStats();
	let skillDamageMultiplier = skillDamage / 100;
	let totalIed = adeleTotalIed;
	let monsterDef = 1 - (enemyDefense / 100 * (1 - totalIed) / 100);
	let monsterResistance = 0.5 * (1 + elementalIgnore / 100);
	let damageMultiplier = (1 + adeleDmg / 100);
	let totalDmgToBosses = 1 + (adeleDmg + bossDmg) / 100;
	let damage = adeleAvgShownDamage / damageMultiplier * skillDamageMultiplier * totalDmgToBosses * monsterDef * monsterResistance * (1 + adeleFinalDamage / 100);
	damage += (damage * adeleCritMultiplier);
	adeleInfinityBladeUnavailableUntil = adeleCurTime + cooldown;
	addDamageToAdeleChart(damage, "\nInfinity Blade: " + formatLargeNumber(damage));
}

document.getElementById("adeleStorm").addEventListener("click", useStorm);
function useStorm() {
	let cooldown = applyCooldownReduction(90000, false); //90 sec
	let delay = applyAttackSpeed(780);
	let level = 30;
	let duration = 14000; //14 sec, unaffected by buff duration
	let attackCount = 2 + adeleSwords; //attackCount +2 for each additional 2 swords
	let attackIteration = 350; //~3 attacks per second
	let skillDamage = (350 + 14 * level) * attackCount * Math.floor(duration / attackIteration);
	skillDamage *= 1.6; //Boost
	adeleCurTime += delay;
	getAdeleBuffStats();
	let skillDamageMultiplier = skillDamage / 100;
	let totalIed = adeleTotalIed;
	let monsterDef = 1 - (enemyDefense / 100 * (1 - totalIed) / 100);
	let monsterResistance = 0.5 * (1 + elementalIgnore / 100);
	let damageMultiplier = (1 + adeleDmg / 100);
	let totalDmgToBosses = 1 + (adeleDmg + bossDmg) / 100;
	let damage = adeleAvgShownDamage / damageMultiplier * skillDamageMultiplier * totalDmgToBosses * monsterDef * monsterResistance * (1 + adeleFinalDamage / 100);
	damage += (damage * adeleCritMultiplier);
	adeleStormUnavailableUntil = adeleCurTime + cooldown;
	addDamageToAdeleChart(damage, "\nStorm: " + formatLargeNumber(damage));
}

document.getElementById("adeleNobleSummons").addEventListener("click", useNobleSummons);
function useNobleSummons() {
	let cooldown = applyCooldownReduction(12000, true); //12 sec
	let delay = 100; //assume 100
	let level = 20;
	let attackCount = 4;
	let skillDamage = (200 + 300 + 3 * level) * attackCount * adeleSwords; //+300 Perfection
	skillDamage *= 2; //Boost
	adeleCurTime += delay;
	getAdeleBuffStats();
	let skillDamageMultiplier = skillDamage / 100;
	let totalIed = adeleTotalIed * (1 - 20 / 100); //+ 20% ied from boost;
	let monsterDef = 1 - (enemyDefense / 100 * (1 - totalIed) / 100);
	let monsterResistance = 0.5 * (1 + elementalIgnore / 100);
	let damageMultiplier = (1 + adeleDmg / 100);
	let totalDmgToBosses = 1 + (adeleDmg + bossDmg) / 100;
	let damage = adeleAvgShownDamage / damageMultiplier * skillDamageMultiplier * totalDmgToBosses * monsterDef * monsterResistance * (1 + adeleFinalDamage / 100);
	damage += (damage * adeleCritMultiplier);
	adeleNobleSummonsUnavailableUntil = adeleCurTime + cooldown;
	addDamageToAdeleChart(damage, "\nNoble Summons: " + formatLargeNumber(damage));
}

document.getElementById("adeleAetherBloom").addEventListener("click", useAetherBloom);
function useAetherBloom() {
	let cooldown = applyCooldownReduction(16000, true); //20 -> 16 sec, -25%, with Hyper
	let delay = applyAttackSpeed(420);
	let level = 30;
	let attackCount = 8;
	let skillDamage = (350 + 14 * level) * attackCount * adeleSwords * .75; //-25% damage on single enemy
	skillDamage *= 2; //Boost
	adeleCurTime += delay;
	getAdeleBuffStats();
	let skillDamageMultiplier = skillDamage / 100;
	let totalIed = adeleTotalIed * (1 - 20 / 100); //+ 20% ied from boost;
	let monsterDef = 1 - (enemyDefense / 100 * (1 - totalIed) / 100);
	let monsterResistance = 0.5 * (1 + elementalIgnore / 100);
	let damageMultiplier = (1 + adeleDmg / 100);
	let totalDmgToBosses = 1 + (adeleDmg + bossDmg) / 100;
	let damage = adeleAvgShownDamage / damageMultiplier * skillDamageMultiplier * totalDmgToBosses * monsterDef * monsterResistance * (1 + adeleFinalDamage / 100);
	damage += (damage * adeleCritMultiplier);
	adeleAetherBloomUnavailableUntil = adeleCurTime + cooldown;
	addDamageToAdeleChart(damage, "\nAether Bloom: " + formatLargeNumber(damage));
}

document.getElementById("adeleResonanceRush").addEventListener("click", useResonanceRush);
function useResonanceRush() {
	let delay = applyAttackSpeed(900);
	let level = 10;
	let attackCount = 6;
	let skillDamage = (462 + 265 + 4 * level); //+265 Perfection
	skillDamage *= 2; //Boost
	adeleCurTime += delay;
	getAdeleBuffStats();
	let skillDamageMultiplier = skillDamage / 100;
	let totalIed = adeleTotalIed * (1 - 20 / 100); //+ 20% ied from boost;
	let monsterDef = 1 - (enemyDefense / 100 * (1 - totalIed) / 100);
	let monsterResistance = 0.5 * (1 + elementalIgnore / 100);
	let damageMultiplier = (1 + adeleDmg / 100);
	let totalDmgToBosses = 1 + (adeleDmg + bossDmg) / 100;
	let damage = adeleAvgShownDamage / damageMultiplier * skillDamageMultiplier * totalDmgToBosses * monsterDef * monsterResistance * (1 + adeleFinalDamage / 100);
	damage += (damage * adeleCritMultiplier);
	addDamageToAdeleChart(damage, "\nResonance Rush: " + formatLargeNumber(damage));
}

document.getElementById("adelePlummet").addEventListener("click", usePlummet);
function usePlummet() {
	let cooldown = 1500; //1.5 sec, do not apply cooldown reduction
	let delay = applyAttackSpeed(840);
	let level = 20;
	let attackCount = 6;
	let skillDamage = (450 + 5 * level) * attackCount;
	skillDamage *= 2; //Boost
	adeleCurTime += delay;
	getAdeleBuffStats();
	let skillDamageMultiplier = skillDamage / 100;
	let totalIed = adeleTotalIed * (1 - 20 / 100); //+ 20% ied from boost;
	let monsterDef = 1 - (enemyDefense / 100 * (1 - totalIed) / 100);
	let monsterResistance = 0.5 * (1 + elementalIgnore / 100);
	let damageMultiplier = (1 + adeleDmg / 100);
	let totalDmgToBosses = 1 + (adeleDmg + bossDmg) / 100;
	let damage = adeleAvgShownDamage / damageMultiplier * skillDamageMultiplier * totalDmgToBosses * monsterDef * monsterResistance * (1 + adeleFinalDamage / 100);
	damage += (damage * adeleCritMultiplier);
	adeleCurTime += delay;
	adelePlummetUnavailableUntil = adeleCurTime + cooldown;
	//Trigger: apply aetherial arms/aether forge
	let followUp = useTrigger();
	damage += followUp[0];
	let str = "\nPlummet: " + formatLargeNumber(damage) + "";
	if (followUp[0] > 0) {
		str += followUp[1];
	}
	addDamageToAdeleChart(damage, str);
}

//Additional +10 normal monster damage
document.getElementById("adeleGraveProclamation").addEventListener("click", useGraveProclamation);
function useGraveProclamation() {
	let cooldown = applyCooldownReduction(10000, true); //10 sec
	let delay = applyAttackSpeed(660); //660 in file
	let level = 20;
	let attackCount = 10;
	let skillDamage = (120 + 5 * level) * attackCount;
	skillDamage *= 2; //Boost
	adeleCurTime += delay;
	getAdeleBuffStats();
	let skillDamageMultiplier = skillDamage / 100;
	let totalIed = adeleTotalIed * (1 - 20 / 100); //+ 20% ied from boost;
	let monsterDef = 1 - (enemyDefense / 100 * (1 - totalIed) / 100);
	let monsterResistance = 0.5 * (1 + elementalIgnore / 100);
	let damageMultiplier = (1 + adeleDmg / 100);
	let totalDmgToBosses = 1 + (adeleDmg + bossDmg) / 100;
	let damage = adeleAvgShownDamage / damageMultiplier * skillDamageMultiplier * totalDmgToBosses * monsterDef * monsterResistance * (1 + adeleFinalDamage / 100);
	damage += (damage * adeleCritMultiplier);
	adeleGraveProclamationUnavailableUntil = adeleCurTime + cooldown;
	addDamageToAdeleChart(damage, "\nGrave Proclamation: " + formatLargeNumber(damage));
}


//Buff skills
document.getElementById("adeleRingOfRestraint").addEventListener("click", useAdeleRingOfRestraint);
function useAdeleRingOfRestraint() {
	switch (ozRingLv) {
			case "5"://20sec
				adeleRingOfRestraintActiveTo = adeleCurTime + 20000;
				break;
			case "4"://15sec
				adeleRingOfRestraintActiveTo = adeleCurTime + 15000;
				break;
			case "3"://13sec
				adeleRingOfRestraintActiveTo = adeleCurTime + 13000;
				break
			case "2"://11sec
				adeleRingOfRestraintActiveTo = adeleCurTime + 11000;
				break
			case "1"://9sec
				adeleRingOfRestraintActiveTo = adeleCurTime + 9000;
				break;
			default:
				adeleRingOfRestraintActiveTo = adeleCurTime + 15000;
				break;
		}
	adeleRingOfRestraintUnavailableUntil = adeleCurTime + (applyCooldownReduction(180000, false));
	getAdeleBuffStats();
	adeleNonDamagingSkillUsed = true; saveAdeleState(); //save state of non-damaging ability
}

document.getElementById("adeleWeaponJumpRing").addEventListener("click", useAdeleWeaponJumpRing);
function useAdeleWeaponJumpRing() {
	switch (ozRingLv) {
			case "5"://20sec
				adeleWeaponJumpRingActiveTo = adeleCurTime + 20000;
				break;
			case "4"://15sec
				adeleWeaponJumpRingActiveTo = adeleCurTime + 15000;
				break;
			case "3"://13sec
				adeleWeaponJumpRingActiveTo = adeleCurTime + 13000;
				break
			case "2"://11sec
				adeleWeaponJumpRingActiveTo = adeleCurTime + 11000;
				break
			case "1"://9sec
				adeleWeaponJumpRingActiveTo = adeleCurTime + 9000;
				break;
			default:
				adeleWeaponJumpRingActiveTo = adeleCurTime + 15000;
		}
	adeleWeaponJumpRingUnavailableUntil = adeleCurTime + (applyCooldownReduction(180000, false));
	getAdeleBuffStats();
	adeleNonDamagingSkillUsed = true; saveAdeleState(); //save state of non-damaging ability
}

document.getElementById("adeleTermsAndConditions").addEventListener("click", useAdeleTermsAndConditions);
function useAdeleTermsAndConditions() {
	adeleTermsAndConditionsActiveTo = adeleCurTime + (10000 * (1 + buffDuration / 100));
	adeleTermsAndConditionsUnavailableUntil = adeleCurTime + (applyCooldownReduction(90000, false));
	getAdeleBuffStats();
	adeleNonDamagingSkillUsed = true; saveAdeleState(); //save state of non-damaging ability
}

document.getElementById("adeleDivineWrath").addEventListener("click", useAdeleDivineWrath);
function useAdeleDivineWrath() {
	let cooldown = applyCooldownReduction(180000, false); //180 sec
	let delay = 720;
	let level = 30;
	let duration = 60000; //60 sec unaffected by buff duration
	adeleDivineWrathActiveTo = adeleCurTime + duration;
	adeleDivineWrathUnavailableUntil = adeleCurTime + cooldown;
	adeleCurTime += delay;
	getAdeleBuffStats();
	adeleNonDamagingSkillUsed = true; saveAdeleState(); //save state of non-damaging ability
}

document.getElementById("adeleLegacyRestoration").addEventListener("click", useAdeleLegacyRestoration);
function useAdeleLegacyRestoration() {
	let cooldown = applyCooldownReduction(180000, false); //180 sec
	let delay = 720;
	let level = 30;
	let duration = 30000; //30 sec  //unaffected by buff duration
	let attackCount = 3;
	let attackIteration = 3000;
	let skillDamage = (900 + 36 * level) * attackCount * (duration / attackIteration);
	skillDamage *= 1.6; //Boost
	adeleLegacyRestorationActiveTo = adeleCurTime + duration;
	adeleCurTime += delay;
	adeleLegacyRestorationUnavailableUntil = adeleCurTime + cooldown;
	getAdeleBuffStats();
	let skillDamageMultiplier = skillDamage / 100;
	let totalIed = adeleTotalIed;
	let monsterDef = 1 - (enemyDefense / 100 * (1 - totalIed) / 100);
	let monsterResistance = 0.5 * (1 + elementalIgnore / 100);
	let damageMultiplier = (1 + adeleDmg / 100);
	let totalDmgToBosses = 1 + (adeleDmg + bossDmg) / 100;
	let damage = adeleAvgShownDamage / damageMultiplier * skillDamageMultiplier * totalDmgToBosses * monsterDef * monsterResistance * (1 + adeleFinalDamage / 100);
	damage += (damage * adeleCritMultiplier);
	addDamageToAdeleChart(damage, "\nLegacy Restoration: " + formatLargeNumber(damage));
}

document.getElementById("adeleGrandisGoddessBlessing").addEventListener("click", useAdeleGrandisGoddessBlessing);
function useAdeleGrandisGoddessBlessing() {
	let cooldown = applyCooldownReduction(180000, false); //180 sec
	let delay = 630;
	let level = 30;
	let duration = 40000; //40 sec unaffected by buff duration
	adeleGrandisGoddessBlessingActiveTo = adeleCurTime + duration;
	adeleGrandisGoddessBlessingNextCharge = adeleCurTime + cooldown;
	adeleGrandisGoddessBlessingCharges -= 1;
	adeleCurTime += delay;
	getAdeleBuffStats();
	adeleNonDamagingSkillUsed = true; saveAdeleState(); //save state of non-damaging ability
}

document.getElementById("adeleWeaponAura").addEventListener("click", useAdeleWeaponAura);
function useAdeleWeaponAura() {
	let cooldown = applyCooldownReduction(180000, false); //180 sec
	let delay = 720;
	let level = 30;
	let duration = 130000; //130 sec unaffected by buff duration
	let attackCount = 6;
	let attackIteration = 5000;
	let skillDamage = (500 + 20 * level) * attackCount * (duration / attackIteration);
	adeleWeaponAuraActiveTo = adeleCurTime + duration;
	adeleWeaponAuraNextCharge = adeleCurTime + cooldown;
	adeleWeaponAuraCharges -= 1;
	adeleCurTime += delay;
	getAdeleBuffStats();
	let skillDamageMultiplier = skillDamage / 100;
	let totalIed = adeleTotalIed;
	let monsterDef = 1 - (enemyDefense / 100 * (1 - totalIed) / 100);
	let monsterResistance = 0.5 * (1 + elementalIgnore / 100);
	let damageMultiplier = (1 + adeleDmg / 100);
	let totalDmgToBosses = 1 + (adeleDmg + bossDmg) / 100;
	let damage = adeleAvgShownDamage / damageMultiplier * skillDamageMultiplier * totalDmgToBosses * monsterDef * monsterResistance * (1 + adeleFinalDamage / 100);
	damage += (damage * adeleCritMultiplier);
	addDamageToAdeleChart(damage, "\nWeapon Aura: " + formatLargeNumber(damage));
}

document.getElementById("adeleImpenetrableSkin").addEventListener("click", useAdeleImpenetrableSkin);
function useAdeleImpenetrableSkin() {
	let cooldown = applyCooldownReduction(120000, false); //120 sec
	let delay = 720;
	let level = 30;
	let duration = 18000; //18 sec unaffected by buff duration
	adeleImpenetrableSkinActiveTo = adeleCurTime + duration;
	adeleImpenetrableSkinUnavailableUntil = adeleCurTime + cooldown;
	adeleCurTime += delay;
	getAdeleBuffStats();
	adeleNonDamagingSkillUsed = true; saveAdeleState(); //save state of non-damaging ability
}


//Passives
function useTrigger() {
	//Magic Dispatch, +10 normal monster damage
	let cooldown = applyCooldownReduction(6000, true); //6 sec
	let damage = 0;
	let str = "";
	if ((lastMagicDispatchTrigger + cooldown < adeleCurTime || lastMagicDispatchTrigger == 0)) {
		let level = 30;
		let attackCount = 3;
		let bulletCount = 5;
		let skillDamage = (480 + 30 + 225 + 8 * level) * attackCount * bulletCount; //+30 aetherial arms, + 225 Perfection
		skillDamage *= 2; //Boost
		getAdeleBuffStats();
		let skillDamageMultiplier = skillDamage / 100;
		let totalIed = adeleTotalIed * (1 - 20 / 100); //+ 20% ied from boost;
		let monsterDef = 1 - (enemyDefense / 100 * (1 - totalIed) / 100);
		let monsterResistance = 0.5 * (1 + elementalIgnore / 100);
		let damageMultiplier = (1 + adeleDmg / 100);
		let totalDmgToBosses = 1 + (adeleDmg + bossDmg) / 100;
		damage += adeleAvgShownDamage / damageMultiplier * skillDamageMultiplier * totalDmgToBosses * monsterDef * monsterResistance * (1 + adeleFinalDamage / 100);
		damage += (damage * adeleCritMultiplier);
		lastMagicDispatchTrigger = adeleCurTime;
		magicDispatchTriggerCount++;
		str += "\nMagic Dispatch: " + formatLargeNumber(damage);
	}
	//Aether Forge
	cooldown = 1500 * (1 - (cdReductionPercent + cdSkipChance * 0.01)); //1.5 sec (9.5 - 4 - 4), sub 5 second calculation
	if ((lastAetherForgeTrigger + cooldown < adeleCurTime || lastAetherForgeTrigger == 0)) {
		let level = 30;
		let attackCount = adeleSwords;
		let bulletCount = 5;
		let skillDamage = (200 + 270 + 8 * level) * attackCount * bulletCount; //+ 270 Perfection
		skillDamage *= 2; //Boost
		getAdeleBuffStats();
		let skillDamageMultiplier = skillDamage / 100;
		let totalIed = adeleTotalIed * (1 - 20 / 100); //+ 20% ied from boost;
		let monsterDef = 1 - (enemyDefense / 100 * (1 - totalIed) / 100);
		let monsterResistance = 0.5 * (1 + elementalIgnore / 100);
		let damageMultiplier = (1 + adeleDmg / 100);
		let totalDmgToBosses = 1 + (adeleDmg + bossDmg) / 100;
		damage += af =adeleAvgShownDamage / damageMultiplier * skillDamageMultiplier * totalDmgToBosses * monsterDef * monsterResistance * (1 + adeleFinalDamage / 100);
		damage += (damage * adeleCritMultiplier);
		lastAetherForgeTrigger = adeleCurTime;
		aetherForgeTriggerCount++;
		str += "\nAether Forge: " + formatLargeNumber(af);
	}
	return [damage, str];
}

// +10 normal monster damage
function useHuntingDecree() {
	let extraActivations = 1;
	if ((adeleCurTime - (adeleCurTime % 1000)) / 1000 > huntingDecreeAttackCount) {
		extraActivations = (adeleCurTime - (adeleCurTime % 1000)) / 1000 - huntingDecreeAttackCount;
	}
	let delay = 1000; //1 second per strike
	let level = 20;
	let attackCount = 1;
	let skillDamage = (200 + 120 + 2 * level) * attackCount * adeleSwords * extraActivations; //+120 hunting decree
	skillDamage *= 2; //Boost
	getAdeleBuffStats();
	let skillDamageMultiplier = skillDamage / 100;
	let totalIed = adeleTotalIed * (1 - 20 / 100); //+ 20% ied from boost;
	let monsterDef = 1 - (enemyDefense / 100 * (1 - totalIed) / 100);
	let monsterResistance = 0.5 * (1 + elementalIgnore / 100);
	let damageMultiplier = (1 + adeleDmg / 100);
	let totalDmgToBosses = 1 + (adeleDmg + bossDmg) / 100;
	let damage = adeleAvgShownDamage / damageMultiplier * skillDamageMultiplier * totalDmgToBosses * monsterDef * monsterResistance * (1 + adeleFinalDamage / 100);
	damage += (damage * adeleCritMultiplier);
	huntingDecreeAttackCount += extraActivations;
	return damage;
}


//Functions
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
		let adeleAverageCritDmg = 35 + critDmg;
		let adeleCritRate = critRate;
		if (critRate >= 100) {
			adeleCritRate = 100;
		}
		adeleCritMultiplier = (adeleCritRate / 100) * (1 + (adeleAverageCritDmg / 100));
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
		adeleFinalDamage = finalDamage;
		adeleAvgShownDamage = adeleUpperShownDamageRange - adeleLowerShownDamageRange;
		getAdeleBuffStats();
	}
}

function getAdeleBuffStats() {
	//recalculate, apply defaults
	let adeleTotalStr = Math.floor((cStr * (1 + (percentStr + percentAllStat) / 100)) + finalStr);
	let adeleTotalDex = Math.floor((cDex * (1 + (percentDex + percentAllStat) / 100)) + finalDex);
	let adeleStatValue = adeleTotalStr * 4 + adeleTotalDex;
	let adeleTotalAttack = att * (1 + (percentAtt / 100));
	let ageleTotalMagicAttack = mAtt * (1 + (percentMagAtt / 100));
	let adeleUpperActualDamageRange = weaponMultiplier * adeleStatValue * (1 + adeleTotalAttack / 100);
	let adeleLowerActualDamageRange = adeleUpperActualDamageRange * 90 / 100; //20 base + 70 weapon mastery
	let adeleUpperShownDamageRange = Math.floor(adeleUpperActualDamageRange * (1 + dmg / 100) * (1 + finalDamage / 100));
	let adeleLowerShownDamageRange = Math.floor(1 + adeleLowerActualDamageRange * (1 + dmg / 100) * (1 + finalDamage / 100));
	let adeleIgnoreDefenseValue = 100;
		for (var source of ied) {
			adeleIgnoreDefenseValue *= (1 - source / 100);
		}
	adeleIgnoreDefenseValue = 100 - adeleIgnoreDefenseValue;
	adeleDmg = dmg;
	adeleTotalIed = adeleIgnoreDefenseValue;
	adeleAvgCritDamage = critDmg + 35;
	adeleFinalDamage = finalDamage;
	adeleAvgShownDamage = adeleUpperShownDamageRange - adeleLowerShownDamageRange;
	adeleSwords = 6;
	//retrieve constant values to apply buff stats
	let curStr = cStr;
	let curDex = cDex;
	let curPercentStr = percentStr;
	let curpercentDex = percentDex;
	let curAtt = att;
	let curPercentAtt = percentAtt;
	let curMAtt = mAtt;
	let curPercentMagAtt = percentMagAtt;
	//add buff stats
	if (adeleRingOfRestraintActiveTo > adeleCurTime) {
		switch (ozRingLv) {
			case "5"://20sec
			case "4"://15sec
				curPercentAtt += 100;
				break;
			case "3"://13sec
				curPercentAtt += 75;
				break
			case "2"://11sec
				curPercentAtt += 50;
				break
			case "1"://9sec
				curPercentAtt += 25;
				break;
			default:
				curPercentAtt += 100;
		}
	}
	if (adeleWeaponJumpRingActiveTo > adeleCurTime) {
		switch (ozRingLv) {
			case "5"://20sec
			case "4"://15sec
				curPercentStr += 400;
				break;
			case "3"://13sec
				curPercentStr += 300;
				break
			case "2"://11sec
				curPercentStr += 200;
				break
			case "1"://9sec
				curPercentStr += 100;
				break;
			default:
				curPercentStr += 400;
		}
	}
	if (adeleTermsAndConditionsActiveTo > adeleCurTime) {
		adeleDmg += 60;
	}
	if (adeleDivineWrathActiveTo > adeleCurTime) {
		adeleDmg += 10;
	}
	if (adeleLegacyRestorationActiveTo > adeleCurTime) {
		adeleDmg += 45;
		adeleFinalDamage += 10; //boost
		adeleSwords = 8;
	}
	if (adeleWeaponAuraActiveTo > adeleCurTime) {
		adeleTotalIed *= (1 - 15 / 100)
		adeleFinalDamage += 5;
	}
	if (adeleImpenetrableSkinActiveTo > adeleCurTime) {
		adeleDmg += 30;
	}	
	if (adeleGrandisGoddessBlessingActiveTo > adeleCurTime) {
		curAtt += (weaponAtt * 1.5) + 85;
	}
	//calculate, assign new stats with buffs
	adeleTotalStr = Math.floor((curStr * (1 + (curPercentStr + percentAllStat) / 100)) + finalStr);
	adeleTotalDex = Math.floor((curDex * (1 + (curpercentDex + percentAllStat) / 100)) + finalDex);
	adeleStatValue = adeleTotalStr * 4 + adeleTotalDex;
	adeleTotalAttack = curAtt * (1 + (curPercentAtt / 100));
	ageleTotalMagicAttack = curMAtt * (1 + (curPercentMagAtt / 100));
	adeleUpperActualDamageRange = weaponMultiplier * adeleStatValue * (1 + adeleTotalAttack / 100);
	adeleLowerActualDamageRange = adeleUpperActualDamageRange * 90 / 100; //20 base + 70 weapon mastery
	adeleUpperShownDamageRange = Math.floor(adeleUpperActualDamageRange * (1 + adeleDmg / 100) * (1 + adeleFinalDamage / 100));
	adeleLowerShownDamageRange = Math.floor(1 + adeleLowerActualDamageRange * (1 + adeleDmg / 100) * (1 + adeleFinalDamage / 100));
	adeleAvgShownDamage = adeleUpperShownDamageRange - adeleLowerShownDamageRange;
	updateAdeleButtonOptions();
}

function addDamageToAdeleChart(skillDamage, str) {
	let additionalDamage = 0;
	if ((adeleCurTime - (adeleCurTime % 1000)) / 1000 > huntingDecreeAttackCount) {
		additionalDamage += useHuntingDecree();
		str += "\nHunting Decree: " + formatLargeNumber(additionalDamage) + "";
	}
	let thisActionDamage = (skillDamage + additionalDamage);
	adeleChartTotalDamage += thisActionDamage;
	lineChart.data.labels.push(adeleCurTime + " ms");
	lineChart.data.datasets[0].data.push(Math.floor(adeleChartTotalDamage));
	lineChart.data.datasets[1].data.push(Math.floor(thisActionDamage));
	addTooltipCustomization(0, adeleChartStep, "Total Damage: " + formatLargeNumber(adeleChartTotalDamage));
	addTooltipCustomization(1, adeleChartStep, str);
	lineChart.update();
	adeleChartStep++;
	getAdeleBuffStats();
	adeleNonDamagingSkillUsed = false; saveAdeleState();
}

function updateAdeleButtonOptions() {
	//Buffs
	if (adeleRingOfRestraintUnavailableUntil >= adeleCurTime) { //ROR unavailable
		document.getElementById("adeleRingOfRestraint").disabled = true;
		if (adeleRingOfRestraintActiveTo >= adeleCurTime) { //if active, show duration
			document.getElementById("adeleRingOfRestraint").innerHTML = "Active";
			document.getElementById("adeleRingOfRestraintInfo").placeholder = -Math.floor((adeleCurTime - adeleRingOfRestraintActiveTo)/1000) + " sec";
		} else { //if inactive, show cooldown
			document.getElementById("adeleRingOfRestraint").innerHTML = "Cooldown";
			document.getElementById("adeleRingOfRestraintInfo").placeholder = Math.floor((adeleRingOfRestraintUnavailableUntil - adeleCurTime)/1000) + " sec";
		}
	} else { //ROR available
		document.getElementById("adeleRingOfRestraint").disabled = false;
		document.getElementById("adeleRingOfRestraint").innerHTML = "Activate";
		document.getElementById("adeleRingOfRestraintInfo").placeholder = "Available";
	}
	
	if (adeleWeaponJumpRingUnavailableUntil >= adeleCurTime) { //WJR unavailable
		document.getElementById("adeleWeaponJumpRing").disabled = true;
		if (adeleWeaponJumpRingActiveTo >= adeleCurTime) { //if active, show duration
			document.getElementById("adeleWeaponJumpRing").innerHTML = "Active";
			document.getElementById("adeleWeaponJumpRingInfo").placeholder = -Math.floor((adeleCurTime - adeleWeaponJumpRingActiveTo)/1000) + " sec";
		} else { //if inactive, show cooldown
			document.getElementById("adeleWeaponJumpRing").innerHTML = "Cooldown";
			document.getElementById("adeleWeaponJumpRingInfo").placeholder = Math.floor((adeleWeaponJumpRingUnavailableUntil - adeleCurTime)/1000) + " sec";
		}
	} else { //WJR available
		document.getElementById("adeleWeaponJumpRing").disabled = false;
		document.getElementById("adeleWeaponJumpRing").innerHTML = "Activate";
		document.getElementById("adeleWeaponJumpRingInfo").placeholder = "Available";
	}
	
	if (adeleTermsAndConditionsUnavailableUntil >= adeleCurTime) { //TaC unavailable
		document.getElementById("adeleTermsAndConditions").disabled = true;
		if (adeleTermsAndConditionsActiveTo >= adeleCurTime) { //if active, show duration
			document.getElementById("adeleTermsAndConditions").innerHTML = "Active";
			document.getElementById("adeleTermsAndConditionsInfo").placeholder = -Math.floor((adeleCurTime - adeleTermsAndConditionsActiveTo)/1000) + " sec";
		} else { //if inactive, show cooldown
			document.getElementById("adeleTermsAndConditions").innerHTML = "Cooldown";
			document.getElementById("adeleTermsAndConditionsInfo").placeholder = Math.floor((adeleTermsAndConditionsUnavailableUntil - adeleCurTime)/1000) + " sec";
		}
	} else { //TaC available
		document.getElementById("adeleTermsAndConditions").disabled = false;
		document.getElementById("adeleTermsAndConditions").innerHTML = "Activate";
		document.getElementById("adeleTermsAndConditionsInfo").placeholder = "Available";
	}
	
	//disable options if ring/link is removed
	let selectedRing1 = document.getElementById("selectRing1").value;
	let selectedRing2 = document.getElementById("selectRing2").value;
	let selectedRing3 = document.getElementById("selectRing3").value;
	let selectedRing4 = document.getElementById("selectRing4").value;
	if (selectedRing1 != "ringOfRestraint" && selectedRing2 != "ringOfRestraint"
		&& selectedRing3 != "ringOfRestraint" && selectedRing4 != "ringOfRestraint") {
		document.getElementById("adeleRingOfRestraint").disabled = true;
	}
	if (selectedRing1 != "weaponJumpRing" && selectedRing2 != "weaponJumpRing"
		&& selectedRing3 != "weaponJumpRing" && selectedRing4 != "weaponJumpRing") {
		document.getElementById("adeleWeaponJumpRing").disabled = true;
	}
	var checkTermsAndConditions = document.getElementById("linkTermsAndConditions");
	if (!checkTermsAndConditions.classList.contains('active')) {
		document.getElementById("adeleTermsAndConditions").disabled = true;
	}
	
	if (adeleDivineWrathUnavailableUntil >= adeleCurTime) { //divine wrath unavailable
		document.getElementById("adeleDivineWrath").disabled = true;
		if (adeleDivineWrathActiveTo >= adeleCurTime) { //if active, show duration
			document.getElementById("adeleDivineWrath").innerHTML = "Active";
			document.getElementById("adeleDivineWrathInfo").placeholder = -Math.floor((adeleCurTime - adeleDivineWrathActiveTo)/1000) + " sec";
		} else { //if inactive, show cooldown
			document.getElementById("adeleDivineWrath").innerHTML = "Cooldown";
			document.getElementById("adeleDivineWrathInfo").placeholder = Math.floor((adeleDivineWrathUnavailableUntil - adeleCurTime)/1000) + " sec";
		}
	} else { //divine wrath available
		document.getElementById("adeleDivineWrath").disabled = false;
		document.getElementById("adeleDivineWrath").innerHTML = "Activate";
		document.getElementById("adeleDivineWrathInfo").placeholder = "Available";
	}
	
	if (adeleLegacyRestorationUnavailableUntil >= adeleCurTime) { //legacy restoration unavailable
		document.getElementById("adeleLegacyRestoration").disabled = true;
		if (adeleLegacyRestorationActiveTo >= adeleCurTime) { //if active, show duration
			document.getElementById("adeleLegacyRestoration").innerHTML = "Active";
			document.getElementById("adeleLegacyRestorationInfo").placeholder = -Math.floor((adeleCurTime - adeleLegacyRestorationActiveTo)/1000) + " sec";
		} else { //if inactive, show cooldown
			document.getElementById("adeleLegacyRestoration").innerHTML = "Cooldown";
			document.getElementById("adeleLegacyRestorationInfo").placeholder = Math.floor((adeleLegacyRestorationUnavailableUntil - adeleCurTime)/1000) + " sec";
		}
	} else { //legacy restoration available
		document.getElementById("adeleLegacyRestoration").disabled = false;
		document.getElementById("adeleLegacyRestoration").innerHTML = "Activate";
		document.getElementById("adeleLegacyRestorationInfo").placeholder = "Available";
	}
	
	if (adeleWeaponAuraCharges == 0) { //weapon aura unavailable
		document.getElementById("adeleWeaponAura").disabled = true;
		document.getElementById("adeleWeaponAura").innerHTML = "Cooldown";
		document.getElementById("adeleWeaponAuraInfo").placeholder = Math.floor((adeleWeaponAuraNextCharge - adeleCurTime)/1000) + " sec";
	} else { //at least one is available
		document.getElementById("adeleWeaponAura").disabled = false;
		document.getElementById("adeleWeaponAura").innerHTML = "Activate";
		document.getElementById("adeleWeaponAuraInfo").placeholder = "Available";
	}
	if (adeleWeaponAuraActiveTo >= adeleCurTime) { //weapon aura active
		document.getElementById("adeleWeaponAura").innerHTML = "Active";
		document.getElementById("adeleWeaponAuraInfo").placeholder = -Math.floor((adeleCurTime - adeleWeaponAuraActiveTo)/1000) + " sec";
	}
	if (adeleWeaponAuraNextCharge <= adeleCurTime) { //add charge if due
		adeleWeaponAuraCharges += 1;
		if (adeleWeaponAuraCharges > 2) {
			adeleWeaponAuraCharges = 2;
		}
		if (adeleWeaponAuraCharges == 1) { //if only one charge, queue next
			adeleWeaponAuraNextCharge = adeleCurTime + 180000;
		}
	}
	
	if (adeleGrandisGoddessBlessingCharges == 0) {
		document.getElementById("adeleGrandisGoddessBlessing").disabled = true;
		document.getElementById("adeleGrandisGoddessBlessing").innerHTML = "Cooldown";
		document.getElementById("adeleGrandisGoddessBlessingInfo").placeholder = Math.floor((adeleGrandisGoddessBlessingNextCharge - adeleCurTime)/1000) + " sec";
	} else { //at least one is available
		document.getElementById("adeleGrandisGoddessBlessing").disabled = false;
		document.getElementById("adeleGrandisGoddessBlessing").innerHTML = "Activate";
		document.getElementById("adeleGrandisGoddessBlessingInfo").placeholder = "Available";
	}
	if (adeleGrandisGoddessBlessingActiveTo >= adeleCurTime) { //weapon aura active
		document.getElementById("adeleGrandisGoddessBlessing").innerHTML = "Active";
		document.getElementById("adeleGrandisGoddessBlessingInfo").placeholder = -Math.floor((adeleCurTime - adeleGrandisGoddessBlessingActiveTo)/1000) + " sec";
	}
	if (adeleGrandisGoddessBlessingNextCharge <= adeleCurTime) { //add charge if due
		adeleGrandisGoddessBlessingCharges += 1;
		if (adeleGrandisGoddessBlessingCharges > 2) {
			adeleGrandisGoddessBlessingCharges = 2;
		}
		if (adeleGrandisGoddessBlessingCharges == 1) { //if only one charge, queue next
			adeleGrandisGoddessBlessingNextCharge = adeleCurTime + 180000;
		}
	}
	
	if (adeleImpenetrableSkinUnavailableUntil >= adeleCurTime) { //impenetrable skin unavailable
		document.getElementById("adeleImpenetrableSkin").disabled = true;
		if (adeleLegacyRestorationActiveTo >= adeleCurTime) { //if active, show duration
			document.getElementById("adeleImpenetrableSkin").innerHTML = "Active";
			document.getElementById("adeleImpenetrableSkinInfo").placeholder = -Math.floor((adeleCurTime - adeleImpenetrableSkinActiveTo)/1000) + " sec";
		} else { //if inactive, show cooldown
			document.getElementById("adeleImpenetrableSkin").innerHTML = "Cooldown";
			document.getElementById("adeleImpenetrableSkinInfo").placeholder = Math.floor((adeleImpenetrableSkinUnavailableUntil - adeleCurTime)/1000) + " sec";
		}
	} else { //impenetrable skin available
		document.getElementById("adeleImpenetrableSkin").disabled = false;
		document.getElementById("adeleImpenetrableSkin").innerHTML = "Activate";
		document.getElementById("adeleImpenetrableSkinInfo").placeholder = "Available";
	}
	
	//Skills
	if (adeleMaestroUnavailableUntil >= adeleCurTime) {
		document.getElementById("adeleMaestro").disabled = true;
		document.getElementById("adeleMaestro").innerHTML = "Cooldown";
		document.getElementById("adeleMaestroInfo").placeholder = Math.floor((adeleMaestroUnavailableUntil - adeleCurTime)/1000) + " sec";
	} else {
		document.getElementById("adeleMaestro").disabled = false;
		document.getElementById("adeleMaestro").innerHTML = "Activate";
		document.getElementById("adeleMaestroInfo").placeholder = "Available";
	}
	
	if (adeleRuinUnavailableUntil >= adeleCurTime) {
		document.getElementById("adeleRuin").disabled = true;
		document.getElementById("adeleRuin").innerHTML = "Cooldown";
		document.getElementById("adeleRuinInfo").placeholder = Math.floor((adeleRuinUnavailableUntil - adeleCurTime)/1000) + " sec";
	} else {
		document.getElementById("adeleRuin").disabled = false;
		document.getElementById("adeleRuin").innerHTML = "Activate";
		document.getElementById("adeleRuinInfo").placeholder = "Available";
	}
	
	if (adeleInfinityBladeUnavailableUntil >= adeleCurTime) {
		document.getElementById("adeleInfinityBlade").disabled = true;
		document.getElementById("adeleInfinityBlade").innerHTML = "Cooldown";
		document.getElementById("adeleInfinityBladeInfo").placeholder = Math.floor((adeleInfinityBladeUnavailableUntil - adeleCurTime)/1000) + " sec";
	} else {
		document.getElementById("adeleInfinityBlade").disabled = false;
		document.getElementById("adeleInfinityBlade").innerHTML = "Activate";
		document.getElementById("adeleInfinityBladeInfo").placeholder = "Available";
	}
	
	if (adeleStormUnavailableUntil >= adeleCurTime) {
		document.getElementById("adeleStorm").disabled = true;
		document.getElementById("adeleStorm").innerHTML = "Cooldown";
		document.getElementById("adeleStormInfo").placeholder = Math.floor((adeleStormUnavailableUntil - adeleCurTime)/1000) + " sec";
	} else {
		document.getElementById("adeleStorm").disabled = false;
		document.getElementById("adeleStorm").innerHTML = "Activate";
		document.getElementById("adeleStormInfo").placeholder = "Available";
	}
	
	if (adeleAetherBloomUnavailableUntil >= adeleCurTime) {
		document.getElementById("adeleAetherBloom").disabled = true;
		document.getElementById("adeleAetherBloom").innerHTML = "Cooldown";
		document.getElementById("adeleAetherBloomInfo").placeholder = Math.floor((adeleAetherBloomUnavailableUntil - adeleCurTime)/1000) + " sec";
	} else {
		document.getElementById("adeleAetherBloom").disabled = false;
		document.getElementById("adeleAetherBloom").innerHTML = "Activate";
		document.getElementById("adeleAetherBloomInfo").placeholder = "Available";
	}
	
	if (adeleGraveProclamationUnavailableUntil >= adeleCurTime) {
		document.getElementById("adeleGraveProclamation").disabled = true;
		document.getElementById("adeleGraveProclamation").innerHTML = "Cooldown";
		document.getElementById("adeleGraveProclamationInfo").placeholder = Math.floor((adeleGraveProclamationUnavailableUntil - adeleCurTime)/1000) + " sec";
	} else {
		document.getElementById("adeleGraveProclamation").disabled = false;
		document.getElementById("adeleGraveProclamation").innerHTML = "Activate";
		document.getElementById("adeleGraveProclamationInfo").placeholder = "Available";
	}
	
	if (adelePlummetUnavailableUntil >= adeleCurTime) {
		document.getElementById("adelePlummet").disabled = true;
		document.getElementById("adelePlummet").innerHTML = "Cooldown";
		document.getElementById("adelePlummetInfo").placeholder = Math.floor((adelePlummetUnavailableUntil - adeleCurTime)/1000) + " sec";
	} else {
		document.getElementById("adelePlummet").disabled = false;
		document.getElementById("adelePlummet").innerHTML = "Activate";
		document.getElementById("adelePlummetInfo").placeholder = "Available";
	}
	
	if (adeleNobleSummonsUnavailableUntil >= adeleCurTime) {
		document.getElementById("adeleNobleSummons").disabled = true;
		document.getElementById("adeleNobleSummons").innerHTML = "Cooldown";
		document.getElementById("adeleNobleSummonsInfo").placeholder = Math.floor((adeleNobleSummonsUnavailableUntil - adeleCurTime)/1000) + " sec";
	} else {
		document.getElementById("adeleNobleSummons").disabled = false;
		document.getElementById("adeleNobleSummons").innerHTML = "Activate";
		document.getElementById("adeleNobleSummonsInfo").placeholder = "Available";
	}
	
	if (adeleReignOfDestructionUnavailableUntil >= adeleCurTime) {
		document.getElementById("adeleReignOfDestruction").disabled = true;
		document.getElementById("adeleReignOfDestruction").innerHTML = "Cooldown";
		document.getElementById("adeleReignOfDestructionInfo").placeholder = Math.floor((adeleReignOfDestructionUnavailableUntil - adeleCurTime)/1000) + " sec";
	} else {
		document.getElementById("adeleReignOfDestruction").disabled = false;
		document.getElementById("adeleReignOfDestruction").innerHTML = "Activate";
		document.getElementById("adeleReignOfDestructionInfo").placeholder = "Available";
	}
	
	if (adeleMagicDispatchUnavailableUntil >= adeleCurTime) {
		document.getElementById("adeleHexaMagicDispatch").disabled = true;
		document.getElementById("adeleHexaMagicDispatch").innerHTML = "Cooldown";
		document.getElementById("adeleHexaMagicDispatchInfo").placeholder = Math.floor((adeleMagicDispatchUnavailableUntil - adeleCurTime)/1000) + " sec";
	} else {
		document.getElementById("adeleHexaMagicDispatch").disabled = false;
		document.getElementById("adeleHexaMagicDispatch").innerHTML = "Activate";
		document.getElementById("adeleHexaMagicDispatchInfo").placeholder = "Available";
	}
	
	if (adeleShardbreakerUnavailableUntil >= adeleCurTime) {
		document.getElementById("adeleShardbreaker").disabled = true;
		document.getElementById("adeleShardbreaker").innerHTML = "Cooldown";
		document.getElementById("adeleShardbreakerInfo").placeholder = Math.floor((adeleShardbreakerUnavailableUntil - adeleCurTime)/1000) + " sec";
	} else {
		document.getElementById("adeleShardbreaker").disabled = false;
		document.getElementById("adeleShardbreaker").innerHTML = "Activate";
		document.getElementById("adeleShardbreakerInfo").placeholder = "Available";
	}
}

function formatLargeNumber(value) {
    if (value >= 1e15) return (value / 1e15).toFixed(2) + 'Q'; // quadrillion
    if (value >= 1e12) return (value / 1e12).toFixed(2) + 'T'; // trillion
    if (value >= 1e9) return (value / 1e9).toFixed(2) + 'B'; // billion
    if (value >= 1e6) return (value / 1e6).toFixed(2) + 'M'; // million
    if (value >= 1e3) return (value / 1e3).toFixed(2) + 'k'; // thousand
    return value.toString(); // others
}

function saveAdeleState(){
	index++;
	let curData = [];
	curData[0] = index;
	curData[1] = adeleDmg;
	curData[2] = adeleTotalIed;
	curData[3] = adeleAvgCritDamage;
	curData[4] = adeleFinalDamage;
	curData[5] = adeleAvgShownDamage;
	curData[6] = adeleCritMultiplier;
	curData[7] = enemyDefense;
	curData[8] = enemyLevel;
	curData[9] = adeleCurTime;
	curData[10] = lastAetherForgeTrigger;
	curData[11] = aetherForgeTriggerCount;
	curData[12] = lastMagicDispatchTrigger;
	curData[13] = magicDispatchTriggerCount;
	curData[14] = adeleSwords;
	curData[15] = huntingDecreeAttackCount;
	curData[16] = adeleChartStep;
	curData[17] = adeleChartTotalDamage;
	curData[18] = adeleRingOfRestraintActiveTo;
	curData[19] = adeleWeaponJumpRingActiveTo;
	curData[20] = adeleTermsAndConditionsActiveTo;
	curData[21] = adeleDivineWrathActiveTo;
	curData[22] = adeleLegacyRestorationActiveTo;
	curData[23] = adeleWeaponAuraActiveTo;
	curData[24] = adeleGrandisGoddessBlessingActiveTo;
	curData[25] = adeleImpenetrableSkinActiveTo;
	curData[26] = adeleRingOfRestraintUnavailableUntil;
	curData[27] = adeleWeaponJumpRingUnavailableUntil;
	curData[28] = adeleTermsAndConditionsUnavailableUntil;
	curData[29] = adeleDivineWrathUnavailableUntil;
	curData[30] = adeleLegacyRestorationUnavailableUntil;
	curData[31] = adeleWeaponAuraNextCharge;
	curData[32] = adeleWeaponAuraCharges;
	curData[33] = adeleGrandisGoddessBlessingNextCharge;
	curData[34] = adeleGrandisGoddessBlessingCharges;
	curData[35] = adeleImpenetrableSkinUnavailableUntil;
	curData[36] = adeleMaestroUnavailableUntil;
	curData[37] = adeleRuinUnavailableUntil;
	curData[38] = adeleInfinityBladeUnavailableUntil;
	curData[39] = adeleStormUnavailableUntil;
	curData[40] = adeleAetherBloomUnavailableUntil;
	curData[41] = adeleGraveProclamationUnavailableUntil;
	curData[42] = adelePlummetUnavailableUntil;
	curData[43] = adeleNobleSummonsUnavailableUntil;
	curData[44] = adeleReignOfDestructionUnavailableUntil;
	curData[45] = adeleMagicDispatchUnavailableUntil;
	curData[46] = adeleShardbreakerUnavailableUntil;
	curData[47] = adeleEnhancedCleaveLastUsed;
	curData[48] = dataLine;
	curData[49] = adeleNonDamagingSkillUsed;
	adeleSaveState[index] = curData;
	if (index <= 0) {
		document.getElementById("adeleUndo").disabled = true;
	} else {
		document.getElementById("adeleUndo").disabled = false;
	}
}

document.getElementById("adeleUndo").addEventListener("click", useAdeleUndo);
function useAdeleUndo() {
	let current = adeleSaveState[index];
	 //only remove data point if last action adds a point
	adeleNonDamagingSkillUsed = current[49];
	if (!adeleNonDamagingSkillUsed) {
		lineChart.data.labels.pop();
		lineChart.data.datasets[0].data.pop();
		lineChart.data.datasets[1].data.pop();
		lineChart.update();
	}
	index--;
	let curData = adeleSaveState[index];
	index = curData[0];
	adeleDmg = curData[1];
	adeleTotalIed = curData[2];
	adeleAvgCritDamage= curData[3];
	adeleFinalDamage= curData[4];
	adeleAvgShownDamage = curData[5];
	adeleCritMultiplier = curData[6];
	enemyDefense = curData[7];
	enemyLevel = curData[8];
	adeleCurTime = curData[9];
	lastAetherForgeTrigger = curData[10];
	aetherForgeTriggerCount = curData[11];
	lastMagicDispatchTrigger = curData[12];
	magicDispatchTriggerCount = curData[13];
	adeleSwords = curData[14];
	huntingDecreeAttackCount = curData[15];
	adeleChartStep = curData[16];
	adeleChartTotalDamage = curData[17];
	adeleRingOfRestraintActiveTo = curData[18];
	adeleWeaponJumpRingActiveTo = curData[19];
	adeleTermsAndConditionsActiveTo = curData[20];
	adeleDivineWrathActiveTo = curData[21];
	adeleLegacyRestorationActiveTo = curData[22];
	adeleWeaponAuraActiveTo = curData[23];
	adeleGrandisGoddessBlessingActiveTo = curData[24];
	adeleImpenetrableSkinActiveTo = curData[25];
	adeleRingOfRestraintUnavailableUntil = curData[26];
	adeleWeaponJumpRingUnavailableUntil = curData[27];
	adeleTermsAndConditionsUnavailableUntil = curData[28];
	adeleDivineWrathUnavailableUntil = curData[29];
	adeleLegacyRestorationUnavailableUntil = curData[30];
	adeleWeaponAuraNextCharge = curData[31];
	adeleWeaponAuraCharges = curData[32];
	adeleGrandisGoddessBlessingNextCharge = curData[33];
	adeleGrandisGoddessBlessingCharges = curData[34];
	adeleImpenetrableSkinUnavailableUntil = curData[35];
	adeleMaestroUnavailableUntil = curData[36];
	adeleRuinUnavailableUntil = curData[37];
	adeleInfinityBladeUnavailableUntil = curData[38];
	adeleStormUnavailableUntil = curData[39];
	adeleAetherBloomUnavailableUntil = curData[40];
	adeleGraveProclamationUnavailableUntil = curData[41];
	adelePlummetUnavailableUntil = curData[42];
	adeleNobleSummonsUnavailableUntil = curData[43];
	adeleReignOfDestructionUnavailableUntil = curData[44];
	adeleMagicDispatchUnavailableUntil = curData[45];
	adeleShardbreakerUnavailableUntil = curData[46];
	adeleEnhancedCleaveLastUsed = curData[47];
	dataLine = curData[48];
	if (index <= 0) {
		document.getElementById("adeleUndo").disabled = true;
	} else {
		document.getElementById("adeleUndo").disabled = false;
	}
	updateAdeleButtonOptions();
}


//Chart support functions
const tooltipConfig = { //custom & default format
    0: {  //Dataset index 0
        0: () => "Total Damage: 0",
        default: (value) => "Total Damage: " + value
    },
    1: {  //Dataset index 1
		0: () => "Skill Damage: 0",
        default: (value) => "Skill Damage: " + value
    }
};

function addTooltipCustomization(datasetIndex, dataIndex, tooltipText) { //set custom tooltip (data line index, data point index, text)
//ADDS CUSTOM TOOLTIP AT DATASETNUM, DATAINDEX
//USE EX: addTooltipCustomization(0, 2, "Special Tooltip");
	//ensure tooltipConfig object for the dataset index exists
    if (!tooltipConfig[datasetIndex]) {
        tooltipConfig[datasetIndex] = {};
    }
    //set the custom tooltip function for the specified data index
    tooltipConfig[datasetIndex][dataIndex] = () => tooltipText;
}


//Unused, experimental chart functions
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

function shiftTooltipConfig(datasetIndex, insertAtIndex) {
//SHIFTS ALL HIGHER INDEX TOOLTIPS +1 WHEN INSERTING NEW EVENT AT CERTAIN INDEX
//USE EX: shiftTooltipConfig(0, 3);, CALL BEFORE INSERTING DATA, THIS IS DATASET 0, FROM INDEX 3
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

function modifyChartData(datasetIndex, index, newValue) {
    //modify the data at the specified index
    lineChart.data.datasets[datasetIndex].data[index] = newValue;
    //update chart
    lineChart.update();
}

