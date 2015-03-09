var listwin = function(_data, _title){
    var tableView = Ti.UI.createTableView({
        objName: 'table',
    	backgroundColor: "orange"
    });
    
    var tableData = [];
    for(var i = 0; i < _data.length; i++){
        var row = Ti.UI.createTableViewRow({
            objName: 'listwinRow',
            rowIndex: i,
            title: _data[i],
            hasChild: 'true',
            color: 'white',
            font: {
            	fontSize: '20'
            }
        });
        tableData.push(row);
    }
    
    tableView.setData(tableData);
    tableView.addEventListener('click', function(e){
        if(e.source.objName == 'listwinRow'){
            var row = e.source;
            var Detail = require('ui/detail');
            var detail = new Detail(row.title, row.title);
            detail.open();
        }
    });
    
    // var self = Ti.UI.createWindow({
        // title: _title,
        // layout: 'absolute',
        // table: tableView
    // });
    // self.add(tableView);
    // return self;
    return tableView;
};

module.exports = listwin;
