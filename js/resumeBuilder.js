var work = 
{
    "jobs": [
        {
            "employer": "Boeing",
            "title": "Architect",
            "location": "Seattle, WA",
            "dates": "2010 - present",
            "description": "Define and ensure software quality"
        },
        {
            "employer": "Boeing",
            "title": "Scrum Master",
            "location": "Seattle, WA",
            "dates": "2005 - 2009",
            "description": "Define and ensure software production"
        }
    ],
    display : function (work) {
		for (job in this.jobs) {
			thisJob = this.jobs[job];
			this.displayNewJobSection();
			this.displayJobEmployeerTitle(thisJob.employer, thisJob.title);
			this.displayJobLocation(thisJob.location);
			this.displayJobDates(thisJob.dates);
			this.displayJobDescription(thisJob.description);
		}
	},

	displayNewJobSection : function () {
		$("#workExperience").append(HTMLworkStart);
	},

	displayJobEmployeerTitle : function (employer, title) {
		var formattedJobEmployer = HTMLworkEmployer.replace("%data%", employer);
		var formattedJobTitle = HTMLworkTitle.replace("%data%", title);
		$(".work-entry:last").append(formattedJobEmployer + formattedJobTitle);
	},

	displayJobLocation : function (location) {
		var formattedJobLocation = HTMLworkLocation.replace("%data%", location);
		$(".work-entry:last").append(formattedJobLocation);
	},

	displayJobDates : function (dates) {
		var formattedJobDates = HTMLworkDates.replace("%data%", dates);
		$(".work-entry:last").append(formattedJobDates);
	},

	displayJobDescription : function (description) {
		var formattedJobDescription = HTMLworkDescription.replace("%data%", description);
		$(".work-entry:last").append(formattedJobDescription);
	}

};

var projects =
{
	"projects" : [
	  {
		"title" : "Big Old Cert Software",
		"dates" : "2005 - 2012",
		"description" : "manage airplane certification tasks",
		"images" : ["http://lorempixel.com/400/200/sports/1", "http://lorempixel.com/400/200/sports", "http://lorempixel.com/400/200"]
	  },
	  {
		"title" : "People Cert Training",
		"dates" : "2013",
		"description" : "manage certifications",
		"images" : ["http://lorempixel.com/400/200/sports/1", "http://lorempixel.com/400/200/sports", "http://lorempixel.com/400/200"]
	  },
	  {
		"title" : "Big task manager",
		"dates" : "2014-2015",
		"description" : "Manage findings",
		"images" : ["http://lorempixel.com/400/200/sports/1", "http://lorempixel.com/400/200/sports", "http://lorempixel.com/400/200"]
	  }	
	],
	"display" : function() {
		for (var project in this.projects) {
			var proj = this.projects[project];
			$("#projects").append(HTMLprojectStart);
			$(".project-entry:last").append(HTMLprojectTitle.replace("%data%", proj.title));
			$(".project-entry:last").append(HTMLprojectDates.replace("%data%", proj.dates));
			$(".project-entry:last").append(HTMLprojectDescription.replace("%data%", proj.description));
			for(image in proj.images) {
				$(".project-entry:last").append(HTMLprojectImage.replace("%data%", proj.images[image]));
			}
		}
	}
};

var bio = {
    "name": "Adam J Betcher",
    "role": "Software Architect",
    "welcomeMessage": "Welcome to my resume!",
    "contacts": {
        "email": "adambetcher@theregularguys.biz",
        "mobile": "123-456-7890",
        "github": "adambetcher",
        "location" : "Bellevue, WA"
    },
    "skills": [
        "Software Development",
        "Business Development",
        "Software Architecture",
        "C#",
        "MVC.Net"
    ],
    "pictureURL": "http://www.theregularguys.biz/images/Adam.jpg",

    display : function(bio) {
		this.displayNameRole(this.name, this.role);
		this.displayWelcomeMessage(this.welcomeMessage);
		this.displayContacts(this.contacts);
		this.displaySkills(this.skills);	
		this.displayPicture(this.pictureURL);
	},

	displayNameRole : function(name, role) {
		$("#main").prepend(HTMLheaderRole.replace("%data%", role));
		$("#main").prepend(HTMLheaderName.replace("%data%", name));
	},

	displayWelcomeMessage : function(welcomeMessage) {
		$("#main").prepend(HTMLWelcomeMsg.replace("%data%", welcomeMessage));
	},

	displayContacts : function(contacts) {
		//$("#main").prepend(HTMLWelcomeMsg.replace("%data%", welcomeMessage));
	},

	displaySkills : function(skills) {
		if(skills.length > 0) {
			$("#header").append(HTMLskillsStart);

			for (i = 0; i < skills.length; ++i) {
				$("#skills").append(HTMLskills.replace("%data%", skills[i]));
			}
		}
	},

	displayPicture : function(pictureURL) {
		$("#main").prepend(HTMLbioPic.replace("%data%", pictureURL));
	}

};

var education = {
	"schools" : [
	  {
		"schoolName"  : "NYIT"
		, "degree" : "MBA"
		, "major" : ["Marketing", "Finance"]
		, "years" : "2005-2006"
		, "location": "New York, NY"
	  }
	  , {
		"schoolName"  : "University of Phoenix"
		, "degree" : "BS"
		, "major" : "eBusiness"
		, "years" : "2001-2004"
		, "location": "Phoenix, AZ"
	  }
	]
}

function populateResume() {
	$("#mapDiv").append(googleMap);
	bio.display();
	work.display();
	projects.display();

	//*** This is an internationalize button that may be useful in the future
	//*** 	This button will capitalize the last name of the subject person
	//*** Uncomment for the button to show up on the very bottom left of the resume
	//$("#main").append(internationalizeButton);
}

populateResume();
