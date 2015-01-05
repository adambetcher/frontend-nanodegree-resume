var myName = HTMLheaderName.replace("%data%", "Adam J Betcher");
var myRole = HTMLheaderRole.replace("%data%", "Software Architect");
var myEmail = HTMLemail.replace("%data%", "adambetcher@theregularguys.biz");
var myMobile = HTMLmobile.replace("%data%", "555-666-7777");
var myPictureURL = HTMLbioPic.replace("%data%", "http://www.theregularguys.biz/images/Adam.jpg");
var myWelcomeMessage = HTMLWelcomeMsg.replace("%data%", "Welcome to my resume!");
var mySkills = [
		HTMLskills.replace("%data%", "Software Development")
		, HTMLskills.replace("%data%", "Business Development")
		, HTMLskills.replace("%data%", "Software Architecture")
		, HTMLskills.replace("%data%", "C#")
		, HTMLskills.replace("%data%", "MVC.Net")
	];

var bio = {
	name : myName
	, role : myRole
	, contactInfo : {
		email : myEmail
		, mobile : myMobile
	}
	, pictureURL : myPictureURL
	, welcomeMessage : myWelcomeMessage
	, skills : mySkills
};

var work = {
	position: HTMLworkTitle.replace("%data%", "Architect")
	, employer: HTMLworkEmployer.replace("%data%", "Boeing")
	, yearsWorked: HTMLworkDates.replace("%data%", 25)
	, city: HTMLworkLocation.replace("%data%", "Seattle")
};

var myEducation = {
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

$("#main").prepend(bio.role);
$("#main").prepend(bio.name);
$("#main").append(bio.contactInfo.myEmail);
$("#main").append(bio.contactInfo.myMobile);
$("#main").append(bio.pictureURL);
$("#main").append(bio.welcomeMessage);
$("#main").append(HTMLskillsStart);
$("#skillsH3").append(bio.skills);
$("#workExperience").append(HTMLworkStart);
$(".work-entry").append(work.employer + work["position"]);
$(".work-entry").append(work.yearsWorked);
$(".work-entry").append(work.city);
$("#education").append(HTMLschoolStart);
$(".education-entry").append(objectToString(myEducation));

