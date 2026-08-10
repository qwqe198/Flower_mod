main.floors.J1=
{
    "floorId": "J1",
    "title": "海洋",
    "name": "海洋",
    "width": 13,
    "height": 13,
    "canFlyTo": true,
    "canUseQuickShop": true,
    "cannotViewMap": false,
    "images": [
        [
            0,
            0,
            "08.jpg",
            0
        ]
    ],
    "item_ratio": 10000000,
    "defaultGround": "ground",
    "bgm": "map3.mp3",
    "firstArrive": [
        {
            "type": "disableShop",
            "id": "r7"
        }
    ],
    "eachArrive": [],
    "parallelDo": "",
    "events": {
        "5,7": [
            {
                "type": "choices",
                "text": "Rank 3 - 4",
                "choices": [
                    {
                        "text": "通玉剑",
                        "icon": "sword4",
                        "action": [
                            {
                                "type": "if",
                                "condition": "item:sword4==1",
                                "true": [
                                    {
                                        "type": "addValue",
                                        "name": "item:sword4",
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
                        "text": "勇士剑",
                        "icon": "sword5",
                        "action": [
                            {
                                "type": "if",
                                "condition": "item:sword5==1",
                                "true": [
                                    {
                                        "type": "addValue",
                                        "name": "item:sword5",
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
                        "text": "正义之剑",
                        "icon": "I520",
                        "action": [
                            {
                                "type": "if",
                                "condition": "item:I520==1",
                                "true": [
                                    {
                                        "type": "addValue",
                                        "name": "item:I520",
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
                        "text": "咏唱之剑",
                        "icon": "I521",
                        "action": [
                            {
                                "type": "if",
                                "condition": "item:I521==1",
                                "true": [
                                    {
                                        "type": "addValue",
                                        "name": "item:I521",
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
                        "text": "通玉盾",
                        "icon": "shield4",
                        "action": [
                            {
                                "type": "if",
                                "condition": "item:shield4==1",
                                "true": [
                                    {
                                        "type": "addValue",
                                        "name": "item:shield4",
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
                        "text": "勇士盾",
                        "icon": "shield5",
                        "action": [
                            {
                                "type": "if",
                                "condition": "item:shield5==1",
                                "true": [
                                    {
                                        "type": "addValue",
                                        "name": "item:shield5",
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
                        "text": "结界盾",
                        "icon": "I523",
                        "action": [
                            {
                                "type": "if",
                                "condition": "item:I523==1",
                                "true": [
                                    {
                                        "type": "addValue",
                                        "name": "item:I523",
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
                        "text": "壁垒盾",
                        "icon": "I524",
                        "action": [
                            {
                                "type": "if",
                                "condition": "item:I524==1",
                                "true": [
                                    {
                                        "type": "addValue",
                                        "name": "item:I524",
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
                "id": "r8"
            }
        ]
    },
    "changeFloor": {
        "6,1": {
            "floorId": "J2",
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
    [147,147,147,147,147,147,147,147,147,147,147,147,147],
    [147, 33,556, 82,147,147,353,147,147, 32,262, 59,147],
    [147,147,147, 34,147, 31,556, 32,147, 81,147,147,147],
    [147,147, 22,430,433,  0,426,  0, 81,429, 28,147,147],
    [147,147,147,431,147,147, 81,147,147,430,147,147,147],
    [147,40422,427, 27,147, 31,  0,133,147, 31,  0,40381,147],
    [147, 28, 82, 82,428,  0,  0,  0,426, 86,433,447,147],
    [147,147, 27,430,147,535,  0, 28,147, 29,  0,147,147],
    [147,147,147, 86,147,147, 81,147,147,428,147,147,147],
    [147,147, 21,432, 81, 49,427, 32, 86,433, 30,147,147],
    [147,147,147, 34,147,  0,429,  0,147, 21,147,147,147],
    [147, 27, 31,431,147,147,514,147,147,432, 82,449,147],
    [147,147,147,147,147,147,147,147,147,147,147,147,147]
],
    "bgmap": [

],
    "fgmap": [
    [143,143,143,143,143,143,143,143,143,143,143,143,143],
    [143,143,143,143,143,143,143,143,143,143,143,143,143],
    [143,143,143,143,143,143,143,143,143,143,143,143,143],
    [143,143,143,143,143,143,143,143,143,143,143,143,143],
    [143,143,143,143,143,143,143,143,143,143,143,143,143],
    [143,143,143,143,143,143,143,143,143,143,143,143,143],
    [143,143,143,143,143,143,143,143,143,143,143,143,143],
    [143,143,143,143,143,143,143,143,143,143,143,143,143],
    [143,143,143,143,143,143,143,143,143,143,143,143,143],
    [143,143,143,143,143,143,143,143,143,143,143,143,143],
    [143,143,143,143,143,143,143,143,143,143,143,143,143],
    [143,143,143,143,143,143,143,143,143,143,143,143,143],
    [143,143,143,143,143,143,143,143,143,143,143,143,143]
]
}