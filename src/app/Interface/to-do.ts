//export interface ToDo {}

export class ToDo {
	id: string | number;
	task = '';
	completed = false;

	constructor(values: any = {}) {
		Object.assign(this, values);
	}
}
