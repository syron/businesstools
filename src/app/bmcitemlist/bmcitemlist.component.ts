import { Component, OnInit, Input, TemplateRef } from '@angular/core';
import { BsModalService } from 'ngx-bootstrap/modal';
import { BsModalRef } from 'ngx-bootstrap/modal/bs-modal-ref.service';
import { CanvasDataItem } from './../canvas-data-item';
import { BusinesstoolsapiService } from '../businesstoolsapi.service';
import { CanvasCategory } from '../canvas-category';

@Component({
  selector: 'app-bmcitemlist',
  templateUrl: './bmcitemlist.component.html',
  styleUrls: ['./bmcitemlist.component.css']
})
export class BmcitemlistComponent {

  modalRef: BsModalRef;

  @Input() data: CanvasCategory;

  public selectedTask: CanvasDataItem;
  public itemToAdd: CanvasDataItem;

  constructor(private modalService: BsModalService, public businesstoolsapi: BusinesstoolsapiService) {}

  selectTask(task: CanvasDataItem) {
    this.selectedTask = task;
  }

  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template);
  }

  hideModal() {
    this.modalRef.hide();
    this.selectTask(null);
  }

  addItem(template: TemplateRef<any>) {
    this.itemToAdd = new CanvasDataItem();
    this.itemToAdd.order = 1000;
    this.itemToAdd.created = "2018-01-01T00:00:00.001";
    this.openModal(template);
  }

  addItemSubmit() {
    this.data.items.push(this.itemToAdd);
  }

  removeItem(task) {
    if (task == null) {
      return;
    }

    var r = confirm("Are you sure?");
    if (r == true) {
      var index = this.data.items.indexOf(task);
      this.data.items.splice(index, 1);
  
      this.hideModal();
    } else {
        
    }
  }
}
