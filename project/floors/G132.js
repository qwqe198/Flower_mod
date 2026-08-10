main.floors.G132=
{
    "floorId": "G132",
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
        "12,6": {
            "floorId": "G131",
            "loc": [
                0,
                6
            ]
        }
    },
    "afterBattle": {
        "6,1": [
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
        "4,7": [
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
        "8,6": [
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
        "3,1": [
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
        "1,7": [
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
        ]
    },
    "afterGetItem": {},
    "afterOpenDoor": {},
    "autoEvent": {},
    "cannotMove": {},
    "map": [
    [157,157,157,157,157,157,157,157,157,157,157,157,157],
    [157, 23, 59,782,157,779,774, 58,  0,157,452, 22,157],
    [157,157,157, 22, 81,453,157,  0,454,157,157,782,157],
    [157, 58,157, 82,157,157,157,157, 86, 82,  0, 59,157],
    [157, 59,157,451,157,452,  0,157,778,157,776,157,157],
    [157, 81,157,778,775,  0,447, 82, 81,157,  0,451,157],
    [157, 22,783, 21,157,780,157,157,774,779, 58,  0,360],
    [157,782,157,783,774,  0,776,775,447,157,  0,513,157],
    [157, 58,157,778,157, 58,  0,157,779,157,157,775,157],
    [157,500,157,512,157,157,157,157, 81,778, 82, 59,157],
    [157,157,157,780, 81,452,157,  0,436,157,773,157,157],
    [157,465,819, 81,157,436,777,457,  0,157, 21,450,157],
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