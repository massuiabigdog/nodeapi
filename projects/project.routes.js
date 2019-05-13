module.exports = (app) => {
    const projects = require('./project.controller.js');

    // Create a new project
    app.post('/projects', projects.create);

    // Retrieve all projects
    app.get('/projects', projects.findAll);

    // Retrieve a single project with projectId
    app.get('/projects/:projectId', projects.findOne);

    // Update a Note with projectId
    app.put('/projects/:projectId', projects.update);

    // Delete a Note with projectId
    app.delete('/projects/:projectId', projects.delete);
}