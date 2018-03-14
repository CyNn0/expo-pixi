export default {
    "bones": [
        { "name": "root", "y": -176.12 },
        { "name": "COG", "parent": "root", "y": 176.12 },
        { "name": "back", "parent": "COG", "length": 115.37, "x": 16.03, "y": 27.94, "rotation": 151.83 },
        { "name": "chest", "parent": "COG", "length": 31.24, "x": 52.52, "y": 15.34, "rotation": 161.7 },
        { "name": "neck", "parent": "COG", "length": 41.36, "x": 64.75, "y": 11.98, "rotation": 39.05 },
        { "name": "L_front_thigh", "parent": "chest", "length": 67.42, "x": -45.58, "y": 7.92, "rotation": 138.94 },
        { "name": "L_wing", "parent": "chest", "length": 301.12, "x": -7.24, "y": -24.65, "rotation": -75.51 },
        { "name": "R_front_thigh", "parent": "chest", "length": 81.63, "x": -10.89, "y": 28.25, "rotation": 67.96 },
        { "name": "R_rear_thigh", "parent": "back", "length": 123.46, "x": 65.31, "y": 59.89, "rotation": 104.87 },
        { "name": "chin", "parent": "neck", "length": 153.15, "x": 64.62, "y": -6.99, "rotation": -69.07 },
        { "name": "head", "parent": "neck", "length": 188.83, "x": 69.96, "y": 2.49, "rotation": 8.06 },
        { "name": "tail1", "parent": "back", "length": 65.65, "x": 115.37, "y": -0.19, "rotation": 44.31 },
        { "name": "L_front_leg", "parent": "L_front_thigh", "length": 51.57, "x": 67.42, "y": 0.02, "rotation": 43.36 },
        { "name": "L_rear_thigh", "parent": "R_rear_thigh", "length": 88.05, "x": -8.59, "y": 30.18, "rotation": 28.35 },
        { "name": "R_front_leg", "parent": "R_front_thigh", "length": 66.52, "x": 83.04, "y": -0.3, "rotation": 92.7 },
        { "name": "R_rear_leg", "parent": "R_rear_thigh", "length": 91.06, "x": 123.46, "y": -0.26, "rotation": -129.04 },
        { "name": "R_wing", "parent": "head", "length": 359.5, "x": -74.68, "y": 20.9, "rotation": 83.21 },
        { "name": "tail2", "parent": "tail1", "length": 54.5, "x": 65.65, "y": 0.22, "rotation": 12 },
        { "name": "L_front_toe1", "parent": "L_front_leg", "length": 51.44, "x": 45.53, "y": 2.43, "rotation": -98 },
        { "name": "L_front_toe2", "parent": "L_front_leg", "length": 61.97, "x": 51.57, "y": -0.12, "rotation": -55.26 },
        { "name": "L_front_toe3", "parent": "L_front_leg", "length": 45.65, "x": 54.19, "y": 0.6, "scaleX": 1.134, "rotation": -11.13 },
        { "name": "L_front_toe4", "parent": "L_front_leg", "length": 53.47, "x": 50.6, "y": 7.08, "scaleX": 1.134, "rotation": 19.42 },
        { "name": "L_rear_leg", "parent": "L_rear_thigh", "length": 103.74, "x": 96.04, "y": -0.97, "rotation": -122.41 },
        { "name": "R_front_toe1", "parent": "R_front_leg", "length": 46.65, "x": 70.03, "y": 5.31, "rotation": 8.59 },
        { "name": "R_front_toe2", "parent": "R_front_leg", "length": 53.66, "x": 66.52, "y": 0.33, "rotation": -35.02 },
        { "name": "R_front_toe3", "parent": "R_front_leg", "length": 58.38, "x": 62.1, "y": -0.79, "rotation": -74.67 },
        { "name": "R_rear_toe1", "parent": "R_rear_leg", "length": 94.99, "x": 90.06, "y": 2.12, "rotation": 141.98 },
        { "name": "R_rear_toe2", "parent": "R_rear_leg", "length": 99.29, "x": 89.6, "y": 1.52, "rotation": 125.32 },
        { "name": "R_rear_toe3", "parent": "R_rear_leg", "length": 103.45, "x": 91.06, "y": -0.35, "rotation": 112.26 },
        { "name": "tail3", "parent": "tail2", "length": 41.78, "x": 54.5, "y": 0.37, "rotation": 1.8 },
        { "name": "tail4", "parent": "tail3", "length": 34.19, "x": 41.78, "y": 0.16, "rotation": -1.8 },
        { "name": "tail5", "parent": "tail4", "length": 32.32, "x": 34.19, "y": -0.19, "rotation": -3.15 },
        { "name": "tail6", "parent": "tail5", "length": 80.08, "x": 32.32, "y": -0.23, "rotation": -29.55 }
    ],
    "slots": [
        { "name": "L_rear_leg", "bone": "L_rear_leg", "attachment": "L_rear_leg" },
        { "name": "L_rear_thigh", "bone": "L_rear_thigh", "attachment": "L_rear_thigh" },
        { "name": "L_wing", "bone": "L_wing", "attachment": "L_wing01" },
        { "name": "tail6", "bone": "tail6", "attachment": "tail06" },
        { "name": "tail5", "bone": "tail5", "attachment": "tail05" },
        { "name": "tail4", "bone": "tail4", "attachment": "tail04" },
        { "name": "tail3", "bone": "tail3", "attachment": "tail03" },
        { "name": "tail2", "bone": "tail2", "attachment": "tail02" },
        { "name": "tail1", "bone": "tail1", "attachment": "tail01" },
        { "name": "back", "bone": "back", "attachment": "back" },
        { "name": "L_front_thigh", "bone": "L_front_thigh", "attachment": "L_front_thigh" },
        { "name": "L_front_leg", "bone": "L_front_leg", "attachment": "L_front_leg" },
        { "name": "L_front_toe1", "bone": "L_front_toe1", "attachment": "front_toeA" },
        { "name": "L_front_toe4", "bone": "L_front_toe4", "attachment": "front_toeB" },
        { "name": "L_front_toe3", "bone": "L_front_toe3", "attachment": "front_toeB" },
        { "name": "L_front_toe2", "bone": "L_front_toe2", "attachment": "front_toeB" },
        { "name": "chest", "bone": "chest", "attachment": "chest" },
        { "name": "R_rear_toe1", "bone": "R_rear_toe1", "attachment": "rear-toe" },
        { "name": "R_rear_toe2", "bone": "R_rear_toe2", "attachment": "rear-toe" },
        { "name": "R_rear_toe3", "bone": "R_rear_toe3", "attachment": "rear-toe" },
        { "name": "R_rear_leg", "bone": "R_rear_leg", "attachment": "R_rear_leg" },
        { "name": "R_rear_thigh", "bone": "R_rear_thigh", "attachment": "R_rear_thigh" },
        { "name": "R_front_toe1", "bone": "R_front_toe1", "attachment": "front_toeB" },
        { "name": "R_front_thigh", "bone": "R_front_thigh", "attachment": "R_front_thigh" },
        { "name": "R_front_leg", "bone": "R_front_leg", "attachment": "R_front_leg" },
        { "name": "R_front_toe2", "bone": "R_front_toe2", "attachment": "front_toeB" },
        { "name": "R_front_toe3", "bone": "R_front_toe3", "attachment": "front_toeB" },
        { "name": "chin", "bone": "chin", "attachment": "chin" },
        { "name": "R_wing", "bone": "R_wing", "attachment": "R_wing01" },
        { "name": "head", "bone": "head", "attachment": "head" },
        { "name": "logo", "bone": "root", "attachment": "logo" }
    ],
    "skins": {
        "default": {
            "L_front_leg": {
                "L_front_leg": { "x": 14.68, "y": 0.48, "rotation": 15.99, "width": 84, "height": 57 }
            },
            "L_front_thigh": {
                "L_front_thigh": { "x": 27.66, "y": -11.58, "rotation": 58.66, "width": 84, "height": 72 }
            },
            "L_front_toe1": {
                "front_toeA": { "x": 31.92, "y": 0.61, "rotation": 109.55, "width": 29, "height": 50 }
            },
            "L_front_toe2": {
                "front_toeB": { "x": 26.83, "y": -4.94, "rotation": 109.51, "width": 56, "height": 57 }
            },
            "L_front_toe3": {
                "front_toeB": { "x": 18.21, "y": -7.21, "scaleX": 0.881, "scaleY": 0.94, "rotation": 99.71, "width": 56, "height": 57 }
            },
            "L_front_toe4": {
                "front_toeB": { "x": 23.21, "y": -11.68, "scaleX": 0.881, "rotation": 79.89, "width": 56, "height": 57 }
            },
            "L_rear_leg": {
                "L_rear_leg": { "x": 67.29, "y": 12.62, "rotation": -162.65, "width": 206, "height": 177 }
            },
            "L_rear_thigh": {
                "L_rear_thigh": { "x": 56.03, "y": 27.38, "rotation": 74.93, "width": 91, "height": 149 }
            },
            "L_wing": {
                "L_wing01": { "x": 129.21, "y": -45.49, "rotation": -83.7, "width": 191, "height": 256 },
                "L_wing02": { "x": 126.37, "y": -31.69, "rotation": -86.18, "width": 179, "height": 269 },
                "L_wing03": { "x": 110.26, "y": -90.89, "rotation": -86.18, "width": 186, "height": 207 },
                "L_wing04": { "x": -61.61, "y": -83.26, "rotation": -86.18, "width": 188, "height": 135 },
                "L_wing05": { "x": -90.01, "y": -78.14, "rotation": -86.18, "width": 218, "height": 213 },
                "L_wing06": { "x": -143.76, "y": -83.71, "rotation": -86.18, "width": 192, "height": 331 },
                "L_wing07": { "x": -133.04, "y": -33.89, "rotation": -86.18, "width": 159, "height": 255 },
                "L_wing08": { "x": 50.15, "y": -15.71, "rotation": -86.18, "width": 164, "height": 181 },
                "L_wing09": { "x": 85.94, "y": -11.32, "rotation": -86.18, "width": 204, "height": 167 }
            },
            "R_front_leg": {
                "R_front_leg": { "x": 17.79, "y": 4.22, "rotation": 37.62, "width": 101, "height": 89 }
            },
            "R_front_thigh": {
                "R_front_thigh": { "x": 35.28, "y": 2.11, "rotation": 130.33, "width": 108, "height": 108 }
            },
            "R_front_toe1": {
                "front_toeB": { "x": 24.49, "y": -2.61, "rotation": 104.18, "width": 56, "height": 57 }
            },
            "R_front_toe2": {
                "front_toeB": { "x": 26.39, "y": 1.16, "rotation": 104.57, "width": 56, "height": 57 }
            },
            "R_front_toe3": {
                "front_toeB": { "x": 30.66, "y": -0.06, "rotation": 112.29, "width": 56, "height": 57 }
            },
            "R_rear_leg": {
                "R_rear_leg": { "x": 60.87, "y": -5.72, "rotation": -127.66, "width": 116, "height": 100 }
            },
            "R_rear_thigh": {
                "R_rear_thigh": { "x": 53.25, "y": 12.58, "rotation": 103.29, "width": 91, "height": 149 }
            },
            "R_rear_toe1": {
                "rear-toe": { "x": 54.75, "y": -5.72, "rotation": 134.79, "width": 109, "height": 77 }
            },
            "R_rear_toe2": {
                "rear-toe": { "x": 57.02, "y": -7.22, "rotation": 134.42, "width": 109, "height": 77 }
            },
            "R_rear_toe3": {
                "rear-toe": { "x": 47.46, "y": -7.64, "rotation": 134.34, "width": 109, "height": 77 }
            },
            "R_wing": {
                "R_wing01": { "x": 170.08, "y": -23.67, "rotation": -130.33, "width": 219, "height": 310 },
                "R_wing02": { "x": 171.14, "y": -19.33, "rotation": -130.33, "width": 203, "height": 305 },
                "R_wing03": { "x": 166.46, "y": 29.23, "rotation": -130.33, "width": 272, "height": 247 },
                "R_wing04": { "x": 42.94, "y": 134.05, "rotation": -130.33, "width": 279, "height": 144 },
                "R_wing05": { "x": -8.83, "y": 142.59, "rotation": -130.33, "width": 251, "height": 229 },
                "R_wing06": { "x": -123.33, "y": 111.22, "rotation": -130.33, "width": 200, "height": 366 },
                "R_wing07": { "x": -40.17, "y": 118.03, "rotation": -130.33, "width": 200, "height": 263 },
                "R_wing08": { "x": 48.01, "y": 28.76, "rotation": -130.33, "width": 234, "height": 254 },
                "R_wing09": { "x": 128.1, "y": 21.12, "rotation": -130.33, "width": 248, "height": 204 }
            },
            "back": {
                "back": { "x": 35.84, "y": 19.99, "rotation": -151.83, "width": 190, "height": 185 }
            },
            "chest": {
                "chest": { "x": -14.6, "y": 24.78, "rotation": -161.7, "width": 136, "height": 122 }
            },
            "chin": {
                "chin": { "x": 66.55, "y": 7.32, "rotation": 30.01, "width": 214, "height": 146 }
            },
            "head": {
                "head": { "x": 76.68, "y": 32.21, "rotation": -47.12, "width": 296, "height": 260 }
            },
            "logo": {
                "logo": { "y": -176.72, "width": 897, "height": 92 }
            },
            "tail1": {
                "tail01": { "x": 22.59, "y": -4.5, "rotation": 163.85, "width": 120, "height": 153 }
            },
            "tail2": {
                "tail02": { "x": 18.11, "y": -1.75, "rotation": 151.84, "width": 95, "height": 120 }
            },
            "tail3": {
                "tail03": { "x": 16.94, "y": -2, "rotation": 150.04, "width": 73, "height": 92 }
            },
            "tail4": {
                "tail04": { "x": 15.34, "y": -2.17, "rotation": 151.84, "width": 56, "height": 71 }
            },
            "tail5": {
                "tail05": { "x": 15.05, "y": -3.57, "rotation": 155, "width": 52, "height": 59 }
            },
            "tail6": {
                "tail06": { "x": 28.02, "y": -16.83, "rotation": -175.44, "width": 95, "height": 68 }
            }
        }
    },
    "animations": {
        "flying": {
            "slots": {
                "L_wing": {
                    "attachment": [
                        { "time": 0, "name": "L_wing01" },
                        { "time": 0.0666, "name": "L_wing02" },
                        { "time": 0.1333, "name": "L_wing03" },
                        { "time": 0.2, "name": "L_wing04" },
                        { "time": 0.2666, "name": "L_wing05" },
                        { "time": 0.3333, "name": "L_wing06" },
                        { "time": 0.4, "name": "L_wing07" },
                        { "time": 0.4666, "name": "L_wing08" },
                        { "time": 0.5333, "name": "L_wing09" },
                        { "time": 0.6, "name": "L_wing01" },
                        { "time": 0.7333, "name": "L_wing02" },
                        { "time": 0.8, "name": "L_wing03" },
                        { "time": 0.8333, "name": "L_wing04" },
                        { "time": 0.8666, "name": "L_wing05" },
                        { "time": 0.9, "name": "L_wing06" },
                        { "time": 0.9333, "name": "L_wing07" },
                        { "time": 0.9666, "name": "L_wing08" },
                        { "time": 1, "name": "L_wing01" }
                    ]
                },
                "R_wing": {
                    "attachment": [
                        { "time": 0, "name": "R_wing01" },
                        { "time": 0.0666, "name": "R_wing02" },
                        { "time": 0.1333, "name": "R_wing03" },
                        { "time": 0.2, "name": "R_wing04" },
                        { "time": 0.2666, "name": "R_wing05" },
                        { "time": 0.3333, "name": "R_wing06" },
                        { "time": 0.4, "name": "R_wing07" },
                        { "time": 0.4666, "name": "R_wing08" },
                        { "time": 0.5333, "name": "R_wing09" },
                        { "time": 0.6, "name": "R_wing01" },
                        { "time": 0.7333, "name": "R_wing02" },
                        { "time": 0.7666, "name": "R_wing02" },
                        { "time": 0.8, "name": "R_wing03" },
                        { "time": 0.8333, "name": "R_wing04" },
                        { "time": 0.8666, "name": "R_wing05" },
                        { "time": 0.9, "name": "R_wing06" },
                        { "time": 0.9333, "name": "R_wing07" },
                        { "time": 0.9666, "name": "R_wing08" },
                        { "time": 1, "name": "R_wing01" }
                    ]
                }
            },
            "bones": {
                "back": {
                    "rotate": [
                        { "time": 0, "angle": 0 },
                        { "time": 0.1666, "angle": 17.39 },
                        { "time": 0.5, "angle": 0 },
                        { "time": 0.8333, "angle": 7 },
                        { "time": 1, "angle": 0 }
                    ],
                    "translate": [
                        { "time": 0, "x": 0, "y": 0, "curve": "stepped" },
                        { "time": 0.5, "x": 0, "y": 0, "curve": "stepped" },
                        { "time": 1, "x": 0, "y": 0 }
                    ],
                    "scale": [
                        { "time": 0, "x": 1, "y": 1, "curve": "stepped" },
                        { "time": 0.5, "x": 1, "y": 1, "curve": "stepped" },
                        { "time": 1, "x": 1, "y": 1 }
                    ]
                },
                "neck": {
                    "rotate": [
                        { "time": 0, "angle": 0 },
                        { "time": 0.1666, "angle": -8.18 },
                        { "time": 0.3333, "angle": -23.16 },
                        { "time": 0.5, "angle": -18.01 },
                        { "time": 1, "angle": 0 }
                    ],
                    "translate": [
                        { "time": 0, "x": 0, "y": 0, "curve": "stepped" },
                        { "time": 0.5, "x": 0, "y": 0, "curve": "stepped" },
                        { "time": 1, "x": 0, "y": 0 }
                    ],
                    "scale": [
                        { "time": 0, "x": 1, "y": 1, "curve": "stepped" },
                        { "time": 0.5, "x": 1, "y": 1, "curve": "stepped" },
                        { "time": 1, "x": 1, "y": 1 }
                    ]
                },
                "chest": {
                    "rotate": [
                        { "time": 0, "angle": 0, "curve": "stepped" },
                        { "time": 0.5, "angle": 0, "curve": "stepped" },
                        { "time": 1, "angle": 0 }
                    ],
                    "translate": [
                        { "time": 0, "x": 0, "y": 0, "curve": "stepped" },
                        { "time": 0.5, "x": 0, "y": 0, "curve": "stepped" },
                        { "time": 1, "x": 0, "y": 0 }
                    ],
                    "scale": [
                        { "time": 0, "x": 1, "y": 1, "curve": "stepped" },
                        { "time": 0.5, "x": 1, "y": 1, "curve": "stepped" },
                        { "time": 1, "x": 1, "y": 1 }
                    ]
                },
                "tail1": {
                    "rotate": [
                        { "time": 0, "angle": 0 },
                        { "time": 0.1666, "angle": -2.42 },
                        { "time": 0.3333, "angle": -26.2 },
                        { "time": 0.5, "angle": -29.65 },
                        { "time": 0.6666, "angle": -23.15 },
                        { "time": 0.8333, "angle": -55.46 },
                        { "time": 1, "angle": 0 }
                    ],
                    "translate": [
                        { "time": 0, "x": 0, "y": 0, "curve": "stepped" },
                        { "time": 0.5, "x": 0, "y": 0, "curve": "stepped" },
                        { "time": 1, "x": 0, "y": 0 }
                    ],
                    "scale": [
                        { "time": 0, "x": 1, "y": 1, "curve": "stepped" },
                        { "time": 0.5, "x": 1, "y": 1, "curve": "stepped" },
                        { "time": 1, "x": 1, "y": 1 }
                    ]
                },
                "R_rear_thigh": {
                    "rotate": [
                        { "time": 0, "angle": 0, "curve": "stepped" },
                        { "time": 0.5, "angle": 0, "curve": "stepped" },
                        { "time": 1, "angle": 0 }
                    ],
                    "translate": [
                        { "time": 0, "x": 0, "y": 0, "curve": "stepped" },
                        { "time": 0.5, "x": 0, "y": 0, "curve": "stepped" },
                        { "time": 1, "x": 0, "y": 0 }
                    ],
                    "scale": [
                        { "time": 0, "x": 1, "y": 1, "curve": "stepped" },
                        { "time": 0.5, "x": 1, "y": 1, "curve": "stepped" },
                        { "time": 1, "x": 1, "y": 1 }
                    ]
                },
                "tail2": {
                    "rotate": [
                        { "time": 0, "angle": 0 },
                        { "time": 0.1666, "angle": -1.12 },
                        { "time": 0.3333, "angle": 10.48 },
                        { "time": 0.5, "angle": 7.89 },
                        { "time": 0.8333, "angle": -10.38 },
                        { "time": 1, "angle": 0 }
                    ],
                    "translate": [
                        { "time": 0, "x": 0, "y": 0, "curve": "stepped" },
                        { "time": 0.5, "x": 0, "y": 0, "curve": "stepped" },
                        { "time": 1, "x": 0, "y": 0 }
                    ],
                    "scale": [
                        { "time": 0, "x": 1, "y": 1, "curve": "stepped" },
                        { "time": 0.5, "x": 1, "y": 1, "curve": "stepped" },
                        { "time": 1, "x": 1, "y": 1 }
                    ]
                },
                "tail3": {
                    "rotate": [
                        { "time": 0, "angle": 0 },
                        { "time": 0.1666, "angle": 8.24 },
                        { "time": 0.3333, "angle": 15.21 },
                        { "time": 0.5, "angle": 14.84 },
                        { "time": 0.8333, "angle": -18.9 },
                        { "time": 1, "angle": 0 }
                    ],
                    "translate": [
                        { "time": 0, "x": 0, "y": 0, "curve": "stepped" },
                        { "time": 0.5, "x": 0, "y": 0, "curve": "stepped" },
                        { "time": 1, "x": 0, "y": 0 }
                    ],
                    "scale": [
                        { "time": 0, "x": 1, "y": 1, "curve": "stepped" },
                        { "time": 0.5, "x": 1, "y": 1, "curve": "stepped" },
                        { "time": 1, "x": 1, "y": 1 }
                    ]
                },
                "tail4": {
                    "rotate": [
                        { "time": 0, "angle": 0 },
                        { "time": 0.1666, "angle": 17.46 },
                        { "time": 0.3333, "angle": 22.15 },
                        { "time": 0.5, "angle": 22.76 },
                        { "time": 0.8333, "angle": -4.37 },
                        { "time": 1, "angle": 0 }
                    ],
                    "translate": [
                        { "time": 0, "x": 0, "y": 0, "curve": "stepped" },
                        { "time": 0.5, "x": 0, "y": 0, "curve": "stepped" },
                        { "time": 1, "x": 0, "y": 0 }
                    ],
                    "scale": [
                        { "time": 0, "x": 1, "y": 1, "curve": "stepped" },
                        { "time": 0.5, "x": 1, "y": 1, "curve": "stepped" },
                        { "time": 1, "x": 1, "y": 1 }
                    ]
                },
                "tail5": {
                    "rotate": [
                        { "time": 0, "angle": 0 },
                        { "time": 0.1666, "angle": 7.4 },
                        { "time": 0.3333, "angle": 28.5 },
                        { "time": 0.5, "angle": 21.33 },
                        { "time": 0.8333, "angle": -1.27 },
                        { "time": 1, "angle": 0 }
                    ],
                    "translate": [
                        { "time": 0, "x": 0, "y": 0, "curve": "stepped" },
                        { "time": 0.5, "x": 0, "y": 0, "curve": "stepped" },
                        { "time": 1, "x": 0, "y": 0 }
                    ],
                    "scale": [
                        { "time": 0, "x": 1, "y": 1, "curve": "stepped" },
                        { "time": 0.5, "x": 1, "y": 1, "curve": "stepped" },
                        { "time": 1, "x": 1, "y": 1 }
                    ]
                },
                "tail6": {
                    "rotate": [
                        { "time": 0, "angle": 0 },
                        { "time": 0.1666, "angle": 45.99 },
                        { "time": 0.4, "angle": 43.53 },
                        { "time": 0.5, "angle": 61.79 },
                        { "time": 0.8333, "angle": 13.28 },
                        { "time": 1, "angle": 0 }
                    ],
                    "translate": [
                        { "time": 0, "x": 0, "y": 0, "curve": "stepped" },
                        { "time": 0.5, "x": 0, "y": 0, "curve": "stepped" },
                        { "time": 1, "x": 0, "y": 0 }
                    ],
                    "scale": [
                        { "time": 0, "x": 1, "y": 1, "curve": "stepped" },
                        { "time": 0.5, "x": 1, "y": 1, "curve": "stepped" },
                        { "time": 1, "x": 1, "y": 1 }
                    ]
                },
                "R_rear_leg": {
                    "rotate": [
                        { "time": 0, "angle": 0 },
                        { "time": 0.1666, "angle": -14.21 },
                        { "time": 0.5, "angle": 47.17 },
                        { "time": 1, "angle": 0 }
                    ],
                    "translate": [
                        { "time": 0, "x": 0, "y": 0, "curve": "stepped" },
                        { "time": 0.5, "x": 0, "y": 0, "curve": "stepped" },
                        { "time": 1, "x": 0, "y": 0 }
                    ],
                    "scale": [
                        { "time": 0, "x": 1, "y": 1, "curve": "stepped" },
                        { "time": 0.5, "x": 1, "y": 1, "curve": "stepped" },
                        { "time": 1, "x": 1, "y": 1 }
                    ]
                },
                "R_rear_toe3": {
                    "rotate": [
                        { "time": 0, "angle": 0 },
                        { "time": 0.5, "angle": -36.06 },
                        { "time": 1, "angle": 0 }
                    ],
                    "translate": [
                        { "time": 0, "x": 0, "y": 0, "curve": "stepped" },
                        { "time": 0.5, "x": 0, "y": 0, "curve": "stepped" },
                        { "time": 1, "x": 0, "y": 0 }
                    ],
                    "scale": [
                        { "time": 0, "x": 1, "y": 1, "curve": "stepped" },
                        { "time": 0.5, "x": 1, "y": 1, "curve": "stepped" },
                        { "time": 1, "x": 1, "y": 1 }
                    ]
                },
                "R_rear_toe2": {
                    "rotate": [
                        { "time": 0, "angle": 0 },
                        { "time": 0.5, "angle": -20.32 },
                        { "time": 1, "angle": 0 }
                    ],
                    "translate": [
                        { "time": 0, "x": 0, "y": 0, "curve": "stepped" },
                        { "time": 0.5, "x": 0, "y": 0, "curve": "stepped" },
                        { "time": 1, "x": 0, "y": 0 }
                    ],
                    "scale": [
                        { "time": 0, "x": 1, "y": 1, "curve": "stepped" },
                        { "time": 0.5, "x": 1, "y": 1, "curve": "stepped" },
                        { "time": 1, "x": 1, "y": 1 }
                    ]
                },
                "R_rear_toe1": {
                    "rotate": [
                        { "time": 0, "angle": 0 },
                        { "time": 0.5, "angle": -18.71 },
                        { "time": 1, "angle": 0 }
                    ],
                    "translate": [
                        { "time": 0, "x": 0, "y": 0, "curve": "stepped" },
                        { "time": 0.5, "x": 0, "y": 0, "curve": "stepped" },
                        { "time": 1, "x": 0, "y": 0 }
                    ],
                    "scale": [
                        { "time": 0, "x": 1, "y": 1, "curve": "stepped" },
                        { "time": 0.5, "x": 1, "y": 1, "curve": "stepped" },
                        { "time": 1, "x": 1, "y": 1 }
                    ]
                },
                "head": {
                    "rotate": [
                        {
                            "time": 0,
                            "angle": 0,
                            "curve": [ 0.408, 1.36, 0.675, 1.43 ]
                        },
                        { "time": 0.5, "angle": 1.03 },
                        { "time": 1, "angle": 0 }
                    ],
                    "translate": [
                        { "time": 0, "x": 0, "y": 0, "curve": "stepped" },
                        { "time": 0.5, "x": 0, "y": 0, "curve": "stepped" },
                        { "time": 1, "x": 0, "y": 0 }
                    ],
                    "scale": [
                        { "time": 0, "x": 1, "y": 1, "curve": "stepped" },
                        { "time": 0.5, "x": 1, "y": 1, "curve": "stepped" },
                        { "time": 1, "x": 1, "y": 1 }
                    ]
                },
                "chin": {
                    "rotate": [
                        {
                            "time": 0,
                            "angle": 0,
                            "curve": [ 0.416, 1.15, 0.494, 1.27 ]
                        },
                        { "time": 0.3333, "angle": -5.15 },
                        { "time": 0.5, "angle": 9.79 },
                        { "time": 0.6666, "angle": 18.94 },
                        { "time": 1, "angle": 0 }
                    ],
                    "translate": [
                        { "time": 0, "x": 0, "y": 0, "curve": "stepped" },
                        { "time": 0.5, "x": 0, "y": 0, "curve": "stepped" },
                        { "time": 1, "x": 0, "y": 0 }
                    ],
                    "scale": [
                        { "time": 0, "x": 1, "y": 1, "curve": "stepped" },
                        { "time": 0.5, "x": 1, "y": 1, "curve": "stepped" },
                        { "time": 1, "x": 1, "y": 1 }
                    ]
                },
                "L_front_thigh": {
                    "rotate": [
                        { "time": 0, "angle": 0 },
                        { "time": 0.1666, "angle": -19.18 },
                        { "time": 0.3333, "angle": -32.02 },
                        { "time": 0.5, "angle": -19.62 },
                        { "time": 1, "angle": 0 }
                    ],
                    "translate": [
                        { "time": 0, "x": 0, "y": 0, "curve": "stepped" },
                        { "time": 0.5, "x": 0, "y": 0, "curve": "stepped" },
                        { "time": 1, "x": 0, "y": 0 }
                    ],
                    "scale": [
                        { "time": 0, "x": 1, "y": 1, "curve": "stepped" },
                        { "time": 0.5, "x": 1, "y": 1, "curve": "stepped" },
                        { "time": 1, "x": 1, "y": 1 }
                    ]
                },
                "R_front_thigh": {
                    "rotate": [
                        { "time": 0, "angle": 0 },
                        { "time": 0.1666, "angle": -12.96 },
                        { "time": 0.5, "angle": 16.2 },
                        { "time": 1, "angle": 0 }
                    ],
                    "translate": [
                        { "time": 0, "x": 0, "y": 0, "curve": "stepped" },
                        { "time": 0.5, "x": 0, "y": 0, "curve": "stepped" },
                        { "time": 1, "x": 0, "y": 0 }
                    ],
                    "scale": [
                        { "time": 0, "x": 1, "y": 1, "curve": "stepped" },
                        { "time": 0.5, "x": 1, "y": 1, "curve": "stepped" },
                        { "time": 1, "x": 1, "y": 1 }
                    ]
                },
                "L_front_leg": {
                    "rotate": [
                        { "time": 0, "angle": 0 },
                        { "time": 0.1666, "angle": 37.77 },
                        { "time": 0.5, "angle": 0, "curve": "stepped" },
                        { "time": 1, "angle": 0 }
                    ],
                    "translate": [
                        { "time": 0, "x": 0, "y": 0, "curve": "stepped" },
                        { "time": 0.5, "x": 0, "y": 0, "curve": "stepped" },
                        { "time": 1, "x": 0, "y": 0 }
                    ],
                    "scale": [
                        { "time": 0, "x": 1, "y": 1, "curve": "stepped" },
                        { "time": 0.5, "x": 1, "y": 1, "curve": "stepped" },
                        { "time": 1, "x": 1, "y": 1 }
                    ]
                },
                "L_front_toe1": {
                    "rotate": [
                        { "time": 0, "angle": 0 },
                        { "time": 0.1666, "angle": -16.08 },
                        { "time": 0.5, "angle": 0, "curve": "stepped" },
                        { "time": 1, "angle": 0 }
                    ],
                    "translate": [
                        { "time": 0, "x": 0, "y": 0, "curve": "stepped" },
                        { "time": 0.5, "x": 0, "y": 0, "curve": "stepped" },
                        { "time": 1, "x": 0, "y": 0 }
                    ],
                    "scale": [
                        { "time": 0, "x": 1, "y": 1, "curve": "stepped" },
                        { "time": 0.5, "x": 1, "y": 1, "curve": "stepped" },
                        { "time": 1, "x": 1, "y": 1 }
                    ]
                },
                "L_front_toe2": {
                    "rotate": [
                        { "time": 0, "angle": 0, "curve": "stepped" },
                        { "time": 0.5, "angle": 0, "curve": "stepped" },
                        { "time": 1, "angle": 0 }
                    ],
                    "translate": [
                        { "time": 0, "x": 0, "y": 0, "curve": "stepped" },
                        { "time": 0.5, "x": 0, "y": 0, "curve": "stepped" },
                        { "time": 1, "x": 0, "y": 0 }
                    ],
                    "scale": [
                        { "time": 0, "x": 1, "y": 1 },
                        { "time": 0.5, "x": 1.33, "y": 1.029 },
                        { "time": 1, "x": 1, "y": 1 }
                    ]
                },
                "L_front_toe4": {
                    "rotate": [
                        { "time": 0, "angle": 0 },
                        { "time": 0.5, "angle": 26.51 },
                        { "time": 1, "angle": 0 }
                    ],
                    "translate": [
                        { "time": 0, "x": 0, "y": 0, "curve": "stepped" },
                        { "time": 0.5, "x": 0, "y": 0, "curve": "stepped" },
                        { "time": 1, "x": 0, "y": 0 }
                    ],
                    "scale": [
                        { "time": 0, "x": 1, "y": 1 },
                        { "time": 0.5, "x": 1.239, "y": 0.993 },
                        { "time": 1, "x": 1, "y": 1 }
                    ]
                },
                "L_front_toe3": {
                    "rotate": [
                        { "time": 0, "angle": 0 },
                        { "time": 0.5, "angle": 16.99 },
                        { "time": 1, "angle": 0 }
                    ],
                    "translate": [
                        { "time": 0, "x": 0, "y": 0, "curve": "stepped" },
                        { "time": 0.5, "x": 0, "y": 0, "curve": "stepped" },
                        { "time": 1, "x": 0, "y": 0 }
                    ],
                    "scale": [
                        { "time": 0, "x": 1, "y": 1 },
                        { "time": 0.5, "x": 1.402, "y": 1.007 },
                        { "time": 1, "x": 1, "y": 1 }
                    ]
                },
                "R_front_leg": {
                    "rotate": [
                        { "time": 0, "angle": 0 },
                        { "time": 0.1666, "angle": 26.07 },
                        { "time": 0.5, "angle": -21.6 },
                        { "time": 1, "angle": 0 }
                    ],
                    "translate": [
                        { "time": 0, "x": 0, "y": 0, "curve": "stepped" },
                        { "time": 0.5, "x": 0, "y": 0, "curve": "stepped" },
                        { "time": 1, "x": 0, "y": 0 }
                    ],
                    "scale": [
                        { "time": 0, "x": 1, "y": 1, "curve": "stepped" },
                        { "time": 0.5, "x": 1, "y": 1, "curve": "stepped" },
                        { "time": 1, "x": 1, "y": 1 }
                    ]
                },
                "R_front_toe1": {
                    "rotate": [
                        { "time": 0, "angle": 0 },
                        { "time": 0.1666, "angle": 29.23 },
                        { "time": 0.5, "angle": 34.83 },
                        { "time": 1, "angle": 0 }
                    ],
                    "translate": [
                        { "time": 0, "x": 0, "y": 0, "curve": "stepped" },
                        { "time": 0.5, "x": 0, "y": 0, "curve": "stepped" },
                        { "time": 1, "x": 0, "y": 0 }
                    ],
                    "scale": [
                        { "time": 0, "x": 1, "y": 1 },
                        { "time": 0.5, "x": 1.412, "y": 1 },
                        { "time": 1, "x": 1, "y": 1 }
                    ]
                },
                "R_front_toe2": {
                    "rotate": [
                        { "time": 0, "angle": 0 },
                        { "time": 0.1666, "angle": 24.89 },
                        { "time": 0.5, "angle": 23.16 },
                        { "time": 1, "angle": 0 }
                    ],
                    "translate": [
                        { "time": 0, "x": 0, "y": 0, "curve": "stepped" },
                        { "time": 0.5, "x": 0, "y": 0, "curve": "stepped" },
                        { "time": 1, "x": 0, "y": 0 }
                    ],
                    "scale": [
                        { "time": 0, "x": 1, "y": 1 },
                        { "time": 0.5, "x": 1.407, "y": 1.057 },
                        { "time": 1, "x": 1, "y": 1 }
                    ]
                },
                "R_front_toe3": {
                    "rotate": [
                        { "time": 0, "angle": 0 },
                        { "time": 0.1666, "angle": 11.01 },
                        { "time": 0.5, "angle": 0, "curve": "stepped" },
                        { "time": 1, "angle": 0 }
                    ],
                    "translate": [
                        { "time": 0, "x": 0, "y": 0, "curve": "stepped" },
                        { "time": 0.5, "x": 0, "y": 0, "curve": "stepped" },
                        { "time": 1, "x": 0, "y": 0 }
                    ],
                    "scale": [
                        { "time": 0, "x": 1, "y": 1 },
                        { "time": 0.5, "x": 1.329, "y": 1.181 },
                        { "time": 1, "x": 1, "y": 1 }
                    ]
                },
                "L_rear_leg": {
                    "rotate": [
                        { "time": 0, "angle": 0 },
                        { "time": 0.3666, "angle": 25.19 },
                        { "time": 0.6666, "angle": -15.65 },
                        { "time": 1, "angle": 0 }
                    ],
                    "translate": [
                        { "time": 0, "x": 0, "y": 0 }
                    ],
                    "scale": [
                        { "time": 0, "x": 1, "y": 1 }
                    ]
                },
                "COG": {
                    "rotate": [
                        {
                            "time": 0,
                            "angle": 0,
                            "curve": [ 0.456, 0.2, 0.422, 1.06 ]
                        },
                        { "time": 0.3333, "angle": 23.93 },
                        {
                            "time": 0.6666,
                            "angle": 337.8,
                            "curve": [ 0.41, 0, 0.887, 0.75 ]
                        },
                        { "time": 1, "angle": 0 }
                    ],
                    "translate": [
                        {
                            "time": 0,
                            "x": 0,
                            "y": 0,
                            "curve": [ 0.33, 1, 0.816, 1.33 ]
                        },
                        {
                            "time": 0.5,
                            "x": 0,
                            "y": 113.01,
                            "curve": [ 0.396, 0, 0.709, 2.03 ]
                        },
                        { "time": 1, "x": 0, "y": 0 }
                    ]
                }
            }
        }
    }
    }