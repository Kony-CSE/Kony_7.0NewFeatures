function AS_Segment_b28a8ba5d46140be9db83a31d2ad2e63(eventobject, sectionNumber, rowNumber) {
    AS_Segment_d1996d701659474996db6a2b17934fdb(null, null, null);
    if ((frmMap.segHamburgerMenu.selectedRowItems[0].lblSegRow.text == "Using image")) {
        frmMap.map.locationData = [{
            lat: "17.4469390",
            lon: "78.3741190",
            name: "Using Image In Resources For Pin",
            desc: "Kony Solutions Hyderabad Office",
            image: {
                source: "mappin.png",
                sourceType: kony.map.PIN_IMG_SRC_TYPE_RESOURCES,
                anchor: kony.map.PIN_IMG_ANCHOR_BOTTOM_CENTER
            }
        }];
        frmMap.show();
    }
    if ((frmMap.segHamburgerMenu.selectedRowItems[0].lblSegRow.text == "Using base64 string")) {
        frmMap.map.locationData = [{
            lat: "17.4469390",
            lon: "78.3741190",
            name: "Using Base64 String For Pin",
            desc: "Kony Solutions Hyderabad Office",
            image: {
                source: "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",
                sourceType: kony.map.PIN_IMG_SRC_TYPE_BASE64,
                anchor: kony.map.PIN_IMG_ANCHOR_BOTTOM_CENTER
            }
        }];
        frmMap.show();
    }
    if ((frmMap.segHamburgerMenu.selectedRowItems[0].lblSegRow.text == "Using image object")) {
        var imageObj = kony.image.createImage("imageobject.png");
        frmMap.map.locationData = [{
            lat: "17.4469390",
            lon: "78.3741190",
            name: "Using Image Object For Pin",
            desc: "Kony Solutions Hyderabad Office",
            image: {
                source: imageObj,
                sourceType: kony.map.PIN_IMG_SRC_TYPE_IMAGE,
                anchor: kony.map.PIN_IMG_ANCHOR_BOTTOM_CENTER
            }
        }];
        frmMap.show();
    }
    if ((frmMap.segHamburgerMenu.selectedRowItems[0].lblSegRow.text == "Using image file path")) {
        frmMap.map.locationData = [{
            lat: "17.4469390",
            lon: "78.3741190",
            name: "Using Image In File System For Pin",
            desc: "Kony Solutions Hyderabad Office",
            image: {
                source: kony.io.FileSystem.getDataDirectoryPath() + "/imagepath.png",
                sourceType: kony.map.PIN_IMG_SRC_TYPE_IMAGE,
                anchor: kony.map.PIN_IMG_ANCHOR_BOTTOM_CENTER
            }
        }];
        frmMap.show();
    }
    if ((frmMap.segHamburgerMenu.selectedRowItems[0].lblSegRow.text == "Draw Polygon")) {
        var polygonDataForClorado = {
            id: "Clorado",
            locations: [{
                lat: "37.0004",
                lon: "-109.0448"
            }, {
                lat: "36.9949",
                lon: "-102.0424"
            }, {
                lat: "41.0006",
                lon: "-102.0534"
            }, {
                lat: "40.9996",
                lon: "-109.0489"
            }, {
                lat: "37.0004",
                lon: "-109.0448"
            }],
            navigateAndZoom: true,
            polygonConfig: {
                lineColor: "0x000FF0FF",
                fillColor: "0x000FF0FF",
                lineWidth: 3
            }
        };
        frmMap.map.addPolygon(polygonDataForClorado);
        frmMap.show();
    }
    if ((frmMap.segHamburgerMenu.selectedRowItems[0].lblSegRow.text == "Draw Circle")) {
        var circleConfiguration = {
            id: "KonyOffice",
            centerLocation: {
                lat: "17.4469390",
                lon: "78.3741190"
            },
            radius: 5,
            navigateAndZoom: true,
            showCenterPin: false,
            circleConfig: {
                lineColor: "FF0000FF",
                fillColor: "FF0000FF",
                lineWidth: 5
            }
        };
        frmMap.map.addCircle(circleConfiguration);
        frmMap.show();
    }
    if ((frmMap.segHamburgerMenu.selectedRowItems[0].lblSegRow.text == "Search and draw routes")) {
        function searchAndDrawRoutes() {
            var searchCriteria = {
                origin: {
                    "address": "Newark"
                },
                destination: {
                    "address": "Edison"
                },
                transportMode: "driving",
                directionServiceUrl: "https://maps.googleapis.com/maps/api/directions/json",
                apiKey: "AIzaSyDPcS_2MrXbXIATIXQ7OrUZXAHCnLdikz0"
            };
            kony.map.searchRoutes(searchCriteria, successCallback, failureCallback);
        }

        function successCallback(route) {
            var drawRoute = {
                id: "route",
                startLocation: {
                    lat: route[0]["startLocation"]["lat"],
                    lon: route[0]["startLocation"]["lon"]
                },
                endLocation: {
                    lat: route[0]["endLocation"]["lat"],
                    lon: route[0]["endLocation"]["lon"]
                },
                locations: route[0]["polylinePoints"],
                polylineConfig: {
                    lineColor: "0x0000ffff",
                    lineWidth: "2"
                }
            };
            frmMap.map.addPolyline(drawRoute);
            frmMap.show();
            kony.print(" ********** " + JSON.stringify(route));
        }

        function failureCallback(error) {
            alert(JSON.stringify(error));
            kony.print(" ********** " + JSON.stringify(error));
        }
        searchAndDrawRoutes();
    }
    if ((frmMap.segHamburgerMenu.selectedRowItems[0].lblSegRow.text == "Dashboard")) {
        frmDashboard.show();
    }
}