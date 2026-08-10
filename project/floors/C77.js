main.floors.C77=
{
    "floorId": "C77",
    "title": "格陵兰岛",
    "name": "格陵兰岛",
    "width": 13,
    "height": 13,
    "canFlyTo": true,
    "canUseQuickShop": true,
    "cannotViewMap": false,
    "images": [
        {
            "name": "12.jpg",
            "canvas": "bg",
            "x": 0,
            "y": 0
        }
    ],
    "defaultGround": "ground",
    "bgm": "map4EX.mp3",
    "firstArrive": [],
    "eachArrive": [],
    "parallelDo": "",
    "events": {},
    "changeFloor": {
        "6,12": {
            "floorId": "C76",
            "loc": [
                6,
                0
            ],
            "time": 0
        },
        "0,6": {
            "floorId": "C78",
            "loc": [
                12,
                6
            ],
            "time": 0
        },
        "12,6": {
            "floorId": "C79",
            "loc": [
                0,
                6
            ],
            "time": 0
        },
        "6,0": {
            "floorId": "C80",
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
                                "condition": "(item:I471==1)",
                                "true": [
                                    {
                                        "type": "win",
                                        "reason": "Rank 8 - Angel"
                                    }
                                ],
                                "false": [
                                    {
                                        "type": "if",
                                        "condition": "(item:I475==1)",
                                        "true": [
                                            {
                                                "type": "win",
                                                "reason": "Rank 8 - Gabriel"
                                            }
                                        ],
                                        "false": [
                                            {
                                                "type": "if",
                                                "condition": "(item:I845==1)",
                                                "true": [
                                                    {
                                                        "type": "win",
                                                        "reason": "Rank 8 - GabrielⅡ"
                                                    }
                                                ],
                                                "false": [
                                                    {
                                                        "type": "win",
                                                        "reason": "Rank 8 - God"
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
                                "floorId": "C90",
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
    [149,149,149,149,149,149,336,149,149,149,149,149,149],
    [149,448,149,451,  0,678, 58,678,  0,452,149,436,149],
    [149,674,149,149,149,149,678,149,149,149,149,672,149],
    [149,447,  0,149,  0,436,677,447,  0,149,  0, 59,149],
    [149,673, 22,671, 34,149,672,149,453,671, 59,  0,149],
    [149, 82,149, 81,149,149,512,149,149,667,149,672,149],
    [334,667, 81,513, 82,436,680, 59, 81,451,  0, 21,335],
    [149, 33,149,667,149,149,454,149,149,666,149,670,149],
    [149,668,149,  0,512,149, 83,149, 59,  0,149,  0,149],
    [149,  0,149,512,  0,667, 47,667,  0, 58,149,450,149],
    [149,666,149,670,149,149, 86,149,149, 81,149,668,149],
    [149, 21,668,448,  0, 81,514, 81,512,  0,668,448,149],
    [149,149,149,149,149,149,333,149,149,149,149,149,149]
],
    "bgmap": [

],
    "fgmap": [

],
    "ratio": 50,
    "bg2map": [],
    "fg2map": [],
    "beforeBattle": {},
    "cannotMoveIn": {},
    "canFlyFrom": true
}