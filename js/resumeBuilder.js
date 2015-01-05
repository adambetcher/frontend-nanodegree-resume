var myName = HTMLheaderName.replace("%data%", "Adam J Betcher");
var myRole = HTMLheaderRole.replace("%data%", "Software Architect");
var myEmail = HTMLemail.replace("%data%", "adambetcher@theregularguys.biz");
var myMobile = HTMLmobile.replace("%data%", "555-666-7777");
var myPictureURL = HTMLbioPic.replace("%data%", "http://www.theregularguys.biz/images/Adam.jpg");
var myWelcomeMessage = HTMLWelcomeMsg.replace("%data%", "Welcome to my resume!");
var mySkills = [
		HTMLskills.replace("%data%", "Software Development")
		, HTMLskills.replace("%data%", "Busienss Developship")
		, HTMLskills.replace("%data%", "Software Architecture")
		, HTMLskills.replace("%data%", "C#")
		, HTMLskills.replace("%data%", "MVC.Net")
	];

var bio = {
	name : myName
	,role : myRole
	,contactInfo : {
		email : myEmail
		, mobile : myMobile
	}
	,pictureURL : myPictureURL
	,welcomeMessage : myWelcomeMessage
	,skills : mySkills
};


$("#main").prepend(bio.role);
$("#main").prepend(bio.name);
$("#main").append(bio.contactInfo.myEmail);
$("#main").append(bio.contactInfo.myMobile);
$("#main").append(bio.pictureURL);
$("#main").append(bio.welcomeMessage);
$("#main").append(HTMLskillsStart);
$("#skillsH3").append(bio.skills);

