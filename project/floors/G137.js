main.floors.G137=
{
    "floorId": "G137",
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
        "12,2": {
            "floorId": "G136",
            "loc": [
                0,
                2
            ]
        }
    },
    "afterBattle": {
        "8,7": [
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
        "8,2": [
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
        "11,5": [
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
    [157,157,157,157,157,157,157,157,157,157,157,157,157],
    [157,584,  0, 83,157,157,157,157,157, 58,157,436,157],
    [157, 82,821,513,157,157, 47,157,820,  0,785,  0,360],
    [157,825, 82,500,825,786,  0,818,447,157,  0,450,157],
    [157,157,157, 82,157,157,822,157,157,157,787,157,157],
    [157,841,157,457,157,157,456,157,157, 83,461,820,157],
    [157,842,157,818,157,157,157,157,462, 82,157, 82,157],
    [157,157,157,  0,513,787,480,157,820,157,157,436,157],
    [157, 47, 81, 60,  0,157,  0,781,455,157,157, 82,157],
    [157,793,157,157, 81,157,157,157, 81,157,157,436,157],
    [157,822,157,157, 59, 81,157,157, 59,157,157, 82,157],
    [157, 56,157,157,157, 59, 81, 59, 81, 59, 82,436,157],
    [157,157,157,157,157,157,157,157,157,157,157,157,157]
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