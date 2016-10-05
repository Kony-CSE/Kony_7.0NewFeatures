function initializetplSegHdr() {
    flexSegHdr = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "40dp",
        "id": "flexSegHdr",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "skin": "sknFlex6"
    }, {}, {});
    flexSegHdr.setDefaultUnit(kony.flex.DP);
    var lblSegHdr = new kony.ui.Label({
        "id": "lblSegHdr",
        "isVisible": true,
        "left": "10dp",
        "skin": "sknLbl1",
        "textStyle": {
            "letterSpacing": 0,
            "strikeThrough": false
        },
        "top": "10dp",
        "width": kony.flex.USE_PREFFERED_SIZE
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "textCopyable": false
    });
    flexSegHdr.add(
    lblSegHdr);
}