import { Component } from '@angular/core';

@Component({
  selector: 'app-new-page',
  templateUrl: './new-page.component.html',
  styles: [
  ]
})
export class NewPageComponent {

  public publishers = [
    {id:'Marvel Comics', desc: 'Marvel - Comics'},
    {id:'DC Comics', desc: 'DC - Comics'},
  ]

}
