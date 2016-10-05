/**
 * @module solutionCode
 *
 * @author Venkata Raju Bankapalli <venkata.bankapalli@kony.com>
 */

/**
 * @function showHamburgerMenu
 *
 */
function showHamburgerMenu ()
{
  var currentForm = kony.application.getCurrentForm();
  
  var animationObj = {100 : { "left":"0%" }};  
  var animationConfigObj = {"duration":0.25,"iterationCount":1,"delay":0,"direction":kony.anim.DIRECTION_NONE,"fillMode":kony.anim.FILL_MODE_FORWARDS};  
  var animationCallbackObj = {"animationEnd":function (){}};  

  var animationObj1 = {100 : { "left":"75%" }};  
  var animationConfigObj1 = {"duration":0.25,"iterationCount":1,"delay":0,"direction":kony.anim.DIRECTION_NONE,"fillMode":kony.anim.FILL_MODE_FORWARDS};  
  var animationCallbackObj1 = {"animationEnd":function (){}};  

  currentForm.flexHamburgerMenu.animate(kony.ui.createAnimation(animationObj),animationConfigObj,animationCallbackObj);
  currentForm.flexMainContent.animate(kony.ui.createAnimation(animationObj1),animationConfigObj1,animationCallbackObj1);
}

/**
 * @function closeHamburgerMenu
 *
 */
function closeHamburgerMenu ()
{
  var currentForm = kony.application.getCurrentForm();
  
  var animationObj = {100 : { "left":"-100%" }};  
  var animationConfigObj = {"duration":0.25,"iterationCount":1,"delay":0,"direction":kony.anim.DIRECTION_NONE,"fillMode":kony.anim.FILL_MODE_FORWARDS};
  var animationCallbackObj = {"animationEnd":function (){}};

  var animationObj1 = {100 : { "left":"0%" }};  
  var animationConfigObj1 = {"duration":0.25,"iterationCount":1,"delay":0,"direction":kony.anim.DIRECTION_NONE,"fillMode":kony.anim.FILL_MODE_FORWARDS};
  var animationCallbackObj1 = {"animationEnd":function (){}};
  
  currentForm.flexHamburgerMenu.animate(kony.ui.createAnimation(animationObj),animationConfigObj,animationCallbackObj);  
  currentForm.flexMainContent.animate(kony.ui.createAnimation(animationObj1),animationConfigObj1,animationCallbackObj1);  
  
  if ("Map" == currentForm.segHamburgerMenu.selectedRowItems[0].lblSegRow)
    {
      frmMap.show();
    }
  else if ("Segment" == currentForm.segHamburgerMenu.selectedRowItems[0].lblSegRow)
    {
      frmSegment.show();
    }
  else if ("Camera & Video" == currentForm.segHamburgerMenu.selectedRowItems[0].lblSegRow)
    {
      frmCamera.show();
    }
  else if ("3D Transformations" == currentForm.segHamburgerMenu.selectedRowItems[0].lblSegRow)
    {
      frm3DTransformations.show();
    }
  else if ("Undo and Redo" == currentForm.segHamburgerMenu.selectedRowItems[0].lblSegRow)
    {
      frmUndoRedoInViz.show();
    }
  else if ("Property Editor Font Selection" == currentForm.segHamburgerMenu.selectedRowItems[0].lblSegRow)
    {
      frmPropertyEditorFontSelection.show();
    }
  else if ("Copy and Paste a Color" == currentForm.segHamburgerMenu.selectedRowItems[0].lblSegRow)
    {
      frmCopyPasteColor.show();
    }
  else if ("Border Property Control" == currentForm.segHamburgerMenu.selectedRowItems[0].lblSegRow)
    {
      frmBorderPropertyControl.show();
    }
  else if ("Fit to Parent" == currentForm.segHamburgerMenu.selectedRowItems[0].lblSegRow)
    {
      frmFitToParent.show();
    }
  else if ("i18n Keys Import and Export" == currentForm.segHamburgerMenu.selectedRowItems[0].lblSegRow)
    {
      frmi18KeysImportExport.show();
    }
  else if ("App Canvas Focus" == currentForm.segHamburgerMenu.selectedRowItems[0].lblSegRow)
    {
      frmAppCanvasFocus.show();
    }
  else if ("Retain properties in Code view" == currentForm.segHamburgerMenu.selectedRowItems[0].lblSegRow)
    {
      frmRetainSelectedWidgetProperties.show();
    }
  else if ("Authenticate Using TouchID" == currentForm.segHamburgerMenu.selectedRowItems[0].lblSegRow)
    {
		//#ifdef iphone
      		frmTouchID.show();
      	//#else 
      		frmDashboard.show();
      		alert ("Local Authentication Using TouchID is available only in iOS platform");
      	//#endif
    }
}

/**
 * @function
 *
 */
function callbackAnimation()
{
  var animationObject = kony.ui.createAnimation({
    "0":{"top":"10dp","stepConfig":{"timingFunction":kony.anim.LINEAR}},
    "100":{"top":"5dp","stepConfig":{"timingFunction":kony.anim.LINEAR}}
  });
  var animationConfig = {duration: 0.5,"iterationCount":2,"direction":kony.anim.DIRECTION_ALTERNATE,fillMode: kony.anim.FILL_MODE_BACKWARDS};
  var animationCallbacks = {"animationEnd":function(){}};
  var animationDefObject={definition:animationObject,config:animationConfig,callbacks:animationCallbacks};
  var row1 = {sectionIndex: 0,rowIndex: 1};
  var rowList = [row1];

  frmSegment.segCategories.animateRows({rows: rowList,widgets: ["lblProductPrice"],animation: animationDefObject });
}

/**
 * @function animateTheLabelInsideRow
 *
 */
function animateTheLabelInsideRow(widget, gestureInfo,context){
  if (gestureInfo.swipeDirection == 1)
    {
      var animationObject = kony.ui.createAnimation({
                "0":{"top":"30dp","stepConfig":{"timingFunction":kony.anim.LINEAR}},
                "100":{"top":"10dp","stepConfig":{"timingFunction":kony.anim.LINEAR}}
              });
      var animationConfig = {duration: 0.5,"iterationCount":1,"direction":kony.anim.DIRECTION_NONE,fillMode: kony.anim.FILL_MODE_BACKWARDS};
      var animationCallbacks = {"animationEnd":function(){callbackAnimation();}};
      var animationDefObject={definition:animationObject,config:animationConfig,callbacks:animationCallbacks};
      var row1 = {sectionIndex: 0,rowIndex: 1};
      var rowList = [row1];

      frmSegment.segCategories.animateRows({rows: rowList,widgets: ["lblProductPrice"],animation: animationDefObject });
    }
}

function launchCamAndCaptureVideo (camera)
{
  alert (frmCamera.videoWiget);
  alert (camera);
  frmCamera.videoWiget.source = {"rawBytes": frmCamera.cam.rawBytes};
  frmCamera.videoWiget.setVisibility(true);
  frmCamera.show();
}

/**
 * @module solutionCode
 *
 * @author Venkata Raju Bankapalli <venkata.bankapalli@kony.com>
 */

/**
 * @function authenticateUsingTouchID
 *
 */
function authenticateUsingTouchID ()
{
	var config = {"promptMessage" : "Please Authenticate Using Your Touch ID"};
	kony.localAuthentication.authenticate(constants.LOCAL_AUTHENTICATION_MODE_TOUCH_ID, callBackForAuthenticateUsingTouchID, config);
  
  	/**
  	 * @function callBackForAuthenticateUsingTouchID
  	 *
  	 */
  	function callBackForAuthenticateUsingTouchID (status,message)
	{
      if(status == 5000)
       {
         frmSuccess.show();
         //kony.ui.Alert({message: "Authentication Successful !!!", alertType: constants.ALERT_TYPE_INFO, yesLabel:"Close"}, {});
       }
      else
       {
         var msg = status+" : "+message;
         kony.ui.Alert({message: msg, alertType: constants.ALERT_TYPE_INFO, yesLabel:"Close"}, {});
       }    
	}
}