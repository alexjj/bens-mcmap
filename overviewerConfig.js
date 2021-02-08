var overviewerConfig = {
    "CONST": {
        "tileSize": 384,
        "image": {
            "defaultMarker": "signpost.png",
            "signMarker": "signpost_icon.png",
            "bedMarker": "bed.png",
            "spawnMarker": "markers/marker_home.png",
            "spawnMarker2x": "markers/marker_home_2x.png",
            "queryMarker": "markers/marker_location.png",
            "queryMarker2x": "markers/marker_location_2x.png",
            "compass": {
                "0": "compass_upper-left.png",
                "1": "compass_upper-right.png",
                "3": "compass_lower-left.png",
                "2": "compass_lower-right.png"
            }
        },
        "mapDivId": "mcmap",
        "UPPERLEFT": 0,
        "UPPERRIGHT": 1,
        "LOWERLEFT": 3,
        "LOWERRIGHT": 2
    },
    "worlds": [
        "ben - overworld",
        "ben - nether"
    ],
    "map": {
        "debug": false,
        "cacheTag": "1612822132",
        "north_direction": "lower-left",
        "controls": {
            "pan": true,
            "zoom": true,
            "spawn": true,
            "compass": true,
            "mapType": true,
            "overlays": true,
            "coordsBox": true
        }
    },
    "tilesets": [
        {
            "name": "Daytime",
            "zoomLevels": 8,
            "defaultZoom": 1,
            "maxZoom": 8,
            "path": "survivalday",
            "base": "",
            "bgcolor": "#1a1a1a",
            "world": "ben - overworld",
            "last_rendertime": 1612821471,
            "imgextension": "png",
            "isOverlay": false,
            "poititle": "Markers",
            "showlocationmarker": true,
            "center": [
                -176,
                96,
                -224
            ],
            "minZoom": 0,
            "spawn": [
                -176,
                96,
                -224
            ],
            "north_direction": 0
        },
        {
            "name": "The Nether",
            "zoomLevels": 6,
            "defaultZoom": 1,
            "maxZoom": 6,
            "path": "survivalnether",
            "base": "",
            "bgcolor": "#1a1a1a",
            "world": "ben - nether",
            "last_rendertime": 1612804127,
            "imgextension": "png",
            "isOverlay": false,
            "poititle": "Markers",
            "showlocationmarker": true,
            "center": [
                -176,
                96,
                -224
            ],
            "minZoom": 0,
            "spawn": false,
            "north_direction": 0
        }
    ]
};
