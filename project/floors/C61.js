main.floors.C61=
{
    "floorId": "C61",
    "title": "银灰囚牢",
    "name": "银灰囚牢",
    "width": 13,
    "height": 13,
    "canFlyTo": true,
    "canUseQuickShop": true,
    "cannotViewMap": false,
    "images": [
        {
            "name": "04.jpg",
            "canvas": "bg",
            "x": 0,
            "y": 0
        }
    ],
    "item_ratio": 20,
    "defaultGround": "ground",
    "bgm": "map3.mp3",
    "firstArrive": [
        "提示：chaos难度需要带至少4把绿钥匙进入10区（彩虹城堡），而在此之前可能存在的绿钥匙一共只有这区4把和下区2把，请注意。",
        {
            "type": "if",
            "condition": "(item:I471===1)",
            "true": [
                "检测到当前为低难度，获得1红1绿",
                {
                    "type": "setValue",
                    "name": "item:redKey",
                    "operator": "+=",
                    "value": "1"
                },
                {
                    "type": "setValue",
                    "name": "item:greenKey",
                    "operator": "+=",
                    "value": "1"
                }
            ]
        },
        {
            "type": "if",
            "condition": "(item:I475===1)",
            "true": [
                "检测到当前为低难度，获得1绿",
                {
                    "type": "setValue",
                    "name": "item:greenKey",
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
            "floorId": "C62",
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
    [ 20, 20, 20, 20, 20, 20,336, 20, 20, 20, 20, 20, 20],
    [ 20, 32,  0,303,305, 58,  0,447,305,450,306, 22, 20],
    [ 20, 20,304, 20, 20, 20, 82, 20, 20, 20,304, 20, 20],
    [ 20,  0,301,  0,302, 81,  0,447, 81,448,  0, 21, 20],
    [ 20,448,  0, 22, 20, 20,301, 20, 20,  0, 29,  0, 20],
    [ 20, 20,303, 20, 20,  0, 22,  0, 20, 20,303, 20, 20],
    [ 20, 29,  0,304,301,447,303, 34, 81,302,301, 22, 20],
    [ 20, 20, 81, 20, 20, 20,304, 20, 20, 20,447, 20, 20],
    [ 20,457,302, 34, 82,451,  0, 59,301, 28,303,453, 20],
    [ 20, 20, 82, 20, 20, 20,302, 20, 20, 20, 32, 20, 20],
    [ 20, 81, 58, 81, 20,454,  0, 21, 20,  0,305,  0, 20],
    [ 20, 58, 82, 58, 20,  0,  0,  0, 20, 33,  0, 34, 20],
    [ 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20]
],
    "bgmap": [

],
    "fgmap": [

],
    "beforeBattle": {},
    "cannotMoveIn": {},
    "canFlyFrom": true
}