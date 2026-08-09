var items_296f5d02_12fd_4166_a7c1_b5e830c9ee3a = 
{
	"yellowKey": {
		"cls": "tools",
		"name": "黄钥匙",
		"text": "可以打开一扇黄门",
		"hideInToolbox": true
	},
	"blueKey": {
		"cls": "tools",
		"name": "蓝钥匙",
		"text": "可以打开一扇蓝门",
		"hideInToolbox": true
	},
	"redKey": {
		"cls": "tools",
		"name": "红钥匙",
		"text": "可以打开一扇红门",
		"hideInToolbox": true
	},
	"redJewel": {
		"cls": "items",
		"name": "初阶红宝石",
		"text": "攻击+${core.values.redGem}",
		"itemEffect": "core.status.hero.atk += core.values.redGem * (core.status.thisMap.item_ratio||core.status.thisMap.ratio)",
		"itemEffectTip": "，攻击+${core.values.redGem * (core.status.thisMap.item_ratio||core.status.thisMap.ratio)}",
		"useItemEffect": "core.status.hero.atk += core.values.redGem",
		"canUseItemEffect": "true"
	},
	"blueJewel": {
		"cls": "items",
		"name": "初阶蓝宝石",
		"text": "，防御+${core.values.blueGem}",
		"itemEffect": "core.status.hero.def += core.values.blueGem * (core.status.thisMap.item_ratio||core.status.thisMap.ratio)",
		"itemEffectTip": "，防御+${core.values.blueGem * (core.status.thisMap.item_ratio||core.status.thisMap.ratio)}",
		"useItemEffect": "core.status.hero.def += core.values.blueGem",
		"canUseItemEffect": "true"
	},
	"greenJewel": {
		"cls": "items",
		"name": "初阶绿宝石",
		"text": "，护盾+${core.values.greenGem}",
		"itemEffect": "core.status.hero.mdef += core.values.greenGem * (core.status.thisMap.item_ratio||core.status.thisMap.ratio)",
		"itemEffectTip": "，护盾+${core.values.greenGem * (core.status.thisMap.item_ratio||core.status.thisMap.ratio)}",
		"useItemEffect": "core.status.hero.mdef += core.values.greenGem",
		"canUseItemEffect": "true"
	},
	"yellowJewel": {
		"cls": "items",
		"name": "初阶黄宝石",
		"text": "可以进行加点",
		"itemEffect": "core.status.hero.atk += core.values.redGem * (core.status.thisMap.item_ratio||core.status.thisMap.ratio);\ncore.status.hero.def += core.values.blueGem * (core.status.thisMap.item_ratio||core.status.thisMap.ratio);\ncore.status.hero.mdef += core.values.greenGem * (core.status.thisMap.item_ratio||core.status.thisMap.ratio);\ncore.status.hero.hp += core.values.yellowPotion * (core.status.thisMap.item_ratio||core.status.thisMap.ratio);",
		"itemEffectTip": "，全属性提升",
		"useItemEvent": [],
		"canUseItemEffect": "true",
		"useItemEffect": "core.status.hero.atk += core.values.redGem * (core.status.thisMap.item_ratio||core.status.thisMap.ratio);\ncore.status.hero.def += core.values.blueGem * (core.status.thisMap.item_ratio||core.status.thisMap.ratio);\ncore.status.hero.mdef += core.values.greenGem * (core.status.thisMap.item_ratio||core.status.thisMap.ratio);\ncore.status.hero.hp += core.values.yellowPotion * ratio;"
	},
	"redPotion": {
		"cls": "items",
		"name": "初始红血瓶",
		"text": "，生命+${core.values.redPotion}",
		"itemEffect": "core.status.hero.hp += core.values.redPotion * (core.status.thisMap.item_ratio||core.status.thisMap.ratio)",
		"itemEffectTip": "，生命+${core.values.redPotion * (core.status.thisMap.item_ratio||core.status.thisMap.ratio)}",
		"useItemEffect": "core.status.hero.hp += core.values.redPotion",
		"canUseItemEffect": "true"
	},
	"bluePotion": {
		"cls": "items",
		"name": "初始蓝血瓶",
		"text": "，生命+${core.values.bluePotion}",
		"itemEffect": "core.status.hero.hp += core.values.bluePotion * (core.status.thisMap.item_ratio||core.status.thisMap.ratio)",
		"itemEffectTip": "，生命+${core.values.bluePotion * (core.status.thisMap.item_ratio||core.status.thisMap.ratio)}",
		"useItemEffect": "core.status.hero.hp += core.values.bluePotion",
		"canUseItemEffect": "true"
	},
	"yellowPotion": {
		"cls": "items",
		"name": "初始黄血瓶",
		"text": "，生命+${core.values.yellowPotion}",
		"itemEffect": "core.status.hero.hp += core.values.yellowPotion * (core.status.thisMap.item_ratio||core.status.thisMap.ratio)",
		"itemEffectTip": "，生命+${core.values.yellowPotion * (core.status.thisMap.item_ratio||core.status.thisMap.ratio)}",
		"useItemEffect": "core.status.hero.hp += core.values.yellowPotion",
		"canUseItemEffect": "true"
	},
	"greenPotion": {
		"cls": "items",
		"name": "初始绿血瓶",
		"text": "，生命+${core.values.greenPotion}",
		"itemEffect": "core.status.hero.hp += core.values.greenPotion * (core.status.thisMap.item_ratio||core.status.thisMap.ratio)",
		"itemEffectTip": "，生命+${core.values.greenPotion * (core.status.thisMap.item_ratio||core.status.thisMap.ratio)}",
		"useItemEffect": "core.status.hero.hp += core.values.greenPotion",
		"canUseItemEffect": "true"
	},
	"sword0": {
		"cls": "items",
		"name": "破旧的剑",
		"text": "一把已经生锈的剑",
		"equip": {
			"type": 0,
			"atk": 0,
			"animate": "sword"
		},
		"itemEffect": "core.status.hero.atk += 0",
		"itemEffectTip": "'，攻击+0'"
	},
	"sword1": {
		"cls": "items",
		"name": "铁剑",
		"text": "一把很普通的铁剑。进攻+10。",
		"equip": {
			"type": "装备",
			"atk": 10
		},
		"itemEffect": "core.status.hero.atk += 15",
		"itemEffectTip": "，攻击+15"
	},
	"sword2": {
		"cls": "items",
		"name": "银剑",
		"text": "贵金属炼成的剑。进攻+40。",
		"equip": {
			"type": "装备",
			"atk": 40
		},
		"itemEffect": "core.status.hero.atk += 40",
		"itemEffectTip": "，攻击+40"
	},
	"sword3": {
		"cls": "items",
		"name": "魔法剑",
		"text": "装载有魔力装置的剑。进攻+15%。",
		"equip": {
			"type": "装备",
			"atk": 15,
			"percentage": true
		},
		"itemEffect": "core.status.hero.atk += 100",
		"itemEffectTip": "，攻击+100"
	},
	"sword4": {
		"cls": "items",
		"name": "通玉剑",
		"text": "稀有材料打制的宝剑。进攻+450。",
		"equip": {
			"type": "装备",
			"atk": 450
		},
		"itemEffect": "core.status.hero.atk += 180",
		"itemEffectTip": "，攻击+180"
	},
	"sword5": {
		"cls": "items",
		"name": "勇士剑",
		"text": "传说中征服魔塔的勇者佩戴的宝剑。进攻+40%。",
		"equip": {
			"type": "装备",
			"atk": 40,
			"percentage": true
		},
		"itemEffect": "core.status.hero.atk += 300",
		"itemEffectTip": "，攻击+300"
	},
	"shield0": {
		"cls": "items",
		"name": "破旧的盾",
		"text": "一个很破旧的铁盾",
		"equip": {
			"type": 1,
			"def": 0
		},
		"itemEffect": "core.status.hero.def += 0",
		"itemEffectTip": "，防御+0'"
	},
	"shield1": {
		"cls": "items",
		"name": "铁盾",
		"text": "一个很普通的铁盾。防守+5。",
		"equip": {
			"type": "装备",
			"def": 5
		},
		"itemEffect": "core.status.hero.def += 15",
		"itemEffectTip": "，防御+15"
	},
	"shield2": {
		"cls": "items",
		"name": "银盾",
		"text": "贵金属熔制的盾。防守+25。",
		"equip": {
			"type": "装备",
			"def": 25
		},
		"itemEffect": "core.status.hero.def += 40",
		"itemEffectTip": "，防御+40"
	},
	"shield3": {
		"cls": "items",
		"name": "魔法盾",
		"text": "镶嵌有魔力晶石的盾。防守+20%。",
		"equip": {
			"type": "装备",
			"def": 20,
			"percentage": true
		},
		"itemEffect": "core.status.hero.def += 100",
		"itemEffectTip": "，防御+100"
	},
	"shield4": {
		"cls": "items",
		"name": "通玉盾",
		"text": "稀有材料打制的盾牌。防守+300。",
		"equip": {
			"type": "装备",
			"def": 300
		},
		"itemEffect": "core.status.hero.def += 180",
		"itemEffectTip": "，防御+180"
	},
	"shield5": {
		"cls": "items",
		"name": "勇士盾",
		"text": "传说中征服魔塔的勇者佩戴的盾牌。防守+40%。",
		"equip": {
			"type": "装备",
			"def": 40,
			"percentage": true
		},
		"itemEffect": "core.status.hero.def += 300",
		"itemEffectTip": "，防御+300"
	},
	"superPotion": {
		"cls": "items",
		"name": "圣水",
		"text": "永远不会消失的生命之水。使角色生命值翻倍。（直接生效）",
		"itemEffect": "core.status.hero.hp *= 2",
		"itemEffectTip": "'，生命值翻倍'"
	},
	"moneyPocket": {
		"cls": "items",
		"name": "金钱袋",
		"itemEffect": "core.status.hero.money += 500",
		"itemEffectTip": "'，金币+500'"
	},
	"book": {
		"cls": "constants",
		"name": "怪物手册",
		"text": "可以查看当前楼层各怪物属性",
		"useItemEffect": "core.ui.drawBook(0);",
		"canUseItemEffect": "true"
	},
	"fly": {
		"cls": "constants",
		"name": "楼层传送器",
		"text": "可以自由往来去过的楼层",
		"hideInReplay": true,
		"useItemEffect": "core.ui.drawFly(core.floorIds.indexOf(core.status.floorId));",
		"canUseItemEffect": "(function () {\n\treturn core.status.maps[core.status.floorId].canFlyTo;\n})();"
	},
	"coin": {
		"cls": "constants",
		"name": "点石成金",
		"text": "一种罕见的古怪法术，习得后击败怪物获得双倍金币（重复习得无效）。"
	},
	"cross": {
		"cls": "constants",
		"name": "十字架",
		"text": "持有后无视怪物的无敌属性"
	},
	"knife": {
		"cls": "constants",
		"name": "屠龙匕首",
		"text": "该道具尚未被定义"
	},
	"shoes": {
		"cls": "constants",
		"name": "绿鞋",
		"text": "持有时无视负面地形"
	},
	"bigKey": {
		"cls": "tools",
		"name": "大黄门钥匙",
		"text": "可以开启当前层所有黄门",
		"itemEffect": "core.addItem('yellowKey', 1);\ncore.addItem('blueKey', 1);\ncore.addItem('redKey', 1);",
		"itemEffectTip": "，全钥匙+1",
		"useItemEffect": "(function () {\n\tvar actions = core.searchBlock(\"yellowDoor\").map(function (block) {\n\t\treturn { \"type\": \"openDoor\", \"loc\": [block.x, block.y], \"async\": true };\n\t});\n\tactions.push({ \"type\": \"waitAsync\" });\n\tactions.push({ \"type\": \"tip\", \"text\": core.material.items[itemId].name + \"使用成功\" });\n\tcore.insertAction(actions);\n})();",
		"canUseItemEffect": "(function () {\n\treturn core.searchBlock('yellowDoor').length > 0;\n})();"
	},
	"greenKey": {
		"cls": "tools",
		"name": "绿钥匙",
		"text": "可以打开一扇绿门"
	},
	"steelKey": {
		"cls": "tools",
		"name": "铁门钥匙",
		"text": "可以打开一扇铁门"
	},
	"pickaxe": {
		"cls": "tools",
		"name": "破墙镐",
		"text": "可以破坏勇士面前的墙（快捷键1）",
		"useItemEffect": "(function () {\n\tvar canBreak = function (x, y) {\n\t\tvar block = core.getBlock(x, y);\n\t\tif (block == null) return false;\n\t\treturn block.event.canBreak;\n\t};\n\n\tvar success = false;\n\tvar pickaxeFourDirections = false; // 是否四方向破；如果是将其改成true\n\tif (pickaxeFourDirections) {\n\t\t// 四方向破\n\t\tfor (var direction in core.utils.scan) {\n\t\t\tvar delta = core.utils.scan[direction];\n\t\t\tvar nx = core.getHeroLoc('x') + delta.x,\n\t\t\t\tny = core.getHeroLoc('y') + delta.y;\n\t\t\tif (canBreak(nx, ny)) {\n\t\t\t\tcore.removeBlock(nx, ny);\n\t\t\t\tsuccess = true;\n\t\t\t}\n\t\t}\n\t} else {\n\t\t// 仅破当前\n\t\tif (canBreak(core.nextX(), core.nextY())) {\n\t\t\tcore.removeBlock(core.nextX(1), core.nextY(1));\n\t\t\tsuccess = true;\n\t\t}\n\t}\n\tif (success) {\n\t\tcore.playSound('pickaxe.mp3');\n\t\tcore.drawTip(core.material.items[itemId].name + '使用成功');\n\t} else {\n\t\t// 无法使用\n\t\tcore.drawTip(\"当前无法使用\" + core.material.items[itemId].name);\n\t\tcore.addItem(itemId, 1);\n\t\treturn;\n\t}\n})();",
		"canUseItemEffect": "(function () {\n\t//if (core.flags.flyNearStair && !core.nearStair()) return false;\n\t//return !core.hasEnemyLeft('E1500');\n\tvar success = true;\n\tvar floorId = core.status.floorId;\n\tcore.extractBlocks(floorId);\n\tcore.status.maps[floorId].blocks.forEach(function (block) {\n\t\tif (!block.disable) {\n\t\t\t// 获得该图块的ID\n\t\t\tvar id = block.event.id,\n\t\t\t\tenemy = core.material.enemys[id];\n\t\t\t// 检查【禁制】技能，数字97\n\t\t\tif (enemy && (core.hasSpecial(enemy.special, 105))) {\n\t\t\t\tsuccess = false;\n\t\t\t}\n\n\t\t}\n\t});\n\treturn success;\n})();"
	},
	"icePickaxe": {
		"cls": "tools",
		"name": "破冰镐",
		"text": "可以破坏勇士面前的一堵冰墙",
		"useItemEffect": "(function () {\n\tcore.removeBlock(core.nextX(), core.nextY());\n\tcore.drawTip(core.material.items[itemId].name + '使用成功');\n})();",
		"canUseItemEffect": "(function () {\n\treturn core.getBlockId(core.nextX(), core.nextY()) == 'ice';\n})();"
	},
	"bomb": {
		"cls": "tools",
		"name": "炸弹",
		"text": "可以炸掉勇士面前的怪物（快捷键4）",
		"useItemEffect": "(function () {\n\tvar canBomb = function (x, y) {\n\t\tvar block = core.getBlock(x, y);\n\t\tif (block == null || block.event.cls.indexOf('enemy') != 0) return false;\n\t\tvar enemy = core.material.enemys[block.event.id];\n\t\treturn enemy && !enemy.notBomb;\n\t};\n\n\tvar bombList = []; // 炸掉的怪物坐标列表\n\tvar bombFourDirections = false; // 是否四方向可炸；如果是将其改成true。\n\tif (bombFourDirections) {\n\t\t// 四方向炸\n\t\tfor (var direction in core.utils.scan) {\n\t\t\tvar delta = core.utils.scan[direction];\n\t\t\tvar nx = core.getHeroLoc('x') + delta.x,\n\t\t\t\tny = core.getHeroLoc('y') + delta.y;\n\t\t\tif (canBomb(nx, ny)) {\n\t\t\t\tbombList.push([nx, ny]);\n\t\t\t\tcore.removeBlock(nx, ny);\n\t\t\t}\n\t\t}\n\t} else {\n\t\t// 仅炸当前\n\t\tif (canBomb(core.nextX(), core.nextY())) {\n\t\t\tbombList.push([core.nextX(), core.nextY()]);\n\t\t\tcore.removeBlock(core.nextX(), core.nextY());\n\t\t}\n\t}\n\tif (bombList.length > 0) {\n\t\tcore.playSound('bomb.mp3');\n\t\tcore.drawTip(core.material.items[itemId].name + '使用成功');\n\t} else {\n\t\tcore.drawTip('当前无法使用' + core.material.items[itemId].name);\n\t\tcore.addItem(itemId, 1);\n\t\treturn;\n\t}\n\n\t// 炸弹后事件\n\t// 这是一个使用炸弹也能开门的例子\n\t/*\n\tif (core.status.floorId=='xxx' && core.terrainExists(x0,y0,'specialDoor') // 某个楼层，该机关门存在\n\t\t&& !core.enemyExists(x1,y1) && !core.enemyExists(x2,y2)) // 且守门的怪物都不存在\n\t{\n\t\tcore.insertAction([ // 插入事件\n\t\t\t{\"type\": \"openDoor\", \"loc\": [x0,y0]} // 开门\n\t\t])\n\t}\n\t*/\n})();",
		"canUseItemEffect": "true"
	},
	"centerFly": {
		"cls": "tools",
		"name": "飞行器",
		"text": "可以飞向当前楼层中心对称的位置（快捷键3）",
		"useItemEffect": "core.playSound('centerFly.mp3');\ncore.clearMap('hero');\ncore.setHeroLoc('x', core.bigmap.width-1-core.getHeroLoc('x'));\ncore.setHeroLoc('y', core.bigmap.height-1-core.getHeroLoc('y'));\ncore.drawHero();\ncore.drawTip(core.material.items[itemId].name + '使用成功');",
		"canUseItemEffect": "(function () {\n\t//if (core.flags.flyNearStair && !core.nearStair()) return false;\n\t//return !core.hasEnemyLeft('E1500');\n\tvar toX = core.bigmap.width - 1 - core.getHeroLoc('x'),\n\t\ttoY = core.bigmap.height - 1 - core.getHeroLoc('y');\n\tvar id = core.getBlockId(toX, toY);\n\tif (id != null) return false;\n\tvar success = true;\n\tvar floorId = core.status.floorId;\n\tcore.extractBlocks(floorId);\n\tcore.status.maps[floorId].blocks.forEach(function (block) {\n\t\tif (!block.disable) {\n\t\t\t// 获得该图块的ID\n\t\t\tvar id = block.event.id,\n\t\t\t\tenemy = core.material.enemys[id];\n\t\t\t// 检查【禁制】技能，数字97\n\t\t\tif (enemy && (core.hasSpecial(enemy.special, 105))) {\n\t\t\t\tsuccess = false;\n\t\t\t}\n\n\t\t}\n\t});\n\treturn success;\n})();"
	},
	"upFly": {
		"cls": "tools",
		"name": "上楼器",
		"text": "可以飞往楼上的相同位置",
		"useItemEffect": "(function () {\n\tvar floorId = core.floorIds[core.floorIds.indexOf(core.status.floorId) + 1];\n\tif (core.status.event.id == 'action') {\n\t\tcore.insertAction([\n\t\t\t{ \"type\": \"changeFloor\", \"loc\": [core.getHeroLoc('x'), core.getHeroLoc('y')], \"floorId\": floorId },\n\t\t\t{ \"type\": \"tip\", \"text\": core.material.items[itemId].name + '使用成功' }\n\t\t]);\n\t} else {\n\t\tcore.changeFloor(floorId, null, core.status.hero.loc, null, function () {\n\t\t\tcore.drawTip(core.material.items[itemId].name + '使用成功');\n\t\t\tcore.replay();\n\t\t});\n\t}\n})();",
		"canUseItemEffect": "(function () {\n\tvar floorId = core.status.floorId,\n\t\tindex = core.floorIds.indexOf(floorId);\n\tif (index < core.floorIds.length - 1) {\n\t\tvar toId = core.floorIds[index + 1],\n\t\t\ttoX = core.getHeroLoc('x'),\n\t\t\ttoY = core.getHeroLoc('y');\n\t\tvar mw = core.floors[toId].width,\n\t\t\tmh = core.floors[toId].height;\n\t\tif (toX >= 0 && toX < mw && toY >= 0 && toY < mh && core.getBlock(toX, toY, toId) == null) {\n\t\t\treturn true;\n\t\t}\n\t}\n\treturn false;\n})();"
	},
	"downFly": {
		"cls": "tools",
		"name": "下楼器",
		"text": "可以飞往楼下的相同位置",
		"useItemEffect": "(function () {\n\tvar floorId = core.floorIds[core.floorIds.indexOf(core.status.floorId) - 1];\n\tif (core.status.event.id == 'action') {\n\t\tcore.insertAction([\n\t\t\t{ \"type\": \"changeFloor\", \"loc\": [core.getHeroLoc('x'), core.getHeroLoc('y')], \"floorId\": floorId },\n\t\t\t{ \"type\": \"tip\", \"text\": core.material.items[itemId].name + '使用成功' }\n\t\t]);\n\t} else {\n\t\tcore.changeFloor(floorId, null, core.status.hero.loc, null, function () {\n\t\t\tcore.drawTip(core.material.items[itemId].name + '使用成功');\n\t\t\tcore.replay();\n\t\t});\n\t}\n})();",
		"canUseItemEffect": "(function () {\n\tvar floorId = core.status.floorId,\n\t\tindex = core.floorIds.indexOf(floorId);\n\tif (index > 0) {\n\t\tvar toId = core.floorIds[index - 1],\n\t\t\ttoX = core.getHeroLoc('x'),\n\t\t\ttoY = core.getHeroLoc('y');\n\t\tvar mw = core.floors[toId].width,\n\t\t\tmh = core.floors[toId].height;\n\t\tif (toX >= 0 && toX < mw && toY >= 0 && toY < mh && core.getBlock(toX, toY, toId) == null) {\n\t\t\treturn true;\n\t\t}\n\t}\n\treturn false;\n})();"
	},
	"earthquake": {
		"cls": "tools",
		"name": "地震卷轴",
		"text": "可以破坏当前层的所有墙",
		"useItemEffect": "(function () {\n\tvar indexes = [];\n\tfor (var index in core.status.thisMap.blocks) {\n\t\tvar block = core.status.thisMap.blocks[index];\n\t\tif (!block.disable && block.event.canBreak) {\n\t\t\tindexes.push(index);\n\t\t}\n\t}\n\tcore.removeBlockByIndexes(indexes);\n\tcore.drawMap(core.status.floorId, function () {\n\t\tcore.drawTip(core.material.items[itemId].name + '使用成功');\n\t});\n})();",
		"canUseItemEffect": "(function () {\n\treturn core.status.thisMap.blocks.filter(function (block) {\n\t\treturn !block.disable && block.event.canBreak;\n\t}).length > 0;\n})();"
	},
	"poisonWine": {
		"cls": "items",
		"name": "进阶红血瓶",
		"text": "可以解除中毒状态",
		"itemEffect": "core.status.hero.hp += core.values.greenPotion * (core.status.thisMap.item_ratio||core.status.thisMap.ratio) * 2",
		"itemEffectTip": "，生命+${core.values.greenPotion * (core.status.thisMap.item_ratio||core.status.thisMap.ratio)*2}",
		"useItemEffect": "core.removeFlag('poison');",
		"canUseItemEffect": "core.hasFlag('poison');"
	},
	"weakWine": {
		"cls": "items",
		"name": "进阶蓝血瓶",
		"text": "可以解除衰弱状态",
		"itemEffect": "core.status.hero.hp += core.values.greenPotion * (core.status.thisMap.item_ratio||core.status.thisMap.ratio) * 4",
		"itemEffectTip": "，生命+${core.values.greenPotion * (core.status.thisMap.item_ratio||core.status.thisMap.ratio)*4} ",
		"useItemEffect": "core.removeFlag('weak');\nif (core.values.weakValue>=1) { // >=1：直接扣数值\n\tcore.status.hero.atk += core.values.weakValue;\n\tcore.status.hero.def += core.values.weakValue;\n}\nelse { // <1：扣比例\n\tcore.addBuff(\"atk\", core.values.weakValue);\n\tcore.addBuff(\"def\", core.values.weakValue);\n}",
		"canUseItemEffect": "core.hasFlag('weak');"
	},
	"curseWine": {
		"cls": "items",
		"name": "进阶绿血瓶",
		"text": "可以解除诅咒状态",
		"itemEffect": "core.status.hero.hp += core.values.greenPotion * (core.status.thisMap.item_ratio||core.status.thisMap.ratio) * 16",
		"itemEffectTip": "，生命+${core.values.greenPotion * (core.status.thisMap.item_ratio||core.status.thisMap.ratio)*16} ",
		"useItemEffect": "core.removeFlag('curse');",
		"canUseItemEffect": "core.hasFlag('curse');"
	},
	"superWine": {
		"cls": "tools",
		"name": "万能药水",
		"text": "可以解除所有不良状态",
		"useItemEffect": "core.removeFlag('poison');\nif (core.hasFlag('weak')) {\n\tcore.removeFlag('weak');\n\tif (core.values.weakValue>=1) { // >=1：直接扣数值\n\t\tcore.status.hero.atk += core.values.weakValue;\n\t\tcore.status.hero.def += core.values.weakValue;\n\t}\n\telse { // <1：扣比例\n\t\tcore.addBuff(\"atk\", core.values.weakValue);\n\t\tcore.addBuff(\"def\", core.values.weakValue);\n\t}\n}\ncore.removeFlag('curse');",
		"canUseItemEffect": "(function() {\n\treturn core.hasFlag('poison') || core.hasFlag('weak') || core.hasFlag('curse');\n})();"
	},
	"hammer": {
		"cls": "tools",
		"name": "圣锤",
		"text": "可以炸掉勇士面前的怪物",
		"useItemEffect": "core.playSound('bomb.mp3');\ncore.removeBlockByIds(core.status.floorId, core.status.event.ui);\ncore.drawMap(core.status.floorId, function () {\n\tcore.drawTip(core.material.items[itemId].name + '使用成功');\n\tcore.events.afterUseBomb();\n});",
		"canUseItemEffect": "(function() {\n\tvar ids = [], id2s = [];\n\tfor (var i in core.status.thisMap.blocks) {\n\t\tvar block = core.status.thisMap.blocks[i];\n\t\tif (!block.disable && block.event.cls.indexOf('enemy')==0 && core.nearHero(block.x, block.y)) {\n\t\t\tvar enemy = core.material.enemys[block.event.id];\n\t\t\tif (core.isset(enemy) && enemy.notBomb) continue;\n\t\t\tif (block.x==core.nextX() && block.y==core.nextY())\n\t\t\t\tids.push(i);\n\t\t\telse\n\t\t\t\tid2s.push(i);\n\t\t}\n\t}\n\tif (ids.length>0) {\n\t\tcore.status.event.ui = ids;\n\t\treturn true;\n\t}\n\telse if (id2s.length==1) {\n\t\tcore.status.event.ui = id2s;\n\t\treturn true;\n\t}\n\treturn false;\n})();"
	},
	"lifeWand": {
		"cls": "tools",
		"name": "生命魔杖",
		"text": "可以恢复等同于攻防和10倍的生命值，每携带1把可以增加10万分数",
		"useItemEffect": "core.insertAction([\n\t{ \"type\": \"input\", \"text\": \"请输入生命魔杖使用次数：(0-${item:lifeWand})\" },\n\t{\n\t\t\"type\": \"if\",\n\t\t\"condition\": \"flag:input<=item:lifeWand\",\n\t\t\"true\": [\n\t\t\t{ \"type\": \"setValue\", \"name\": \"item:lifeWand\", \"value\": \"item:lifeWand-flag:input\" },\n\t\t\t{ \"type\": \"setValue\", \"name\": \"status:hp\", \"value\": \"status:hp+flag:input*(status:atk+status:def)*10\" },\n\t\t\t\"成功使用${flag:input}次生命魔杖，恢复${flag:input*(status:atk+status:def)*10}点生命。\"\n\t\t],\n\t\t\"false\": [\"输入不合法！\"]\n\t},\n]);\ncore.addItem('lifeWand', 1);",
		"canUseItemEffect": "true"
	},
	"jumpShoes": {
		"cls": "tools",
		"name": "跳跃靴",
		"text": "能跳跃到前方两格处",
		"useItemEffect": "core.insertAction({\"type\":\"jumpHero\",\"loc\":[core.nextX(2),core.nextY(2)]});",
		"canUseItemEffect": "(function() {\n\tvar nx=core.nextX(2), ny=core.nextY(2);\n\treturn nx>=0 && nx<core.bigmap.width && ny>=0 && ny<core.bigmap.height && core.getBlockId(nx,ny)==null;\n})();"
	},
	"skill1": {
		"cls": "constants",
		"name": "技能：二倍斩",
		"text": "可以打开或关闭主动技能二倍斩",
		"hideInReplay": true,
		"useItemEffect": "// 二倍斩的flag:skill为1\nif (core.getFlag('skill', 0)==0) { // 判断当前是否已经开了技能\n\tif (core.getStatus('mana')>=5) { // 这里要写当前能否开技能的条件判断，比如魔力值至少要多少\n\t\tcore.setFlag('skill', 1); // 开技能1\n\t\tcore.setFlag('skillName', '二倍斩'); // 设置技能名\n\t}\n\telse {\n\t\tcore.drawTip(\"魔力不足，无法开启技能\");\n\t}\n}\nelse { // 关闭技能\n\tcore.setFlag('skill', 0); // 关闭技能状态\n\tcore.setFlag('skillName', '无');\n}",
		"canUseItemEffect": "true"
	},
	"wand": {
		"cls": "items",
		"name": "新物品"
	},
	"I434": {
		"cls": "items",
		"name": "新物品"
	},
	"I435": {
		"cls": "items",
		"name": "新物品"
	},
	"I436": {
		"cls": "items",
		"name": "进阶黄血瓶",
		"itemEffect": "core.status.hero.hp += core.values.greenPotion * (core.status.thisMap.item_ratio||core.status.thisMap.ratio) * 8",
		"itemEffectTip": "，生命+${core.values.greenPotion * (core.status.thisMap.item_ratio||core.status.thisMap.ratio)*8} "
	},
	"I437": {
		"cls": "items",
		"name": "新物品"
	},
	"I438": {
		"cls": "items",
		"name": "新物品"
	},
	"I439": {
		"cls": "items",
		"name": "新物品"
	},
	"I440": {
		"cls": "items",
		"name": "新物品"
	},
	"I441": {
		"cls": "items",
		"name": "新物品"
	},
	"I442": {
		"cls": "items",
		"name": "新物品"
	},
	"I443": {
		"cls": "items",
		"name": "新物品"
	},
	"I444": {
		"cls": "items",
		"name": "新物品"
	},
	"I445": {
		"cls": "items",
		"name": "红宝石",
		"itemEffect": "core.status.hero.atk *= 1.05",
		"itemEffectTip": "'，攻击+5%'"
	},
	"I446": {
		"cls": "items",
		"name": "蓝宝石",
		"itemEffect": "core.status.hero.def *= 1.05",
		"itemEffectTip": "，防御+5%'"
	},
	"I447": {
		"cls": "items",
		"name": "高阶红宝石",
		"itemEffect": "core.status.hero.atk += core.values.redGem * (core.status.thisMap.item_ratio||core.status.thisMap.ratio) * 2",
		"itemEffectTip": "，攻击+${core.values.redGem * (core.status.thisMap.item_ratio||core.status.thisMap.ratio)*2}"
	},
	"I448": {
		"cls": "items",
		"name": "高阶蓝宝石",
		"text": null,
		"itemEffect": "core.status.hero.def += core.values.blueGem * (core.status.thisMap.item_ratio||core.status.thisMap.ratio)*2",
		"itemEffectTip": "，防御+${core.values.blueGem * (core.status.thisMap.item_ratio||core.status.thisMap.ratio)*2}"
	},
	"I449": {
		"cls": "items",
		"name": "高阶绿宝石",
		"itemEffect": "core.status.hero.mdef += core.values.greenGem * (core.status.thisMap.item_ratio||core.status.thisMap.ratio)*2",
		"itemEffectTip": "，护盾+${core.values.greenGem * (core.status.thisMap.item_ratio||core.status.thisMap.ratio)*2}"
	},
	"I450": {
		"cls": "items",
		"name": "高阶黄宝石",
		"itemEffect": "core.status.hero.atk += core.values.redGem * (core.status.thisMap.item_ratio||core.status.thisMap.ratio) * 2;\ncore.status.hero.def += core.values.blueGem * (core.status.thisMap.item_ratio||core.status.thisMap.ratio) * 2;\ncore.status.hero.mdef += core.values.greenGem * (core.status.thisMap.item_ratio||core.status.thisMap.ratio) * 2;\ncore.status.hero.hp += core.values.yellowPotion * (core.status.thisMap.item_ratio||core.status.thisMap.ratio) * 2;",
		"itemEffectTip": "，全属性提升"
	},
	"I451": {
		"cls": "items",
		"name": "极品红宝石",
		"itemEffect": "core.status.hero.atk += core.values.redGem * (core.status.thisMap.item_ratio||core.status.thisMap.ratio) * 5",
		"itemEffectTip": "，攻击+${core.values.redGem * (core.status.thisMap.item_ratio||core.status.thisMap.ratio)*5}"
	},
	"I452": {
		"cls": "items",
		"name": "极品蓝宝石",
		"text": "'，生命+${core.values.greenPotion*4}'",
		"itemEffect": "core.status.hero.def += core.values.blueGem * (core.status.thisMap.item_ratio||core.status.thisMap.ratio) * 5",
		"itemEffectTip": "，防御+${core.values.blueGem * (core.status.thisMap.item_ratio||core.status.thisMap.ratio)*5}"
	},
	"I453": {
		"cls": "items",
		"name": "极品绿宝石",
		"itemEffect": "core.status.hero.mdef += core.values.greenGem * (core.status.thisMap.item_ratio||core.status.thisMap.ratio)*5",
		"itemEffectTip": "，护盾+${core.values.greenGem * (core.status.thisMap.item_ratio||core.status.thisMap.ratio)*5}"
	},
	"I454": {
		"cls": "items",
		"name": "极品黄宝石",
		"itemEffect": "core.status.hero.atk += core.values.redGem * (core.status.thisMap.item_ratio||core.status.thisMap.ratio) * 5;\ncore.status.hero.def += core.values.blueGem * (core.status.thisMap.item_ratio||core.status.thisMap.ratio) * 5;\ncore.status.hero.mdef += core.values.greenGem * (core.status.thisMap.item_ratio||core.status.thisMap.ratio) * 5;\ncore.status.hero.hp += core.values.yellowPotion * (core.status.thisMap.item_ratio||core.status.thisMap.ratio) * 5;",
		"itemEffectTip": "，全属性提升"
	},
	"I455": {
		"cls": "items",
		"name": "璀璨红宝石",
		"itemEffect": "core.status.hero.atk += core.values.redGem * (core.status.thisMap.item_ratio||core.status.thisMap.ratio) * 10",
		"itemEffectTip": "，攻击+${core.values.redGem * (core.status.thisMap.item_ratio||core.status.thisMap.ratio)*10}"
	},
	"I456": {
		"cls": "items",
		"name": "璀璨蓝宝石",
		"itemEffect": "core.status.hero.def += core.values.blueGem * (core.status.thisMap.item_ratio||core.status.thisMap.ratio) * 10",
		"itemEffectTip": "，防御+${core.values.blueGem * (core.status.thisMap.item_ratio||core.status.thisMap.ratio)*10}"
	},
	"I457": {
		"cls": "items",
		"name": "璀璨绿宝石",
		"itemEffect": "core.status.hero.mdef += core.values.greenGem * (core.status.thisMap.item_ratio||core.status.thisMap.ratio)*10",
		"itemEffectTip": "，护盾+${core.values.greenGem * (core.status.thisMap.item_ratio||core.status.thisMap.ratio)*10}"
	},
	"I458": {
		"cls": "items",
		"name": "璀璨黄宝石",
		"itemEffect": "core.status.hero.atk += core.values.redGem * (core.status.thisMap.item_ratio||core.status.thisMap.ratio) * 10;\ncore.status.hero.def += core.values.blueGem * (core.status.thisMap.item_ratio||core.status.thisMap.ratio) * 10;\ncore.status.hero.mdef += core.values.greenGem * (core.status.thisMap.item_ratio||core.status.thisMap.ratio) * 10;\ncore.status.hero.hp += core.values.yellowPotion * (core.status.thisMap.item_ratio||core.status.thisMap.ratio) * 10;",
		"itemEffectTip": "，全属性提升"
	},
	"I459": {
		"cls": "items",
		"name": "殿堂红宝石",
		"itemEffect": "core.status.hero.atk += core.values.redGem * (core.status.thisMap.item_ratio||core.status.thisMap.ratio) * 20",
		"itemEffectTip": "，攻击+${core.values.redGem * (core.status.thisMap.item_ratio||core.status.thisMap.ratio)*20}"
	},
	"I460": {
		"cls": "items",
		"name": "殿堂蓝宝石",
		"itemEffect": "core.status.hero.def += core.values.blueGem * (core.status.thisMap.item_ratio||core.status.thisMap.ratio) * 20",
		"itemEffectTip": "，防御+${core.values.blueGem * (core.status.thisMap.item_ratio||core.status.thisMap.ratio)*20}"
	},
	"I461": {
		"cls": "items",
		"name": "殿堂绿宝石",
		"itemEffect": "core.status.hero.mdef += core.values.greenGem * (core.status.thisMap.item_ratio||core.status.thisMap.ratio) * 20",
		"itemEffectTip": "，护盾+${core.values.greenGem * (core.status.thisMap.item_ratio||core.status.thisMap.ratio)*20}"
	},
	"I462": {
		"cls": "items",
		"name": "殿堂黄宝石",
		"itemEffect": "core.status.hero.atk += core.values.redGem * (core.status.thisMap.item_ratio||core.status.thisMap.ratio) * 20;\ncore.status.hero.def += core.values.blueGem * (core.status.thisMap.item_ratio||core.status.thisMap.ratio) * 20;\ncore.status.hero.mdef += core.values.greenGem * (core.status.thisMap.item_ratio||core.status.thisMap.ratio) * 20;\ncore.status.hero.hp += core.values.yellowPotion * (core.status.thisMap.item_ratio||core.status.thisMap.ratio) * 20;",
		"itemEffectTip": "，全属性提升"
	},
	"I463": {
		"cls": "items",
		"name": "传说红宝石",
		"itemEffect": "core.status.hero.atk += core.values.redGem * (core.status.thisMap.item_ratio||core.status.thisMap.ratio) * 50",
		"itemEffectTip": "，攻击+${core.values.redGem * (core.status.thisMap.item_ratio||core.status.thisMap.ratio)*50}"
	},
	"I464": {
		"cls": "items",
		"name": "传说蓝宝石",
		"itemEffect": "core.status.hero.def += core.values.blueGem * (core.status.thisMap.item_ratio||core.status.thisMap.ratio) * 50",
		"itemEffectTip": "，防御+${core.values.blueGem * (core.status.thisMap.item_ratio||core.status.thisMap.ratio)*50}"
	},
	"I465": {
		"cls": "items",
		"name": "传说绿宝石",
		"itemEffect": "core.status.hero.mdef += core.values.greenGem * (core.status.thisMap.item_ratio||core.status.thisMap.ratio) * 50",
		"itemEffectTip": "，护盾+${core.values.greenGem * (core.status.thisMap.item_ratio||core.status.thisMap.ratio)*50}"
	},
	"I466": {
		"cls": "items",
		"name": "传说黄宝石",
		"itemEffect": "core.status.hero.atk += core.values.redGem * (core.status.thisMap.item_ratio||core.status.thisMap.ratio) * 50;\ncore.status.hero.def += core.values.blueGem * (core.status.thisMap.item_ratio||core.status.thisMap.ratio) * 50;\ncore.status.hero.mdef += core.values.greenGem * (core.status.thisMap.item_ratio||core.status.thisMap.ratio) * 50;\ncore.status.hero.hp += core.values.yellowPotion * (core.status.thisMap.item_ratio||core.status.thisMap.ratio) * 50;",
		"itemEffectTip": "，全属性提升"
	},
	"I467": {
		"cls": "items",
		"name": "新物品",
		"useItemEvent": null,
		"useItemEffect": null,
		"itemEffect": null
	},
	"I468": {
		"cls": "items",
		"name": "新物品"
	},
	"I469": {
		"cls": "items",
		"name": "新物品"
	},
	"I470": {
		"cls": "items",
		"name": "新物品"
	},
	"I471": {
		"cls": "constants",
		"name": "黯淡守护天使",
		"text": "也许她有守护天使呢？全属性+10%！"
	},
	"I472": {
		"cls": "items",
		"name": "钻石币",
		"itemEffect": "core.status.hero.money += 1000000000",
		"itemEffectTip": "'，金币+10亿'"
	},
	"I473": {
		"cls": "items",
		"name": "大量钻石币",
		"itemEffect": "core.status.hero.money += 10000000000",
		"itemEffectTip": "'，金币+100亿'"
	},
	"I474": {
		"cls": "constants",
		"name": "守护天使",
		"text": "也许她有守护天使呢？全属性+20%！"
	},
	"I475": {
		"cls": "constants",
		"name": "秘密启示",
		"text": "珈百璃告诉你，她就在那里……角色伤害减免30%！"
	},
	"I476": {
		"cls": "constants",
		"name": "人类之光",
		"text": "勇敢的少年啊~快去创造奇迹！全属性+100%！"
	},
	"I477": {
		"cls": "items",
		"name": "新物品"
	},
	"I478": {
		"cls": "items",
		"name": "灵水",
		"text": "能够自己涌动的奇异活泼水源。使角色生命值*1.5。（直接生效）",
		"itemEffect": "core.status.hero.hp *= 1.5",
		"itemEffectTip": "，生命值增加一半"
	},
	"I479": {
		"cls": "constants",
		"name": "自动拾取开关",
		"useItemEvent": [
			{
				"type": "choices",
				"text": "这里是自动化开关！\n包含了各项优化体验的设置。\n（自动拾取的快捷键为7）",
				"choices": [
					{
						"text": "开启自动拾取",
						"color": [
							105,
							231,
							153,
							1
						],
						"action": [
							"自动拾取已开启！",
							{
								"type": "setValue",
								"name": "flag:shiqu",
								"value": "true"
							}
						]
					},
					{
						"text": "关闭自动拾取",
						"color": [
							243,
							184,
							78,
							1
						],
						"action": [
							"自动拾取已关闭！",
							{
								"type": "setValue",
								"name": "flag:shiqu",
								"value": "false"
							}
						]
					},
					{
						"text": "开启地图技能范围特效",
						"color": [
							105,
							231,
							153,
							1
						],
						"action": [
							"特效已开启！",
							{
								"type": "setValue",
								"name": "flag:guanghuan_texiao",
								"value": "true"
							},
							{
								"type": "function",
								"function": "function(){\ncore.plugin.HuiZhiTeXiao()\n}"
							}
						]
					},
					{
						"text": "关闭地图技能范围特效",
						"color": [
							243,
							184,
							78,
							1
						],
						"action": [
							"特效已关闭！",
							{
								"type": "setValue",
								"name": "flag:guanghuan_texiao",
								"value": "false"
							},
							{
								"type": "function",
								"function": "function(){\ncore.plugin.HuiZhiTeXiao()\n}"
							}
						]
					}
				]
			}
		],
		"text": "一个奇怪的标识，似乎…可以转动？",
		"canUseItemEffect": true
	},
	"I480": {
		"cls": "items",
		"name": "黄钥匙串",
		"text": "三把普通的黄钥匙。",
		"itemEffect": "core.addItem('yellowKey', 3)",
		"itemEffectTip": ",黄钥匙+3"
	},
	"I481": {
		"cls": "items",
		"name": "蓝钥匙串",
		"text": "三把普通的蓝钥匙。",
		"itemEffect": "core.addItem('blueKey',3)",
		"itemEffectTip": ",蓝钥匙+3"
	},
	"I482": {
		"cls": "items",
		"name": "新物品"
	},
	"I483": {
		"cls": "items",
		"name": "新物品"
	},
	"I484": {
		"cls": "items",
		"name": "新物品"
	},
	"I485": {
		"cls": "items",
		"name": "新物品"
	},
	"I486": {
		"cls": "items",
		"name": "新物品"
	},
	"I487": {
		"cls": "items",
		"name": "新物品"
	},
	"I488": {
		"cls": "items",
		"name": "新物品"
	},
	"I489": {
		"cls": "items",
		"name": "新物品"
	},
	"I490": {
		"cls": "items",
		"name": "新物品"
	},
	"I491": {
		"cls": "tools",
		"name": "星之剑灵",
		"text": "凝结着灼烫的剑意的灵体。使用可以增加五分之一进攻。",
		"useItemEffect": "core.status.hero.atk *= 1.2",
		"canUseItemEffect": true
	},
	"I492": {
		"cls": "items",
		"name": "新物品"
	},
	"I493": {
		"cls": "items",
		"name": "新物品"
	},
	"I494": {
		"cls": "items",
		"name": "新物品"
	},
	"I495": {
		"cls": "items",
		"name": "新物品"
	},
	"I496": {
		"cls": "items",
		"name": "新物品"
	},
	"I497": {
		"cls": "items",
		"name": "新物品"
	},
	"I498": {
		"cls": "items",
		"name": "新物品"
	},
	"I499": {
		"cls": "items",
		"name": "新物品"
	},
	"I500": {
		"cls": "items",
		"name": "精华红血瓶",
		"itemEffect": "core.status.hero.hp += core.values.greenPotion * (core.status.thisMap.item_ratio||core.status.thisMap.ratio) * 32",
		"itemEffectTip": "，生命+${core.values.greenPotion * (core.status.thisMap.item_ratio||core.status.thisMap.ratio)*32} "
	},
	"I501": {
		"cls": "items",
		"name": "精华蓝血瓶",
		"itemEffect": "core.status.hero.hp += core.values.greenPotion * (core.status.thisMap.item_ratio||core.status.thisMap.ratio) * 64",
		"itemEffectTip": "，生命+${core.values.greenPotion * (core.status.thisMap.item_ratio||core.status.thisMap.ratio)*64} "
	},
	"I502": {
		"cls": "items",
		"name": "精华黄血瓶",
		"itemEffect": "core.status.hero.hp += core.values.greenPotion * (core.status.thisMap.item_ratio||core.status.thisMap.ratio) * 128",
		"itemEffectTip": "，生命+${core.values.greenPotion * (core.status.thisMap.item_ratio||core.status.thisMap.ratio)*128} "
	},
	"I503": {
		"cls": "items",
		"name": "精华绿血瓶",
		"itemEffect": "core.status.hero.hp += core.values.greenPotion * (core.status.thisMap.item_ratio||core.status.thisMap.ratio) * 256",
		"itemEffectTip": "，生命+${core.values.greenPotion * (core.status.thisMap.item_ratio||core.status.thisMap.ratio)*256} "
	},
	"I504": {
		"cls": "items",
		"name": "绿钥匙串",
		"text": "绿钥匙…谁掉的绿钥匙…",
		"useItemEffect": "core.status.hero.hp += core.status.hero.atk * 30;\ncore.status.hero.hp += core.status.hero.def * 30;\ncore.status.hero.hp += 1e12;",
		"canUseItemEffect": true,
		"itemEffect": "core.addItem('greenKey', 3)",
		"itemEffectTip": ",绿钥匙+3"
	},
	"I505": {
		"cls": "items",
		"name": "新物品"
	},
	"I506": {
		"cls": "items",
		"name": "新物品"
	},
	"I507": {
		"cls": "items",
		"name": "新物品"
	},
	"I508": {
		"cls": "items",
		"name": "应急消炎药水",
		"text": "快速消炎的药水，应对突发情况专用。基础攻防-200，生命+36万。",
		"useItemEffect": "core.status.hero.hp += 360000;\ncore.status.hero.atk -= 200;\ncore.status.hero.def -= 200;",
		"canUseItemEffect": true,
		"itemEffect": "core.status.hero.exp -= (core.status.thisMap.item_ratio||core.status.thisMap.ratio) * 5000"
	},
	"I509": {
		"cls": "tools",
		"name": "精华特效血清",
		"text": "富含多种物质的血清，应对突发情况专用。基础攻防-20亿，生命+6兆。",
		"useItemEffect": "core.status.hero.hp += 6e12;\ncore.status.hero.atk -= 20e8;\ncore.status.hero.def -= 20e8;",
		"canUseItemEffect": true
	},
	"I510": {
		"cls": "tools",
		"name": "传世配方秘药"
	},
	"I511": {
		"cls": "tools",
		"name": "奇迹治愈魔瓶"
	},
	"I512": {
		"cls": "items",
		"name": "初等进化结晶",
		"itemEffect": "core.status.hero.exp += (core.status.thisMap.item_ratio||core.status.thisMap.ratio)*10",
		"itemEffectTip": "，经验+${(core.status.thisMap.item_ratio||core.status.thisMap.ratio)*10}"
	},
	"I513": {
		"cls": "items",
		"name": "中等进化结晶",
		"itemEffect": "core.status.hero.exp += (core.status.thisMap.item_ratio||core.status.thisMap.ratio) * 20",
		"itemEffectTip": "，经验+${(core.status.thisMap.item_ratio||core.status.thisMap.ratio)*20}"
	},
	"I514": {
		"cls": "items",
		"name": "高等进化结晶",
		"itemEffect": "core.status.hero.exp += (core.status.thisMap.item_ratio||core.status.thisMap.ratio) * 50",
		"itemEffectTip": "，经验+${(core.status.thisMap.item_ratio||core.status.thisMap.ratio)*50}"
	},
	"I515": {
		"cls": "items",
		"name": "特等进化结晶",
		"itemEffect": "core.status.hero.exp += (core.status.thisMap.item_ratio||core.status.thisMap.ratio) * 100",
		"itemEffectTip": "，经验+${(core.status.thisMap.item_ratio||core.status.thisMap.ratio)*100}"
	},
	"I516": {
		"cls": "items",
		"name": "传说的进化结晶",
		"itemEffect": "core.status.hero.exp += (core.status.thisMap.item_ratio||core.status.thisMap.ratio) * 200",
		"itemEffectTip": "，经验+${(core.status.thisMap.item_ratio||core.status.thisMap.ratio)*200}"
	},
	"I517": {
		"cls": "items",
		"name": "现世本源结晶",
		"itemEffect": "core.status.hero.exp += (core.status.thisMap.item_ratio || core.status.thisMap.ratio) * 1600",
		"itemEffectTip": "，经验+${(core.status.thisMap.item_ratio||core.status.thisMap.ratio)*1600}"
	},
	"I518": {
		"cls": "items",
		"name": "白金币",
		"itemEffect": "core.status.hero.money += 10000000",
		"itemEffectTip": "'，金币+1000万'"
	},
	"I519": {
		"cls": "items",
		"name": "大量白金币",
		"itemEffect": "core.status.hero.money += 100000000",
		"itemEffectTip": "'，金币+1亿'"
	},
	"I520": {
		"cls": "items",
		"name": "正义之剑",
		"text": "一流正道剑客的随身佩剑。进攻+5000。",
		"equip": {
			"type": "装备",
			"atk": 5000
		},
		"itemEffect": "core.status.hero.atk += 450",
		"itemEffectTip": "，攻击+450"
	},
	"I521": {
		"cls": "items",
		"name": "咏唱之剑",
		"text": "附着有大杀伤力符咒的魔法剑。进攻+2000，同时+25%。",
		"equip": {
			"type": "装备",
			"atk": 2000,
			"percentage": {
				"atk": 25
			}
		},
		"itemEffect": "core.status.hero.atk += 600",
		"itemEffectTip": "，攻击+600"
	},
	"I522": {
		"cls": "equips",
		"name": "风灵的羽毛",
		"text": "质感柔软，仿佛能使人飘起的羽毛。使角色每回合发动三次攻击。",
		"equip": {
			"type": "装备"
		}
	},
	"I523": {
		"cls": "items",
		"name": "结界盾",
		"text": "能够形成无形的结界护佑持盾者。防守+1600，魔防+100%。",
		"equip": {
			"type": "装备",
			"def": 1600,
			"percentage": {
				"mdef": 100
			}
		},
		"itemEffect": "core.status.hero.def += 450",
		"itemEffectTip": "，防御+450"
	},
	"I524": {
		"cls": "items",
		"name": "壁垒盾",
		"text": "坚如壁垒的强力特制盾牌。防守+60%。",
		"equip": {
			"type": "装备",
			"def": 60,
			"percentage": true
		},
		"itemEffect": "core.status.hero.def += 600",
		"itemEffectTip": "，防御+600"
	},
	"I525": {
		"cls": "items",
		"name": "荣耀剑",
		"text": "剑身上纂刻着荣耀的印记。进攻+1.8万，同时+45%。",
		"equip": {
			"type": "装备",
			"atk": 18000,
			"percentage": {
				"atk": 45
			}
		},
		"itemEffect": "core.status.hero.atk += 750",
		"itemEffectTip": "，攻击+750"
	},
	"I526": {
		"cls": "items",
		"name": "辉煌剑",
		"text": "剑体上萦绕着辉煌的锋芒。进攻+3.75万，防守+1.4万。",
		"equip": {
			"type": "装备",
			"atk": 37500,
			"def": 14000
		},
		"itemEffect": "core.status.hero.atk += 1000",
		"itemEffectTip": "，攻击+1000"
	},
	"I527": {
		"cls": "equips",
		"name": "魔力水晶",
		"text": "蕴含不可思议能源的晶珠。魔防+128万。",
		"equip": {
			"type": "装备",
			"mdef": 1280000
		}
	},
	"I528": {
		"cls": "items",
		"name": "金痕盾",
		"text": "由一克万金的珍贵原料制造的护盾。防守+2.8万，同时+60%。",
		"equip": {
			"type": "装备",
			"def": 28000,
			"percentage": {
				"def": 60
			}
		},
		"itemEffect": "core.status.hero.def += 500",
		"itemEffectTip": "，防御+500"
	},
	"I529": {
		"cls": "items",
		"name": "守护之盾",
		"text": "融合了能量力场的全能盾牌，战时常备。防守+55%，进攻+25%，魔防+50%。",
		"equip": {
			"type": "装备",
			"atk": 25,
			"def": 55,
			"mdef": 50,
			"percentage": true
		},
		"itemEffect": "core.status.hero.def += 1250",
		"itemEffectTip": "，防御+1250"
	},
	"I530": {
		"cls": "items",
		"name": "沉星剑",
		"text": "星陨阁的宝物，剑锋似要击坠天边的星辰。进攻+29.6万。",
		"equip": {
			"type": "装备",
			"atk": 296000
		},
		"itemEffect": "core.status.hero.atk += 1000",
		"itemEffectTip": "，攻击+1000"
	},
	"I531": {
		"cls": "items",
		"name": "落月剑",
		"text": "落月山庄的藏品，剑梢似要挑落上弦的月亮。进攻+75%，防守+10万。",
		"equip": {
			"type": "装备",
			"def": 100000,
			"percentage": {
				"atk": 75
			}
		},
		"itemEffect": "core.status.hero.atk += 1400",
		"itemEffectTip": "，攻击+1400"
	},
	"I532": {
		"cls": "items",
		"name": "魔镜盾",
		"text": "能照射人的内心的奇异盾牌。防守+50万，进攻-8万。",
		"equip": {
			"type": "装备",
			"def": 500000,
			"atk": -80000
		},
		"itemEffect": "core.status.hero.def += 1000",
		"itemEffectTip": "，防御+1000"
	},
	"I533": {
		"cls": "items",
		"name": "补天之盾",
		"text": "远古时期自天空掉落的补天石碎片。防守+38万，同时+45%。",
		"equip": {
			"type": "装备",
			"def": 380000,
			"percentage": {
				"def": 45
			}
		},
		"itemEffect": "core.status.hero.def += 1400",
		"itemEffectTip": "，防御+1400"
	},
	"I534": {
		"cls": "equips",
		"name": "小幽灵的袍子",
		"text": "在~这~里~哦？战斗开始时角色处于隐身状态五回合，期间不会受到伤害。",
		"equip": {
			"type": "装备"
		}
	},
	"I539": {
		"cls": "items",
		"name": "木森之剑",
		"text": "周身萦绕着烈焰的长剑。进攻+300万，同时+80%。",
		"equip": {
			"type": "装备",
			"atk": 3000000,
			"percentage": {
				"atk": 80
			}
		},
		"itemEffect": "core.status.hero.atk += 2000",
		"itemEffectTip": "，攻击+2000"
	},
	"I540": {
		"cls": "items",
		"name": "冰淼之剑",
		"text": "周身盘旋着霜寒气息的长剑。进攻+300万，防守+300万。",
		"equip": {
			"type": "装备",
			"atk": 3000000,
			"def": 3000000
		},
		"itemEffect": "core.status.hero.atk += 3000",
		"itemEffectTip": "，攻击+3000"
	},
	"I541": {
		"cls": "items",
		"name": "风吹之盾",
		"text": "游走着风之元素的灵能盾牌。防守+280万，魔防+300%。",
		"equip": {
			"type": "装备",
			"def": 2800000,
			"percentage": {
				"mdef": 300
			}
		},
		"itemEffect": "core.status.hero.def += 2000",
		"itemEffectTip": "，防御+2000"
	},
	"I542": {
		"cls": "items",
		"name": "地磐之甲",
		"text": "如大地一般坚固得不可一世的胸甲。防守+85%。",
		"equip": {
			"type": "装备",
			"def": 85,
			"percentage": true
		},
		"itemEffect": "core.status.hero.def += 3000",
		"itemEffectTip": "，防御+3000"
	},
	"I543": {
		"cls": "equips",
		"name": "魔术师的骰子",
		"text": "几粒看似普通的骰子，它们的主人从未输过赌局。置换对手四分之一的防御到攻击上。",
		"equip": {
			"type": "装备"
		}
	},
	"I544": {
		"cls": "items",
		"name": "双刃剑",
		"text": "拥有两段刀刃的残忍杀器。进攻+110%。",
		"equip": {
			"type": "装备",
			"atk": 110,
			"percentage": true
		},
		"itemEffect": "core.status.hero.atk += 20000",
		"itemEffectTip": "，攻击+20000"
	},
	"I545": {
		"cls": "items",
		"name": "弯月剑",
		"text": "形态诡异的可怕杀器。进攻+2650万。",
		"equip": {
			"type": "装备",
			"atk": 26500000
		},
		"itemEffect": "core.status.hero.atk += 10000",
		"itemEffectTip": "，攻击+10000",
		"canUseItemEffect": "true"
	},
	"I546": {
		"cls": "items",
		"name": "唯香",
		"text": "小巧的盾牌，大世家的相传之物。防守+1500万，魔防+1.8亿。",
		"equip": {
			"type": "装备",
			"mdef": 150000000,
			"def": 21000000
		},
		"itemEffect": "core.status.hero.def += 10000",
		"itemEffectTip": "，防御+10000"
	},
	"I547": {
		"cls": "items",
		"name": "零尘",
		"text": "发光的盾牌，灵族视为珍宝的物品。防守+90%，进攻+30%。",
		"equip": {
			"type": "装备",
			"atk": 30,
			"def": 90,
			"percentage": true
		},
		"itemEffect": "core.status.hero.def += 5000",
		"itemEffectTip": "，防御+5000"
	},
	"I548": {
		"cls": "tools",
		"name": "对症急救包",
		"text": "高精尖科技的救生产物，智慧的结晶。立即恢复自身基础攻防和20倍+30亿生命。",
		"useItemEffect": "core.status.hero.hp += core.status.hero.atk * 20;\ncore.status.hero.hp += core.status.hero.def * 20;\ncore.status.hero.hp += 3000000000;",
		"canUseItemEffect": true
	},
	"I549": {
		"cls": "equips",
		"name": "血凝晶",
		"text": "据传是天使受伤时滴落的一滴血凝成的晶石。角色受到的伤害减少60%。",
		"equip": {
			"type": "装备"
		}
	},
	"I550": {
		"cls": "equips",
		"name": "破坏者",
		"text": "其尖端沾染着淡淡的杀气。进攻+2.2亿，同时+150%，防守-20%。",
		"equip": {
			"type": "装备",
			"atk": 220000000,
			"percentage": {
				"atk": 150,
				"def": -20
			}
		}
	},
	"I551": {
		"cls": "items",
		"name": "埋葬者",
		"text": "似乎平平淡淡却削铁如泥的利器。进攻+100%，防守+50%。",
		"equip": {
			"type": "装备",
			"atk": 100,
			"def": 50,
			"percentage": true
		},
		"itemEffect": "core.status.hero.atk += 50000",
		"itemEffectTip": "，攻击+50000"
	},
	"I552": {
		"cls": "equips",
		"name": "黄金甲",
		"text": "不破楼兰终不还。防守+120%，进攻-2亿。",
		"equip": {
			"type": "装备",
			"atk": -200000000,
			"percentage": {
				"def": 120
			}
		}
	},
	"I553": {
		"cls": "equips",
		"name": "尘埃之盾",
		"text": "尘埃会落下，但却不会毁灭。防守+4.4亿。",
		"equip": {
			"type": "装备",
			"def": 440000000
		}
	},
	"I554": {
		"cls": "equips",
		"name": "魔导师的帽檐",
		"text": "它可以从其他次元招呼出任何你想要的…？角色每回合额外魔攻一次。",
		"equip": {
			"type": "装备"
		}
	},
	"I555": {
		"cls": "tools",
		"name": "新物品"
	},
	"I577": {
		"cls": "items",
		"name": "瞬雷剑",
		"text": "仿照一千七百年前守护世界的七剑之一锻造的宝剑。进攻+165%。",
		"equip": {
			"type": "装备",
			"atk": 165,
			"percentage": true
		},
		"itemEffect": "core.status.hero.atk += 300000",
		"itemEffectTip": "，攻击+300000"
	},
	"I578": {
		"cls": "items",
		"name": "大地之子",
		"text": "棕色的盾身上附着了一座山脉的灵魂。防守+25亿，同时+125%。",
		"equip": {
			"type": "装备",
			"def": 2500000000,
			"percentage": {
				"def": 125
			}
		},
		"itemEffect": "core.status.hero.def += 20000",
		"itemEffectTip": "，防御+20000"
	},
	"I579": {
		"cls": "items",
		"name": "海洋之心",
		"text": "蓝色的胸甲上蕴藏了一片海洋的力量。防守+140%，魔防+300%。",
		"equip": {
			"type": "装备",
			"def": 140,
			"mdef": 300,
			"percentage": true
		},
		"itemEffect": "core.status.hero.def += 100000",
		"itemEffectTip": "，防御+100000"
	},
	"I580": {
		"cls": "equips",
		"name": "流霜之剑",
		"text": "自一处冰封的遗迹中发掘的奇剑，覆盖着蓝色冰芒。进攻+430亿，防守+70%。",
		"equip": {
			"type": "装备",
			"atk": 43000000000,
			"percentage": {
				"def": 70
			}
		}
	},
	"I581": {
		"cls": "equips",
		"name": "蒲月之剑",
		"text": "在月光山巅沉淀了数十年的玄石炼制的剑，流淌着高贵之月的气息。进攻+145%，防守+300亿。",
		"equip": {
			"type": "装备",
			"def": 30000000000,
			"percentage": {
				"atk": 145
			}
		}
	},
	"I582": {
		"cls": "items",
		"name": "陨极盾",
		"text": "星际战斗单位配备的盾牌，由天外陨石炼成，坚不可摧。防守+160%，进攻+250亿，魔防+2000亿。",
		"equip": {
			"type": "装备",
			"atk": 25000000000,
			"mdef": 200000000000,
			"percentage": {
				"def": 160
			}
		},
		"itemEffect": "core.status.hero.def += 50000",
		"itemEffectTip": "，防御+50000"
	},
	"I583": {
		"cls": "tools",
		"name": "仙蓝瓶",
		"text": "使用奇花异*酿制的灵药瓶，能够短暂激发潜能。下次战斗角色防御翻倍。",
		"useItemEffect": "core.status.hero.def *= 2;\ncore.setFlag('wine', 2);",
		"canUseItemEffect": "core.getFlag('wine', 1)!=2;"
	},
	"I584": {
		"cls": "items",
		"name": "断水长镰",
		"text": "轻弹其刃，可闻激游；抽刀断水，水不复流。进攻+6250亿，防守+1750亿。",
		"equip": {
			"type": "装备",
			"atk": 625000000000,
			"def": 175000000000
		},
		"itemEffect": "core.status.hero.atk += 100000",
		"itemEffectTip": "，攻击+100000"
	},
	"I585": {
		"cls": "items",
		"name": "原初之佑",
		"text": "以远古制造出混乱的异兽的角与筋制成，洪荒的咆哮声若隐若现。防守+180%，进攻+60%。",
		"equip": {
			"type": "装备",
			"def": 180,
			"atk": 60,
			"percentage": true
		},
		"itemEffect": "core.status.hero.def += 300000",
		"itemEffectTip": "，防御+300000"
	},
	"I586": {
		"cls": "equips",
		"name": "圣纂环",
		"text": "通体雕刻着神明之旨的指环，挟带天生的灵气与威严。魔防+350%，角色受到的伤害减少75%。",
		"equip": {
			"type": "装备",
			"mdef": 350,
			"percentage": true
		}
	},
	"I587": {
		"cls": "tools",
		"name": "财富水晶",
		"text": "富集着财富之气运的水晶。立即恢复当前金币数*14950万的生命。",
		"useItemEffect": "core.status.hero.hp += core.status.hero.money*149500000;",
		"canUseItemEffect": true
	},
	"I588": {
		"cls": "tools",
		"name": "辉光",
		"text": "圣十字形状的能量凝晶，来自上界的护佑。下次战斗角色基础攻防增加5000亿。",
		"useItemEffect": "core.status.hero.atk += 5000e8;\ncore.status.hero.def += 5000e8;\ncore.setFlag('angle', 2);",
		"canUseItemEffect": "core.getFlag('angle', 1)!=2;"
	},
	"freezeBadge": {
		"cls": "constants",
		"name": "冰冻徽章",
		"text": "可以将面前的熔岩变成平地",
		"useItemEffect": "(function () {\n\tvar success = false;\n\n\tvar snowFourDirections = false; // 是否四方向雪花；如果是将其改成true\n\tif (snowFourDirections) {\n\t\t// 四方向雪花\n\t\tfor (var direction in core.utils.scan) {\n\t\t\tvar delta = core.utils.scan[direction];\n\t\t\tvar nx = core.getHeroLoc('x') + delta.x,\n\t\t\t\tny = core.getHeroLoc('y') + delta.y;\n\t\t\tif (core.getBlockId(nx, ny) == 'lava') {\n\t\t\t\tcore.removeBlock(nx, ny);\n\t\t\t\tsuccess = true;\n\t\t\t}\n\t\t}\n\t} else {\n\t\tif (core.getBlockId(core.nextX(), core.nextY()) == 'lava') {\n\t\t\tcore.removeBlock(core.nextX(), core.nextY());\n\t\t\tsuccess = true;\n\t\t}\n\t}\n\n\tif (success) {\n\t\tcore.drawTip(core.material.items[itemId].name + '使用成功');\n\t} else {\n\t\tcore.drawTip(\"当前无法使用\" + core.material.items[itemId].name);\n\t\tcore.addItem(itemId, 1);\n\t\treturn;\n\t}\n})();",
		"canUseItemEffect": "true"
	},
	"I731": {
		"cls": "items",
		"name": "火焱之剑",
		"itemEffect": "core.status.hero.atk += 5000",
		"itemEffectTip": "，攻击+5000"
	},
	"I838": {
		"cls": "tools",
		"name": "磁吸石",
		"canUseItemEffect": "(function () {\n\t//if (core.flags.flyNearStair && !core.nearStair()) return false;\n\t//return !core.hasEnemyLeft('E1500');\n\tvar success = true;\n\tvar floorId = core.status.floorId;\n\tcore.extractBlocks(floorId);\n\tcore.status.maps[floorId].blocks.forEach(function (block) {\n\t\tif (!block.disable) {\n\t\t\t// 获得该图块的ID\n\t\t\tvar id = block.event.id,\n\t\t\t\tenemy = core.material.enemys[id];\n\t\t\t// 检查【禁制】技能，数字97\n\t\t\tif (enemy && (core.hasSpecial(enemy.special, 104))) {\n\t\t\t\tsuccess = false;\n\t\t\t}\n\n\t\t}\n\t});\n\treturn success;\n})();",
		"useItemEvent": [
			{
				"type": "animate",
				"name": "light1",
				"loc": "hero"
			}
		],
		"useItemEffect": "for (var i = 1; i <= 13; i++) {\n\tvar x1 = core.clamp(core.nextX(i), 0, 12),\n\t\ty1 = core.clamp(core.nextY(i), 0, 12);\n\t// 判断格子内的事件是否为道具\n\tif (core.getBlockCls(x1, y1) == \"items\") {\n\t\tvar id = core.getBlockId(x1, y1);\n\n\t\tcore.getItem(id, 1, x1, y1);\n\t}\n\n}",
		"text": "远程拾取面对方向的所有物品。（快捷键2）"
	},
	"I839": {
		"cls": "tools",
		"name": "圣水",
		"text": "永远不会消失的生命之水。使角色生命值翻倍。",
		"itemEffect": null,
		"itemEffectTip": null,
		"useItemEffect": "core.status.hero.hp *= 2",
		"useItemEvent": null,
		"canUseItemEffect": "true"
	},
	"I840": {
		"cls": "tools",
		"name": "灵水",
		"text": "能够自己涌动的奇异活泼水源。使角色生命值*1.5。",
		"itemEffect": null,
		"itemEffectTip": null,
		"useItemEffect": "core.status.hero.hp *= 1.5",
		"useItemEvent": null,
		"hideInReplay": false,
		"canUseItemEffect": "true"
	},
	"I845": {
		"cls": "constants",
		"name": "秘密启示Ⅱ",
		"text": "珈百璃告诉你，她就在那里……角色伤害减免10%！"
	}
}