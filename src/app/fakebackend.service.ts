import { Injectable } from '@angular/core';
import { Plugins } from '@capacitor/core';

const { Storage } = Plugins;

@Injectable({
  providedIn: 'root'
})
export class FakebackendService {

  model: any[]=[];
  constructor() { 
    //if connection is lost load jsonFile from storage else load from api backend.
    this.jsonLoader();
  }
  
  async creatItem(data){
    this.model.push(data);
    await Storage.set({
      key: 'transaction',
      value: JSON.stringify(this.model)
    });
  }

  async removeItem(index: any) {
    this.model.splice(index, 1);
    await Storage.set({
      key: 'transaction',
      value: JSON.stringify(this.model)
    });
  }

  async getItem() {
    const ret = await Storage.get({ key: 'transaction' });
    const result = JSON.parse(ret.value);
    return result;
  }

  async jsonLoader(){ // jsonLoader is base on network connection. if connection is lost.
    this.getItem().then(result=>{
      result.forEach((element, key) => {
        console.log(element)
        this.model.push(element)
      });
    });
  }
  

}
