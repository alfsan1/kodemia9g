Next read is a random generator that chooses your next book to read from your list of to read books. it will also display the quantity of pages in the book and the average time. 
the first thing it will do is to choose randomly a book to read "next". 

The next steps in development will be to tell you how many days it will take to finish the book, regarding a 40 min - day reading habit, and an average reading speed of 250 wpm. 

it will access the "database" to choose the book, which will be an array of books exported from goodreads. 

the first section would be a button and what will show in a box in the screen is the bookname, author and all other info that was exported into the excel file. 


< first step>
create frond end, using bootstrap, all the place holder and titles

<second step >
convert csv file into Js object and json possible, but at least an object / array

<third step>
create a randomize function that can choose one element in the array object

<fourth step>
push the result into the html each time the button is pushed

<additional steps>
- save the result in the page each time it is pressed
- be able to choose genre or length of book, or to filter what kind of book to be randomized
- bring picture of book matching isbn from book from an api and pull that picture that might be in the web. 