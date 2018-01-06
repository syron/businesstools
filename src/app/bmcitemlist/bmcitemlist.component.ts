import { Component, OnInit, Input, TemplateRef } from '@angular/core';
import { BsModalService } from 'ngx-bootstrap/modal';
import { BsModalRef } from 'ngx-bootstrap/modal/bs-modal-ref.service';


@Component({
  selector: 'app-bmcitemlist',
  templateUrl: './bmcitemlist.component.html',
  styleUrls: ['./bmcitemlist.component.css']
})
export class BmcitemlistComponent {

  modalRef: BsModalRef;

  @Input() name: string;
  @Input() tasks: Array<any>;

  public selectedTask: any;

  constructor(private modalService: BsModalService) {}

  selectTask(task) {
    this.selectedTask = task;
  }

  openModal(template: TemplateRef<any>, task: any) {
    this.selectTask(task);
    this.modalRef = this.modalService.show(template);
  }
}
