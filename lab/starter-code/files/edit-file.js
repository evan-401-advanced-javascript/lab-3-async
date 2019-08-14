'use strict'

const fs = require('fs');
// const fileReader = require('lib/reader.js');
//
// const myFileSystem = new FileSystem();

fs.readFile(`${__dirname}/data/person.json`,
    (error, fileString) => {
    if(error) {
        console.error(error)
    } else {
        let obj = JSON.parse(fileString);
        console.log(obj);
        obj.firstName = 'ted';
        console.log(obj);
        let newJson = JSON.stringify(obj);
        fs.writeFile(`${__dirname}/data/person.json`, newJson, (error) => {
            if (error) {
                console.error(error)
            } else {
                console.log('data written');
                fs.readFile(`${__dirname}/data/person.json`,
                    (error) => {
                        if(error) {
                            console.error(error)
                        } else {
                            let obj2 = JSON.parse(fileString);
                            console.log(obj2);
                        }

                    }

                )
            }
        });

    }
    });
