import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/api/ApiService';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.scss']
})
export class AddComponent implements OnInit {
  loading = false;
  avatarUrl?: string;
  previewImage: string | undefined = '';
  previewVisible = false;

  constructor(private service: ApiService) { }

  ngOnInit(): void {

  }


  handleMapColorSizeQuantity(): void {
    this.previewVisible = false;
  }

  handleCancel(): void {
    this.previewVisible = false;
  }

}
