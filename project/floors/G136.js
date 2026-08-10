main.floors.G136=
{
    "floorId": "G136",
    "title": "奇迹圣所",
    "name": "奇迹圣所",
    "width": 13,
    "height": 13,
    "canFlyTo": true,
    "canUseQuickShop": true,
    "cannotViewMap": false,
    "images": [
        {
            "name": "02.jpg",
            "canvas": "bg",
            "x": 0,
            "y": 0
        }
    ],
    "ratio": 2000,
    "defaultGround": 50046,
    "bgm": "map9.mp3",
    "firstArrive": [],
    "eachArrive": [],
    "parallelDo": "",
    "events": {},
    "changeFloor": {
        "2,12": {
            "floorId": "G135",
            "loc": [
                10,
                0
            ]
        },
        "0,2": {
            "floorId": "G137",
            "loc": [
                12,
                2
            ]
        },
        "12,10": {
            "floorId": "G138",
            "loc": [
                0,
                10
            ]
        },
        "6,0": {
            "floorId": "G139",
            "loc": [
                6,
                12
            ]
        }
    },
    "afterBattle": {
        "11,10": [
            {
                "type": "setValue",
                "name": "flag:E820",
                "operator": "+=",
                "value": "1"
            },
            {
                "type": "setValue",
                "name": "flag:A820",
                "value": "2400000-flag:E820*72000"
            },
            {
                "type": "setEnemy",
                "id": "E820",
                "name": "atk",
                "value": "flag:A820"
            }
        ],
        "2,4": [
            {
                "type": "setValue",
                "name": "flag:E820",
                "operator": "+=",
                "value": "1"
            },
            {
                "type": "setValue",
                "name": "flag:A820",
                "value": "2400000-flag:E820*72000"
            },
            {
                "type": "setEnemy",
                "id": "E820",
                "name": "atk",
                "value": "flag:A820"
            }
        ],
        "6,5": [
            {
                "type": "setValue",
                "name": "flag:E820",
                "operator": "+=",
                "value": "1"
            },
            {
                "type": "setValue",
                "name": "flag:A820",
                "value": "2400000-flag:E820*72000"
            },
            {
                "type": "setEnemy",
                "id": "E820",
                "name": "atk",
                "value": "flag:A820"
            }
        ]
    },
    "afterGetItem": {},
    "afterOpenDoor": {},
    "autoEvent": {},
    "cannotMove": {},
    "map": [
    [157,157,157,157,157,157,361,157,157,157,157,157,157],
    [157,  0,454, 81,  0,157,825,  0,157,157,157,456,157],
    [359,784,  0,157, 50,785,  0,579,823,453, 83,500,157],
    [157,157, 82,157,157,157,157,157,157,157,781,157,157],
    [157,447,820,451,157,157,157,157,157, 82,  0,461,157],
    [157,157,157,  0,823,513,820,514,787,  0,157,157,157],
    [157,157,157,448,157,157,157,157,157,436,157,157,157],
    [157,157,157, 83,157,157,157,157,  0,823,157,157,157],
    [157,454,  0, 22,785,512, 81,157,513,  0,786,456,157],
    [157,785,157,819,157,157,786,157,157, 86,157, 86,157],
    [157, 21,157, 58,157,157,823,  0, 81,822,157,820,360],
    [157,784,  0,787,512, 82,  0,513,157,455,157, 60,157],
    [157,157,358,157,157,157,157,157,157,157,157,157,157]
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