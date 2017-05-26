'use strict';
var app = app || {};

(function(module) {
  const aboutController = {};

  // COMMENT: What is this function doing? Where is it called? Does it call any other functions, and if so, in what file(s) do those function(s) live?
  // (put your response in a comment here)
  // This function is being called to hide the articles and show the about which is being populated with a callback. It is being called in the route.js file. The other functions it calls is repoView.index which lies in the repoView.js file. And also repos.requestRepos in the repo.js file. 
  aboutController.index = () => {
    $('#about').show().siblings().hide();
    app.repos.requestRepos(app.repoView.index);
  };

  module.aboutController = aboutController;
})(app);
