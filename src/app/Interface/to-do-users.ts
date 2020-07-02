export class ToDoUsers {
	username: string;
	email: string;
	password: string;

	constructor(values: any = {}) {
		Object.assign(this, values);
	}
}