/* base stats */
var charLevel; var charClass; var classType; var primaryStat; var cStr; var cDex; var cInt; var cLuk; var att; var mAtt; var hp; var mp; var arcaneForce; var sacredForce;
var finalStr; var finalDex; var finalInt; var finalLuk; var finalHp;
/* multipliers */
var percentStr = []; var percentDex = []; var percentInt = []; var percentLuk = []; var percentAllStat = []; var percentHp = []; var percentMp = [];
var critRate = []; var critDmg = []; var bossDmg = []; var dmg = []; var monsterDmg = []; var ied = []; var abnormalStatusDmg = [];
var percentAtt = []; var percentMagAtt = [];
/* special stats */
var attSpeedBonus = []; var cdSkipChance = []; var cdSkipSec = []; var cdReduction = []; var incPassive = []; var buffDuration = []; var elementalIgnore = [];
var weaponAttackSpeed; /* use old cal  avg(6), slow(8) */ var weaponMultiplier; var lapisMultiplier = 1.49; var lapisSpd = 8; var lazuliMultiplier = 1.34; var lazuliSpd = 6;
/* trackers */
var hasTermsAndConditions = false;
var genesisWeapon = 0; var rootAbyssSet = 0; var absolabSet = 0; var arcaneSet = 0; var eternalSet = 0;

aggregate();

var test = document.getElementById("selectRing4");
test.addEventListener("change", aggregate);

const selectElements = document.querySelectorAll('.form-select');
const inputElements = document.querySelectorAll('.form-control');
const buttonElements = document.querySelectorAll('.linkbtn');
selectElements.forEach(element => {
    element.addEventListener('change', aggregate);
});
inputElements.forEach(element => {
    element.addEventListener('change', aggregate);
});
buttonElements.forEach(element => {
    element.addEventListener('change', aggregate);
});

function aggregate() {
	clearValues();
	getSpecification();
	getAttributeAllocation();
	getInnerAbilitySelections();
	getTraitsBonuses();
	getHyperStatAllocation();
	getLinkSkillSelections();
	getFamiliarPotentialSelections();
	getFamiliarBadgeSelections();
	getLegionBoardSelections();
	getLegionMemberSelections();
	getEquipmentSelections();
	fillEquipmentStatsTable();
}

function clearValues() {
	/* base stats */
	charLevel = 0; charClass = "none"; classType = "none"; primaryStat = "none";
	cStr = 0; cDex = 0; cInt = 0; cLuk = 0; att = 0; mAtt = 0; hp = 0; mp = 0; arcaneForce = 0; sacredForce = 0;
	finalStr  = 0; finalDex = 0; finalInt = 0; finalLuk = 0; finalHp = 0;
	/* multipliers */
	percentStr = []; percentDex = []; percentInt = []; percentLuk = []; percentAllStat = []; percentHp = []; percentMp = [];
	critRate = []; critDmg = []; bossDmg = []; dmg = []; monsterDmg = []; ied = []; abnormalStatusDmg = [];
	percentAtt = []; percentMagAtt = [];
	/* special stats */
	attSpeedBonus = []; cdSkipChance = []; cdSkipSec = []; cdReduction = []; incPassive = []; buffDuration = []; elementalIgnore = [];
	weaponAttackSpeed = 0; weaponMultiplier = 0; lapisMultiplier = 1.49; lapisSpd = 8; lazuliMultiplier = 1.34; lazuliSpd = 6;
	/* trackers */
	hasTermsAndConditions = false;
	genesisWeapon = 0; rootAbyssSet = 0; absolabSet = 0; arcaneSet = 0; eternalSet = 0;
}

function getSpecification() {
	/* get class name, selected level */
	charClass = document.getElementById("selectClass").value;
	charLevel = parseInt(document.getElementById("level").value);
	designatePrimaryStat(charClass);
}

function designatePrimaryStat(selection) {
	switch (selection) {
		case "adele": /* str/dex */
		case "aran": /* str/dex */
		case "ark": /* str/dex */
		case "blaster": /* str/dex */
		case "buccaneer": /* str/dex */
		case "cannoneer": /* str/dex */
		case "darkKnight": /* str/dex */
		case "dawnWarrior": /* str/dex */
		case "demonSlayer": /* str/dex */
		case "hayato": /* str/dex */
		case "hero": /* str/dex */
		case "kaiser": /* str/dex */
		case "mihile": /* str/dex */
		case "paladin": /* str/dex */
		case "shade": /* str/dex */
		case "thunderBreaker": /* str/dex */
		case "zero": /* str/dex */
			primaryStat = "str";
			break;
		case "angelicBuster": /* dex/str */
		case "bowmaster": /* dex/str */
		case "corsair": /* dex/str */
		case "kain": /* dex/str */
		case "marksman": /* dex/str */
		case "mechanic": /* dex/str */
		case "mercedes": /* dex/str */
		case "pathfinder": /* dex/str */
		case "wildHunter": /* dex/str */
		case "windArcher": /* dex/str */
			primaryStat = "dex";
			break;
		case "archMageIceLightning": /* int/luk */
		case "archMageFirePoison": /* int/luk */
		case "battleMage": /* int/luk */
		case "beastTamer": /* int/luk */
		case "bishop": /* int/luk */
		case "blazeWizard": /* int/luk */
		case "evan": /* int/luk */
		case "illium": /* int/luk */
		case "kanna": /* int/luk */
		case "kinesis": /* int/luk */
		case "lara": /* int/luk */
		case "luminous": /* int/luk */
			primaryStat = "int";
			break;
		/* Double stat scaling */
		case "hoyoung": /* luk/dex */
		case "khali": /* luk/dex */
		case "nightLord": /* luk/dex */
		case "nightWalker": /* luk/dex */
		case "phantom": /* luk/dex */	
		/* Triple stat scaling */
		case "cadena": /* luk/dex/str */
		case "dualBlade": /* luk/dex/str */
		case "shadower": /* luk/dex/str */
			primaryStat = "luk";
			break;
		/* Special case: hp scaling, uses warrior equip with str mainstat */
		case "demonAvenger": /* HP/str */
			primaryStat = "str";
			break;
		/* Special case: Triple primary scaling, luk mainstat assume thief equipment */	
		case "xenon": /* Luk/Str/Dex */
			primaryStat = "luk";
			break;
		case "unselected":
			primaryStat = "str";
			break;
		default:
			primaryStat = "str";
			break;
	}
}

function getAttributeAllocation() {
	/* get allocated attribute points */
	cStr = parseInt(document.getElementById("strAP").value) + 4;
	cDex = parseInt(document.getElementById("dexAP").value) + 4;
	cInt = parseInt(document.getElementById("intAP").value) + 4;
	cLuk = parseInt(document.getElementById("lukAP").value) + 4;
	hp = parseInt(document.getElementById("hpAP").value);
	mp = parseInt(document.getElementById("mpAP").value);
}

function getInnerAbilitySelections() {
	/* get inner ability selections */
	var inner1 = document.getElementById("selectinnerAbility1").value;
	var inner2 = document.getElementById("selectinnerAbility2").value;
	var inner3 = document.getElementById("selectinnerAbility3").value;
	switch (inner1) {
		case "attSpeed":
			attSpeedBonus.push(1);
			break;
		case "wepAtt":
			att += 30;
			break;
		case "magAtt":
			mAtt += 30;
			break;
		case "crit":
			critRate.push(30);
			break;
		case "hp":
			percentHp.push(20);
			break;
		case "boss":
			bossDmg.push(20);
			break;
		case "norm":
			monsterDmg.push(10);
			break;
		case "abn":
			abnormalStatusDmg.push(10);
			break;
		case "cdSkip":
			cdSkipChance.push(20);
			break;
		case "passive+1":
			incPassive.push(1);
			break;
		case "buff":
			buffDuration.push(50);
			break;
		default:
			/* skip drop rate, meso increase */
			break;
	}
	switch (inner2) {
		case "wepAtt":
			att += 21;
			break;
		case "magAtt":
			mAtt += 21;
			break;
		case "crit":
			critRate.push(20);
			break;
		case "hp":
			percentHp.push(10);
			break;
		case "boss":
			bossDmg.push(10);
			break;
		case "norm":
			monsterDmg.push(8);
			break;
		case "abn":
			abnormalStatusDmg.push(8);
			break;
		case "cdSkip":
			cdSkipChance.push(8);
			break;
		case "buff":
			buffDuration.push(38);
			break;
		default:
			/* skip drop rate, meso increase */
			break;
	}
	switch (inner3) {
		case "wepAtt":
			att += 21;
			break;
		case "magAtt":
			mAtt += 21;
			break;
		case "crit":
			critRate.push(20);
			break;
		case "hp":
			percentHp.push(10);
			break;
		case "boss":
			bossDmg.push(10);
			break;
		case "norm":
			monsterDmg.push(8);
			break;
		case "abn":
			abnormalStatusDmg.push(8);
			break;
		case "cdSkip":
			cdSkipChance.push(8);
			break;
		case "buff":
			buffDuration.push(38);
			break;
		default:
			/* skip drop rate, meso increase */
			break;
	}
}

function getTraitsBonuses() {
	/* traits bonuses */
	var empathyLv = parseInt(document.getElementById("empathy").value);
	empathyLv = Math.floor(empathyLv / 10);
	buffDuration.push(empathyLv);
	mp += ((empathyLv * 2) * 100);
	var ambitionLv = parseInt(document.getElementById("ambition").value);
	ambitionLv = Math.floor(ambitionLv / 5);
	ied.push(ambitionLv * .5);
	var insightLv = parseInt(document.getElementById("insight").value);
	insightLv = Math.floor(insightLv / 10);
	elementalIgnore.push(insightLv * .5);
	var willpowerLv = parseInt(document.getElementById("willpower").value);
	willpowerLv = Math.floor(willpowerLv / 5);
	hp += (willpowerLv * 100);
	/* skip willpower +5 def, +1 abnormal status resist per 5 levels*/
}

function getHyperStatAllocation() {
	/* hyper stat bonuses */
	var hyperStr = parseInt(document.getElementById("strHS").value);
	finalStr += (hyperStr * 30);
	var hyperDex = parseInt(document.getElementById("dexHS").value);
	finalDex += (hyperDex * 30);
	var hyperInt = parseInt(document.getElementById("intHS").value);
	finalInt += (hyperInt * 30);
	var hyperLuk = parseInt(document.getElementById("lukHS").value);
	finalLuk += (hyperLuk * 30);
	var hyperHp = parseInt(document.getElementById("hpHS").value);
	percentHp.push(hyperHp * 2);
	var hyperMp = parseInt(document.getElementById("mpHS").value);
	percentMp.push(hyperMp * 2);
	var hyperCritRate = parseInt(document.getElementById("critRateHS").value);
	if (hyperCritRate <= 5) {
		critRate.push(hyperCritRate);
	} else {
		hyperCritRate = hyperCritRate - 5;
		critRate.push(5 + (hyperCritRate * 2));
	}
	var hyperCritDamage = parseInt(document.getElementById("critDamageHS").value);
	critDmg.push(hyperCritDamage);
	var hyperIgnoreDef = parseInt(document.getElementById("iedHS").value);
	ied.push(hyperIgnoreDef * 3);
	var hyperBossDamage = parseInt(document.getElementById("bossHS").value);
	if (hyperBossDamage <= 5) {
		bossDmg.push(hyperBossDamage * 3);
	} else {
		hyperBossDamage = hyperBossDamage - 5;
		hyperBossDamage.push((5 * 3) + (hyperBossDamage * 4));
	}
	var hyperMonsterDamage = parseInt(document.getElementById("normMonDamHS").value);
	if (hyperMonsterDamage <= 5) {
		monsterDmg.push(hyperMonsterDamage * 3);
	} else {
		hyperMonsterDamage = hyperMonsterDamage - 5;
		monsterDmg.push((5 * 3) + (hyperMonsterDamage * 4));
	}
	var hyperDamage = parseInt(document.getElementById("damHS").value);
	dmg.push(hyperDamage * 3);
	var hyperAttack = parseInt(document.getElementById("attHS").value);
	att += (hyperAttack * 3);
	mAtt += (hyperAttack * 3);
	var hyperArcaneForce = parseInt(document.getElementById("arcaneForceHS").value);
	if (hyperArcaneForce <= 10) {
		arcaneForce += (hyperArcaneForce * 5);
	} else {
		hyperArcaneForce = hyperArcaneForce - 10;
		arcaneForce += ((10 * 5) + (hyperArcaneForce * 10));
	}
	/* skip df/tf/pp, status resist, bonus exp */
}

function getLinkSkillSelections() {
	/* add link skill bonuses */
	/* assume 100% uptime, proportional damage increase */
	var ids = ['linkInvincibleBelief', 'linkEmpiricalKnowledge', 'linkAdventurersCuriosity', 'linkThiefsCunning',
    'linkPirateBlessing', 'linkCygnusBlessing', 'linkKnightsWatch', 'linkElvenBlessing', 'linkComboKillBlessing',
    'linkPhantomInstinct', 'linkLightWash', 'linkRunePersistence', 'linkCloseCall', 'linkSpiritOfFreedom',
    'linkWildRage', 'linkFuryUnleashed', 'linkHybridLogic', 'linkTermsAndConditions', 'linkUnfairAdvantage',
    'linkIronWill', 'linkTimeToPrepare', 'linkKeenEdge', 'linkElementalism', 'linkSolus', 'linkTideOfBattle',
    'linkNobleFire', 'linkInnateGift', 'linkBravado', 'linknaturesFriend', 'linkFocusSpirit', 'linkJudgment', 'linkRhinnesBlessing'];

	ids.forEach(function (id) {
		var selectedLinkSkill = document.getElementById(id);
		if (selectedLinkSkill.classList.contains('active')) {
			if (id == 'linkEmpiricalKnowledge') {
				dmg.push(9);
				ied.push(9);
			};
			if (id == 'linkAdventurersCuriosity') {
				critRate.push(10);
			};
			if (id == 'linkThiefsCunning') {
				dmg.push(9);
			};
			if (id == 'linkPhantomInstinct') {
				cStr += 70;
			};
			if (id == 'linkLightWash') {
				ied.push(20);
			};
			if (id == 'linkWildRage') {
				dmg.push(15);
			};
			if (id == 'linkFuryUnleashed') {
				bossDmg.push(20);
			};
			if (id == 'linkHybridLogic') {
				percentAllStat.push(10);
			};
			if (id == 'linkTermsAndConditions') {
				hasTermsAndConditions = true;
			};
			if (id == 'linkUnfairAdvantage') {
				dmg.push(12);
			};
			if (id == 'linkIronWill') {
				percentHp.push(20);
			};
			if (id == 'linkTimeToPrepare') {
				dmg.push(8.5); /* 17% for 20/40 seconds */
			};
			if (id == 'linkKeenEdge') {
				att += 15; mAtt += 15;
			};
			if (id == 'linkElementalism') {
				dmg.push(10);
			};
			if (id == 'linkSolus') {
				dmg.push(16);
			};
			if (id == 'linkTideOfBattle') {
				dmg.push(12);
			};
			if (id == 'linkNobleFire') {
				bossDmg.push(4);
				dmg.push(8); /* +2 up to 8 for each party member */
			};
			if (id == 'linkInnateGift') {
				dmg.push(5);
			};
			if (id == 'linkBravado') {
				dmg.push(10);
			};
			if (id == 'linknaturesFriend') {
				dmg.push(5); /* conditional normal monster dmg +11% */
			};
			if (id == 'linkFocusSpirit') {
				bossDmg.push(10);
				critRate.push(10);
				percentHp.push(5);
				percentMp.push(5);
			};
			if (id == 'linkJudgment') {
				critDmg.push(4);
			};
			if (id == 'linkRhinnesBlessing') {
				ied.push(10);
			};
		};
	});
}

function getFamiliarPotentialSelections() {
	/* percent stat */
	var famPercStr = parseInt(document.getElementById("famStr").value);
	percentStr.push(famPercStr);
	var famPercDex = parseInt(document.getElementById("famDex").value);
	percentDex.push(famPercDex);
	var famPercInt = parseInt(document.getElementById("famInt").value);
	percentInt.push(famPercInt);
	var famPercLuk = parseInt(document.getElementById("famLuk").value);
	percentLuk.push(famPercLuk);
	var famPercAll = parseInt(document.getElementById("famStat").value);
	percentAllStat.push(famPercAll);
	/* flat stat (affected by potentials) */
	var famStr = parseInt(document.getElementById("famFlatStr").value);
	cStr += famStr;
	var famDex = parseInt(document.getElementById("famFlatDex").value);
	cDex += famDex;
	var famInt = parseInt(document.getElementById("famFlatInt").value);
	cInt += famInt;
	var famLuk = parseInt(document.getElementById("famFlatLuk").value);
	cLuk += famFlatLuk;
	var famFlatAtt = parseInt(document.getElementById("famFlatAtt").value);
	att += famAtt;
	var famFlatMagAtt = parseInt(document.getElementById("famFlatMAtt").value);
	mAtt += famMagAtt;
	/* other percent multipliers */
	var famCritRate = parseInt(document.getElementById("famCritRate").value);
	critRate.push(famCritRate);
	var famCritDmg = parseInt(document.getElementById("famCritDam").value);
	critDmg.push(famCritDmg);
	var famIed = parseInt(document.getElementById("famIed").value);
	ied.push(famIed);
	var famBossDmg = parseInt(document.getElementById("famBoss").value);
	bossDmg.push(famBossDmg);
	var famDmg = parseInt(document.getElementById("famDam").value);
	dmg.push(famDmg);
	var famAtt = parseInt(document.getElementById("famAtt").value);
	percentAtt.push(famAtt);
	var famMagAtt = parseInt(document.getElementById("famMAtt").value);
	percentMagAtt.push(famMagAtt);
}

function getFamiliarBadgeSelections(){
	var badgeStr = parseInt(document.getElementById("famBadgeStr").value);
	cStr += badgeStr;
	var badgeDex = parseInt(document.getElementById("famBadgeDex").value);
	cDex += badgeDex;
	var badgeInt = parseInt(document.getElementById("famBadgeInt").value);
	cInt += badgeInt;
	var badgeLuk = parseInt(document.getElementById("famBadgeLuk").value);
	cLuk += badgeLuk;
	var badgeAllStat = parseInt(document.getElementById("famBadgeStat").value);
	percentAllStat.push(badgeAllStat);
	var badgeFlatStats = parseInt(document.getElementById("famBadgeFlatStat").value);
	cStr += badgeFlatStats;
	cDex += badgeFlatStats;
	cInt += badgeFlatStats;
	cLuk += badgeFlatStats;
	var badgePercHp = parseInt(document.getElementById("famBadgehp%").value);
	percentHp.push(badgePercHp);
	var badgeHp = parseInt(document.getElementById("famBadgeHp").value);
	hp += badgeHp;
	var badgeMp = parseInt(document.getElementById("famBadgeMp").value);
	mp += badgeMp;
	var badgeCritRate = parseInt(document.getElementById("famBadgeCrit%").value);
	critRate.push(badgeCritRate);
	var badgeIgnoreDef = parseInt(document.getElementById("famBadgeIed").value);
	ied.push(badgeIgnoreDef);
	var badgePercDmg = parseInt(document.getElementById("famBadgeDam").value);
	dmg.push(badgePercDmg);
	var badgePercAtt = parseInt(document.getElementById("famBadgeAtt%").value);
	percentAtt.push(badgePercAtt);
	var badgeAtt = parseInt(document.getElementById("famBadgeAtt").value);
	att += badgeAtt;
	var badgePercMagAtt = parseInt(document.getElementById("famBadgeMAtt%").value);
	percentMagAtt.push(badgePercMagAtt);
	var badgeMagAtt = parseInt(document.getElementById("famBadgeMAtt").value);
	mAtt += badgeMagAtt;
}

function getLegionBoardSelections() {
	var legionStr = parseInt(document.getElementById("legionStr").value);
	cStr += (legionStr * 5);
	var legionDex = parseInt(document.getElementById("legionDex").value);
	cDex += (legionDex * 5);
	var legionInt = parseInt(document.getElementById("legionInt").value);
	cInt += (legionInt * 5);
	var legionLuk = parseInt(document.getElementById("legionLuk").value);
	cLuk += (legionLuk * 5);
	var legionHp = parseInt(document.getElementById("legionHp").value);
	hp += (legionHp * 250);
	var legionMp = parseInt(document.getElementById("legionMp").value);
	mp += (legionMp * 250);
	var legionCritRate = parseInt(document.getElementById("legionCritRate").value);
	critRate.push(legionCritRate * 1);
	var legionCritDam = parseInt(document.getElementById("legionCritDam").value);
	critDmg.push(legionCritDam * 0.5);
	var legionIed = parseInt(document.getElementById("legionIed").value);
	ied.push(legionIed * 1);
	var legionBoss = parseInt(document.getElementById("legionBoss").value);
	bossDmg.push(legionBoss * 1);
	var legionNormMonDam = parseInt(document.getElementById("legionNormMonDam").value);
	monsterDmg.push(legionNormMonDam * 1);
	var legionBuffDuration = parseInt(document.getElementById("legionBuffDuration").value);
	buffDuration.push(legionBuffDuration * 1);
	var legionAtt = parseInt(document.getElementById("legionAtt").value);
	att += legionAtt;
	var legionMagAtt = parseInt(document.getElementById("legionMagAtt").value);
	mAtt += legionMagAtt;
	/*var legionAbnormal = parseInt(document.getElementById("legionAbnormal").value);
	var legionExp = parseInt(document.getElementById("legionExp").value);*/
}

function getLegionMemberSelections() {
	var memberStr = parseInt(document.getElementById("memberStr").value);
	finalStr += memberStr;
	var memberDex = parseInt(document.getElementById("memberDex").value);
	finalDex += memberDex;
	var memberInt = parseInt(document.getElementById("memberInt").value);
	finalInt += memberInt;
	var memberLuk = parseInt(document.getElementById("memberLuk").value);
	finalLuk += memberLuk;
	var memberPercHp = parseInt(document.getElementById("memberHp%").value);
	percentHp.push(memberPercHp);
	var memberHp = parseInt(document.getElementById("memberHp").value);
	finalHp += memberHp;
	var memberPercMp = parseInt(document.getElementById("memberMp%").value);
	percentMp.push(memberPercMp);
	var memberCritRate = parseInt(document.getElementById("memberCritRate").value);
	critRate.push(memberCritRate);
	var memberCritDamage = parseInt(document.getElementById("memberCritDamage").value);
	critDmg.push(memberCritDamage);
	var memberIgnoreDefense = parseInt(document.getElementById("memberIgnoreDefense").value);
	ied.push(memberIgnoreDefense);
	var memberBossDamage = parseInt(document.getElementById("memberBossDamage").value);
	bossDmg.push(memberBossDamage);
	var memberBuffDuration = parseInt(document.getElementById("memberBuffDuration").value);
	buffDuration.push(memberBuffDuration);
	var memberDamageChance = parseInt(document.getElementById("memberDamageChance").value);
	dmg.push(memberDamageChance / 5); /* Average of 20% chance; to trigger 4|8|12|14|20 / 5 */
	var memberCooldown = parseInt(document.getElementById("memberCooldown").value);
	cdReduction.push(memberCooldown);
	/*var memberSummonDuration = parseInt(document.getElementById("memberSummonDuration").value);*/
}

function getEquipmentSelections() {
	/* Rings, universal */
	var ringTotalStats = ring1JobStat + ring1AllStat + ring2JobStat + ring2AllStat + ring3JobStat + ring3AllStat + ring4JobStat + ring4AllStat;
	var ringTotalHp = ring1Hp + ring2Hp + ring3Hp + ring4Hp;
	var ringTotalMp = ring1Mp + ring2Mp + ring3Mp + ring4Mp;
	var ringTotalAtt = ring1Att + ring2Att + ring3Att + ring4Att;
	var ringTotalMagAtt = ring1MAtt + ring2MAtt + ring3MAtt + ring4MAtt;
	cStr += ringTotalStats; cDex += ringTotalStats; cInt += ringTotalStats; cLuk += ringTotalStats;
	hp += ringTotalHp; mp += ringTotalMp; att += ringTotalAtt; mAtt += ringTotalMagAtt;
	/* Pocket, universal */
	hp += pocketHp; mp += pocketMp; att += pocketAtt; mAtt += pocketMAtt;
	var selectedPocket = document.getElementById("selectPocket").value;
	if (selectedPocket == "cursedSpellbook") {
		switch (primaryStat) {
			case "str":
				cStr += 10;
				break;
			case "dex":
				cDex += 10;
				break;
			case "int":
				cInt += 10;
				break;
			case "luk":
				cLuk += 10;
				break;
			default:
				break;
		}
		cStr += pocketAllStat; cDex += pocketAllStat; cInt += pocketAllStat; cLuk += pocketAllStat;
	} else {
		var pocketTotalStats = pocketJobStat + pocketAllStat;
		cStr += pocketTotalStats; cDex += pocketTotalStats; cInt += pocketTotalStats; cLuk += pocketTotalStats;
	}
	/* Pendants, universal */
	var pendantTotalStats = pendant1JobStat + pendant1AllStat + pendant2JobStat + pendant2AllStat;
	cStr += pendantTotalStats; cDex += pendantTotalStats; cInt += pendantTotalStats; cLuk += pendantTotalStats;
	hp += (pendant1Hp + pendant2Hp); mp += pendant1Mp + pendant2Mp; att += pendant1Att + pendant2Att; mAtt = pendant1MAtt + pendant2MAtt
		/* Additional Item specific bonuses */
	var selectedPendant1 = document.getElementById("selectPendant1").value;
	var selectedPendant2 = document.getElementById("selectPendant2").value;
	if (selectedPendant1 == "daybreakPendant" || selectedPendant2 == "daybreakPendant") {
		percentHp.push(5);
	}
	if (selectedPendant1 == "dominatorPendant" || selectedPendant2 == "dominatorPendant") {
		percentHp.push(10);
		percentMp.push(10);
	}
	if (selectedPendant1 == "sourceOfSuffering" || selectedPendant2 == "sourceOfSuffering") {
		percentHp.push(5);
	}
	/* Belt, universal */
	var beltTotalStats = beltJobStat + beltAllStat;
	cStr += beltTotalStats; cDex += beltTotalStats; cInt += beltTotalStats; cLuk += beltTotalStats;
	hp += beltHp; mp += beltMp; att += beltAtt, mAtt += beltMAtt;
	/* Face accessory, universal */
	var faceTotalStats = faceJobStat + faceAllStat;
	cStr += faceTotalStats; cDex += faceTotalStats; cInt += faceTotalStats; cLuk += faceTotalStats;
	hp += faceHp; mp += faceMp; att += faceAtt; mAtt += faceMAtt;
	/* Eye accessory, universal */
	var eyeTotalStats = eyeJobStat + eyeAllStat;
	cStr += eyeTotalStats; cDex += eyeTotalStats; cInt += eyeTotalStats; cLuk += eyeTotalStats;
	hp += eyeHp; mp += eyeMp; att += eyeAtt; mAtt += eyeMAtt;
	/* Ear accessory, universal */
	var earTotalStats = earJobStat + earAllStat;
	cStr += eyeTotalStats; cDex += eyeTotalStats; cInt += eyeTotalStats; cLuk += eyeTotalStats;
	hp += earHp; mp += earMp; att += earAtt; mAtt += earMAtt;
	/* Badge, universal */
	var badgeTotalStats = badgeJobStat + badgeAllStat;
	cStr += badgeTotalStats; cDex += badgeTotalStats; cInt += badgeTotalStats; cLuk += badgeTotalStats;
	hp += badgeHp; mp += badgeMp; att += badgeAtt; mAtt += badgeMAtt;
	/* Medal, universal */
	var medalTotalStats = medalJobStat + medalAllStat;
	cStr += medalTotalStats; cDex += medalTotalStats; cInt += medalTotalStats; cLuk += medalTotalStats;
	hp += medalHp; mp += medalMp; att += medalAtt; mAtt += medalMAtt;
	/* Heart, universal */
	var heartTotalStats = heartJobStat + heartAllStat;
	cStr += heartTotalStats; cDex += heartTotalStats; cInt += heartTotalStats; cLuk += heartTotalStats;
	hp += heartHp; mp += heartMp; att += heartAtt; mAtt += heartMAtt;
	
	/* Hat, Top, Bottom, Shoes, Shoulder, Gloves, Emblem, Cape [+ weapon, + subweapon on seperate function] class specific */
	var classTotalJobStat = hatJobStat + topJobStat + bottomJobStat + shoeJobStat + shoulderJobStat + gloveJobStat + capeJobStat + emblemJobStat;
	var classTotalAllStat = hatAllStat + topAllStat + bottomAllStat + shoeAllStat + shoulderAllStat + gloveAllStat + capeAllStat + emblemAllStat;
	var classTotalHp = hatHp + topHp + bottomHp + shoeHp + shoulderHp + gloveHp + capeHp + emblemHp;
	var classTotalMp = hatMp + topMp + bottomMp + shoeMp + shoulderMp + gloveMp + capeMp + emblemMp;
	var classTotalAtt = hatAtt + topAtt + bottomAtt + shoeAtt + shoulderMp + gloveAtt + capeAtt + emblemAtt;
	var classTotalMagAtt = hatMAtt + topMAtt + bottomMAtt + shoeMAtt + shoulderMAtt + gloveMAtt + capeMAtt + emblemMAtt;
	
	cStr += classTotalAllStat; cDex += classTotalAllStat; cInt += classTotalAllStat; cLuk += classTotalAllStat;
	hp += classTotalHp; mp += classTotalMp; att += classTotalAtt; mAtt += classTotalMagAtt;
	switch(primaryStat) {
		case "str":
			cStr += classTotalJobStat; cDex += classTotalJobStat;
			break;
		case "dex":
			cDex += classTotalJobStat; cStr += classTotalJobStat;
			break;
		case "int":
			cInt += classTotalJobStat; cLuk += classTotalJobStat;
			break;
		case "luk":
			cLuk += classTotalJobStat; cDex += classTotalJobStat;
			break;
		default:
			break;
	}
	var cselectedEmblem = document.getElementById("selectEmblem").value;
	if (charClass == "demonAvenger" && cselectedEmblem == "classEmblem") {
		hp += 500;
	}
	updateWeaponsStats();
}

function updateWeaponsStats() {
	var selectedWeapon = document.getElementById("selectWeapon").value;
    var starForceSelect = document.getElementById("weaponStarForce").value;
    var weaponEquipImage = document.getElementById("weaponImage2");
	
	var selectedSubweapon = document.getElementById("selectSubweapon").value;
    var subweaponEquipImage = document.getElementById("subweaponImage2");
	
	var selectedEmblem = document.getElementById("selectEmblem").value;
    var emblemEquipImage = document.getElementById("emblemImage2");
	
	switch (charClass) {
		case "adele": /* str/dex */
			classType = "warrior";
			weaponAttackSpeed = 4; weaponMultiplier = 1.3;
			switch (selectedWeapon) { /* Bladecaster */
				case "fafnirWeapon":
					calculateWeaponStarForce(150, starForceSelect, "weapon", 40, 0, 0, 0, 171, 0);
					bossDmg.push(30); ied.push(10); rootAbyssSet += 1;
					weaponEquipImage.src = "images/warrior/01213016.img.info.icon._outlink.png";
					break;
				case "absolabWeapon":
					calculateWeaponStarForce(160, starForceSelect, "weapon", 60, 0, 0, 0, 205, 0);
					bossDmg.push(30); ied.push(10); absolabSet += 1;
					weaponEquipImage.src = "images/warrior/01213017.img.info.icon._outlink.png";
					break;
				case "arcaneWeapon":
					calculateWeaponStarForce(200, starForceSelect, "weapon", 100, 0, 0, 0, 295, 0);
					bossDmg.push(30); ied.push(20); arcaneSet += 1;
					weaponEquipImage.src = "images/warrior/01213018.img.info.icon._outlink.png";
					break;
				case "genesisWeapon":
					calculateWeaponStarForce(200, starForceSelect, "weapon", 150, 0, 0, 0, 340, 0);
					bossDmg.push(30); ied.push(20); genesisWeapon += 1;
					weaponEquipImage.src = "images/warrior/01213022.img.info.icon._outlink.png";
					break;
				default:
					break;
			}
			cStr += weaponAllStat; cDex += weaponAllStat; cInt += weaponAllStat; cLuk += weaponAllStat;
			cDex += weaponJobStat; cStr += weaponJobStat; /* job stats */
			hp += weaponHp; mp += weaponMp; att += weaponAtt; mAtt += weaponMAtt;
			switch (selectedSubweapon) {
				case "princessNoSubweapon":
					calculateSubweaponStarForce(140, 0, "weapon", 14, 0, 0, 0, 9, 0);
					/* cStr += 14; cDex += 14; att += 9; */
					subweaponEquipImage.src = "images/warrior/01354007.img.info.icon._outlink.png";
					break;
				default:
					break;
			}
			switch (selectedEmblem) {
				case "classEmblem":	
				emblemEquipImage.src = "images/warrior/01190552.img.info.icon._outlink.png";
				break;
			}
			break;
		
		case "aran": /* str/dex */
			classType = "warrior";
			weaponAttackSpeed = 5; weaponMultiplier = 1.49;
			switch (selectedWeapon) { /* Polearm */
				case "fafnirWeapon":
					calculateWeaponStarForce(150, starForceSelect, "weapon", 40, 0, 0, 0, 153, 0);
					bossDmg.push(30); ied.push(10); rootAbyssSet += 1;
					weaponEquipImage.src = "images/warrior/01442223.img.info.icon._outlink.png";
					break;
				case "absolabWeapon":
					calculateWeaponStarForce(160, starForceSelect, "weapon", 60, 0, 0, 0, 184, 0);
					bossDmg.push(30); ied.push(10); absolabSet += 1;
					weaponEquipImage.src = "images/warrior/01442268.img.info.icon._outlink.png";
					break;
				case "arcaneWeapon":
					calculateWeaponStarForce(200, starForceSelect, "weapon", 100, 0, 0, 0, 264, 0);
					bossDmg.push(30); ied.push(20); arcaneSet += 1;
					weaponEquipImage.src = "images/warrior/01442274.img.info.icon._outlink.png";
					break;
				case "genesisWeapon":
					calculateWeaponStarForce(200, starForceSelect, "weapon", 150, 0, 0, 0, 304, 0);
					bossDmg.push(30); ied.push(20); genesisWeapon += 1;
					weaponEquipImage.src = "images/warrior/01442285.img.info.icon._outlink.png";
					break;
				default:
					break;
			}
			cStr += weaponAllStat; cDex += weaponAllStat; cInt += weaponAllStat; cLuk += weaponAllStat;
			cDex += weaponJobStat; cStr += weaponJobStat; /* job stats */
			hp += weaponHp; mp += weaponMp; att += weaponAtt; mAtt += weaponMAtt;
			switch (selectedSubweapon) {
				case "princessNoSubweapon":
					calculateSubweaponStarForce(140, 0, "weapon", 14, 0, 0, 0, 9, 0);
					/* cStr += 14; cDex += 14; att += 9; */
					subweaponEquipImage.src = "images/warrior/01352935.img.info.icon._outlink.png";
					break;
				default:
					break;
			}
			switch (selectedEmblem) {
				case "classEmblem":	
				emblemEquipImage.src = "images/warrior/01190513.img.info.icon._outlink.png";
				break;
			}
			break;
		
		case "ark": /* str/dex */
			classType = "pirate";
			weaponAttackSpeed = 5; weaponMultiplier = 1.7;
			switch (selectedWeapon) { /* Knuckle */
				case "fafnirWeapon":
					calculateWeaponStarForce(150, starForceSelect, "weapon", 40, 0, 0, 0, 128, 0);
					bossDmg.push(30); ied.push(10); rootAbyssSet += 1;
					weaponEquipImage.src = "images/pirate/01482168.img.info.icon._outlink.png";
					break;
				case "absolabWeapon":
					calculateWeaponStarForce(160, starForceSelect, "weapon", 60, 0, 0, 0, 154, 0);
					bossDmg.push(30); ied.push(10); absolabSet += 1;
					weaponEquipImage.src = "images/pirate/01482216.img.info.icon._outlink.png";
					break;
				case "arcaneWeapon":
					calculateWeaponStarForce(200, starForceSelect, "weapon", 100, 0, 0, 0, 221, 0);
					bossDmg.push(30); ied.push(20); arcaneSet += 1;
					weaponEquipImage.src = "images/pirate/01482221.img.info.icon._outlink.png";
					break;
				case "genesisWeapon":
					calculateWeaponStarForce(200, starForceSelect, "weapon", 150, 0, 0, 0, 255, 0);
					bossDmg.push(30); ied.push(20); genesisWeapon += 1;
					weaponEquipImage.src = "images/pirate/01482232.img.info.icon._outlink.png";
					break;
				default:
					break;
			}
			cStr += weaponAllStat; cDex += weaponAllStat; cInt += weaponAllStat; cLuk += weaponAllStat;
			cDex += weaponJobStat; cStr += weaponJobStat; /* job stats */
			hp += weaponHp; mp += weaponMp; att += weaponAtt; mAtt += weaponMAtt;
			switch (selectedSubweapon) {
				case "princessNoSubweapon":
					calculateSubweaponStarForce(140, 0, "weapon", 14, 0, 0, 0, 9, 0);
					/* cStr += 14; cDex += 14; att += 9; */
					subweaponEquipImage.src = "images/pirate/01353606.img.info.icon._outlink.png";
					break;
				default:
					break;
			}
			switch (selectedEmblem) {
				case "classEmblem":	
				emblemEquipImage.src = "images/pirate/01190540.img.info.icon._outlink.png";
				break;
			}
			break;
		
		case "blaster": /* str/dex */
			classType = "warrior";
			weaponAttackSpeed = 5; weaponMultiplier = 1.7;
			switch (selectedWeapon) { /* Arm Cannon */
				case "fafnirWeapon":
					calculateWeaponStarForce(150, starForceSelect, "weapon", 40, 0, 0, 0, 128, 0);
					bossDmg.push(30); ied.push(10); rootAbyssSet += 1;
					weaponEquipImage.src = "images/warrior/01582016.img.info.icon._outlink.png";
					break;
				case "absolabWeapon":
					calculateWeaponStarForce(160, starForceSelect, "weapon", 60, 0, 0, 0, 154, 0);
					bossDmg.push(30); ied.push(10); absolabSet += 1;
					weaponEquipImage.src = "images/warrior/01582017.img.info.icon._outlink.png";
					break;
				case "arcaneWeapon":
					calculateWeaponStarForce(200, starForceSelect, "weapon", 100, 0, 0, 0, 221, 0);
					bossDmg.push(30); ied.push(20); arcaneSet += 1;
					weaponEquipImage.src = "images/warrior/01582023.img.info.icon._outlink.png";
					break;
				case "genesisWeapon":
					calculateWeaponStarForce(200, starForceSelect, "weapon", 150, 0, 0, 0, 255, 0);
					bossDmg.push(30); ied.push(20); genesisWeapon += 1;
					weaponEquipImage.src = "images/warrior/01582044.img.info.icon._outlink.png";
					break;
				default:
					break;
			}
			cStr += weaponAllStat; cDex += weaponAllStat; cInt += weaponAllStat; cLuk += weaponAllStat;
			cDex += weaponJobStat; cStr += weaponJobStat; /* job stats */
			hp += weaponHp; mp += weaponMp; att += weaponAtt; mAtt += weaponMAtt;
			switch (selectedSubweapon) {
				case "princessNoSubweapon":
					calculateSubweaponStarForce(140, 0, "weapon", 15, 0, 0, 0, 10, 0);
					/* cStr += 15; cDex += 15; att += 10; */
					subweaponEquipImage.src = "images/warrior/01353405.img.info.icon._outlink.png";
					break;
				default:
					break;
			}
			switch (selectedEmblem) {
				case "classEmblem":	
				emblemEquipImage.src = "images/warrior/01190601.img.info.icon._outlink.png";
				break;
			}
			break;
		
		case "buccaneer": /* str/dex */
			classType = "pirate";
			weaponAttackSpeed = 5; weaponMultiplier = 1.7;
			switch (selectedWeapon) { /* Knuckle */
				case "fafnirWeapon":
					calculateWeaponStarForce(150, starForceSelect, "weapon", 40, 0, 0, 0, 128, 0);
					bossDmg.push(30); ied.push(10); rootAbyssSet += 1;
					weaponEquipImage.src = "images/pirate/01482168.img.info.icon._outlink.png";
					break;
				case "absolabWeapon":
					calculateWeaponStarForce(160, starForceSelect, "weapon", 60, 0, 0, 0, 154, 0);
					bossDmg.push(30); ied.push(10); absolabSet += 1;
					weaponEquipImage.src = "images/pirate/01482216.img.info.icon._outlink.png";
					break;
				case "arcaneWeapon":
					calculateWeaponStarForce(200, starForceSelect, "weapon", 100, 0, 0, 0, 221, 0);
					bossDmg.push(30); ied.push(20); arcaneSet += 1;
					weaponEquipImage.src = "images/pirate/01482221.img.info.icon._outlink.png";
					break;
				case "genesisWeapon":
					calculateWeaponStarForce(200, starForceSelect, "weapon", 150, 0, 0, 0, 255, 0);
					bossDmg.push(30); ied.push(20); genesisWeapon += 1;
					weaponEquipImage.src = "images/pirate/01482232.img.info.icon._outlink.png";
					break;
				default:
					break;
			}
			cStr += weaponAllStat; cDex += weaponAllStat; cInt += weaponAllStat; cLuk += weaponAllStat;
			cDex += weaponJobStat; cStr += weaponJobStat; /* job stats */
			hp += weaponHp; mp += weaponMp; att += weaponAtt; mAtt += weaponMAtt;
			switch (selectedSubweapon) {
				case "princessNoSubweapon":
					calculateSubweaponStarForce(140, 0, "weapon", 14, 0, 0, 0, 9, 0);
					/* cStr += 14; cDex += 14; att += 9; */
					subweaponEquipImage.src = "images/pirate/01352906.img.info.icon._outlink.png";
					break;
				default:
					break;
			}
			switch (selectedEmblem) {
				case "classEmblem":	
				emblemEquipImage.src = "images/pirate/01190301.img.info.icon._outlink.png";
				break;
			}
			break;
		
		case "cannoneer": /* str/dex */
			classType = "pirate";
			weaponAttackSpeed = 8; weaponMultiplier = 1.5;
			switch (selectedWeapon) { /* Cannon */
				case "fafnirWeapon":
					calculateWeaponStarForce(150, starForceSelect, "weapon", 40, 0, 0, 0, 175, 0);
					bossDmg.push(30); ied.push(10); rootAbyssSet += 1;
					weaponEquipImage.src = "images/pirate/01482168.img.info.icon._outlink.png";
					break;
				case "absolabWeapon":
					calculateWeaponStarForce(160, starForceSelect, "weapon", 60, 0, 0, 0, 210, 0);
					bossDmg.push(30); ied.push(10); absolabSet += 1;
					weaponEquipImage.src = "images/pirate/01482216.img.info.icon._outlink.png";
					break;
				case "arcaneWeapon":
					calculateWeaponStarForce(200, starForceSelect, "weapon", 100, 0, 0, 0, 302, 0);
					bossDmg.push(30); ied.push(20); arcaneSet += 1;
					weaponEquipImage.src = "images/pirate/01482221.img.info.icon._outlink.png";
					break;
				case "genesisWeapon":
					calculateWeaponStarForce(200, starForceSelect, "weapon", 150, 0, 0, 0, 348, 0);
					bossDmg.push(30); ied.push(20); genesisWeapon += 1;
					weaponEquipImage.src = "images/pirate/01482232.img.info.icon._outlink.png";
					break;
				default:
					break;
			}
			cStr += weaponAllStat; cDex += weaponAllStat; cInt += weaponAllStat; cLuk += weaponAllStat;
			cDex += weaponJobStat; cStr += weaponJobStat; /* job stats */
			hp += weaponHp; mp += weaponMp; att += weaponAtt; mAtt += weaponMAtt;
			switch (selectedSubweapon) {
				case "princessNoSubweapon":
					calculateSubweaponStarForce(140, 0, "weapon", 14, 0, 0, 0, 9, 0);
					/* cStr += 14; cDex += 14; att += 9; */
					subweaponEquipImage.src = "images/pirate/01352928.img.info.icon._outlink.png";
					break;
				default:
					break;
			}
			switch (selectedEmblem) {
				case "classEmblem":	
				emblemEquipImage.src = "images/pirate/01190301.img.info.icon._outlink.png";
				break;
			}
			break;
		
		case "darkKnight": /* str/dex */
			classType = "warrior";
			weaponAttackSpeed = 6; weaponMultiplier = 1.49;
			switch (selectedWeapon) { /* Spear */
				case "fafnirWeapon":
					calculateWeaponStarForce(150, starForceSelect, "weapon", 40, 0, 0, 0, 171, 0);
					bossDmg.push(30); ied.push(10); rootAbyssSet += 1;
					weaponEquipImage.src = "images/warrior/01432167.img.info.icon._outlink.png";
					break;
				case "absolabWeapon":
					calculateWeaponStarForce(160, starForceSelect, "weapon", 60, 0, 0, 0, 205, 0);
					bossDmg.push(30); ied.push(10); absolabSet += 1;
					weaponEquipImage.src = "images/warrior/01432214.img.info.icon._outlink.png";
					break;
				case "arcaneWeapon":
					calculateWeaponStarForce(200, starForceSelect, "weapon", 100, 0, 0, 0, 295, 0);
					bossDmg.push(30); ied.push(20); arcaneSet += 1;
					weaponEquipImage.src = "images/warrior/01432218.img.info.icon._outlink.png";
					break;
				case "genesisWeapon":
					calculateWeaponStarForce(200, starForceSelect, "weapon", 150, 0, 0, 0, 340, 0);
					bossDmg.push(30); ied.push(20); genesisWeapon += 1;
					weaponEquipImage.src = "images/warrior/01432227.img.info.icon._outlink.png";
					break;
				default:
					break;
			}
			cStr += weaponAllStat; cDex += weaponAllStat; cInt += weaponAllStat; cLuk += weaponAllStat;
			cDex += weaponJobStat; cStr += weaponJobStat; /* job stats */
			hp += weaponHp; mp += weaponMp; att += weaponAtt; mAtt += weaponMAtt;
			switch (selectedSubweapon) {
				case "princessNoSubweapon":
					calculateSubweaponStarForce(140, 0, "weapon", 14, 0, 0, 0, 9, 0);
					/* cStr += 14; cDex += 14; att += 9; */
					subweaponEquipImage.src = "images/warrior/01352226.img.info.icon._outlink.png";
					break;
				default:
					break;
			}
			switch (selectedEmblem) {
				case "classEmblem":	
				emblemEquipImage.src = "images/warrior/01190301.img.info.icon._outlink.png";
				break;
			}
			break;
		
		case "dawnWarrior": /* str/dex */
			classType = "warrior";
			weaponAttackSpeed = 6; weaponMultiplier = 1.34;
			switch (selectedWeapon) { /* 2-h Sword */
				case "fafnirWeapon":
					calculateWeaponStarForce(150, starForceSelect, "weapon", 40, 0, 0, 0, 171, 0);
					bossDmg.push(30); ied.push(10); rootAbyssSet += 1;
					weaponEquipImage.src = "images/warrior/01402196.img.info.icon._outlink.png";
					break;
				case "absolabWeapon":
					calculateWeaponStarForce(160, starForceSelect, "weapon", 60, 0, 0, 0, 205, 0);
					bossDmg.push(30); ied.push(10); absolabSet += 1;
					weaponEquipImage.src = "images/warrior/01402251.img.info.icon._outlink.png";
					break;
				case "arcaneWeapon":
					calculateWeaponStarForce(200, starForceSelect, "weapon", 100, 0, 0, 0, 295, 0);
					bossDmg.push(30); ied.push(20); arcaneSet += 1;
					weaponEquipImage.src = "images/warrior/01402259.img.info.icon._outlink.png";
					break;
				case "genesisWeapon":
					calculateWeaponStarForce(200, starForceSelect, "weapon", 150, 0, 0, 0, 340, 0);
					bossDmg.push(30); ied.push(20); genesisWeapon += 1;
					weaponEquipImage.src = "images/warrior/01402268.img.info.icon._outlink.png";
					break;
				default:
					break;
			}
			cStr += weaponAllStat; cDex += weaponAllStat; cInt += weaponAllStat; cLuk += weaponAllStat;
			cDex += weaponJobStat; cStr += weaponJobStat; /* job stats */
			hp += weaponHp; mp += weaponMp; att += weaponAtt; mAtt += weaponMAtt;
			switch (selectedSubweapon) {
				case "princessNoSubweapon":
					calculateSubweaponStarForce(140, 0, "weapon", 0, 14, 0, 0, 9, 9);
					/* cStr += 14; cDex += 14; cInt += 14; cLuk += 14; att += 9; mAtt += 9; */
					subweaponEquipImage.src = "images/warrior/01352975.img.info.icon._outlink.png";
					break;
				default:
					break;
			}
			switch (selectedEmblem) {
				case "classEmblem":	
				emblemEquipImage.src = "images/warrior/01190801.img.info.icon._outlink.png";
				break;
			}
			break;
		
		case "demonSlayer": /* str/dex */
			classType = "warrior";
			weaponAttackSpeed = 5; weaponMultiplier = 1.2;
			switch (selectedWeapon) { /* 1-h Blunt/axe */
				case "fafnirWeapon":
					calculateWeaponStarForce(150, starForceSelect, "weapon", 40, 0, 0, 0, 164, 0);
					bossDmg.push(30); ied.push(10); rootAbyssSet += 1;
					weaponEquipImage.src = "images/warrior/01322203.img.info.icon._outlink.png";
					break;
				case "absolabWeapon":
					calculateWeaponStarForce(160, starForceSelect, "weapon", 60, 0, 0, 0, 197, 0);
					bossDmg.push(30); ied.push(10); absolabSet += 1;
					weaponEquipImage.src = "images/warrior/01322250.img.info.icon._outlink.png";
					break;
				case "arcaneWeapon":
					calculateWeaponStarForce(200, starForceSelect, "weapon", 100, 0, 0, 0, 283, 0);
					bossDmg.push(30); ied.push(20); arcaneSet += 1;
					weaponEquipImage.src = "images/warrior/01322255.img.info.icon._outlink.png";
					break;
				case "genesisWeapon":
					calculateWeaponStarForce(200, starForceSelect, "weapon", 150, 0, 0, 0, 326, 0);
					bossDmg.push(30); ied.push(20); genesisWeapon += 1;
					weaponEquipImage.src = "images/warrior/01322264.img.info.icon._outlink.png";
					break;
				default:
					break;
			}
			cStr += weaponAllStat; cDex += weaponAllStat; cInt += weaponAllStat; cLuk += weaponAllStat;
			cDex += weaponJobStat; cStr += weaponJobStat; /* job stats */
			hp += weaponHp; mp += weaponMp; att += weaponAtt; mAtt += weaponMAtt;
			switch (selectedSubweapon) {
				case "ruinForceShield":
					cStr += subweaponJobStat + subweaponAllStat ; cDex += subweaponJobStat + subweaponAllStat; 
					hp += subweaponHp; mp += subweaponMp; att += subweaponAtt; mAtt += subweaponMAtt;
					break;
				default:
					break;
			}
			switch (selectedEmblem) {
				case "classEmblem":	
				emblemEquipImage.src = "images/warrior/01190701.img.info.icon._outlink.png";
				break;
			}
			break;
		
		case "hayato": /* str/dex */
			classType = "warrior";
			weaponAttackSpeed = 5; weaponMultiplier = 1.25;
			switch (selectedWeapon) { /* Katana */
				case "fafnirWeapon":
					calculateWeaponStarForce(150, starForceSelect, "weapon", 40, 0, 0, 0, 164, 0);
					bossDmg.push(30); ied.push(10); rootAbyssSet += 1;
					weaponEquipImage.src = "images/warrior/01542063.img.info.icon._outlink.png";
					break;
				case "absolabWeapon":
					calculateWeaponStarForce(160, starForceSelect, "weapon", 60, 0, 0, 0, 197, 0);
					bossDmg.push(30); ied.push(10); absolabSet += 1;
					weaponEquipImage.src = "images/warrior/01542108.img.info.icon._outlink.png";
					break;
				case "arcaneWeapon":
					calculateWeaponStarForce(200, starForceSelect, "weapon", 100, 0, 0, 0, 283, 0);
					bossDmg.push(30); ied.push(20); arcaneSet += 1;
					weaponEquipImage.src = "images/warrior/01542131.img.info.icon._outlink.png";
					break;
				case "genesisWeapon":
					calculateWeaponStarForce(200, starForceSelect, "weapon", 150, 0, 0, 0, 326, 0);
					bossDmg.push(30); ied.push(20); genesisWeapon += 1;
					weaponEquipImage.src = "images/warrior/01542128.img.info.icon._outlink.png";
					break;
				default:
					break;
			}
			cStr += weaponAllStat; cDex += weaponAllStat; cInt += weaponAllStat; cLuk += weaponAllStat;
			cDex += weaponJobStat; cStr += weaponJobStat; /* job stats */
			hp += weaponHp; mp += weaponMp; att += weaponAtt; mAtt += weaponMAtt;
			switch (selectedSubweapon) {
				case "princessNoSubweapon":
					calculateSubweaponStarForce(140, 0, "weapon", 17, 0, 0, 0, 9, 0);
					/* cStr += 17; cDex += 17; att += 9; */
					subweaponEquipImage.src = "images/warrior/01352807.img.info.icon._outlink.png";
					break;
				default:
					break;
			}
			switch (selectedEmblem) {
				case "classEmblem":	
				emblemEquipImage.src = "images/warrior/01191101.img.info.icon._outlink.png";
				break;
			}
			break;
		
		case "hero": /* str/dex */
			classType = "warrior";
			weaponAttackSpeed = 6; weaponMultiplier = 1.44; /* +.1 hero bonus */
			switch (selectedWeapon) { /* 2-h Sword */
				case "fafnirWeapon":
					calculateWeaponStarForce(150, starForceSelect, "weapon", 40, 0, 0, 0, 171, 0);
					bossDmg.push(30); ied.push(10); rootAbyssSet += 1;
					weaponEquipImage.src = "images/warrior/01402196.img.info.icon._outlink.png";
					break;
				case "absolabWeapon":
					calculateWeaponStarForce(160, starForceSelect, "weapon", 60, 0, 0, 0, 205, 0);
					bossDmg.push(30); ied.push(10); absolabSet += 1;
					weaponEquipImage.src = "images/warrior/01402251.img.info.icon._outlink.png";
					break;
				case "arcaneWeapon":
					calculateWeaponStarForce(200, starForceSelect, "weapon", 100, 0, 0, 0, 295, 0);
					bossDmg.push(30); ied.push(20); arcaneSet += 1;
					weaponEquipImage.src = "images/warrior/01402259.img.info.icon._outlink.png";
					break;
				case "genesisWeapon":
					calculateWeaponStarForce(200, starForceSelect, "weapon", 150, 0, 0, 0, 340, 0);
					bossDmg.push(30); ied.push(20); genesisWeapon += 1;
					weaponEquipImage.src = "images/warrior/01402268.img.info.icon._outlink.png";
					break;
				default:
					break;
			}
			cStr += weaponAllStat; cDex += weaponAllStat; cInt += weaponAllStat; cLuk += weaponAllStat;
			cDex += weaponJobStat; cStr += weaponJobStat; /* job stats */
			hp += weaponHp; mp += weaponMp; att += weaponAtt; mAtt += weaponMAtt;
			switch (selectedSubweapon) {
				case "princessNoSubweapon":
					calculateSubweaponStarForce(140, 0, "weapon", 14, 0, 0, 0, 9, 0);
					/* cStr += 14; cDex += 14; att += 9; */
					subweaponEquipImage.src = "images/warrior/01352206.img.info.icon._outlink.png";
					break;
				default:
					break;
			}
			switch (selectedEmblem) {
				case "classEmblem":	
				emblemEquipImage.src = "images/warrior/01190301.img.info.icon._outlink.png";
				break;
			}
			break;
		
		case "kaiser": /* str/dex */
			classType = "warrior";
			weaponAttackSpeed = 6; weaponMultiplier = 1.34;
			switch (selectedWeapon) { /* 2-h Sword */
				case "fafnirWeapon":
					calculateWeaponStarForce(150, starForceSelect, "weapon", 40, 0, 0, 0, 171, 0);
					bossDmg.push(30); ied.push(10); rootAbyssSet += 1;
					weaponEquipImage.src = "images/warrior/01402196.img.info.icon._outlink.png";
					break;
				case "absolabWeapon":
					calculateWeaponStarForce(160, starForceSelect, "weapon", 60, 0, 0, 0, 205, 0);
					bossDmg.push(30); ied.push(10); absolabSet += 1;
					weaponEquipImage.src = "images/warrior/01402251.img.info.icon._outlink.png";
					break;
				case "arcaneWeapon":
					calculateWeaponStarForce(200, starForceSelect, "weapon", 100, 0, 0, 0, 295, 0);
					bossDmg.push(30); ied.push(20); arcaneSet += 1;
					weaponEquipImage.src = "images/warrior/01402259.img.info.icon._outlink.png";
					break;
				case "genesisWeapon":
					calculateWeaponStarForce(200, starForceSelect, "weapon", 150, 0, 0, 0, 340, 0);
					bossDmg.push(30); ied.push(20); genesisWeapon += 1;
					weaponEquipImage.src = "images/warrior/01402268.img.info.icon._outlink.png";
					break;
				default:
					break;
			}
			cStr += weaponAllStat; cDex += weaponAllStat; cInt += weaponAllStat; cLuk += weaponAllStat;
			cDex += weaponJobStat; cStr += weaponJobStat; /* job stats */
			hp += weaponHp; mp += weaponMp; att += weaponAtt; mAtt += weaponMAtt;
			switch (selectedSubweapon) {
				case "princessNoSubweapon":
					calculateSubweaponStarForce(140, 0, "weapon", 0, 14, 0, 0, 0, 0);
					/* cStr += 14; cDex += 14; cInt += 14; cLuk += 14; */
					subweaponEquipImage.src = "images/warrior/01352506.img.info.icon._outlink.png";
					break;
				default:
					break;
			}
			switch (selectedEmblem) {
				case "classEmblem":	
				emblemEquipImage.src = "images/warrior/01190001.img.info.icon._outlink.png";
				break;
			}
			break;
		
		case "mihile": /* str/dex */
			classType = "warrior";
			weaponAttackSpeed = 6; weaponMultiplier = 1.24;
			switch (selectedWeapon) { /* 1-h Sword */
				case "fafnirWeapon":
					calculateWeaponStarForce(150, starForceSelect, "weapon", 40, 0, 0, 0, 164, 0);
					bossDmg.push(30); ied.push(10); rootAbyssSet += 1;
					weaponEquipImage.src = "images/warrior/01302275.img.info.icon._outlink.png";
					break;
				case "absolabWeapon":
					calculateWeaponStarForce(160, starForceSelect, "weapon", 60, 0, 0, 0, 197, 0);
					bossDmg.push(30); ied.push(10); absolabSet += 1;
					weaponEquipImage.src = "images/warrior/01302333.img.info.icon._outlink.png";
					break;
				case "arcaneWeapon":
					calculateWeaponStarForce(200, starForceSelect, "weapon", 100, 0, 0, 0, 283, 0);
					bossDmg.push(30); ied.push(20); arcaneSet += 1;
					weaponEquipImage.src = "images/warrior/01302343.img.info.icon._outlink.png";
					break;
				case "genesisWeapon":
					calculateWeaponStarForce(200, starForceSelect, "weapon", 150, 0, 0, 0, 326, 0);
					bossDmg.push(30); ied.push(20); genesisWeapon += 1;
					weaponEquipImage.src = "images/warrior/01302355.img.info.icon._outlink.png";
					break;
				default:
					break;
			}
			cStr += weaponAllStat; cDex += weaponAllStat; cInt += weaponAllStat; cLuk += weaponAllStat;
			cDex += weaponJobStat; cStr += weaponJobStat; /* job stats */
			hp += weaponHp; mp += weaponMp; att += weaponAtt; mAtt += weaponMAtt;
			switch (selectedSubweapon) {
				case "princessNoSubweapon":
					calculateSubweaponStarForce(140, 0, "weapon", 18, 0, 1000, 200, 0, 0);
					/* cStr += 18; cDex += 18; hp += 1000; mp += 200; */
					subweaponEquipImage.src = "images/warrior/01098006.img.info.icon._outlink.png";
					break;
				default:
					break;
			}
			switch (selectedEmblem) {
				case "classEmblem":	
				emblemEquipImage.src = "images/warrior/01190801.img.info.icon._outlink.png";
				break;
			}
			break;
		
		case "paladin": /* str/dex */
			classType = "warrior";
			weaponAttackSpeed = 6; weaponMultiplier = 1.34;
			switch (selectedWeapon) { /* 2-h Sword */
				case "fafnirWeapon":
					calculateWeaponStarForce(150, starForceSelect, "weapon", 40, 0, 0, 0, 171, 0);
					bossDmg.push(30); ied.push(10); rootAbyssSet += 1;
					weaponEquipImage.src = "images/warrior/01402196.img.info.icon._outlink.png";
					break;
				case "absolabWeapon":
					calculateWeaponStarForce(160, starForceSelect, "weapon", 60, 0, 0, 0, 205, 0);
					bossDmg.push(30); ied.push(10); absolabSet += 1;
					weaponEquipImage.src = "images/warrior/01402251.img.info.icon._outlink.png";
					break;
				case "arcaneWeapon":
					calculateWeaponStarForce(200, starForceSelect, "weapon", 100, 0, 0, 0, 295, 0);
					bossDmg.push(30); ied.push(20); arcaneSet += 1;
					weaponEquipImage.src = "images/warrior/01402259.img.info.icon._outlink.png";
					break;
				case "genesisWeapon":
					calculateWeaponStarForce(200, starForceSelect, "weapon", 150, 0, 0, 0, 340, 0);
					bossDmg.push(30); ied.push(20); genesisWeapon += 1;
					weaponEquipImage.src = "images/warrior/01402268.img.info.icon._outlink.png";
					break;
				default:
					break;
			}
			cStr += weaponAllStat; cDex += weaponAllStat; cInt += weaponAllStat; cLuk += weaponAllStat;
			cDex += weaponJobStat; cStr += weaponJobStat; /* job stats */
			hp += weaponHp; mp += weaponMp; att += weaponAtt; mAtt += weaponMAtt;
			switch (selectedSubweapon) {
				case "princessNoSubweapon":
					calculateSubweaponStarForce(140, 0, "weapon", 14, 0, 0, 0, 9, 0);
					/* cStr += 14; cDex += 14; att += 9; */
					subweaponEquipImage.src = "images/warrior/01352216.img.info.icon._outlink.png";
					break;
				default:
					break;
			}
			switch (selectedEmblem) {
				case "classEmblem":	
				emblemEquipImage.src = "images/warrior/01190301.img.info.icon._outlink.png";
				break;
			}
			break;
		
		case "shade": /* str/dex */
			classType = "pirate";
			weaponAttackSpeed = 5; weaponMultiplier = 1.7;
			switch (selectedWeapon) { /* Knuckle */
				case "fafnirWeapon":
					calculateWeaponStarForce(150, starForceSelect, "weapon", 40, 0, 0, 0, 128, 0);
					bossDmg.push(30); ied.push(10); rootAbyssSet += 1;
					weaponEquipImage.src = "images/pirate/01482168.img.info.icon._outlink.png";
					break;
				case "absolabWeapon":
					calculateWeaponStarForce(160, starForceSelect, "weapon", 60, 0, 0, 0, 154, 0);
					bossDmg.push(30); ied.push(10); absolabSet += 1;
					weaponEquipImage.src = "images/pirate/01482216.img.info.icon._outlink.png";
					break;
				case "arcaneWeapon":
					calculateWeaponStarForce(200, starForceSelect, "weapon", 100, 0, 0, 0, 221, 0);
					bossDmg.push(30); ied.push(20); arcaneSet += 1;
					weaponEquipImage.src = "images/pirate/01482221.img.info.icon._outlink.png";
					break;
				case "genesisWeapon":
					calculateWeaponStarForce(200, starForceSelect, "weapon", 150, 0, 0, 0, 255, 0);
					bossDmg.push(30); ied.push(20); genesisWeapon += 1;
					weaponEquipImage.src = "images/pirate/01482232.img.info.icon._outlink.png";
					break;
				default:
					break;
			}
			cStr += weaponAllStat; cDex += weaponAllStat; cInt += weaponAllStat; cLuk += weaponAllStat;
			cDex += weaponJobStat; cStr += weaponJobStat; /* job stats */
			hp += weaponHp; mp += weaponMp; att += weaponAtt; mAtt += weaponMAtt;
			switch (selectedSubweapon) {
				case "princessNoSubweapon":
					calculateSubweaponStarForce(140, 0, "weapon", 14, 0, 0, 0, 9, 0);
					/* cStr += 14; cDex += 14; att += 9; */
					subweaponEquipImage.src = "images/pirate/01353105.img.info.icon._outlink.png";
					break;
				default:
					break;
			}
			switch (selectedEmblem) {
				case "classEmblem":	
				emblemEquipImage.src = "images/pirate/01190521.img.info.icon._outlink.png";
				break;
			}
			break;
		
		case "thunderBreaker": /* str/dex */
			classType = "pirate";
			weaponAttackSpeed = 5; weaponMultiplier = 1.7;
			switch (selectedWeapon) { /* Knuckle */
				case "fafnirWeapon":
					calculateWeaponStarForce(150, starForceSelect, "weapon", 40, 0, 0, 0, 128, 0);
					bossDmg.push(30); ied.push(10); rootAbyssSet += 1;
					weaponEquipImage.src = "images/pirate/01482168.img.info.icon._outlink.png";
					break;
				case "absolabWeapon":
					calculateWeaponStarForce(160, starForceSelect, "weapon", 60, 0, 0, 0, 154, 0);
					bossDmg.push(30); ied.push(10); absolabSet += 1;
					weaponEquipImage.src = "images/pirate/01482216.img.info.icon._outlink.png";
					break;
				case "arcaneWeapon":
					calculateWeaponStarForce(200, starForceSelect, "weapon", 100, 0, 0, 0, 221, 0);
					bossDmg.push(30); ied.push(20); arcaneSet += 1;
					weaponEquipImage.src = "images/pirate/01482221.img.info.icon._outlink.png";
					break;
				case "genesisWeapon":
					calculateWeaponStarForce(200, starForceSelect, "weapon", 150, 0, 0, 0, 255, 0);
					bossDmg.push(30); ied.push(20); genesisWeapon += 1;
					weaponEquipImage.src = "images/pirate/01482232.img.info.icon._outlink.png";
					break;
				default:
					break;
			}
			cStr += weaponAllStat; cDex += weaponAllStat; cInt += weaponAllStat; cLuk += weaponAllStat;
			cDex += weaponJobStat; cStr += weaponJobStat; /* job stats */
			hp += weaponHp; mp += weaponMp; att += weaponAtt; mAtt += weaponMAtt;
			switch (selectedSubweapon) {
				case "princessNoSubweapon":
					calculateSubweaponStarForce(140, 0, "weapon", 0, 14, 0, 0, 9, 0);
					/* cStr += 14; cDex += 14; cInt += 14; cLuk += 14; att += 9; */
					subweaponEquipImage.src = "images/pirate/01352975.img.info.icon._outlink.png";
					break;
				default:
					break;
			}
			switch (selectedEmblem) {
				case "classEmblem":	
				emblemEquipImage.src = "images/pirate/01190801.img.info.icon._outlink.png";
				break;
			}
			break;
		
		case "angelicBuster": /* dex/str */
			classType = "pirate";
			weaponAttackSpeed = 5; weaponMultiplier = 1.7;
			switch (selectedWeapon) { /* Soul Shooter */
				case "fafnirWeapon":
					calculateWeaponStarForce(150, starForceSelect, "weapon", 40, 0, 0, 0, 128, 0);
					bossDmg.push(30); ied.push(10); rootAbyssSet += 1;
					weaponEquipImage.src = "images/pirate/01222058.img.info.icon._outlink.png";
					break;
				case "absolabWeapon":
					calculateWeaponStarForce(160, starForceSelect, "weapon", 60, 0, 0, 0, 154, 0);
					bossDmg.push(30); ied.push(10); absolabSet += 1;
					weaponEquipImage.src = "images/pirate/01222114.img.info.icon._outlink.png";
					break;
				case "arcaneWeapon":
					calculateWeaponStarForce(200, starForceSelect, "weapon", 100, 0, 0, 0, 221, 0);
					bossDmg.push(30); ied.push(20); arcaneSet += 1;
					weaponEquipImage.src = "images/pirate/01222113.img.info.icon._outlink.png";
					break;
				case "genesisWeapon":
					calculateWeaponStarForce(200, starForceSelect, "weapon", 150, 0, 0, 0, 255, 0);
					bossDmg.push(30); ied.push(20); genesisWeapon += 1;
					weaponEquipImage.src = "images/pirate/01222122.img.info.icon._outlink.png";
					break;
				default:
					break;
			}
			cStr += weaponAllStat; cDex += weaponAllStat; cInt += weaponAllStat; cLuk += weaponAllStat;
			cDex += weaponJobStat; cStr += weaponJobStat; /* job stats */
			hp += weaponHp; mp += weaponMp; att += weaponAtt; mAtt += weaponMAtt;
			switch (selectedSubweapon) {
				case "princessNoSubweapon":
					calculateSubweaponStarForce(140, 0, "weapon", 0, 14, 0, 0, 0, 0);
					/* cStr += 14; cDex += 14; cInt += 14; cLuk += 14; */
					subweaponEquipImage.src = "images/pirate/01352606.img.info.icon._outlink.png";
					break;
				default:
					break;
			}
			switch (selectedEmblem) {
				case "classEmblem":	
				emblemEquipImage.src = "images/pirate/01190101.img.info.icon._outlink.png";
				break;
			}
			break;
		
		case "bowmaster": /* dex/str */
			classType = "bowman";
			weaponAttackSpeed = 6; weaponMultiplier = 1.3;
			switch (selectedWeapon) { /* Bow */
				case "fafnirWeapon":
					calculateWeaponStarForce(150, starForceSelect, "weapon", 40, 0, 0, 0, 160, 0);
					bossDmg.push(30); ied.push(10); rootAbyssSet += 1;
					weaponEquipImage.src = "images/bowman/01452205.img.info.icon._outlink.png";
					break;
				case "absolabWeapon":
					calculateWeaponStarForce(160, starForceSelect, "weapon", 60, 0, 0, 0, 192, 0);
					bossDmg.push(30); ied.push(10); absolabSet += 1;
					weaponEquipImage.src = "images/bowman/01452252.img.info.icon._outlink.png";
					break;
				case "arcaneWeapon":
					calculateWeaponStarForce(200, starForceSelect, "weapon", 100, 0, 0, 0, 276, 0);
					bossDmg.push(30); ied.push(20); arcaneSet += 1;
					weaponEquipImage.src = "images/bowman/01452257.img.info.icon._outlink.png";
					break;
				case "genesisWeapon":
					calculateWeaponStarForce(200, starForceSelect, "weapon", 150, 0, 0, 0, 318, 0);
					bossDmg.push(30); ied.push(20); genesisWeapon += 1;
					weaponEquipImage.src = "images/bowman/01452266.img.info.icon._outlink.png";
					break;
				default:
					break;
			}
			cStr += weaponAllStat; cDex += weaponAllStat; cInt += weaponAllStat; cLuk += weaponAllStat;
			cDex += weaponJobStat; cStr += weaponJobStat; /* job stats */
			hp += weaponHp; mp += weaponMp; att += weaponAtt; mAtt += weaponMAtt;
			switch (selectedSubweapon) {
				case "princessNoSubweapon":
					calculateSubweaponStarForce(140, 0, "weapon", 14, 0, 0, 0, 9, 0);
					/* cStr += 14; cDex += 14; att += 9; */
					subweaponEquipImage.src = "images/bowman/01352266.img.info.icon._outlink.png";
					break;
				default:
					break;
			}
			switch (selectedEmblem) {
				case "classEmblem":	
				emblemEquipImage.src = "images/bowman/01190301.img.info.icon._outlink.png";
				break;
			}
			break;
			
		case "corsair": /* dex/str */
			classType = "pirate";
			weaponAttackSpeed = 5; weaponMultiplier = 1.5;
			switch (selectedWeapon) { /* Gun */
				case "fafnirWeapon":
					calculateWeaponStarForce(150, starForceSelect, "weapon", 40, 0, 0, 0, 125, 0);
					bossDmg.push(30); ied.push(10); rootAbyssSet += 1;
					weaponEquipImage.src = "images/pirate/01492179.img.info.icon._outlink.png";
					break;
				case "absolabWeapon":
					calculateWeaponStarForce(160, starForceSelect, "weapon", 60, 0, 0, 0, 150, 0);
					bossDmg.push(30); ied.push(10); absolabSet += 1;
					weaponEquipImage.src = "images/pirate/01492231.img.info.icon._outlink.png";
					break;
				case "arcaneWeapon":
					calculateWeaponStarForce(200, starForceSelect, "weapon", 100, 0, 0, 0, 216, 0);
					bossDmg.push(30); ied.push(20); arcaneSet += 1;
					weaponEquipImage.src = "images/pirate/01492235.img.info.icon._outlink.png";
					break;
				case "genesisWeapon":
					calculateWeaponStarForce(200, starForceSelect, "weapon", 150, 0, 0, 0, 249, 0);
					bossDmg.push(30); ied.push(20); genesisWeapon += 1;
					weaponEquipImage.src = "images/pirate/01492245.img.info.icon._outlink.png";
					break;
				default:
					break;
			}
			cStr += weaponAllStat; cDex += weaponAllStat; cInt += weaponAllStat; cLuk += weaponAllStat;
			cDex += weaponJobStat; cStr += weaponJobStat; /* job stats */
			hp += weaponHp; mp += weaponMp; att += weaponAtt; mAtt += weaponMAtt;
			switch (selectedSubweapon) {
				case "princessNoSubweapon":
					calculateSubweaponStarForce(140, 0, "weapon", 14, 0, 0, 0, 9, 0);
					/* cStr += 14; cDex += 14; att += 9; */
					subweaponEquipImage.src = "images/pirate/01352916.img.info.icon._outlink.png";
					break;
				default:
					break;
			}
			switch (selectedEmblem) {
				case "classEmblem":	
				emblemEquipImage.src = "images/pirate/01190301.img.info.icon._outlink.png";
				break;
			}
			break;
		
		case "kain": /* dex/str */
			classType = "bowman";
			weaponAttackSpeed = 4; weaponMultiplier = 1.3;
			switch (selectedWeapon) { /* Whispershot */
				case "fafnirWeapon":
					calculateWeaponStarForce(150, starForceSelect, "weapon", 40, 0, 0, 0, 160, 0);
					bossDmg.push(30); ied.push(10); rootAbyssSet += 1;
					weaponEquipImage.src = "images/bowman/01214016.img.info.icon._outlink.png";
					break;
				case "absolabWeapon":
					calculateWeaponStarForce(160, starForceSelect, "weapon", 60, 0, 0, 0, 192, 0);
					bossDmg.push(30); ied.push(10); absolabSet += 1;
					weaponEquipImage.src = "images/bowman/01214017.img.info.icon._outlink.png";
					break;
				case "arcaneWeapon":
					calculateWeaponStarForce(200, starForceSelect, "weapon", 100, 0, 0, 0, 276, 0);
					bossDmg.push(30); ied.push(20); arcaneSet += 1;
					weaponEquipImage.src = "images/bowman/01214018.img.info.icon._outlink.png";
					break;
				case "genesisWeapon":
					calculateWeaponStarForce(200, starForceSelect, "weapon", 150, 0, 0, 0, 318, 0);
					bossDmg.push(30); ied.push(20); genesisWeapon += 1;
					weaponEquipImage.src = "images/bowman/01214022.img.info.icon._outlink.png";
					break;
				default:
					break;
			}
			cStr += weaponAllStat; cDex += weaponAllStat; cInt += weaponAllStat; cLuk += weaponAllStat;
			cDex += weaponJobStat; cStr += weaponJobStat; /* job stats */
			hp += weaponHp; mp += weaponMp; att += weaponAtt; mAtt += weaponMAtt;
			switch (selectedSubweapon) {
				case "princessNoSubweapon":
					calculateSubweaponStarForce(140, 0, "weapon", 14, 0, 0, 0, 9, 0);
					/* cStr += 14; cDex += 14; att += 9; */
					subweaponEquipImage.src = "images/bowman/01354017.img.info.icon._outlink.png";
					break;
				default:
					break;
			}
			switch (selectedEmblem) {
				case "classEmblem":	
				emblemEquipImage.src = "images/bowman/01190554.img.info.icon._outlink.png";
				break;
			}
			break;
		
		case "marksman": /* dex/str */
			classType = "bowman";
			weaponAttackSpeed = 6; weaponMultiplier = 1.35;
			switch (selectedWeapon) { /* Crossbow */
				case "fafnirWeapon":
					calculateWeaponStarForce(150, starForceSelect, "weapon", 40, 0, 0, 0, 164, 0);
					bossDmg.push(30); ied.push(10); rootAbyssSet += 1;
					weaponEquipImage.src = "images/bowman/01462193.img.info.icon._outlink.png";
					break;
				case "absolabWeapon":
					calculateWeaponStarForce(160, starForceSelect, "weapon", 60, 0, 0, 0, 197, 0);
					bossDmg.push(30); ied.push(10); absolabSet += 1;
					weaponEquipImage.src = "images/bowman/01462239.img.info.icon._outlink.png";
					break;
				case "arcaneWeapon":
					calculateWeaponStarForce(200, starForceSelect, "weapon", 100, 0, 0, 0, 283, 0);
					bossDmg.push(30); ied.push(20); arcaneSet += 1;
					weaponEquipImage.src = "images/bowman/01462243.img.info.icon._outlink.png";
					break;
				case "genesisWeapon":
					calculateWeaponStarForce(200, starForceSelect, "weapon", 150, 0, 0, 0, 326, 0);
					bossDmg.push(30); ied.push(20); genesisWeapon += 1;
					weaponEquipImage.src = "images/bowman/01462252.img.info.icon._outlink.png";
					break;
				default:
					break;
			}
			cStr += weaponAllStat; cDex += weaponAllStat; cInt += weaponAllStat; cLuk += weaponAllStat;
			cDex += weaponJobStat; cStr += weaponJobStat; /* job stats */
			hp += weaponHp; mp += weaponMp; att += weaponAtt; mAtt += weaponMAtt;
			switch (selectedSubweapon) {
				case "princessNoSubweapon":
					calculateSubweaponStarForce(140, 0, "weapon", 14, 0, 0, 0, 9, 0);
					/* cStr += 14; cDex += 14; att += 9; */
					subweaponEquipImage.src = "images/bowman/01352276.img.info.icon._outlink.png";
					break;
				default:
					break;
			}
			switch (selectedEmblem) {
				case "classEmblem":	
				emblemEquipImage.src = "images/bowman/01190301.img.info.icon._outlink.png";
				break;
			}
			break;
			
		case "mechanic": /* dex/str */
			classType = "pirate";
			weaponAttackSpeed = 5; weaponMultiplier = 1.5;
			switch (selectedWeapon) { /* Gun */
				case "fafnirWeapon":
					calculateWeaponStarForce(150, starForceSelect, "weapon", 40, 0, 0, 0, 125, 0);
					bossDmg.push(30); ied.push(10); rootAbyssSet += 1;
					weaponEquipImage.src = "images/pirate/01492179.img.info.icon._outlink.png";
					break;
				case "absolabWeapon":
					calculateWeaponStarForce(160, starForceSelect, "weapon", 60, 0, 0, 0, 150, 0);
					bossDmg.push(30); ied.push(10); absolabSet += 1;
					weaponEquipImage.src = "images/pirate/01492231.img.info.icon._outlink.png";
					break;
				case "arcaneWeapon":
					calculateWeaponStarForce(200, starForceSelect, "weapon", 100, 0, 0, 0, 216, 0);
					bossDmg.push(30); ied.push(20); arcaneSet += 1;
					weaponEquipImage.src = "images/pirate/01492235.img.info.icon._outlink.png";
					break;
				case "genesisWeapon":
					calculateWeaponStarForce(200, starForceSelect, "weapon", 150, 0, 0, 0, 249, 0);
					bossDmg.push(30); ied.push(20); genesisWeapon += 1;
					weaponEquipImage.src = "images/pirate/01492245.img.info.icon._outlink.png";
					break;
				default:
					break;
			}
			cStr += weaponAllStat; cDex += weaponAllStat; cInt += weaponAllStat; cLuk += weaponAllStat;
			cDex += weaponJobStat; cStr += weaponJobStat; /* job stats */
			hp += weaponHp; mp += weaponMp; att += weaponAtt; mAtt += weaponMAtt;
			switch (selectedSubweapon) {
				case "princessNoSubweapon":
					calculateSubweaponStarForce(140, 0, "weapon", 14, 0, 0, 0, 0, 0);
					/* cStr += 14; cDex += 14; */
					subweaponEquipImage.src = "images/pirate/01352707.img.info.icon._outlink.png";
					break;
				default:
					break;
			}
			switch (selectedEmblem) {
				case "classEmblem":	
				emblemEquipImage.src = "images/pirate/01190601.img.info.icon._outlink.png";
				break;
			}
			break;
		
		case "mercedes": /* dex/str */
			classType = "bowman";
			weaponAttackSpeed = 6; weaponMultiplier = 1.3;
			switch (selectedWeapon) { /* Dual Bowguns */
				case "fafnirWeapon":
					calculateWeaponStarForce(150, starForceSelect, "weapon", 40, 0, 0, 0, 160, 0);
					bossDmg.push(30); ied.push(10); rootAbyssSet += 1;
					weaponEquipImage.src = "images/bowman/01522094.img.info.icon._outlink.png";
					break;
				case "absolabWeapon":
					calculateWeaponStarForce(160, starForceSelect, "weapon", 60, 0, 0, 0, 192, 0);
					bossDmg.push(30); ied.push(10); absolabSet += 1;
					weaponEquipImage.src = "images/bowman/01522138.img.info.icon._outlink.png";
					break;
				case "arcaneWeapon":
					calculateWeaponStarForce(200, starForceSelect, "weapon", 100, 0, 0, 0, 276, 0);
					bossDmg.push(30); ied.push(20); arcaneSet += 1;
					weaponEquipImage.src = "images/bowman/01522143.img.info.icon._outlink.png";
					break;
				case "genesisWeapon":
					calculateWeaponStarForce(200, starForceSelect, "weapon", 150, 0, 0, 0, 318, 0);
					bossDmg.push(30); ied.push(20); genesisWeapon += 1;
					weaponEquipImage.src = "images/bowman/01522152.img.info.icon._outlink.png";
					break;
				default:
					break;
			}
			cStr += weaponAllStat; cDex += weaponAllStat; cInt += weaponAllStat; cLuk += weaponAllStat;
			cDex += weaponJobStat; cStr += weaponJobStat; /* job stats */
			hp += weaponHp; mp += weaponMp; att += weaponAtt; mAtt += weaponMAtt;
			switch (selectedSubweapon) {
				case "princessNoSubweapon":
					calculateSubweaponStarForce(140, 0, "weapon", 14, 0, 0, 0, 0, 0);
					/* cStr += 14; cDex += 14; */
					subweaponEquipImage.src = "images/bowman/01352009.img.info.icon._outlink.png";
					break;
				default:
					break;
			}
			switch (selectedEmblem) {
				case "classEmblem":	
				emblemEquipImage.src = "images/bowman/01190511.img.info.icon._outlink.png";
				break;
			}
			break;
		
		case "pathfinder": /* dex/str */
			classType = "bowman";
			weaponAttackSpeed = 6; weaponMultiplier = 1.3;
			switch (selectedWeapon) { /* Bow */
				case "fafnirWeapon":
					calculateWeaponStarForce(150, starForceSelect, "weapon", 40, 0, 0, 0, 160, 0);
					bossDmg.push(30); ied.push(10); rootAbyssSet += 1;
					weaponEquipImage.src = "images/bowman/01452205.img.info.icon._outlink.png";
					break;
				case "absolabWeapon":
					calculateWeaponStarForce(160, starForceSelect, "weapon", 60, 0, 0, 0, 192, 0);
					bossDmg.push(30); ied.push(10); absolabSet += 1;
					weaponEquipImage.src = "images/bowman/01452252.img.info.icon._outlink.png";
					break;
				case "arcaneWeapon":
					calculateWeaponStarForce(200, starForceSelect, "weapon", 100, 0, 0, 0, 276, 0);
					bossDmg.push(30); ied.push(20); arcaneSet += 1;
					weaponEquipImage.src = "images/bowman/01452257.img.info.icon._outlink.png";
					break;
				case "genesisWeapon":
					calculateWeaponStarForce(200, starForceSelect, "weapon", 150, 0, 0, 0, 318, 0);
					bossDmg.push(30); ied.push(20); genesisWeapon += 1;
					weaponEquipImage.src = "images/bowman/01452266.img.info.icon._outlink.png";
					break;
				default:
					break;
			}
			cStr += weaponAllStat; cDex += weaponAllStat; cInt += weaponAllStat; cLuk += weaponAllStat;
			cDex += weaponJobStat; cStr += weaponJobStat; /* job stats */
			hp += weaponHp; mp += weaponMp; att += weaponAtt; mAtt += weaponMAtt;
			switch (selectedSubweapon) {
				case "princessNoSubweapon":
					calculateSubweaponStarForce(140, 0, "weapon", 14, 0, 0, 0, 9, 0);
					/* cStr += 14; cDex += 14; att += 9; */
					subweaponEquipImage.src = "images/bowman/01353707.img.info.icon._outlink.png";
					break;
				default:
					break;
			}
			switch (selectedEmblem) {
				case "classEmblem":	
				emblemEquipImage.src = "images/bowman/01190301.img.info.icon._outlink.png";
				break;
			}
			break;
		
		case "wildHunter": /* dex/str */
			classType = "bowman";
			weaponAttackSpeed = 6; weaponMultiplier = 1.35;
			switch (selectedWeapon) { /* Crossbow */
				case "fafnirWeapon":
					calculateWeaponStarForce(150, starForceSelect, "weapon", 40, 0, 0, 0, 164, 0);
					bossDmg.push(30); ied.push(10); rootAbyssSet += 1;
					weaponEquipImage.src = "images/bowman/01462193.img.info.icon._outlink.png";
					break;
				case "absolabWeapon":
					calculateWeaponStarForce(160, starForceSelect, "weapon", 60, 0, 0, 0, 197, 0);
					bossDmg.push(30); ied.push(10); absolabSet += 1;
					weaponEquipImage.src = "images/bowman/01462239.img.info.icon._outlink.png";
					break;
				case "arcaneWeapon":
					calculateWeaponStarForce(200, starForceSelect, "weapon", 100, 0, 0, 0, 283, 0);
					bossDmg.push(30); ied.push(20); arcaneSet += 1;
					weaponEquipImage.src = "images/bowman/01462243.img.info.icon._outlink.png";
					break;
				case "genesisWeapon":
					calculateWeaponStarForce(200, starForceSelect, "weapon", 150, 0, 0, 0, 326, 0);
					bossDmg.push(30); ied.push(20); genesisWeapon += 1;
					weaponEquipImage.src = "images/bowman/01462252.img.info.icon._outlink.png";
					break;
				default:
					break;
			}
			cStr += weaponAllStat; cDex += weaponAllStat; cInt += weaponAllStat; cLuk += weaponAllStat;
			cDex += weaponJobStat; cStr += weaponJobStat; /* job stats */
			hp += weaponHp; mp += weaponMp; att += weaponAtt; mAtt += weaponMAtt;
			switch (selectedSubweapon) {
				case "princessNoSubweapon":
					calculateSubweaponStarForce(140, 0, "weapon", 14, 0, 0, 0, 9, 0);
					/* cStr += 14; cDex += 14; att += 9; */
					subweaponEquipImage.src = "images/bowman/01352967.img.info.icon._outlink.png";
					break;
				default:
					break;
			}
			switch (selectedEmblem) {
				case "classEmblem":	
				emblemEquipImage.src = "images/bowman/01190601.img.info.icon._outlink.png";
				break;
			}
			break;
			
		case "windArcher": /* dex/str */
			classType = "bowman";
			weaponAttackSpeed = 6; weaponMultiplier = 1.3;
			switch (selectedWeapon) { /* Bow */
				case "fafnirWeapon":
					calculateWeaponStarForce(150, starForceSelect, "weapon", 40, 0, 0, 0, 160, 0);
					bossDmg.push(30); ied.push(10); rootAbyssSet += 1;
					weaponEquipImage.src = "images/bowman/01452205.img.info.icon._outlink.png";
					break;
				case "absolabWeapon":
					calculateWeaponStarForce(160, starForceSelect, "weapon", 60, 0, 0, 0, 192, 0);
					bossDmg.push(30); ied.push(10); absolabSet += 1;
					weaponEquipImage.src = "images/bowman/01452252.img.info.icon._outlink.png";
					break;
				case "arcaneWeapon":
					calculateWeaponStarForce(200, starForceSelect, "weapon", 100, 0, 0, 0, 276, 0);
					bossDmg.push(30); ied.push(20); arcaneSet += 1;
					weaponEquipImage.src = "images/bowman/01452257.img.info.icon._outlink.png";
					break;
				case "genesisWeapon":
					calculateWeaponStarForce(200, starForceSelect, "weapon", 150, 0, 0, 0, 318, 0);
					bossDmg.push(30); ied.push(20); genesisWeapon += 1;
					weaponEquipImage.src = "images/bowman/01452266.img.info.icon._outlink.png";
					break;
				default:
					break;
			}
			cStr += weaponAllStat; cDex += weaponAllStat; cInt += weaponAllStat; cLuk += weaponAllStat;
			cDex += weaponJobStat; cStr += weaponJobStat; /* job stats */
			hp += weaponHp; mp += weaponMp; att += weaponAtt; mAtt += weaponMAtt;
			switch (selectedSubweapon) {
				case "princessNoSubweapon":
					calculateSubweaponStarForce(140, 0, "weapon", 0, 14, 0, 0, 9, 9);
					/* cStr += 14; cDex += 14; cInt += 14; cLuk += 14; att += 9; mAtt += 9; */
					subweaponEquipImage.src = "images/bowman/01352975.img.info.icon._outlink.png";
					break;
				default:
					break;
			}
			switch (selectedEmblem) {
				case "classEmblem":	
				emblemEquipImage.src = "images/bowman/01190801.img.info.icon._outlink.png";
				break;
			}
			break;
			
		case "archMageIceLightning": /* int/luk */
			classType = "magician";
			weaponAttackSpeed = 6; /* 8 mage override */ weaponMultiplier = 1.2;
			switch (selectedWeapon) { /* Staff */
				case "fafnirWeapon":
					calculateWeaponStarForce(150, starForceSelect, "weapon", 40, 0, 0, 0, 126, 204);
					bossDmg.push(30); ied.push(10); rootAbyssSet += 1;
					weaponEquipImage.src = "images/magician/01382208.img.info.icon._outlink.png";
					break;
				case "absolabWeapon":
					calculateWeaponStarForce(160, starForceSelect, "weapon", 60, 0, 0, 0, 151, 245);
					bossDmg.push(30); ied.push(10); absolabSet += 1;
					weaponEquipImage.src = "images/magician/01382259.img.info.icon._outlink.png";
					break;
				case "arcaneWeapon":
					calculateWeaponStarForce(200, starForceSelect, "weapon", 100, 0, 0, 0, 218, 353);
					bossDmg.push(30); ied.push(20); arcaneSet += 1;
					weaponEquipImage.src = "images/magician/01382265.img.info.icon._outlink.png";
					break;
				case "genesisWeapon":
					calculateWeaponStarForce(200, starForceSelect, "weapon", 150, 0, 0, 0, 251, 406);
					bossDmg.push(30); ied.push(20); genesisWeapon += 1;
					weaponEquipImage.src = "images/magician/01382274.img.info.icon._outlink.png";
					break;
				default:
					break;
			}
			cStr += weaponAllStat; cDex += weaponAllStat; cInt += weaponAllStat; cLuk += weaponAllStat;
			cInt += weaponJobStat; cLuk += weaponJobStat; /* job stats */
			hp += weaponHp; mp += weaponMp; att += weaponAtt; mAtt += weaponMAtt;
			switch (selectedSubweapon) {
				case "princessNoSubweapon":
					calculateSubweaponStarForce(140, 0, "weapon", 14, 0, 0, 0, 0, 9);
					/* cInt += 14; cLuk += 14; mAtt += 9; */
					subweaponEquipImage.src = "images/magician/01352246.img.info.icon._outlink.png";
					break;
				case "deimosMageShield":
					cInt += subweaponJobStat; cLuk += subweaponJobStat;
					cStr += subweaponAllStat; cDex += subweaponAllStat; cInt += subweaponAllStat; cLuk += subweaponAllStat;
					att += subweaponAtt; mAtt += subweaponMAtt;
					subweaponEquipImage.src = "images/magician/01352256.img.info.icon._outlink.png";
					break;
				default:
					break;
			}
			switch (selectedEmblem) {
				case "classEmblem":	
				emblemEquipImage.src = "images/magician/01190301.img.info.icon._outlink.png";
				break;
			}
			break;
			
		case "archMageFirePoison": /* int/luk */
			classType = "magician";
			weaponAttackSpeed = 6; /* 8 mage override */ weaponMultiplier = 1.2;
			switch (selectedWeapon) { /* Staff */
				case "fafnirWeapon":
					calculateWeaponStarForce(150, starForceSelect, "weapon", 40, 0, 0, 0, 126, 204);
					bossDmg.push(30); ied.push(10); rootAbyssSet += 1;
					weaponEquipImage.src = "images/magician/01382208.img.info.icon._outlink.png";
					break;
				case "absolabWeapon":
					calculateWeaponStarForce(160, starForceSelect, "weapon", 60, 0, 0, 0, 151, 245);
					bossDmg.push(30); ied.push(10); absolabSet += 1;
					weaponEquipImage.src = "images/magician/01382259.img.info.icon._outlink.png";
					break;
				case "arcaneWeapon":
					calculateWeaponStarForce(200, starForceSelect, "weapon", 100, 0, 0, 0, 218, 353);
					bossDmg.push(30); ied.push(20); arcaneSet += 1;
					weaponEquipImage.src = "images/magician/01382265.img.info.icon._outlink.png";
					break;
				case "genesisWeapon":
					calculateWeaponStarForce(200, starForceSelect, "weapon", 150, 0, 0, 0, 251, 406);
					bossDmg.push(30); ied.push(20); genesisWeapon += 1;
					weaponEquipImage.src = "images/magician/01382274.img.info.icon._outlink.png";
					break;
				default:
					break;
			}
			cStr += weaponAllStat; cDex += weaponAllStat; cInt += weaponAllStat; cLuk += weaponAllStat;
			cInt += weaponJobStat; cLuk += weaponJobStat; /* job stats */
			hp += weaponHp; mp += weaponMp; att += weaponAtt; mAtt += weaponMAtt;
			switch (selectedSubweapon) {
				case "princessNoSubweapon":
					calculateSubweaponStarForce(140, 0, "weapon", 14, 0, 0, 0, 0, 9);
					/* cInt += 14; cLuk += 14; mAtt += 9; */
					subweaponEquipImage.src = "images/magician/01352236.img.info.icon._outlink.png";
					break;
				case "deimosMageShield":
					cInt += subweaponJobStat; cLuk += subweaponJobStat;
					cStr += subweaponAllStat; cDex += subweaponAllStat; cInt += subweaponAllStat; cLuk += subweaponAllStat;
					att += subweaponAtt; mAtt += subweaponMAtt;
					subweaponEquipImage.src = "images/magician/01352256.img.info.icon._outlink.png";
					break;
				default:
					break;
			}
			switch (selectedEmblem) {
				case "classEmblem":	
				emblemEquipImage.src = "images/magician/01190301.img.info.icon._outlink.png";
				break;
			}
			break;
			
		case "battleMage": /* int/luk */
			classType = "magician";
			weaponAttackSpeed = 6; /* 8 mage override */ weaponMultiplier = 1.2;
			switch (selectedWeapon) { /* Staff */
				case "fafnirWeapon":
					calculateWeaponStarForce(150, starForceSelect, "weapon", 40, 0, 0, 0, 126, 204);
					bossDmg.push(30); ied.push(10); rootAbyssSet += 1;
					weaponEquipImage.src = "images/magician/01382208.img.info.icon._outlink.png";
					break;
				case "absolabWeapon":
					calculateWeaponStarForce(160, starForceSelect, "weapon", 60, 0, 0, 0, 151, 245);
					bossDmg.push(30); ied.push(10); absolabSet += 1;
					weaponEquipImage.src = "images/magician/01382259.img.info.icon._outlink.png";
					break;
				case "arcaneWeapon":
					calculateWeaponStarForce(200, starForceSelect, "weapon", 100, 0, 0, 0, 218, 353);
					bossDmg.push(30); ied.push(20); arcaneSet += 1;
					weaponEquipImage.src = "images/magician/01382265.img.info.icon._outlink.png";
					break;
				case "genesisWeapon":
					calculateWeaponStarForce(200, starForceSelect, "weapon", 150, 0, 0, 0, 251, 406);
					bossDmg.push(30); ied.push(20); genesisWeapon += 1;
					weaponEquipImage.src = "images/magician/01382274.img.info.icon._outlink.png";
					break;
				default:
					break;
			}
			cStr += weaponAllStat; cDex += weaponAllStat; cInt += weaponAllStat; cLuk += weaponAllStat;
			cInt += weaponJobStat; cLuk += weaponJobStat; /* job stats */
			hp += weaponHp; mp += weaponMp; att += weaponAtt; mAtt += weaponMAtt;
			switch (selectedSubweapon) {
				case "princessNoSubweapon":
					calculateSubweaponStarForce(140, 0, "weapon", 14, 0, 0, 0, 0, 9);
					/* cInt += 14; cLuk += 14; mAtt += 9; */
					subweaponEquipImage.src = "images/magician/01352957.img.info.icon._outlink.png";
					break;
				case "deimosMageShield":
					cInt += subweaponJobStat; cLuk += subweaponJobStat;
					cStr += subweaponAllStat; cDex += subweaponAllStat; cInt += subweaponAllStat; cLuk += subweaponAllStat;
					att += subweaponAtt; mAtt += subweaponMAtt;
					subweaponEquipImage.src = "images/magician/01352256.img.info.icon._outlink.png";
					break;
				default:
					break;
			}
			switch (selectedEmblem) {
				case "classEmblem":	
				emblemEquipImage.src = "images/magician/01190601.img.info.icon._outlink.png";
				break;
			}
			break;
			
		case "beastTamer": /* int/luk */
			classType = "magician";
			weaponAttackSpeed = 6; weaponMultiplier = 1.34;
			switch (selectedWeapon) { /* Scepter */
				case "fafnirWeapon":
					calculateWeaponStarForce(150, starForceSelect, "weapon", 40, 0, 0, 0, 119, 201);
					bossDmg.push(30); ied.push(10); rootAbyssSet += 1;
					weaponEquipImage.src = "images/01252103.img.info.icon._outlink.png";
					break;
				case "absolabWeapon":
					calculateWeaponStarForce(160, starForceSelect, "weapon", 60, 0, 0, 0, 143, 241);
					bossDmg.push(30); ied.push(10); absolabSet += 1;
					weaponEquipImage.src = "images/01252104.img.info.icon._outlink.png";
					break;
				case "arcaneWeapon":
					calculateWeaponStarForce(200, starForceSelect, "weapon", 100, 0, 0, 0, 206, 347);
					bossDmg.push(30); ied.push(20); arcaneSet += 1;
					weaponEquipImage.src = "images/01252108.img.info.icon._outlink.png";
					break;
				case "genesisWeapon":
					calculateWeaponStarForce(200, starForceSelect, "weapon", 150, 0, 0, 0, 237, 400);
					bossDmg.push(30); ied.push(20); genesisWeapon += 1;
					weaponEquipImage.src = "images/01252106.img.info.icon._outlink.png";
					break;
				default:
					break;
			}
			cStr += weaponAllStat; cDex += weaponAllStat; cInt += weaponAllStat; cLuk += weaponAllStat;
			cInt += weaponJobStat; cLuk += weaponJobStat; /* job stats */
			hp += weaponHp; mp += weaponMp; att += weaponAtt; mAtt += weaponMAtt;
			switch (selectedSubweapon) {
				case "princessNoSubweapon":
					calculateSubweaponStarForce(140, 0, "weapon", 17, 0, 0, 0, 0, 9);
					/* cInt += 17; cLuk += 17; mAtt += 9; */
					subweaponEquipImage.src = "images/01352815.img.info.icon._outlink.png";
					break;
				case "deimosMageShield":
					cInt += subweaponJobStat; cLuk += subweaponJobStat;
					cStr += subweaponAllStat; cDex += subweaponAllStat; cInt += subweaponAllStat; cLuk += subweaponAllStat;
					att += subweaponAtt; mAtt += subweaponMAtt;
					subweaponEquipImage.src = "images/01092089.img.info.icon._outlink.png";
					break;
				default:
					break;
			}
			switch (selectedEmblem) {
				case "classEmblem":	
				emblemEquipImage.src = "images/01191109.img.info.icon._outlink.png";
				break;
			}
			break;
			
		case "bishop": /* int/luk */
			classType = "magician";
			weaponAttackSpeed = 6; /* 8 mage override */ weaponMultiplier = 1.2;
			switch (selectedWeapon) { /* Staff */
				case "fafnirWeapon":
					calculateWeaponStarForce(150, starForceSelect, "weapon", 40, 0, 0, 0, 126, 204);
					bossDmg.push(30); ied.push(10); rootAbyssSet += 1;
					weaponEquipImage.src = "images/magician/01382208.img.info.icon._outlink.png";
					break;
				case "absolabWeapon":
					calculateWeaponStarForce(160, starForceSelect, "weapon", 60, 0, 0, 0, 151, 245);
					bossDmg.push(30); ied.push(10); absolabSet += 1;
					weaponEquipImage.src = "images/magician/01382259.img.info.icon._outlink.png";
					break;
				case "arcaneWeapon":
					calculateWeaponStarForce(200, starForceSelect, "weapon", 100, 0, 0, 0, 218, 353);
					bossDmg.push(30); ied.push(20); arcaneSet += 1;
					weaponEquipImage.src = "images/magician/01382265.img.info.icon._outlink.png";
					break;
				case "genesisWeapon":
					calculateWeaponStarForce(200, starForceSelect, "weapon", 150, 0, 0, 0, 251, 406);
					bossDmg.push(30); ied.push(20); genesisWeapon += 1;
					weaponEquipImage.src = "images/magician/01382274.img.info.icon._outlink.png";
					break;
				default:
					break;
			}
			cStr += weaponAllStat; cDex += weaponAllStat; cInt += weaponAllStat; cLuk += weaponAllStat;
			cInt += weaponJobStat; cLuk += weaponJobStat; /* job stats */
			hp += weaponHp; mp += weaponMp; att += weaponAtt; mAtt += weaponMAtt;
			switch (selectedSubweapon) {
				case "princessNoSubweapon":
					calculateSubweaponStarForce(140, 0, "weapon", 14, 0, 0, 0, 0, 9);
					/* cInt += 14; cLuk += 14; mAtt += 9; */
					subweaponEquipImage.src = "images/magician/01352256.img.info.icon._outlink.png";
					break;
				case "deimosMageShield":
					cInt += subweaponJobStat; cLuk += subweaponJobStat;
					cStr += subweaponAllStat; cDex += subweaponAllStat; cInt += subweaponAllStat; cLuk += subweaponAllStat;
					att += subweaponAtt; mAtt += subweaponMAtt;
					subweaponEquipImage.src = "images/magician/01352256.img.info.icon._outlink.png";
					break;
				default:
					break;
			}
			switch (selectedEmblem) {
				case "classEmblem":	
				emblemEquipImage.src = "images/magician/01190301.img.info.icon._outlink.png";
				break;
			}
			break;
			
		case "blazeWizard": /* int/luk */
			classType = "magician";
			weaponAttackSpeed = 6; /* 8 mage override */ weaponMultiplier = 1.2;
			switch (selectedWeapon) { /* Staff */
				case "fafnirWeapon":
					calculateWeaponStarForce(150, starForceSelect, "weapon", 40, 0, 0, 0, 126, 204);
					bossDmg.push(30); ied.push(10); rootAbyssSet += 1;
					weaponEquipImage.src = "images/magician/01382208.img.info.icon._outlink.png";
					break;
				case "absolabWeapon":
					calculateWeaponStarForce(160, starForceSelect, "weapon", 60, 0, 0, 0, 151, 245);
					bossDmg.push(30); ied.push(10); absolabSet += 1;
					weaponEquipImage.src = "images/magician/01382259.img.info.icon._outlink.png";
					break;
				case "arcaneWeapon":
					calculateWeaponStarForce(200, starForceSelect, "weapon", 100, 0, 0, 0, 218, 353);
					bossDmg.push(30); ied.push(20); arcaneSet += 1;
					weaponEquipImage.src = "images/magician/01382265.img.info.icon._outlink.png";
					break;
				case "genesisWeapon":
					calculateWeaponStarForce(200, starForceSelect, "weapon", 150, 0, 0, 0, 251, 406);
					bossDmg.push(30); ied.push(20); genesisWeapon += 1;
					weaponEquipImage.src = "images/magician/01382274.img.info.icon._outlink.png";
					break;
				default:
					break;
			}
			cStr += weaponAllStat; cDex += weaponAllStat; cInt += weaponAllStat; cLuk += weaponAllStat;
			cInt += weaponJobStat; cLuk += weaponJobStat; /* job stats */
			hp += weaponHp; mp += weaponMp; att += weaponAtt; mAtt += weaponMAtt;
			switch (selectedSubweapon) {
				case "princessNoSubweapon":
					calculateSubweaponStarForce(140, 0, "weapon", 0, 14, 0, 0, 9, 9);
					/* cStr += 14; cDex += 14; cInt += 14; cLuk += 14; att += 9; mAtt += 9; */
					subweaponEquipImage.src = "images/magician/01352975.img.info.icon._outlink.png";
					break;
				case "deimosMageShield":
					cInt += subweaponJobStat; cLuk += subweaponJobStat;
					cStr += subweaponAllStat; cDex += subweaponAllStat; cInt += subweaponAllStat; cLuk += subweaponAllStat;
					att += subweaponAtt; mAtt += subweaponMAtt;
					subweaponEquipImage.src = "images/magician/01092089.img.info.icon._outlink.png";
					break;
				default:
					break;
			}
			switch (selectedEmblem) {
				case "classEmblem":	
				emblemEquipImage.src = "images/magician/01190801.img.info.icon._outlink.png";
				break;
			}
			break;
			
		case "evan": /* int/luk */
			classType = "magician";
			weaponAttackSpeed = 6; /* 8 mage override */ weaponMultiplier = 1.2;
			switch (selectedWeapon) { /* Staff */
				case "fafnirWeapon":
					calculateWeaponStarForce(150, starForceSelect, "weapon", 40, 0, 0, 0, 126, 204);
					bossDmg.push(30); ied.push(10); rootAbyssSet += 1;
					weaponEquipImage.src = "images/magician/01382208.img.info.icon._outlink.png";
					break;
				case "absolabWeapon":
					calculateWeaponStarForce(160, starForceSelect, "weapon", 60, 0, 0, 0, 151, 245);
					bossDmg.push(30); ied.push(10); absolabSet += 1;
					weaponEquipImage.src = "images/magician/01382259.img.info.icon._outlink.png";
					break;
				case "arcaneWeapon":
					calculateWeaponStarForce(200, starForceSelect, "weapon", 100, 0, 0, 0, 218, 353);
					bossDmg.push(30); ied.push(20); arcaneSet += 1;
					weaponEquipImage.src = "images/magician/01382265.img.info.icon._outlink.png";
					break;
				case "genesisWeapon":
					calculateWeaponStarForce(200, starForceSelect, "weapon", 150, 0, 0, 0, 251, 406);
					bossDmg.push(30); ied.push(20); genesisWeapon += 1;
					weaponEquipImage.src = "images/magician/01382274.img.info.icon._outlink.png";
					break;
				default:
					break;
			}
			cStr += weaponAllStat; cDex += weaponAllStat; cInt += weaponAllStat; cLuk += weaponAllStat;
			cInt += weaponJobStat; cLuk += weaponJobStat; /* job stats */
			hp += weaponHp; mp += weaponMp; att += weaponAtt; mAtt += weaponMAtt;
			switch (selectedSubweapon) {
				case "princessNoSubweapon":
					calculateSubweaponStarForce(140, 0, "weapon", 14, 0, 0, 0, 0, 9);
					/* cInt += 14; cLuk += 14; mAtt += 9; */
					subweaponEquipImage.src = "images/magician/01352945.img.info.icon._outlink.png";
					break;
				case "deimosMageShield":
					cInt += subweaponJobStat; cLuk += subweaponJobStat;
					cStr += subweaponAllStat; cDex += subweaponAllStat; cInt += subweaponAllStat; cLuk += subweaponAllStat;
					att += subweaponAtt; mAtt += subweaponMAtt;
					subweaponEquipImage.src = "images/01092089.img.info.icon._outlink.png";
					break;
				default:
					break;
			}
			switch (selectedEmblem) {
				case "classEmblem":	
				emblemEquipImage.src = "images/magician/01190519.img.info.icon._outlink.png";
				break;
			}
			break;
			
		case "illium": /* int/luk */
			classType = "magician";
			weaponAttackSpeed = 6; weaponMultiplier = 1.2;
			switch (selectedWeapon) { /* Lucent Guantlet */
				case "fafnirWeapon":
					calculateWeaponStarForce(150, starForceSelect, "weapon", 40, 0, 0, 0, 119, 201);
					bossDmg.push(30); ied.push(10); rootAbyssSet += 1;
					weaponEquipImage.src = "images/magician/01282015.img.info.icon._outlink.png";
					break;
				case "absolabWeapon":
					calculateWeaponStarForce(160, starForceSelect, "weapon", 60, 0, 0, 0, 143, 241);
					bossDmg.push(30); ied.push(10); absolabSet += 1;
					weaponEquipImage.src = "images/magician/01282016.img.info.icon._outlink.png";
					break;
				case "arcaneWeapon":
					calculateWeaponStarForce(200, starForceSelect, "weapon", 100, 0, 0, 0, 206, 347);
					bossDmg.push(30); ied.push(20); arcaneSet += 1;
					weaponEquipImage.src = "images/magician/01282017.img.info.icon._outlink.png";
					break;
				case "genesisWeapon":
					calculateWeaponStarForce(200, starForceSelect, "weapon", 150, 0, 0, 0, 237, 400);
					bossDmg.push(30); ied.push(20); genesisWeapon += 1;
					weaponEquipImage.src = "images/magician/01282040.img.info.icon._outlink.png";
					break;
				default:
					break;
			}
			cStr += weaponAllStat; cDex += weaponAllStat; cInt += weaponAllStat; cLuk += weaponAllStat;
			cInt += weaponJobStat; cLuk += weaponJobStat; /* job stats */
			hp += weaponHp; mp += weaponMp; att += weaponAtt; mAtt += weaponMAtt;
			switch (selectedSubweapon) {
				case "princessNoSubweapon":
					calculateSubweaponStarForce(140, 0, "weapon", 14, 0, 0, 0, 0, 9);
					/* cInt += 14; cLuk += 14; mAtt += 9; */
					subweaponEquipImage.src = "images/magician/01353505.img.info.icon._outlink.png";
					break;
				default:
					break;
			}
			switch (selectedEmblem) {
				case "classEmblem":	
				emblemEquipImage.src = "images/magician/01190532.img.info.icon._outlink.png";
				break;
			}
			break;
			
		case "kanna": /* int/luk */
			classType = "magician";
			weaponAttackSpeed = 6; /* 8 mage override */ weaponMultiplier = 1.35;
			switch (selectedWeapon) { /* Fan */
				case "fafnirWeapon":
					calculateWeaponStarForce(150, starForceSelect, "weapon", 40, 0, 0, 0, 126, 204);
					bossDmg.push(30); ied.push(10); rootAbyssSet += 1;
					weaponEquipImage.src = "images/magician/01552063.img.info.icon._outlink.png";
					break;
				case "absolabWeapon":
					calculateWeaponStarForce(160, starForceSelect, "weapon", 60, 0, 0, 0, 143, 241);
					bossDmg.push(30); ied.push(10); absolabSet += 1;
					weaponEquipImage.src = "images/magician/01552110.img.info.icon._outlink.png";
					break;
				case "arcaneWeapon":
					calculateWeaponStarForce(200, starForceSelect, "weapon", 100, 0, 0, 0, 206, 347);
					bossDmg.push(30); ied.push(20); arcaneSet += 1;
					weaponEquipImage.src = "images/magician/01552119.img.info.icon._outlink.png";
					break;
				case "genesisWeapon":
					calculateWeaponStarForce(200, starForceSelect, "weapon", 150, 0, 0, 0, 237, 400);
					bossDmg.push(30); ied.push(20); genesisWeapon += 1;
					weaponEquipImage.src = "images/magician/01552130.img.info.icon._outlink.png";
					break;
				default:
					break;
			}
			cStr += weaponAllStat; cDex += weaponAllStat; cInt += weaponAllStat; cLuk += weaponAllStat;
			cInt += weaponJobStat; cLuk += weaponJobStat; /* job stats */
			hp += weaponHp; mp += weaponMp; att += weaponAtt; mAtt += weaponMAtt;
			/* Subweapon not added, apllies to haku buff */
			calculateSubweaponStarForce(200, starForceSelect, "weapon", 100, 0, 0, 0, 206, 347);
			switch (selectedEmblem) {
				case "classEmblem":	
				emblemEquipImage.src = "images/magician/01191103.img.info.icon._outlink.png";
				break;
			}
			break;
			
		case "kinesis": /* int/luk */
			classType = "magician";
			weaponAttackSpeed = 6; weaponMultiplier = 1.2;
			switch (selectedWeapon) { /* Psy-limiter */
				case "fafnirWeapon":
					calculateWeaponStarForce(150, starForceSelect, "weapon", 40, 0, 0, 0, 119, 201);
					bossDmg.push(30); ied.push(10); rootAbyssSet += 1;
					weaponEquipImage.src = "images/magician/01262016.img.info.icon._outlink.png";
					break;
				case "absolabWeapon":
					calculateWeaponStarForce(160, starForceSelect, "weapon", 60, 0, 0, 0, 143, 241);
					bossDmg.push(30); ied.push(10); absolabSet += 1;
					weaponEquipImage.src = "images/magician/01262017.img.info.icon._outlink.png";
					break;
				case "arcaneWeapon":
					calculateWeaponStarForce(200, starForceSelect, "weapon", 100, 0, 0, 0, 206, 347);
					bossDmg.push(30); ied.push(20); arcaneSet += 1;
					weaponEquipImage.src = "images/magician/01262039.img.info.icon._outlink.png";
					break;
				case "genesisWeapon":
					calculateWeaponStarForce(200, starForceSelect, "weapon", 150, 0, 0, 0, 237, 400);
					bossDmg.push(30); ied.push(20); genesisWeapon += 1;
					weaponEquipImage.src = "images/magician/01262051.img.info.icon._outlink.png";
					break;
				default:
					break;
			}
			cStr += weaponAllStat; cDex += weaponAllStat; cInt += weaponAllStat; cLuk += weaponAllStat;
			cInt += weaponJobStat; cLuk += weaponJobStat; /* job stats */
			hp += weaponHp; mp += weaponMp; att += weaponAtt; mAtt += weaponMAtt;
			switch (selectedSubweapon) {
				case "princessNoSubweapon":
					calculateSubweaponStarForce(140, 0, "weapon", 14, 0, 0, 0, 0, 9);
					/* cInt += 14; cLuk += 14; mAtt += 9; */
					subweaponEquipImage.src = "images/magician/01353205.img.info.icon._outlink.png";
					break;
				default:
					break;
			}
			switch (selectedEmblem) {
				case "classEmblem":	
				emblemEquipImage.src = "images/magician/01191001.img.info.icon._outlink.png";
				break;
			}
			break;
			
		case "lara": /* int/luk */
			classType = "magician";
			weaponAttackSpeed = 6; weaponMultiplier = 1.2;
			switch (selectedWeapon) { /* Wands */
				case "fafnirWeapon":
					calculateWeaponStarForce(150, starForceSelect, "weapon", 40, 0, 0, 0, 119, 201);
					bossDmg.push(30); ied.push(10); rootAbyssSet += 1;
					weaponEquipImage.src = "images/magician/01372238.img.info.icon._outlink.png";
					break;
				case "absolabWeapon":
					calculateWeaponStarForce(160, starForceSelect, "weapon", 60, 0, 0, 0, 143, 241);
					bossDmg.push(30); ied.push(10); absolabSet += 1;
					weaponEquipImage.src = "images/magician/01372222.img.info.icon._outlink.png";
					break;
				case "arcaneWeapon":
					calculateWeaponStarForce(200, starForceSelect, "weapon", 100, 0, 0, 0, 206, 347);
					bossDmg.push(30); ied.push(20); arcaneSet += 1;
					weaponEquipImage.src = "images/magician/01372228.img.info.icon._outlink.png";
					break;
				case "genesisWeapon":
					calculateWeaponStarForce(200, starForceSelect, "weapon", 150, 0, 0, 0, 237, 400);
					bossDmg.push(30); ied.push(20); genesisWeapon += 1;
					weaponEquipImage.src = "images/magician/01372237.img.info.icon._outlink.png";
					break;
				default:
					break;
			}
			cStr += weaponAllStat; cDex += weaponAllStat; cInt += weaponAllStat; cLuk += weaponAllStat;
			cInt += weaponJobStat; cLuk += weaponJobStat; /* job stats */
			hp += weaponHp; mp += weaponMp; att += weaponAtt; mAtt += weaponMAtt;
			switch (selectedSubweapon) {
				case "princessNoSubweapon":
					calculateSubweaponStarForce(140, 0, "weapon", 14, 0, 0, 0, 0, 9);
					/* cInt += 14; cLuk += 14; mAtt += 9; */
					subweaponEquipImage.src = "images/magician/01354027.img.info.icon._outlink.png";
					break;
				default:
					break;
			}
			switch (selectedEmblem) {
				case "classEmblem":	
				emblemEquipImage.src = "images/magician/01190561.img.info.icon._outlink.png";
				break;
			}
			break;
			
		case "luminous": /* int/luk */
			classType = "magician";
			weaponAttackSpeed = 6; weaponMultiplier = 1.2;
			switch (selectedWeapon) { /* Shining Rod */
				case "fafnirWeapon":
					calculateWeaponStarForce(150, starForceSelect, "weapon", 40, 0, 0, 0, 119, 201);
					bossDmg.push(30); ied.push(10); rootAbyssSet += 1;
					weaponEquipImage.src = "images/magician/01212130.img.info.icon._outlink.png";
					break;
				case "absolabWeapon":
					calculateWeaponStarForce(160, starForceSelect, "weapon", 60, 0, 0, 0, 126, 208);
					bossDmg.push(30); ied.push(10); absolabSet += 1;
					weaponEquipImage.src = "images/magician/01212115.img.info.icon._outlink.png";
					break;
				case "arcaneWeapon":
					calculateWeaponStarForce(200, starForceSelect, "weapon", 100, 0, 0, 0, 206, 347);
					bossDmg.push(30); ied.push(20); arcaneSet += 1;
					weaponEquipImage.src = "images/magician/01212120.img.info.icon._outlink.png";
					break;
				case "genesisWeapon":
					calculateWeaponStarForce(200, starForceSelect, "weapon", 150, 0, 0, 0, 237, 400);
					bossDmg.push(30); ied.push(20); genesisWeapon += 1;
					weaponEquipImage.src = "images/magician/01212129.img.info.icon._outlink.png";
					break;
				default:
					break;
			}
			cStr += weaponAllStat; cDex += weaponAllStat; cInt += weaponAllStat; cLuk += weaponAllStat;
			cInt += weaponJobStat; cLuk += weaponJobStat; /* job stats */
			hp += weaponHp; mp += weaponMp; att += weaponAtt; mAtt += weaponMAtt;
			switch (selectedSubweapon) {
				case "princessNoSubweapon":
					calculateSubweaponStarForce(140, 0, "weapon", 14, 0, 0, 0, 0, 0);
					/* cInt += 14; cLuk += 14; */
					subweaponEquipImage.src = "images/magician/01352406.img.info.icon._outlink.png";
					break;
				default:
					break;
			}
			switch (selectedEmblem) {
				case "classEmblem":	
				emblemEquipImage.src = "images/magician/info.icon._outlink.png";
				break;
			}
			break;
			
		case "hoyoung": /* luk/dex */
			classType = "thief";
			weaponAttackSpeed = 4; weaponMultiplier = 1.3;
			switch (selectedWeapon) { /* Ritual Fan */
				case "fafnirWeapon":
					calculateWeaponStarForce(150, starForceSelect, "weapon", 40, 0, 0, 0, 160, 0);
					bossDmg.push(30); ied.push(10); rootAbyssSet += 1;
					weaponEquipImage.src = "images/thief/01292016.img.info.icon._outlink.png";
					break;
				case "absolabWeapon":
					calculateWeaponStarForce(160, starForceSelect, "weapon", 60, 0, 0, 0, 192, 0);
					bossDmg.push(30); ied.push(10); absolabSet += 1;
					weaponEquipImage.src = "images/thief/01292017.img.info.icon._outlink.png";
					break;
				case "arcaneWeapon":
					calculateWeaponStarForce(200, starForceSelect, "weapon", 100, 0, 0, 0, 276, 0);
					bossDmg.push(30); ied.push(20); arcaneSet += 1;
					weaponEquipImage.src = "images/thief/01292018.img.info.icon._outlink.png";
					break;
				case "genesisWeapon":
					calculateWeaponStarForce(200, starForceSelect, "weapon", 150, 0, 0, 0, 318, 0);
					bossDmg.push(30); ied.push(20); genesisWeapon += 1;
					weaponEquipImage.src = "images/thief/01292022.img.info.icon._outlink.png";
					break;
				default:
					break;
			}
			cStr += weaponAllStat; cDex += weaponAllStat; cInt += weaponAllStat; cLuk += weaponAllStat;
			cLuk += weaponJobStat; cDex += weaponJobStat; /* job stats */
			hp += weaponHp; mp += weaponMp; att += weaponAtt; mAtt += weaponMAtt;
			switch (selectedSubweapon) {
				case "princessNoSubweapon":
					calculateSubweaponStarForce(140, 0, "weapon", 14, 0, 0, 0, 9, 0);
					/* cLuk += 14; cDex += 14; att += 9; */
					subweaponEquipImage.src = "images/thief/01353807.img.info.icon._outlink.png";
					break;
				default:
					break;
			}
			switch (selectedEmblem) {
				case "classEmblem":	
				emblemEquipImage.src = "images/thief/01190550.img.info.icon._outlink.png";
				break;
			}
			break;
			
		case "khali": /* luk/dex */
			classType = "thief";
			weaponAttackSpeed = 5; weaponMultiplier = 1.3;
			switch (selectedWeapon) { /* Chakram */
				case "fafnirWeapon":
					calculateWeaponStarForce(150, starForceSelect, "weapon", 40, 0, 0, 0, 160, 0);
					bossDmg.push(30); ied.push(10); rootAbyssSet += 1;
					weaponEquipImage.src = "images/thief/01404016.img.info.icon._outlink.png";
					break;
				case "absolabWeapon":
					calculateWeaponStarForce(160, starForceSelect, "weapon", 60, 0, 0, 0, 192, 0);
					bossDmg.push(30); ied.push(10); absolabSet += 1;
					weaponEquipImage.src = "images/thief/01404017.img.info.icon._outlink.png";
					break;
				case "arcaneWeapon":
					calculateWeaponStarForce(200, starForceSelect, "weapon", 100, 0, 0, 0, 276, 0);
					bossDmg.push(30); ied.push(20); arcaneSet += 1;
					weaponEquipImage.src = "images/thief/01404030.img.info.icon._outlink.png";
					break;
				case "genesisWeapon":
					calculateWeaponStarForce(200, starForceSelect, "weapon", 150, 0, 0, 0, 318, 0);
					bossDmg.push(30); ied.push(20); genesisWeapon += 1;
					weaponEquipImage.src = "images/thief/01190563.img.info.icon._outlink.png";
					break;
				default:
					break;
			}
			cStr += weaponAllStat; cDex += weaponAllStat; cInt += weaponAllStat; cLuk += weaponAllStat;
			cLuk += weaponJobStat; cDex += weaponJobStat; /* job stats */
			hp += weaponHp; mp += weaponMp; att += weaponAtt; mAtt += weaponMAtt;
			switch (selectedSubweapon) {
				case "princessNoSubweapon":
					calculateSubweaponStarForce(140, 0, "weapon", 14, 0, 0, 0, 9, 0);
					/* cLuk += 14; cDex += 14; att += 9; */
					subweaponEquipImage.src = "images/thief/01354037.img.info.icon._outlink.png";
					break;
				default:
					break;
			}
			switch (selectedEmblem) {
				case "classEmblem":	
				emblemEquipImage.src = "images/thief/01190530.img.info.icon._outlink.png";
				break;
			}
			break;
			
		case "nightLord": /* luk/dex */
			classType = "thief";
			weaponAttackSpeed = 4; weaponMultiplier = 1.75;
			switch (selectedWeapon) { /* Claw */
				case "fafnirWeapon":
					calculateWeaponStarForce(150, starForceSelect, "weapon", 40, 0, 0, 0, 86, 0);
					bossDmg.push(30); ied.push(10); rootAbyssSet += 1;
					weaponEquipImage.src = "images/thief/01272015.img.info.icon._outlink.png";
					break;
				case "absolabWeapon":
					calculateWeaponStarForce(160, starForceSelect, "weapon", 60, 0, 0, 0, 103, 0);
					bossDmg.push(30); ied.push(10); absolabSet += 1;
					weaponEquipImage.src = "images/thief/01272016.img.info.icon._outlink.png";
					break;
				case "arcaneWeapon":
					calculateWeaponStarForce(200, starForceSelect, "weapon", 100, 0, 0, 0, 149, 0);
					bossDmg.push(30); ied.push(20); arcaneSet += 1;
					weaponEquipImage.src = "images/thief/01272017.img.info.icon._outlink.png";
					break;
				case "genesisWeapon":
					calculateWeaponStarForce(200, starForceSelect, "weapon", 150, 0, 0, 0, 172, 0);
					bossDmg.push(30); ied.push(20); genesisWeapon += 1;
					weaponEquipImage.src = "images/thief/01272040.img.info.icon._outlink.png";
					break;
				default:
					break;
			}
			cStr += weaponAllStat; cDex += weaponAllStat; cInt += weaponAllStat; cLuk += weaponAllStat;
			cLuk += weaponJobStat; cDex += weaponJobStat; /* job stats */
			hp += weaponHp; mp += weaponMp; att += weaponAtt; mAtt += weaponMAtt;
			switch (selectedSubweapon) {
				case "princessNoSubweapon":
					calculateSubweaponStarForce(140, 0, "weapon", 14, 0, 0, 0, 9, 0);
					/* cLuk += 14; cDex += 14; att += 9; */
					subweaponEquipImage.src = "images/thief/01352296.img.info.icon._outlink.png";
					break;
				default:
					break;
			}
			switch (selectedEmblem) {
				case "classEmblem":	
				emblemEquipImage.src = "images/thief/01190301.img.info.icon._outlink.png";
				break;
			}
			break;
			
		case "nightWalker": /* luk/dex */
			classType = "thief";
			weaponAttackSpeed = 4; weaponMultiplier = 1.75;
			switch (selectedWeapon) { /* Claw */
				case "fafnirWeapon":
					calculateWeaponStarForce(150, starForceSelect, "weapon", 40, 0, 0, 0, 86, 0);
					bossDmg.push(30); ied.push(10); rootAbyssSet += 1;
					weaponEquipImage.src = "images/thief/01272015.img.info.icon._outlink.png";
					break;
				case "absolabWeapon":
					calculateWeaponStarForce(160, starForceSelect, "weapon", 60, 0, 0, 0, 103, 0);
					bossDmg.push(30); ied.push(10); absolabSet += 1;
					weaponEquipImage.src = "images/thief/01272016.img.info.icon._outlink.png";
					break;
				case "arcaneWeapon":
					calculateWeaponStarForce(200, starForceSelect, "weapon", 100, 0, 0, 0, 149, 0);
					bossDmg.push(30); ied.push(20); arcaneSet += 1;
					weaponEquipImage.src = "images/thief/01272017.img.info.icon._outlink.png";
					break;
				case "genesisWeapon":
					calculateWeaponStarForce(200, starForceSelect, "weapon", 150, 0, 0, 0, 172, 0);
					bossDmg.push(30); ied.push(20); genesisWeapon += 1;
					weaponEquipImage.src = "images/thief/01272040.img.info.icon._outlink.png";
					break;
				default:
					break;
			}
			cStr += weaponAllStat; cDex += weaponAllStat; cInt += weaponAllStat; cLuk += weaponAllStat;
			cLuk += weaponJobStat; cDex += weaponJobStat; /* job stats */
			hp += weaponHp; mp += weaponMp; att += weaponAtt; mAtt += weaponMAtt;
			switch (selectedSubweapon) {
				case "princessNoSubweapon":
					calculateSubweaponStarForce(140, 0, "weapon", 0, 14, 0, 0, 9, 9);
					/* cStr += 14; cDex += 14; cInt += 14; cLuk += 14; att += 9; mAtt += 9; */
					subweaponEquipImage.src = "images/01092089.img.info.icon._outlink.png";
					break;
				default:
					break;
			}
			switch (selectedEmblem) {
				case "classEmblem":	
				emblemEquipImage.src = "images/thief/01190801.img.info.icon._outlink.png";
				break;
			}
			break;
			
		case "phantom": /* luk/dex */
			classType = "thief";
			weaponAttackSpeed = 5; weaponMultiplier = 1.3;
			switch (selectedWeapon) { /* Cane */
				case "fafnirWeapon":
					calculateWeaponStarForce(150, starForceSelect, "weapon", 40, 0, 0, 0, 164, 0);
					bossDmg.push(30); ied.push(10); rootAbyssSet += 1;
					weaponEquipImage.src = "images/thief/01362090.img.info.icon._outlink.png";
					break;
				case "absolabWeapon":
					calculateWeaponStarForce(160, starForceSelect, "weapon", 60, 0, 0, 0, 197, 0);
					bossDmg.push(30); ied.push(10); absolabSet += 1;
					weaponEquipImage.src = "images/thief/01362135.img.info.icon._outlink.png";
					break;
				case "arcaneWeapon":
					calculateWeaponStarForce(200, starForceSelect, "weapon", 100, 0, 0, 0, 283, 0);
					bossDmg.push(30); ied.push(20); arcaneSet += 1;
					weaponEquipImage.src = "images/thief/01362140.img.info.icon._outlink.png";
					break;
				case "genesisWeapon":
					calculateWeaponStarForce(200, starForceSelect, "weapon", 150, 0, 0, 0, 326, 0);
					bossDmg.push(30); ied.push(20); genesisWeapon += 1;
					weaponEquipImage.src = "images/thief/01362149.img.info.icon._outlink.png";
					break;
				default:
					break;
			}
			cStr += weaponAllStat; cDex += weaponAllStat; cInt += weaponAllStat; cLuk += weaponAllStat;
			cLuk += weaponJobStat; cDex += weaponJobStat; /* job stats */
			hp += weaponHp; mp += weaponMp; att += weaponAtt; mAtt += weaponMAtt;
			switch (selectedSubweapon) {
				case "princessNoSubweapon":
					calculateSubweaponStarForce(140, 0, "weapon", 14, 0, 0, 0, 0, 0);
					/* cLuk += 14; cDex += 14; */
					subweaponEquipImage.src = "images/thief/01352109.img.info.icon._outlink.png";
					break;
				default:
					break;
			}
			switch (selectedEmblem) {
				case "classEmblem":	
				emblemEquipImage.src = "images/thief/01190515.img.info.icon._outlink.png";
				break;
			}
			break;
			
		case "cadena": /* luk/dex/str */
			classType = "thief";
			weaponAttackSpeed = 4; weaponMultiplier = 1.3;
			switch (selectedWeapon) { /* Chain */
				case "fafnirWeapon":
					calculateWeaponStarForce(150, starForceSelect, "weapon", 40, 0, 0, 0, 160, 0);
					bossDmg.push(30); ied.push(10); rootAbyssSet += 1;
					weaponEquipImage.src = "images/thief/01272015.img.info.icon._outlink.png";
					break;
				case "absolabWeapon":
					calculateWeaponStarForce(160, starForceSelect, "weapon", 60, 0, 0, 0, 192, 0);
					bossDmg.push(30); ied.push(10); absolabSet += 1;
					weaponEquipImage.src = "images/thief/01272016.img.info.icon._outlink.png";
					break;
				case "arcaneWeapon":
					calculateWeaponStarForce(200, starForceSelect, "weapon", 100, 0, 0, 0, 276, 0);
					bossDmg.push(30); ied.push(20); arcaneSet += 1;
					weaponEquipImage.src = "images/thief/01272017.img.info.icon._outlink.png";
					break;
				case "genesisWeapon":
					calculateWeaponStarForce(200, starForceSelect, "weapon", 150, 0, 0, 0, 318, 0);
					bossDmg.push(30); ied.push(20); genesisWeapon += 1;
					weaponEquipImage.src = "images/thief/01272040.img.info.icon._outlink.png";
					break;
				default:
					break;
			}
			cStr += weaponAllStat; cDex += weaponAllStat; cInt += weaponAllStat; cLuk += weaponAllStat;
			cLuk += weaponJobStat; cDex += weaponJobStat; /* job stats */
			hp += weaponHp; mp += weaponMp; att += weaponAtt; mAtt += weaponMAtt;
			switch (selectedSubweapon) {
				case "princessNoSubweapon":
					calculateSubweaponStarForce(140, 0, "weapon", 14, 0, 0, 0, 9, 0);
					/* cLuk += 14; cDex += 14; att += 9; */
					subweaponEquipImage.src = "images/thief/01353306.img.info.icon._outlink.png";
					break;
				default:
					break;
			}
			switch (selectedEmblem) {
				case "classEmblem":	
				emblemEquipImage.src = "images/thief/01190530.img.info.icon._outlink.png";
				break;
			}
			break;
			
		case "dualBlade": /* luk/dex/str */
			classType = "thief";
			weaponAttackSpeed = 4; weaponMultiplier = 1.3;
			switch (selectedWeapon) { /* Dagger */
				case "fafnirWeapon":
					calculateWeaponStarForce(150, starForceSelect, "weapon", 40, 0, 0, 0, 160, 0);
					bossDmg.push(30); ied.push(10); rootAbyssSet += 1;
					weaponEquipImage.src = "images/thief/01332225.img.info.icon._outlink.png";
					break;
				case "absolabWeapon":
					calculateWeaponStarForce(160, starForceSelect, "weapon", 60, 0, 0, 0, 192, 0);
					bossDmg.push(30); ied.push(10); absolabSet += 1;
					weaponEquipImage.src = "images/thief/01332274.img.info.icon._outlink.png";
					break;
				case "arcaneWeapon":
					calculateWeaponStarForce(200, starForceSelect, "weapon", 100, 0, 0, 0, 276, 0);
					bossDmg.push(30); ied.push(20); arcaneSet += 1;
					weaponEquipImage.src = "images/thief/01332279.img.info.icon._outlink.png";
					break;
				case "genesisWeapon":
					calculateWeaponStarForce(200, starForceSelect, "weapon", 150, 0, 0, 0, 318, 0);
					bossDmg.push(30); ied.push(20); genesisWeapon += 1;
					weaponEquipImage.src = "images/thief/01332289.img.info.icon._outlink.png";
					break;
				default:
					break;
			}
			cStr += weaponAllStat; cDex += weaponAllStat; cInt += weaponAllStat; cLuk += weaponAllStat;
			cLuk += weaponJobStat; cDex += weaponJobStat; /* job stats */
			hp += weaponHp; mp += weaponMp; att += weaponAtt; mAtt += weaponMAtt;
			switch (selectedSubweapon) {
				case "sweetwaterKatara":
					cLuk += subweaponJobStat; cDex += subweaponJobStat;
					cStr += subweaponAllStat; cDex += subweaponAllStat; cInt += subweaponAllStat; cLuk += subweaponAllStat;
					att += subweaponAtt; mAtt += subweaponMAtt;
					subweaponEquipImage.src = "images/01342090.img.info.icon._outlink.png";
					break;
				default:
					break;
			}
			switch (selectedEmblem) {
				case "classEmblem":	
				emblemEquipImage.src = "images/thief/01190301.img.info.icon._outlink.png";
				break;
			}
			break;
			
		case "shadower": /* luk/dex/str */
			classType = "thief";
			weaponAttackSpeed = 4; weaponMultiplier = 1.3;
			switch (selectedWeapon) { /* Dagger */
				case "fafnirWeapon":
					calculateWeaponStarForce(150, starForceSelect, "weapon", 40, 0, 0, 0, 160, 0);
					bossDmg.push(30); ied.push(10); rootAbyssSet += 1;
					weaponEquipImage.src = "images/thief/01332225.img.info.icon._outlink.png";
					break;
				case "absolabWeapon":
					calculateWeaponStarForce(160, starForceSelect, "weapon", 60, 0, 0, 0, 192, 0);
					bossDmg.push(30); ied.push(10); absolabSet += 1;
					weaponEquipImage.src = "images/thief/01332274.img.info.icon._outlink.png";
					break;
				case "arcaneWeapon":
					calculateWeaponStarForce(200, starForceSelect, "weapon", 100, 0, 0, 0, 276, 0);
					bossDmg.push(30); ied.push(20); arcaneSet += 1;
					weaponEquipImage.src = "images/thief/01332279.img.info.icon._outlink.png";
					break;
				case "genesisWeapon":
					calculateWeaponStarForce(200, starForceSelect, "weapon", 150, 0, 0, 0, 318, 0);
					bossDmg.push(30); ied.push(20); genesisWeapon += 1;
					weaponEquipImage.src = "images/thief/01332289.img.info.icon._outlink.png";
					break;
				default:
					break;
			}
			cStr += weaponAllStat; cDex += weaponAllStat; cInt += weaponAllStat; cLuk += weaponAllStat;
			cLuk += weaponJobStat; cDex += weaponJobStat; /* job stats */
			hp += weaponHp; mp += weaponMp; att += weaponAtt; mAtt += weaponMAtt;
			switch (selectedSubweapon) {
				case "princessNoSubweapon":
					calculateSubweaponStarForce(140, 0, "weapon", 14, 0, 0, 0, 9, 0);
					/* cLuk += 14; cDex += 14; att += 9; */
					subweaponEquipImage.src = "images/thief/01352286.img.info.icon._outlink.png";
					break;
				case "deimosThiefShield":
					cLuk += subweaponJobStat; cDex += subweaponJobStat;
					cStr += subweaponAllStat; cDex += subweaponAllStat; cInt += subweaponAllStat; cLuk += subweaponAllStat;
					att += subweaponAtt; mAtt += subweaponMAtt;
					subweaponEquipImage.src = "images/01092088.img.info.icon._outlink.png";
					break;
				default:
					break;
			}
			switch (selectedEmblem) {
				case "classEmblem":	
				emblemEquipImage.src = "images/thief/01190301.img.info.icon._outlink.png";
				break;
			}
			break;
			
		case "demonAvenger": /* HP/str */
			classType = "warrior";
			weaponAttackSpeed = 6; weaponMultiplier = 1.3;
			switch (selectedWeapon) { /* Desparado */
				case "fafnirWeapon":
					calculateWeaponStarForce(150, starForceSelect, "weapon", 40, 0, 0, 0, 171, 0);
					bossDmg.push(30); ied.push(10); rootAbyssSet += 1; hp += 2000;
					weaponEquipImage.src = "images/warrior/01232057.img.info.icon._outlink.png";
					break;
				case "absolabWeapon":
					calculateWeaponStarForce(160, starForceSelect, "weapon", 60, 0, 0, 0, 205, 0);
					bossDmg.push(30); ied.push(10); absolabSet += 1; hp += 2250;
					weaponEquipImage.src = "images/warrior/01232114.img.info.icon._outlink.png";
					break;
				case "arcaneWeapon":
					calculateWeaponStarForce(200, starForceSelect, "weapon", 100, 0, 0, 0, 295, 0);
					bossDmg.push(30); ied.push(20); arcaneSet += 1; hp += 2500;
					weaponEquipImage.src = "images/warrior/01232113.img.info.icon._outlink.png";
					break;
				case "genesisWeapon":
					calculateWeaponStarForce(200, starForceSelect, "weapon", 150, 0, 0, 0, 340, 0);
					bossDmg.push(30); ied.push(20); genesisWeapon += 1; hp += 2800;
					weaponEquipImage.src = "images/warrior/01232122.img.info.icon._outlink.png";
					break;
				default:
					break;
			}
			cStr += weaponAllStat; cDex += weaponAllStat; cInt += weaponAllStat; cLuk += weaponAllStat;
			cStr += weaponJobStat; /* job stats */
			hp += weaponHp; mp += weaponMp; att += weaponAtt; mAtt += weaponMAtt;
			switch (selectedSubweapon) {
				case "ruinForceShield":
					cStr += subweaponJobStat + subweaponAllStat ; cDex += subweaponJobStat + subweaponAllStat; 
					hp += subweaponHp; mp += subweaponMp; att += subweaponAtt; mAtt += subweaponMAtt;
					break;
				default:
					break;
			}
			switch (selectedEmblem) {
				case "classEmblem":	
				emblemEquipImage.src = "images/warrior/01190701.img.info.icon._outlink.png";
				break;
			}
			break;
		
		case "xenon": /* Luk/Str/Dex */
			classType = "thief";
			weaponAttackSpeed = 5; weaponMultiplier = 1.3125;
			switch (selectedWeapon) { /* Whip Blade */
				case "fafnirWeapon":
					calculateWeaponStarForce(150, starForceSelect, "weapon", 40, 0, 0, 0, 128, 0);
					bossDmg.push(30); ied.push(10); rootAbyssSet += 1;
					weaponEquipImage.src = "images/thief/01242060.img.info.icon._outlink.png";
					break;
				case "absolabWeapon":
					calculateWeaponStarForce(160, starForceSelect, "weapon", 60, 0, 0, 0, 154, 0);
					bossDmg.push(30); ied.push(10); absolabSet += 1;
					weaponEquipImage.src = "images/thief/01242120.img.info.icon._outlink.png";
					break;
				case "arcaneWeapon":
					calculateWeaponStarForce(200, starForceSelect, "weapon", 100, 0, 0, 0, 221, 0);
					bossDmg.push(30); ied.push(20); arcaneSet += 1;
					weaponEquipImage.src = "images/thief/01242145.img.info.icon._outlink.png";
					break;
				case "genesisWeapon":
					calculateWeaponStarForce(200, starForceSelect, "weapon", 150, 0, 0, 0, 255, 0);
					bossDmg.push(30); ied.push(20); genesisWeapon += 1;
					weaponEquipImage.src = "images/thief/01242141.img.info.icon._outlink.png";
					break;
				default:
					break;
			}
			cStr += weaponAllStat; cDex += weaponAllStat; cInt += weaponAllStat; cLuk += weaponAllStat;
			cLuk += weaponJobStat; cDex += weaponJobStat; /* job stats */
			hp += weaponHp; mp += weaponMp; att += weaponAtt; mAtt += weaponMAtt;
			switch (selectedSubweapon) {
				case "princessNoSubweapon":
					calculateSubweaponStarForce(140, 0, "weapon", 0, 4, 0, 0, 0, 0);
					/* cLuk += 4; cDex += 4; cStr += 4; cInt += 4; */
					subweaponEquipImage.src = "images/thief/01353006.img.info.icon._outlink.png";
					break;
				default:
					break;
			}
			break;
			
		case "zero": /* str/dex */
			classType = "warrior";
			weaponAttackSpeed = 6;
			switch (selectedWeapon) { /* Lazuli */
				case "fafnirWeapon":
					calculateWeaponStarForce(150, starForceSelect, "weapon", 40, 0, 0, 0, 169, 0);
					bossDmg.push(30); ied.push(10); rootAbyssSet += 1;
					weaponEquipImage.src = "images/warrior/01572007.img.info.icon._outlink.png";
					break;
				case "absolabWeapon":
					calculateWeaponStarForce(160, starForceSelect, "weapon", 60, 0, 0, 0, 203, 0);
					bossDmg.push(30); ied.push(10); absolabSet += 1;
					weaponEquipImage.src = "images/warrior/01572008.img.info.icon._outlink.png";
					break;
				case "arcaneWeapon":
					calculateWeaponStarForce(200, starForceSelect, "weapon", 100, 0, 0, 0, 293, 0);
					bossDmg.push(30); ied.push(20); arcaneSet += 1;
					weaponEquipImage.src = "images/warrior/01572009.img.info.icon._outlink.png";
					break;
				case "genesisWeapon":
					calculateWeaponStarForce(200, starForceSelect, "weapon", 150, 0, 0, 0, 337, 0);
					bossDmg.push(30); ied.push(20); genesisWeapon += 1;
					weaponEquipImage.src = "images/warrior/01572010.img.info.icon._outlink.png";
					break;
				default:
					break;
			}
			/* Fetch weapon stats */
			switch (selectedSubweapon) {
				case "lapis":
					switch (selectedWeapon) { /* Lazuli */
						case "fafnirWeapon":
							calculateSubweaponStarForce(150, starForceSelect, "weapon", 40, 0, 0, 0, 173, 0);
							subweaponEquipImage.src = "images/warrior/01562007.img.info.icon._outlink.png";
							break;
						case "absolabWeapon":
							calculateSubweaponStarForce(160, starForceSelect, "weapon", 60, 0, 0, 0, 207, 0);
							subweaponEquipImage.src = "images/warrior/01562008.img.info.icon._outlink.png";
							break;
						case "arcaneWeapon":
							calculateSubweaponStarForce(200, starForceSelect, "weapon", 100, 0, 0, 0, 297, 0);
							subweaponEquipImage.src = "images/warrior/01562009.img.info.icon._outlink.png";
							break;
						case "genesisWeapon":
							calculateSubweaponStarForce(200, starForceSelect, "weapon", 150, 0, 0, 0, 342, 0);
							subweaponEquipImage.src = "images/warrior/01562010.img.info.icon._outlink.png";
							break;
						default:
							break;
					/* Fetch subweapon stats */
					}
					break;
				default:
					break;
			}
			switch (selectedEmblem) {
				case "classEmblem":	
				emblemEquipImage.src = "images/warrior/01190900.img.info.icon._outlink.png";
				break;
			}
			break;
		case "unselected":
			break;
		default:
			break;
	}
}


/* + set effects */
/* + class weapon multiplier, weapon, subweapon dynamic */


function fillEquipmentStatsTable() {
	/* Ring 1 */
	document.getElementById("ring1Str").innerHTML = ring1JobStat + ring1AllStat;
	document.getElementById("ring1Dex").innerHTML = ring1JobStat + ring1AllStat;
	document.getElementById("ring1Int").innerHTML = ring1JobStat + ring1AllStat;
	document.getElementById("ring1Luk").innerHTML = ring1JobStat + ring1AllStat;
	document.getElementById("ring1Hp").innerHTML = ring1Hp;
	document.getElementById("ring1Mp").innerHTML = ring1Mp;
	document.getElementById("ring1Att").innerHTML = ring1Att;
	document.getElementById("ring1MAtt").innerHTML = ring1MAtt;
	/* Ring 2 */
	document.getElementById("ring2Str").innerHTML = ring2JobStat + ring2AllStat;
	document.getElementById("ring2Dex").innerHTML = ring2JobStat + ring2AllStat;
	document.getElementById("ring2Int").innerHTML = ring2JobStat + ring2AllStat;
	document.getElementById("ring2Luk").innerHTML = ring2JobStat + ring2AllStat;
	document.getElementById("ring2Hp").innerHTML = ring2Hp;
	document.getElementById("ring2Mp").innerHTML = ring2Mp;
	document.getElementById("ring2Att").innerHTML = ring2Att;
	document.getElementById("ring2MAtt").innerHTML = ring2MAtt;
	/* Ring 3 */
	document.getElementById("ring3Str").innerHTML = ring3JobStat + ring3AllStat;
	document.getElementById("ring3Dex").innerHTML = ring3JobStat + ring3AllStat;
	document.getElementById("ring3Int").innerHTML = ring3JobStat + ring3AllStat;
	document.getElementById("ring3Luk").innerHTML = ring3JobStat + ring3AllStat;
	document.getElementById("ring3Hp").innerHTML = ring3Hp;
	document.getElementById("ring3Mp").innerHTML = ring3Mp;
	document.getElementById("ring3Att").innerHTML = ring3Att;
	document.getElementById("ring3MAtt").innerHTML = ring3MAtt;
	/* Ring 4 */
	document.getElementById("ring4Str").innerHTML = ring4JobStat + ring4AllStat;
	document.getElementById("ring4Dex").innerHTML = ring4JobStat + ring4AllStat;
	document.getElementById("ring4Int").innerHTML = ring4JobStat + ring4AllStat;
	document.getElementById("ring4Luk").innerHTML = ring4JobStat + ring4AllStat;
	document.getElementById("ring4Hp").innerHTML = ring4Hp;
	document.getElementById("ring4Mp").innerHTML = ring4Mp;
	document.getElementById("ring4Att").innerHTML = ring4Att;
	document.getElementById("ring4MAtt").innerHTML = ring4MAtt;
	/* Pocket */
	document.getElementById("pocketStr").innerHTML = pocketAllStat;
	document.getElementById("pocketDex").innerHTML = pocketAllStat;
	document.getElementById("pocketInt").innerHTML = pocketAllStat;
	document.getElementById("pocketLuk").innerHTML = pocketAllStat;
	document.getElementById("pocketHp").innerHTML = pocketHp;
	document.getElementById("pocketMp").innerHTML = pocketMp;
	document.getElementById("pocketAtt").innerHTML = pocketAtt;
	document.getElementById("pocketMAtt").innerHTML = pocketMAtt;
	var selectedPocket = document.getElementById("selectPocket").value;
	if (selectedPocket == "cursedSpellbook") {
		switch (primaryStat) {
			case "str":
				document.getElementById("pocketStr").innerHTML = pocketJobStat;
				break;
			case "dex":
				document.getElementById("pocketDex").innerHTML = pocketJobStat;
				break;
			case "int":
				document.getElementById("pocketInt").innerHTML = pocketJobStat;
				break;
			case "luk":
				document.getElementById("pocketLuk").innerHTML = pocketJobStat;
				break;
			default:
				break;
		}
	}
	/* Pendant 2 */
	document.getElementById("pendant2Str").innerHTML = pendant2JobStat + pendant2AllStat;
	document.getElementById("pendant2Dex").innerHTML = pendant2JobStat + pendant2AllStat;
	document.getElementById("pendant2Int").innerHTML = pendant2JobStat + pendant2AllStat;
	document.getElementById("pendant2Luk").innerHTML = pendant2JobStat + pendant2AllStat;
	document.getElementById("pendant2Hp").innerHTML = pendant2Hp;
	document.getElementById("pendant2Mp").innerHTML = pendant2Mp;
	document.getElementById("pendant2Att").innerHTML = pendant2Att;
	document.getElementById("pendant2MAtt").innerHTML = pendant2MAtt;
	/* Pendant 1 */
	document.getElementById("pendant1Str").innerHTML = pendant1JobStat + pendant1AllStat;
	document.getElementById("pendant1Dex").innerHTML = pendant1JobStat + pendant1AllStat;
	document.getElementById("pendant1Int").innerHTML = pendant1JobStat + pendant1AllStat;
	document.getElementById("pendant1Luk").innerHTML = pendant1JobStat + pendant1AllStat;
	document.getElementById("pendant1Hp").innerHTML = pendant1Hp;
	document.getElementById("pendant1Mp").innerHTML = pendant1Mp;
	document.getElementById("pendant1Att").innerHTML = pendant1Att;
	document.getElementById("pendant1MAtt").innerHTML = pendant1MAtt;
	/* Weapon */
	document.getElementById("weaponStr").innerHTML = weaponJobStat + weaponAllStat;
	document.getElementById("weaponDex").innerHTML = weaponJobStat + weaponAllStat;
	document.getElementById("weaponInt").innerHTML = weaponJobStat + weaponAllStat;
	document.getElementById("weaponLuk").innerHTML = weaponJobStat + weaponAllStat;
	document.getElementById("weaponHp").innerHTML = weaponHp;
	document.getElementById("weaponMp").innerHTML = weaponMp;
	document.getElementById("weaponAtt").innerHTML = weaponAtt;
	document.getElementById("weaponMAtt").innerHTML = weaponMAtt;
	/* Subweapon */
	
	
	/* Belt, universal */
	var beltTotalStats = beltJobStat + beltAllStat;
	cStr += beltTotalStats; cDex += beltTotalStats; cInt += beltTotalStats; cLuk += beltTotalStats;
	hp += beltHp; mp += beltMp; att += beltAtt, mAtt += beltMAtt;
	/* Face accessory, universal */
	var faceTotalStats = faceJobStat + faceAllStat;
	cStr += faceTotalStats; cDex += faceTotalStats; cInt += faceTotalStats; cLuk += faceTotalStats;
	hp += faceHp; mp += faceMp; att += faceAtt; mAtt += faceMAtt;
	/* Eye accessory, universal */
	var eyeTotalStats = eyeJobStat + eyeAllStat;
	cStr += eyeTotalStats; cDex += eyeTotalStats; cInt += eyeTotalStats; cLuk += eyeTotalStats;
	hp += eyeHp; mp += eyeMp; att += eyeAtt; mAtt += eyeMAtt;
	/* Ear accessory, universal */
	var earTotalStats = earJobStat + earAllStat;
	cStr += eyeTotalStats; cDex += eyeTotalStats; cInt += eyeTotalStats; cLuk += eyeTotalStats;
	hp += earHp; mp += earMp; att += earAtt; mAtt += earMAtt;
	/* Badge, universal */
	var badgeTotalStats = badgeJobStat + badgeAllStat;
	cStr += badgeTotalStats; cDex += badgeTotalStats; cInt += badgeTotalStats; cLuk += badgeTotalStats;
	hp += badgeHp; mp += badgeMp; att += badgeAtt; mAtt += badgeMAtt;
	/* Medal, universal */
	var medalTotalStats = medalJobStat + medalAllStat;
	cStr += medalTotalStats; cDex += medalTotalStats; cInt += medalTotalStats; cLuk += medalTotalStats;
	hp += medalHp; mp += medalMp; att += medalAtt; mAtt += medalMAtt;
	/* Heart, universal */
	var heartTotalStats = heartJobStat + heartAllStat;
	cStr += heartTotalStats; cDex += heartTotalStats; cInt += heartTotalStats; cLuk += heartTotalStats;
	hp += heartHp; mp += heartMp; att += heartAtt; mAtt += heartMAtt;
	
	/* Hat, Top, Bottom, Shoes, Shoulder, Gloves, Emblem, Cape [+ weapon, + subweapon on seperate function] class specific */
	var classTotalJobStat = hatJobStat + topJobStat + bottomJobStat + shoeJobStat + shoulderJobStat + gloveJobStat + capeJobStat + emblemJobStat;
	var classTotalAllStat = hatAllStat + topAllStat + bottomAllStat + shoeAllStat + shoulderAllStat + gloveAllStat + capeAllStat + emblemAllStat;
	var classTotalHp = hatHp + topHp + bottomHp + shoeHp + shoulderHp + gloveHp + capeHp + emblemHp;
	var classTotalMp = hatMp + topMp + bottomMp + shoeMp + shoulderMp + gloveMp + capeMp + emblemMp;
	var classTotalAtt = hatAtt + topAtt + bottomAtt + shoeAtt + shoulderMp + gloveAtt + capeAtt + emblemAtt;
	var classTotalMagAtt = hatMAtt + topMAtt + bottomMAtt + shoeMAtt + shoulderMAtt + gloveMAtt + capeMAtt + emblemMAtt;
	
	cStr += classTotalAllStat; cDex += classTotalAllStat; cInt += classTotalAllStat; cLuk += classTotalAllStat;
	hp += classTotalHp; mp += classTotalMp; att += classTotalAtt; mAtt += classTotalMagAtt;
	switch(primaryStat) {
		case "str":
			cStr += classTotalJobStat; cDex += classTotalJobStat;
			break;
		case "dex":
			cDex += classTotalJobStat; cStr += classTotalJobStat;
			break;
		case "int":
			cInt += classTotalJobStat; cLuk += classTotalJobStat;
			break;
		case "luk":
			cLuk += classTotalJobStat; cDex += classTotalJobStat;
			break;
		default:
			break;
	}
	var cselectedEmblem = document.getElementById("selectEmblem").value;
	if (charClass == "demonAvenger" && cselectedEmblem == "classEmblem") {
		hp += 500;
	}
}

















