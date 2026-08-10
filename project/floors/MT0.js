main.floors.MT0=
{
    "floorId": "MT0",
    "title": "微光之序言",
    "name": "微光之序言",
    "canFlyTo": true,
    "canUseQuickShop": true,
    "cannotViewMap": false,
    "defaultGround": "ground",
    "images": [
        [
            0,
            0,
            "01.jpg",
            0
        ]
    ],
    "item_ratio": 2,
    "map": [
    [140,140,140,140,140,140,102,140,140,140,140,140,140],
    [140, 27,  0, 31,140,  0,  0,  0,140,20158,  0, 27,140],
    [140,140,302,140,140, 27,  0, 31,140,140,303,140,140],
    [140,  0, 31,  0,140,140,260,140,140,20040,  0, 27,140],
    [140, 31,  0,300, 86,  0, 27, 86,302,  0, 31,  0,140],
    [140,140,300,140,140, 31,  0,140,140,140,301,140,140],
    [140,  0, 47,  0,140,140,301,140,300, 86, 27,  0,140],
    [140,20032,  0,303, 86, 31,  0,140,  0,140,  0,20011,140],
    [140,140,304,140,140,  0, 27,302, 31,140,303,  0,140],
    [140, 27,  0, 31,140,140,305,140,140,140, 86,140,140],
    [140,140,140,302,140,20011,  0, 47,140,  0,302,  0,140],
    [140,20221,  0, 31,301,  0, 31,  0, 86,304,140, 27,140],
    [140,140,140,140,140,140,341,140,140,140,140,140,140]
],
    "firstArrive": [
        {
            "type": "setCurtain",
            "color": [
                0,
                0,
                0,
                1
            ],
            "time": 0
        },
        {
            "type": "showStatusBar"
        },
        {
            "type": "setCurtain",
            "time": 1000,
            "async": true
        },
        {
            "type": "waitAsync"
        }
    ],
    "parallelDo": "",
    "events": {
        "6,0": [
            {
                "type": "function",
                "function": "function(){\ncore.control.checkBgm()\n}"
            },
            {
                "type": "if",
                "condition": "!core.isReplaying()",
                "true": [
                    {
                        "type": "function",
                        "function": "function(){\ncore.chooseReplayFile()\n}"
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
                0
            ],
            "time": 0
        }
    },
    "afterBattle": {
        "6,3": [
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
        "6,6": [
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
        "2,8": [
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
        "9,11": [
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
        ],
        "4,11": [
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
        "5,2": [
            {
                "type": "setValue",
                "name": "status:hui",
                "value": "1"
            }
        ],
        "7,2": [
            {
                "type": "setValue",
                "name": "status:hui",
                "value": "2"
            }
        ],
        "1,1": [
            {
                "type": "setValue",
                "name": "status:hui",
                "value": "1"
            }
        ],
        "6,4": [
            {
                "type": "setValue",
                "name": "status:hui",
                "value": "1"
            }
        ],
        "6,8": [
            {
                "type": "setValue",
                "name": "status:hui",
                "value": "1"
            }
        ],
        "1,9": [
            {
                "type": "setValue",
                "name": "status:hui",
                "value": "1"
            }
        ],
        "11,11": [
            {
                "type": "setValue",
                "name": "status:hui",
                "value": "1"
            }
        ],
        "11,3": [
            {
                "type": "setValue",
                "name": "status:hui",
                "value": "1"
            }
        ],
        "11,1": [
            {
                "type": "setValue",
                "name": "status:hui",
                "value": "1"
            }
        ],
        "10,6": [
            {
                "type": "setValue",
                "name": "status:hui",
                "value": "1"
            }
        ],
        "3,1": [
            {
                "type": "setValue",
                "name": "status:hui",
                "value": "2"
            }
        ],
        "2,3": [
            {
                "type": "setValue",
                "name": "status:hui",
                "value": "2"
            }
        ],
        "1,4": [
            {
                "type": "setValue",
                "name": "status:hui",
                "value": "2"
            }
        ],
        "3,9": [
            {
                "type": "setValue",
                "name": "status:hui",
                "value": "2"
            }
        ],
        "3,11": [
            {
                "type": "setValue",
                "name": "status:hui",
                "value": "2"
            }
        ],
        "6,11": [
            {
                "type": "setValue",
                "name": "status:hui",
                "value": "2"
            }
        ],
        "8,8": [
            {
                "type": "setValue",
                "name": "status:hui",
                "value": "2"
            }
        ],
        "5,7": [
            {
                "type": "setValue",
                "name": "status:hui",
                "value": "2"
            }
        ],
        "5,5": [
            {
                "type": "setValue",
                "name": "status:hui",
                "value": "2"
            }
        ],
        "10,4": [
            {
                "type": "setValue",
                "name": "status:hui",
                "value": "2"
            }
        ]
    },
    "afterOpenDoor": {},
    "cannotMove": {},
    "bgmap": [

],
    "fgmap": [
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,20150,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0]
],
    "width": 13,
    "height": 13,
    "autoEvent": {},
    "bgm": "map1.mp3"
}