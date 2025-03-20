import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { HousingService } from '../housing.service';
import { HousingLocation } from '../housinglocation';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrl: './details.component.css'
})
export class DetailsComponent {
  route: ActivatedRoute = inject(ActivatedRoute); // 注入 ActivatedRoute
  housingService = inject(HousingService); // 注入 HousingService
  housingLocation: HousingLocation | undefined; // 存储获取的 housingLocation

  constructor() {
    const housingLocationId = Number(this.route.snapshot.params['id']); // 获取路由参数 id
    this.housingLocation = this.housingService.getHousingLocationById(housingLocationId); // 调用服务获取 housingLocation 数据
  }
}
