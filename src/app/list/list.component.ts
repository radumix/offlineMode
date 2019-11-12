import { Component, OnInit } from '@angular/core';
import { FakebackendService } from '../fakebackend.service';
import { Plugins } from '@capacitor/core';

const { Storage } = Plugins;

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
})
export class ListComponent implements OnInit {
  constructor(public fService: FakebackendService) { }

  ngOnInit() {
    
  }


  async clear() {
    await Storage.clear();
  }

}
