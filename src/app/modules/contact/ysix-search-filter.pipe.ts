import { Pipe, PipeTransform } from '@angular/core';
import { YsixContactsService } from './ysix-contacts.service';


@Pipe({
  name: 'ysixSearchFilter'
})
export class YsixSearchFilterPipe implements PipeTransform {

data: Array<any>


constructor(private ysix_contacts: YsixContactsService){
  this.data = new Array<any>()

  // this.ysix_contacts.getData().subscribe((data)=>{
  //   this.data = data.results
    
    // })
}
  

  transform(contacts: any[], searchValue: string): any {

    this.ysix_contacts.getData().subscribe((data)=>{
      contacts = data.results
      
      })

    if(!contacts || !searchValue){
      return contacts;
    }

    return contacts.filter(contacts=>
      contacts.name.first.toLocaleLowerCase().includes(searchValue.toLocaleLowerCase())||
      contacts.name.last.toLocaleLowerCase().includes(searchValue.toLocaleLowerCase())||
      contacts.location.country.toLocaleLowerCase().includes(searchValue.toLocaleLowerCase())||
      contacts.email.toLocaleLowerCase().includes(searchValue.toLocaleLowerCase())||
      contacts.dob.age.toString().toLocaleLowerCase().includes(searchValue.toLocaleLowerCase())
      );
    
  }

}
