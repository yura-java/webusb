document.addEventListener('DOMContentLoaded', event => {
	let button = document.getElementById('connect')

	button.addEventListener('click', async() => {
		console.log("click")
		
		navigator.usb.requestDevice({filters:[]}).then(function(device){
			console.log(device);
		});
	})
})