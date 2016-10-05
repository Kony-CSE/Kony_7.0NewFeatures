function AS_Segment_4951ca52ebb74f28b397a6872672fb34(eventobject, sectionNumber, rowNumber) {
    AS_Segment_d1996d701659474996db6a2b17934fdb(null, null, null);
    if ((frmSegment.segHamburgerMenu.selectedRowItems[0].lblSegRow.text == "Widget level (scale)")) {
        function scaleAnimationOnSegment() {
            var transformObject1 = kony.ui.makeAffineTransform();
            var transformObject2 = kony.ui.makeAffineTransform();
            transformObject1.scale(0, 0);
            transformObject2.scale(1, 1);
            var animationObject = kony.ui.createAnimation({
                "0": {
                    "transform": transformObject1,
                    "stepConfig": {
                        "timingFunction": kony.anim.LINEAR
                    }
                },
                "100": {
                    "transform": transformObject2,
                    "stepConfig": {
                        "timingFunction": kony.anim.LINEAR
                    }
                }
            });
            var animationConfig = {
                duration: 1,
                fillMode: kony.anim.FILL_MODE_FORWARDS
            };
            var animationCallbacks = {
                "animationEnd": function() {
                    kony.print("animation END")
                }
            };
            var animationDefObject = {
                definition: animationObject,
                config: animationConfig,
                callbacks: animationCallbacks
            };
            frmSegment.segCategories.setAnimations({
                visible: animationDefObject
            });
        }
        scaleAnimationOnSegment();
    }
    if ((frmSegment.segHamburgerMenu.selectedRowItems[0].lblSegRow.text == "Widget level (move)")) {
        function translateAnimationOnSegment() {
            var transformObject1 = kony.ui.makeAffineTransform();
            var transformObject2 = kony.ui.makeAffineTransform();
            transformObject1.translate(200, 0);
            transformObject2.translate(0, 0);
            var animationObject = kony.ui.createAnimation({
                "0": {
                    "transform": transformObject1,
                    "stepConfig": {
                        "timingFunction": kony.anim.LINEAR
                    }
                },
                "100": {
                    "transform": transformObject2,
                    "stepConfig": {
                        "timingFunction": kony.anim.LINEAR
                    }
                }
            });
            var animationConfig = {
                duration: 1,
                fillMode: kony.anim.FILL_MODE_FORWARDS
            };
            var animationCallbacks = {
                "animationEnd": function() {
                    kony.print("animation END");
                }
            };
            var animationDefObject = {
                definition: animationObject,
                config: animationConfig,
                callbacks: animationCallbacks
            };
            frmSegment.segCategories.setAnimations({
                visible: animationDefObject
            });
        }
        translateAnimationOnSegment();
    }
    if ((frmSegment.segHamburgerMenu.selectedRowItems[0].lblSegRow.text == "Row level")) {
        frmSegment.segCategories.setGestureRecognizer(2, {
            fingers: 1,
            swipedistance: 50,
            swipevelocity: 75
        }, animateTheLabelInsideRow);
    }
    if ((frmSegment.segHamburgerMenu.selectedRowItems[0].lblSegRow.text == "Dashboard")) {
        frmDashboard.show();
    }
}