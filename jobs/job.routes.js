module.exports = (app) => {
    const jobs = require('./job.controller.js');
    // Retrieve all jobs
    app.get('/jobs', jobs.findAll);

    // Retrieve a single job with jobId
    app.get('/jobs/:jobId', jobs.findOne);

    // Create a new job
//    app.post('/jobs', jobs.create);


    // Update a Note with jobId
//    app.put('/jobs/:jobId', jobs.update);

    // Delete a Note with jobId
//    app.delete('/jobs/:jobId', jobs.delete);
}