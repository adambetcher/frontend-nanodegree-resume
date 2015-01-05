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
	]
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

if(bio.skills.length > 0) {
	$("#header").append(HTMLskillsStart);

	for (i = 0; i < bio.skills.length; ++i) {
		$("#skills").append(HTMLskills.replace("%data%", bio.skills[i]));
	}
}

for (job in work.jobs) {
	var formattedJobEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
	var formattedJobTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title);
	var formattedJobLocation = HTMLworkLocation.replace("%data%", work.jobs[job].location);
	var formattedJobDates = HTMLworkDates.replace("%data%", work.jobs[job].dates);
	var formattedJobDescription = HTMLworkDescription.replace("%data%", work.jobs[job].description);

	$("#workExperience").append(HTMLworkStart);
	$(".work-entry:last").append(formattedJobEmployer + formattedJobTitle);
	$(".work-entry:last").append(formattedJobLocation);
	$(".work-entry:last").append(formattedJobDates);
	$(".work-entry:last").append(formattedJobDescription);
}

