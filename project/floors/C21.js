main.floors.C21=
{
    "floorId": "C21",
    "title": "夜之秘境",
    "name": "夜之秘境",
    "width": 13,
    "height": 13,
    "canFlyTo": true,
    "canUseQuickShop": true,
    "cannotViewMap": false,
    "images": [],
    "item_ratio": 3,
    "defaultGround": "grass",
    "bgm": "map1.mp3",
    "firstArrive": [
        {
            "type": "if",
            "condition": "(item:I474===1)",
            "true": [
                "检测到当前为低难度，获得2把绿钥匙",
                {
                    "type": "setValue",
                    "name": "item:greenKey",
                    "operator": "+=",
                    "value": "2"
                }
            ]
        },
        {
            "type": "if",
            "condition": "(item:I475===1)",
            "true": [
                "检测到当前为低难度，获得1把绿钥匙",
                {
                    "type": "setValue",
                    "name": "item:greenKey",
                    "operator": "+=",
                    "value": "1"
                }
            ]
        }
    ],
    "eachArrive": [],
    "parallelDo": "",
    "events": {},
    "changeFloor": {
        "6,0": {
            "floorId": "C22",
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
    [155,155,155,155,155,155,357,155,155,155,155,155,155],
    [155, 33,  0,235, 82, 33,  0, 37, 81, 29,  0, 21,155],
    [155,155,245,155,155,155,251,155,155,155,246,155,155],
    [155,  0,234,  0, 81, 27,  0, 29, 81, 27,  0, 21,155],
    [155, 32,  0, 27,155,155,245,155,155,  0, 29,  0,155],
    [155,155,235,155,155,  0, 21,  0,155,155,246,155,155],
    [155, 28,  0, 81,247, 32,  0, 34,249, 81,  0, 33,155],
    [155,155,247,155,155,155, 81,155,155,155,235,155,155],
    [155, 34,234, 29,249, 27,247, 32,234, 21,249, 29,155],
    [155,155, 81,155,155,155,234,155,155,155, 32,155,155],
    [155,  0,245,  0,155,  0, 21,  0,155,  0,245,  0,155],
    [155, 22,  0, 28,155,450,  0,454,155, 21,  0, 34,155],
    [155,155,155,155,155,155,155,155,155,155,155,155,155]
],
    "bgmap": [

],
    "fgmap": [

],
    "bg2map": [],
    "fg2map": [],
    "beforeBattle": {},
    "cannotMoveIn": {},
    "canFlyFrom": true
}