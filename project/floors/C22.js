main.floors.C22=
{
    "floorId": "C22",
    "title": "夜之秘境",
    "name": "夜之秘境",
    "width": 13,
    "height": 13,
    "canFlyTo": true,
    "canUseQuickShop": true,
    "cannotViewMap": false,
    "images": [],
    "item_ratio": 3,
    "defaultGround": "grass",
    "bgm": "map1.mp3",
    "firstArrive": [],
    "eachArrive": [],
    "parallelDo": "",
    "events": {},
    "changeFloor": {
        "6,12": {
            "floorId": "C21",
            "loc": [
                6,
                0
            ],
            "time": 0
        },
        "0,6": {
            "floorId": "C23",
            "loc": [
                12,
                6
            ],
            "time": 0
        },
        "12,6": {
            "floorId": "C24",
            "loc": [
                0,
                6
            ],
            "time": 0
        },
        "6,0": {
            "floorId": "C25",
            "loc": [
                6,
                12
            ],
            "time": 0
        }
    },
    "afterBattle": {
        "6,6": [
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
                                "condition": "(item:I474==1)",
                                "true": [
                                    {
                                        "type": "win",
                                        "reason": "Rank 2 - Angel"
                                    }
                                ],
                                "false": [
                                    {
                                        "type": "if",
                                        "condition": "(item:I475==1)",
                                        "true": [
                                            {
                                                "type": "win",
                                                "reason": "Rank 2 - Gabriel"
                                            }
                                        ],
                                        "false": [
                                            {
                                                "type": "if",
                                                "condition": "(item:I845==1)",
                                                "true": [
                                                    {
                                                        "type": "win",
                                                        "reason": "Rank 2 - GabrielⅡ"
                                                    }
                                                ],
                                                "false": [
                                                    {
                                                        "type": "win",
                                                        "reason": "Rank 2 - God"
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
                                "floorId": "C31",
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
    "autoEvent": {},
    "cannotMove": {},
    "map": [
    [155,155,155,155,155,155,357,155,155,155,155,155,155],
    [155, 38,155,447,  0,253,450,253,  0,448,155, 31,155],
    [155,252,155,155,155,155,223,155,155,155,155,256,155],
    [155,449,  0,155,  0, 27,251, 33,  0,155,  0,449,155],
    [155,  0, 34,253, 34,155, 81,155, 28,258, 27,  0,155],
    [155,256,155, 81,155,155, 30,155,155, 82,155,252,155],
    [355,  0, 27,  0, 83,454,376, 33,250,  0, 21,  0,356],
    [155,246,155,250,155,155, 31,155,155,255,155,251,155],
    [155, 81,155,  0, 32,155,208,155,448,  0,155, 86,155],
    [155, 21,155, 34,  0,252,448,252,  0, 32,155, 29,155],
    [155,246,155,246,155,155, 81,155,155, 81,155,251,155],
    [155,447,208, 28,  0,251,  0,246,  0, 34,208, 28,155],
    [155,155,155,155,155,155,354,155,155,155,155,155,155]
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