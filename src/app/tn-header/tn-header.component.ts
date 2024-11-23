import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'tn-header',
  templateUrl: './tn-header.component.html',
  styleUrls: ['./tn-header.component.scss']
})
export class TnHeaderComponent implements OnInit {
displayAnotherButton : boolean = false
  constructor() { }

  ngOnInit(): void {
  }

  onButtonClick(){
    this.displayAnotherButton = !this.displayAnotherButton
  }
}
