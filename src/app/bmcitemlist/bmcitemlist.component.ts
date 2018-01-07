import { Component, OnInit, Input, TemplateRef } from '@angular/core';
import { BsModalService } from 'ngx-bootstrap/modal';
import { BsModalRef } from 'ngx-bootstrap/modal/bs-modal-ref.service';
import { CanvasDataItem } from './../canvas-data-item';

@Component({
  selector: 'app-bmcitemlist',
  templateUrl: './bmcitemlist.component.html',
  styleUrls: ['./bmcitemlist.component.css']
})
export class BmcitemlistComponent {

  modalRef: BsModalRef;

  @Input() name: string;
  @Input() singularName: string;
  @Input() tasks: Array<CanvasDataItem>;

  public selectedTask: CanvasDataItem;

  constructor(private modalService: BsModalService) {}

  selectTask(task: CanvasDataItem) {
    this.selectedTask = task;
  }

  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template);
  }
}
