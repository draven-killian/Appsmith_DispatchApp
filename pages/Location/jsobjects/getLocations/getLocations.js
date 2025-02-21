export default {

	async update () {
		//	write code here
		//	this.myVar1 = [1,2,3]
		let response = await tile38.run();
		const points = response.points.map(reshape);
		return points;
		
		function reshape(value){
			const rider =  getVehicleAssns.data.find((element) => element.vehicle_name===value.id );
			if (rider===undefined) {
				value.title=value.id;
				value.alt=value.id;
			} else {
				value.alt= rider.first_name;
				value.title=value.id;
			};
			value.lat=value.point.lat;
			value.long=value.point.lon;
			delete value.id;
			delete value.point;
			return value;
		}
	}
}