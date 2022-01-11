import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ConfirmationService, MessageService } from 'primeng/api';
import { ApiService } from 'src/app/api/ApiService';
import { Category } from 'src/app/entities/category';
import { Product } from 'src/app/entities/product';
import { BaseFunction } from 'src/app/service/base-function';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent extends BaseFunction implements OnInit {

  category!: Category;
  categoryId: number = 0;
  lstProduct: Product[] = [];
  selectedProducts: Product[] = [];
  isList?: boolean;
  isAdd?: boolean;
  isEdit?: boolean;
  isView?: boolean;

  constructor(private router: Router, private service: ApiService, private confirmationService: ConfirmationService, private messageService: MessageService) {
    super();
  }

  ngOnInit() {

    this.lstProduct = [
      { id: 0, name: 'Test', code: 'Test', image: 'Test', brandId: 1, brandName: 'Test', quantity: 100, status: true, lstElement: [] }
    ];

    // this.service.getCategoryByUrl(this.router.url.replace('/', '')).subscribe(rs => {
    //   this.category = rs;
    //   if (this.category != null) {
    //     this.service.findAllProductByCategoryId(this.category.id).subscribe(rs => {
    //       this.lstProduct = rs;
    //     })
    //   }
    // });
  }

  confirmDelete(event: Event) {
    this.confirmationService.confirm({
      target: event.target!,
      message: "Are you sure that you want to proceed?",
      icon: "pi pi-exclamation-triangle",
      accept: () => {
        this.messageService.add({
          severity: "info",
          summary: "Confirmed",
          detail: "You have accepted"
        });
      },
      reject: () => {
        this.messageService.add({
          severity: "error",
          summary: "Rejected",
          detail: "You have rejected"
        });
      }
    });
  }
}
