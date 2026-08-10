main.floors.Final10=
{
    "floorId": "Final10",
    "title": "花开之处",
    "name": "花开之处",
    "width": 13,
    "height": 13,
    "canFlyTo": true,
    "canUseQuickShop": true,
    "cannotViewMap": false,
    "images": [
        {
            "name": "Final.jpg",
            "canvas": "bg",
            "x": 0,
            "y": 0
        },
        {
            "name": "Final.png",
            "canvas": "fg",
            "x": 0,
            "y": 0
        }
    ],
    "ratio": 5000,
    "defaultGround": 10008,
    "bgm": "map10.mp3",
    "firstArrive": [],
    "eachArrive": [],
    "parallelDo": "",
    "events": {
        "6,4": []
    },
    "changeFloor": {
        "6,12": {
            "floorId": "Final7",
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
                "name": "flag:Final",
                "operator": "+=",
                "value": "1"
            },
            {
                "type": "if",
                "condition": "(flag:Final==2)",
                "true": [
                    {
                        "type": "setBlock",
                        "number": "I517",
                        "loc": [
                            [
                                6,
                                3
                            ]
                        ],
                        "time": 2000
                    }
                ]
            }
        ],
        "10,4": [
            {
                "type": "setValue",
                "name": "flag:Final",
                "operator": "+=",
                "value": "1"
            },
            {
                "type": "if",
                "condition": "(flag:Final==2)",
                "true": [
                    {
                        "type": "setBlock",
                        "number": "I517",
                        "loc": [
                            [
                                6,
                                3
                            ]
                        ],
                        "time": 2000
                    }
                ]
            }
        ],
        "6,1": [
            {
                "type": "setCurtain",
                "color": [
                    0,
                    0,
                    0,
                    1
                ],
                "time": 3000
            },
            {
                "type": "autoSave"
            },
            {
                "type": "choices",
                "text": "恭喜通关。\n也许在故事到达最后巅峰的此时此刻， 少女终于找到了自己存在的意义，也许还没有。 \n但这一切都将被记忆所留存。 \n在此之后，她们的故事仍在延续……\n不，准确说才刚刚开始。",
                "choices": [
                    {
                        "text": "生命计分",
                        "action": [
                            {
                                "type": "if",
                                "condition": "(item:I471==1)",
                                "true": [
                                    {
                                        "type": "win",
                                        "reason": "Final Rank - Angel",
                                        "noexit": 1
                                    }
                                ],
                                "false": [
                                    {
                                        "type": "if",
                                        "condition": "(item:I475==1)",
                                        "true": [
                                            {
                                                "type": "win",
                                                "reason": "Final Rank - Gabriel",
                                                "noexit": 1
                                            }
                                        ],
                                        "false": [
                                            {
                                                "type": "if",
                                                "condition": "(item:I845==1)",
                                                "true": [
                                                    {
                                                        "type": "win",
                                                        "reason": "Final Rank - GabrielⅡ",
                                                        "noexit": 1
                                                    }
                                                ],
                                                "false": [
                                                    {
                                                        "type": "win",
                                                        "reason": "Final Rank - God",
                                                        "noexit": 1
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
                        "text": "资源计分",
                        "action": [
                            "计分方式：按照留存的资源进行计分。\n黄钥匙2分、蓝钥匙5分、红钥匙15分。\n破墙镐15分、炸弹15分、飞行器15分。\n绿钥匙25分。",
                            {
                                "type": "if",
                                "condition": "(item:yellowKey*2+item:blueKey*5+item:redKey*15+item:pickaxe*15+item:centerFly*15+item:bomb*15+item:greenKey*25==0)",
                                "true": [
                                    {
                                        "type": "setValue",
                                        "name": "status:hp",
                                        "operator": "/=",
                                        "value": "status:hp*2"
                                    }
                                ],
                                "false": [
                                    {
                                        "type": "setValue",
                                        "name": "status:hp",
                                        "value": "item:yellowKey*2+item:blueKey*5+item:redKey*15+item:pickaxe*15+item:centerFly*15+item:bomb*15+item:greenKey*25"
                                    }
                                ]
                            },
                            {
                                "type": "if",
                                "condition": "(item:I471==1)",
                                "true": [
                                    {
                                        "type": "win",
                                        "reason": "Final Rank - Angel Keys",
                                        "noexit": 1
                                    }
                                ],
                                "false": [
                                    {
                                        "type": "if",
                                        "condition": "(item:I475==1)",
                                        "true": [
                                            {
                                                "type": "win",
                                                "reason": "Final Rank - Gabriel Keys",
                                                "noexit": 1
                                            }
                                        ],
                                        "false": [
                                            {
                                                "type": "win",
                                                "reason": "Final Rank - God Keys",
                                                "noexit": 1
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
                "type": "insert",
                "loc": [
                    6,
                    4
                ],
                "floorId": "sample0"
            }
        ],
        "10,10": [
            {
                "type": "setValue",
                "name": "flag:E831",
                "operator": "+=",
                "value": "1"
            },
            {
                "type": "setValue",
                "name": "flag:H831",
                "value": "360000000-flag:E831*36000000"
            },
            {
                "type": "setEnemy",
                "id": "E831",
                "name": "hp",
                "value": "flag:H831"
            }
        ],
        "6,5": [
            {
                "type": "setValue",
                "name": "flag:E831",
                "operator": "+=",
                "value": "1"
            },
            {
                "type": "setValue",
                "name": "flag:H831",
                "value": "360000000-flag:E831*36000000"
            },
            {
                "type": "setEnemy",
                "id": "E831",
                "name": "hp",
                "value": "flag:H831"
            }
        ]
    },
    "afterGetItem": {
        "6,3": [
            {
                "type": "changePos",
                "loc": [
                    6,
                    3
                ]
            },
            {
                "type": "setBlock",
                "number": "E807",
                "loc": [
                    [
                        6,
                        1
                    ]
                ],
                "time": 3000
            },
            {
                "type": "setBlock",
                "number": "autotile2",
                "loc": [
                    [
                        6,
                        4
                    ]
                ],
                "time": 2000
            },
            {
                "type": "hide",
                "loc": [
                    [
                        6,
                        12
                    ]
                ],
                "remove": true,
                "time": 0
            },
            {
                "type": "setValue",
                "name": "item:fly",
                "value": "0"
            }
        ]
    },
    "afterOpenDoor": {},
    "autoEvent": {},
    "cannotMove": {},
    "map": [
    [152,152,152,152,152,  0,  0,  0,152,152,152,152,152],
    [152,152,152,152,152,  0,503,  0,152,152,152,152,152],
    [152,152,152,152,152,  0,  0,  0,152,152,152,152,152],
    [152,152,152,152,152,152, 85,152,152,152,152,152,152],
    [152,152,804,152,152,152,  0,152,152,152,801,152,152],
    [142,500,806,465,152,152,831,152,152,458,806,463,142],
    [142,835,502,806,515,836,466, 84,514,836,502,835,142],
    [142,459,835,458,142,142,142,142,142, 47,835,464,142],
    [142,142,806,142,142,142,142,142,142,142, 82,142,142],
    [142,461,  0,142,142,142,504,142,142,142,  0,460,142],
    [152,142,828,  0,142,142, 84,142,142,  0,831,142,152],
    [152,152,142,501, 16,480, 84,501,829,461,142,152,152],
    [152,152,152,142,142,142,358,142,142,142,152,152,152]
],
    "bgmap": [

],
    "fgmap": [
    [146,146,146,146,146,  0,  0,  0,146,146,146,146,146],
    [146,146,146,146,146,  0,  0,  0,146,146,146,146,146],
    [146,146,146,146,146,  0,  0,  0,146,146,146,146,146],
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
    "bg2map": [
        [
            0,
            0,
            0,
            0,
            0,
            110112,
            110113,
            110114,
            0,
            0,
            0,
            0,
            0
        ],
        [
            0,
            0,
            0,
            0,
            0,
            110120,
            110121,
            110122,
            0,
            0,
            0,
            0,
            0
        ],
        [
            0,
            0,
            0,
            0,
            0,
            110128,
            110129,
            110130,
            0,
            0,
            0,
            0,
            0
        ],
        [
            0,
            0,
            0,
            0,
            0,
            0,
            100494,
            0,
            0,
            0,
            0,
            0,
            0
        ],
        [
            0,
            0,
            0,
            0,
            0,
            0,
            100502,
            0,
            0,
            0,
            0,
            0,
            0
        ],
        [
            0,
            100488,
            100489,
            100490,
            0,
            0,
            100510,
            0,
            0,
            100488,
            100489,
            100490,
            0
        ],
        [
            0,
            100496,
            100497,
            100498,
            100517,
            100518,
            100518,
            100518,
            100519,
            100496,
            100497,
            100498,
            0
        ],
        [
            0,
            100504,
            100505,
            100506,
            0,
            0,
            0,
            0,
            0,
            100504,
            100505,
            100506,
            0
        ],
        [
            0,
            0,
            100494,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            100494,
            0,
            0
        ],
        [
            0,
            0,
            100502,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            100502,
            0,
            0
        ],
        [
            0,
            0,
            100510,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            100510,
            0,
            0
        ],
        [
            0,
            0,
            0,
            100517,
            100518,
            100518,
            100518,
            100518,
            100518,
            100519,
            0,
            0,
            0
        ],
        [
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0
        ]
    ],
    "fg2map": [],
    "beforeBattle": {},
    "cannotMoveIn": {},
    "canFlyFrom": true
}