/* Magic Mirror
 * Module: MMM-TMWidget
 *
 * By Mykle1 - MIT Licensed
 *
 */

Module.register("MMM-TMWidget",{

	defaults: {
		apikey: "",
		keyword: "",
		height: "",
		width: "",
		latlong: "",
			animationSpeed: 3000,
			updateInterval: 15 * 60 * 1000,
	},


	start: function () {
	self = this;

	// update timer
	setInterval(function() {
	self.updateDom(self.config.animationSpeed || 0);
	}, this.config.updateInterval);
},


	getStyles: function() {
        return ["MMM-TMWidget.css"];
    },

	getDom: function() {


	var getTimeStamp = new Date().getTime(); // to seed url so Dom/module refreshes


		var iframe = document.createElement("IFRAME");
		iframe.classList.add("iframe");
		iframe.style = "border:none";
		iframe.scrolling = "no";
		iframe.style.height = this.config.height;
		iframe.style.width = this.config.width;


		iframe.srcdoc = `<div w-type="event-discovery" w-tmapikey="${this.config.apikey}" w-googleapikey="YOUR_GOOGLE_API_KEY" w-keyword="${this.config.keyword}" w-theme="simple" w-colorscheme="custom" w-width="350" w-height="600" w-size="100" w-border="0" w-borderradius="0" w-radius="50" w-period="year" w-layout="vertical" w-attractionid="" w-promoterid="" w-venueid="" w-affiliateid="" w-segmentid="" w-proportion="custom" w-titlelink="off" w-sorting="dateAscending" w-id="id_4q8tw6" w-source="" w-branding="" w-latlong="${this.config.latlong}" w-poweredbybackgroundcolor="#000000" w-bordercolor="#000000" w-descriptioncolor="#ffffff"></div>
		<script src="https://ticketmaster-api-staging.github.io/products-and-docs/widgets/event-discovery/1.0.0/lib/main-widget.js"></script>`;


		return iframe;
	},

});
