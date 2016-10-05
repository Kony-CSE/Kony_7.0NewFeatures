function addWidgetsfrmSegment() {
    frmSegment.setDefaultUnit(kony.flex.DP);
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
                    "text": "Animations"
                },
                "lblSegRow": {}
            }, [{
                "lblSegRow": {
                    "@class": "com.viz.ide.model.segment.SimpleTextSegmentData",
                    "text": "Widget level (scale)"
                }
            }, {
                "lblSegRow": {
                    "@class": "com.viz.ide.model.segment.SimpleTextSegmentData",
                    "text": "Widget level (move)"
                }
            }, {
                "lblSegRow": {
                    "@class": "com.viz.ide.model.segment.SimpleTextSegmentData",
                    "text": "Row level"
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
        "onRowClick": AS_Segment_4951ca52ebb74f28b397a6872672fb34,
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
    var segCategories = new kony.ui.SegmentedUI2({
        "data": [{
            "imgProduct": "http://img.bbystatic.com/BestBuy_US/images/products/3611/3611269_s.gif",
            "lblOnSale": "",
            "lblProductName": "Coby - 32\" Class (31-1/2\" Diag.) - LED - 720p - HDTV - Black",
            "lblProductPrice": "$ 169.99",
            "lblProductRating": "Avg User Rating: 4.3"
        }, {
            "imgProduct": "http://img.bbystatic.com/BestBuy_US/images/products/3611/3611269_s.gif",
            "lblOnSale": "!!! ON SALE !!!",
            "lblProductName": "Dynex™ - 24\" Class (23-5/8\" Diag.) - LED - 720p - HDTV - Black",
            "lblProductPrice": "$ 349.99",
            "lblProductRating": ""
        }, {
            "imgProduct": "http://img.bbystatic.com/BestBuy_US/images/products/3611/3611269_s.gif",
            "lblOnSale": "!!! ON SALE !!!",
            "lblProductName": "Dynex™ - 32\" Class (31-1/2\" Diag.) - LED - 720p - HDTV - Black",
            "lblProductPrice": "$ 149.99",
            "lblProductRating": ""
        }, {
            "imgProduct": "http://img.bbystatic.com/BestBuy_US/images/products/3611/3611269_s.gif",
            "lblOnSale": "",
            "lblProductName": "Dynex™ - 48\" (47-5/8\" Diag.) - LED - 1080p - 60Hz - HDTV",
            "lblProductPrice": "$ 291.99",
            "lblProductRating": "Avg User Rating: 4.0"
        }, {
            "imgProduct": "http://img.bbystatic.com/BestBuy_US/images/products/3611/3611269_s.gif",
            "lblOnSale": "",
            "lblProductName": "Hisense - 55\" Class (54-5/8\" Diag.) - LED - 1080p - Smart - HDTV - Black",
            "lblProductPrice": "$ 349.99",
            "lblProductRating": "Avg User Rating: 4.2"
        }, {
            "imgProduct": "http://img.bbystatic.com/BestBuy_US/images/products/3611/3611269_s.gif",
            "lblOnSale": "!!! ON SALE !!!",
            "lblProductName": "Hisense - 50\" Class (49-1/2\" Diag.) - LED - 1080p - HDTV - Black",
            "lblProductPrice": "$ 1379.99",
            "lblProductRating": ""
        }, {
            "imgProduct": "http://img.bbystatic.com/BestBuy_US/images/products/3611/3611269_s.gif",
            "lblOnSale": "",
            "lblProductName": "Hisense - 40\" Class (40\" Diag.) - LED - 1080p - HDTV w/ Built in Roku TV",
            "lblProductPrice": "$ 299.99",
            "lblProductRating": "Avg User Rating: 4.3"
        }, {
            "imgProduct": "http://img.bbystatic.com/BestBuy_US/images/products/3611/3611269_s.gif",
            "lblOnSale": "",
            "lblProductName": "Dynex™ - 48\" (47-5/8\" Diag.) - LED - 1080p - 60Hz - HDTV",
            "lblProductPrice": "$ 239.99",
            "lblProductRating": "Avg User Rating: 3.0"
        }, {
            "imgProduct": "http://img.bbystatic.com/BestBuy_US/images/products/3611/3611269_s.gif",
            "lblOnSale": "",
            "lblProductName": "Dynex™ - 48\" (47-5/8\" Diag.) - LED - 1080p - 60Hz - HDTV",
            "lblProductPrice": "$ 699.99",
            "lblProductRating": "Avg User Rating: 4.0"
        }, {
            "imgProduct": "http://img.bbystatic.com/BestBuy_US/images/products/3611/3611269_s.gif",
            "lblOnSale": "!!! ON SALE !!!",
            "lblProductName": "Hisense - 50\" Class (49-1/2\" Diag.) - LED - 1080p - HDTV - Black",
            "lblProductPrice": "$ 429.99",
            "lblProductRating": ""
        }, {
            "imgProduct": "http://img.bbystatic.com/BestBuy_US/images/products/3611/3611269_s.gif",
            "lblOnSale": "",
            "lblProductName": "Hisense - 40\" Class (40\" Diag.) - LED - 1080p - HDTV w/ Built in Roku TV",
            "lblProductPrice": "$ 699.99",
            "lblProductRating": "Avg User Rating: 3.0"
        }, {
            "imgProduct": "http://img.bbystatic.com/BestBuy_US/images/products/3611/3611269_s.gif",
            "lblOnSale": "!!! ON SALE !!!",
            "lblProductName": "Dynex™ - 48\" (47-5/8\" Diag.) - LED - 1080p - 60Hz - HDTV",
            "lblProductPrice": "$ 429.99",
            "lblProductRating": ""
        }, {
            "imgProduct": "http://img.bbystatic.com/BestBuy_US/images/products/3611/3611269_s.gif",
            "lblOnSale": "",
            "lblProductName": "Coby - 32\" Class (31-1/2\" Diag.) - LED - 720p - HDTV - Black",
            "lblProductPrice": "$ 699.99",
            "lblProductRating": "Avg User Rating: 3.0"
        }, {
            "imgProduct": "http://img.bbystatic.com/BestBuy_US/images/products/3611/3611269_s.gif",
            "lblOnSale": "",
            "lblProductName": "Coby - 32\" Class (31-1/2\" Diag.) - LED - 720p - HDTV - Black",
            "lblProductPrice": "$ 239.99",
            "lblProductRating": "Avg User Rating: 4.0"
        }, {
            "imgProduct": "http://img.bbystatic.com/BestBuy_US/images/products/3611/3611269_s.gif",
            "lblOnSale": "",
            "lblProductName": "Hisense - 40\" Class (40\" Diag.) - LED - 1080p - HDTV w/ Built in Roku TV",
            "lblProductPrice": "$ 699.99",
            "lblProductRating": "Avg User Rating: 3.0"
        }, {
            "imgProduct": "http://img.bbystatic.com/BestBuy_US/images/products/3611/3611269_s.gif",
            "lblOnSale": "",
            "lblProductName": "Dynex™ - 48\" (47-5/8\" Diag.) - LED - 1080p - 60Hz - HDTV",
            "lblProductPrice": "$ 239.99",
            "lblProductRating": "Avg User Rating: 4.5"
        }, {
            "imgProduct": "http://img.bbystatic.com/BestBuy_US/images/products/3611/3611269_s.gif",
            "lblOnSale": "!!! ON SALE !!!",
            "lblProductName": "Hisense - 40\" Class (40\" Diag.) - LED - 1080p - HDTV w/ Built in Roku TV",
            "lblProductPrice": "$ 699.99",
            "lblProductRating": ""
        }],
        "groupCells": true,
        "height": "70%",
        "id": "segCategories",
        "isVisible": true,
        "left": "10dp",
        "needPageIndicator": true,
        "pageOffDotImage": "pageOffDot.png",
        "pageOnDotImage": "pageOnDot.png",
        "retainSelection": false,
        "right": "10dp",
        "rowSkin": "sknSeg2",
        "rowTemplate": CopyFBox083893b4a3dfc46,
        "scrollingEvents": {},
        "sectionHeaderSkin": "sliPhoneSegmentHeader",
        "selectionBehavior": constants.SEGUI_DEFAULT_BEHAVIOR,
        "separatorRequired": false,
        "showScrollbars": false,
        "top": "120dp",
        "viewType": constants.SEGUI_VIEW_TYPE_TABLEVIEW,
        "widgetDataMap": {
            "FlexContainer004ed871e4c6747": "FlexContainer004ed871e4c6747",
            "flexContainerForProductDetails": "flexContainerForProductDetails",
            "imgProduct": "imgProduct",
            "lblOnSale": "lblOnSale",
            "lblProductName": "lblProductName",
            "lblProductPrice": "lblProductPrice",
            "lblProductRating": "lblProductRating"
        },
        "zIndex": 1
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
        "onTouchEnd": AS_Image_40640c122c354ec0bfafcc94263d26f8,
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
        "padding": [1, 1, 0, 2],
        "paddingInPixel": false
    }, {
        "wrapping": constants.WIDGET_TEXT_WORD_WRAP
    });
    flexFooter.add(
    rtxFooter);
    flexMainContent.add(
    segCategories, flexHeader, flexFooter);
    frmSegment.add(
    flexHamburgerMenu, flexMainContent);
};

function frmSegmentGlobals() {
    frmSegment = new kony.ui.Form2({
        "addWidgets": addWidgetsfrmSegment,
        "enabledForIdleTimeout": false,
        "id": "frmSegment",
        "init": AS_Form_4d63025b6afc4abe939bb8c969bfa6d7,
        "layoutType": kony.flex.FREE_FORM,
        "needAppMenu": false,
        "skin": "sknFrm1"
    }, {
        "displayOrientation": constants.FORM_DISPLAY_ORIENTATION_PORTRAIT,
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