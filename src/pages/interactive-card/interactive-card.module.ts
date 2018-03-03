import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { InteractiveCardPage } from './interactive-card';
import { ComponentsModule } from '../../components/components.module';

@NgModule({
  declarations: [
    InteractiveCardPage,
  ],
  imports: [
    IonicPageModule.forChild(InteractiveCardPage),
    ComponentsModule
  ],
})
export class InteractiveCardPageModule {}
