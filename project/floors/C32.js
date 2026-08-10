main.floors.C32=
{
    "floorId": "C32",
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
    "firstArrive": [],
    "eachArrive": [],
    "parallelDo": "",
    "events": {},
    "changeFloor": {
        "6,12": {
            "floorId": "C31",
            "loc": [
                6,
                0
            ],
            "time": 0
        },
        "0,6": {
            "floorId": "C33",
            "loc": [
                12,
                6
            ],
            "time": 0
        },
        "12,6": {
            "floorId": "C34",
            "loc": [
                0,
                6
            ],
            "time": 0
        },
        "6,0": {
            "floorId": "C35",
            "loc": [
                6,
                12
            ],
            "time": 0
        }
    },
    "afterBattle": {
        "6,6": [
            {
                "type": "function",
                "function": "function(){\ncore.setFlag(\"__visited__\", {});\n}"
            },
            {
                "type": "changeFloor",
                "floorId": "C41",
                "loc": [
                    6,
                    11
                ],
                "direction": "up",
                "time": 500
            }
        ]
    },
    "afterGetItem": {},
    "afterOpenDoor": {},
    "autoEvent": {},
    "cannotMove": {},
    "map": [
    [147,147,147,147,147,147,340,147,147,147,147,147,147],
    [147, 42,147,447,  0,370,450,369,  0,448,147, 59,147],
    [147,325,147,147,147,147,325,147,147,147,147,318,147],
    [147,449,  0,147,  0, 27,317, 34,  0,147,  0,449,147],
    [147,  0, 34,369, 33,147, 81,147, 28,321, 27,  0,147],
    [147,318,147, 81,147,147, 33,147,147, 82,147,325,147],
    [338, 27, 81, 28, 82, 58,430, 34,316, 31,317,  0,339],
    [147,314,147, 82,147,147,311,147,147,376,147, 82,147],
    [147,371,147,  0, 32,147,312,147,448,  0,147, 86,147],
    [147, 21,147, 34,  0,320,436,320,  0, 34,147, 29,147],
    [147,376,147,313,147,147,147,147,147,372,147,371,147],
    [147,447,316, 28,  0,314,  0,313,  0, 33,372, 28,147],
    [147,147,147,147,147,147,337,147,147,147,147,147,147]
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