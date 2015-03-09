var listwin = function(_data, _title){
    var tableView = Ti.UI.createTableView({
        objName: 'table',
        font: { 
       		fontSize: '20' 
    	}, 
    	height: '40',
    	color: "lime"
    });
    
    var tableData = [];
    for(var i = 0; i < _data.length; i++){
        var row = Ti.UI.createTableViewRow({
            objName: 'listwinRow',
            rowIndex: i,
            title: _data[i]
        });
        tableData.push(row);
    }
    
    tableView.setData(tableData);
    tableView.addEventListener('click', function(e){
        if(e.source.objName == 'listwinRow'){
            var row = e.source;
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
