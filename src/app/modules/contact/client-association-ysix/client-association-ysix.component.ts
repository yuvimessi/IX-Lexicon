import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { YsixContactsService } from '../ysix-contacts.service';


@Component({
  selector: 'app-client-association-ysix',
  templateUrl: './client-association-ysix.component.html',
  styleUrls: ['./client-association-ysix.component.scss'],
  encapsulation: ViewEncapsulation.Emulated
})
export class ClientAssociationYsixComponent implements OnInit {

  data: Array<any>
  totalRecords: String
  page: Number = 1
  searchValue: string
  order: any;

  constructor(private ysix_contacts: YsixContactsService) {
    this.data = new Array<any>()
  }

  ngOnInit() {

    this.ysix_contacts.getData().subscribe((data) => {
      //console.log(data)
      this.data = data.results
      this.totalRecords = data.results.length

    })

  }

  // sortAge(dob){
  //   if (this.order){
  //     let newarr = this.data.sort((a,b)=>a.data.dob.age - b.data.dob.age);
  //     this.data=newarr
  //   }
  //   else{
  //     let newarr = this.data.sort((a,b)=>b.data.dob.age - a.data.dob.age);
  //     this.data=newarr
  //   }
  //   this.order = !this.order;
  // }

}
