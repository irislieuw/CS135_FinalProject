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
                            id: 'mainPhoto',
                            type: 'image',
                            tag: 'img',
                            rect: ['0px', '20%', '100%', '54.9%', 'auto', 'auto'],
                            opacity: '0.21138212084770203',
                            fill: ["rgba(0,0,0,0)",im+"4_4.jpg",'0px','0px']
                        },
                        {
                            id: 'Text',
                            type: 'text',
                            tag: 'h1',
                            rect: ['45px', '26px', '425px', '147px', 'auto', 'auto'],
                            opacity: '0',
                            text: "PLAY",
                            align: "left",
                            font: ['Arial Black, Gadget, sans-serif', [100, "px"], "rgba(255,255,255,1.00)", "300", "none", "italic", "break-word", "normal"],
                            textShadow: ["rgba(168,163,163,1.00)", 0, 0, 0]
                        },
                        {
                            id: 'Text2',
                            type: 'text',
                            rect: ['4.5%', '-56.5%', '561px', '183px', 'auto', 'auto'],
                            opacity: '0.2520325183868408',
                            text: "Curated music,<br>at your fingertips",
                            align: "left",
                            font: ['Arial Black, Gadget, sans-serif', [50, "px"], "rgba(255,255,255,1)", "300", "none solid rgb(255, 255, 255)", "italic", "break-word", "normal"]
                        },
                        {
                            id: 'Text3',
                            type: 'text',
                            rect: ['45%', '40.1%', '504px', '137px', 'auto', 'auto'],
                            text: "Welcome!",
                            align: "left",
                            font: ['amatic-sc, sans-serif', [75, "px"], "rgba(255,255,255,1)", "500", "none solid rgb(255, 255, 255)", "normal", "break-word", "normal"]
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
                    duration: 2000,
                    autoPlay: true,
                    data: [
                        [
                            "eid84",
                            "opacity",
                            1000,
                            1000,
                            "linear",
                            "${Text2}",
                            '0.252032995223999',
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
                            "eid97",
                            "opacity",
                            0,
                            2000,
                            "linear",
                            "${mainPhoto}",
                            '0.21138200163841248',
                            '1'
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
                            "eid91",
                            "width",
                            2000,
                            0,
                            "linear",
                            "${Text}",
                            '425px',
                            '425px'
                        ],
                        [
                            "eid85",
                            "left",
                            0,
                            2000,
                            "linear",
                            "${Text2}",
                            '4.47%',
                            '4.5%'
                        ],
                        [
                            "eid92",
                            "top",
                            0,
                            2000,
                            "linear",
                            "${Text2}",
                            '-56.55%',
                            '74.99%'
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
                            "eid90",
                            "height",
                            2000,
                            0,
                            "linear",
                            "${Text}",
                            '147px',
                            '147px'
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

    if (!window.edge_authoring_mode) AdobeEdge.getComposition(compId).load("main_edgeActions.js");
})("EDGE-1638975088");
