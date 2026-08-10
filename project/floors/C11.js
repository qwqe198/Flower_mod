main.floors.C11=
{
    "floorId": "C11",
    "title": "枯萎溪谷",
    "name": "枯萎溪谷",
    "width": 13,
    "height": 13,
    "canFlyTo": true,
    "canUseQuickShop": true,
    "cannotViewMap": false,
    "images": [
        {
            "name": "09.jpg",
            "canvas": "bg",
            "x": 0,
            "y": 0
        }
    ],
    "item_ratio": 1,
    "defaultGround": "ground",
    "bgm": "map1.mp3",
    "firstArrive": [
        {
            "type": "showStatusBar"
        },
        {
            "type": "setText",
            "position": "down",
            "offset": 0
        }
    ],
    "eachArrive": [],
    "parallelDo": "",
    "events": {
        "6,12": [
            {
                "type": "choices",
                "choices": [
                    {
                        "text": "回放录像",
                        "action": [
                            {
                                "type": "function",
                                "function": "function(){\ncore.control.checkBgm()\n}"
                            },
                            {
                                "type": "if",
                                "condition": "(!core.isReplaying())",
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
                    {
                        "text": "修改难度",
                        "action": [
                            {
                                "type": "choices",
                                "text": "你可以从以下选项中选择一个。\n守护天使可以为你提供20%的全属性加成，难度最低。\n宙斯之力为最高难度。\n秘密启示可以为你提供30%减伤，很简单。\n秘密启示Ⅱ可以为你提供10%减伤，略有难度。\n将分开计入成绩。",
                                "choices": [
                                    {
                                        "text": "守护天使【难度：Easy 2】",
                                        "color": [
                                            153,
                                            187,
                                            255,
                                            1
                                        ],
                                        "action": [
                                            {
                                                "type": "if",
                                                "condition": "(item:I475==1)",
                                                "true": [
                                                    "已经选择了其它难度！"
                                                ],
                                                "false": [
                                                    {
                                                        "type": "if",
                                                        "condition": "(item:I845==1)",
                                                        "true": [
                                                            "已经选择了其它难度！"
                                                        ],
                                                        "false": [
                                                            "选择了简单难度。 \n该难度适合初次接触魔塔的新人，或是希望轻松乱撞推进游戏的玩家。 \n一般而言初见即可通关，选对路线之后怪物基本不会有伤害。",
                                                            {
                                                                "type": "addValue",
                                                                "name": "item:I474",
                                                                "value": "1"
                                                            }
                                                        ]
                                                    }
                                                ]
                                            }
                                        ]
                                    },
                                    {
                                        "text": "宙斯之力【难度：Chaos 12】",
                                        "color": [
                                            221,
                                            85,
                                            255,
                                            1
                                        ],
                                        "action": [
                                            {
                                                "type": "if",
                                                "condition": "(item:I474==1)",
                                                "true": [
                                                    "已经选择了其它难度！"
                                                ],
                                                "false": [
                                                    {
                                                        "type": "if",
                                                        "condition": "(item:I475==1)",
                                                        "true": [
                                                            "已经选择了其它难度！"
                                                        ],
                                                        "false": [
                                                            {
                                                                "type": "if",
                                                                "condition": "(item:I845==1)",
                                                                "true": [
                                                                    "已经选择了其它难度！"
                                                                ],
                                                                "false": [
                                                                    "该难度适合实力超群的拆塔高手，或是勇于挑战极限的勇士。\n需要针对整个全局的高难度分析与优化，每一区初始状态也需要仔细斟酌，可与人合拆以交流路线。",
                                                                    "混沌难度下，角色无任何加成。\n使用你自己的力量拯救世界吧！"
                                                                ]
                                                            }
                                                        ]
                                                    }
                                                ]
                                            }
                                        ]
                                    },
                                    {
                                        "text": "秘密启示【难度：Normal 6】",
                                        "color": [
                                            255,
                                            102,
                                            102,
                                            1
                                        ],
                                        "action": [
                                            {
                                                "type": "if",
                                                "condition": "(item:I474==1)",
                                                "true": [
                                                    "已经选择了其它难度！"
                                                ],
                                                "false": [
                                                    {
                                                        "type": "if",
                                                        "condition": "(item:I845==1)",
                                                        "true": [
                                                            "已经选择了其它难度！"
                                                        ],
                                                        "false": [
                                                            "选择了普通难度。\n由于本塔血瓶占比较高，减伤的效果很强，故对本难度评级进行了下调。",
                                                            {
                                                                "type": "addValue",
                                                                "name": "item:I475",
                                                                "value": "1"
                                                            }
                                                        ]
                                                    }
                                                ]
                                            }
                                        ]
                                    },
                                    {
                                        "text": "秘密启示Ⅱ【难度：Hard 9】",
                                        "color": [
                                            255,
                                            39,
                                            39,
                                            1
                                        ],
                                        "action": [
                                            {
                                                "type": "if",
                                                "condition": "(item:I474==1)",
                                                "true": [
                                                    "已经选择了其它难度！"
                                                ],
                                                "false": [
                                                    {
                                                        "type": "if",
                                                        "condition": "(item:I475==1)",
                                                        "true": [
                                                            "已经选择了其它难度！"
                                                        ],
                                                        "false": [
                                                            "选择了困难难度。\n该难度适合相对资深的魔塔爱好者，或是希望体验思考乐趣的玩家。 \n一般需要小关卡之内重打，以凭借自己的经验把路线做到更好。",
                                                            {
                                                                "type": "addValue",
                                                                "name": "item:I845",
                                                                "value": "1"
                                                            }
                                                        ]
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
                        "text": "我按错啦",
                        "action": []
                    },
                    {
                        "text": "跳关选项",
                        "action": [
                            {
                                "type": "choices",
                                "text": "需要跳关吗？\n你将携带守护天使或秘密启示任选其一进行游戏。\n最高难度不支持跳关。",
                                "choices": [
                                    {
                                        "text": "守护天使【难度：Easy 2】",
                                        "color": [
                                            153,
                                            187,
                                            255,
                                            1
                                        ],
                                        "action": [
                                            {
                                                "type": "setValue",
                                                "name": "item:I474",
                                                "value": "0"
                                            },
                                            {
                                                "type": "setValue",
                                                "name": "item:I475",
                                                "value": "0"
                                            },
                                            {
                                                "type": "setValue",
                                                "name": "item:I471",
                                                "value": "1"
                                            },
                                            {
                                                "type": "setValue",
                                                "name": "status:exp",
                                                "value": "0"
                                            },
                                            {
                                                "type": "setValue",
                                                "name": "item:I479",
                                                "value": "1"
                                            },
                                            {
                                                "type": "function",
                                                "function": "function(){\ncore.setFlag(\"__visited__\", {});\n}"
                                            },
                                            {
                                                "type": "choices",
                                                "text": "选择关卡。",
                                                "choices": [
                                                    {
                                                        "text": "Rank3  丛雨森林",
                                                        "color": [
                                                            102,
                                                            238,
                                                            136,
                                                            1
                                                        ],
                                                        "action": [
                                                            {
                                                                "type": "changeFloor",
                                                                "floorId": "C31",
                                                                "loc": [
                                                                    6,
                                                                    11
                                                                ],
                                                                "direction": "up"
                                                            },
                                                            {
                                                                "type": "setValue",
                                                                "name": "item:I471",
                                                                "value": "0"
                                                            },
                                                            {
                                                                "type": "setValue",
                                                                "name": "item:I474",
                                                                "value": "1"
                                                            },
                                                            {
                                                                "type": "setValue",
                                                                "name": "status:hp",
                                                                "value": "16000"
                                                            },
                                                            {
                                                                "type": "setValue",
                                                                "name": "status:atk",
                                                                "value": "880"
                                                            },
                                                            {
                                                                "type": "setValue",
                                                                "name": "status:def",
                                                                "value": "880"
                                                            },
                                                            {
                                                                "type": "setValue",
                                                                "name": "status:mdef",
                                                                "value": "2400"
                                                            },
                                                            {
                                                                "type": "setValue",
                                                                "name": "item:yellowKey",
                                                                "value": "2"
                                                            },
                                                            {
                                                                "type": "setValue",
                                                                "name": "item:blueKey",
                                                                "value": "1"
                                                            },
                                                            {
                                                                "type": "setValue",
                                                                "name": "item:redKey",
                                                                "value": "0"
                                                            },
                                                            {
                                                                "type": "setValue",
                                                                "name": "item:pickaxe",
                                                                "value": "1"
                                                            },
                                                            {
                                                                "type": "setValue",
                                                                "name": "status:lv",
                                                                "value": "66"
                                                            }
                                                        ]
                                                    },
                                                    {
                                                        "text": "Rank5  珠露原野",
                                                        "color": [
                                                            102,
                                                            170,
                                                            238,
                                                            1
                                                        ],
                                                        "action": [
                                                            {
                                                                "type": "changeFloor",
                                                                "floorId": "C51",
                                                                "loc": [
                                                                    6,
                                                                    11
                                                                ],
                                                                "direction": "up"
                                                            },
                                                            {
                                                                "type": "setValue",
                                                                "name": "status:hp",
                                                                "value": "160000"
                                                            },
                                                            {
                                                                "type": "setValue",
                                                                "name": "status:atk",
                                                                "value": "5600"
                                                            },
                                                            {
                                                                "type": "setValue",
                                                                "name": "status:def",
                                                                "value": "5600"
                                                            },
                                                            {
                                                                "type": "setValue",
                                                                "name": "status:mdef",
                                                                "value": "18000"
                                                            },
                                                            {
                                                                "type": "setValue",
                                                                "name": "item:yellowKey",
                                                                "value": "3"
                                                            },
                                                            {
                                                                "type": "setValue",
                                                                "name": "item:blueKey",
                                                                "value": "1"
                                                            },
                                                            {
                                                                "type": "setValue",
                                                                "name": "item:redKey",
                                                                "value": "0"
                                                            },
                                                            {
                                                                "type": "setValue",
                                                                "name": "item:pickaxe",
                                                                "value": "1"
                                                            },
                                                            {
                                                                "type": "setValue",
                                                                "name": "status:lv",
                                                                "value": "120"
                                                            }
                                                        ]
                                                    },
                                                    {
                                                        "text": "Rank7  千针松林",
                                                        "color": [
                                                            119,
                                                            102,
                                                            238,
                                                            1
                                                        ],
                                                        "action": [
                                                            {
                                                                "type": "changeFloor",
                                                                "floorId": "C71",
                                                                "loc": [
                                                                    6,
                                                                    11
                                                                ],
                                                                "direction": "up"
                                                            },
                                                            {
                                                                "type": "setValue",
                                                                "name": "status:hp",
                                                                "value": "960000"
                                                            },
                                                            {
                                                                "type": "setValue",
                                                                "name": "status:atk",
                                                                "value": "16800"
                                                            },
                                                            {
                                                                "type": "setValue",
                                                                "name": "status:def",
                                                                "value": "16800"
                                                            },
                                                            {
                                                                "type": "setValue",
                                                                "name": "status:mdef",
                                                                "value": "68000"
                                                            },
                                                            {
                                                                "type": "setValue",
                                                                "name": "item:yellowKey",
                                                                "value": "5"
                                                            },
                                                            {
                                                                "type": "setValue",
                                                                "name": "item:blueKey",
                                                                "value": "2"
                                                            },
                                                            {
                                                                "type": "setValue",
                                                                "name": "item:redKey",
                                                                "value": "1"
                                                            },
                                                            {
                                                                "type": "setValue",
                                                                "name": "status:lv",
                                                                "value": "159"
                                                            }
                                                        ]
                                                    },
                                                    {
                                                        "text": "Rank9  破碎狭缝",
                                                        "color": [
                                                            170,
                                                            85,
                                                            221,
                                                            1
                                                        ],
                                                        "action": [
                                                            {
                                                                "type": "changeFloor",
                                                                "floorId": "C90",
                                                                "loc": [
                                                                    6,
                                                                    11
                                                                ],
                                                                "direction": "up"
                                                            },
                                                            {
                                                                "type": "setValue",
                                                                "name": "status:hp",
                                                                "value": "1600000"
                                                            },
                                                            {
                                                                "type": "setValue",
                                                                "name": "status:atk",
                                                                "value": "43400"
                                                            },
                                                            {
                                                                "type": "setValue",
                                                                "name": "status:def",
                                                                "value": "41800"
                                                            },
                                                            {
                                                                "type": "setValue",
                                                                "name": "status:mdef",
                                                                "value": "153000"
                                                            },
                                                            {
                                                                "type": "setValue",
                                                                "name": "item:yellowKey",
                                                                "value": "5"
                                                            },
                                                            {
                                                                "type": "setValue",
                                                                "name": "item:blueKey",
                                                                "value": "5"
                                                            },
                                                            {
                                                                "type": "setValue",
                                                                "name": "item:redKey",
                                                                "value": "1"
                                                            },
                                                            {
                                                                "type": "setValue",
                                                                "name": "item:pickaxe",
                                                                "value": "1"
                                                            },
                                                            {
                                                                "type": "setValue",
                                                                "name": "status:lv",
                                                                "value": "281"
                                                            }
                                                        ]
                                                    },
                                                    {
                                                        "text": "Rank10  彩虹城堡",
                                                        "color": [
                                                            238,
                                                            102,
                                                            204,
                                                            1
                                                        ],
                                                        "action": [
                                                            {
                                                                "type": "changeFloor",
                                                                "floorId": "D100",
                                                                "loc": [
                                                                    6,
                                                                    11
                                                                ],
                                                                "direction": "up"
                                                            },
                                                            {
                                                                "type": "setValue",
                                                                "name": "status:hp",
                                                                "value": "3000000"
                                                            },
                                                            {
                                                                "type": "setValue",
                                                                "name": "status:atk",
                                                                "value": "108000"
                                                            },
                                                            {
                                                                "type": "setValue",
                                                                "name": "status:def",
                                                                "value": "103000"
                                                            },
                                                            {
                                                                "type": "setValue",
                                                                "name": "status:mdef",
                                                                "value": "333000"
                                                            },
                                                            {
                                                                "type": "setValue",
                                                                "name": "item:yellowKey",
                                                                "value": "5"
                                                            },
                                                            {
                                                                "type": "setValue",
                                                                "name": "item:blueKey",
                                                                "value": "5"
                                                            },
                                                            {
                                                                "type": "setValue",
                                                                "name": "item:redKey",
                                                                "value": "2"
                                                            },
                                                            {
                                                                "type": "setValue",
                                                                "name": "item:pickaxe",
                                                                "value": "1"
                                                            },
                                                            {
                                                                "type": "setValue",
                                                                "name": "item:centerFly",
                                                                "value": "1"
                                                            },
                                                            {
                                                                "type": "setValue",
                                                                "name": "status:lv",
                                                                "value": "438"
                                                            }
                                                        ]
                                                    },
                                                    {
                                                        "text": "Rank11  黄金废都",
                                                        "color": [
                                                            221,
                                                            204,
                                                            119,
                                                            1
                                                        ],
                                                        "action": [
                                                            {
                                                                "type": "changeFloor",
                                                                "floorId": "E110",
                                                                "loc": [
                                                                    6,
                                                                    11
                                                                ],
                                                                "direction": "up"
                                                            },
                                                            {
                                                                "type": "setValue",
                                                                "name": "status:hp",
                                                                "value": "8000000"
                                                            },
                                                            {
                                                                "type": "setValue",
                                                                "name": "status:atk",
                                                                "value": "235000"
                                                            },
                                                            {
                                                                "type": "setValue",
                                                                "name": "status:def",
                                                                "value": "220000"
                                                            },
                                                            {
                                                                "type": "setValue",
                                                                "name": "status:mdef",
                                                                "value": "557000"
                                                            },
                                                            {
                                                                "type": "setValue",
                                                                "name": "item:yellowKey",
                                                                "value": "8"
                                                            },
                                                            {
                                                                "type": "setValue",
                                                                "name": "item:blueKey",
                                                                "value": "5"
                                                            },
                                                            {
                                                                "type": "setValue",
                                                                "name": "item:redKey",
                                                                "value": "2"
                                                            },
                                                            {
                                                                "type": "setValue",
                                                                "name": "item:pickaxe",
                                                                "value": "2"
                                                            },
                                                            {
                                                                "type": "setValue",
                                                                "name": "item:bomb",
                                                                "value": "1"
                                                            },
                                                            {
                                                                "type": "setValue",
                                                                "name": "item:centerFly",
                                                                "value": "1"
                                                            },
                                                            {
                                                                "type": "setValue",
                                                                "name": "status:lv",
                                                                "value": "572"
                                                            }
                                                        ]
                                                    },
                                                    {
                                                        "text": "Rank12  梦魇深渊",
                                                        "color": [
                                                            255,
                                                            204,
                                                            0,
                                                            1
                                                        ],
                                                        "action": [
                                                            {
                                                                "type": "changeFloor",
                                                                "floorId": "F120",
                                                                "loc": [
                                                                    6,
                                                                    11
                                                                ],
                                                                "direction": "up"
                                                            },
                                                            {
                                                                "type": "setValue",
                                                                "name": "status:hp",
                                                                "value": "20000000"
                                                            },
                                                            {
                                                                "type": "setValue",
                                                                "name": "status:atk",
                                                                "value": "548000"
                                                            },
                                                            {
                                                                "type": "setValue",
                                                                "name": "status:def",
                                                                "value": "505000"
                                                            },
                                                            {
                                                                "type": "setValue",
                                                                "name": "status:mdef",
                                                                "value": "1782000"
                                                            },
                                                            {
                                                                "type": "setValue",
                                                                "name": "item:yellowKey",
                                                                "value": "10"
                                                            },
                                                            {
                                                                "type": "setValue",
                                                                "name": "item:blueKey",
                                                                "value": "6"
                                                            },
                                                            {
                                                                "type": "setValue",
                                                                "name": "item:redKey",
                                                                "value": "2"
                                                            },
                                                            {
                                                                "type": "setValue",
                                                                "name": "item:pickaxe",
                                                                "value": "2"
                                                            },
                                                            {
                                                                "type": "setValue",
                                                                "name": "item:bomb",
                                                                "value": "2"
                                                            },
                                                            {
                                                                "type": "setValue",
                                                                "name": "item:centerFly",
                                                                "value": "2"
                                                            },
                                                            {
                                                                "type": "setValue",
                                                                "name": "status:lv",
                                                                "value": "717"
                                                            }
                                                        ]
                                                    },
                                                    {
                                                        "text": "Rank13  奇迹圣所",
                                                        "color": [
                                                            238,
                                                            136,
                                                            85,
                                                            1
                                                        ],
                                                        "action": [
                                                            {
                                                                "type": "changeFloor",
                                                                "floorId": "G130",
                                                                "loc": [
                                                                    6,
                                                                    11
                                                                ],
                                                                "direction": "up"
                                                            },
                                                            {
                                                                "type": "setValue",
                                                                "name": "status:hp",
                                                                "value": "50000000"
                                                            },
                                                            {
                                                                "type": "setValue",
                                                                "name": "status:atk",
                                                                "value": "1125000"
                                                            },
                                                            {
                                                                "type": "setValue",
                                                                "name": "status:def",
                                                                "value": "1055000"
                                                            },
                                                            {
                                                                "type": "setValue",
                                                                "name": "status:mdef",
                                                                "value": "4100000"
                                                            },
                                                            {
                                                                "type": "setValue",
                                                                "name": "item:yellowKey",
                                                                "value": "12"
                                                            },
                                                            {
                                                                "type": "setValue",
                                                                "name": "item:blueKey",
                                                                "value": "7"
                                                            },
                                                            {
                                                                "type": "setValue",
                                                                "name": "item:redKey",
                                                                "value": "3"
                                                            },
                                                            {
                                                                "type": "setValue",
                                                                "name": "item:pickaxe",
                                                                "value": "3"
                                                            },
                                                            {
                                                                "type": "setValue",
                                                                "name": "item:bomb",
                                                                "value": "2"
                                                            },
                                                            {
                                                                "type": "setValue",
                                                                "name": "item:centerFly",
                                                                "value": "2"
                                                            },
                                                            {
                                                                "type": "setValue",
                                                                "name": "status:lv",
                                                                "value": "820"
                                                            }
                                                        ]
                                                    },
                                                    {
                                                        "text": "Rank14  花开之处",
                                                        "color": [
                                                            238,
                                                            85,
                                                            34,
                                                            1
                                                        ],
                                                        "action": [
                                                            {
                                                                "type": "changeFloor",
                                                                "floorId": "Final1",
                                                                "loc": [
                                                                    6,
                                                                    11
                                                                ],
                                                                "direction": "up"
                                                            },
                                                            {
                                                                "type": "setValue",
                                                                "name": "status:hp",
                                                                "value": "128000000"
                                                            },
                                                            {
                                                                "type": "setValue",
                                                                "name": "status:atk",
                                                                "value": "2300000"
                                                            },
                                                            {
                                                                "type": "setValue",
                                                                "name": "status:def",
                                                                "value": "2300000"
                                                            },
                                                            {
                                                                "type": "setValue",
                                                                "name": "status:mdef",
                                                                "value": "9000000"
                                                            },
                                                            {
                                                                "type": "setValue",
                                                                "name": "item:yellowKey",
                                                                "value": "14"
                                                            },
                                                            {
                                                                "type": "setValue",
                                                                "name": "item:blueKey",
                                                                "value": "8"
                                                            },
                                                            {
                                                                "type": "setValue",
                                                                "name": "item:redKey",
                                                                "value": "3"
                                                            },
                                                            {
                                                                "type": "setValue",
                                                                "name": "item:pickaxe",
                                                                "value": "3"
                                                            },
                                                            {
                                                                "type": "setValue",
                                                                "name": "item:bomb",
                                                                "value": "2"
                                                            },
                                                            {
                                                                "type": "setValue",
                                                                "name": "item:centerFly",
                                                                "value": "2"
                                                            },
                                                            {
                                                                "type": "setValue",
                                                                "name": "status:lv",
                                                                "value": "931"
                                                            }
                                                        ]
                                                    }
                                                ]
                                            }
                                        ]
                                    },
                                    {
                                        "text": "秘密启示【难度：Hard 6】",
                                        "color": [
                                            255,
                                            102,
                                            102,
                                            1
                                        ],
                                        "action": [
                                            {
                                                "type": "setValue",
                                                "name": "item:I474",
                                                "value": "0"
                                            },
                                            {
                                                "type": "function",
                                                "function": "function(){\ncore.setFlag(\"__visited__\", {});\n}"
                                            },
                                            {
                                                "type": "setValue",
                                                "name": "item:I475",
                                                "value": "1"
                                            },
                                            {
                                                "type": "setValue",
                                                "name": "status:exp",
                                                "value": "0"
                                            },
                                            {
                                                "type": "setValue",
                                                "name": "item:I479",
                                                "value": "1"
                                            },
                                            {
                                                "type": "choices",
                                                "text": "选择关卡。",
                                                "choices": [
                                                    {
                                                        "text": "Rank3  丛雨森林",
                                                        "color": [
                                                            102,
                                                            238,
                                                            136,
                                                            1
                                                        ],
                                                        "action": [
                                                            {
                                                                "type": "changeFloor",
                                                                "floorId": "C31",
                                                                "loc": [
                                                                    6,
                                                                    11
                                                                ],
                                                                "direction": "up"
                                                            },
                                                            {
                                                                "type": "setValue",
                                                                "name": "status:hp",
                                                                "value": "8000"
                                                            },
                                                            {
                                                                "type": "setValue",
                                                                "name": "status:atk",
                                                                "value": "880"
                                                            },
                                                            {
                                                                "type": "setValue",
                                                                "name": "status:def",
                                                                "value": "880"
                                                            },
                                                            {
                                                                "type": "setValue",
                                                                "name": "status:mdef",
                                                                "value": "2400"
                                                            },
                                                            {
                                                                "type": "setValue",
                                                                "name": "item:yellowKey",
                                                                "value": "2"
                                                            },
                                                            {
                                                                "type": "setValue",
                                                                "name": "item:blueKey",
                                                                "value": "1"
                                                            },
                                                            {
                                                                "type": "setValue",
                                                                "name": "item:redKey",
                                                                "value": "0"
                                                            },
                                                            {
                                                                "type": "setValue",
                                                                "name": "item:pickaxe",
                                                                "value": "1"
                                                            },
                                                            {
                                                                "type": "setValue",
                                                                "name": "status:lv",
                                                                "value": "66"
                                                            }
                                                        ]
                                                    },
                                                    {
                                                        "text": "Rank5  珠露原野",
                                                        "color": [
                                                            102,
                                                            170,
                                                            238,
                                                            1
                                                        ],
                                                        "action": [
                                                            {
                                                                "type": "changeFloor",
                                                                "floorId": "C51",
                                                                "loc": [
                                                                    6,
                                                                    11
                                                                ],
                                                                "direction": "up"
                                                            },
                                                            {
                                                                "type": "setValue",
                                                                "name": "status:hp",
                                                                "value": "80000"
                                                            },
                                                            {
                                                                "type": "setValue",
                                                                "name": "status:atk",
                                                                "value": "5600"
                                                            },
                                                            {
                                                                "type": "setValue",
                                                                "name": "status:def",
                                                                "value": "5600"
                                                            },
                                                            {
                                                                "type": "setValue",
                                                                "name": "status:mdef",
                                                                "value": "18000"
                                                            },
                                                            {
                                                                "type": "setValue",
                                                                "name": "item:yellowKey",
                                                                "value": "3"
                                                            },
                                                            {
                                                                "type": "setValue",
                                                                "name": "item:blueKey",
                                                                "value": "1"
                                                            },
                                                            {
                                                                "type": "setValue",
                                                                "name": "item:redKey",
                                                                "value": "0"
                                                            },
                                                            {
                                                                "type": "setValue",
                                                                "name": "item:pickaxe",
                                                                "value": "1"
                                                            },
                                                            {
                                                                "type": "setValue",
                                                                "name": "status:lv",
                                                                "value": "120"
                                                            }
                                                        ]
                                                    },
                                                    {
                                                        "text": "Rank7  千针松林",
                                                        "color": [
                                                            119,
                                                            102,
                                                            238,
                                                            1
                                                        ],
                                                        "action": [
                                                            {
                                                                "type": "changeFloor",
                                                                "floorId": "C71",
                                                                "loc": [
                                                                    6,
                                                                    11
                                                                ],
                                                                "direction": "up"
                                                            },
                                                            {
                                                                "type": "setValue",
                                                                "name": "status:hp",
                                                                "value": "480000"
                                                            },
                                                            {
                                                                "type": "setValue",
                                                                "name": "status:atk",
                                                                "value": "16800"
                                                            },
                                                            {
                                                                "type": "setValue",
                                                                "name": "status:def",
                                                                "value": "16800"
                                                            },
                                                            {
                                                                "type": "setValue",
                                                                "name": "status:mdef",
                                                                "value": "68000"
                                                            },
                                                            {
                                                                "type": "setValue",
                                                                "name": "item:yellowKey",
                                                                "value": "5"
                                                            },
                                                            {
                                                                "type": "setValue",
                                                                "name": "item:blueKey",
                                                                "value": "2"
                                                            },
                                                            {
                                                                "type": "setValue",
                                                                "name": "item:redKey",
                                                                "value": "1"
                                                            },
                                                            {
                                                                "type": "setValue",
                                                                "name": "status:lv",
                                                                "value": "159"
                                                            }
                                                        ]
                                                    },
                                                    {
                                                        "text": "Rank9  破碎狭缝",
                                                        "color": [
                                                            170,
                                                            85,
                                                            221,
                                                            1
                                                        ],
                                                        "action": [
                                                            {
                                                                "type": "changeFloor",
                                                                "floorId": "C90",
                                                                "loc": [
                                                                    6,
                                                                    11
                                                                ],
                                                                "direction": "up"
                                                            },
                                                            {
                                                                "type": "setValue",
                                                                "name": "status:hp",
                                                                "value": "800000"
                                                            },
                                                            {
                                                                "type": "setValue",
                                                                "name": "status:atk",
                                                                "value": "43400"
                                                            },
                                                            {
                                                                "type": "setValue",
                                                                "name": "status:def",
                                                                "value": "41800"
                                                            },
                                                            {
                                                                "type": "setValue",
                                                                "name": "status:mdef",
                                                                "value": "153000"
                                                            },
                                                            {
                                                                "type": "setValue",
                                                                "name": "item:yellowKey",
                                                                "value": "5"
                                                            },
                                                            {
                                                                "type": "setValue",
                                                                "name": "item:blueKey",
                                                                "value": "5"
                                                            },
                                                            {
                                                                "type": "setValue",
                                                                "name": "item:redKey",
                                                                "value": "1"
                                                            },
                                                            {
                                                                "type": "setValue",
                                                                "name": "item:pickaxe",
                                                                "value": "1"
                                                            },
                                                            {
                                                                "type": "setValue",
                                                                "name": "status:lv",
                                                                "value": "281"
                                                            }
                                                        ]
                                                    },
                                                    {
                                                        "text": "Rank10  彩虹城堡",
                                                        "color": [
                                                            238,
                                                            102,
                                                            204,
                                                            1
                                                        ],
                                                        "action": [
                                                            {
                                                                "type": "changeFloor",
                                                                "floorId": "D100",
                                                                "loc": [
                                                                    6,
                                                                    11
                                                                ],
                                                                "direction": "up"
                                                            },
                                                            {
                                                                "type": "setValue",
                                                                "name": "status:hp",
                                                                "value": "1500000"
                                                            },
                                                            {
                                                                "type": "setValue",
                                                                "name": "status:atk",
                                                                "value": "108000"
                                                            },
                                                            {
                                                                "type": "setValue",
                                                                "name": "status:def",
                                                                "value": "103000"
                                                            },
                                                            {
                                                                "type": "setValue",
                                                                "name": "status:mdef",
                                                                "value": "333000"
                                                            },
                                                            {
                                                                "type": "setValue",
                                                                "name": "item:yellowKey",
                                                                "value": "5"
                                                            },
                                                            {
                                                                "type": "setValue",
                                                                "name": "item:blueKey",
                                                                "value": "5"
                                                            },
                                                            {
                                                                "type": "setValue",
                                                                "name": "item:redKey",
                                                                "value": "2"
                                                            },
                                                            {
                                                                "type": "setValue",
                                                                "name": "item:pickaxe",
                                                                "value": "1"
                                                            },
                                                            {
                                                                "type": "setValue",
                                                                "name": "item:centerFly",
                                                                "value": "1"
                                                            },
                                                            {
                                                                "type": "setValue",
                                                                "name": "status:lv",
                                                                "value": "438"
                                                            }
                                                        ]
                                                    },
                                                    {
                                                        "text": "Rank11  黄金废都",
                                                        "color": [
                                                            221,
                                                            204,
                                                            119,
                                                            1
                                                        ],
                                                        "action": [
                                                            {
                                                                "type": "changeFloor",
                                                                "floorId": "E110",
                                                                "loc": [
                                                                    6,
                                                                    11
                                                                ],
                                                                "direction": "up"
                                                            },
                                                            {
                                                                "type": "setValue",
                                                                "name": "status:hp",
                                                                "value": "4000000"
                                                            },
                                                            {
                                                                "type": "setValue",
                                                                "name": "status:atk",
                                                                "value": "235000"
                                                            },
                                                            {
                                                                "type": "setValue",
                                                                "name": "status:def",
                                                                "value": "220000"
                                                            },
                                                            {
                                                                "type": "setValue",
                                                                "name": "status:mdef",
                                                                "value": "557000"
                                                            },
                                                            {
                                                                "type": "setValue",
                                                                "name": "item:yellowKey",
                                                                "value": "8"
                                                            },
                                                            {
                                                                "type": "setValue",
                                                                "name": "item:blueKey",
                                                                "value": "5"
                                                            },
                                                            {
                                                                "type": "setValue",
                                                                "name": "item:redKey",
                                                                "value": "2"
                                                            },
                                                            {
                                                                "type": "setValue",
                                                                "name": "item:pickaxe",
                                                                "value": "2"
                                                            },
                                                            {
                                                                "type": "setValue",
                                                                "name": "item:bomb",
                                                                "value": "1"
                                                            },
                                                            {
                                                                "type": "setValue",
                                                                "name": "item:centerFly",
                                                                "value": "1"
                                                            },
                                                            {
                                                                "type": "setValue",
                                                                "name": "status:lv",
                                                                "value": "572"
                                                            }
                                                        ]
                                                    },
                                                    {
                                                        "text": "Rank12  梦魇深渊",
                                                        "color": [
                                                            255,
                                                            204,
                                                            0,
                                                            1
                                                        ],
                                                        "action": [
                                                            {
                                                                "type": "changeFloor",
                                                                "floorId": "F120",
                                                                "loc": [
                                                                    6,
                                                                    11
                                                                ],
                                                                "direction": "up"
                                                            },
                                                            {
                                                                "type": "setValue",
                                                                "name": "status:hp",
                                                                "value": "10000000"
                                                            },
                                                            {
                                                                "type": "setValue",
                                                                "name": "status:atk",
                                                                "value": "548000"
                                                            },
                                                            {
                                                                "type": "setValue",
                                                                "name": "status:def",
                                                                "value": "505000"
                                                            },
                                                            {
                                                                "type": "setValue",
                                                                "name": "status:mdef",
                                                                "value": "1782000"
                                                            },
                                                            {
                                                                "type": "setValue",
                                                                "name": "item:yellowKey",
                                                                "value": "10"
                                                            },
                                                            {
                                                                "type": "setValue",
                                                                "name": "item:blueKey",
                                                                "value": "6"
                                                            },
                                                            {
                                                                "type": "setValue",
                                                                "name": "item:redKey",
                                                                "value": "2"
                                                            },
                                                            {
                                                                "type": "setValue",
                                                                "name": "item:pickaxe",
                                                                "value": "2"
                                                            },
                                                            {
                                                                "type": "setValue",
                                                                "name": "item:bomb",
                                                                "value": "2"
                                                            },
                                                            {
                                                                "type": "setValue",
                                                                "name": "item:centerFly",
                                                                "value": "2"
                                                            },
                                                            {
                                                                "type": "setValue",
                                                                "name": "status:lv",
                                                                "value": "717"
                                                            }
                                                        ]
                                                    },
                                                    {
                                                        "text": "Rank13  奇迹圣所",
                                                        "color": [
                                                            238,
                                                            136,
                                                            85,
                                                            1
                                                        ],
                                                        "action": [
                                                            {
                                                                "type": "changeFloor",
                                                                "floorId": "G130",
                                                                "loc": [
                                                                    6,
                                                                    11
                                                                ],
                                                                "direction": "up"
                                                            },
                                                            {
                                                                "type": "setValue",
                                                                "name": "status:hp",
                                                                "value": "25000000"
                                                            },
                                                            {
                                                                "type": "setValue",
                                                                "name": "status:atk",
                                                                "value": "1125000"
                                                            },
                                                            {
                                                                "type": "setValue",
                                                                "name": "status:def",
                                                                "value": "1055000"
                                                            },
                                                            {
                                                                "type": "setValue",
                                                                "name": "status:mdef",
                                                                "value": "4100000"
                                                            },
                                                            {
                                                                "type": "setValue",
                                                                "name": "item:yellowKey",
                                                                "value": "12"
                                                            },
                                                            {
                                                                "type": "setValue",
                                                                "name": "item:blueKey",
                                                                "value": "7"
                                                            },
                                                            {
                                                                "type": "setValue",
                                                                "name": "item:redKey",
                                                                "value": "3"
                                                            },
                                                            {
                                                                "type": "setValue",
                                                                "name": "item:pickaxe",
                                                                "value": "3"
                                                            },
                                                            {
                                                                "type": "setValue",
                                                                "name": "item:bomb",
                                                                "value": "2"
                                                            },
                                                            {
                                                                "type": "setValue",
                                                                "name": "item:centerFly",
                                                                "value": "2"
                                                            },
                                                            {
                                                                "type": "setValue",
                                                                "name": "status:lv",
                                                                "value": "820"
                                                            }
                                                        ]
                                                    },
                                                    {
                                                        "text": "Rank14  花开之处",
                                                        "color": [
                                                            238,
                                                            85,
                                                            34,
                                                            1
                                                        ],
                                                        "action": [
                                                            {
                                                                "type": "changeFloor",
                                                                "floorId": "Final1",
                                                                "loc": [
                                                                    6,
                                                                    11
                                                                ],
                                                                "direction": "up"
                                                            },
                                                            {
                                                                "type": "setValue",
                                                                "name": "status:hp",
                                                                "value": "64000000"
                                                            },
                                                            {
                                                                "type": "setValue",
                                                                "name": "status:atk",
                                                                "value": "2300000"
                                                            },
                                                            {
                                                                "type": "setValue",
                                                                "name": "status:def",
                                                                "value": "2300000"
                                                            },
                                                            {
                                                                "type": "setValue",
                                                                "name": "status:mdef",
                                                                "value": "9000000"
                                                            },
                                                            {
                                                                "type": "setValue",
                                                                "name": "item:yellowKey",
                                                                "value": "14"
                                                            },
                                                            {
                                                                "type": "setValue",
                                                                "name": "item:blueKey",
                                                                "value": "8"
                                                            },
                                                            {
                                                                "type": "setValue",
                                                                "name": "item:redKey",
                                                                "value": "3"
                                                            },
                                                            {
                                                                "type": "setValue",
                                                                "name": "item:pickaxe",
                                                                "value": "3"
                                                            },
                                                            {
                                                                "type": "setValue",
                                                                "name": "item:bomb",
                                                                "value": "2"
                                                            },
                                                            {
                                                                "type": "setValue",
                                                                "name": "item:centerFly",
                                                                "value": "2"
                                                            },
                                                            {
                                                                "type": "setValue",
                                                                "name": "status:lv",
                                                                "value": "931"
                                                            }
                                                        ]
                                                    }
                                                ]
                                            }
                                        ]
                                    },
                                    {
                                        "text": "离去…",
                                        "color": [
                                            221,
                                            85,
                                            255,
                                            1
                                        ],
                                        "action": []
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        "text": "更多作品",
                        "action": [
                            {
                                "type": "insert",
                                "loc": [
                                    6,
                                    5
                                ],
                                "floorId": "sample0"
                            }
                        ]
                    },
                    {
                        "text": "chaos必看！",
                        "color": [
                            255,
                            215,
                            0,
                            1
                        ],
                        "action": [
                            "最高难度下每一区都要尽量带更多的红绿吸破飞进入下区，比如本区就可以带1把红进入下区。",
                            "几乎每一区的boss都有加强，所以该咸的要咸。不要舍不得"
                        ]
                    }
                ]
            }
        ],
        "7,11": [
            "mod名称:花之模 mod作者:Nyarlathotep\n英文标识符:Flower_mod\n原塔名称:花之伤 原塔作者:千夜"
        ]
    },
    "changeFloor": {
        "6,0": {
            "floorId": "C12",
            "loc": [
                6,
                12
            ],
            "time": 0
        }
    },
    "afterBattle": {},
    "afterGetItem": {},
    "afterOpenDoor": {
        "6,9": [
            "系统提示：在红门里发现了\r[yellow]自动拾取开关\r！\n如果对地图特效不适，可以关掉它。",
            {
                "type": "setValue",
                "name": "item:I479",
                "value": "1"
            },
            "系统提示：可以与下方的仙子对话来降低难度！\n本塔是有楼层传送器的，但仅限在当区使用。"
        ]
    },
    "autoEvent": {},
    "cannotMove": {},
    "map": [
    [154,154,154,154,154,154,332,154,154,154,154,154,154],
    [154, 31,  0,204, 81, 32,  0, 30, 83, 21,  0, 21,154],
    [154,154, 81,154,154,154,213,154,154,154,203,154,154],
    [154,  0,202,  0,205, 27,  0, 21, 81, 29,  0, 31,154],
    [154, 34,  0, 28,154,154,203,154,154,  0, 28,  0,154],
    [154,154,205,154,154,  0, 32,  0,154,154,203,154,154],
    [154, 27,  0, 31, 81, 31,  0, 31, 81, 29,  0, 32,154],
    [154,154,202,154,154,154,201,154,154,154,202,154,154],
    [154, 32,203, 81,201, 28,201, 31,202, 21,201, 29,154],
    [154,154, 81,154,154,154, 83,154,154,154, 81,154,154],
    [154,  0,205,  0,154, 23,  0, 33,154,  0,203,  0,154],
    [154, 22,  0, 27,154,  0,  0,129,154, 27,  0, 31,154],
    [154,154,154,154,154,154,124,154,154,154,154,154,154]
],
    "bgmap": [

],
    "fgmap": [

],
    "bg2map": [],
    "fg2map": [],
    "beforeBattle": {},
    "cannotMoveIn": {},
    "canFlyFrom": true,
    "ratio": 1
}