var work = 
{
    "jobs": [
        {
            "employer": "Boeing",
            "title": "Architect",
            "location": "Seattle",
            "dates": "2010 - present",
            "description": "Define and ensure software quality"
        },
        {
            "employer": "Boeing",
            "title": "Scrum Master",
            "location": "Seattle",
            "dates": "2005 - 2009",
            "description": "Define and ensure software production"
        }
    ]
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
        "github": "adambetcher"
    },
    "skills": [
        "Software Development",
        "Business Development",
        "Software Architecture",
        "C#",
        "MVC.Net"
    ],
    "pictureURL": "http://www.theregularguys.biz/images/Adam.jpg"
};

var education = {
	"schools" : [
	  {
		"schoolName"  : "NYIT"
		, "degree" : "MBA"
		, "major" : ["Marketing", "Finance"]
		, "years" : "2005-2006"
		, "city": "New York"
	  }
	  , {
		"schoolName"  : "University of Phoenix"
		, "degree" : "BS"
		, "major" : "eBusiness"
		, "years" : "2001-2004"
		, "city": "Phoenix"
	  }
	]
}

displayBio(bio);
displayWork(work);
projects.display();

function displayWork(work) {
	for (job in work.jobs) {
		displayNewJobSection();
		displayJobEmployeerTitle(work.jobs[job].employer, work.jobs[job].title);
		displayJobLocation(work.jobs[job].location);
		displayJobDates(work.jobs[job].dates);
		displayJobDescription(work.jobs[job].description);
	}
}

function displayNewJobSection() {
	$("#workExperience").append(HTMLworkStart);
}

function displayJobEmployeerTitle(employer, title) {
	var formattedJobEmployer = HTMLworkEmployer.replace("%data%", employer);
	var formattedJobTitle = HTMLworkTitle.replace("%data%", title);
	$(".work-entry:last").append(formattedJobEmployer + formattedJobTitle);
}

function displayJobLocation(location) {
	var formattedJobLocation = HTMLworkLocation.replace("%data%", location);
	$(".work-entry:last").append(formattedJobLocation);
}

function displayJobDates(dates) {
	var formattedJobDates = HTMLworkDates.replace("%data%", dates);
	$(".work-entry:last").append(formattedJobDates);
}

function displayJobDescription(description) {
	var formattedJobDescription = HTMLworkDescription.replace("%data%", description);
	$(".work-entry:last").append(formattedJobDescription);
}

$(document).click(function(loc) {
  // your code goes here
  var x = loc.pageX;
  var y = loc.pageY;

  logClicks(x,y);
});

function displayBio(bio) {
	displayNameRole(bio.name, bio.role);
	displayWelcomeMessage(bio.welcomeMessage);
	displayContacts(bio.contacts);
	displaySkills(bio.skills);	
	displayPicture(bio.pictureURL);
}

function displayNameRole(name, role) {
	$("#main").prepend(HTMLheaderRole.replace("%data%", role));
	$("#main").prepend(HTMLheaderName.replace("%data%", name));
}

function displayWelcomeMessage(welcomeMessage) {
	$("#main").prepend(HTMLWelcomeMsg.replace("%data%", welcomeMessage));

}

function displayContacts(contacts) {
	//$("#main").prepend(HTMLWelcomeMsg.replace("%data%", welcomeMessage));
}

function displaySkills(skills) {
	if(skills.length > 0) {
		$("#header").append(HTMLskillsStart);

		for (i = 0; i < skills.length; ++i) {
			$("#skills").append(HTMLskills.replace("%data%", skills[i]));
		}
	}

}

function displayPicture(pictureURL) {
	$("#main").prepend(HTMLbioPic.replace("%data%", pictureURL));
}


$("#main").append(internationalizeButton);

function inName(name) {
	var names = name.split(" ");
	var capsLastName = names.pop().toUpperCase();
	names.push(capsLastName);

	return names.join(" ");
}

