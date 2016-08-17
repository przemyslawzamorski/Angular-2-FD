import {Component} from '@angular/core';
import {DemoService} from './demo.service';
import {Observable} from 'rxjs/Rx';

@Component({
  selector: 'demo-app',
  template:`
  
  <table style=' width: 100%; text-align:left;'>
   <tr>
    <th>Block</th>
    <th>Produkt</th> 
    <th>Czas</th>
    <th>Total</th>
  </tr>
  <tr>
    <td>
      <p>Morning Blokc</p>
    </td>
    <td>
      <p *ngFor="let block of morningBlock" >{{block.PRODUCT_NAME}}</p>
    </td>
    <td>
      <p *ngFor="let block of morningBlock" >{{block.CZAS}}</p>
    </td>


  </tr>
  <tr>
    <td>
      <p>Mid day Block</p>
    </td>
    <td>
    
    </td>

  </tr>



  

  
  </table>
 
  `,
  styles:[`
  th {border-right: 1px solid black;}
  tr {border-top: 1px solid black;}
  
  
  `]
})
export class AppComponent {

  public morningBlock;


  constructor(private _demoService: DemoService) { 
    
  }

  ngOnInit() {
    this.getBlocks();
  }

  getBlocks() {
    this._demoService.getBlocks().subscribe(
      // the first argument is a function which runs on success
      data => { this.morningBlock = data.RecordSet;
                },
      // the second argument is a function which runs on error
      err => console.error(err),
      // the third argument is a function which runs on completion
      () => console.log(this.morningBlock)
    );
  }

  
}
