main.floors.C51=
{
    "floorId": "C51",
    "title": "珠露原野",
    "name": "珠露原野",
    "width": 13,
    "height": 13,
    "canFlyTo": true,
    "canUseQuickShop": true,
    "cannotViewMap": false,
    "images": [
        {
            "name": "03.jpg",
            "canvas": "bg",
            "x": 0,
            "y": 0
        }
    ],
    "item_ratio": 15,
    "defaultGround": "ground",
    "bgm": "map3.mp3",
    "firstArrive": [
        {
            "type": "setEnemy",
            "id": "E631",
            "name": "special",
            "value": "[53,57]"
        },
        {
            "type": "if",
            "condition": "(item:I474==1)",
            "true": [
                "进入灵境强者云集的区域！\n受到密集灵气的压制，\n守护天使的效果变弱了。",
                {
                    "type": "setValue",
                    "name": "item:I474",
                    "value": "0"
                },
                {
                    "type": "setValue",
                    "name": "item:I471",
                    "value": "1"
                }
            ],
            "false": []
        },
        {
            "type": "if",
            "condition": "(item:I471===1)",
            "true": [
                "检测到当前为低难度，获得3黄3蓝1绿和灵水",
                {
                    "type": "setValue",
                    "name": "item:yellowKey",
                    "operator": "+=",
                    "value": "3"
                },
                {
                    "type": "setValue",
                    "name": "item:blueKey",
                    "operator": "+=",
                    "value": "3"
                },
                {
                    "type": "setValue",
                    "name": "item:greenKey",
                    "operator": "+=",
                    "value": "1"
                },
                {
                    "type": "setValue",
                    "name": "item:I840",
                    "operator": "+=",
                    "value": "1"
                }
            ]
        },
        {
            "type": "if",
            "condition": "(item:I475===1)",
            "true": [
                "检测到当前为低难度，获得3黄1绿",
                {
                    "type": "setValue",
                    "name": "item:yellowKey",
                    "operator": "+=",
                    "value": "3"
                },
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
            "floorId": "C52",
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
    [153,153,153,153,153,153,353,153,153,153,153,153,153],
    [153,448,  0,602,589, 34, 81, 22,600,450, 81, 33,153],
    [153,153,632,153,153,153, 82,153,153,153,632,153,153],
    [153,  0,633,  0,601,590,633, 34,602,447,  0, 21,153],
    [153,447,  0, 22,153,153,632,153,153,  0,453,  0,153],
    [153,153, 81,153,153,  0, 21,600,153,153, 81,153,153],
    [153,451, 81,633,589, 32,  0, 58, 81, 81,589,457,153],
    [153,153,601,153,153,153, 81,153,153,153, 33,153,153],
    [153, 33,633, 29,590, 32,  0, 34,590,448,632, 34,153],
    [153,153, 82,153,153,153,589,153,153,153,447,153,153],
    [153, 82, 82, 82,153,  0,454,  0,153,  0,601,  0,153],
    [153,525,631,436,153,480,  0, 22,153, 59,  0, 29,153],
    [153,153,153,153,153,153,153,153,153,153,153,153,153]
],
    "bgmap": [

],
    "fgmap": [

],
    "beforeBattle": {},
    "cannotMoveIn": {},
    "canFlyFrom": true
}