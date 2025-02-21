export default {
	startAutoRefresh() {
		if (Switch1.isSwitchedOn) {
			setInterval(() => getCurrentTasks.run(), 10000, "autoupdateCT");
			setInterval(() => getTodayLabor.run(), 10000, "autoupdateTL");
		} else {
			clearInterval("autoupdateCT");
			clearInterval("autoupdateTL");
		}
	}
}