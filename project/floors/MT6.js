main.floors.MT6=
{
    "floorId": "MT6",
    "title": "水华之舞曲",
    "name": "水华之舞曲",
    "width": 13,
    "height": 13,
    "canFlyTo": true,
    "canUseQuickShop": true,
    "cannotViewMap": false,
    "images": [
        [
            0,
            0,
            "02.png",
            0
        ]
    ],
    "item_ratio": 50,
    "defaultGround": "ground",
    "bgm": "map3.mp3",
    "firstArrive": [],
    "eachArrive": [],
    "parallelDo": "",
    "events": {
        "11,10": [
            {
                "type": "choices",
                "choices": [
                    {
                        "text": "增加20%攻击",
                        "action": [
                            {
                                "type": "addValue",
                                "name": "status:atk",
                                "value": "status:atk*0.2"
                            },
                            {
                                "type": "hide",
                                "time": 500
                            }
                        ]
                    },
                    {
                        "text": "增加20%防御",
                        "action": [
                            {
                                "type": "addValue",
                                "name": "status:def",
                                "value": "status:def*0.2"
                            },
                            {
                                "type": "hide",
                                "time": 500
                            }
                        ]
                    },
                    {
                        "text": "增加20%生命",
                        "action": [
                            {
                                "type": "addValue",
                                "name": "status:hp",
                                "value": "status:hp*0.2"
                            },
                            {
                                "type": "hide",
                                "time": 500
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
        "9,11": [
            {
                "type": "choices",
                "choices": [
                    {
                        "text": "增加10%攻击",
                        "action": [
                            {
                                "type": "addValue",
                                "name": "status:atk",
                                "value": "status:atk*0.1"
                            },
                            {
                                "type": "hide",
                                "time": 500
                            }
                        ]
                    },
                    {
                        "text": "增加10%防御",
                        "action": [
                            {
                                "type": "addValue",
                                "name": "status:def",
                                "value": "status:def*0.1"
                            },
                            {
                                "type": "hide",
                                "time": 500
                            }
                        ]
                    },
                    {
                        "text": "增加10%生命",
                        "action": [
                            {
                                "type": "addValue",
                                "name": "status:hp",
                                "value": "status:hp*0.1"
                            },
                            {
                                "type": "hide",
                                "time": 500
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
        "0,10": [
            {
                "type": "choices",
                "choices": [
                    {
                        "text": "增加10%攻击",
                        "action": [
                            {
                                "type": "addValue",
                                "name": "status:atk",
                                "value": "status:atk*0.1"
                            },
                            {
                                "type": "hide",
                                "time": 500
                            }
                        ]
                    },
                    {
                        "text": "增加10%防御",
                        "action": [
                            {
                                "type": "addValue",
                                "name": "status:def",
                                "value": "status:def*0.1"
                            },
                            {
                                "type": "hide",
                                "time": 500
                            }
                        ]
                    },
                    {
                        "text": "增加10%生命",
                        "action": [
                            {
                                "type": "addValue",
                                "name": "status:hp",
                                "value": "status:hp*0.1"
                            },
                            {
                                "type": "hide",
                                "time": 500
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
        "2,6": [
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
                                "type": "hide",
                                "time": 500
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
                                "type": "hide",
                                "time": 500
                            }
                        ]
                    },
                    {
                        "text": "增加一半生命",
                        "action": [
                            {
                                "type": "addValue",
                                "name": "status:hp",
                                "value": "status:hp*0.5"
                            },
                            {
                                "type": "hide",
                                "time": 500
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
        "10,6": [
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
                                "type": "hide",
                                "time": 500
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
                                "type": "hide",
                                "time": 500
                            }
                        ]
                    },
                    {
                        "text": "增加一半生命",
                        "action": [
                            {
                                "type": "addValue",
                                "name": "status:hp",
                                "value": "status:hp*0.5"
                            },
                            {
                                "type": "hide",
                                "time": 500
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
        "9,9": [
            {
                "type": "choices",
                "choices": [
                    {
                        "text": "增加20%攻击",
                        "action": [
                            {
                                "type": "addValue",
                                "name": "status:atk",
                                "value": "status:atk*0.2"
                            },
                            {
                                "type": "hide",
                                "time": 500
                            }
                        ]
                    },
                    {
                        "text": "增加20%防御",
                        "action": [
                            {
                                "type": "addValue",
                                "name": "status:def",
                                "value": "status:def*0.2"
                            },
                            {
                                "type": "hide",
                                "time": 500
                            }
                        ]
                    },
                    {
                        "text": "增加20%生命",
                        "action": [
                            {
                                "type": "addValue",
                                "name": "status:hp",
                                "value": "status:hp*0.2"
                            },
                            {
                                "type": "hide",
                                "time": 500
                            }
                        ]
                    },
                    {
                        "text": "取消",
                        "action": []
                    }
                ]
            }
        ]
    },
    "changeFloor": {
        "6,12": {
            "floorId": "MT4",
            "loc": [
                12,
                3
            ],
            "time": 0
        },
        "2,5": {
            "floorId": "MT7",
            "loc": [
                3,
                0
            ],
            "direction": "down",
            "time": 0
        },
        "10,5": {
            "floorId": "MT7",
            "loc": [
                9,
                0
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
    [ 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17],
    [ 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17],
    [ 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17],
    [ 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17],
    [  0,  0, 17, 17, 17, 17, 17, 17, 17, 17, 17,  0,  0],
    [  0,405,336,405, 17, 17, 17, 17, 17,405,336,405,  0],
    [398,405,410,405,405, 47,405, 28,405,402,410,405,405],
    [ 28,  0,378,  0, 27,376,  0,414, 32,  0,378,  0, 34],
    [413,406,405,414,405, 86,400, 86,405,413,406, 32,  0],
    [  0,405,  0, 31,412, 27,  0, 28,412,409,405,414,405],
    [408,376, 31,  0,406,405, 86,405,406,376,405,409,  0],
    [ 32,405,412,405,405, 31,  0, 31,405,408,413,  0, 28],
    [  0,413, 27,  0,406,  0,333,  0,406, 28,398, 27,  0]
],
    "bgmap": [

],
    "fgmap": [

]
}