
function askQuestions() {

	var firstName = prompt('What is your first name?');
	var lastName = prompt('What is your last name?');

	var fullName = firstName + ' ' + lastName;

	$('h2').text('Hello ' + fullName);

	var userAge = prompt('How old are you?');

	userAge = parseInt(userAge);

	if (userAge >= 18) {
		console.log('User is an adult');

	} else if (userAge >= 13) {
		console.log('User is a teenager.');
	} else {
		console.log('User is a child.');
	}

	// If the user's first name is 'General' and the last name is NOT 'Assembly', then greet the general!

	if (firstName === 'General' && lastName !== 'Assembly') {
		console.log('Welcome General');
	}


	var faveColour = prompt('What is your favourite colour?').toLowerCase();

	if (faveColour == 'red' ||
		faveColour == 'blue' ||
		faveColour == 'yellow' ||
		faveColour == 'green') {

		$('h2').css('color', faveColour);

	}

}

	// when the page loads
	$(function() {

		$('img').on('click', askQuestions);

		// Hide the sections
		$('h3').next().hide();

		// when the user clicks an h3 heading
		$('h3').on('click', function() {


			// show or hide the next element
			$(this).next().slideToggle();

		});

});
