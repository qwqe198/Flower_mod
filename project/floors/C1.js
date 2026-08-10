main.floors.C1=
{
    "floorId": "C1",
    "title": "树海",
    "name": "树海",
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
    "item_ratio": 1,
    "defaultGround": "ground",
    "bgm": "map1.mp3",
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
            "time": 500,
            "async": true
        },
        {
            "type": "waitAsync"
        }
    ],
    "eachArrive": [],
    "parallelDo": "",
    "events": {
        "5,7": [
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
                    {
                        "text": "守护天使",
                        "action": [
                            {
                                "type": "choices",
                                "text": "需要守护天使吗？\n她可以为你提供30%的全属性加成！\n将与正常难度分开计入成绩。",
                                "choices": [
                                    {
                                        "text": "是",
                                        "action": [
                                            {
                                                "type": "addValue",
                                                "name": "item:I474",
                                                "value": "1"
                                            }
                                        ]
                                    },
                                    {
                                        "text": "否",
                                        "action": []
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        "text": "我按错啦",
                        "action": []
                    }
                ]
            }
        ],
        "7,5": [
            {
                "type": "openShop",
                "id": "r1"
            }
        ]
    },
    "changeFloor": {
        "6,1": {
            "floorId": "C2",
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
    [140,140,140,140,140,140,140,140,140,140,140,140,140],
    [140, 34,  0,206,140,140,344,140,140, 82, 81, 47,140],
    [140,140,140, 22,140, 31,  0, 29,140, 27,140,140,140],
    [140,140, 27,204,203,  0, 28,  0,202,217, 28,140,140],
    [140,140,140, 86,140,140,202,140,140,203,140,140,140],
    [140,20011,  0,449,140, 33,  0,133,140, 32,  0,20221,140],
    [140,448,217,  0,201,  0,  0,  0, 81,  0,204,451,140],
    [140,140, 27,201,140,124,  0, 21,140, 28,  0,140,140],
    [140,140,140, 81,140,140,201,140,140,217,140,140,140],
    [140,140, 31,203,205, 32,  0, 31, 86,202, 27,140,140],
    [140,140,140, 28,140,  0, 82,  0,140, 29,140,140,140],
    [140, 31, 32, 81,140,140, 58,140,140,205,  0,448,140],
    [140,140,140,140,140,140,140,140,140,140,140,140,140]
],
    "bgmap": [

],
    "fgmap": [

]
}