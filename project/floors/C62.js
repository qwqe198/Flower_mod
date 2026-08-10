main.floors.C62=
{
    "floorId": "C62",
    "title": "银灰囚牢",
    "name": "银灰囚牢",
    "width": 13,
    "height": 13,
    "canFlyTo": true,
    "canUseQuickShop": true,
    "cannotViewMap": false,
    "images": [
        {
            "name": "04.jpg",
            "canvas": "bg",
            "x": 0,
            "y": 0
        }
    ],
    "item_ratio": 20,
    "defaultGround": "ground",
    "bgm": "map3.mp3",
    "firstArrive": [],
    "eachArrive": [],
    "parallelDo": "",
    "events": {},
    "changeFloor": {
        "6,12": {
            "floorId": "C61",
            "loc": [
                6,
                0
            ],
            "time": 0
        },
        "6,0": {
            "floorId": "C65",
            "loc": [
                6,
                12
            ],
            "time": 0
        },
        "0,6": {
            "floorId": "C63",
            "loc": [
                12,
                6
            ],
            "time": 0
        },
        "12,6": {
            "floorId": "C64",
            "loc": [
                0,
                6
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
                                        "reason": "Rank 6 - Angel"
                                    }
                                ],
                                "false": [
                                    {
                                        "type": "if",
                                        "condition": "(item:I475==1)",
                                        "true": [
                                            {
                                                "type": "win",
                                                "reason": "Rank 6 - Gabriel"
                                            }
                                        ],
                                        "false": [
                                            {
                                                "type": "if",
                                                "condition": "(item:I845==1)",
                                                "true": [
                                                    {
                                                        "type": "win",
                                                        "reason": "Rank 6 - GabrielⅡ"
                                                    }
                                                ],
                                                "false": [
                                                    {
                                                        "type": "win",
                                                        "reason": "Rank 6 - God"
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
                                "floorId": "C71",
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
    [ 20, 20, 20, 20, 20, 20,336, 20, 20, 20, 20, 20, 20],
    [ 20,530, 83,454,  0,597,  0,597,  0,454, 82, 58, 20],
    [ 20,378, 20, 20, 20, 20,377, 20, 20, 20, 20,595, 20],
    [ 20, 34,  0, 20,  0, 33,593, 28,  0, 20,  0,447, 20],
    [ 20,595, 28,597, 27, 20,645, 20, 27,594,448,592, 20],
    [ 20, 86, 20,594, 20, 20,450, 20, 20, 81, 20, 81, 20],
    [334,  0, 22,  0,308, 33,598, 60, 83,  0, 21,  0,335],
    [ 20,303, 20,307, 20, 20, 47, 20, 20,305, 20,307, 20],
    [ 20, 81, 20,  0, 32, 20, 82, 20, 30,  0, 20, 86, 20],
    [ 20, 34, 20, 21,  0,591,451,591,  0, 32, 20,449, 20],
    [ 20,304, 20,306, 20, 20, 81, 20, 20, 81, 20,306, 20],
    [ 20,453,305, 28, 81, 81,  0, 82,  0, 28,305, 33, 20],
    [ 20, 20, 20, 20, 20, 20,333, 20, 20, 20, 20, 20, 20]
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