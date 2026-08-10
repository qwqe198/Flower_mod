main.floors.G131=
{
    "floorId": "G131",
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
        "6,12": {
            "floorId": "G130",
            "loc": [
                6,
                0
            ]
        },
        "0,6": {
            "floorId": "G132",
            "loc": [
                12,
                6
            ]
        },
        "12,6": {
            "floorId": "G133",
            "loc": [
                0,
                6
            ]
        },
        "6,0": {
            "floorId": "G134",
            "loc": [
                6,
                12
            ]
        }
    },
    "afterBattle": {
        "6,10": [
            {
                "type": "setValue",
                "name": "flag:E774",
                "operator": "+=",
                "value": "1"
            },
            {
                "type": "setValue",
                "name": "flag:A774",
                "value": "2000000-flag:E774*20000"
            },
            {
                "type": "setValue",
                "name": "flag:D774",
                "value": "1000000-flag:E774*10000"
            },
            {
                "type": "setEnemy",
                "id": "E774",
                "name": "atk",
                "value": "flag:A774"
            },
            {
                "type": "setEnemy",
                "id": "E774",
                "name": "def",
                "value": "flag:D774"
            }
        ],
        "6,3": [
            {
                "type": "setValue",
                "name": "flag:E774",
                "operator": "+=",
                "value": "1"
            },
            {
                "type": "setValue",
                "name": "flag:A774",
                "value": "2000000-flag:E774*20000"
            },
            {
                "type": "setValue",
                "name": "flag:D774",
                "value": "1000000-flag:E774*10000"
            },
            {
                "type": "setEnemy",
                "id": "E774",
                "name": "atk",
                "value": "flag:A774"
            },
            {
                "type": "setEnemy",
                "id": "E774",
                "name": "def",
                "value": "flag:D774"
            }
        ]
    },
    "afterGetItem": {},
    "afterOpenDoor": {},
    "autoEvent": {},
    "cannotMove": {},
    "map": [
    [157,157,157,157,157,157,361,157,157,157,157,157,157],
    [157,450,157,448,  0,773, 60,779,  0,447,157,448,157],
    [157,776,157,157,157,157, 82,157,157,157,157,776,157],
    [157, 22,  0,157,  0,512,774,450,  0,157,  0,461,157],
    [157,  0,501, 82,775,157,453,157,452,772,458,  0,157],
    [157,777,157, 82,157,157,  0,157,157, 81,157,777,157],
    [359, 21,771,451,770,436,778, 21,775,772,452,  0,360],
    [157, 81,157,771,157,157,436,157,157, 82,157,775,157],
    [157,  0,157,  0, 58,157,772,157,448,  0,157,770,157],
    [157, 59,157, 22,  0, 81, 59,770,  0,512,157, 59,157],
    [157,771,157,772,157,157,774,157,157,772,157, 81,157],
    [157,452, 82,447,  0,770,  0,770,  0, 59,771,447,157],
    [157,157,157,157,157,157,358,157,157,157,157,157,157]
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