import { Component, OnInit }  from '@angular/core';
import { Http }               from '@angular/http';
import { BookService }        from '../book.service';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css'],
  providers: [BookService]
})
export class BookListComponent implements OnInit {
  books: any;

  constructor(private bookService: BookService) { }

  ngOnInit() {
    this.bookService.getList()
      .subscribe(response => this.books = response.json());
  }

}
