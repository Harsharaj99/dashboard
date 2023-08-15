import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css']
})
export class CardsComponent {

  @Input() bg:string=''
  @Input() bg1:string=''
  @Input() icon:string=''
  @Input() name:string=''
  @Input() count:string=''

}
