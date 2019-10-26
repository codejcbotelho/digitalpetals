import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SolutionFinsisComponent } from './solution-finsis/solution-finsis.component';
import { SolutionCreateWebsiteComponent } from './solution-create-website/solution-create-website.component';
import { SolutionDigitalMarketingComponent } from './solution-digital-marketing/solution-digital-marketing.component';



@NgModule({
  declarations: [SolutionFinsisComponent, SolutionCreateWebsiteComponent, SolutionDigitalMarketingComponent],
  imports: [
    CommonModule
  ]
})
export class SolutionsModule { }
