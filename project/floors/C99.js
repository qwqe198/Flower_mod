main.floors.C99=
{
    "floorId": "C99",
    "title": "破碎狭缝",
    "name": "破碎狭缝",
    "width": 13,
    "height": 13,
    "canFlyTo": true,
    "canUseQuickShop": true,
    "cannotViewMap": false,
    "images": [
        {
            "name": "14.jpg",
            "canvas": "bg",
            "x": 0,
            "y": 0
        }
    ],
    "ratio": 100,
    "defaultGround": "ground",
    "bgm": "map5.mp3",
    "firstArrive": [],
    "eachArrive": [],
    "parallelDo": "",
    "events": {},
    "changeFloor": {
        "6,12": {
            "floorId": "C96",
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
                "name": "flag:door_C99_6_4",
                "operator": "+=",
                "value": "1"
            }
        ],
        "10,4": [
            {
                "type": "setValue",
                "name": "flag:door_C99_6_4",
                "operator": "+=",
                "value": "1"
            }
        ],
        "6,1": [
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
                                        "reason": "Rank 9 - Angel"
                                    }
                                ],
                                "false": [
                                    {
                                        "type": "if",
                                        "condition": "(item:I475==1)",
                                        "true": [
                                            {
                                                "type": "win",
                                                "reason": "Rank 9 - Gabriel"
                                            }
                                        ],
                                        "false": [
                                            {
                                                "type": "if",
                                                "condition": "(item:I845==1)",
                                                "true": [
                                                    {
                                                        "type": "win",
                                                        "reason": "Rank 9 - GabrielⅡ"
                                                    }
                                                ],
                                                "false": [
                                                    {
                                                        "type": "win",
                                                        "reason": "Rank 9 - God"
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
                                "floorId": "D100",
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
                "condition": "flag:door_C99_6_4==2",
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
    [690,690,690,690,690, 86, 86, 86,690,690,690,690,690],
    [690,690,690,690,690, 86,710, 86,690,690,690,690,690],
    [690,690,690,690,690, 86, 86, 86,690,690,690,690,690],
    [690,690,690,690,690,690, 86,690,690,690,690,690,690],
    [690,690,709,690,690,690, 85,690,690,690,709,690,690],
    [690,707, 59,708,690,690, 86,690,690, 81,451,707,690],
    [690, 59, 82,513,709,500,708,514,709,513,709,452,690],
    [690,709,436, 81,690,690,690,690,690,707,453,707,690],
    [690,690,706,690,690,690,690,690,690,690, 82,690,690],
    [690,455,  0,690,690,690,547,690,690,690,  0,456,690],
    [690,690,706,  0,690,690, 83,690,690,  0,705,690,690],
    [690,690,690,454, 81, 21,  0, 21,705,457,690,690,690],
    [690,690,690,690,690,690,345,690,690,690,690,690,690]
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