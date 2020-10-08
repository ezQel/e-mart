import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PropsRoutingModule } from './props-routing.module';
import { KesPipe } from './kes.pipe';
import { LogoComponent } from './logo/logo.component';
import { SmallLogoComponent } from './small-logo/small-logo.component';

@NgModule({
  declarations: [
    KesPipe,
    LogoComponent,
    SmallLogoComponent,
  ],
  imports: [
    CommonModule,
    PropsRoutingModule,
  ],
  exports: [
    KesPipe,
    LogoComponent,
    SmallLogoComponent,
  ]
})
export class PropsModule { }
