import { Component, OnInit, TemplateRef } from '@angular/core';
import { BusinesstoolsapiService } from '../businesstoolsapi.service';
import { CanvasData } from '../canvas-data';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';
import { BsModalService } from 'ngx-bootstrap/modal';
import { BsModalRef } from 'ngx-bootstrap/modal/bs-modal-ref.service';

@Component({
  selector: 'app-businessmodellist',
  templateUrl: './businessmodellist.component.html',
  styleUrls: ['./businessmodellist.component.css']
})
export class BusinessmodellistComponent implements OnInit {
  
  modalRef: BsModalRef;
  canvasList: Array<CanvasData>;
  itemToAdd: CanvasData;

  constructor(private modalService: BsModalService
            , public businesstoolsapi: BusinesstoolsapiService
            , private auth: AuthService
            , public router: Router) {
    if (this.auth.isAuthenticated()) {
      this.updateList();
    }
    else {
      this.router.navigate(['/home']);
    }
  }

  ngOnInit() {
  }

  updateList(onDataGet?: any) {
    this.businesstoolsapi.getBusinessModelCanvasList().subscribe((data: Array<CanvasData>) => {
      this.canvasList = data;

      if (typeof onDataGet !== typeof undefined) {
        onDataGet();
      }
    });
  }

  openAddItemModal(template: TemplateRef<any>) {
    this.itemToAdd = new CanvasData();
    this.openModal(template);
  }

  addItemSubmit() {
    this.businesstoolsapi.addBusinessModelCanvas(this.itemToAdd).subscribe((data: Boolean) => {
      if (!data) {
        alert('Did not work to save...');
      }
      
      var _self = this;
      this.updateList(function() {
        _self.hideModal();
        _self.itemToAdd = null;
      });
    });
  }

  deleteItem(id: string) {
    var r = confirm("Are you sure?");
    if (r == true) {
      this.businesstoolsapi.deleteBusinessModelCanvas(id).subscribe((data: Boolean) => {
        if (data) {
          var _self = this;
          this.updateList(function() {
            _self.hideModal();
          });
        }
        else {
          alert('Did not work to save...');
        }
      });
  
    } else {
        
    }
  }

  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template);
  }

  hideModal() {
    this.modalRef.hide();
  }
}
