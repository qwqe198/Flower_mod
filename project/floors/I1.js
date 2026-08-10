main.floors.I1=
{
    "floorId": "I1",
    "title": "浅滩",
    "name": "浅滩",
    "width": 13,
    "height": 13,
    "canFlyTo": true,
    "canUseQuickShop": true,
    "cannotViewMap": false,
    "images": [
        [
            0,
            0,
            "07.jpg",
            0
        ]
    ],
    "item_ratio": 1000000,
    "defaultGround": "ground",
    "bgm": "map3.mp3",
    "firstArrive": [
        {
            "type": "disableShop",
            "id": "r6"
        },
        {
            "type": "if",
            "condition": "item:I474==1",
            "true": [
                "检测到拥有守护天使！\n侦测到前方的高能反应！\n对手正在不断变强，\n因此之后的征程将更具挑战性，\n现在将有一次机会升级守护天使！",
                {
                    "type": "confirm",
                    "text": "确认要升级吗？\n将与之前的难度分开计入成绩。",
                    "yes": [
                        {
                            "type": "addValue",
                            "name": "item:I474",
                            "value": "-1"
                        },
                        {
                            "type": "addValue",
                            "name": "item:I476",
                            "value": "1"
                        }
                    ],
                    "no": []
                }
            ],
            "false": []
        }
    ],
    "eachArrive": [],
    "parallelDo": "",
    "events": {
        "7,5": [
            {
                "type": "openShop",
                "id": "r7"
            }
        ],
        "5,7": [
            {
                "type": "if",
                "condition": "flag:xianji==1",
                "true": [
                    {
                        "type": "choices",
                        "text": "Rank 1 - 2",
                        "choices": [
                            {
                                "text": "铁剑",
                                "icon": "sword1",
                                "action": [
                                    {
                                        "type": "if",
                                        "condition": "item:sword1==1",
                                        "true": [
                                            {
                                                "type": "addValue",
                                                "name": "item:sword1",
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
                                "text": "银剑",
                                "icon": "sword2",
                                "action": [
                                    {
                                        "type": "if",
                                        "condition": "item:sword2==1",
                                        "true": [
                                            {
                                                "type": "addValue",
                                                "name": "item:sword2",
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
                                "text": "魔法剑",
                                "icon": "sword3",
                                "action": [
                                    {
                                        "type": "if",
                                        "condition": "item:sword3==1",
                                        "true": [
                                            {
                                                "type": "addValue",
                                                "name": "item:sword3",
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
                                "text": "铁盾",
                                "icon": "shield1",
                                "action": [
                                    {
                                        "type": "if",
                                        "condition": "item:shield1==1",
                                        "true": [
                                            {
                                                "type": "addValue",
                                                "name": "item:shield1",
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
                                "text": "银盾",
                                "icon": "shield2",
                                "action": [
                                    {
                                        "type": "if",
                                        "condition": "item:shield2==1",
                                        "true": [
                                            {
                                                "type": "addValue",
                                                "name": "item:shield2",
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
                                "text": "魔法盾",
                                "icon": "shield3",
                                "action": [
                                    {
                                        "type": "if",
                                        "condition": "item:shield3==1",
                                        "true": [
                                            {
                                                "type": "addValue",
                                                "name": "item:shield3",
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
                "false": [
                    "身上有多余的装备吗？\n将要献祭的装备卸下吧。\n献祭获得的装备之灵，\n能够直接为角色提供五分之一的对应属性！",
                    {
                        "type": "setValue",
                        "name": "flag:xianji",
                        "value": "1"
                    },
                    {
                        "type": "choices",
                        "text": "Rank 1 - 2",
                        "choices": [
                            {
                                "text": "铁剑",
                                "icon": "sword1",
                                "action": [
                                    {
                                        "type": "if",
                                        "condition": "item:sword1==1",
                                        "true": [
                                            {
                                                "type": "addValue",
                                                "name": "item:sword1",
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
                                "text": "银剑",
                                "icon": "sword2",
                                "action": [
                                    {
                                        "type": "if",
                                        "condition": "item:sword2==1",
                                        "true": [
                                            {
                                                "type": "addValue",
                                                "name": "item:sword2",
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
                                "text": "魔法剑",
                                "icon": "sword3",
                                "action": [
                                    {
                                        "type": "if",
                                        "condition": "item:sword3==1",
                                        "true": [
                                            {
                                                "type": "addValue",
                                                "name": "item:sword3",
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
                                "text": "铁盾",
                                "icon": "shield1",
                                "action": [
                                    {
                                        "type": "if",
                                        "condition": "item:shield1==1",
                                        "true": [
                                            {
                                                "type": "addValue",
                                                "name": "item:shield1",
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
                                    }
                                ]
                            },
                            {
                                "text": "银盾",
                                "icon": "shield2",
                                "action": [
                                    {
                                        "type": "if",
                                        "condition": "item:shield2==1",
                                        "true": [
                                            {
                                                "type": "addValue",
                                                "name": "item:shield2",
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
                                    }
                                ]
                            },
                            {
                                "text": "魔法盾",
                                "icon": "shield3",
                                "action": [
                                    {
                                        "type": "if",
                                        "condition": "item:shield3==1",
                                        "true": [
                                            {
                                                "type": "addValue",
                                                "name": "item:shield3",
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
            }
        ]
    },
    "changeFloor": {
        "6,1": {
            "floorId": "I2",
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
    [146,146,146,146,146,146,146,146,146,146,146,146,146],
    [146,515, 83, 30,146,146,361,146,146,413, 81, 33,146],
    [146,146,146,422,146, 21, 81, 31,146, 81,146,146,146],
    [146,146, 31,424,425,  0,514,  0,420,418, 27,146,146],
    [146,146,146, 81,146,146,417,146,146,424,146,146,146],
    [146,30337,  0,449,146, 29,  0,133,146, 28,  0,30326,146],
    [146,514,323,  0,420,  0,  0,  0, 82,  0,323, 29,146],
    [146,146, 21,425,146,535,  0, 47,146, 32,  0,146,146],
    [146,146,146, 82,146,146,413,146,146,418,146,146,146],
    [146,146, 29,417,416, 27,  0, 22, 86,424, 27,146,146],
    [146,146,146, 21,146,  0, 81,  0,146, 31,146,146,146],
    [146, 32, 31, 81,146,146, 34,146,146,416, 28, 34,146],
    [146,146,146,146,146,146,146,146,146,146,146,146,146]
],
    "bgmap": [

],
    "fgmap": [

]
}