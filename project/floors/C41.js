main.floors.C41=
{
    "floorId": "C41",
    "title": "灵药雪原",
    "name": "灵药雪原",
    "width": 13,
    "height": 13,
    "canFlyTo": true,
    "canUseQuickShop": true,
    "cannotViewMap": false,
    "images": [
        {
            "name": "05.jpg",
            "canvas": "bg",
            "x": 0,
            "y": 0
        }
    ],
    "item_ratio": 10,
    "defaultGround": "ground",
    "bgm": "map2.mp3",
    "firstArrive": [
        {
            "type": "if",
            "condition": "(item:I474===1)",
            "true": [
                "检测到当前为低难度，获得2黄1蓝1红和圣水",
                {
                    "type": "setValue",
                    "name": "item:yellowKey",
                    "operator": "+=",
                    "value": "2"
                },
                {
                    "type": "setValue",
                    "name": "item:blueKey",
                    "operator": "+=",
                    "value": "1"
                },
                {
                    "type": "setValue",
                    "name": "item:I839",
                    "operator": "+=",
                    "value": "1"
                },
                {
                    "type": "setValue",
                    "name": "item:I838",
                    "operator": "+=",
                    "value": "1"
                },
                "低难度提示：尽量染出大绿血瓶"
            ]
        },
        {
            "type": "if",
            "condition": "(item:I475===1)",
            "true": [
                "检测到当前为低难度，获得2黄1吸和灵水",
                {
                    "type": "setValue",
                    "name": "item:yellowKey",
                    "operator": "+=",
                    "value": "2"
                },
                {
                    "type": "setValue",
                    "name": "item:I840",
                    "operator": "+=",
                    "value": "1"
                },
                {
                    "type": "setValue",
                    "name": "item:I838",
                    "operator": "+=",
                    "value": "1"
                },
                "低难度提示：尽量染出大绿血瓶"
            ]
        }
    ],
    "eachArrive": [],
    "parallelDo": "",
    "events": {},
    "changeFloor": {
        "6,0": {
            "floorId": "C42",
            "loc": [
                6,
                12
            ],
            "time": 0
        }
    },
    "afterBattle": {},
    "afterGetItem": {},
    "afterOpenDoor": {},
    "autoEvent": {},
    "cannotMove": {},
    "map": [
    [141,141,141,141,141,141,357,141,141,141,141,141,141],
    [141,447,  0,620,621, 58,  0,448,622,447,621, 22,141],
    [141,141,622,141,141,141, 82,141,141,141,620,141,141],
    [141,  0,560,  0,620,621,  0, 32, 81,447,  0, 21,141],
    [141,448,  0,453,141,141,561,141,141,  0, 29,  0,141],
    [141,141, 81,141,141,  0, 21,  0,141,141,560,141,141],
    [141, 34,  0,559,561,451,621, 34,560, 81,561, 22,141],
    [141,141,561,141,141,141, 81,141,141,141, 34,141,141],
    [141, 33,559, 29,560,447,  0, 59,559,448,561, 34,141],
    [141,141, 82,141,141,141,559,141,141,141, 32,141,141],
    [141, 81, 58, 81,141, 21,454, 21,141,  0, 81,  0,141],
    [141, 33, 82, 33,141,481,  0,838,141, 33,  0,457,141],
    [141,141,141,141,141,141,141,141,141,141,141,141,141]
],
    "bgmap": [

],
    "fgmap": [

],
    "weather": [
        "snow",
        3
    ],
    "bg2map": [],
    "fg2map": [],
    "beforeBattle": {},
    "cannotMoveIn": {},
    "canFlyFrom": true
}