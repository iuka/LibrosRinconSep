import { Component, OnInit } from '@angular/core';
import {NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ModalfichaComponent } from '../componentes/modalficha/modalficha.component';
import { LibrosService } from '../services/libros.service';
@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent  {
  portada: any[];
  constructor(
    private modalService: NgbModal,
    private LibromService: LibrosService
  ) {
  }


  openModal(id: any) {
    const modalRef = this.modalService.open(ModalfichaComponent,
      {
        scrollable: true,
        size: 'lg',
        windowClass:'animated fadeInUp modal-holder',
        centered: true,
        
      });

    let data = {
      id: id,
      prop1: 'Some Data',
      prop2: 'From Parent Component',
      prop3: 'This Can be anything'
    }

    modalRef.componentInstance.fromParent = data;
    modalRef.result.then((result) => {
      console.log(result);
    }, (reason) => {
    });
  }

  ngOnInit() {

    this.LibromService.librosmes().subscribe((data: any[])=>{
      console.log(data);
      this.portada = data;
    })  
  }


}
