main.floors.M1=
{
    "floorId": "M1",
    "title": "山麓",
    "name": "山麓",
    "width": 13,
    "height": 13,
    "canFlyTo": true,
    "canUseQuickShop": true,
    "cannotViewMap": false,
    "images": [
        [
            0,
            0,
            "11.jpg",
            0
        ]
    ],
    "item_ratio": 10000000000,
    "defaultGround": "ground",
    "bgm": "map4.mp3",
    "firstArrive": [
        {
            "type": "disableShop",
            "id": "r10"
        }
    ],
    "eachArrive": [],
    "parallelDo": "",
    "events": {
        "7,5": [
            {
                "type": "openShop",
                "id": "r11"
            }
        ],
        "5,7": [
            {
                "type": "choices",
                "text": "Rank 7 - 8",
                "choices": [
                    {
                        "text": "火焱之剑",
                        "icon": "I539",
                        "action": [
                            {
                                "type": "if",
                                "condition": "item:I539==1",
                                "true": [
                                    {
                                        "type": "addValue",
                                        "name": "item:I539",
                                        "value": "-1"
                                    },
                                    {
                                        "type": "addValue",
                                        "name": "item:I491",
                                        "value": "1"
                                    }
                                ],
                                "false": [
                                    "未持有装备（或装备未卸下。）"
                                ]
                            },
                            {
                                "type": "revisit"
                            }
                        ]
                    },
                    {
                        "text": "冰淼之剑",
                        "icon": "I540",
                        "action": [
                            {
                                "type": "if",
                                "condition": "item:I540==1",
                                "true": [
                                    {
                                        "type": "addValue",
                                        "name": "item:I540",
                                        "value": "-1"
                                    },
                                    {
                                        "type": "addValue",
                                        "name": "item:I491",
                                        "value": "1"
                                    }
                                ],
                                "false": [
                                    "未持有装备（或装备未卸下。）"
                                ]
                            },
                            {
                                "type": "revisit"
                            }
                        ]
                    },
                    {
                        "text": "双刃剑",
                        "icon": "I544",
                        "action": [
                            {
                                "type": "if",
                                "condition": "item:I544==1",
                                "true": [
                                    {
                                        "type": "addValue",
                                        "name": "item:I544",
                                        "value": "-1"
                                    },
                                    {
                                        "type": "addValue",
                                        "name": "item:I491",
                                        "value": "1"
                                    }
                                ],
                                "false": [
                                    "未持有装备（或装备未卸下。）"
                                ]
                            },
                            {
                                "type": "revisit"
                            }
                        ]
                    },
                    {
                        "text": "弯月剑",
                        "icon": "I545",
                        "action": [
                            {
                                "type": "if",
                                "condition": "item:I545==1",
                                "true": [
                                    {
                                        "type": "addValue",
                                        "name": "item:I545",
                                        "value": "-1"
                                    },
                                    {
                                        "type": "addValue",
                                        "name": "item:I491",
                                        "value": "1"
                                    }
                                ],
                                "false": [
                                    "未持有装备（或装备未卸下。）"
                                ]
                            },
                            {
                                "type": "revisit"
                            }
                        ]
                    },
                    {
                        "text": "风吹之盾",
                        "icon": "I541",
                        "action": [
                            {
                                "type": "if",
                                "condition": "item:I541==1",
                                "true": [
                                    {
                                        "type": "addValue",
                                        "name": "item:I541",
                                        "value": "-1"
                                    },
                                    {
                                        "type": "addValue",
                                        "name": "item:I475",
                                        "value": "1"
                                    }
                                ],
                                "false": [
                                    "未持有装备（或装备未卸下。）"
                                ]
                            },
                            {
                                "type": "revisit"
                            }
                        ]
                    },
                    {
                        "text": "地磐之甲",
                        "icon": "I542",
                        "action": [
                            {
                                "type": "if",
                                "condition": "item:I542==1",
                                "true": [
                                    {
                                        "type": "addValue",
                                        "name": "item:I542",
                                        "value": "-1"
                                    },
                                    {
                                        "type": "addValue",
                                        "name": "item:I475",
                                        "value": "1"
                                    }
                                ],
                                "false": [
                                    "未持有装备（或装备未卸下。）"
                                ]
                            },
                            {
                                "type": "revisit"
                            }
                        ]
                    },
                    {
                        "text": "唯香",
                        "icon": "I546",
                        "action": [
                            {
                                "type": "if",
                                "condition": "item:I546==1",
                                "true": [
                                    {
                                        "type": "addValue",
                                        "name": "item:I546",
                                        "value": "-1"
                                    },
                                    {
                                        "type": "addValue",
                                        "name": "item:I475",
                                        "value": "1"
                                    }
                                ],
                                "false": [
                                    "未持有装备（或装备未卸下。）"
                                ]
                            },
                            {
                                "type": "revisit"
                            }
                        ]
                    },
                    {
                        "text": "零尘",
                        "icon": "I547",
                        "action": [
                            {
                                "type": "if",
                                "condition": "item:I547==1",
                                "true": [
                                    {
                                        "type": "addValue",
                                        "name": "item:I547",
                                        "value": "-1"
                                    },
                                    {
                                        "type": "addValue",
                                        "name": "item:I475",
                                        "value": "1"
                                    }
                                ],
                                "false": [
                                    "未持有装备（或装备未卸下。）"
                                ]
                            },
                            {
                                "type": "revisit"
                            }
                        ]
                    },
                    {
                        "text": "离开",
                        "action": []
                    }
                ]
            }
        ]
    },
    "changeFloor": {
        "6,1": {
            "floorId": "M2",
            "loc": [
                6,
                1
            ],
            "direction": "down",
            "time": 0
        }
    },
    "afterBattle": {},
    "afterGetItem": {},
    "afterOpenDoor": {},
    "autoEvent": {},
    "cannotMove": {},
    "map": [
    [154,154,154,154,154,154,154,154,154,154,154,154,154],
    [154, 27, 32,606,154,154,332,154,154, 32, 81, 34,154],
    [154,154,154, 21,154, 34,  0, 32,154, 81,154,154,154],
    [154,154,449,604,605, 81, 31,  0,607,606, 34,154,154],
    [154,154,154, 86,154,154,604,154,154,608,154,154,154],
    [154,30275,  0, 31,154,516,  0,133,154, 27,  0,30274,154],
    [154, 22,607, 81,603,  0,  0,  0, 82,  0,605, 28,154],
    [154,154, 29,606,154,535,  0, 30,154, 21,  0,154,154],
    [154,154,154, 86,154,154,603,154,154,608,154,154,154],
    [154,154, 28,608,605, 32,  0, 27, 81,607, 34,154,154],
    [154,154,154,517,154,  0,609,  0,154, 28,154,154,154],
    [154, 34, 34, 82,154,154, 30,154,154,610,447,516,154],
    [154,154,154,154,154,154,154,154,154,154,154,154,154]
],
    "bgmap": [

],
    "fgmap": [

]
}