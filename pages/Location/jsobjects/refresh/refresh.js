export default {
	startAutoRefresh() {
		if (Switch1.isSwitchedOn) {
			setInterval(() => getLocations.update(), 4000, "autorefresh1");
			setInterval(() => getVehicleAssns.run(), 30000, "autorefresh2");
		} else {
			clearInterval("autorefresh1");
			clearInterval("autorefresh2");
		}
	}
}
