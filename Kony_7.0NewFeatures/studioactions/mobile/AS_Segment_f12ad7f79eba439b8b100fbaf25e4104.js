function AS_Segment_f12ad7f79eba439b8b100fbaf25e4104(eventobject, sectionNumber, rowNumber) {
    AS_Segment_d1996d701659474996db6a2b17934fdb();
    if ((frm3DTransformations.segHamburgerMenu.selectedRowItems[0].lblSegRow.text == "Dashboard")) {
        frmDashboard.show();
    }
    if ((frm3DTransformations.segHamburgerMenu.selectedRowItems[0].lblSegRow.text == "Rotate on x-axis")) {
        var transformObject = kony.ui.makeAffineTransform();
        transformObject.setPerspective(500);
        transformObject.rotate3D(140, 1, 0, 0);
        var animationObject = kony.ui.createAnimation({
            "0": {
                "left": "0dp",
                "top": "0dp",
                "stepConfig": {
                    "timingFunction": kony.anim.LINEAR
                }
            },
            "100": {
                "transform": transformObject,
                "stepConfig": {
                    "timingFunction": kony.anim.LINEAR
                }
            }
        });
        var animationConfig = {
            duration: 5,
            iterationCount: 2,
            "direction": kony.anim.DIRECTION_ALTERNATE,
            fillMode: kony.anim.FILL_MODE_NONE
        };
        var animationCallbacks = {
            "animationEnd": function() {
                kony.print("animation END")
            }
        };
        frm3DTransformations.flex3DTransformation.animate(animationObject, animationConfig, animationCallbacks);
    }
    if ((frm3DTransformations.segHamburgerMenu.selectedRowItems[0].lblSegRow.text == "Rotate on y-axis")) {
        var transformObject = kony.ui.makeAffineTransform();
        transformObject.setPerspective(500);
        transformObject.rotate3D(140, 0, 1, 0);
        var animationObject = kony.ui.createAnimation({
            "0": {
                "left": "0dp",
                "top": "0dp",
                "stepConfig": {
                    "timingFunction": kony.anim.LINEAR
                }
            },
            "100": {
                "transform": transformObject,
                "stepConfig": {
                    "timingFunction": kony.anim.LINEAR
                }
            }
        });
        var animationConfig = {
            duration: 5,
            iterationCount: 2,
            "direction": kony.anim.DIRECTION_ALTERNATE,
            fillMode: kony.anim.FILL_MODE_NONE
        };
        var animationCallbacks = {
            "animationEnd": function() {
                kony.print("animation END")
            }
        };
        frm3DTransformations.flex3DTransformation.animate(animationObject, animationConfig, animationCallbacks);
    }
    if ((frm3DTransformations.segHamburgerMenu.selectedRowItems[0].lblSegRow.text == "Move on z-axis")) {
        var transformObject = kony.ui.makeAffineTransform();
        transformObject.setPerspective(500);
        transformObject.translate3D(0, 0, 50);
        var animationObject = kony.ui.createAnimation({
            "100": {
                "transform": transformObject,
                "stepConfig": {
                    "timingFunction": kony.anim.LINEAR
                }
            }
        });
        var animationConfig = {
            duration: 5,
            iterationCount: 2,
            "direction": kony.anim.DIRECTION_ALTERNATE,
            fillMode: kony.anim.FILL_MODE_NONE
        };
        var animationCallbacks = {
            "animationEnd": function() {
                kony.print("animation END")
            }
        };
        frm3DTransformations.flex3DTransformation.animate(animationObject, animationConfig, animationCallbacks);
    }
    if ((frm3DTransformations.segHamburgerMenu.selectedRowItems[0].lblSegRow.text == "Scale on z-axis")) {
        var transformObject = kony.ui.makeAffineTransform();
        transformObject.setPerspective(500);
        transformObject.scale3D(0, 0, 50);
        var animationObject = kony.ui.createAnimation({
            "100": {
                "transform": transformObject,
                "stepConfig": {
                    "timingFunction": kony.anim.LINEAR
                }
            }
        });
        var animationConfig = {
            duration: 5,
            iterationCount: 2,
            "direction": kony.anim.DIRECTION_ALTERNATE,
            fillMode: kony.anim.FILL_MODE_NONE
        };
        var animationCallbacks = {
            "animationEnd": function() {
                kony.print("animation END")
            }
        };
        frm3DTransformations.flex3DTransformation.animate(animationObject, animationConfig, animationCallbacks);
    }
}