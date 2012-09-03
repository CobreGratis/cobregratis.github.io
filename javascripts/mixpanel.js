function S4() {
   return (((1+Math.random())*0x10000)|0).toString(16).substring(1);
}
function guid() {
   return (S4()+S4()+"-"+S4()+"-"+S4()+"-"+S4()+"-"+S4()+S4()+S4());
}

function get_visitor_guid() {
	options = {
		expires: 365, // days = 1 year
		path: '/',
		secure: false,
		domain: '.cobregratis.com.br'
	}
	visitor_guid = $.cookie('cobregratis_visitor_guid');
	if(!visitor_guid) {
		visitor_guid = guid();
		$.cookie('cobregratis_visitor_guid', visitor_guid, options);
	}
	return visitor_guid;
}