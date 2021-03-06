function addWidgetsfrmDashboard() {
    frmDashboard.setDefaultUnit(kony.flex.DP);
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
        "onRowClick": AS_Segment_54727554846b4b2f8b3c26d240da6802,
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
        "onTouchEnd": AS_Image_b7ba8717b8c34f5d9c33f3d5b2968924,
        "src": "menu.png",
        "top": "0dp",
        "width": "50dp",
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
    var browserDashboard = new kony.ui.Browser({
        "detectTelNumber": true,
        "enableZoom": true,
        "height": "85%",
        "id": "browserDashboard",
        "isVisible": true,
        "left": "0dp",
        "requestURLConfig": {
            "URL": "http://community.kony.com/documentation",
            "requestMethod": constants.BROWSER_REQUEST_METHOD_GET
        },
        "top": "10%",
        "width": "100%",
        "zIndex": 1
    }, {}, {});
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
    flexHeader, browserDashboard, flexFooter);
    frmDashboard.add(
    flexHamburgerMenu, flexMainContent);
};

function frmDashboardGlobals() {
    frmDashboard = new kony.ui.Form2({
        "addWidgets": addWidgetsfrmDashboard,
        "enabledForIdleTimeout": false,
        "id": "frmDashboard",
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