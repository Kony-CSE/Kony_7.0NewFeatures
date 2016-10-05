//startup.js file
var globalhttpheaders = {};
var appConfig = {
    appId: "DeltaTraining70",
    appName: "DeltaTraining70",
    appVersion: "1.0.0",
    platformVersion: null,
    serverIp: "10.10.27.36",
    serverPort: "80",
    secureServerPort: "443",
    isDebug: false,
    middlewareContext: "DeltaTraining70",
    isMFApp: false,
    eventTypes: ["FormEntry", "ServiceRequest", "Error", "Crash"],
    url: "https://training.konycloud.com/DeltaTraining70/MWServlet",
    secureurl: "https://training.konycloud.com/DeltaTraining70/MWServlet"
};
sessionID = "";

function appInit(params) {
    skinsInit();
    kony.application.setCheckBoxSelectionImageAlignment(constants.CHECKBOX_SELECTION_IMAGE_ALIGNMENT_RIGHT);
    kony.application.setDefaultTextboxPadding(false);
    kony.application.setRespectImageSizeForImageWidgetAlignment(true);
    initializeCopyFBox083893b4a3dfc46();
    initializetplSegHdr();
    initializetplSegRow();
    frm3DTransformationsGlobals();
    frmAppCanvasFocusGlobals();
    frmBorderPropertyControlGlobals();
    frmCameraGlobals();
    frmCopyPasteColorGlobals();
    frmDashboardGlobals();
    frmFitToParentGlobals();
    frmi18KeysImportExportGlobals();
    frmMapGlobals();
    frmOverlayGlobals();
    frmPropertyEditorFontSelectionGlobals();
    frmPropertyEditorSkinSelectionGlobals();
    frmRetainSelectedWidgetPropertiesGlobals();
    frmSegmentGlobals();
    frmTouchIDGlobals();
    frmUndoRedoInVizGlobals();
    setAppBehaviors();
};

function setAppBehaviors() {
    kony.application.setApplicationBehaviors({
        applyMarginPaddingInBCGMode: false,
        adherePercentageStrictly: true,
        retainSpaceOnHide: true,
        marginsIncludedInWidgetContainerWeight: true,
        APILevel: 7000
    })
};

function themeCallBack() {
    callAppMenu();
    initializeGlobalVariables();
    kony.application.setApplicationInitializationEvents({
        init: appInit,
        showstartupform: function() {
            frmDashboard.show();
        }
    });
};

function loadResources() {
    globalhttpheaders = {};
    sdkInitConfig = {
        "appConfig": appConfig,
        "isMFApp": appConfig.isMFApp,
        "eventTypes": appConfig.eventTypes,
    }
    kony.setupsdks(sdkInitConfig, onSuccessSDKCallBack, onSuccessSDKCallBack);
};

function onSuccessSDKCallBack() {
    kony.theme.setCurrentTheme("default", themeCallBack, themeCallBack);
}
kony.application.setApplicationMode(constants.APPLICATION_MODE_NATIVE);
//If default locale is specified. This is set even before any other app life cycle event is called.
loadResources();
kony.print = function() {
    return;
};