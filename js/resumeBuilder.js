
var headName= "Siyamthanda Tyani";
//var awesomeThoughts="I am Siyamthanda and I am AWESOME";
//var funThoughts=awesomeThoughts.replace("AWESOME","FUN");
//$("#main").append(funThoughts);

var formattedName=HTMLheaderName.replace("%data%",headName);
var headRole="Software Developer";
var formattedRole=HTMLheaderRole.replace("%data%",headRole);
$("#header").prepend(formattedRole);
$("#header").prepend(formattedName);

//$("#main").append(skills[0]);
//var skills=["awesomeness","programmer","teacher","JS"];
//$("#main").append(skills);

//var bio={
  //"name":"Siyamthanda",
  //"role":"software developer",
  //"contactInfo":{
  //  "mobile":"076-233-2325",
  //  "email":"siyamthanda.tyani@gmail.com",
  //"location":"cape town"
  //  },

  //"welcomeMSG":"welcome to my biography",
  //"skills":["awesomeness","programmer","teacher","JS"],
  //"pictureURL":"images/fry.jpg"
//}

//$("#main").append(bio.name);
//$("#main").append(bio.skills);
//$("#main").append(bio.pictureURL);
//$("#main").format(bio);

//using dot notation to declare objects

//var work={};
//work.position="software developer";
//work.employer="skywalkInnovations";
//work.years="1month";
//work.city="Cape Town";
//var education={};
//education["name"]="WSU";
//education["years"]="2007-2009";
//education["city"]="East London";

//$("#main").append(work["position"]);
//$("#main").append(education.name);

//var bio={
  //"name":"Siyamthanda",
  //"role":"software developer",
  //"contactInfo":{
  //  "mobile":"076-233-2325",
  //  "email":"siyamthanda.tyani@gmail.com",
  //"location":"cape town"
  //  },



var bio={
  "name":"Siyamthanda Tyani",
  "role":"Software Developer",
  "contacts":{
  "mobile":"076-233-2325",
  "email":"siyamthanda.tyani@gmail.com",
  "github":"siyamthanda",
  "twitter":"@siyah",
  "location":"Cape Town"
},
  "welcomeMessage":"I am Siyamthanda and welcome to my web page",
  "skills":["c++","javascript","visualbasic","CSS"],
  "biopic":"images/pic1.jpg"
}

  var formattedContacts=HTMLmobile.replace("%data%",bio.contacts.mobile);
  $("#topContacts").append(formattedContacts);
  var formattedEmail=HTMLemail.replace("%data%",bio.contacts.email);
  $("#topContacts").append(formattedEmail);
  var formattedGit=HTMLgithub.replace("%data%",bio.contacts.github);
  $("#topContacts").append(formattedGit);
  var formattedTwitter=HTMLtwitter.replace("%data%",bio.contacts.twitter);
  $("#topContacts").append(formattedTwitter);
  var formattedLocation=HTMLlocation.replace("%data%",bio.contacts.location);
  $("#topContacts").append(formattedLocation);

  var formattedBiopic=HTMLbioPic.replace("%data%",bio.biopic);
  $("#header").append(formattedBiopic);

  var formattedMsg=HTMLwelcomeMsg.replace("%data%",bio.welcomeMessage);
  $("#header").append(formattedMsg);

if (bio.skills.length>0){
  $("#header").append(HTMLskillsStart);
  var formattedSkill=HTMLskills.replace("%data%",bio.skills[0]);
  $("#skills").append(formattedSkill);
  formattedSkill=HTMLskills.replace("%data%",bio.skills[1]);
  $("#skills").append(formattedSkill);
  formattedSkill=HTMLskills.replace("%data%",bio.skills[2]);
  $("#skills").append(formattedSkill);
  formattedSkill=HTMLskills.replace("%data%",bio.skills[3]);
  $("#skills").append(formattedSkill);
}



/*$("#main").append(bio.name);
$("#main").append(bio.role);
$("#main").append(bio.contacts.mobile);
$("#main").append(bio.contacts.email);
$("#main").append(bio.contacts.github);
$("#main").append(bio.contacts.twitter);
$("#main").append(bio.contacts.loctaion);
$("#main").append(bio.welcomeMessage);
$("#main").append(bio.skills);*/

//$("#main").append(education.name);
/*$("#main").append(bio.role);
$("#main").append(bio.contacts.mobile);
$("#main").append(bio.contacts.email);
$("#main").append(bio.contacts.github);
$("#main").append(bio.contacts.twitter);
$("#main").append(bio.contacts.loctaion);
$("#main").append(bio.welcomeMessage);
$("#main").append(bio.skills);
*/

var work={
    "jobs":[
      {
        "employer":"SITA",
        "title":"Software Developer",
        "location":"Cape Town",
        "dates":"2011-2012",
        "description":"Analysing user requirements"+","+"researching and designing and writing new software programs"+"."
     },
     {
       "employer":"CompuSA",
       "title":"Software Developer",
       "location":"Cape Town",
       "dates":"2011-2012",
       "description":"Integrating existing software products and getting incompatible platforms to work together"+","+"creating technical specifications and test plans"+";"+"writing and testing code andthen refining and rewriting as necessary"+";"+"writing systems to control the scheduling of jobs on a mainframe computer or to control the access allowed to users or remote systems"+";"+"writing operational documentation with technical authors"+"."
     }
  ]
}

var displayWork = function(){
for (job in work.jobs){
  $("#workExperience").append(HTMLworkStart);
  var formattedEmployer = HTMLworkEmployer.replace("%data%",work.jobs[job].employer);
  var formattedTitle = HTMLworkTitle.replace("%data%",work.jobs[job].title);
  var formattedEmployerTitle = formattedEmployer+formattedTitle;
  $(".work-entry:last").append(formattedEmployerTitle);

  var formattedDates = HTMLworkDates.replace("%data%",work.jobs[job].dates);
  $(".work-entry:last").append(formattedDates);

  var formattedDescription = HTMLworkDescription.replace("%data%",work.jobs[job].description);
  $(".work-entry:last").append(formattedDescription);

  }
}
displayWork();
var projects={
  "projects":[
    {
      "title":"Skywalk Innovations",
      "dates":"Learnership Program",
      "description":"Learn different programming languages"+","+"design web pages and mobile applications"+".",
      "images":["images/pic.jpg","images/pic2.jpg"]
    }
 ]
}

projects.display=function(){
  for (project in projects.projects){
  $("#projects").append(HTMLprojectStart);
  var formattedTitle = HTMLprojectTitle.replace("%data%",projects.projects[project].title);
  $(".project-entry:last").append(formattedTitle);
  var formattedDates = HTMLprojectDates.replace("%data%",projects.projects[project].dates);
  $(".project-entry:last").append(formattedDates);
  var formattedDescription = HTMLprojectDescription.replace("%data%",projects.projects[project].description);
  $(".project-entry:last").append(formattedDescription);

  if (projects.projects[project].images.length>0){
    for(image in projects.projects[project].images){
      //var formattedImage1 = HTMLprojectImage.replace("%data%",projects.projects[project].images[image]);
      //$(".project-entry:last").append(formattedImage1);
      var formattedImage = HTMLprojectImage.replace("%data%",projects.projects[project].images[image]);
      $(".project-entry:last").append(formattedImage);
      //formattedSkill=HTMLskills.replace("%data%",bio.skills[1]);
      //$("#skills").append(formattedSkill);
      }
    }
  }
}
projects.display();

var education={
  "schools":[
    {
      "name":"Damelin College",
      "degree":"Civil Engineering",
      "dates":2002,
      "location":"Durban",
      "majors":["Building","Architectur Design"]

    },
    {
      "name":"WSU",
      "degree":"Computer Science",
      "dates":2007,
      "location":"East London",
      "majors":["Building","Architectur Design"]

    }
 ],
   "onlineCourses":[
     {
   "onlineClasses":"Online Courses",
   "title":"JavaScript,Crash Course",
   "school":"Damelin",
   "dates":2011,
   "url":"www.udacity.com"
  }
 ]
}


    if (education.schools.length>0){
      $("#education").append(HTMLschoolStart);
      var formattedSclName = HTMLschoolName.replace("%data%",education.schools[0].name);
      var formattedDegree = HTMLschoolDegree.replace("%data%",education.schools[0].degree);
      $(".education-entry:last").append(formattedSclName+formattedDegree);
      var formattedDates = HTMLschoolDates.replace("%data%",education.schools[0].dates);
      $(".education-entry:last").append(formattedDates);

      var formattedLocation = HTMLschoolLocation.replace("%data%",education.schools[0].location);
      $(".education-entry:last").append(formattedLocation);
      var formattedMajors = HTMLschoolMajor.replace("%data%",education.schools[0].majors);
      $(".education-entry:last").append(formattedMajors);

      var formattedSclName = HTMLschoolName.replace("%data%",education.schools[1].name);
      var formattedDegree = HTMLschoolDegree.replace("%data%",education.schools[1].degree);
      $(".education-entry:last").append(formattedSclName+formattedDegree);
      var formattedDates = HTMLschoolDates.replace("%data%",education.schools[1].dates);
      $(".education-entry:last").append(formattedDates);

      var formattedLocation = HTMLschoolLocation.replace("%data%",education.schools[1].location);
      $(".education-entry:last").append(formattedLocation);
      var formattedMajors = HTMLschoolMajor.replace("%data%",education.schools[1].majors);
      $(".education-entry:last").append(formattedMajors);

    }
    if(education.onlineCourses.length>0){
    var formattedonlineClasses= HTMLonlineClasses.replace("%data%",education.onlineCourses[0].onlineClasses);
    $(".education-entry:last").append(formattedonlineClasses);
    var formattedOnlineTitle = HTMLschoolMajor.replace("%data%",education.onlineCourses[0].title);
    $(".education-entry:last").append(formattedOnlineTitle );

    var formattedonlineSchool = HTMLonlineSchool.replace("%data%",education.onlineCourses[0].school);
    $(".education-entry:last").append(formattedonlineSchool);
    var formattedonlineDates = HTMLonlineDates.replace("%data%",education.onlineCourses[0].dates);
    $(".education-entry:last").append(formattedonlineDates);
}
