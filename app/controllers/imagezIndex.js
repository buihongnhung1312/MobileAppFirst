    
var image1 = Ti.UI.createImageView({
    image: '/images/anhem.jpeg',
    height: 50,
    width: 50,
    top: 100,
    left: 10
});

var image2 = Ti.UI.createImageView({
    image: '/images/1.png',
    height: 50,
    width: 50,
    top: 150,
    left: 50
});

var image3 = Ti.UI.createImageView({
    image: '/images/2.png',
    height: 50,
    width: 50,
    top: 200,
    left: 90
});

var image4 = Ti.UI.createImageView({
    image: '/images/3.png',
    height: 50,
    width: 50,
    top: 250,
    left: 130
});

var label = Ti.UI.createLabel({
    text: 'Test something',
    title: 'Test title',
    color: 'red'
});

$.winImagezIndex.add(image1);
$.winImagezIndex.add(image2);
$.winImagezIndex.add(image3);
$.winImagezIndex.add(image4);

$.winImagezIndex.open();
