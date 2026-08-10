main.floors.C31=
{
    "floorId": "C31",
    "title": "丛雨森林",
    "name": "丛雨森林",
    "width": 13,
    "height": 13,
    "canFlyTo": true,
    "canUseQuickShop": true,
    "cannotViewMap": false,
    "images": [
        {
            "name": "01.jpg",
            "canvas": "bg",
            "x": 0,
            "y": 0
        }
    ],
    "item_ratio": 6,
    "defaultGround": "ground",
    "bgm": "map2.mp3",
    "firstArrive": [
        {
            "type": "if",
            "condition": "(item:I474===1)",
            "true": [
                "检测到当前为低难度，获得2破",
                {
                    "type": "setValue",
                    "name": "item:pickaxe",
                    "operator": "+=",
                    "value": "2"
                }
            ]
        },
        {
            "type": "if",
            "condition": "(item:I475===1)",
            "true": [
                "检测到当前为低难度，获得1破",
                {
                    "type": "setValue",
                    "name": "item:pickaxe",
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
            "floorId": "C32",
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
    [147,147,147,147,147,147,340,147,147,147,147,147,147],
    [147,449,  0,316,314, 58,  0, 47, 81,451,372, 21,147],
    [147,147,313,147,147,147,376,147,147,147, 81,147,147],
    [147,  0,311,  0, 82,312,  0, 33, 81, 28,  0, 21,147],
    [147, 27,  0,448,147,147,313,147,147,  0, 34,  0,147],
    [147,147,372,147,147,  0, 21,  0,147,147,314,147,147],
    [147, 34,  0,313,311, 32,  0, 34,314,313, 81, 22,147],
    [147,147, 81,147,147,147,314,147,147,147,312,147,147],
    [147, 33,313, 29,312, 30,  0, 32,311,449,316, 33,147],
    [147,147, 81,147,147,147,311,147,147,147,451,147,147],
    [147,  0, 81,  0,147,  0, 21,  0,147,  0,317,  0,147],
    [147, 21,  0,450,147, 59,  0, 22,147, 33,  0,454,147],
    [147,147,147,147,147,147,147,147,147,147,147,147,147]
],
    "bgmap": [

],
    "fgmap": [

],
    "weather": [
        "rain",
        3
    ],
    "bg2map": [],
    "fg2map": [],
    "beforeBattle": {},
    "cannotMoveIn": {},
    "canFlyFrom": true
}