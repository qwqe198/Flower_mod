main.floors.G134=
{
    "floorId": "G134",
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
            "floorId": "G131",
            "loc": [
                6,
                0
            ]
        },
        "6,0": {
            "floorId": "G135",
            "loc": [
                6,
                12
            ]
        }
    },
    "afterBattle": {
        "5,10": [
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
        "10,9": [
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
        "2,1": [
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
        "11,2": [
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
        "7,7": [
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
    [157,157,157,157,157,157,361,157,157,157,157,157,157],
    [157,454,782,512,157, 58,785, 60,157,452,157, 59,157],
    [157,157,819,157,157,157,453,157,157,783,157,782,157],
    [157, 21,  0, 59,783,512,777,457,779,451,780, 22,157],
    [157,157, 82,157,157,157,157,780,157,157,157,819,157],
    [157, 83,480,157,448,  0,157,451,157,460,157,448,157],
    [157,436,157,157,  0, 22,773,  0, 82, 86,157,775,157],
    [157, 82,436, 82,776,157,157,782,157,784,157,  0,157],
    [157,157, 82,157,  0, 47,157, 50,157,481, 81,436,157],
    [157, 81, 59,157,157,157,157,778,157,157,774,157,157],
    [157, 59,157, 59, 81,774,  0,452,157,  0,784,515,157],
    [157, 81, 59, 81,157,  0,513,  0, 83, 83,455,  0,157],
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