sap.ui.define([
    'root/controller/BaseController'
], function(BaseController) {
    'use strict';
    return BaseController.extend("root.controller.App",{
        onInit: function(){
            console.log("Hey folks!! the App Controller is ready Now");
        }
    });
});