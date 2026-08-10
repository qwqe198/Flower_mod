main.floors.G138=
{
    "floorId": "G138",
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
        "0,10": {
            "floorId": "G136",
            "loc": [
                12,
                10
            ]
        }
    },
    "afterBattle": {
        "2,7": [
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
        "3,11": [
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
        "7,9": [
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
    [157,157,513,157,157,157,461,  0,157,157,157,459,157],
    [157,454,  0,781,500,818,  0,480,822,513,790,  0,157],
    [157,821,157,157, 81,157,157,821,157,157,157,822,157],
    [157,452,  0,825,436,157,157, 58,157,157,157,452,157],
    [157,157,822,157,821, 22, 81,825,157,436, 81, 82,157],
    [157,157, 60,157,512,157,157,457,157,825,157,157,157],
    [157,157,820,157,157,157,157,822,781,512,157,157,157],
    [157,436,  0,784,451,157,157,500,157,157,157,157,157],
    [157, 81,157,157,157,157,157,820,157,157,157,157,157],
    [359,  0, 21,157,157,157,  0,454,157, 81, 59, 83,157],
    [157,450,  0,820,455,822,818,  0, 81, 59,157,501,157],
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