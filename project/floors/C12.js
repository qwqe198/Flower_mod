main.floors.C12=
{
    "floorId": "C12",
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
    "firstArrive": [],
    "eachArrive": [],
    "parallelDo": "",
    "events": {},
    "changeFloor": {
        "6,12": {
            "floorId": "C11",
            "loc": [
                6,
                0
            ],
            "time": 0
        },
        "0,6": {
            "floorId": "C13",
            "loc": [
                12,
                6
            ],
            "time": 0
        },
        "12,6": {
            "floorId": "C14",
            "loc": [
                0,
                6
            ],
            "time": 0
        },
        "6,0": {
            "floorId": "C15",
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
                "floorId": "C21",
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
    "autoEvent": {
        "6,6": {
            "0": null,
            "1": null,
            "2": null
        }
    },
    "cannotMove": {},
    "map": [
    [154,154,154,154,154,154,332,154,154,154,154,154,154],
    [154, 21,154, 28,  0,211, 31,211,  0, 32,154, 27,154],
    [154,219,154,154,154,154,207,154,154,154,154,218,154],
    [154, 31,  0,154,  0, 29,213, 21,  0,154,  0, 28,154],
    [154,  0, 32,214, 31,154, 83,154, 27,212, 29,  0,154],
    [154,219,154, 82,154,154,450,154,154, 81,154,218,154],
    [330,  0, 27,  0,212, 32,208, 33, 81,  0, 31,  0,331],
    [154,206,154,217,154,154, 34,154,154,213,154,206,154],
    [154, 86,154,  0, 28,154,211,154, 27,  0,154, 81,154],
    [154, 27,154, 21,  0,210, 30,210,  0, 32,154, 28,154],
    [154,209,154,213,154,154, 82,154,154, 81,154,209,154],
    [154, 28,204, 31,  0,204,  0,204,  0, 31,204, 27,154],
    [154,154,154,154,154,154,329,154,154,154,154,154,154]
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