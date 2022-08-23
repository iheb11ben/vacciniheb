import { Injectable } from '@angular/core';
import { Parent } from '../model/parent';
@Injectable({
  providedIn: 'root'
})
export class ParentService {
  parents: Parent[] = [
    { nom: "fathi ben slama", email: "fathi@gmail.com", phone: 54749720 },
    { nom: "hedi Najjar'", email: "hedi@gmail.com", phone: 28596720 },
    { nom: "hamed bouharb ", email: "hamed@gmail.com", phone: 55229720 }
  ]
  constructor() {

  }
  getAllParentService() {
    return this.parents;
  }
  getByIDParentService(id: number) {
    return this.parents[id];
  }
  addParentService(parents: Parent) {
    this.parents.push(parents);

  }
  deleteParentServiceByName(name: string) {
    console.log(name);
    this.parents = this.parents.filter(obj => obj.nom != name)
  }
}
