
var name = "Irfan Haider";
var formattedname = HTMLheaderName.replace("%data%", name); 

var role = "Product Manager";
var formattedRole= HTMLheaderRole.replace("%data%", role);

$("#header").prepend(formattedRole);
$("#header").prepend(formattedname);


//var email="ihaide21@helpsyhelp.com"; 
//var formattedemail=HTMLemail.replace("%data%", email);
//$("#topContacts").append(formattedemail);
//var twitter="@bambam";
//var formattedtwitter=HTMLtwitter.replace("%data%", twitter);
//$("#topContacts").prepend(formattedtwitter);

var skills=
["python", " HTML", " Css"];


var bio = {
	"name" : "Mr. Irfan haider", 
	"role" : "no current role", 
	"contacts": {
		"email": "ihaide22@gmail.com", 
		"phone": "123-123-4563", 
		"location": "New York"
	},
	"WelcomeMessage": "please enjoy the website.", 
	"skills" : skills
}; 


//SKILLS
if(bio.skills.length > 0){
	$("#header").append(HTMLskillsStart);

	HTMLskills = HTMLskills.replace("%data%", skills);
	$("#header").append(HTMLskills);
	//If i comment above two lines and uncomment below lines till var work,
	//it doesn't work (same code as in the lecture)

	//var formatedSkill =HTMLskills.replace("%data%", bio.skills[0]);
	//$("#skills").append(formattedSkill);

//	formattedSkill=HTMLskills.replace("%data%", bio.skills[1]);
//	$("#skills").append(formattedSkill);

//	formattedSkill=HTMLskills.replace("%data%", bio.skills[2]);
//	$("skills").append(formattedSkill);
}


var work = {
	"jobs": [
		{ 
			"employer": "Levin Simes",
			"title": " Research Analyst", 
			"location": "San Francisco",
			"datesworked": "Jan 2013 - Present",
			"description": "Currently work with pharmaceutical companies"
		}, 
		{
			"employer": "Genentech",
			"title": "Manager", 
			"location": "San Francisco",
			"datesworked": "Jan 2010 - Present",
			"description": "Worked as an Equipment Technician"
		}
	]
}
//WORK
function displayWork() {
for (job in work.jobs) {
	$("#workExperience").append(HTMLworkStart);

	var formattedEmployer =HTMLworkEmployer.replace("%data%", work.jobs[job].employer); 
	var formattedTitle=HTMLworkTitle.replace("%data%", work.jobs[job].title);
	
	var formattedEmployerTitle = formattedEmployer + formattedTitle 
	$(".work-entry:last").append(formattedEmployerTitle);

	var formattedlocation=HTMLworkLocation.replace("%data%", work.jobs[job].location);
	$(".work-entry:last").append(formattedlocation);

	var formatteddatesworked=HTMLworkDates.replace("%data%", work.jobs[job].datesworked);
	$(".work-entry:last").append(formatteddatesworked);

	var fromattedDescription = HTMLworkDescription.replace("%data%", work.jobs[job].description);
	$(".work-entry:last").append(fromattedDescription);
}
}
displayWork()


var projects = {
	"projects": [
		{
			"title": "Interactive resume project",
			"date": "2016",
			"description": "Created an interactive resume with Javascript."
			//"images": [
			//	"images/fry.png",
				//"images/udacity_project.png"
			//]
		},
		{
			"title": "Sample project 1",
			"date": "2015",
			"description": "Created an interactive sample website."
			//"images": [
			//	"images/resume_project.png",
			//	"images/udacity_project.png"
			//]
		}
	]	
}
function displayProjects() {
//projects.display = function() {
for (project in projects.projects) {
	$("#projects").append(HTMLprojectStart);

	var formattedTitle = HTMLprojectTitle.replace("%data%", projects.projects[project].title);
	$(".project-entry:last").append(formattedTitle);

	var formattedDates = HTMLprojectDates.replace("%data%", projects.projects[project].date);
	$(".project-entry:last").append(formattedDates);

	var formattedDescription = HTMLprojectDescription.replace("%data%", projects.projects[project].description);
	$(".project-entry:last").append(formattedDescription)

		//if (projects.projects[entry].images.length > 0) {
		//	for (image in projects.projects[entry].images) {
		//		var formattedImage = HTMLprojectImage.replace("%data%", projects.projects[entry].images[image]);
		//		$(".project-entry:last").append(formattedImage);
		//	}
		//}	
	}
}

displayProjects()

var contactinfo = {
	"connect": [
		{
			"Mobile": "123-456-7890", 
			"Email": "abc@gmail.com", 
			"Twitter": "@abc", 
			"blog" : "blog.com"
		}
		]}

function displayContactInfo(){
	for (items in contactinfo.connect){
	$("#topContacts").append(HTMLcontactGeneric);

	var formattedmobile=HTMLmobile.replace("%data%", contactinfo.connect[items].Mobile);
	$(".work-entry:last").append(formattedmobile);

	var formattedemail=HTMLemail.replace("%data%", contactinfo.connect[items].Email);
	$(".work-entry:last").append(formattedemail);

	var formattedtwitter=HTMLtwitter.replace("%data%", contactinfo.connect[items].Twitter);
	$(".work-entry:last").append(formattedtwitter);

	var formattedblog=HTMLblog.replace("%data%", contactinfo.connect[items].blog);
	$(".work-entry:last").append(formattedblog)

	}
}
displayContactInfo()

var education = {
	"schools": [
		{
			"institution": "Mercyhurst", 
			"major": "Molecular Biology", 
			"location": "Erie", 
			"research" : "microorganisms",
			"Degree": "Bacherlor's of Science"
		}
		]}
function displayEducation(){
	for (school in education.schools) {
		$("#education").append(HTMLschoolStart);

		var formattedSchool=HTMLschoolName.replace("%data%", education.schools[school].institution);
		$(".work-entry:last").append(formattedSchool); 

		var formattedlocation=HTMLschoolLocation.replace("%data%", education.schools[school].location);
		$(".work-entry:last").append(formattedlocation)

		var formatteddegree=HTMLschoolDegree.replace("%data%", education.schools[school].Degree);
		$(".work-entry:last").append(formatteddegree);

		var formattedmajor=HTMLschoolMajor.replace("%data%", education.schools[school].major);
		$(".work-entry:last").append(formattedmajor)
	}
}


displayEducation()




//CLICK Values
$(document).click(function(loc) {
	var x = loc.pageX;
	var y = loc.pageY; 

	logClicks(x,y);
});

//console.log(LocationFinder);
$("#mapDiv").append(googleMap);








function locationizer(work_obj) {
	var locationArray = [];
	for (job in work_obj.jobs) {
		var newLocation = work_obj.jobs[job].location; 
		locationArray.push(newLocation);
	}
	return locationArray;
}
console.log(locationizer(work));

