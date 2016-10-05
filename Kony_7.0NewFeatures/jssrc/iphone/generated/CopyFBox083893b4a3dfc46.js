function initializeCopyFBox083893b4a3dfc46() {
    CopyFBox083893b4a3dfc46 = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "40%",
        "id": "CopyFBox083893b4a3dfc46",
        "isVisible": true,
        "layoutType": kony.flex.FLOW_VERTICAL,
        "skin": "slFbox",
        "width": "100%"
    }, {}, {});
    CopyFBox083893b4a3dfc46.setDefaultUnit(kony.flex.DP);
    var lblOnSale = new kony.ui.Label({
        "id": "lblOnSale",
        "isVisible": true,
        "left": "0dp",
        "skin": "sknLbl3",
        "text": "Label",
        "top": "0dp",
        "width": "100%"
    }, {
        "containerWeight": 100,
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "hExpand": true,
        "margin": [1, 1, 1, 1],
        "marginInPixel": false,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false,
        "vExpand": false,
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER
    }, {
        "textCopyable": false,
        "wrapping": constants.WIDGET_TEXT_WORD_WRAP
    });
    var FlexContainer004ed871e4c6747 = new kony.ui.FlexContainer({
        "clipBounds": true,
        "height": "100%",
        "id": "FlexContainer004ed871e4c6747",
        "isVisible": true,
        "layoutType": kony.flex.FLOW_HORIZONTAL,
        "left": "0dp",
        "skin": "sknFlex9",
        "top": "0dp",
        "width": "100%",
        "zIndex": 1
    }, {}, {});
    FlexContainer004ed871e4c6747.setDefaultUnit(kony.flex.DP);
    var imgProduct = new kony.ui.Image2({
        "centerY": "50%",
        "id": "imgProduct",
        "isVisible": true,
        "left": 5,
        "right": 5,
        "skin": "slImage075c75e2d76524a",
        "src": "imagedrag.png",
        "width": "40%"
    }, {
        "containerWeight": 100,
        "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
        "margin": [0, 0, 0, 0],
        "marginInPixel": false,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false,
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER
    }, {});
    var flexContainerForProductDetails = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
        "clipBounds": true,
        "id": "flexContainerForProductDetails",
        "isVisible": true,
        "layoutType": kony.flex.FLOW_VERTICAL,
        "left": "0dp",
        "skin": "sknFlex9",
        "top": "0dp",
        "width": "59.94%",
        "zIndex": 1
    }, {}, {});
    flexContainerForProductDetails.setDefaultUnit(kony.flex.DP);
    var lblProductName = new kony.ui.Label({
        "id": "lblProductName",
        "isVisible": true,
        "left": "0dp",
        "skin": "sknLbl2",
        "text": "Label",
        "top": "5dp",
        "width": "90%"
    }, {
        "containerWeight": 100,
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "hExpand": true,
        "margin": [1, 1, 1, 1],
        "marginInPixel": false,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false,
        "vExpand": false,
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER
    }, {
        "textCopyable": false,
        "wrapping": constants.WIDGET_TEXT_WORD_WRAP
    });
    var lblProductPrice = new kony.ui.Label({
        "id": "lblProductPrice",
        "isVisible": true,
        "left": "0dp",
        "skin": "sknLbl4",
        "text": "Label",
        "top": "10dp",
        "width": kony.flex.USE_PREFFERED_SIZE,
        "zIndex": 1
    }, {
        "containerWeight": 100,
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "hExpand": true,
        "margin": [1, 1, 1, 1],
        "marginInPixel": false,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false,
        "vExpand": false,
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER
    }, {
        "textCopyable": false,
        "wrapping": constants.WIDGET_TEXT_WORD_WRAP
    });
    var lblProductRating = new kony.ui.Label({
        "id": "lblProductRating",
        "isVisible": true,
        "left": "0dp",
        "skin": "sknLbl2",
        "text": "Label",
        "top": "10dp",
        "width": kony.flex.USE_PREFFERED_SIZE,
        "zIndex": 1
    }, {
        "containerWeight": 100,
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "hExpand": true,
        "margin": [1, 1, 1, 1],
        "marginInPixel": false,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false,
        "vExpand": false,
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER
    }, {
        "textCopyable": false,
        "wrapping": constants.WIDGET_TEXT_WORD_WRAP
    });
    flexContainerForProductDetails.add(
    lblProductName, lblProductPrice, lblProductRating);
    FlexContainer004ed871e4c6747.add(
    imgProduct, flexContainerForProductDetails);
    CopyFBox083893b4a3dfc46.add(
    lblOnSale, FlexContainer004ed871e4c6747);
}