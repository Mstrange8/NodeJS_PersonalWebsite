const getDb = require('../util/database').getDb;
const mongo = require('mongodb');

class Projects {
    constructor(order, title, image, description, id) {
        this.order = order;
        this.title = title;
        this.image = image;
        this.description = description;
        this._id = id ? new mongo.ObjectId(id) : null;
    }

    save() {
        const db = getDb();
        let dbOp;
        if (this._id) {
            dbOp = db.collection('projects').updateOne({ _id: this._id }, {$set: this});
        } else {
            dbOp = db.collection('projects').insertOne(this);
        }
        return dbOp
        .then(result => {
            console.log(result);
        })
        .catch(err => {
            console.log(err);
        });
    }

    static fetchAll() {
        const db = getDb();
        return db
        .collection('projects')
        .find()
        .toArray()
        .then(proj => {
            return proj;
        })
        .catch(err=> {
            console.log(err);
        });
    }

    static findById(projId) {
        const db = getDb();
        return db
        .collection('projects')
        .find({ _id: new mongo.ObjectID(projId) })
        .next()
        .then(proj => {
            console.log(proj);
            return proj;
        })
        .catch(err => {
            console.log(err);
        });
    }

    static deleteById(projId) {
        const db = getDb();
        return db
        .collection('projects')
        .deleteOne({_id: new mongo.ObjectId(projId)})
        .then(result => {
            console.log('deleted')
        })
        .catch(err => {
            console.log(err);
        });
    }
}

module.exports = Projects;



const fs = require('fs');
const path = require('path');
const { exit } = require('process');

const p = path.join(
    path.dirname(require.main.filename),
    'data',
    'projects.json'
);


const getProjectsFromFile = (callback) => {
    fs.readFile(p, (err, fileContent) => {
        if (err) {
            callback([]);
        } else {
            callback(JSON.parse(fileContent));
        }
    });
}

module.exports = class Projects {
    constructor(id, order, title, image, description) {
        this.id = id;
        this.order = order;
        this.title = title;
        this.image = image;
        this.description = description;
    }

    save() {
        getProjectsFromFile(projects => {
            if (this.id) {
                const existingProjectsIndex = projects.findIndex(project => project.id === this.id);
                const updatedProjects = [...projects];
                updatedProjects[existingProjectsIndex] = this;
                fs.writeFile(p, JSON.stringify(updatedProjects.sort(function(first, second) {
                    return first.order - second.order
                })), err => {
                    console.log(err);
                });
            } else {
                this.id = Math.random().toString();
                projects.push(this);
                fs.writeFile(p, JSON.stringify(projects.sort(function(first, second) {
                    return first.order - second.order
                })), err => {
                    console.log(err);
                });
            } 
        });
    }

    static deleteById(id) {
        getProjectsFromFile(projects => {
            const updatedProjects = projects.filter(proj => proj.id !== id);
            fs.writeFile(p, JSON.stringify(updatedProjects.sort(function(first, second) {
                return first.order - second.order
            })), err => {
                console.log(err);
            });
        });
    }

    static fetchAll(callback) {
        getProjectsFromFile(callback);
    }

    static findById(id, callback) {
        getProjectsFromFile(projects => {
            const project = projects.find(p => p.id === id);
            callback(project);
        });
    }

};