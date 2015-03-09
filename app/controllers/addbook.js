var mybooks = Alloy.Collections.book;

function addbook() {
    var book = Alloy.createModel('book', {
        title : $.titleInput.value,
        author : $.authorInput.value
    });
    
    
    if (book.isValid() && book.customProperty == "book") {
 // Save data to persistent storage
        mybooks.add(book);
        book.save();       
    }
    else {
        book.destroy();
    }
    
    $.addbook.close();
 // Close the window.
    
}