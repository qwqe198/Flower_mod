main.floors.K1=
{
    "floorId": "K1",
    "title": "焦土",
    "name": "焦土",
    "width": 13,
    "height": 13,
    "canFlyTo": true,
    "canUseQuickShop": true,
    "cannotViewMap": false,
    "images": [
        [
            0,
            0,
            "09.jpg",
            0
        ]
    ],
    "item_ratio": 100000000,
    "defaultGround": "ground",
    "bgm": "map3.mp3",
    "firstArrive": [
        {
            "type": "disableShop",
            "id": "r8"
        }
    ],
    "eachArrive": [],
    "parallelDo": "",
    "events": {
        "5,7": [
            {
                "type": "choices",
                "text": "Rank 5 - 6",
                "choices": [
                    {
                        "text": "荣耀剑",
                        "icon": "I525",
                        "action": [
                            {
                                "type": "if",
                                "condition": "item:I525==1",
                                "true": [
                                    {
                                        "type": "addValue",
                                        "name": "item:I525",
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
                        "text": "辉煌剑",
                        "icon": "I526",
                        "action": [
                            {
                                "type": "if",
                                "condition": "item:I526==1",
                                "true": [
                                    {
                                        "type": "addValue",
                                        "name": "item:I526",
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
                        "text": "沉星剑",
                        "icon": "I530",
                        "action": [
                            {
                                "type": "if",
                                "condition": "item:I530==1",
                                "true": [
                                    {
                                        "type": "addValue",
                                        "name": "item:I530",
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
                        "text": "落月剑",
                        "icon": "I531",
                        "action": [
                            {
                                "type": "if",
                                "condition": "item:I531==1",
                                "true": [
                                    {
                                        "type": "addValue",
                                        "name": "item:I531",
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
                        "text": "金痕盾",
                        "icon": "I528",
                        "action": [
                            {
                                "type": "if",
                                "condition": "item:I528==1",
                                "true": [
                                    {
                                        "type": "addValue",
                                        "name": "item:I528",
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
                        "text": "守护之盾",
                        "icon": "I529",
                        "action": [
                            {
                                "type": "if",
                                "condition": "item:I529==1",
                                "true": [
                                    {
                                        "type": "addValue",
                                        "name": "item:I529",
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
                        "text": "魔镜盾",
                        "icon": "I532",
                        "action": [
                            {
                                "type": "if",
                                "condition": "item:I532==1",
                                "true": [
                                    {
                                        "type": "addValue",
                                        "name": "item:I532",
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
                        "text": "补天之盾",
                        "icon": "I533",
                        "action": [
                            {
                                "type": "if",
                                "condition": "item:I533==1",
                                "true": [
                                    {
                                        "type": "addValue",
                                        "name": "item:I533",
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
        ],
        "7,5": [
            {
                "type": "openShop",
                "id": "r9"
            }
        ]
    },
    "changeFloor": {
        "6,1": {
            "floorId": "K2",
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
    [148,148,148,148,148,148,148,148,148,148,148,148,148],
    [148,515,515, 82,148,148,365,148,148, 31,567, 28,148],
    [148,148,148, 28,148, 31,  0, 31,148,568,148,148,148],
    [148,148, 31,566, 81,  0, 29,  0,565, 81, 31,148,148],
    [148,148,148,563,148,148,569,148,148,566,148,148,148],
    [148,40406,  0, 21,148, 32,  0,133,148, 31,  0,30787,148],
    [148, 27, 81,  0,563,  0,  0,  0, 81,565,568, 29,148],
    [148,148, 31, 82,148,535,  0, 31,148, 21,  0,148,148],
    [148,148,148, 30,148,148,564,148,148,567,148,148,148],
    [562,148, 31, 82,565, 32,563, 31, 86,564,514,148,562],
    [148,148,148, 34,148,  0,566,  0,148, 29,148,148,148],
    [148, 27, 31, 81,148,148, 28,148,148,568, 82, 33,148],
    [148,148,148,148,148,148,148,148,148,148,148,148,148]
],
    "bgmap": [

],
    "fgmap": [

]
}