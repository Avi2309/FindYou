'use strict';

exports.listAllMatchUsers = function(req, res) {
    try{
        var usersDataJson = require('./usersData.json');
        var usersDataList = JSON.parse(usersDataJson);

        res.json(usersDataList);

    }catch(err){
        console.log('Error trying to get users data');
        res.send(err)
    }
    console.log('Users data returned successfully');
};