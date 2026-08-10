main.floors.G133=
{
    "floorId": "G133",
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
        "0,6": {
            "floorId": "G131",
            "loc": [
                12,
                6
            ]
        }
    },
    "afterBattle": {
        "7,10": [
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
        "5,4": [
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
        "10,1": [
            {
                "type": "setValue",
                "name": "flag:E782",
                "operator": "+=",
                "value": "1"
            },
            {
                "type": "setValue",
                "name": "flag:H782",
                "value": "6250000-flag:E782*250000"
            },
            {
                "type": "setEnemy",
                "id": "E782",
                "name": "hp",
                "value": "flag:H782"
            }
        ],
        "10,3": [
            {
                "type": "setValue",
                "name": "flag:E782",
                "operator": "+=",
                "value": "1"
            },
            {
                "type": "setValue",
                "name": "flag:H782",
                "value": "6250000-flag:E782*250000"
            },
            {
                "type": "setEnemy",
                "id": "E782",
                "name": "hp",
                "value": "flag:H782"
            }
        ]
    },
    "afterGetItem": {},
    "afterOpenDoor": {},
    "autoEvent": {},
    "cannotMove": {},
    "map": [
    [157,157,157,157,157,157,157,157,157,157,157,157,157],
    [157,450,819, 81, 58, 82,451,772, 81, 30,782,448,157],
    [157,157,157,157,771,157,157, 60,157,157,157,779,157],
    [157,775, 82,436,  0,779,157,778,157,452,782, 21,157],
    [157, 81,157,157,157,774,779, 58, 82,  0,157,772,157],
    [157,447,783,454,157,157,157,  0,157,451,157,512,157],
    [359,  0,157,  0,157,779,775,436,157,157,157,772,157],
    [157,450,157,453,157,448,157, 81,157,778,452,  0,157],
    [157, 82,157,775,777,457,157,  0,777,458,157,775,157],
    [157,451,157, 60,157,157,157,453,157,779,451,  0,157],
    [157, 83,772,  0,157,  0, 82,774,157,157, 82,157,157],
    [157,452,157,448,778,513,157,512,775,436,819, 59,157],
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