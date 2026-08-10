main.floors.MT1=
{
    "floorId": "MT1",
    "title": "微光之序言",
    "name": "微光之序言",
    "width": 13,
    "height": 13,
    "canFlyTo": true,
    "canUseQuickShop": true,
    "cannotViewMap": false,
    "images": [
        [
            0,
            0,
            "01.jpg",
            0
        ]
    ],
    "item_ratio": 2,
    "defaultGround": "ground",
    "bgm": "map1.mp3",
    "firstArrive": [],
    "eachArrive": [],
    "parallelDo": "",
    "events": {},
    "changeFloor": {
        "6,0": {
            "floorId": "MT0",
            "loc": [
                6,
                12
            ],
            "time": 0
        },
        "6,12": {
            "floorId": "MT3",
            "loc": [
                6,
                12
            ],
            "direction": "up",
            "time": 500
        }
    },
    "afterBattle": {
        "3,1": [
            {
                "type": "switch",
                "condition": "status:hui",
                "caseList": [
                    {
                        "case": "1",
                        "action": [
                            {
                                "type": "addValue",
                                "name": "status:atk",
                                "value": "2"
                            },
                            {
                                "type": "comment",
                                "text": "当判别值是值的场合执行此事件"
                            }
                        ]
                    },
                    {
                        "case": "2",
                        "nobreak": true,
                        "action": [
                            {
                                "type": "addValue",
                                "name": "status:hp",
                                "value": "100"
                            }
                        ]
                    },
                    {
                        "case": "default",
                        "action": [
                            {
                                "type": "comment",
                                "text": "当没有符合的值的场合执行default事件"
                            }
                        ]
                    }
                ]
            }
        ],
        "2,2": [
            {
                "type": "switch",
                "condition": "status:hui",
                "caseList": [
                    {
                        "case": "1",
                        "action": [
                            {
                                "type": "addValue",
                                "name": "status:atk",
                                "value": "2"
                            },
                            {
                                "type": "comment",
                                "text": "当判别值是值的场合执行此事件"
                            }
                        ]
                    },
                    {
                        "case": "2",
                        "nobreak": true,
                        "action": [
                            {
                                "type": "addValue",
                                "name": "status:hp",
                                "value": "100"
                            }
                        ]
                    },
                    {
                        "case": "default",
                        "action": [
                            {
                                "type": "comment",
                                "text": "当没有符合的值的场合执行default事件"
                            }
                        ]
                    }
                ]
            }
        ],
        "3,6": [
            {
                "type": "switch",
                "condition": "status:hui",
                "caseList": [
                    {
                        "case": "1",
                        "action": [
                            {
                                "type": "addValue",
                                "name": "status:atk",
                                "value": "2"
                            },
                            {
                                "type": "comment",
                                "text": "当判别值是值的场合执行此事件"
                            }
                        ]
                    },
                    {
                        "case": "2",
                        "nobreak": true,
                        "action": [
                            {
                                "type": "addValue",
                                "name": "status:hp",
                                "value": "100"
                            }
                        ]
                    },
                    {
                        "case": "default",
                        "action": [
                            {
                                "type": "comment",
                                "text": "当没有符合的值的场合执行default事件"
                            }
                        ]
                    }
                ]
            }
        ],
        "6,8": [
            {
                "type": "switch",
                "condition": "status:hui",
                "caseList": [
                    {
                        "case": "1",
                        "action": [
                            {
                                "type": "addValue",
                                "name": "status:atk",
                                "value": "2"
                            },
                            {
                                "type": "comment",
                                "text": "当判别值是值的场合执行此事件"
                            }
                        ]
                    },
                    {
                        "case": "2",
                        "nobreak": true,
                        "action": [
                            {
                                "type": "addValue",
                                "name": "status:hp",
                                "value": "100"
                            }
                        ]
                    },
                    {
                        "case": "default",
                        "action": [
                            {
                                "type": "comment",
                                "text": "当没有符合的值的场合执行default事件"
                            }
                        ]
                    }
                ]
            }
        ],
        "6,5": [
            {
                "type": "switch",
                "condition": "status:hui",
                "caseList": [
                    {
                        "case": "1",
                        "action": [
                            {
                                "type": "addValue",
                                "name": "status:atk",
                                "value": "2"
                            },
                            {
                                "type": "comment",
                                "text": "当判别值是值的场合执行此事件"
                            }
                        ]
                    },
                    {
                        "case": "2",
                        "nobreak": true,
                        "action": [
                            {
                                "type": "addValue",
                                "name": "status:hp",
                                "value": "100"
                            }
                        ]
                    },
                    {
                        "case": "default",
                        "action": [
                            {
                                "type": "comment",
                                "text": "当没有符合的值的场合执行default事件"
                            }
                        ]
                    }
                ]
            }
        ],
        "9,6": [
            {
                "type": "switch",
                "condition": "status:hui",
                "caseList": [
                    {
                        "case": "1",
                        "action": [
                            {
                                "type": "addValue",
                                "name": "status:atk",
                                "value": "2"
                            },
                            {
                                "type": "comment",
                                "text": "当判别值是值的场合执行此事件"
                            }
                        ]
                    },
                    {
                        "case": "2",
                        "nobreak": true,
                        "action": [
                            {
                                "type": "addValue",
                                "name": "status:hp",
                                "value": "100"
                            }
                        ]
                    },
                    {
                        "case": "default",
                        "action": [
                            {
                                "type": "comment",
                                "text": "当没有符合的值的场合执行default事件"
                            }
                        ]
                    }
                ]
            }
        ],
        "9,1": [
            {
                "type": "switch",
                "condition": "status:hui",
                "caseList": [
                    {
                        "case": "1",
                        "action": [
                            {
                                "type": "addValue",
                                "name": "status:atk",
                                "value": "2"
                            },
                            {
                                "type": "comment",
                                "text": "当判别值是值的场合执行此事件"
                            }
                        ]
                    },
                    {
                        "case": "2",
                        "nobreak": true,
                        "action": [
                            {
                                "type": "addValue",
                                "name": "status:hp",
                                "value": "100"
                            }
                        ]
                    },
                    {
                        "case": "default",
                        "action": [
                            {
                                "type": "comment",
                                "text": "当没有符合的值的场合执行default事件"
                            }
                        ]
                    }
                ]
            }
        ],
        "3,4": [
            {
                "type": "switch",
                "condition": "status:hui",
                "caseList": [
                    {
                        "case": "1",
                        "action": [
                            {
                                "type": "addValue",
                                "name": "status:atk",
                                "value": "2"
                            },
                            {
                                "type": "comment",
                                "text": "当判别值是值的场合执行此事件"
                            }
                        ]
                    },
                    {
                        "case": "2",
                        "nobreak": true,
                        "action": [
                            {
                                "type": "addValue",
                                "name": "status:hp",
                                "value": "100"
                            }
                        ]
                    },
                    {
                        "case": "default",
                        "action": [
                            {
                                "type": "comment",
                                "text": "当没有符合的值的场合执行default事件"
                            }
                        ]
                    }
                ]
            }
        ],
        "7,1": [
            {
                "type": "switch",
                "condition": "status:hui",
                "caseList": [
                    {
                        "case": "1",
                        "action": [
                            {
                                "type": "addValue",
                                "name": "status:atk",
                                "value": "2"
                            },
                            {
                                "type": "comment",
                                "text": "当判别值是值的场合执行此事件"
                            }
                        ]
                    },
                    {
                        "case": "2",
                        "nobreak": true,
                        "action": [
                            {
                                "type": "addValue",
                                "name": "status:hp",
                                "value": "100"
                            }
                        ]
                    },
                    {
                        "case": "default",
                        "action": [
                            {
                                "type": "comment",
                                "text": "当没有符合的值的场合执行default事件"
                            }
                        ]
                    }
                ]
            }
        ],
        "8,2": [
            {
                "type": "switch",
                "condition": "status:hui",
                "caseList": [
                    {
                        "case": "1",
                        "action": [
                            {
                                "type": "addValue",
                                "name": "status:atk",
                                "value": "2"
                            },
                            {
                                "type": "comment",
                                "text": "当判别值是值的场合执行此事件"
                            }
                        ]
                    },
                    {
                        "case": "2",
                        "nobreak": true,
                        "action": [
                            {
                                "type": "addValue",
                                "name": "status:hp",
                                "value": "100"
                            }
                        ]
                    },
                    {
                        "case": "default",
                        "action": [
                            {
                                "type": "comment",
                                "text": "当没有符合的值的场合执行default事件"
                            }
                        ]
                    }
                ]
            }
        ],
        "10,5": [
            {
                "type": "switch",
                "condition": "status:hui",
                "caseList": [
                    {
                        "case": "1",
                        "action": [
                            {
                                "type": "addValue",
                                "name": "status:atk",
                                "value": "2"
                            },
                            {
                                "type": "comment",
                                "text": "当判别值是值的场合执行此事件"
                            }
                        ]
                    },
                    {
                        "case": "2",
                        "nobreak": true,
                        "action": [
                            {
                                "type": "addValue",
                                "name": "status:hp",
                                "value": "100"
                            }
                        ]
                    },
                    {
                        "case": "default",
                        "action": [
                            {
                                "type": "comment",
                                "text": "当没有符合的值的场合执行default事件"
                            }
                        ]
                    }
                ]
            }
        ]
    },
    "afterGetItem": {
        "5,6": [
            {
                "type": "setValue",
                "name": "status:hui",
                "value": "2"
            }
        ],
        "6,7": [
            {
                "type": "setValue",
                "name": "status:hui",
                "value": "2"
            }
        ],
        "7,6": [
            {
                "type": "setValue",
                "name": "status:hui",
                "value": "2"
            }
        ],
        "11,1": [
            {
                "type": "setValue",
                "name": "status:hui",
                "value": "2"
            }
        ],
        "4,2": [
            {
                "type": "setValue",
                "name": "status:hui",
                "value": "2"
            }
        ],
        "4,4": [
            {
                "type": "setValue",
                "name": "status:hui",
                "value": "1"
            }
        ],
        "11,4": [
            {
                "type": "setValue",
                "name": "status:hui",
                "value": "1"
            }
        ],
        "8,1": [
            {
                "type": "setValue",
                "name": "status:hui",
                "value": "1"
            }
        ],
        "5,10": [
            {
                "type": "setValue",
                "name": "status:hui",
                "value": "2"
            }
        ],
        "6,9": [
            {
                "type": "setValue",
                "name": "status:hui",
                "value": "2"
            }
        ],
        "7,10": [
            {
                "type": "setValue",
                "name": "status:hui",
                "value": "2"
            }
        ],
        "2,7": [
            {
                "type": "setValue",
                "name": "status:hui",
                "value": "1"
            }
        ],
        "1,6": [
            {
                "type": "setValue",
                "name": "status:hui",
                "value": "1"
            }
        ],
        "10,7": [
            {
                "type": "setValue",
                "name": "status:hui",
                "value": "1"
            }
        ]
    },
    "afterOpenDoor": {},
    "autoEvent": {},
    "cannotMove": {},
    "map": [
    [140,140,140,140,140,140,344,140,140,140,140,140,140],
    [140,20222,  0,304,  0,306, 56,307, 27,304,  0, 31,140],
    [140,  0,308,140, 31,140,140,140,307,140,20018,306,140],
    [140,140, 86,140,306,140, 47,140,  0,140,140, 86,140],
    [140, 35,  0,307, 27, 86,  0, 86,306,140,  0, 27,140],
    [140,20116,140,140,140,140,308,140,140,140,307,20215,140],
    [140, 27,  0,308, 86, 31,  0, 31, 86,308,  0,140,140],
    [140,  0, 27,  0,140,  0, 31,  0,140,  0, 27,  0,140],
    [140,140,20149,140,140,140,308,140,140,140,20167,140,140],
    [140,140,140,  0,140,  0, 31,  0,140,  0,140,140,140],
    [140,140,140,140,  0, 31,  0, 31,  0,140,140,140,140],
    [140,140,140,140,140,  0,309,  0,140,140,140,140,140],
    [140,140,140,140,140,20220,341,20221,140,140,140,140,140]
],
    "bgmap": [

],
    "fgmap": [

]
}