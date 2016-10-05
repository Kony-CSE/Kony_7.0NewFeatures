function addWidgetsfrmMap() {
    frmMap.setDefaultUnit(kony.flex.DP);
    var flexHamburgerMenu = new kony.ui.FlexContainer({
        "id": "flexHamburgerMenu",
        "clipBounds": true,
        "height": "100%",
        "isVisible": true,
        "layoutType": kony.flex.FLOW_VERTICAL,
        "left": "-100%",
        "skin": "slFbox",
        "top": "0dp",
        "width": "75%"
    }, {}, {});
    flexHamburgerMenu.setDefaultUnit(kony.flex.DP);
    var segHamburgerMenu = new kony.ui.SegmentedUI2({
        "data": [
            [{
                "flexSegHdr": {},
                "flexSegRow": {},
                "lblSegHdr": {
                    "@class": "com.viz.ide.model.segment.SimpleTextSegmentData",
                    "text": "Customization of map pins"
                },
                "lblSegRow": {}
            }, [{
                "lblSegRow": {
                    "@class": "com.viz.ide.model.segment.SimpleTextSegmentData",
                    "text": "Using image"
                }
            }, {
                "lblSegRow": {
                    "@class": "com.viz.ide.model.segment.SimpleTextSegmentData",
                    "text": "Using base64 string"
                }
            }, {
                "lblSegRow": {
                    "@class": "com.viz.ide.model.segment.SimpleTextSegmentData",
                    "text": "Using image object"
                }
            }, {
                "lblSegRow": {
                    "@class": "com.viz.ide.model.segment.SimpleTextSegmentData",
                    "text": "Using image file path"
                }
            }]],
            [{
                "flexSegHdr": {},
                "flexSegRow": {},
                "lblSegHdr": {
                    "@class": "com.viz.ide.model.segment.SimpleTextSegmentData",
                    "text": "Support for overlay shapes"
                },
                "lblSegRow": {}
            }, [{
                "lblSegRow": {
                    "@class": "com.viz.ide.model.segment.SimpleTextSegmentData",
                    "text": "Draw Polygon"
                }
            }, {
                "lblSegRow": {
                    "@class": "com.viz.ide.model.segment.SimpleTextSegmentData",
                    "text": "Draw Circle"
                }
            }]],
            [{
                "flexSegHdr": {},
                "flexSegRow": {},
                "lblSegHdr": {
                    "@class": "com.viz.ide.model.segment.SimpleTextSegmentData",
                    "text": "Searching Routes"
                },
                "lblSegRow": {}
            }, [{
                "lblSegRow": {
                    "@class": "com.viz.ide.model.segment.SimpleTextSegmentData",
                    "text": "Search and draw routes"
                }
            }]],
            [{
                "flexSegHdr": {},
                "flexSegRow": {},
                "lblSegHdr": {
                    "@class": "com.viz.ide.model.segment.SimpleTextSegmentData",
                    "text": "Home"
                },
                "lblSegRow": {}
            }, [{
                "lblSegRow": {
                    "@class": "com.viz.ide.model.segment.SimpleTextSegmentData",
                    "text": "Dashboard"
                }
            }]]
        ],
        "id": "segHamburgerMenu",
        "onRowClick": AS_Segment_b28a8ba5d46140be9db83a31d2ad2e63,
        "scrollingEvents": {},
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "groupCells": false,
        "height": "100%",
        "isVisible": true,
        "left": "0dp",
        "needPageIndicator": true,
        "pageOffDotImage": "pageOffDot.png",
        "pageOnDotImage": "pageOnDot.png",
        "retainSelection": false,
        "rowFocusSkin": "seg2Focus",
        "rowSkin": "sknSeg1",
        "rowTemplate": flexSegRow,
        "sectionHeaderSkin": "sliPhoneSegmentHeader",
        "sectionHeaderTemplate": flexSegHdr,
        "selectionBehavior": constants.SEGUI_DEFAULT_BEHAVIOR,
        "separatorColor": "64646400",
        "separatorRequired": true,
        "separatorThickness": 1,
        "showScrollbars": false,
        "top": "0dp",
        "viewType": constants.SEGUI_VIEW_TYPE_TABLEVIEW,
        "widgetDataMap": {
            "flexSegHdr": "flexSegHdr",
            "flexSegRow": "flexSegRow",
            "lblSegHdr": "lblSegHdr",
            "lblSegRow": "lblSegRow"
        },
        "width": "100%"
    }, {
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    flexHamburgerMenu.add(
    segHamburgerMenu);
    var flexMainContent = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "100%",
        "id": "flexMainContent",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "0dp",
        "skin": "slFbox",
        "top": "0dp",
        "width": "100%",
        "zIndex": 1
    }, {}, {});
    flexMainContent.setDefaultUnit(kony.flex.DP);
    var flexHeader = new kony.ui.FlexContainer({
        "height": "10%",
        "id": "flexHeader",
        "left": "0dp",
        "top": "0dp",
        "width": "100%",
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "skin": "sknFlex1"
    }, {}, {});
    flexHeader.setDefaultUnit(kony.flex.DP);
    var imgHamburgerMenu = new kony.ui.Image2({
        "centerY": "50%",
        "height": "45dp",
        "id": "imgHamburgerMenu",
        "left": "10dp",
        "onTouchEnd": AS_Image_d91eae9b55e24c2c901140a192a5271a,
        "src": "menu.png",
        "top": "0dp",
        "width": "40dp",
        "isVisible": true,
        "skin": "slImage"
    }, {
        "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    var imgLogo = new kony.ui.Image2({
        "centerX": "50%",
        "centerY": "50%",
        "height": "35dp",
        "id": "imgLogo",
        "left": "157dp",
        "src": "konylogo.png",
        "top": "0dp",
        "width": "100dp",
        "zIndex": 1,
        "isVisible": true,
        "skin": "slImage"
    }, {
        "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    flexHeader.add(
    imgHamburgerMenu, imgLogo);
    var map = new kony.ui.Map({
        "calloutWidth": 80,
        "defaultPinImage": "pinb.png",
        "height": "85%",
        "id": "map",
        "isVisible": true,
        "left": "0dp",
        "locationData": [{
            "desc": "Phoenix infocity, Gachibowli",
            "lat": "17.447326",
            "lon": "78.371358",
            "name": "KonyLabs(New)"
        }, {
            "desc": "Mindspace, Hitech City",
            "lat": "17.441839",
            "lon": "78.380928",
            "name": "KonyLabs(Old)"
        }, {
            "desc": "Orlando, US",
            "lat": "28.449340",
            "lon": "-81.481519",
            "name": "KonyLabs"
        }],
        "provider": constants.MAP_PROVIDER_GOOGLE,
        "top": "10%",
        "width": "100%",
        "zIndex": 1
    }, {}, {
        "mode": constants.MAP_VIEW_MODE_NORMAL,
        "showZoomControl": true,
        "zoomLevel": 15
    });
    var flexFooter = new kony.ui.FlexContainer({
        "bottom": 0,
        "height": "5%",
        "id": "flexFooter",
        "left": "0dp",
        "width": "100%",
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "skin": "sknFlex1"
    }, {}, {});
    flexFooter.setDefaultUnit(kony.flex.DP);
    var rtxFooter = new kony.ui.RichText({
        "height": "100%",
        "id": "rtxFooter",
        "left": "0dp",
        "text": "© Copyright 2015 Kony, Inc. All rights reserved. ",
        "top": "0dp",
        "width": "100%",
        "isVisible": true,
        "skin": "sknRtx1"
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_BOTTOM_LEFT,
        "padding": [1, 1, 0, 1],
        "paddingInPixel": false
    }, {});
    flexFooter.add(
    rtxFooter);
    flexMainContent.add(
    flexHeader, map, flexFooter);
    frmMap.add(
    flexHamburgerMenu, flexMainContent);
};

function frmMapGlobals() {
    frmMap = new kony.ui.Form2({
        "addWidgets": addWidgetsfrmMap,
        "enabledForIdleTimeout": false,
        "id": "frmMap",
        "layoutType": kony.flex.FREE_FORM,
        "needAppMenu": false,
        "skin": "sknFrm1"
    }, {
        "displayOrientation": constants.FORM_DISPLAY_ORIENTATION_PORTRAIT,
        "layoutType": kony.flex.FREE_FORM,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "footerOverlap": false,
        "headerOverlap": false,
        "menuPosition": constants.FORM_MENU_POSITION_AFTER_APPMENU,
        "retainScrollPosition": false,
        "titleBar": true,
        "titleBarSkin": "slTitleBar",
        "windowSoftInputMode": constants.FORM_ADJUST_RESIZE
    });
};