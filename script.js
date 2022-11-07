let library = [];

function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    if (read == true || read == 1 || read == 'yes') {
        this.read = true;
    } else {
        this.read = false;
    }
    this.info = () => {
        return `${this.title} by ${this.author}, ${this.pages} pages. Read = ${this.read}`
    }
}

function addBookToLibrary(title, author, pages, read) {
    library.push(new Book(title, author, pages, read))
}
//testing, automatically fills library array
addBookToLibrary('book1', 'guy', 100, true)
addBookToLibrary('book2', 'dude', 90, true)
addBookToLibrary('book3', 'dood', 1, false)

//break this function apart to improve modularity?
//listLibrary initializes based on current library contents
function listLibrary() {
    for (let i = 0; i < library.length; i++) {
        //create card elements and selectors
        let divcard = document.createElement("div"),
            cardHeader = document.createElement('h3'),
            writer = document.createElement('div'),
            pagesInBook = document.createElement('p');
        divcard.setAttribute('id', `card${i}`);
        divcard.setAttribute('class', 'card');
        writer.setAttribute('class', 'cardAuthor');
        //fill card elements with book details
        cardHeader.textContent = library[i].title;
        writer.textContent = library[i].author
        pagesInBook.textContent = library[i].pages
        //if book == read, add class
        if (library[i].read == true) {
            divcard.classList.add('read');
        }
        //append card elements to card
        divcard.appendChild(cardHeader)
        divcard.appendChild(writer)
        divcard.appendChild(pagesInBook)
        document.getElementById('main').appendChild(divcard);
    }
}
listLibrary()

function addBook() {
    //create input after function, then append it to library

}