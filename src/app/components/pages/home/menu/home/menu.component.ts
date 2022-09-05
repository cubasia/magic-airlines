import { Component, OnInit } from '@angular/core';

interface prodotto {
  image: string;
  price: number;
  description: string;
}

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css'],
})
export class MenuComponent implements OnInit {
  prodotti: prodotto[] = [
    {
      image: 'assets/foto/energy.jpg',
      price: 39.99,
      description: 'Energy Food',
    },
    { image: 'assets/foto/beans.jpg', price: 9.99, description: 'Beans' },
    { image: 'assets/foto/peas.jpg', price: 6.99, description: 'Peas' },

    {
      image: 'assets/foto/spaghetti.jpg',
      price: 19.99,
      description: 'Spaghetti',
    },
  ];
  constructor() {}

  ngOnInit(): void {}
}
