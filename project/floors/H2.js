main.floors.H2=
{
    "floorId": "H2",
    "title": "深渊",
    "name": "深渊",
    "width": 13,
    "height": 13,
    "canFlyTo": true,
    "canUseQuickShop": true,
    "cannotViewMap": false,
    "images": [
        [
            0,
            0,
            "06.jpg",
            0
        ]
    ],
    "item_ratio": 100000,
    "defaultGround": "ground",
    "bgm": "map2.mp3",
    "firstArrive": [],
    "eachArrive": [],
    "parallelDo": "",
    "events": {},
    "changeFloor": {
        "6,1": {
            "floorId": "H1",
            "loc": [
                6,
                1
            ],
            "direction": "down",
            "time": 0
        }
    },
    "afterBattle": {
        "6,6": [
            {
                "type": "autoSave"
            },
            {
                "type": "choices",
                "text": "自动存档已完成！\n要记录现在的成绩吗？\n记录成绩之后，可以读取自动存档并选择继续游戏。",
                "choices": [
                    {
                        "text": "记录成绩",
                        "action": [
                            "当前结局计分：剩余生命/1000！",
                            {
                                "type": "setValue",
                                "name": "status:hp",
                                "value": "status:hp/1000"
                            },
                            {
                                "type": "if",
                                "condition": "item:I474==1",
                                "true": [
                                    {
                                        "type": "win",
                                        "reason": "Rank 6 - Angel"
                                    }
                                ],
                                "false": [
                                    {
                                        "type": "win",
                                        "reason": "Rank 6 - God"
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        "text": "继续游戏",
                        "action": [
                            {
                                "type": "changeFloor",
                                "floorId": "I1",
                                "loc": [
                                    6,
                                    6
                                ],
                                "direction": "down",
                                "time": 500
                            }
                        ]
                    }
                ]
            }
        ]
    },
    "afterGetItem": {},
    "afterOpenDoor": {},
    "autoEvent": {},
    "cannotMove": {},
    "map": [
    [144,144,144,144,144,144,144,144,144,144,144,144,144],
    [144, 33,321,412,144,144,340,144,144, 82, 82, 59,144],
    [144,144,144, 34,144,513,  0, 47,144, 21,144,144,144],
    [144,144, 32,316,317,  0, 29,  0,318,  0, 27,144,144],
    [144,144,144, 81,144,144,320,144,144,320,144,144,144],
    [144,50272,  0, 27,144, 29,  0,30246,144, 31,  0,50264,144],
    [144, 21,377,  0,377,  0,323,  0, 81,  0,378, 31,144],
    [144,144, 28,320,144, 27,  0, 28,144, 28,  0,144,144],
    [144,144,144, 86,144,144,378,144,144,322,144,144,144],
    [144,144, 34,378,412, 31,  0, 30, 82,377, 27,144,144],
    [144,144,144, 83,144,  0, 82,  0,144, 28,144,144,144],
    [144,515,514,322,144,144, 47,144,144,321, 81, 30,144],
    [144,144,144,144,144,144,144,144,144,144,144,144,144]
],
    "bgmap": [

],
    "fgmap": [

]
}