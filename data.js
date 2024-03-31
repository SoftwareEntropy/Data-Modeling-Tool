/* Star force data with Index
[0] Lv128-137	[1] Lv138-149	[2] Lv150-159	[3] Lv160-199	[4] Lv200-249	[5] Lv250 */
const starForceData = {
	1: { jobStatIncrease: 2, resourceIncrease: 5, glovesAttIncrease: 0 },
	2: { jobStatIncrease: 2, resourceIncrease: 5, glovesAttIncrease: 0 },
	3: { jobStatIncrease: 2, resourceIncrease: 5, glovesAttIncrease: 0 },
	4: { jobStatIncrease: 2, resourceIncrease: 10, glovesAttIncrease: 0 },
	5: { jobStatIncrease: 2, resourceIncrease: 10, glovesAttIncrease: 1 },
	6: { jobStatIncrease: 3, resourceIncrease: 15, glovesAttIncrease: 0 },
	7: { jobStatIncrease: 3, resourceIncrease: 15, glovesAttIncrease: 1 },
	8: { jobStatIncrease: 3, resourceIncrease: 20, glovesAttIncrease: 0 },
	9: { jobStatIncrease: 3, resourceIncrease: 20, glovesAttIncrease: 1 },
	10: { jobStatIncrease: 3, resourceIncrease: 25, glovesAttIncrease: 0 },
	11: { jobStatIncrease: 3, resourceIncrease: 25, glovesAttIncrease: 1 },
	12: { jobStatIncrease: 3, resourceIncrease: 25, glovesAttIncrease: 0 },
	13: { jobStatIncrease: 3, resourceIncrease: 25, glovesAttIncrease: 1 },
	14: { jobStatIncrease: 3, resourceIncrease: 25, glovesAttIncrease: 1 },
	15: { jobStatIncrease: 3, resourceIncrease: 25, glovesAttIncrease: 1 },
	16: { statIncrease: [7, 9, 11, 13, 15, 17], nonWeaponAttIncrease: [7, 8, 9, 10, 12, 14], weaponAttIncrease: [6, 7, 8, 9, 13, 0] },
	17: { statIncrease: [7, 9, 11, 13, 15, 17], nonWeaponAttIncrease: [8, 9, 10, 11, 13, 15], weaponAttIncrease: [7, 8, 9, 9, 13, 0] },
	18: { statIncrease: [7, 9, 11, 13, 15, 17], nonWeaponAttIncrease: [9, 10, 11, 12, 14, 16], weaponAttIncrease: [7, 8, 9, 10, 14, 0] },
	19: { statIncrease: [7, 9, 11, 13, 15, 17], nonWeaponAttIncrease: [10, 11, 12, 13, 15, 17], weaponAttIncrease: [8, 9, 10, 11, 14, 0] },
	20: { statIncrease: [7, 9, 11, 13, 15, 17], nonWeaponAttIncrease: [11, 12, 13, 14, 16, 18], weaponAttIncrease: [9, 10, 11, 12, 15, 0] },
	21: { statIncrease: [0, 9, 11, 13, 15, 17], nonWeaponAttIncrease: [0, 13, 14, 15, 17, 19], weaponAttIncrease: [0, 11, 12, 13, 16, 0] },
	22: { statIncrease: [0, 9, 11, 13, 15, 17], nonWeaponAttIncrease: [0, 15, 16, 17, 19, 21], weaponAttIncrease: [0, 12, 13, 14, 17, 0] },
	23: { statIncrease: [0, 0, 0, 0, 0, 0], nonWeaponAttIncrease: [0, 17, 18, 19, 21, 23], weaponAttIncrease: [0, 30, 31, 32, 34, 0] },
	24: { statIncrease: [0, 0, 0, 0, 0, 0], nonWeaponAttIncrease: [0, 19, 20, 21, 23, 25], weaponAttIncrease: [0, 31, 32, 33, 35, 0] },
	25: { statIncrease: [0, 0, 0, 0, 0, 0], nonWeaponAttIncrease: [0, 21, 22, 23, 25, 27], weaponAttIncrease: [0, 32, 33, 34, 36, 0]
	}
};

/* Superior equipment star force data */
const superiorItemStarForceData = {
	1: { statIncrease: 19, attIncrease: 0 },
	2: { statIncrease: 20, attIncrease: 0 },
	3: { statIncrease: 22, attIncrease: 0 },
	4: { statIncrease: 25, attIncrease: 0 },
	5: { statIncrease: 29, attIncrease: 0 },
	6: { statIncrease: 0, attIncrease: 9 },
	7: { statIncrease: 0, attIncrease: 10 },
	8: { statIncrease: 0, attIncrease: 11 },
	9: { statIncrease: 0, attIncrease: 12 },
	10: { statIncrease: 0, attIncrease: 13 },
	11: { statIncrease: 0, attIncrease: 15 },
	12: { statIncrease: 0, attIncrease: 17 },
	13: { statIncrease: 0, attIncrease: 19 },
	14: { statIncrease: 0, attIncrease: 21 },
	15: { statIncrease: 0, attIncrease: 23 }
};

/* Determine array index by item level */
function getDataIndex(itemLevel) {
  if (itemLevel >= 128 && itemLevel <= 137) return 0;
  if (itemLevel >= 138 && itemLevel <= 149) return 1;
  if (itemLevel >= 150 && itemLevel <= 159) return 2;
  if (itemLevel >= 160 && itemLevel <= 199) return 3;
  if (itemLevel >= 200 && itemLevel <= 249) return 4;
  if (itemLevel >= 250) return 5;
}

/* Get star force stats, add to equipment base stats*/
function getItemStats(itemLevel, starForceLevel, itemType, itemJobStat, itemAllStat, itemHp, itemMp, itemAttack, itemMagAttack) {
    var output = { jobStat: 0, allStat: 0, hp: 0, mp: 0, att: 0, mAtt: 0 };
	output.jobStat += itemJobStat; output.allStat += itemAllStat; output.hp += itemHp; output.mp += itemMp;
		output.att += itemAttack; output.mAtt += itemMagAttack;
    if (itemType == "superior") {
        for (let position in superiorItemStarForceData) {
            if (parseInt(position) <= starForceLevel) {
                output.allStat += superiorItemStarForceData[position].statIncrease || 0;
                output.att += superiorItemStarForceData[position].attIncrease || 0;
                output.mAtt += superiorItemStarForceData[position].attIncrease || 0;
            }
        }
    } else {
		let dataIndex = getDataIndex(itemLevel);
		for (let position in starForceData) {
            if (parseInt(position) <= starForceLevel) {
				// || 0 fallback for empty string, undefined, or null value
				output.jobStat += starForceData[position].jobStatIncrease || 0;
				// check for undefined; or use limiter (parseInt(position) > 15)
				if (starForceData[position].statIncrease && starForceData[position].statIncrease[dataIndex]) {
					output.allStat += starForceData[position].statIncrease[dataIndex] || 0;
				}
				output.hp += starForceData[position].resourceIncrease || 0;
				output.mp += starForceData[position].resourceIncrease || 0;
				if (itemType == "gloves") {
					output.att += starForceData[position].glovesAttIncrease || 0;
					output.mAtt += starForceData[position].glovesAttIncrease || 0;
				}
				if (itemType == "weapon") {
					if (parseInt(position) <= 15) {
						output.att += 1 + Math.floor(output.att * (2 / 100));
						output.mAtt += 1 + Math.floor(output.mAtt * (2 / 100));
					} else {
						output.att += starForceData[position].weaponAttIncrease[dataIndex] || 0;
						output.mAtt += starForceData[position].weaponAttIncrease[dataIndex] || 0;
					}
				} else {
					// check for undefined; or use limiter (parseInt(position) > 15)
					if (starForceData[position].nonWeaponAttIncrease && starForceData[position].nonWeaponAttIncrease[dataIndex]) {
						output.att += starForceData[position].nonWeaponAttIncrease[dataIndex];
						output.mAtt += starForceData[position].nonWeaponAttIncrease[dataIndex];
					}
				}
            }
        }
	}
	// Note: Return value is a String, parseInt(output.var); to add values
	return output;
}

const classData = {
	"unselected": {  // edit for default, unchosen class values.
		classType: "warrior",
		weaponAttackSpeed: 4,
		weaponMultiplier: 1.3,
		weaponRefNum: 1,
		weaponImages: {
			"none": "images/UIelements/Equip.Equip.Slots.11._outlink.png",
			"fafnirWeapon": "images/warrior/01213016.img.info.icon._outlink.png",
			"absolabWeapon": "images/warrior/01213017.img.info.icon._outlink.png",
			"arcaneWeapon": "images/warrior/01213018.img.info.icon._outlink.png",
			"genesisWeapon": "images/warrior/01213022.img.info.icon._outlink.png"
		},
		secondary: {
			"princessNoSubweapon":  {
			subWeaponImage: "images/warrior/01354007.img.info.icon._outlink.png", subWeaponRefNum: 1
			},
			"none":  {
			subWeaponImage: "images/UIelements/Equip.Equip.Slots.10._outlink.png", subWeaponRefNum: 1
			}
		},
		emblemImage: "images/warrior/01190552.img.info.icon._outlink.png"
	},
	"adele": {
		classType: "warrior",
		weaponAttackSpeed: 4,
		weaponMultiplier: 1.3,
		weaponRefNum: 8, // Bladecaster: 171, 205, 295, 340
		weaponImages: {
			"fafnirWeapon": "images/warrior/01213016.img.info.icon._outlink.png",
			"absolabWeapon": "images/warrior/01213017.img.info.icon._outlink.png",
			"arcaneWeapon": "images/warrior/01213018.img.info.icon._outlink.png",
			"genesisWeapon": "images/warrior/01213022.img.info.icon._outlink.png"
		},
		secondary: {
			"princessNoSubweapon":  {
				subWeaponImage: "images/warrior/01354007.img.info.icon._outlink.png", subWeaponRefNum: 1
			}
		},
		emblemImage: "images/warrior/01190552.img.info.icon._outlink.png"
	},
	"aran": {
		classType: "warrior",
		weaponAttackSpeed: 5,
		weaponMultiplier: 1.49,
		weaponRefNum: 4, // Polearm: 153, 184, 264, 304
		weaponImages: {
			"fafnirWeapon": "images/warrior/01442223.img.info.icon._outlink.png",
			"absolabWeapon": "images/warrior/01442268.img.info.icon._outlink.png",
			"arcaneWeapon": "images/warrior/01442274.img.info.icon._outlink.png",
			"genesisWeapon": "images/warrior/01442285.img.info.icon._outlink.png"
		},
		secondary: {
			"princessNoSubweapon":  {
				subWeaponImage: "images/warrior/01352935.img.info.icon._outlink.png", subWeaponRefNum: 1
			}
		},
		emblemImage: "images/warrior/01190513.img.info.icon._outlink.png"
	},
	"ark": {
		classType: "pirate",
		weaponAttackSpeed: 5,
		weaponMultiplier: 1.7,
		weaponRefNum: 3, // Knuckle: 128, 154, 221, 255
		weaponImages: {
			"fafnirWeapon": "images/pirate/01482168.img.info.icon._outlink.png",
			"absolabWeapon": "images/pirate/01482216.img.info.icon._outlink.png",
			"arcaneWeapon": "images/pirate/01482221.img.info.icon._outlink.png",
			"genesisWeapon": "images/pirate/01482232.img.info.icon._outlink.png"
		},
		secondary: {
			"princessNoSubweapon":  {
				subWeaponImage: "images/pirate/01353606.img.info.icon._outlink.png", subWeaponRefNum: 1
			}
		},
		emblemImage: "images/pirate/01190540.img.info.icon._outlink.png"
	},
	"blaster": {
		classType: "warrior",
		weaponAttackSpeed: 5,
		weaponMultiplier: 1.7,
		weaponRefNum: 3, // Arm Cannon: 128, 154, 221, 255
		weaponImages: {
			"fafnirWeapon": "images/warrior/01582016.img.info.icon._outlink.png",
			"absolabWeapon": "images/warrior/01582017.img.info.icon._outlink.png",
			"arcaneWeapon": "images/warrior/01582023.img.info.icon._outlink.png",
			"genesisWeapon": "images/warrior/01582044.img.info.icon._outlink.png"
		},
		secondary: {
			"princessNoSubweapon":  {
				subWeaponImage: "images/warrior/01353405.img.info.icon._outlink.png", subWeaponRefNum: 2
			}
		},
		emblemImage: "images/warrior/01190601.img.info.icon._outlink.png"
	},
	"buccaneer": {
		classType: "pirate",
		weaponAttackSpeed: 5,
		weaponMultiplier: 1.7,
		weaponRefNum: 3, // Knuckle: 128, 154, 221, 255
		weaponImages: {
			"fafnirWeapon": "images/pirate/01482168.img.info.icon._outlink.png",
			"absolabWeapon": "images/pirate/01482216.img.info.icon._outlink.png",
			"arcaneWeapon": "images/pirate/01482221.img.info.icon._outlink.png",
			"genesisWeapon": "images/pirate/01482232.img.info.icon._outlink.png"
		},
		secondary: {
			"princessNoSubweapon":  {
				subWeaponImage: "images/pirate/01352906.img.info.icon._outlink.png", subWeaponRefNum: 1
			}
		},
		emblemImage: "images/pirate/01190301.img.info.icon._outlink.png"
	},
	"cannoneer": {
		classType: "pirate",
		weaponAttackSpeed: 8,
		weaponMultiplier: 1.5,
		weaponRefNum: 3, // Cannon: 128, 154, 221, 255
		weaponImages: {
			"fafnirWeapon": "images/pirate/01532098.img.info.icon._outlink.png",
			"absolabWeapon": "images/pirate/01532144.img.info.icon._outlink.png",
			"arcaneWeapon": "images/pirate/01532159.img.info.icon._outlink.png",
			"genesisWeapon": "images/pirate/01532157.img.info.icon._outlink.png"
		},
		secondary: {
			"princessNoSubweapon":  {
				subWeaponImage: "images/pirate/01352928.img.info.icon._outlink.png", subWeaponRefNum: 1
			}
		},
		emblemImage: "images/pirate/01190301.img.info.icon._outlink.png"
	},
	"darkKnight": {
		classType: "warrior",
		weaponAttackSpeed: 6,
		weaponMultiplier: 1.49,
		weaponRefNum: 8, // Spear: 171, 205, 295, 340
		weaponImages: {
			"fafnirWeapon": "images/warrior/01432167.img.info.icon._outlink.png",
			"absolabWeapon": "images/warrior/01432214.img.info.icon._outlink.png",
			"arcaneWeapon": "images/warrior/01432218.img.info.icon._outlink.png",
			"genesisWeapon": "images/warrior/01432227.img.info.icon._outlink.png"
		},
		secondary: {
			"princessNoSubweapon":  {
				subWeaponImage: "images/warrior/01352226.img.info.icon._outlink.png", subWeaponRefNum: 1
			}
		},
		emblemImage: "images/warrior/01190301.img.info.icon._outlink.png"
	},
	"dawnWarrior": {
		classType: "warrior",
		weaponAttackSpeed: 6,
		weaponMultiplier: 1.34,
		weaponRefNum: 8, // 2-h Sword: 171, 205, 295, 340
		weaponImages: {
			"fafnirWeapon": "images/warrior/01402196.img.info.icon._outlink.png",
			"absolabWeapon": "images/warrior/01402251.img.info.icon._outlink.png",
			"arcaneWeapon": "images/warrior/01402259.img.info.icon._outlink.png",
			"genesisWeapon": "images/warrior/01402268.img.info.icon._outlink.png"
		},
		secondary: {
			"princessNoSubweapon":  {
				subWeaponImage: "images/warrior/01352975.img.info.icon._outlink.png", subWeaponRefNum: 3
			}
		},
		emblemImage: "images/warrior/01190801.img.info.icon._outlink.png"
	},
	"demonSlayer": {
		classType: "warrior",
		weaponAttackSpeed: 5,
		weaponMultiplier: 1.2,
		weaponRefNum: 6, // 1-h Blunt/Axe: 164, 197, 283, 326
		weaponImages: {
			"fafnirWeapon": "images/warrior/01322203.img.info.icon._outlink.png",
			"absolabWeapon": "images/warrior/01322250.img.info.icon._outlink.png",
			"arcaneWeapon": "images/warrior/01322255.img.info.icon._outlink.png",
			"genesisWeapon": "images/warrior/01322264.img.info.icon._outlink.png"
		},
		secondary: {
			"princessNoSubweapon":  {
				subWeaponImage: "images/warrior/01099012.img.info.icon._outlink.png", subWeaponRefNum: 4
			},
			"ruinForceShield":  {
				subWeaponImage: "images/warrior/01099015.img.info.icon._outlink.png", subWeaponRefNum: 5
			}
		},
		emblemImage: "images/warrior/01190701.img.info.icon._outlink.png"
	},
	"hayato": {
		classType: "warrior",
		weaponAttackSpeed: 5,
		weaponMultiplier: 1.25,
		weaponRefNum: 6, // Katana: 164, 197, 283, 326
		weaponImages: {
			"fafnirWeapon": "images/warrior/01542063.img.info.icon._outlink.png",
			"absolabWeapon": "images/warrior/01542108.img.info.icon._outlink.png",
			"arcaneWeapon": "images/warrior/01542131.img.info.icon._outlink.png",
			"genesisWeapon": "images/warrior/01542128.img.info.icon._outlink.png"
		},
		secondary: {
			"princessNoSubweapon":  {
				subWeaponImage: "images/warrior/01352807.img.info.icon._outlink.png", subWeaponRefNum: 6
			}
		},
		emblemImage: "images/warrior/01191101.img.info.icon._outlink.png"
	},
	"hero": {
		classType: "warrior",
		weaponAttackSpeed: 6,
		weaponMultiplier: 1.44, // +.1 hero bonus
		weaponRefNum: 8, // 2-h Sword: 171, 205, 295, 340
		weaponImages: {
			"fafnirWeapon": "images/warrior/01402196.img.info.icon._outlink.png",
			"absolabWeapon": "images/warrior/01402251.img.info.icon._outlink.png",
			"arcaneWeapon": "images/warrior/01402259.img.info.icon._outlink.png",
			"genesisWeapon": "images/warrior/01402268.img.info.icon._outlink.png"
		},
		secondary: {
			"princessNoSubweapon":  {
				subWeaponImage: "images/warrior/01352206.img.info.icon._outlink.png", subWeaponRefNum: 1
			}
		},
		emblemImage: "images/warrior/01190301.img.info.icon._outlink.png"
	},
	"kaiser": {
		classType: "warrior",
		weaponAttackSpeed: 6,
		weaponMultiplier: 1.34,
		weaponRefNum: 8, // 2-h Sword: 171, 205, 295, 340
		weaponImages: {
			"fafnirWeapon": "images/warrior/01402196.img.info.icon._outlink.png",
			"absolabWeapon": "images/warrior/01402251.img.info.icon._outlink.png",
			"arcaneWeapon": "images/warrior/01402259.img.info.icon._outlink.png",
			"genesisWeapon": "images/warrior/01402268.img.info.icon._outlink.png"
		},
		secondary: {
			"princessNoSubweapon":  {
				subWeaponImage: "images/warrior/01352506.img.info.icon._outlink.png", subWeaponRefNum: 7
			}
		},
		emblemImage: "images/warrior/01190001.img.info.icon._outlink.png"
	},
	"mihile": {
		classType: "warrior",
		weaponAttackSpeed: 6,
		weaponMultiplier: 1.24,
		weaponRefNum: 6, // 1-h Sword: 164, 197, 283, 326
		weaponImages: {
			"fafnirWeapon": "images/warrior/01302275.img.info.icon._outlink.png",
			"absolabWeapon": "images/warrior/01302333.img.info.icon._outlink.png",
			"arcaneWeapon": "images/warrior/01302343.img.info.icon._outlink.png",
			"genesisWeapon": "images/warrior/01302355.img.info.icon._outlink.png"
		},
		secondary: {
			"princessNoSubweapon":  {
				subWeaponImage: "images/warrior/01098006.img.info.icon._outlink.png", subWeaponRefNum: 8
			}
		},
		emblemImage: "images/warrior/01190801.img.info.icon._outlink.png"
	},
	"paladin": {
		classType: "warrior",
		weaponAttackSpeed: 6,
		weaponMultiplier: 1.34,
		weaponRefNum: 8, // 2-h Blunt: 171, 205, 295, 340
		weaponImages: {
			"fafnirWeapon": "images/warrior/01402196.img.info.icon._outlink.png",
			"absolabWeapon": "images/warrior/01402251.img.info.icon._outlink.png",
			"arcaneWeapon": "images/warrior/01402259.img.info.icon._outlink.png",
			"genesisWeapon": "images/warrior/01402268.img.info.icon._outlink.png"
		},
		secondary: {
			"princessNoSubweapon":  {
				subWeaponImage: "images/warrior/01352216.img.info.icon._outlink.png", subWeaponRefNum: 1
			}
		},
		emblemImage: "images/warrior/01190301.img.info.icon._outlink.png"
	},
	"shade": {
		classType: "pirate",
		weaponAttackSpeed: 5,
		weaponMultiplier: 1.7,
		weaponRefNum: 3, // Knuckle: 128, 154, 221, 255
		weaponImages: {
			"fafnirWeapon": "images/pirate/01482168.img.info.icon._outlink.png",
			"absolabWeapon": "images/pirate/01482216.img.info.icon._outlink.png",
			"arcaneWeapon": "images/pirate/01482221.img.info.icon._outlink.png",
			"genesisWeapon": "images/pirate/01482232.img.info.icon._outlink.png"
		},
		secondary: {
			"princessNoSubweapon":  {
				subWeaponImage: "images/pirate/01353105.img.info.icon._outlink.png", subWeaponRefNum: 1
			}
		},
		emblemImage: "images/pirate/01190521.img.info.icon._outlink.png"
	},
	"thunderBreaker": {
		classType: "pirate",
		weaponAttackSpeed: 5,
		weaponMultiplier: 1.7,
		weaponRefNum: 3, // Knuckle: 128, 154, 221, 255
		weaponImages: {
			"fafnirWeapon": "images/pirate/01482168.img.info.icon._outlink.png",
			"absolabWeapon": "images/pirate/01482216.img.info.icon._outlink.png",
			"arcaneWeapon": "images/pirate/01482221.img.info.icon._outlink.png",
			"genesisWeapon": "images/pirate/01482232.img.info.icon._outlink.png"
		},
		secondary: {
			"princessNoSubweapon":  {
				subWeaponImage: "images/pirate/01352975.img.info.icon._outlink.png", subWeaponRefNum: 3
			}
		},
		emblemImage: "images/pirate/01190801.img.info.icon._outlink.png"
	},
	"angelicBuster": {
		classType: "pirate",
		weaponAttackSpeed: 5,
		weaponMultiplier: 1.7,
		weaponRefNum: 3, // Soul Shooter: 128, 154, 221, 255
		weaponImages: {
			"fafnirWeapon": "images/pirate/01222058.img.info.icon._outlink.png",
			"absolabWeapon": "images/pirate/01222114.img.info.icon._outlink.png",
			"arcaneWeapon": "images/pirate/01222113.img.info.icon._outlink.png",
			"genesisWeapon": "images/pirate/01222122.img.info.icon._outlink.png"
		},
		secondary: {
			"princessNoSubweapon":  {
				subWeaponImage: "images/pirate/01352606.img.info.icon._outlink.png", subWeaponRefNum: 7
			}
		},
		emblemImage: "images/pirate/01190101.img.info.icon._outlink.png"
	},
	"bowmaster": {
		classType: "bowman",
		weaponAttackSpeed: 6,
		weaponMultiplier: 1.3,
		weaponRefNum: 5, // Bow: 160, 192, 276, 318
		weaponImages: {
			"fafnirWeapon": "images/bowman/01452205.img.info.icon._outlink.png",
			"absolabWeapon": "images/bowman/01452252.img.info.icon._outlink.png",
			"arcaneWeapon": "images/bowman/01452257.img.info.icon._outlink.png",
			"genesisWeapon": "images/bowman/01452266.img.info.icon._outlink.png"
		},
		secondary: {
			"princessNoSubweapon":  {
				subWeaponImage: "images/bowman/01352266.img.info.icon._outlink.png", subWeaponRefNum: 1
			}
		},
		emblemImage: "images/bowman/01190301.img.info.icon._outlink.png"
	},
	"corsair": {
		classType: "pirate",
		weaponAttackSpeed: 5,
		weaponMultiplier: 1.5,
		weaponRefNum: 2, // Gun: 125, 150, 216, 249
		weaponImages: {
			"fafnirWeapon": "images/pirate/01492179.img.info.icon._outlink.png",
			"absolabWeapon": "images/pirate/01492231.img.info.icon._outlink.png",
			"arcaneWeapon": "images/pirate/01492235.img.info.icon._outlink.png",
			"genesisWeapon": "images/pirate/01492245.img.info.icon._outlink.png"
		},
		secondary: {
			"princessNoSubweapon":  {
				subWeaponImage: "images/pirate/01352916.img.info.icon._outlink.png", subWeaponRefNum: 1
			}
		},
		emblemImage: "images/pirate/01190301.img.info.icon._outlink.png"
	},
	"kain": {
		classType: "bowman",
		weaponAttackSpeed: 4,
		weaponMultiplier: 1.3,
		weaponRefNum: 5, // Whispershot: 160, 192, 276, 318
		weaponImages: {
			"fafnirWeapon": "images/bowman/01214016.img.info.icon._outlink.png",
			"absolabWeapon": "images/bowman/01214017.img.info.icon._outlink.png",
			"arcaneWeapon": "images/bowman/01214018.img.info.icon._outlink.png",
			"genesisWeapon": "images/bowman/01214022.img.info.icon._outlink.png"
		},
		secondary: {
			"princessNoSubweapon":  {
				subWeaponImage: "images/bowman/01354017.img.info.icon._outlink.png", subWeaponRefNum: 1
			}
		},
		emblemImage: "images/bowman/01190554.img.info.icon._outlink.png"
	},
	"marksman": {
		classType: "bowman",
		weaponAttackSpeed: 6,
		weaponMultiplier: 1.35,
		weaponRefNum: 6, // Crossbow: 164, 197, 283, 326
		weaponImages: {
			"fafnirWeapon": "images/bowman/01462193.img.info.icon._outlink.png",
			"absolabWeapon": "images/bowman/01462239.img.info.icon._outlink.png",
			"arcaneWeapon": "images/bowman/01462243.img.info.icon._outlink.png",
			"genesisWeapon": "images/bowman/01462252.img.info.icon._outlink.png"
		},
		secondary: {
			"princessNoSubweapon":  {
				subWeaponImage: "images/bowman/01352276.img.info.icon._outlink.png", subWeaponRefNum: 1
			}
		},
		emblemImage: "images/bowman/01190301.img.info.icon._outlink.png"
	},
	"mechanic": {
		classType: "pirate",
		weaponAttackSpeed: 5,
		weaponMultiplier: 1.5,
		weaponRefNum: 2, // Gun: 125, 150, 216, 249
		weaponImages: {
			"fafnirWeapon": "images/pirate/01492179.img.info.icon._outlink.png",
			"absolabWeapon": "images/pirate/01492231.img.info.icon._outlink.png",
			"arcaneWeapon": "images/pirate/01492235.img.info.icon._outlink.png",
			"genesisWeapon": "images/pirate/01492245.img.info.icon._outlink.png"
		},
		secondary: {
			"princessNoSubweapon":  {
				subWeaponImage: "images/pirate/01352707.img.info.icon._outlink.png", subWeaponRefNum: 9
			}
		},
		emblemImage: "images/pirate/01190601.img.info.icon._outlink.png"
	},
	"mercedes": {
		classType: "bowman",
		weaponAttackSpeed: 6,
		weaponMultiplier: 1.3,
		weaponRefNum: 5, // Dual Bowguns: 160, 192, 276, 318
		weaponImages: {
			"fafnirWeapon": "images/bowman/01522094.img.info.icon._outlink.png",
			"absolabWeapon": "images/bowman/01522138.img.info.icon._outlink.png",
			"arcaneWeapon": "images/bowman/01522143.img.info.icon._outlink.png",
			"genesisWeapon": "images/bowman/01522152.img.info.icon._outlink.png"
		},
		secondary: {
			"princessNoSubweapon":  {
				subWeaponImage: "images/bowman/01352009.img.info.icon._outlink.png", subWeaponRefNum: 9
			}
		},
		emblemImage: "images/bowman/01190511.img.info.icon._outlink.png"
	},
	"pathfinder": {
		classType: "bowman",
		weaponAttackSpeed: 6,
		weaponMultiplier: 1.3,
		weaponRefNum: 5, // Bow: 160, 192, 276, 318
		weaponImages: {
			"fafnirWeapon": "images/bowman/01452205.img.info.icon._outlink.png",
			"absolabWeapon": "images/bowman/01452252.img.info.icon._outlink.png",
			"arcaneWeapon": "images/bowman/01452257.img.info.icon._outlink.png",
			"genesisWeapon": "images/bowman/01452266.img.info.icon._outlink.png"
		},
		secondary: {
			"princessNoSubweapon":  {
				subWeaponImage: "images/bowman/01353707.img.info.icon._outlink.png", subWeaponRefNum: 1
			}
		},
		emblemImage: "images/bowman/01190301.img.info.icon._outlink.png"
	},
	"wildHunter": {
		classType: "bowman",
		weaponAttackSpeed: 6,
		weaponMultiplier: 1.35,
		weaponRefNum: 6, // Crossbow: 164, 197, 283, 326
		weaponImages: {
			"fafnirWeapon": "images/bowman/01462193.img.info.icon._outlink.png",
			"absolabWeapon": "images/bowman/01462239.img.info.icon._outlink.png",
			"arcaneWeapon": "images/bowman/01462243.img.info.icon._outlink.png",
			"genesisWeapon": "images/bowman/01462252.img.info.icon._outlink.png"
		},
		secondary: {
			"princessNoSubweapon":  {
				subWeaponImage: "images/bowman/01352967.img.info.icon._outlink.png", subWeaponRefNum: 1
			}
		},
		emblemImage: "images/bowman/01190601.img.info.icon._outlink.png"
	},
	"windArcher": {
		classType: "bowman",
		weaponAttackSpeed: 6,
		weaponMultiplier: 1.3,
		weaponRefNum: 5, // Bow: 160, 192, 276, 318
		weaponImages: {
			"fafnirWeapon": "images/bowman/01452205.img.info.icon._outlink.png",
			"absolabWeapon": "images/bowman/01452252.img.info.icon._outlink.png",
			"arcaneWeapon": "images/bowman/01452257.img.info.icon._outlink.png",
			"genesisWeapon": "images/bowman/01452266.img.info.icon._outlink.png"
		},
		secondary: {
			"princessNoSubweapon":  {
				subWeaponImage: "images/bowman/01352975.img.info.icon._outlink.png", subWeaponRefNum: 3
			}
		},
		emblemImage: "images/bowman/01190801.img.info.icon._outlink.png"
	},
	"archMageIceLightning": {
		classType: "magician",
		weaponAttackSpeed: 6, // 8 -> 6 Casting speed override
		weaponMultiplier: 1.2,
		weaponRefNum: 12, // Staff (Att/MAtt): 126/204, 151/245, 218/353, 251/406
		weaponImages: {
			"fafnirWeapon": "images/magician/01382208.img.info.icon._outlink.png",
			"absolabWeapon": "images/magician/01382259.img.info.icon._outlink.png",
			"arcaneWeapon": "images/magician/01382265.img.info.icon._outlink.png",
			"genesisWeapon": "images/magician/01382274.img.info.icon._outlink.png"
		},
		secondary: {
			"princessNoSubweapon": {
				subWeaponImage: "images/magician/01352246.img.info.icon._outlink.png", subWeaponRefNum: 10
			},
			"deimosMageShield": {
				subWeaponImage: "images/magician/01092089.img.info.icon._outlink.png", subWeaponRefNum: 11
			}
		},
		emblemImage: "images/magician/01190301.img.info.icon._outlink.png"
	},
	"archMageFirePoison": {
		classType: "magician",
		weaponAttackSpeed: 6, // 8 -> 6 Casting speed override
		weaponMultiplier: 1.2,
		weaponRefNum: 12, // Staff (Att/MAtt): 126/204, 151/245, 218/353, 251/406
		weaponImages: {
			"fafnirWeapon": "images/magician/01382208.img.info.icon._outlink.png",
			"absolabWeapon": "images/magician/01382259.img.info.icon._outlink.png",
			"arcaneWeapon": "images/magician/01382265.img.info.icon._outlink.png",
			"genesisWeapon": "images/magician/01382274.img.info.icon._outlink.png"
		},
		secondary: {
			"princessNoSubweapon":  {
				subWeaponImage: "images/magician/01352236.img.info.icon._outlink.png", subWeaponRefNum: 10
			},
			"deimosMageShield":  {
				subWeaponImage: "images/magician/01092089.img.info.icon._outlink.png", subWeaponRefNum: 11
			}
		},
		emblemImage: "images/magician/01190301.img.info.icon._outlink.png"
	},
	"battleMage": {
		classType: "magician",
		weaponAttackSpeed: 6, // 8 -> 6 Casting speed override
		weaponMultiplier: 1.2,
		weaponRefNum: 12, // Staff (Att/MAtt): 126/204, 151/245, 218/353, 251/406
		weaponImages: {
			"fafnirWeapon": "images/magician/01382208.img.info.icon._outlink.png",
			"absolabWeapon": "images/magician/01382259.img.info.icon._outlink.png",
			"arcaneWeapon": "images/magician/01382265.img.info.icon._outlink.png",
			"genesisWeapon": "images/magician/01382274.img.info.icon._outlink.png"
		},
		secondary: {
			"princessNoSubweapon":  {
				subWeaponImage: "images/magician/01352957.img.info.icon._outlink.png", subWeaponRefNum: 10
			},
			"deimosMageShield":  {
				subWeaponImage: "images/magician/01092089.img.info.icon._outlink.png", subWeaponRefNum: 11
			}
		},
		emblemImage: "images/magician/01190601.img.info.icon._outlink.png"
	},
	"beastTamer": {
		classType: "magician",
		weaponAttackSpeed: 6,
		weaponMultiplier: 1.34,
		weaponRefNum: 11, // Scepter (Att/MAtt): 119/201, 143/241, 206/347, 237/400
		weaponImages: {
			"fafnirWeapon": "images/magician/01252103.img.info.icon._outlink.png",
			"absolabWeapon": "images/magician/01252104.img.info.icon._outlink.png",
			"arcaneWeapon": "images/magician/01252108.img.info.icon._outlink.png",
			"genesisWeapon": "images/magician/01252106.img.info.icon._outlink.png"
		},
		secondary: {
			"princessNoSubweapon":  {
				subWeaponImage: "images/magician/01352815.img.info.icon._outlink.png", subWeaponRefNum: 12
			},
			"deimosMageShield":  {
				subWeaponImage: "images/magician/01092089.img.info.icon._outlink.png", subWeaponRefNum: 11
			}
		},
		emblemImage: "images/magician/01191109.img.info.icon._outlink.png"
	},
	"bishop": {
		classType: "magician",
		weaponAttackSpeed: 6, // 8 -> 6 Casting speed override
		weaponMultiplier: 1.2,
		weaponRefNum: 12, // Staff (Att/MAtt): 126/204, 151/245, 218/353, 251/406
		weaponImages: {
			"fafnirWeapon": "images/magician/01382208.img.info.icon._outlink.png",
			"absolabWeapon": "images/magician/01382259.img.info.icon._outlink.png",
			"arcaneWeapon": "images/magician/01382265.img.info.icon._outlink.png",
			"genesisWeapon": "images/magician/01382274.img.info.icon._outlink.png"
		},
		secondary: {
			"princessNoSubweapon":  {
				subWeaponImage: "images/magician/01352256.img.info.icon._outlink.png", subWeaponRefNum: 10
			},
			"deimosMageShield":  {
				subWeaponImage: "images/magician/01092089.img.info.icon._outlink.png", subWeaponRefNum: 11
			}
		},
		emblemImage: "images/magician/01190301.img.info.icon._outlink.png"
	},
	"blazeWizard": {
		classType: "magician",
		weaponAttackSpeed: 6, // 8 -> 6 Casting speed override
		weaponMultiplier: 1.2,
		weaponRefNum: 12, // Staff (Att/MAtt): 126/204, 151/245, 218/353, 251/406
		weaponImages: {
			"fafnirWeapon": "images/magician/01382208.img.info.icon._outlink.png",
			"absolabWeapon": "images/magician/01382259.img.info.icon._outlink.png",
			"arcaneWeapon": "images/magician/01382265.img.info.icon._outlink.png",
			"genesisWeapon": "images/magician/01382274.img.info.icon._outlink.png"
		},
		secondary: {
			"princessNoSubweapon":  {
				subWeaponImage: "images/magician/01352975.img.info.icon._outlink.png", subWeaponRefNum: 3
			},
			"deimosMageShield":  {
				subWeaponImage: "images/magician/01092089.img.info.icon._outlink.png", subWeaponRefNum: 11
			}
		},
		emblemImage: "images/magician/01190801.img.info.icon._outlink.png"
	},
	"evan": {
		classType: "magician",
		weaponAttackSpeed: 6, // 8 -> 6 Casting speed override
		weaponMultiplier: 1.2,
		weaponRefNum: 12, // Staff (Att/MAtt): 126/204, 151/245, 218/353, 251/406
		weaponImages: {
			"fafnirWeapon": "images/magician/01382208.img.info.icon._outlink.png",
			"absolabWeapon": "images/magician/01382259.img.info.icon._outlink.png",
			"arcaneWeapon": "images/magician/01382265.img.info.icon._outlink.png",
			"genesisWeapon": "images/magician/01382274.img.info.icon._outlink.png"
		},
		secondary: {
			"princessNoSubweapon":  {
				subWeaponImage: "images/magician/01352945.img.info.icon._outlink.png", subWeaponRefNum: 3
			},
			"deimosMageShield":  {
				subWeaponImage: "images/magician/01092089.img.info.icon._outlink.png", subWeaponRefNum: 11
			}
		},
		emblemImage: "images/magician/01190519.img.info.icon._outlink.png"
	},
	"illium": {
		classType: "magician",
		weaponAttackSpeed: 6,
		weaponMultiplier: 1.2,
		weaponRefNum: 11, // Lucent Gauntlet (Att/MAtt): 119/201, 143/241, 206/347, 237/400
		weaponImages: {
			"fafnirWeapon": "images/magician/01282015.img.info.icon._outlink.png",
			"absolabWeapon": "images/magician/01282016.img.info.icon._outlink.png",
			"arcaneWeapon": "images/magician/01282017.img.info.icon._outlink.png",
			"genesisWeapon": "images/magician/01282040.img.info.icon._outlink.png"
		},
		secondary: {
			"princessNoSubweapon":  {
				subWeaponImage: "images/magician/01353505.img.info.icon._outlink.png", subWeaponRefNum: 10
			}
		},
		emblemImage: "images/magician/01190532.img.info.icon._outlink.png"
	},
	"kanna": {
		classType: "magician",
		weaponAttackSpeed: 6, // 8 -> 6 Casting speed override
		weaponMultiplier: 1.35,
		weaponRefNum: 13, // Fan (Att/MAtt): 126/204, 151/245, 218/353, 251/406
		weaponImages: {
			"fafnirWeapon": "images/magician/01552063.img.info.icon._outlink.png",
			"absolabWeapon": "images/magician/01552110.img.info.icon._outlink.png",
			"arcaneWeapon": "images/magician/01552119.img.info.icon._outlink.png",
			"genesisWeapon": "images/magician/01552130.img.info.icon._outlink.png"
		},
		secondary: {
			"kannaFan":  {
				subWeaponImage: "images/magician/01552119.img.info.icon._outlink.png", subWeaponRefNum: 13
			}
		},
		emblemImage: "images/magician/01191103.img.info.icon._outlink.png"
	},
	"kinesis": {
		classType: "magician",
		weaponAttackSpeed: 6,
		weaponMultiplier: 1.2,
		weaponRefNum: 11, // Psy-Limiter (Att/MAtt): 119/201, 143/241, 206/347, 237/400
		weaponImages: {
			"fafnirWeapon": "images/magician/01262016.img.info.icon._outlink.png",
			"absolabWeapon": "images/magician/01262017.img.info.icon._outlink.png",
			"arcaneWeapon": "images/magician/01262039.img.info.icon._outlink.png",
			"genesisWeapon": "images/magician/01262051.img.info.icon._outlink.png"
		},
		secondary: {
			"princessNoSubweapon":  {
				subWeaponImage: "images/magician/01353205.img.info.icon._outlink.png", subWeaponRefNum: 10
			}
		},
		emblemImage: "images/magician/01191001.img.info.icon._outlink.png"
	},
	"lara": {
		classType: "magician",
		weaponAttackSpeed: 6,
		weaponMultiplier: 1.2,
		weaponRefNum: 11, // Wand (Att/MAtt): 119/201, 143/241, 206/347, 237/400
		weaponImages: {
			"fafnirWeapon": "images/magician/01372238.img.info.icon._outlink.png",
			"absolabWeapon": "images/magician/01372222.img.info.icon._outlink.png",
			"arcaneWeapon": "images/magician/01372228.img.info.icon._outlink.png",
			"genesisWeapon": "images/magician/01372237.img.info.icon._outlink.png"
		},
		secondary: {
			"princessNoSubweapon":  {
				subWeaponImage: "images/magician/01354027.img.info.icon._outlink.png", subWeaponRefNum: 10
			}
		},
		emblemImage: "images/magician/01190561.img.info.icon._outlink.png"
	},
	"luminous": {
		classType: "magician",
		weaponAttackSpeed: 6,
		weaponMultiplier: 1.2,
		weaponRefNum: 11, // Shining Rod (Att/MAtt): 119/201, 143/241, 206/347, 237/400
		weaponImages: {
			"fafnirWeapon": "images/magician/01212130.img.info.icon._outlink.png",
			"absolabWeapon": "images/magician/01212115.img.info.icon._outlink.png",
			"arcaneWeapon": "images/magician/01212120.img.info.icon._outlink.png",
			"genesisWeapon": "images/magician/01212129.img.info.icon._outlink.png"
		},
		secondary: {
			"princessNoSubweapon":  {
				subWeaponImage: "images/magician/01352406.img.info.icon._outlink.png", subWeaponRefNum: 14
			}
		},
		emblemImage: "images/magician/info.icon._outlink.png"
	},
	"hoyoung": {
		classType: "thief",
		weaponAttackSpeed: 4,
		weaponMultiplier: 1.3,
		weaponRefNum: 5, // Ritual Fan: 160, 192, 276, 318
		weaponImages: {
			"fafnirWeapon": "images/thief/01292016.img.info.icon._outlink.png",
			"absolabWeapon": "images/thief/01292017.img.info.icon._outlink.png",
			"arcaneWeapon": "images/thief/01292018.img.info.icon._outlink.png",
			"genesisWeapon": "images/thief/01292022.img.info.icon._outlink.png"
		},
		secondary: {
			"princessNoSubweapon":  {
				subWeaponImage: "images/thief/01353807.img.info.icon._outlink.png", subWeaponRefNum: 15
			}
		},
		emblemImage: "images/thief/01190550.img.info.icon._outlink.png"
	},
	"khali": {
		classType: "thief",
		weaponAttackSpeed: 5,
		weaponMultiplier: 1.3,
		weaponRefNum: 5, // Chakram: 160, 192, 276, 318
		weaponImages: {
			"fafnirWeapon": "images/thief/01404016.img.info.icon._outlink.png",
			"absolabWeapon": "images/thief/01404017.img.info.icon._outlink.png",
			"arcaneWeapon": "images/thief/01404030.img.info.icon._outlink.png",
			"genesisWeapon": "images/thief/01190563.img.info.icon._outlink.png"
		},
		secondary: {
			"princessNoSubweapon":  {
				subWeaponImage: "images/thief/01354037.img.info.icon._outlink.png", subWeaponRefNum: 15
			}
		},
		emblemImage: "images/thief/01190530.img.info.icon._outlink.png"
	},
	"nightLord": {
		classType: "thief",
		weaponAttackSpeed: 4,
		weaponMultiplier: 1.75,
		weaponRefNum: 1, // Claw: 86, 103, 149, 172
		weaponImages: {
			"fafnirWeapon": "images/thief/01272015.img.info.icon._outlink.png",
			"absolabWeapon": "images/thief/01272016.img.info.icon._outlink.png",
			"arcaneWeapon": "images/thief/01272017.img.info.icon._outlink.png",
			"genesisWeapon": "images/thief/01272040.img.info.icon._outlink.png"
		},
		secondary: {
			"princessNoSubweapon":  {
				subWeaponImage: "images/thief/01352296.img.info.icon._outlink.png", subWeaponRefNum: 15
			}
		},
		emblemImage: "images/thief/01190301.img.info.icon._outlink.png"
	},
	"nightWalker": {
		classType: "thief",
		weaponAttackSpeed: 4,
		weaponMultiplier: 1.75,
		weaponRefNum: 1, // Claw: 86, 103, 149, 172
		weaponImages: {
			"fafnirWeapon": "images/thief/01272015.img.info.icon._outlink.png",
			"absolabWeapon": "images/thief/01272016.img.info.icon._outlink.png",
			"arcaneWeapon": "images/thief/01272017.img.info.icon._outlink.png",
			"genesisWeapon": "images/thief/01272040.img.info.icon._outlink.png"
		},
		secondary: {
			"princessNoSubweapon":  {
				subWeaponImage: "images/thief/01352975.img.info.icon._outlink.png", subWeaponRefNum: 3
			}
		},
		emblemImage: "images/thief/01190801.img.info.icon._outlink.png"
	},
	"phantom": {
		classType: "thief",
		weaponAttackSpeed: 5,
		weaponMultiplier: 1.3,
		weaponRefNum: 6, // Cane: 164, 197, 283, 326
		weaponImages: {
			"fafnirWeapon": "images/thief/01362090.img.info.icon._outlink.png",
			"absolabWeapon": "images/thief/01362135.img.info.icon._outlink.png",
			"arcaneWeapon": "images/thief/01362140.img.info.icon._outlink.png",
			"genesisWeapon": "images/thief/01362149.img.info.icon._outlink.png"
		},
		secondary: {
			"princessNoSubweapon":  {
				subWeaponImage: "images/thief/01352109.img.info.icon._outlink.png", subWeaponRefNum: 16
			}
		},
		emblemImage: "images/thief/01190515.img.info.icon._outlink.png"
	},
	"cadena": {
		classType: "thief",
		weaponAttackSpeed: 4,
		weaponMultiplier: 1.3,
		weaponRefNum: 5, // Chain: 160, 192, 276, 318
		weaponImages: {
			"fafnirWeapon": "images/thief/01272015.img.info.icon._outlink.png",
			"absolabWeapon": "images/thief/01272016.img.info.icon._outlink.png",
			"arcaneWeapon": "images/thief/01272017.img.info.icon._outlink.png",
			"genesisWeapon": "images/thief/01272040.img.info.icon._outlink.png"
		},
		secondary: {
			"princessNoSubweapon":  {
				subWeaponImage: "images/thief/01353306.img.info.icon._outlink.png", subWeaponRefNum: 15
			}
		},
		emblemImage: "images/thief/01190530.img.info.icon._outlink.png"
	},
	"dualBlade": {
		classType: "thief",
		weaponAttackSpeed: 4,
		weaponMultiplier: 1.3,
		weaponRefNum: 5, // Dagger: 160, 192, 276, 318
		weaponImages: {
			"fafnirWeapon": "images/thief/01332225.img.info.icon._outlink.png",
			"absolabWeapon": "images/thief/01332274.img.info.icon._outlink.png",
			"arcaneWeapon": "images/thief/01332279.img.info.icon._outlink.png",
			"genesisWeapon": "images/thief/01332289.img.info.icon._outlink.png"
		},
		secondary: {
			"sweetwaterKatara":  {
				subWeaponImage: "images/thief/01342090.img.info.icon._outlink.png", subWeaponRefNum: 17
			}
		},
		emblemImage: "images/thief/01190301.img.info.icon._outlink.png"
	},
	"shadower": {
		classType: "thief",
		weaponAttackSpeed: 4,
		weaponMultiplier: 1.3,
		weaponRefNum: 5, // Dagger: 160, 192, 276, 318
		weaponImages: {
			"fafnirWeapon": "images/thief/01332225.img.info.icon._outlink.png",
			"absolabWeapon": "images/thief/01332274.img.info.icon._outlink.png",
			"arcaneWeapon": "images/thief/01332279.img.info.icon._outlink.png",
			"genesisWeapon": "images/thief/01332289.img.info.icon._outlink.png"
		},
		secondary: {
			"princessNoSubweapon":  {
				subWeaponImage: "images/thief/01352286.img.info.icon._outlink.png", subWeaponRefNum: 15
			},
			"deimosThiefShield":  {
				subWeaponImage: "images/thief/01092088.img.info.icon._outlink.png", subWeaponRefNum: 18
			}
		},
		emblemImage: "images/thief/01190301.img.info.icon._outlink.png"
	},
	"demonAvenger": {
		classType: "warrior",
		weaponAttackSpeed: 6,
		weaponMultiplier: 1.3,
		weaponRefNum: 8, // Desperado: 171, 205, 295, 340
		weaponImages: {
			"fafnirWeapon": "images/warrior/01232057.img.info.icon._outlink.png",
			"absolabWeapon": "images/warrior/01232114.img.info.icon._outlink.png",
			"arcaneWeapon": "images/warrior/01232113.img.info.icon._outlink.png",
			"genesisWeapon": "images/warrior/01232122.img.info.icon._outlink.png"
		},
		secondary: {
			"princessNoSubweapon":  {
				subWeaponImage: "images/warrior/01099012.img.info.icon._outlink.png", subWeaponRefNum: 4
			},
			"ruinForceShield":  {
				subWeaponImage: "images/warrior/01099015.img.info.icon._outlink.png", subWeaponRefNum: 5
			}
		},
		emblemImage: "images/warrior/01190701.img.info.icon._outlink.png"
	},
	"xenon": {
		classType: "thief",
		weaponAttackSpeed: 5,
		weaponMultiplier: 1.3125,
		weaponRefNum: 3, // Whip Blade: 128, 154, 221, 255
		weaponImages: {
			"fafnirWeapon": "images/thief/01242060.img.info.icon._outlink.png",
			"absolabWeapon": "images/thief/01242120.img.info.icon._outlink.png",
			"arcaneWeapon": "images/thief/01242145.img.info.icon._outlink.png",
			"genesisWeapon": "images/thief/01242141.img.info.icon._outlink.png"
		},
		secondary: {
			"princessNoSubweapon":  {
				subWeaponImage: "images/thief/01353006.img.info.icon._outlink.png", subWeaponRefNum: 19
			}
		},
		emblemImage: "images/thief/01190201.img.info.icon._outlink.png" //hybrid heart
	},
	"zero": {
		classType: "warrior",
		weaponAttackSpeed: 6,
		weaponMultiplier: 1.3125,
		weaponMultiplier2: 149,
		weaponRefNum: 7, // Lazuli: 169, 203, 293, 337
		weaponRefNum2: 9, // Lapis 173, 207, 297, 342, or Lazuli + 4
		weaponImages: {
			"fafnirWeapon": "images/warrior/01572007.img.info.icon._outlink.png",
			"absolabWeapon": "images/warrior/01572008.img.info.icon._outlink.png",
			"arcaneWeapon": "images/warrior/01572009.img.info.icon._outlink.png",
			"genesisWeapon": "images/warrior/01572010.img.info.icon._outlink.png"
		},
		secondary: {
			"fafnirWeapon":  {
				subWeaponImage: "images/warrior/01562007.img.info.icon._outlink.png", subWeaponRefNum: 20
			},
			"absolabWeapon":  {
				subWeaponImage: "images/warrior/01562008.img.info.icon._outlink.png", subWeaponRefNum: 21
			},
			"arcaneWeapon":  {
				subWeaponImage: "images/warrior/01562009.img.info.icon._outlink.png", subWeaponRefNum: 22
			},
			"genesisWeapon":  {
				subWeaponImage: "images/warrior/01562010.img.info.icon._outlink.png", subWeaponRefNum: 23
			}
		},
		emblemImage: "images/warrior/01190900.img.info.icon._outlink.png"
	}
};

//use weaponReferenceNum
const weaponStats = {
	"none": {
		1 : { itemLv: 0, jobStat: 0, allStat: 0, hp: 0, mp: 0, att: 0, mAtt: 0 }
	},
	"fafnirWeapon": {
		1 : { itemLv: 150, jobStat: 40, allStat: 0, hp: 0, mp: 0, att: 86,  mAtt: 0 }, // Claw
		2 : { itemLv: 150, jobStat: 40, allStat: 0, hp: 0, mp: 0, att: 125, mAtt: 0 }, // Gun
		3 : { itemLv: 150, jobStat: 40, allStat: 0, hp: 0, mp: 0, att: 128, mAtt: 0 }, // Knuckle, Arm Cannon, Soul Shooter, Whip Blade
		4 : { itemLv: 150, jobStat: 40, allStat: 0, hp: 0, mp: 0, att: 153, mAtt: 0 }, // Polearm
		5 : { itemLv: 150, jobStat: 40, allStat: 0, hp: 0, mp: 0, att: 160, mAtt: 0 }, // Bow, Whispershot, Ritual Fan, Chain, Dagger
		6 : { itemLv: 150, jobStat: 40, allStat: 0, hp: 0, mp: 0, att: 164, mAtt: 0 }, // 1-h Blunt/Axe, Katana, 1-h Sword, Crossbow, Cane
		7 : { itemLv: 150, jobStat: 40, allStat: 0, hp: 0, mp: 0, att: 169, mAtt: 0 }, // Zero(Lazuli)
		8 : { itemLv: 150, jobStat: 40, allStat: 0, hp: 0, mp: 0, att: 171, mAtt: 0 }, // Bladecaster, Spear, 2-h Sword, 2-h Blunt, Desperado
		9 : { itemLv: 150, jobStat: 40, allStat: 0, hp: 0, mp: 0, att: 173, mAtt: 0 }, // Zero(Lapis)
		10 : { itemLv: 150, jobStat: 40, allStat: 0, hp: 0, mp: 0, att: 175, mAtt: 0 }, // Cannon
		11 : { itemLv: 150, jobStat: 40, allStat: 0, hp: 0, mp: 0, att: 119, mAtt: 201 }, // Scepter, Lucent Gauntlet, Psy-Limiter, Wand, Shining Rod
		12 : { itemLv: 150, jobStat: 40, allStat: 0, hp: 0, mp: 0, att: 126, mAtt: 204 }, // Staff
		13 : { itemLv: 150, jobStat: 40, allStat: 0, hp: 0, mp: 0, att: 126, mAtt: 204 } // Fan
	},
	"absolabWeapon": {
		1 : { itemLv: 160, jobStat: 60, allStat: 0, hp: 0, mp: 0, att: 103, mAtt: 0 },
		2 : { itemLv: 160, jobStat: 60, allStat: 0, hp: 0, mp: 0, att: 150, mAtt: 0 },
		3 : { itemLv: 160, jobStat: 60, allStat: 0, hp: 0, mp: 0, att: 154, mAtt: 0 },
		4 : { itemLv: 160, jobStat: 60, allStat: 0, hp: 0, mp: 0, att: 184, mAtt: 0 },
		5 : { itemLv: 160, jobStat: 60, allStat: 0, hp: 0, mp: 0, att: 192, mAtt: 0 },
		6 : { itemLv: 160, jobStat: 60, allStat: 0, hp: 0, mp: 0, att: 197, mAtt: 0 },
		7 : { itemLv: 160, jobStat: 60, allStat: 0, hp: 0, mp: 0, att: 203, mAtt: 0 },
		8 : { itemLv: 160, jobStat: 60, allStat: 0, hp: 0, mp: 0, att: 205, mAtt: 0 },
		9 : { itemLv: 160, jobStat: 60, allStat: 0, hp: 0, mp: 0, att: 207, mAtt: 0 },
		10 : { itemLv: 160, jobStat: 60, allStat: 0, hp: 0, mp: 0, att: 210, mAtt: 0 },
		11 : { itemLv: 160, jobStat: 60, allStat: 0, hp: 0, mp: 0, att: 143, mAtt: 241 },
		12 : { itemLv: 160, jobStat: 60, allStat: 0, hp: 0, mp: 0, att: 151, mAtt: 245 },
		13 : { itemLv: 160, jobStat: 60, allStat: 0, hp: 0, mp: 0, att: 143, mAtt: 241 }
	},
	"arcaneWeapon": {
		1 : { itemLv: 200, jobStat: 100, allStat: 0, hp: 0, mp: 0, att: 149, mAtt: 0 },
		2 : { itemLv: 200, jobStat: 100, allStat: 0, hp: 0, mp: 0, att: 216, mAtt: 0 },
		3 : { itemLv: 200, jobStat: 100, allStat: 0, hp: 0, mp: 0, att: 221, mAtt: 0 },
		4 : { itemLv: 200, jobStat: 100, allStat: 0, hp: 0, mp: 0, att: 264, mAtt: 0 },
		5 : { itemLv: 200, jobStat: 100, allStat: 0, hp: 0, mp: 0, att: 276, mAtt: 0 },
		6 : { itemLv: 200, jobStat: 100, allStat: 0, hp: 0, mp: 0, att: 283, mAtt: 0 },
		7 : { itemLv: 200, jobStat: 100, allStat: 0, hp: 0, mp: 0, att: 293, mAtt: 0 },
		8 : { itemLv: 200, jobStat: 100, allStat: 0, hp: 0, mp: 0, att: 295, mAtt: 0 },
		9 : { itemLv: 200, jobStat: 100, allStat: 0, hp: 0, mp: 0, att: 297, mAtt: 0 },
		10 : { itemLv: 200, jobStat: 100, allStat: 0, hp: 0, mp: 0, att: 302, mAtt: 0 },
		11 : { itemLv: 200, jobStat: 100, allStat: 0, hp: 0, mp: 0, att: 206, mAtt: 353 },
		12 : { itemLv: 200, jobStat: 100, allStat: 0, hp: 0, mp: 0, att: 218, mAtt: 347 },
		13 : { itemLv: 200, jobStat: 100, allStat: 0, hp: 0, mp: 0, att: 218, mAtt: 347 }
	},
	"genesisWeapon": {
		1 : { itemLv: 200, jobStat: 150, allStat: 0, hp: 0, mp: 0, att: 172, mAtt: 0 },
		2 : { itemLv: 200, jobStat: 150, allStat: 0, hp: 0, mp: 0, att: 249, mAtt: 0 },
		3 : { itemLv: 200, jobStat: 150, allStat: 0, hp: 0, mp: 0, att: 255, mAtt: 0 },
		4 : { itemLv: 200, jobStat: 150, allStat: 0, hp: 0, mp: 0, att: 304, mAtt: 0 },
		5 : { itemLv: 200, jobStat: 150, allStat: 0, hp: 0, mp: 0, att: 318, mAtt: 0 },
		6 : { itemLv: 200, jobStat: 150, allStat: 0, hp: 0, mp: 0, att: 326, mAtt: 0 },
		7 : { itemLv: 200, jobStat: 150, allStat: 0, hp: 0, mp: 0, att: 337, mAtt: 0 },
		8 : { itemLv: 200, jobStat: 150, allStat: 0, hp: 0, mp: 0, att: 340, mAtt: 0 },
		9 : { itemLv: 200, jobStat: 150, allStat: 0, hp: 0, mp: 0, att: 342, mAtt: 0 },
		10 : { itemLv: 200, jobStat: 150, allStat: 0, hp: 0, mp: 0, att: 348, mAtt: 0 },
		11 : { itemLv: 200, jobStat: 150, allStat: 0, hp: 0, mp: 0, att: 237, mAtt: 400 },
		12 : { itemLv: 200, jobStat: 150, allStat: 0, hp: 0, mp: 0, att: 251, mAtt: 406 },
		13 : { itemLv: 200, jobStat: 150, allStat: 0, hp: 0, mp: 0, att: 237, mAtt: 400 }
	}
};

const subWeaponStats = {
	1 : { str: 14, dex: 14, _int: 0, luk: 0, hp: 0, mp: 0, att: 9, mAtt: 0 }, // pNo standard STR/DEX
	2 : { str: 15, dex: 15, _int: 0, luk: 0, hp: 0, mp: 0, att: 10, mAtt: 0 }, // pNo Blaster
	3 : { str: 14, dex: 14, _int: 14, luk: 14, hp: 0, mp: 0, att: 9, mAtt: 9 }, // Cygnus Knight universal
	4 : { str: 26, dex: 17, _int: 0, luk: 0, hp: 1168, mp: 0, att: 0, mAtt: 0 }, // pNo Force Shield
	5 : { str: 10, dex: 10, _int: 0, luk: 0, hp: 560, mp: 0, att: 0, mAtt: 0 }, // Ruin Force Shield, +10% FD
	6 : { str: 17, dex: 17, _int: 0, luk: 0, hp: 560, mp: 0, att: 9, mAtt: 0 }, // pNo Hayato
	7 : { str: 14, dex: 14, _int: 14, luk: 14, hp: 0, mp: 0, att: 0, mAtt: 0 }, // pNo Nova (Kaiser, Angelic Buster)
	8 : { str: 18, dex: 18, _int: 0, luk: 0, hp: 1000, mp: 200, att: 0, mAtt: 0 }, // pNo Mihile
	9 : { str: 14, dex: 14, _int: 0, luk: 0, hp: 0, mp: 0, att: 0, mAtt: 0 }, // pNo no Att, Mechanic/Mercedes
	
	10 : { str: 0, dex: 0, _int: 14, luk: 14, hp: 0, mp: 0, att: 0, mAtt: 9 }, // pNo standard INT/LUK
	11 : { itemLv: 130, str: 0, dex: 0, _int: 10, luk: 0, hp: 0, mp: 0, att: 0, mAtt: 0 }, // Deimos Sage Shield (Pre SF)
	12 : { str: 0, dex: 0, _int: 17, luk: 17, hp: 0, mp: 0, att: 0, mAtt: 9 }, // pNo Beast Tamer
	13 : { itemLv: 200, str: 0, dex: 0, _int: 100, luk: 100, hp: 0, mp: 0, att: 206, mAtt: 347 }, // Arcane Umbra Fan (Kanna - Haku, Pre SF)
	14 : { str: 0, dex: 0, _int: 14, luk: 14, hp: 0, mp: 0, att: 0, mAtt: 0 }, // pNo no Att, Luminous
	
	15 : { str: 0, dex: 14, _int: 0, luk: 14, hp: 0, mp: 0, att: 9, mAtt: 0 }, // pNo LUK/DEX
	16 : { str: 0, dex: 14, _int: 0, luk: 14, hp: 0, mp: 0, att: 0, mAtt: 0 }, // pNo no Att, Phantom
	17 : { itemLv: 160, str: 0, dex: 0, _int: 0, luk: 0, hp: 500, mp: 0, att: 86, mAtt: 0 }, // Sweetwater Katara (Pre SF)
	18 : { itemLv: 130, str: 0, dex: 0, _int: 0, luk: 10, hp: 0, mp: 0, att: 0, mAtt: 0 }, // Deimos Thief Shield (Pre SF)
	19 : { str: 4, dex: 4, _int: 4, luk: 4, hp: 0, mp: 0, att: 0, mAtt: 0 }, // pNo Xenon
	
	20 : { itemLv: 150, str: 40, dex: 40, _int: 0, luk: 0, hp: 0, mp: 0, att: 173, mAtt: 0 }, // Lapis, Fafnir (Pre SF)
	21 : { itemLv: 160, str: 60, dex: 60, _int: 0, luk: 0, hp: 0, mp: 0, att: 207, mAtt: 0 }, // Lapis, AbsoLab (Pre SF)
	22 : { itemLv: 200, str: 100, dex: 100, _int: 0, luk: 0, hp: 0, mp: 0, att: 297, mAtt: 0 }, // Lapis, Arcane (Pre SF)
	23 : { itemLv: 200, str: 150, dex: 150, _int: 0, luk: 0, hp: 0, mp: 0, att: 342, mAtt: 0 }, // Lapis, Genesis (Pre SF)
	24 : { str: 0, dex: 0, _int: 0, luk: 0, hp: 0, mp: 0, att: 93, mAtt: 0 } // pNo Katara
};


























