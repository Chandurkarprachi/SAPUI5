sap.ui.define([
	"root/controller/BaseController",
	'sap/m/MessageToast',
	'sap/ui/model/json/JSONModel',
	'sap/m/PDFViewer'
], function(BaseController,MessageToast,JSONModel,PDFViewer) {
	"use strict";

	return BaseController.extend("root.controller.View2", {
		onInit: function() {
            this.oRouter = this.getOwnerComponent().getRouter();
            //We need a method which is triggered EVERYTIME route changes
            this.oRouter.getRoute("View2").attachMatched(this.herculis, this);
            
            this._sValidPath =  sap.ui.require.toUrl("root/Image/sample.pdf");
			this._oModel = new JSONModel({ Source: this._sValidPath, Title: "My Custom Title", Height: "500px"

});

this.getView().setModel(this._oModel);


		},
        herculis:function(){
             this.getView().getModel();
            //MessageToast.show("herculis is called");
        },
        
		onBack: function(){
           	history.go(-1);
        }
	});
});