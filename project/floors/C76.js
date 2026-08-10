main.floors.C76=
{
    "floorId": "C76",
    "title": "格陵兰岛",
    "name": "格陵兰岛",
    "width": 13,
    "height": 13,
    "canFlyTo": true,
    "canUseQuickShop": true,
    "cannotViewMap": false,
    "images": [
        {
            "name": "12.jpg",
            "canvas": "bg",
            "x": 0,
            "y": 0
        }
    ],
    "defaultGround": "ground",
    "bgm": "map4EX.mp3",
    "firstArrive": [
        {
            "type": "setEnemy",
            "id": "E671",
            "name": "atk",
            "value": "42000"
        },
        "提示：索命森林龙攻击已降低。",
        {
            "type": "if",
            "condition": "(item:I471===1)",
            "true": [
                "检测到当前为低难度，获得2红",
                {
                    "type": "setValue",
                    "name": "item:redKey",
                    "operator": "+=",
                    "value": "2"
                }
            ]
        },
        {
            "type": "if",
            "condition": "(item:I475===1)",
            "true": [
                "检测到当前为低难度，获得1红",
                {
                    "type": "setValue",
                    "name": "item:redKey",
                    "operator": "+=",
                    "value": "1"
                }
            ]
        }
    ],
    "eachArrive": [],
    "parallelDo": "",
    "events": {},
    "changeFloor": {
        "6,0": {
            "floorId": "C77",
            "loc": [
                6,
                12
            ],
            "time": 0
        }
    },
    "afterBattle": {},
    "afterGetItem": {},
    "afterOpenDoor": {},
    "autoEvent": {},
    "cannotMove": {},
    "map": [
    [149,149,149,149,149,149,336,149,149,149,149,149,149],
    [149, 59,  0, 81,667, 81, 58,451,673,449,670,513,149],
    [149,149,668,149,149,149, 83,149,149,149,  0,149,149],
    [149,436,  0,447,669,668,  0,512, 82,436,666,512,149],
    [149,  0,666,  0,149,149,667,149,149,  0, 22,  0,149],
    [149,149,668,149,149,  0,669,  0,149,149,667,149,149],
    [149, 58,  0,453,666, 59,  0, 33,666, 81,669, 58,149],
    [149,149,668,149,149,149, 82,149,149,149,447,149,149],
    [149, 34,  0,447,666,436,  0, 58,670,448,669, 29,149],
    [149,149,672,149,149,149,669,149,149,149,671,149,149],
    [149, 81, 81,451,149, 22,  0, 22,149,  0, 82,  0,149],
    [149, 22, 81,  0,149,  0,  0,  0,149, 21,  0, 21,149],
    [149,149,149,149,149,149,149,149,149,149,149,149,149]
],
    "bgmap": [

],
    "fgmap": [

],
    "ratio": 50,
    "beforeBattle": {},
    "cannotMoveIn": {},
    "canFlyFrom": true,
    "item_ratio": 50
}