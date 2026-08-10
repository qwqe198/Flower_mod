main.floors.MT4=
{
    "floorId": "MT4",
    "title": "协音之琴弦",
    "name": "协音之琴弦",
    "width": 13,
    "height": 13,
    "canFlyTo": true,
    "canUseQuickShop": true,
    "images": [],
    "item_ratio": 10,
    "defaultGround": "grass",
    "bgm": "map2.mp3",
    "firstArrive": [],
    "eachArrive": [],
    "parallelDo": "",
    "events": {
        "6,7": [
            {
                "type": "if",
                "condition": "flag:qin4==0",
                "true": [
                    {
                        "type": "choices",
                        "choices": [
                            {
                                "text": "攻击翻倍",
                                "action": [
                                    {
                                        "type": "addValue",
                                        "name": "status:atk",
                                        "value": "status:atk"
                                    },
                                    {
                                        "type": "addValue",
                                        "name": "flag:qin4",
                                        "value": "1"
                                    }
                                ]
                            },
                            {
                                "text": "防御翻倍",
                                "action": [
                                    {
                                        "type": "addValue",
                                        "name": "status:def",
                                        "value": "status:def"
                                    },
                                    {
                                        "type": "addValue",
                                        "name": "flag:qin4",
                                        "value": "1"
                                    }
                                ]
                            },
                            {
                                "text": "取消",
                                "action": []
                            }
                        ]
                    }
                ],
                "false": []
            }
        ]
    },
    "changeFloor": {
        "0,3": {
            "floorId": "MT3",
            "loc": [
                12,
                3
            ],
            "time": 0
        },
        "3,1": {
            "floorId": "MT4",
            "loc": [
                1,
                8
            ],
            "time": 0
        },
        "1,8": {
            "floorId": "MT4",
            "loc": [
                3,
                1
            ],
            "time": 0
        },
        "11,8": {
            "floorId": "MT4",
            "loc": [
                9,
                1
            ],
            "time": 0
        },
        "9,1": {
            "floorId": "MT4",
            "loc": [
                11,
                8
            ],
            "time": 0
        },
        "12,3": {
            "floorId": "MT6",
            "loc": [
                6,
                12
            ],
            "direction": "up",
            "time": 500
        }
    },
    "afterBattle": {
        "11,3": [
            {
                "type": "choices",
                "text": "要记录成绩吗？",
                "choices": [
                    {
                        "text": "记录成绩",
                        "action": [
                            {
                                "type": "addValue",
                                "name": "status:hp",
                                "value": "item:lifeWand*100000"
                            },
                            {
                                "type": "win",
                                "reason": "微光"
                            }
                        ]
                    },
                    {
                        "text": "继续游戏",
                        "action": []
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
    [142,142,142,30944,30944,142,142,142,30944,30944,142,142,142],
    [142,141,141, 90,  0,141,141,141,  0, 90,141,141,142],
    [141,314, 86,  0, 86,375, 37,375, 86,  0,  1, 32,141],
    [338, 27,  1,377,  1, 86,  1, 86,  1,377, 86,261,339],
    [142,374, 86, 34,315, 27,  1, 27,315, 34,  1, 32,142],
    [142,142,142,313,  1,  0,316,  0,  1,313,142,142,142],
    [142,142,142, 28,  1,  1, 86,  1,  1, 28,142,142,142],
    [142,142,142,142,142,30909,30910,30911,142,142,142,142,142],
    [142, 90,142,142,142,30917,30918,30919,142,142,142, 90,142],
    [142,  0,374,142,142,30896,30897,30896,142,142, 32,  0,142],
    [142,377, 86, 32,142,142,142,142,142, 34,  1, 86,142],
    [142, 27,  1,314, 28,142,142,142, 28,375, 27,315,142],
    [142,142,142,142,142,142,142,142,142,142,142,142,142]
],
    "bgmap": [

],
    "fgmap": [

]
}