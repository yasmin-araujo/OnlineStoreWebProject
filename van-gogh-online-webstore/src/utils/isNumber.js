export function isNumber(e) {
	return !/^\d*$/.test(e.key) && e.keyCode != 8 && e.keyCode != 37 && e.keyCode != 39 ? false : true
}