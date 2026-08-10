main.floors.F129=
{
    "floorId": "F129",
    "title": "梦魇深渊",
    "name": "梦魇深渊",
    "width": 13,
    "height": 13,
    "canFlyTo": true,
    "canUseQuickShop": true,
    "cannotViewMap": false,
    "images": [],
    "ratio": 1000,
    "defaultGround": 90654,
    "bgm": "map8.mp3",
    "firstArrive": [],
    "eachArrive": [],
    "parallelDo": "",
    "events": {},
    "changeFloor": {
        "6,12": {
            "floorId": "F126",
            "loc": [
                6,
                0
            ]
        }
    },
    "afterBattle": {
        "6,1": [
            {
                "type": "setEnemy",
                "id": "E787",
                "name": "atk",
                "value": "45000000"
            },
            {
                "type": "setEnemy",
                "id": "E787",
                "name": "atk",
                "value": "1900000"
            },
            {
                "type": "setEnemy",
                "id": "E787",
                "name": "def",
                "value": "810000"
            },
            {
                "type": "autoSave"
            },
            {
                "type": "choices",
                "text": "自动存档已完成！\n要记录现在的成绩吗？\n记录成绩之后，可以读取自动存档并选择继续游戏。",
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
                                        "reason": "Rank 12 - Angel"
                                    }
                                ],
                                "false": [
                                    {
                                        "type": "if",
                                        "condition": "(item:I475==1)",
                                        "true": [
                                            {
                                                "type": "win",
                                                "reason": "Rank 12 - Gabriel"
                                            }
                                        ],
                                        "false": [
                                            {
                                                "type": "if",
                                                "condition": "(item:I845==1)",
                                                "true": [
                                                    {
                                                        "type": "win",
                                                        "reason": "Rank 12 - GabrielⅡ"
                                                    }
                                                ],
                                                "false": [
                                                    {
                                                        "type": "win",
                                                        "reason": "Rank 12 - God"
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
                        "action": [
                            {
                                "type": "function",
                                "function": "function(){\ncore.setFlag(\"__visited__\", {});\n}"
                            },
                            {
                                "type": "changeFloor",
                                "floorId": "G130",
                                "loc": [
                                    6,
                                    11
                                ],
                                "direction": "up"
                            }
                        ]
                    }
                ]
            }
        ],
        "2,4": [
            {
                "type": "setValue",
                "name": "flag:door_F129_6_4",
                "operator": "+=",
                "value": "1"
            }
        ],
        "10,4": [
            {
                "type": "setValue",
                "name": "flag:door_F129_6_4",
                "operator": "+=",
                "value": "1"
            }
        ]
    },
    "afterGetItem": {},
    "afterOpenDoor": {},
    "autoEvent": {
        "6,4": {
            "0": {
                "condition": "flag:door_F129_6_4==2",
                "currentFloor": true,
                "priority": 0,
                "delayExecute": false,
                "multiExecute": false,
                "data": [
                    {
                        "type": "openDoor"
                    }
                ]
            },
            "1": null
        }
    },
    "cannotMove": {},
    "map": [
    [144,144,144,144,144,844,844,844,144,144,144,144,144],
    [144,144,501,144,144,844,787,844,144,144,837,144,144],
    [144,501,  0,501,144,844,844,844,144,841,  0,842,144],
    [144,144,844,144,144,144, 86,144,144,144,843,144,144],
    [144,144,817,144,144,144, 85,144,144,144,817,144,144],
    [144, 81,452,766,144,144, 86,144,144,764,451,768,144],
    [144,457, 82,513,768,455,816,456,768,512,817,452,144],
    [144,766,436,816,144,144,144,144,144,816,453,765,144],
    [144,144,768,144,144,144,144,144,144,144, 81,144,144],
    [144,455,  0,144,144,144,516,144,144,144,  0,456,144],
    [144,144, 81,  0,144,144,843,144,144,  0,765,144,144],
    [144,144,144,454, 82,500,  0,500,767,457,144,144,144],
    [144,144,144,144,144,144,337,144,144,144,144,144,144]
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