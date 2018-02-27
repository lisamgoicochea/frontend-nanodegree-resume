var DATA = '%data%';

var bio = {
 	name: 'Lisa Marie Goicochea',
 	role: 'Front End Ninja',
 	contacts: {
 		mobile: '*** *** ****',
 		email: 'lisamgoicochea@gmail.com',
 		github: 'lisamgoicochea',
 		twitter: '@lisamgoicochea',
 		location: 'New, York, New York, US',
 	},
 	welcomeMessage: 'lorem ipsum dolor sit amet etc etc etc.',
	skills: ['HTML', 'CSS', 'JavaScript'],
 	biopic: 'images/winterselfie.jpg',
 	display: function() {
 		var formattedName = HTMLheaderName.replace(DATA, bio.name);
 		var formattedRole = HTMLheaderRole.replace(DATA, bio.role);

 		var formattedMobile = HTMLmobile.replace(DATA, bio.contacts.mobile);
 		var formattedEmail = HTMLemail.replace(DATA, bio.contacts.email);
 		var formattedGithub = HTMLgithub.replace(DATA, bio.contacts.github);
 		var formattedTwitter = HTMLtwitter.replace(DATA, bio.contacts.twitter);
 		var formattedLocation = HTMLlocation.replace(DATA, bio.contacts.location);

 		var formattedBioPic = HTMLbioPic.replace(DATA, bio.biopic);
 		var formattedWelcomeMessage = HTMLwelcomeMsg.replace(DATA, bio.welcomeMessage);

 		$('#header').prepend(formattedName + formattedRole);
 		$('#topContacts, #footerContacts').append(formattedMobile + formattedEmail +
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
 			dates: 'May 2016 - Future',
      location: 'Chicago, Illinois',
 			description: 'Working Hard While Hardly Working',
 		},
 		{
 			employer: "Lerner Cumbo and Associates",
 			title: "Placement Counselor",
 			dates: "October 2015 - August 2016",
      location: 'Los Angeles, California',
 			description: 'Graciously place candidates in roles they qualify for',
 		}
	],

	display: function() {
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
	projects: [
		{
			title: 'Princess Run: Classic Arcade Game',
			dates: "2017",
			description: "Get the princess to the other side without bumping into enemy bugs!",
			images: [
			'images/soloprincess.png',
			'images/gamesnapshot.png',
			]
		}
	],

	display: function() {
		if (projects.projects.length > 0) {
			$("#projects").append(HTMLprojectStart);

			for (var i = 0; i < projects.projects.length; i++) {
				var formattedProjectTitle = HTMLprojectTitle.replace(DATA, projects.projects[i].title);
				var formattedProjectDates = HTMLprojectTitle.replace(DATA, projects.projects[i].dates);
				var formattedProjectDescription = HTMLprojectDescription.replace(DATA, projects.projects[i].description);

				$(".project-entry:last").append(formattedProjectTitle);
				$(".project-entry:last").append(formattedProjectDates);
				$(".project-entry:last").append(formattedProjectDescription);

				for (var p = 0; p < projects.projects[i].images.length; p++) {
					var formattedHTMLprojectImage = HTMLprojectImage.replace(DATA, projects.projects[i].images[p]);
					$(".project-entry").append(formattedHTMLprojectImage);
				}
			}
		}
	}
};


 var education = {
	schools: [
	{
		name: 'LaGuardia Community College',
		location: 'Long Island City, NY, US',
		degree: 'AA',
		majors: ['Mass Communications', 'Human Services'],
    dates: '2011-2015',
	},
	{
		name: 'Frank Sinatra School of the Arts',
		location: 'Long Island City, NY, US',
		degree: 'High School Diploma',
		majors: ['Vocal'],
    dates: '2008-2011',
    url: 'http://franksinatraschoolofthearts.org/',
		}
	],
	onlineCourses: [
	{
		title: 'JavaScript Crash Course',
		school: 'Udacity',
		dates: '2017-2018',
		url: 'http://www.udacity.com/course/ud804',
		}
	],


	display: function () {
		if (education.schools.length > 0 || education.onlineCourses.length > 0) {
			for (var i = 0; i < education.schools.length; i++) {
				var formattedName = HTMLschoolName.replace(DATA, education.schools[i].name);
				var formattedDegree = HTMLschoolDegree.replace(DATA, education.schools[i].degree);
				var formattedSchoolDates = HTMLschoolDates.replace(DATA, education.schools[i].dates);
				var formattedLocation = HTMLschoolLocation.replace(DATA, education.schools[i].location);
				var formattedNameDegree = formattedName + formattedDegree;

				$('#education').append(HTMLschoolStart);
				$('.education-entry:last').append(formattedNameDegree);
				$('.education-entry:last').append(formattedSchoolDates);
				$('.education-entry:last').append(formattedLocation);
        $('.education-entry:last').append(HTMLschoolMajor.replace(DATA, education.schools[i].major));

          var formattedMajor = HTMLschoolMajor.replace(DATA, education.schools[i].major[i]);

				$('.education-entry:last').append(formattedMajor);
				}
			}

			$('#education').append(HTMLonlineClasses);

			for (var k = 0, len = education.onlineCourses.length; k < len; k++) {
				var formattedTitle = HTMLonlineTitle.replace(DATA, education.onlineCourses[k].title).replace('#', education.onlineCourses[k].url);
				var formattedSchool = HTMLonlineSchool.replace(DATA, education.onlineCourses[k].school);
				var formattedOnlineDates = HTMLonlineDates.replace(DATA, education.onlineCourses[k].dates);
			}
		}
	};
 };

bio.display();
work.display();
projects.display();
education.display();
$('#mapDiv').append(googleMap);
