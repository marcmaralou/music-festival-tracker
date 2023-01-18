$(document).ready(function() {
	$('.sidenav').sidenav()

	// on click changing the dark toggle icon
	$('.dark-toggle').on('click', function() {
		if ($(this).find('i').text() == 'brightness_4') {
			$(this).find('i').text('brightness_high')
			localStorage.setItem('sunMoon', 'brightness_high')
		}
		else {
			$(this).find('i').text('brightness_4')
			localStorage.setItem('sunMoon', 'brightness_4')
		}
	})
})