main.floors.K2=
{
    "floorId": "K2",
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
    "firstArrive": [],
    "eachArrive": [],
    "parallelDo": "",
    "events": {},
    "changeFloor": {
        "6,1": {
            "floorId": "K1",
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
                            "当前结局计分：剩余生命/100万！",
                            {
                                "type": "setValue",
                                "name": "status:hp",
                                "value": "status:hp/1000000"
                            },
                            {
                                "type": "if",
                                "condition": "item:I476==1",
                                "true": [
                                    {
                                        "type": "win",
                                        "reason": "Rank 9 - Light"
                                    }
                                ],
                                "false": [
                                    {
                                        "type": "if",
                                        "condition": "item:I474==1",
                                        "true": [
                                            {
                                                "type": "win",
                                                "reason": "Rank 9 - Angel"
                                            }
                                        ],
                                        "false": [
                                            {
                                                "type": "win",
                                                "reason": "Rank 9 - God"
                                            }
                                        ]
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
                                "floorId": "L1",
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
    [148,148,148,148,148,148,148,148,148,148,148,148,148],
    [148, 33, 81, 81,148,148,365,148,148,571, 28, 23,148],
    [148,148,148,574,148, 21,  0, 22,148, 32,148,148,148],
    [ 34,148, 27, 81,570,  0, 31,  0, 82, 81, 31,148, 34],
    [148,148,148,572,148,148,571,148,148,573,148,148,148],
    [148,30282, 31, 81,148, 31,  0,30417,148, 21,  0,30291,148],
    [148, 34,573, 27,570,  0,576,  0,571, 81,572, 31,148],
    [148,148, 32,575,148, 29,  0, 28,148, 27,  0,148,148],
    [148,148,148, 86,148,148,572,148,148,574,148,148,148],
    [148,148, 33,  0, 81,575,573, 31, 81, 82, 34,148,148],
    [148,148,148, 81,148,  0, 82,  0,148, 29,148,148,148],
    [148,516, 83, 82,148,148, 28,148,148,574, 82, 58,148],
    [148,148,148,148,148,148,148,148,148,148,148,148,148]
],
    "bgmap": [

],
    "fgmap": [

]
}