let library = [],
    cards = [];

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
    document.getElementById('main').innerHTML = '';
    for (let i = 0; i < library.length; i++) {
        //create card elements and selectors
        let divcard = document.createElement("div"),
            cardHeader = document.createElement('h3'),
            writer = document.createElement('div'),
            pagesInBook = document.createElement('p'),
            buttonBox = document.createElement('div'),
            readToggleButton = document.createElement('button'),
            deleteBookButton = document.createElement('button');
        divcard.setAttribute('id', `card${i}`);
        divcard.setAttribute('class', 'card');
        writer.setAttribute('class', 'cardAuthor');
        readToggleButton.setAttribute('id', `toggle${i}`)
        deleteBookButton.setAttribute('id', `${i}`);

        //fill card elements with book details
        cardHeader.textContent = library[i].title;
        writer.textContent = library[i].author;
        pagesInBook.textContent = library[i].pages;
        readToggleButton.textContent = 'Read'
        deleteBookButton.textContent = 'X';
        //if book == read, add class. 
        if (library[i].read == true) {
            divcard.classList.add('read');
        }
        //append card elements to card and to main
        divcard.appendChild(cardHeader)
        divcard.appendChild(writer)
        divcard.appendChild(pagesInBook)
        divcard.appendChild(readToggleButton)
        divcard.appendChild(deleteBookButton)
        document.getElementById('main').appendChild(divcard);
        //add event listener to toggle read
        document.getElementById(`${i}`).addEventListener('click', function () {deleteBook(`${i}`)})
        document.getElementById(`toggle${i}`).addEventListener('click', function () {toggleRead(`card${i}`)})
        
    }
}
listLibrary()

const newBookButton = document.getElementById('newBookButton').addEventListener('click', newBookForm)
function newBookForm() {
    //(un)hides new book form
    formBox = document.getElementById('newBookForm')
    if (formBox.hidden == true) {
        formBox.hidden = false
    } else {
        formBox.hidden = true
    }
}

function toggleRead(cardNumber) {
    let card = document.getElementById(cardNumber)
    card.classList.toggle('read');
}

function deleteBook(idNumber) {
    let card = document.getElementById(`card${idNumber}`);
    card.removeEventListener('click', toggleRead(`card${idNumber}`))
    card.outerHTML = '';
}

const submitNewBook = document.getElementById('submitBook');
submitNewBook.addEventListener('click', submitBook);
function submitBook(event) {
    event.preventDefault()
    //grabs form info to pass into add book
    let title = document.getElementById('bookName').value,
    author = document.getElementById('authorInput').value,
    pages = document.getElementById('pagesInput').value,
    read = document.getElementById('readCheck').checked; 
    addBookToLibrary(title,author,pages,read)
    listLibrary()
}