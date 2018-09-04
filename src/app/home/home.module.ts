import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { FormsModule } from '@angular/forms';

import { CoreModule } from '@app/core';
import { SharedModule } from '@app/shared';
import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
// import { QuoteService } from './quote.service';

import { MessageListComponent, MessageFormComponent, MessageItemComponent } from '@app/components';
import { DialogflowService } from '@app/services/';


@NgModule({
  imports: [
    CommonModule,
    TranslateModule,
    CoreModule,
    SharedModule,
    HomeRoutingModule,
    FormsModule
  ],
  declarations: [
    HomeComponent,
    MessageListComponent,
    MessageFormComponent,
    MessageItemComponent
  ],
  providers: [
    DialogflowService
  ]
})
export class HomeModule { }
