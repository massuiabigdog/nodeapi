module.exports = (app) => {
    const projects = require('./project.controller.js');

      // Retrieve all projects
      app.get('/projects', projects.findAll);

      // Retrieve a single project with projectId
      app.get('/projects/:projectId', projects.findOne);
  


    // Create a new project
  //  app.post('/projects', projects.create);

  
    // Update a Note with projectId
    //app.put('/projects/:projectId', projects.update);

    // Delete a Note with projectId
    // app.delete('/projects/:projectId', projects.delete);
}