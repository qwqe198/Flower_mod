main.floors.C72=
{
    "floorId": "C72",
    "title": "千针松林",
    "name": "千针松林",
    "width": 13,
    "height": 13,
    "canFlyTo": true,
    "canUseQuickShop": true,
    "cannotViewMap": false,
    "images": [
        {
            "name": "13.jpg",
            "canvas": "bg",
            "x": 0,
            "y": 0
        }
    ],
    "item_ratio": 35,
    "defaultGround": "ground",
    "bgm": "map4EX.mp3",
    "firstArrive": [],
    "eachArrive": [],
    "parallelDo": "",
    "events": {},
    "changeFloor": {
        "6,12": {
            "floorId": "C71",
            "loc": [
                6,
                0
            ],
            "time": 0
        },
        "0,6": {
            "floorId": "C73",
            "loc": [
                12,
                6
            ],
            "time": 0
        },
        "6,0": {
            "floorId": "C75",
            "loc": [
                6,
                12
            ],
            "time": 0
        },
        "12,6": {
            "floorId": "C74",
            "loc": [
                0,
                6
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
                "floorId": "C76",
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
    [156,156,156,156,156,156,344,156,156,156,156,156,156],
    [156,501,156,451, 58,663,514, 81, 58,452,156,452,156],
    [156, 84,156,156,156,156,660,156,156,156,156,669,156],
    [156, 21,  0,156,  0, 27,661, 28,  0,156,  0, 58,156],
    [156,598, 30,659, 58,156,657,156,453,653,447,655,156],
    [156, 86,156, 81,156,156, 28,156,156,659,156, 81,156],
    [342, 59, 82,512,660, 22,671,436,655,  0, 59,  0,343],
    [156,658,156,653,156,156,453,156,156,652,156,655,156],
    [156, 81,156,  0, 34,156,654,156, 28,  0,156, 86,156],
    [156, 22,156,657,  0, 83,454, 83,  0, 58,156, 33,156],
    [156,655,156,656,156,156, 83,156,156, 82,156,657,156],
    [156,451,652, 47,654, 21,  0, 82,449,655,512,  0,156],
    [156,156,156,156,156,156,341,156,156,156,156,156,156]
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