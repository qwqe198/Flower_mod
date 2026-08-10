main.floors.G130=
{
    "floorId": "G130",
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
    "firstArrive": [
        "本区出现的所有超强怪物均不在经验考虑范围内，随便炸"
    ],
    "eachArrive": [],
    "parallelDo": "",
    "events": {},
    "changeFloor": {
        "6,0": {
            "floorId": "G131",
            "loc": [
                6,
                12
            ]
        }
    },
    "afterBattle": {
        "10,3": [
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
        "8,1": [
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
        "2,5": [
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
    [157,512,770,775,448,  0,772, 59,774, 21,773, 22,157],
    [157,157, 83,157,157,157, 82,157,157,157, 86,157,157],
    [157,  0,770,  0,772, 81, 81,448, 81,  0,774,  0,157],
    [157,447,  0, 58,157,157, 82,157,157,450,  0,447,157],
    [157,157,774,157,157, 59,  0, 21,157,157,771,157,157],
    [157, 59,  0,775,772,  0,770,  0,771, 81,775, 22,157],
    [157,157, 82,157,157,157,771,157,157,157, 81,157,157],
    [157, 58,  0,436,817,447,772, 59,817,448,  0,436,157],
    [157,157,776,157,157,157,770,157,157,157,774,157,157],
    [157,  0,448,  0,157,  0,514,  0,157,  0, 21,  0,157],
    [157,451,  0,453,157, 47,  0,480,157, 59,  0,452,157],
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