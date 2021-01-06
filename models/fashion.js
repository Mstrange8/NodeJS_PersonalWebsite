const fs = require('fs');
const path = require('path');
const { exit } = require('process');

const p = path.join(
    path.dirname(require.main.filename),
    'data',
    'fashion.json'
);


const getFashionFromFile = (callback) => {
    fs.readFile(p, (err, fileContent) => {
        if (err) {
            callback([]);
        } else {
            callback(JSON.parse(fileContent));
        }
    });
}

module.exports = class Fashion {
    constructor(id, order, title, image, description) {
        this.id = id;
        this.order = order;
        this.title = title;
        this.image = image;
        this.description = description;
    }

    save() {
        getFashionFromFile(fashions => {
            if (this.id) {
                const existingFashionIndex = fashions.findIndex(fashion => fashion.id === this.id);
                const updatedFashion = [...fashions];
                updatedFashion[existingFashionIndex] = this;
                fs.writeFile(p, JSON.stringify(updatedFashion.sort(function(first, second) {
                    return first.order - second.order
                })), err => {
                    console.log(err);
                });
            } else {
                this.id = Math.random().toString();
                fashions.push(this);
                fs.writeFile(p, JSON.stringify(fashions.sort(function(first, second) {
                    return first.order - second.order
                })), err => {
                    console.log(err);
                });
            } 
        });
    }

    static deleteById(id) {
        getFashionFromFile(fashions => {
            const updatedFashion = fashions.filter(fash => fash.id !== id);
            fs.writeFile(p, JSON.stringify(updatedFashion.sort(function(first, second) {
                return first.order - second.order
            })), err => {
                console.log(err);
            });
        });
    }

    static fetchAll(callback) {
        getFashionFromFile(callback);
    }

    static findById(id, callback) {
        getFashionFromFile(fashions => {
            const fashion = fashions.find(p => p.id === id);
            callback(fashion);
        });
    }

};