main.floors.G139=
{
    "floorId": "G139",
    "title": "奇迹圣所",
    "name": "奇迹圣所",
    "width": 13,
    "height": 13,
    "canFlyTo": true,
    "canUseQuickShop": true,
    "cannotViewMap": false,
    "images": [
        {
            "name": "02.jpg",
            "canvas": "bg",
            "x": 0,
            "y": 0
        }
    ],
    "ratio": 2000,
    "defaultGround": 10008,
    "bgm": "map9.mp3",
    "firstArrive": [],
    "eachArrive": [],
    "parallelDo": "",
    "events": {},
    "changeFloor": {
        "6,12": {
            "floorId": "G136",
            "loc": [
                6,
                0
            ]
        }
    },
    "afterBattle": {
        "4,11": [
            {
                "type": "setValue",
                "name": "flag:E820",
                "operator": "+=",
                "value": "1"
            },
            {
                "type": "setValue",
                "name": "flag:A820",
                "value": "2400000-flag:E820*72000"
            },
            {
                "type": "setEnemy",
                "id": "E820",
                "name": "atk",
                "value": "flag:A820"
            }
        ],
        "2,4": [
            {
                "type": "setValue",
                "name": "flag:door_G139_6_4",
                "operator": "+=",
                "value": "1"
            }
        ],
        "10,4": [
            {
                "type": "setValue",
                "name": "flag:door_G139_6_4",
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
                                        "reason": "Rank 13 - Angel"
                                    }
                                ],
                                "false": [
                                    {
                                        "type": "if",
                                        "condition": "(item:I475==1)",
                                        "true": [
                                            {
                                                "type": "win",
                                                "reason": "Rank 13 - Gabriel"
                                            }
                                        ],
                                        "false": [
                                            {
                                                "type": "if",
                                                "condition": "(item:I845==1)",
                                                "true": [
                                                    {
                                                        "type": "win",
                                                        "reason": "Rank 13 - GabrielⅡ"
                                                    }
                                                ],
                                                "false": [
                                                    {
                                                        "type": "win",
                                                        "reason": "Rank 13 - God"
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
                                "floorId": "Final1",
                                "loc": [
                                    6,
                                    11
                                ],
                                "direction": "up",
                                "time": 1000
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
                "condition": "flag:door_G139_6_4==2",
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
    [157,157,157,157,157, 86, 86, 86,157,157,157,157,157],
    [157,157,157,157,157, 86,824, 86,157,157,157,157,157],
    [157,157,157,157,157, 86, 86, 86,157,157,157,157,157],
    [157,157,157,157,157,157, 86,157,157,157,157,157,157],
    [157,157,790,157,157,157, 85,157,157,157,790,157,157],
    [157,822,500,825,157,157, 86,157,157, 81,513,825,157],
    [157,461,781,513, 83, 22,821,436, 83,456,822,455,157],
    [157,825,512, 81,157,157,157,157,157,825,455,818,157],
    [157,157,790,157,157,157,157,157,157,157, 82,157,157],
    [157,456,  0,157,157,157,464,157,157,157,  0,457,157],
    [157,157,822,  0,157,157, 83,157,157,  0,781,157,157],
    [157,157,157,454,820, 22,  0, 21,786,500,157,157,157],
    [157,157,157,157,157,157,358,157,157,157,157,157,157]
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