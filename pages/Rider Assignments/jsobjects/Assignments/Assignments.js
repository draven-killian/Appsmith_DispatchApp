export default {
	myVar1: [],
	myVar2: {},
	myFun1 () {
		//	write code here
		//	this.myVar1 = [1,2,3]
	},
	async assignPhone () {
		//	use async-await or promises
		if ({{RiderAssignments.selectedRow.phone_id}} != '') {
			{{unassignPhone.run()}}
		}
		{};

		//	await storeValue('varName', 'hello world')
	}
}