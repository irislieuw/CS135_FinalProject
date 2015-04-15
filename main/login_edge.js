/*jslint */
/*global AdobeEdge: false, window: false, document: false, console:false, alert: false */
(function (compId) {

    "use strict";
    var im='images/',
        aud='media/',
        vid='media/',
        js='js/',
        fonts = {
        },
        opts = {
            'gAudioPreloadPreference': 'auto',
            'gVideoPreloadPreference': 'auto'
        },
        resources = [
        ],
        scripts = [
        ],
        symbols = {
            "stage": {
                version: "5.0.1",
                minimumCompatibleVersion: "5.0.0",
                build: "5.0.1.386",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            id: 'Text',
                            type: 'text',
                            tag: 'h1',
                            rect: ['45px', '26px', '282px', '110px', 'auto', 'auto'],
                            opacity: '0',
                            text: "PLAY",
                            align: "left",
                            font: ['Arial Black, Gadget, sans-serif', [75, "px"], "rgba(255,255,255,1.00)", "300", "none", "italic", "break-word", "normal"],
                            textShadow: ["rgba(168,163,163,1.00)", 0, 0, 0]
                        },
                        {
                            id: 'RoundRect',
                            type: 'rect',
                            rect: ['10%', '25%', '80%', '53.7%', 'auto', 'auto'],
                            borderRadius: ["50px 50px", "50px 50px", "50px 50px", "50px 50px"],
                            opacity: '0',
                            fill: ["rgba(255,255,255,1.00)"],
                            stroke: [0,"rgba(0,0,0,1)","none"]
                        }
                    ],
                    style: {
                        '${Stage}': {
                            isStage: true,
                            rect: ['null', 'null', '100%', '100%', 'auto', 'auto'],
                            overflow: 'hidden',
                            fill: ["rgba(67,67,67,1.00)",[270,[['rgba(255,235,235,1.00)',45],['rgba(110,119,137,1.00)',100]]]]
                        }
                    }
                },
                timeline: {
                    duration: 1000,
                    autoPlay: true,
                    data: [
                        [
                            "eid89",
                            "border-top-left-radius",
                            1000,
                            0,
                            "linear",
                            "${RoundRect}",
                            [50,50],
                            [50,50],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "eid113",
                            "top",
                            1000,
                            0,
                            "linear",
                            "${RoundRect}",
                            '24.97%',
                            '24.97%'
                        ],
                        [
                            "eid69",
                            "height",
                            1000,
                            0,
                            "linear",
                            "${Stage}",
                            '100%',
                            '100%'
                        ],
                        [
                            "eid59",
                            "background-image",
                            0,
                            1000,
                            "easeInSine",
                            "${Stage}",
                            [270,[['rgba(255,235,235,1.00)',45],['rgba(110,119,137,1.00)',100]]],
                            [270,[['rgba(255,235,235,1.00)',0],['rgba(110,119,137,1.00)',100]]]
                        ],
                        [
                            "eid79",
                            "top",
                            1000,
                            0,
                            "linear",
                            "${Text}",
                            '26px',
                            '26px'
                        ],
                        [
                            "eid108",
                            "left",
                            1000,
                            0,
                            "linear",
                            "${RoundRect}",
                            '10%',
                            '10%'
                        ],
                        [
                            "eid115",
                            "width",
                            1000,
                            0,
                            "linear",
                            "${RoundRect}",
                            '80%',
                            '80%'
                        ],
                        [
                            "eid80",
                            "left",
                            1000,
                            0,
                            "linear",
                            "${Text}",
                            '45px',
                            '45px'
                        ],
                        [
                            "eid114",
                            "height",
                            1000,
                            0,
                            "linear",
                            "${RoundRect}",
                            '53.73%',
                            '53.73%'
                        ],
                        [
                            "eid92",
                            "border-bottom-right-radius",
                            1000,
                            0,
                            "linear",
                            "${RoundRect}",
                            [50,50],
                            [50,50],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "eid90",
                            "border-bottom-left-radius",
                            1000,
                            0,
                            "linear",
                            "${RoundRect}",
                            [50,50],
                            [50,50],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "eid91",
                            "border-top-right-radius",
                            1000,
                            0,
                            "linear",
                            "${RoundRect}",
                            [50,50],
                            [50,50],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "eid68",
                            "width",
                            1000,
                            0,
                            "linear",
                            "${Stage}",
                            '100%',
                            '100%'
                        ],
                        [
                            "eid82",
                            "opacity",
                            0,
                            995,
                            "linear",
                            "${RoundRect}",
                            '0',
                            '0.51219512195122'
                        ],
                        [
                            "eid39",
                            "opacity",
                            0,
                            1000,
                            "easeInSine",
                            "${Text}",
                            '0.000000',
                            '1'
                        ]
                    ]
                }
            }
        };

    AdobeEdge.registerCompositionDefn(compId, symbols, fonts, scripts, resources, opts);

    if (!window.edge_authoring_mode) AdobeEdge.getComposition(compId).load("login_edgeActions.js");
})("EDGE-1638975088");
