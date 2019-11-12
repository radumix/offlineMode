import { Component, OnInit } from '@angular/core';
import { FakebackendService } from '../fakebackend.service';

@Component({
  selector: 'app-transaction',
  templateUrl: './transaction.component.html',
  styleUrls: ['./transaction.component.scss'],
})
export class TransactionComponent implements OnInit {

  constructor(public fService: FakebackendService) { }
  model: any;

  ngOnInit() {
    
  }

  addTransaction(form) {
    this.fService.creatItem(form.value);
  }

  remove(index: any){
    this.fService.removeItem(index);
  }

  submit(){ 
    this.fService.getItem().then(result=>{
      this.model=result /// return json array from capacitor storage.

      // here you can pass the result to api backend derectly.

      console.log(this.model);
    });
  }

  

}
