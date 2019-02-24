import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {CommonModule} from '@angular/common';
import {SetupComponent} from './setup.component';
import {NgZorroAntdModule} from 'ng-zorro-antd'

@NgModule({
	declarations: [SetupComponent],
	imports: [
		CommonModule,
		FormsModule,
		NgZorroAntdModule
	]
})
export class SetupModule {
}
