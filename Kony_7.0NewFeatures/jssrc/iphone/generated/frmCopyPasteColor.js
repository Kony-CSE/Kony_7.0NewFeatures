function addWidgetsfrmCopyPasteColor() {
    frmCopyPasteColor.setDefaultUnit(kony.flex.DP);
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
        "onRowClick": AS_Segment_af1a5ad656c0491494ecc1e14c5b5b2b,
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
    }, {
        "bounces": true,
        "editStyle": constants.SEGUI_EDITING_STYLE_NONE,
        "enableDictionary": false,
        "indicator": constants.SEGUI_ROW_SELECT,
        "progressIndicatorColor": constants.PROGRESS_INDICATOR_COLOR_WHITE,
        "showProgressIndicator": true
    });
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
        "id": "flexHeader",
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "10%",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "0dp",
        "skin": "sknFlex1",
        "top": "0dp",
        "width": "100%"
    }, {}, {});
    flexHeader.setDefaultUnit(kony.flex.DP);
    var imgHamburgerMenu = new kony.ui.Image2({
        "id": "imgHamburgerMenu",
        "onTouchEnd": AS_Image_53317d6629bc45838dd8b4e2c039b878,
        "centerY": "50%",
        "height": "45dp",
        "isVisible": true,
        "left": "10dp",
        "skin": "slImage",
        "src": "menu.png",
        "top": "0dp",
        "width": "40dp"
    }, {
        "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    var imgLogo = new kony.ui.Image2({
        "id": "imgLogo",
        "centerX": "50%",
        "centerY": "50%",
        "height": "35dp",
        "isVisible": true,
        "left": "157dp",
        "skin": "slImage",
        "src": "konylogo.png",
        "top": "0dp",
        "width": "100dp",
        "zIndex": 1
    }, {
        "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    flexHeader.add(
    imgHamburgerMenu, imgLogo);
    var video = new kony.ui.Video({
        "centerX": "50%",
        "centerY": "50%",
        "height": "75%",
        "id": "video",
        "isVisible": true,
        "skin": "slVideo",
        "source": {
            "mp4": "media4.mp4"
        },
        "text": "Video",
        "width": "90%",
        "zIndex": 1,
        "controls": true,
        "poster": "defvideoposter.png",
        "volume": 1
    }, {
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    var flexFooter = new kony.ui.FlexContainer({
        "id": "flexFooter",
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "bottom": 0,
        "clipBounds": true,
        "height": "8%",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "0dp",
        "skin": "sknFlex1",
        "width": "100%"
    }, {}, {});
    flexFooter.setDefaultUnit(kony.flex.DP);
    var rtxFooter = new kony.ui.RichText({
        "id": "rtxFooter",
        "height": "100%",
        "isVisible": true,
        "left": "0dp",
        "skin": "sknRtx1",
        "text": "© Copyright 2015 Kony, Inc. All rights reserved. ",
        "top": "0dp",
        "width": "100%"
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_BOTTOM_LEFT,
        "padding": [1, 1, 0, 2],
        "paddingInPixel": false
    }, {
        "wrapping": constants.WIDGET_TEXT_WORD_WRAP
    });
    flexFooter.add(
    rtxFooter);
    flexMainContent.add(
    flexHeader, video, flexFooter);
    frmCopyPasteColor.add(
    flexHamburgerMenu, flexMainContent);
};

function frmCopyPasteColorGlobals() {
    frmCopyPasteColor = new kony.ui.Form2({
        "addWidgets": addWidgetsfrmCopyPasteColor,
        "enabledForIdleTimeout": false,
        "id": "frmCopyPasteColor",
        "init": AS_Form_5b84a59eed8f4778b621d94f01a8931f,
        "layoutType": kony.flex.FREE_FORM,
        "needAppMenu": false,
        "skin": "sknFrm1"
    }, {
        "displayOrientation": constants.FORM_DISPLAY_ORIENTATION_BOTH,
        "layoutType": kony.flex.FREE_FORM,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "configureExtendBottom": false,
        "configureExtendTop": false,
        "configureStatusBarStyle": false,
        "footerOverlap": false,
        "formTransparencyDuringPostShow": "100",
        "headerOverlap": false,
        "inputAccessoryViewType": constants.FORM_INPUTACCESSORYVIEW_CANCEL,
        "needsIndicatorDuringPostShow": false,
        "retainScrollPosition": false,
        "titleBar": false,
        "titleBarSkin": "slTitleBar"
    });
};