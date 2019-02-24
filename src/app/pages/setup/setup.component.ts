import {Component, OnInit} from '@angular/core';
import {LocalStorageService} from '../../services/local-storage.service';

// 用户名      USERNAME
// 初始化标识    INIT_FLAG
// 启动日期     START_USING_DATE
import {USERNAME, INIT_FLAG, START_USING_DATE} from '../../services/local-storage.namespace';
import {getTodayTime} from '../../../util/time';

@Component({
	selector: 'app-setup',
	templateUrl: './setup.component.html',
	styleUrls: ['./setup.component.less']
})
export class SetupComponent implements OnInit {
	username: string;

	// private 参数意味着依赖注入
	constructor(private store: LocalStorageService) {
	}

	ngOnInit() {
	}

	completeSetup(): void {
		this.store.set(INIT_FLAG, true);
		this.store.set(START_USING_DATE, getTodayTime());
		this.store.set(USERNAME, this.username);
	}
}
