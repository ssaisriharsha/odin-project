"use strict";

function Book(title , author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
    this.info = () => {
        let details = `${this.title} by ${this.author}, ${this.pages}, `
        switch(read) {
            case true:
                details += `read.`;
                break;
            default:
                details += `not read yet.`;
        }
        return details;
    };
}

let R2020 = new Book("Revolution 2020", "Chethan bhaghat", 500, true);
console.log(R2020.info());