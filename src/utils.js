export function phoneNumber(input) {
	const phoneNo = /^\d{10}$/;
	if (input.value.match(phoneNo)) {
		return true;
	} else {
		alert("Not a valid Phone Number");
		return false;
	}
}
