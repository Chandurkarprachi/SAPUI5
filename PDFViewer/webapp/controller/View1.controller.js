sap.ui.define([
	"root/controller/BaseController",
		"sap/m/PDFViewer"
], function(BaseController,PDFViewer) {
	"use strict";
	return BaseController.extend("root.controller.View1", {
		onInit: function() {
		},
		onNext: function() {
			var oRouter = sap.ui.core.UIComponent.getRouterFor(this);
			oRouter.navTo("View2");
		},
		showPDF:function(){
			var opdfViewer = new PDFViewer();
			this.getView().addDependent(this._pdfViewer);

	    	
			var Url = sap.ui.require.toUrl("root/Image/sample.pdf");
            //var url=sap.ui.require.toUrl("webapp/Image/sample.pdf");
			//var Url =  sap.ui.require.toUrl("sap/m/sample/PDFViewerEmbedded/Image/sample.pdf");
			
			opdfViewer.setSource(Url);
			opdfViewer.setTitle("My PDF");
			opdfViewer.open();	

		}
	});
});