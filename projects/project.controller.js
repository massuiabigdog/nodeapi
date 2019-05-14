const Project = require('./project.model.js');

//Create new Product
exports.create = (req, res) => {
    // Request validation
    if(!req.body) {
        
        return res.status(400).send({
            message: "Project content can not be empty"
        });
    } 

    // Create a Product
    const project = new Project({
        title: req.body.title || "No product title", 
        shortdescription: req.body.shortdescription,
        tilecolor: req.body.tilecolor,
        clientlogo: req.body.clientlogo,
        coverimage: req.body.coverimage,
        heroimage: req.body.heroimage,
        linktoproject: req.body.linktoproject,
        photo: req.body.photo,
        photoarray: req.body.photoarray,
        tech: req.body.tech
    });

    // Save Product in the database
    project.save()
    .then(data => {
        res.send(data);
    }).catch(err => {
        res.status(500).send({
            message: err.message || "Something wrong while creating the product."
        });
    });
};

// Retrieve all products from the database.
exports.findAll = (req, res) => {
    Project.find()
    .then(project => {
        res.send(project);
    }).catch(err => {
        res.status(500).send({
            message: err.message || "Something wrong while retrieving products."
        });
    });
};

// Find a single product with a productId
exports.findOne = (req, res) => {
    Project.findById(req.params.projectId)
    .then(project => {
        if(!project) {
            return res.status(404).send({
                message: "Product not found with id " + req.params.projectId
            });            
        }
        res.send(project);
    }).catch(err => {
        if(err.kind === 'ObjectId') {
            return res.status(404).send({
                message: "Project not found with id " + req.params.projectId
            });                
        }
        return res.status(500).send({
            message: "Something wrong retrieving product with id " + req.params.projectId
        });
    });
};

// Update a product
exports.update = (req, res) => {
    // Validate Request
    if(!req.body) {
        return res.status(400).send({
            message: "Project content can not be empty"
        });
    }

    // Find and update product with the request body
    Project.findByIdAndUpdate(req.params.projectId, {
        title: req.body.title || "No product title", 
        shortdescription: req.body.shortdescription,
        tilecolor: req.body.tilecolor,
        clientlogo: req.body.clientlogo,
        coverimage: req.body.coverimage,
        heroimage: req.body.heroimage,
        linktoproject: req.body.linktoproject,
        photo: req.body.photo,
        photoarray: req.body.photoarray,
        tech: req.body.tech
    }, {new: true})
    .then(project => {
        if(!project) {
            return res.status(404).send({
                message: "Product not found with id " + req.params.projectId
            });
        }
        res.send(project);
    }).catch(err => {
        if(err.kind === 'ObjectId') {
            return res.status(404).send({
                message: "Project not found with id " + req.params.projectId
            });                
        }
        return res.status(500).send({
            message: "Something wrong updating note with id " + req.params.projectId
        });
    });
};

// Delete a note with the specified noteId in the request
exports.delete = (req, res) => {
    Project.findByIdAndRemove(req.params.projectId)
    .then(project => {
        if(!project) {
            return res.status(404).send({
                message: "Product not found with id " + req.params.projectId
            });
        }
        res.send({message: "Product deleted successfully!"});
    }).catch(err => {
        if(err.kind === 'ObjectId' || err.name === 'NotFound') {
            return res.status(404).send({
                message: "Product not found with id " + req.params.projectId
            });                
        }
        return res.status(500).send({
            message: "Could not delete product with id " + req.params.projectId
        });
    });
};