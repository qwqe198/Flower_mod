main.floors.D109=
{
    "floorId": "D109",
    "title": "彩虹城堡",
    "name": "彩虹城堡",
    "width": 13,
    "height": 13,
    "canFlyTo": true,
    "canUseQuickShop": true,
    "cannotViewMap": false,
    "images": [],
    "ratio": 200,
    "defaultGround": 80341,
    "bgm": "map6.mp3",
    "firstArrive": [],
    "eachArrive": [],
    "parallelDo": "",
    "events": {},
    "changeFloor": {
        "6,12": {
            "floorId": "D106",
            "loc": [
                6,
                0
            ]
        }
    },
    "afterBattle": {
        "2,4": [
            {
                "type": "setValue",
                "name": "flag:door_D109_6_4",
                "operator": "+=",
                "value": "1"
            }
        ],
        "10,4": [
            {
                "type": "setValue",
                "name": "flag:door_D109_6_4",
                "operator": "+=",
                "value": "1"
            }
        ],
        "6,1": [
            {
                "type": "choices",
                "text": "自动存档已完成！\n要记录现在的成绩吗？\n记录成绩之后，可以读取自动存档并选择继续游戏。\n\n如果没有出现\"继续游戏\"按钮，说明你的等级不达标（578级），建议回去清怪。",
                "choices": [
                    {
                        "text": "记录成绩",
                        "action": [
                            {
                                "type": "if",
                                "condition": "(item:I471==1)",
                                "true": [
                                    {
                                        "type": "win",
                                        "reason": "Rank 10 - Angel"
                                    }
                                ],
                                "false": [
                                    {
                                        "type": "if",
                                        "condition": "(item:I475==1)",
                                        "true": [
                                            {
                                                "type": "win",
                                                "reason": "Rank 10 - Gabriel"
                                            }
                                        ],
                                        "false": [
                                            {
                                                "type": "if",
                                                "condition": "(item:I845==1)",
                                                "true": [
                                                    {
                                                        "type": "win",
                                                        "reason": "Rank 10 - GabrielⅡ"
                                                    }
                                                ],
                                                "false": [
                                                    {
                                                        "type": "win",
                                                        "reason": "Rank 10 - God"
                                                    }
                                                ]
                                            }
                                        ]
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        "text": "继续游戏",
                        "condition": "hero.lv>=578",
                        "action": [
                            {
                                "type": "function",
                                "function": "function(){\ncore.setFlag(\"__visited__\", {});\n}"
                            },
                            {
                                "type": "changeFloor",
                                "floorId": "E110",
                                "loc": [
                                    6,
                                    11
                                ],
                                "direction": "up",
                                "time": 500
                            }
                        ]
                    }
                ]
            }
        ]
    },
    "afterGetItem": {},
    "afterOpenDoor": {},
    "autoEvent": {
        "6,4": {
            "0": {
                "condition": "flag:door_D109_6_4==2",
                "currentFloor": true,
                "priority": 0,
                "delayExecute": false,
                "multiExecute": false,
                "data": [
                    {
                        "type": "openDoor"
                    }
                ]
            }
        }
    },
    "cannotMove": {},
    "map": [
    [151,151,151,151,151, 86, 86, 86,151,151,151,151,151],
    [151,501,745,  0,151, 86,730, 86,151,  0,745,501,151],
    [151,151,151,151,151, 86, 86, 86,151,151,151,151,151],
    [151,151,151,151,151,151, 86,151,151,151,151,151,151],
    [151,151,728,151,151,151, 85,151,151,151,728,151,151],
    [151,725,453,725,151,151, 86,151,151,726,513,724,151],
    [151, 58,726,513,728,838,728,501, 82,454, 82,436,151],
    [151,725,452, 81,151,151,151,151,151,726,514,726,151],
    [151,151,725,151,151,151,151,151,151,151, 82,151,151],
    [151, 21,  0,151,151,151,502,151,151,151,  0,455,151],
    [151,151,725,  0,151,151, 83,151,151,  0,724,151,151],
    [151,151,151,451, 81, 21,  0, 22,724,456,151,151,151],
    [151,151,151,151,151,151,333,151,151,151,151,151,151]
],
    "bgmap": [

],
    "fgmap": [

],
    "bg2map": [],
    "fg2map": [],
    "beforeBattle": {},
    "cannotMoveIn": {},
    "canFlyFrom": true
}