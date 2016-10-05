function addWidgetsfrmOverlay() {
    frmOverlay.setDefaultUnit(kony.flex.DP);
    frmOverlay.add();
};

function frmOverlayGlobals() {
    frmOverlay = new kony.ui.Form2({
        "addWidgets": addWidgetsfrmOverlay,
        "enabledForIdleTimeout": false,
        "id": "frmOverlay",
        "layoutType": kony.flex.FREE_FORM,
        "needAppMenu": false,
        "skin": "sknFrm2"
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