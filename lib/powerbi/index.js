'use strict'
//const Router = require('express').Router
const config = require('../config')

//const router = module.exports = Router()
var powerbi = require('powerbi-api');
// var msrest = require('ms-rest');

module.exports = function() {
    var token = powerbi.PowerBIToken.createReportEmbedToken(config.collectionid, config.workspaceid, config.reportid, '*', "Dataset.Read Workspace.Report.Read", "takayuki", "Developer,Manager");
    //token.expiration = new Date('2017/06/13 15:30:00')
    // expすぎてもレポートだせちゃう問題。。１時間経つと消える。もしかしたら一回認証したやつは。。
    return token.generate(config.appkey);
};
