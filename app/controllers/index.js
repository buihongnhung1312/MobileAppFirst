// create model

// var myBooks = Alloy.Collections.book;
// var book = Alloy.createModel('book', {title:'Green Eggs and Ham', author:'Dr. Seuss'});
// myBooks.add(book); 
// book.save();


// create button
var button = Ti.UI.createButton({
	title: 'Click me !'
});

// create the alert and alert's event
var alert = Ti.UI.createAlertDialog({
	title: 'Delete selected !',
	message: 'You can not get it back!',
	buttonNames: ['Something','Cancel','OK']
});

alert.addEventListener('click', function(e){
	Ti.API.info(e.index);
});


button.addEventListener('click', function(e){
// show on console
	Ti.API.info('Something is here ! ^_^');
	Ti.API.info('width: ' + Ti.Platform.displayCaps.platformWidth);
	Ti.API.info('height: ' + Ti.Platform.displayCaps.platformHeight);
// 	 alert window	
	alert.show();
});

// $.btnAddbook.addEventListener('click', function(e){
// // 	 alert window	
	// alert.show();
// });

// $.tbg.setBadge($.tbg.badgeCount++);

$.index.open();

Alloy.Collections.book.fetch();

function createWeb(){
	var window = Ti.UI.createWindow({
		backgroundColor: 'yellow'
	});
	var web = Ti.UI.createWebView({
		url: 'http://www.google.com'
	});
	
	window.add(web);
	
	if (OS_IOS) {
        $.navGroupWin.openWindow(myAddBook);
    }
	if (OS_ANDROID) {
        window.open();
    }
	
}

function addBook(){
	var myaddBook = Alloy.createController('addbook', {}).getView();

    myaddBook.open();
    // alert('blabla bla');

}

function deleteAll(event){
	
	var bookCollection = Alloy.createCollection('book');
 
	// bookCollection.map(function (event) {
    	// event.destroy();
	// });
// 	
	while(bookCollection.length) { 
    	bookCollection.at(0).destroy(); 
	}
}


function proceedFile()
{
// 	Ghi file hongnhung.txt
	var f = Ti.Filesystem.getFile(Ti.Filesystem.applicationDataDirectory,'hongnhung.txt');
    var str = [{ name:"Name 1", author:"1 Main St"}, {name:"Name 2", author:"2 Main St"}, {name:"Name 3", author:"3 Main St"}, {name:"Name 4", author:"4 Main St"}, {name:"Name 5", author:"5 Main St"}, {name:"Name 6", author:"6 Main St"}, {name:"Name 7", author:"7 Main St"}, {name:"Name 8", author:"8 Main St"}];
    f.write(JSON.stringify(str));
    
//     Đọc file hongnhung.txt
    // var r = Ti.Filesystem.getFile(Ti.Filesystem.applicationDataDirectory,'hongnhung.txt');
    var contents = f.read();
    
    var contentjson = JSON.parse(contents);
    
    // $.txtreadFile.text = contents;
    $.txtreadFile.text = "";
    for (var i=0; i < contentjson.length; i++) {
      $.txtreadFile.text += contentjson[i].name + '\n';
    };
    
    Ti.API.info(contentjson[0].name);
    
        //     Tạo arr chứa dữ liệu lấy từ model
    // var args = [];
//     
    // for (var i=0; i < contentjson.length; i++) {
    	// args.push(contentjson[i].name);
    // };
    

    
	
	// var myRead = Alloy.createController("readjson",args).getView();
	// myRead.open();
}

function createwebView(){
	var win = Ti.UI.createWindow();
	var webview = Ti.UI.createWebView({
    	url: 'http://www.google.com',
	});
	win.add(webview);
	win.open();
}

function detailsBook(event){
	var selectedBook = event.source;
	var args = 	{
		title: selectedBook.title,
		author: selectedBook.author
	};
	
	var bookview = Alloy.createController('detailsbook', args).getView();
	bookview.open();
}

function readJsonUrl(){
    // var win = Ti.UI.createWindow({
		// backgroundColor: "white"
	// });
	

	var datajson = [];
	
	var Table = require('ui/listwin');

	var label = Ti.UI.createLabel({
		color: "orange",
		font: {
			fontSize: '20'
		}
	});

// var nav = Ti.UI.iPhone.createNavigationGroup({});

// var nav = Ti.UI.MobileWeb.createNavigationGroup({});

	var xhr = Ti.Network.createHTTPClient();

// onload event handler

	xhr.onload = function(){

		var cities = JSON.parse(xhr.responseText);
	
		for(var i = 0; i < cities.length; i++){
			datajson.push(cities[i]);
			Ti.API.info(datajson[i]);
			// label.text += data[i] + '\n';
		}
		
		var table = new Table(datajson, 'Cities');
	// nav.window = table;
		// win.add(table);
		$.tab4.add(table);
		
	};

	xhr.onerror = function(){
		alert("Error reading data");
	};

	xhr.open("GET", "http://gd.geobytes.com/AutoCompleteCity?filter=US&q=plymouth");
	xhr.send();

	// win.add(label);

	// win.open();
}

// Function Image and zIndex
function imagezIndex(){
	var viewImage = Alloy.createController('imagezIndex', {}).getView();
	viewImage.open();
}

