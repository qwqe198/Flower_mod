main.floors.C71=
{
    "floorId": "C71",
    "title": "千针松林",
    "name": "千针松林",
    "width": 13,
    "height": 13,
    "canFlyTo": true,
    "canUseQuickShop": true,
    "cannotViewMap": false,
    "images": [
        {
            "name": "13.jpg",
            "canvas": "bg",
            "x": 0,
            "y": 0
        }
    ],
    "item_ratio": 35,
    "defaultGround": "ground",
    "bgm": "map4EX.mp3",
    "firstArrive": [
        "提示：\n1.警惕突袭属性的敌人\n2.本区boss伤害很高（约250~260w）\n3.本区有光环怪",
        {
            "type": "if",
            "condition": "(item:I471===1)",
            "true": [
                "检测到当前为低难度，获得2红和10000护盾",
                {
                    "type": "setValue",
                    "name": "item:redKey",
                    "operator": "+=",
                    "value": "2"
                },
                {
                    "type": "setValue",
                    "name": "status:mdef",
                    "operator": "+=",
                    "value": "10000"
                }
            ]
        },
        {
            "type": "if",
            "condition": "(item:I475===1)",
            "true": [
                "检测到当前为低难度，获得1红和5000护盾",
                {
                    "type": "setValue",
                    "name": "item:redKey",
                    "operator": "+=",
                    "value": "1"
                },
                {
                    "type": "setValue",
                    "name": "status:mdef",
                    "operator": "+=",
                    "value": "5000"
                }
            ]
        }
    ],
    "eachArrive": [],
    "parallelDo": "",
    "events": {},
    "changeFloor": {
        "6,0": {
            "floorId": "C72",
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
    [156,156,156,156,156,156,344,156,156,156,156,156,156],
    [156,447,  0, 86,655, 59,  0,452,656,450,  0, 22,156],
    [156,156,657,156,156,156, 82,156,156,156,655,156,156],
    [156,  0,655,  0,656, 81,453,653, 81,448,  0, 21,156],
    [156, 21,  0, 22,156,156, 81,156,156,  0, 29,  0,156],
    [156,156,651,156,156,  0, 30,  0,156,156,656,156,156],
    [156,451,  0, 81, 81,448,  0, 58,652,  0,654, 34,156],
    [156,156,652,156,156,156,656,156,156,156, 21,156,156],
    [156,448,653, 58,651, 21,  0, 28,652,450,654,453,156],
    [156,156, 82,156,156,156,651,156,156,156, 81,156,156],
    [156,  0,669,  0,156,436,  0,447,156,  0,653,  0,156],
    [156,514,  0,454,156,  0,  0,  0,156, 59,  0, 58,156],
    [156,156,156,156,156,156,156,156,156,156,156,156,156]
],
    "bgmap": [

],
    "fgmap": [

],
    "beforeBattle": {},
    "cannotMoveIn": {},
    "canFlyFrom": true
}