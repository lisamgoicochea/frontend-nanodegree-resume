var DATA = '%data%';

var bio = {
 	name: 'Lisa Marie Goicochea',
 	role: 'Front End Ninja',
 	contacts: { 
 		mobile: '*** *** ****',
 		email: 'lisamgoicochea@gmail.com',
 		github: 'lisamgoicochea',
 		twitter: '@lisamgoicochea',
 		location: 'New York'
 },
 welcomeMessage: 'lorem ipsum dolor sit amet etc etc etc.',
 skills: [
 	"HTML", 'CSS', 'JavaScript'],
 	bioPic: 'images/me.jpg'
 	display: function() {
 		var formattedName = HTMLheaderName.replace(DATA, bio.name);
 		var formattedRole = HTMLheaderRole.replace(DATA, bio.role);

 		var formattedMobile = HTMLmobile.replace(DATA, bio.contacts.mobile);
 		var formattedEmail = HTMLemail.replace(DATA, bio.contacts.email);
 		var formattedGithub = HTMLgithub.replace(DATA. bio.contacts.github);
 		var formattedTwitter = HTMLtwitter.replace(DATA, bio.contacts.twitter);
 		var formattedLocation = HTMLlocation.replace(DATA, bio.contacts.location);

 		var formattedBioPic = HTMLbioPic.replace(DATA, bio.biopic);
 		var formattedWelcomeMessage = HTMLwelcomeMsg.replace(DATA, bio.welcomeMessage);

 		$('#header').prepend(formattedName + formattedRole);
 		$('#topContacts', '#footerContacts').append(formattedMobile + formattedEmail + 
 			formattedGithub + formattedTwitter + formattedLocation);
 		$('#header').append(formattedBioPic);
 		$('#header').append(formattedWelcomeMessage);

 		if (bio.skills.length > 0) {
 			$('#header').append(HTMLskillsStart);

 			for (var i = 0, len = bio.skills.length; i < len; i++) {
 				var formattedSkills = HTMLskills.replace(DATA, bio.skills[i]);

 				$('#skills').append(formattedSkills);
 			}
 		}
 	}
};

var work = {
 	jobs: [
 	{
 		employer: 'Self Employed',
 		title: 'Entrepreneur',
 		dates: 'August 2016 - Future'
 		description: 'fill this in later'
 	},
 	{
 		employer: "Lerner Cumbo and Associates",
 		"title": "Placement Counselor",
 		"dates": "October 2015 - August 2016",
 		"description": "fill this in later"
 	}
 ],
 display: funtion() {
 	if (work.jobs.length > 0) {
 		for (var i = 0, len = work.jobs.length; i < len; i++) {
 			var formattedEmployer = HTMLworkEmployer.replace(DATA, work.jobs[i].employer);
 			var formattedTitle = HTMLworkTitle.replace(DATA, work.jobs[i].title);
 			var formattedDates = HTMLworkDates.replace(DATA, work.jobs[i].dates);
 			var formattedLocation = HTMLworkLocation.replace(DATA, work.jobs[i].location);
 			var formattedDescription = HTMLworkDescription.replace(DATA, work.jobs[i].description);
 			var formattedEmployerTitle = formattedEmployer + formattedTitle;

 			$('#workExperience').append(HTMLworkStart);
 			$('.work-entry:last').append(formattedEmployerTitle);
 			$('.work-entry:last').append(formattedDates);
 			$('.work-entry:last').append(formattedLocation);
 			$('.work-entry:last').append(formattedDescription);
 		}
 	}
 }
};

var projects = {
	"projects": [
		{
			title: 'Sample Project 1',
			"dates": "2014",
			"description": "fill this in later",
			"images": [
			"insert image here", 
			"insert another image here"
			]
		}
	]
};
display:  function() {
	if (projects.projects.length > 0) {
		for (var i = 0, iLen = projects.projects.length; i < iLen; i++) {
			var formattedTitle = HTMLprojectTitle.replace(DATA, projects.projects[i].title);
			var formattedTitle = HTMLprojectTitle.replace(DATA, projects.projects[i].dates);
			var formattedDescription = HTMLprojectDescription.replace(DATA, projects.projects[i].description);
		}
	}	


 var education = {
	schools: [
	{
		name: 'LaGuardia Community College',
		city: 'Long Island City, NY, US',
		degree: 'AA',
		major: ['Mass Communications', 'Human Services']
	},
	{
		name: 'Frank Sinatra School of the Arts',
		city: 'Long Island City, NY, US',
		degree: 'High School Diploma',
		major: ['Vocal']
		}
	],
	onlineCourses: [
	{
		title: 'JavaScript Crash Course',
		school: 'Udacity',
		dates: '2017',
		url: 'http://www.udacity.com/course/ud804'
		}
	]
};
display: function () {
	if (education.schools.length > 0 || education.onlineCourses.length > 0) {
		for (var i = 0, iLen = education.schools.length; i < iLen; i++) {
			var formattedName = HTMLschoolName.replace(DATA, education.schools[i].name);
			var formattedDegree = HTMLschoolDegree.replace(DATA, education.schools[i].degree);
			var formattedSchoolDates = HTMLschoolDates.replace(DATA, education.schools[i].dates);
			var formattedLocation = HTMLschoolLocation.replace(DATA, education.schools[i].location);
			var formattedNameDegree = formattedName + formattedDegree;

			$('#education').append(HTMLschoolStart);
			$('.education-entry:last').append(formattedNameDegree);
			$('.education-entry:last').append(formattedSchoolDates);
			$('.education-entry:last').append(formattedLocation);

			for (var j = 0, jLen = education.schools[i].majors.length; j < jLen; j++) {
				var formattedMajor = HTMLschoolMajor.replace(DATA, education.schools[i].majors[j]);

			$('#education-entry:last').append(formattedMajor);
			}
		}

		$('#education').append(HTMLonlineClasses);

		for (var k = 0, len = education.onlineCourses.length; k < len; k++) {
			var formattedTitle = HTMLonlineTitle.replace(DATA, education.onlineCourses[k].title).replace('#', education.onlineCourses[k].url);
			var formattedSchool = HTMLonlineSchool.replace(DATA, education.onlineCourses[k].school);
			var formattedOnlineDates = HTMLonlineDates.replace(DATA, )
		}
	}
};

bio.display();
work.display();
projects.display();
education.display();
$('#mapDiv').append(googleMap);