import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.css'],
})
export class TabsComponent implements OnInit {
  characters = [
    { name: 'Luke SkyWalker', side: 'light' },
    { name: 'Darth Vader', side: 'dark' },
  ];

  chosenList = 'all';

  constructor() {}

  ngOnInit() {}

  getCharacters() {
    if (this.chosenList === 'all') {
      return this.characters.slice();
    }
    return this.characters.filter((char) => {
      return char.side === this.chosenList;
    });
  }

  onChoose(side) {
    this.chosenList = side;
  }
}
