// var args = arguments[0] || {};
function readJsonUrl(){
var args = [];
var xhr = Ti.Network.createHTTPClient();
var win = Ti.UI.createWindow();
	
xhr.onload = function(){

	var cities = JSON.parse(xhr.responseText);
	
	for(var i = 0; i < cities.length; i++){
		args.push(cities[i]);
		Ti.API.info(args[i]);
	}
		
		// var table = new Table(data, 'Cities');
		// nav.window = table;
		// win.add(table);
};





var table = Ti.UI.createTableView({
  data: args
});


win.add(table);
win.open();
}