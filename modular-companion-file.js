const fs = require('fs');
const path = require('path');

module.exports = function(dirName,fileExt,callback){
    fs.readdir(dirName,function(err,list){
        if(err){
            return callback(err);
        }
        else {
            list = list.filter(function(el,i){
                return path.extname(el) === "." + fileExt;
        });
        
    }
    callback(null,list);
    });
};