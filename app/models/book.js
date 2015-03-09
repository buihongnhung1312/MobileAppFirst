exports.definition = {
	config: {
		columns: {
		    "id": "INTEGER PRIMARY KEY AUTOINCREMENT",
		    "title": "text",
		    "author": "text"
		},
		adapter: {
			type: "sql",
			collection_name: "book"
		}
	},
	extendModel: function(Model) {
		_.extend(Model.prototype, {
			
			validate: function (attrs) {
                for (var key in attrs) {
                    var value = attrs[key];
                    if(key === "title"){
                        if(value.length <= 0){
                            return "Error: No title !";
                        }
                    }
                    if(key === "author"){
                        if(value.length <= 0){
                            return "Error: No author !";
                        }
                    }
                }
            },
            
            customProperty: 'book',
            customFunction: function() {
                Ti.API.info('I am a book model.');
            },
			
			// extended functions and properties go here
		});

		return Model;
	},
	extendCollection: function(Collection) {
		_.extend(Collection.prototype, {
			// extended functions and properties go here
		});

		return Collection;
	}
};