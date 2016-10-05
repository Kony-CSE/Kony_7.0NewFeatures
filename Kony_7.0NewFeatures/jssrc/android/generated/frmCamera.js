function addWidgetsfrmCamera() {
    frmCamera.setDefaultUnit(kony.flex.DP);
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
        "id": "segHamburgerMenu",
        "onRowClick": AS_Segment_2e556285282a4e1b8ee6897e30aaa2bc,
        "scrollingEvents": {},
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "data": [
            [{
                "lblSegHdr": "Widget Enhancements"
            }, [{
                "lblSegRow": "Map"
            }, {
                "lblSegRow": "Segment"
            }, {
                "lblSegRow": "Camera & Video"
            }]],
            [{
                "lblSegHdr": "API Enhancements"
            }, [{
                "lblSegRow": "3D Transformations"
            }, {
                "lblSegRow": "Authenticate Using TouchID"
            }]],
            [{
                "lblSegHdr": "Tools Enhancements"
            }, [{
                "lblSegRow": "Masters"
            }, {
                "lblSegRow": "Undo and Redo"
            }, {
                "lblSegRow": "Property Editor Font Selection"
            }, {
                "lblSegRow": "Copy and Paste a Color"
            }, {
                "lblSegRow": "Border Property Control"
            }, {
                "lblSegRow": "Fit to Parent"
            }, {
                "lblSegRow": "i18n Keys Import and Export"
            }, {
                "lblSegRow": "App Canvas Focus"
            }, {
                "lblSegRow": "Retain properties in Code view"
            }]]
        ],
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
        "onTouchEnd": AS_Image_a4a0619cf5c94e33a920114c1c5fec49,
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
    var cam = new kony.ui.Camera({
        "captureMode": constants.CAMERA_CAPTURE_MODE_VIDEO,
        "centerX": "50%",
        "height": "50dp",
        "id": "cam",
        "isVisible": true,
        "left": "128dp",
        "onCapture": AS_Camera_7db2869e1983432c97b55c18505d3800,
        "skin": "sknCam",
        "text": "Camera",
        "top": "15%",
        "width": "80%",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "accessMode": constants.CAMERA_IMAGE_ACCESS_MODE_PUBLIC,
        "enableOverlay": true,
        "enablePhotoCropFeature": false,
        "overlayConfig": {
            "captureButtonText": "",
            "startVideoButtonText": "Start",
            "stopVideoButtonText": "Stop",
            "overlayForm": frmOverlay,
            "timerControlSkin": "sknCamTimerControl",
            "startVideoButtonSkin": "sknCamStart",
            "stopVideoButtonSkin": "sknCamStop",
            "tapAnywhere": false
        }
    });
    var videoWiget = new kony.ui.Video({
        "centerX": "50%",
        "centerY": "60%",
        "height": "320dp",
        "id": "videoWiget",
        "isVisible": false,
        "left": "20dp",
        "skin": "slVideo",
        "text": "Video",
        "top": "241dp",
        "width": "100%",
        "zIndex": 1,
        "controls": true,
        "poster": "defvideoposter.png",
        "volume": 1
    }, {
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    flexMainContent.add(
    flexHeader, flexFooter, cam, videoWiget);
    frmCamera.add(
    flexHamburgerMenu, flexMainContent);
};

function frmCameraGlobals() {
    frmCamera = new kony.ui.Form2({
        "addWidgets": addWidgetsfrmCamera,
        "enabledForIdleTimeout": false,
        "id": "frmCamera",
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