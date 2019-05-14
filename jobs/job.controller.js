const Job = require('./job.model.js');

//Create new Job
exports.create = (req, res) => {
    // Request validation
    if(!req.body) {
        
        return res.status(400).send({
            message: "Job content can not be empty"
        });
    }

    // Create a Job
    const job = new Job({
        companylogo: req.body.companylogo || "No Job title", 
        companyname: req.body.companyname,
        work: req.body.work,
        period: req.body.period,
        responsabilities: req.body.responsabilities,
        companyweb: req.body.companyweb
    });

    // Save Job in the database
    job.save()
    .then(data => {
        res.send(data);
    }).catch(err => {
        res.status(500).send({
            message: err.message || "Something wrong while creating the Job."
        });
    });
};

// Retrieve all Jobs from the database.
exports.findAll = (req, res) => {
    Job.find()
    .then(Jobs => {
        res.send(Jobs);
    }).catch(err => {
        res.status(500).send({
            message: err.message || "Something wrong while retrieving Jobs."
        });
    });
};

// Find a single Job with a JobId
exports.findOne = (req, res) => {
    Job.findById(req.params.JobId)
    .then(Job => {
        if(!Job) {
            return res.status(404).send({
                message: "Job not found with id " + req.params.JobId
            });            
        }
        res.send(Job);
    }).catch(err => {
        if(err.kind === 'ObjectId') {
            return res.status(404).send({
                message: "Job not found with id " + req.params.JobId
            });                
        }
        return res.status(500).send({
            message: "Something wrong retrieving Job with id " + req.params.JobId
        });
    });
};

// Update a Job
exports.update = (req, res) => {
    // Validate Request
    if(!req.body) {
        return res.status(400).send({
            message: "Job content can not be empty"
        });
    }

    // Find and update Job with the request body
    Job.findByIdAndUpdate(req.params.JobId, {
        companyname: req.body.companyname || "No Job title", 
        companylogo: req.body.companylogo,
        companylogo: req.body.companylogo,
        work: req.body.work,
        period: req.body.period,
        responsabilities: req.body.responsabilities,
        companyweb: req.body.companyweb
    }, {new: true})
    .then(Job => {
        if(!Job) {
            return res.status(404).send({
                message: "Job not found with id " + req.params.JobId
            });
        }
        res.send(Job);
    }).catch(err => {
        if(err.kind === 'ObjectId') {
            return res.status(404).send({
                message: "Job not found with id " + req.params.JobId
            });                
        }
        return res.status(500).send({
            message: "Something wrong updating note with id " + req.params.JobId
        });
    });
};

// Delete a note with the specified noteId in the request
exports.delete = (req, res) => {
    Job.findByIdAndRemove(req.params.JobId)
    .then(Job => {
        if(!Job) {
            return res.status(404).send({
                message: "Job not found with id " + req.params.JobId
            });
        }
        res.send({message: "Job deleted successfully!"});
    }).catch(err => {
        if(err.kind === 'ObjectId' || err.name === 'NotFound') {
            return res.status(404).send({
                message: "Job not found with id " + req.params.JobId
            });                
        }
        return res.status(500).send({
            message: "Could not delete Job with id " + req.params.JobId
        });
    });
};