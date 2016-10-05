function initializetplSegRow() {
    flexSegRow = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "45dp",
        "id": "flexSegRow",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "skin": "slFbox"
    }, {}, {});
    flexSegRow.setDefaultUnit(kony.flex.DP);
    var lblSegRow = new kony.ui.Label({
        "id": "lblSegRow",
        "isVisible": true,
        "left": "25dp",
        "skin": "sknLbl1",
        "top": "10dp",
        "width": "80%"
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_TOP_LEFT,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "textCopyable": false,
        "wrapping": constants.WIDGET_TEXT_WORD_WRAP
    });
    flexSegRow.add(
    lblSegRow);
}