/*jslint */
/*global AdobeEdge: false, window: false, document: false, console:false, alert: false */
(function (compId) {

    "use strict";
    var im='images/',
        aud='media/',
        vid='media/',
        js='js/',
        fonts = {
            'mr-dafoe, cursive': '<script src=\"http://use.edgefonts.net/mr-dafoe:n4:all.js\"></script>',
            'amatic-sc, sans-serif': '<script src=\"http://use.edgefonts.net/amatic-sc:n4,n7:all.js\"></script>'        },
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
                            rect: ['45px', '26px', '351px', '147px', 'auto', 'auto'],
                            opacity: '0',
                            text: "PLAY",
                            align: "left",
                            font: ['Arial Black, Gadget, sans-serif', [100, "px"], "rgba(255,255,255,1.00)", "300", "none", "italic", "break-word", "normal"],
                            textShadow: ["rgba(168,163,163,1.00)", 0, 0, 0]
                        },
                        {
                            id: 'Text2',
                            type: 'text',
                            rect: ['364px', '82px', '263px', '93px', 'auto', 'auto'],
                            opacity: '0',
                            text: "PROFILE",
                            align: "left",
                            font: ['\'Arial Black\', Gadget, sans-serif', [50, "px"], "rgba(110,110,110,1.00)", "300", "none solid rgb(255, 255, 255)", "normal", "break-word", "normal"]
                        }
                    ],
                    style: {
                        '${Stage}': {
                            isStage: true,
                            rect: ['null', 'null', '100%', '100%', 'auto', 'auto'],
                            overflow: 'auto',
                            fill: ["rgba(67,67,67,1.00)",[270,[['rgba(255,235,235,1.00)',45],['rgba(110,119,137,1.00)',100]]]]
                        }
                    }
                },
                timeline: {
                    duration: 1500,
                    autoPlay: true,
                    data: [
                        [
                            "eid94",
                            "opacity",
                            0,
                            1000,
                            "easeInSine",
                            "${Text2}",
                            '0',
                            '0.29211376886058'
                        ],
                        [
                            "eid95",
                            "opacity",
                            1000,
                            500,
                            "easeInSine",
                            "${Text2}",
                            '0.29211376886058',
                            '1'
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
                            0,
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
                            "eid97",
                            "width",
                            1500,
                            0,
                            "easeInSine",
                            "${Text}",
                            '351px',
                            '351px'
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
                            "eid96",
                            "width",
                            1500,
                            0,
                            "easeInSine",
                            "${Text2}",
                            '263px',
                            '263px'
                        ],
                        [
                            "eid39",
                            "opacity",
                            0,
                            0,
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

    if (!window.edge_authoring_mode) AdobeEdge.getComposition(compId).load("profile_edgeActions.js");
})("EDGE-1638975088");
