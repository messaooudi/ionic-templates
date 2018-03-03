import { NgModule } from '@angular/core';
import { AvatarListItemComponent } from './avatar-list-item/avatar-list-item';
import { IonicModule } from 'ionic-angular';
import { MovieCardComponent } from './movie-card/movie-card';
import { MyComponent } from './my/my';
import { MovieSeatsComponent } from './movie-seats/movie-seats';
import { InteractiveAvatarComponent } from './interactive-avatar/interactive-avatar';
import { PriorityPickerComponent } from './priority-picker/priority-picker';
import { CardComponent } from './card/card';
@NgModule({
	declarations: [
		AvatarListItemComponent,
		MovieCardComponent,
		MyComponent,
		MovieSeatsComponent,
    InteractiveAvatarComponent,
    PriorityPickerComponent,
    CardComponent
	],
	imports: [
		IonicModule.forRoot(ComponentsModule)
	],
	exports: [
		AvatarListItemComponent,
		MovieCardComponent,
		MyComponent,
		MovieSeatsComponent,
    InteractiveAvatarComponent,
    PriorityPickerComponent,
    CardComponent
	]
})
export class ComponentsModule { }
