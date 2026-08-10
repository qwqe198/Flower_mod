main.floors.MT3=
{
    "floorId": "MT3",
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
        "2,7": [
            {
                "type": "if",
                "condition": "flag:qin1==0",
                "true": [
                    {
                        "type": "choices",
                        "choices": [
                            {
                                "text": "增加一半攻击",
                                "action": [
                                    {
                                        "type": "addValue",
                                        "name": "status:atk",
                                        "value": "status:atk*0.5"
                                    },
                                    {
                                        "type": "addValue",
                                        "name": "flag:qin1",
                                        "value": "1"
                                    }
                                ]
                            },
                            {
                                "text": "增加一半防御",
                                "action": [
                                    {
                                        "type": "addValue",
                                        "name": "status:def",
                                        "value": "status:def*0.5"
                                    },
                                    {
                                        "type": "addValue",
                                        "name": "flag:qin1",
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
        ],
        "10,7": [
            {
                "type": "if",
                "condition": "flag:qin2==0",
                "true": [
                    {
                        "type": "choices",
                        "choices": [
                            {
                                "text": "增加一半攻击",
                                "action": [
                                    {
                                        "type": "addValue",
                                        "name": "status:atk",
                                        "value": "status:atk*0.5"
                                    },
                                    {
                                        "type": "addValue",
                                        "name": "flag:qin2",
                                        "value": "1"
                                    }
                                ]
                            },
                            {
                                "text": "增加一半防御",
                                "action": [
                                    {
                                        "type": "addValue",
                                        "name": "status:def",
                                        "value": "status:def*0.5"
                                    },
                                    {
                                        "type": "addValue",
                                        "name": "flag:qin2",
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
        ],
        "6,1": [
            {
                "type": "if",
                "condition": "flag:qin3==0",
                "true": [
                    {
                        "type": "choices",
                        "choices": [
                            {
                                "text": "增加一半攻击",
                                "action": [
                                    {
                                        "type": "addValue",
                                        "name": "status:atk",
                                        "value": "status:atk*0.5"
                                    },
                                    {
                                        "type": "addValue",
                                        "name": "flag:qin3",
                                        "value": "1"
                                    }
                                ]
                            },
                            {
                                "text": "增加一半防御",
                                "action": [
                                    {
                                        "type": "addValue",
                                        "name": "status:def",
                                        "value": "status:def*0.5"
                                    },
                                    {
                                        "type": "addValue",
                                        "name": "flag:qin3",
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
        "6,12": {
            "floorId": "MT1",
            "loc": [
                6,
                12
            ],
            "time": 0
        },
        "12,3": {
            "floorId": "MT4",
            "loc": [
                0,
                3
            ],
            "time": 0
        }
    },
    "afterBattle": {},
    "afterGetItem": {},
    "afterOpenDoor": {},
    "autoEvent": {},
    "cannotMove": {},
    "map": [
    [142,142,142,142,142,141,141,141,142,142,142,142,142],
    [142,141,141,141,141,30901,30902,30903,141,141,141,141,142],
    [142, 38,311, 31,  1,312, 33,312,  1,312, 86, 33,141],
    [142,311,  1,310,  1, 31,  1, 34,309,  0,  1,313,339],
    [142, 31,310, 27,309,  0, 32,  0,  1, 27,  1, 28,142],
    [142,142,142,142,142,142,310,142,142,142,142,142,142],
    [142,141,141,141,142,141, 32,141,142,141,141,141,142],
    [142,30901,30902,30903,142, 28,369, 86,142,30901,30902,30903,142],
    [142,  0,373, 28,141,  0,  1, 28,141,  1,370,  1,142],
    [142, 32,  1,371, 86,366,  1,368, 31,372,  0, 28,142],
    [142,30873,30874, 27,  1, 31,  1, 36,  1,  0,30872,30872,142],
    [142,30881,30882,  0,367,  0, 27,  0,  1, 27,30880,30880,142],
    [142,142,142,142,142,142,337,142,142,142,142,142,142]
],
    "bgmap": [

],
    "fgmap": [
    [  0,  0,  0,  0,  0,30893,30894,30895,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,30893,30894,30895,  0,  0,  0,  0,  0,30893,30894,30895,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0]
]
}