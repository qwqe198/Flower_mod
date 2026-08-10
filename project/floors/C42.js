main.floors.C42=
{
    "floorId": "C42",
    "title": "灵药雪原",
    "name": "灵药雪原",
    "width": 13,
    "height": 13,
    "canFlyTo": true,
    "canUseQuickShop": true,
    "cannotViewMap": false,
    "images": [
        {
            "name": "05.jpg",
            "canvas": "bg",
            "x": 0,
            "y": 0
        }
    ],
    "item_ratio": 10,
    "defaultGround": "ground",
    "bgm": "map2.mp3",
    "firstArrive": [],
    "eachArrive": [],
    "parallelDo": "",
    "events": {},
    "changeFloor": {
        "6,12": {
            "floorId": "C41",
            "loc": [
                6,
                0
            ],
            "time": 0
        },
        "0,6": {
            "floorId": "C43",
            "loc": [
                12,
                6
            ],
            "time": 0
        },
        "12,6": {
            "floorId": "C44",
            "loc": [
                0,
                6
            ],
            "time": 0
        },
        "6,0": {
            "floorId": "C45",
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
                                        "reason": "Rank 4 - Angel"
                                    }
                                ],
                                "false": [
                                    {
                                        "type": "if",
                                        "condition": "(item:I475==1)",
                                        "true": [
                                            {
                                                "type": "win",
                                                "reason": "Rank 4 - Gabriel"
                                            }
                                        ],
                                        "false": [
                                            {
                                                "type": "if",
                                                "condition": "(item:I845==1)",
                                                "true": [
                                                    {
                                                        "type": "win",
                                                        "reason": "Rank 4 - GabrielⅡ"
                                                    }
                                                ],
                                                "false": [
                                                    {
                                                        "type": "win",
                                                        "reason": "Rank 4 - God"
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
                                "floorId": "C51",
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
    [141,141,141,141,141,141,357,141,141,141,141,141,141],
    [141,450,141,521,  0,629,480,629,  0,524,141,450,141],
    [141,429,141,141,141,141,625,141,141,141,141,619,141],
    [141,453,  0,141,  0,447,429, 33,  0,141,  0,453,141],
    [141,619, 22,625, 34,141,623,141,448,625,451,430,141],
    [141, 81,141,626,141,141, 31,141,141, 81,141, 82,141],
    [355,  0, 28,  0, 81, 33,631, 30, 81,623, 21,  0,356],
    [141,623,141,624,141,141, 47,141,141,623,141,624,141],
    [141, 81,141,  0, 32,141, 82,141, 30,  0,141, 86,141],
    [141, 21,141, 34,  0,627,452,627,  0, 32,141,449,141],
    [141,622,141,623,141,141, 81,141,141, 81,141,623,141],
    [141, 28,620, 27,  0, 82,  0, 82,  0, 33,622, 28,141],
    [141,141,141,141,141,141,354,141,141,141,141,141,141]
],
    "bgmap": [

],
    "fgmap": [

],
    "weather": [
        "snow",
        3
    ],
    "bg2map": [],
    "fg2map": [],
    "beforeBattle": {},
    "cannotMoveIn": {},
    "canFlyFrom": true
}