import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {Transaction} from "../../transaction/transaction";
import {ImportService} from "../import.service";
import {ImportResponse} from "../importResponse";
import {CreateComponent} from "../../transaction/create/create.component";
import {NgbModal} from "@ng-bootstrap/ng-bootstrap";
import {BehaviorSubject, catchError, map, Observable, of, startWith} from "rxjs";
import {CustomHttpResponse} from "../../entity/customHttpResponse";
import {HttpErrorResponse, HttpEvent, HttpEventType, HttpResponse} from "@angular/common/http";
import {ImportHttpResponse} from "../../entity/importHttpResponse";
import {Page} from "../../entity/page";
import {Comment} from "../../comment/comment";

@Component({
  selector: 'app-import',
  templateUrl: './import.component.html',
  styleUrls: ['./import.component.css',
    '../../../assets/modal_form_layout.css',
    '../../../assets/panel_layout.css',
    '../../../assets/table_layout.css',
    '../../../assets/pagination_layout.css']
})
export class ImportComponent implements OnInit {

  uploadForm!: FormGroup;
  selectedFile: null;
  transactions: Transaction[];
  transaction: Transaction;
  numberOfTransactions: number;
  submitted = false;
  infoTxSaldo = 0;
  p:number = 1;
  fileStatus = {status: '', requestType: '', percent: 0}
  importState$: Observable<{appState: string, appData?:any, error?:HttpErrorResponse}>;
  responseSubject = new BehaviorSubject<CustomHttpResponse<ImportResponse>>(null);


  constructor(public importService: ImportService,
              public modalService: NgbModal) { }

  ngOnInit() {
    this.submitted = false;
    this.uploadForm = new FormGroup({
      upload: new FormControl('', Validators.required)
    });
  }

  get f(){
    return this.uploadForm.controls;
  }

  selectedPDFFile(event:any): void {
    if (event.target.files.length > 0) {
      this.selectedFile = event.target.files[0];
    }
  }

  /*uploadPDFFile(): void {
      const formData = new FormData();
      formData.append('file', this.selectedFile)
      this.importService.uploadTransactions(formData).
      subscribe((data) => {
        console.log('data', data.body);
        this.transactions = data.body
      });
  }*/

  private reportProgress(httpEvent: HttpEvent<CustomHttpResponse<ImportResponse>>): void {
    switch (httpEvent.type) {
      case HttpEventType.UploadProgress:
        this.updateStatus(httpEvent.loaded, httpEvent.total!, 'Uploading');
        break;

      case HttpEventType.Response:
        console.log('response', httpEvent.body.data);
        break;
    }
  }

  createTransaction(){
    const modalRef = this.modalService.open(CreateComponent);
    modalRef.result.then((result) => {
      if (result) {

      }
    });

  }

  openFormModal(tx: Transaction) {
    this.transaction = tx;

    const modalRef = this.modalService.open(CreateComponent, { size: 'lg' });
    modalRef.componentInstance.transaction = this.transaction;
    modalRef.result.then((result) => {
      if (result) {
        this.calculateSaldo(tx);
        let index = this.transactions.indexOf(result);
        this.transactions.splice(index,1);
        this.numberOfTransactions --;
        this.submitted = true;
      }
    });
  }

  private calculateSaldo(tx: Transaction) {
    if (tx.sign== '-') {
      this.infoTxSaldo = this.infoTxSaldo - tx.amount
    } else {
      this.infoTxSaldo = this.infoTxSaldo + tx.amount
    }
  }

  private updateStatus(loaded: number, total: number, uploading: string) {
    this.fileStatus.status = 'progress';
    this.fileStatus.requestType = uploading;
    this.fileStatus.percent = Math.round(100 * loaded/total);
  }
}
