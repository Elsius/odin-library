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

function listLibrary() {
    //write new function to append a new card
    for (let i = 0; i < library.length; i++) {
        console.log(library[i].info())
        //create card elements and label
        let divcard = document.createElement("div"),
            cardHeader = document.createElement('h2'),
            p = document.createElement('p');
        divcard.setAttribute('id', `card${i}`);
        divcard.setAttribute('class', 'card');
        //fill card elements with book details
        cardHeader.textContent = library[i].title;
        p.textContent = library[i].author

        //append card elements to card
        divcard.appendChild(cardHeader)
        divcard.appendChild(p)
        document.getElementById('main').appendChild(divcard);
    }
}
listLibrary()

function addBook(){
    //create input after function, then append it to library
    
}