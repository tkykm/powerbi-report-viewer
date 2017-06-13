'use strict'

const {toBooleanConfig} = require('./utils')

module.exports = {
  collectionid: process.env.PBIE_WORKSPACECOLLECTIONID,
  workspaceid: process.env.PBIE_WORKSPACEID,
  reportid: process.env.PBIE_REPORTID,
  appkey: process.env.PBIE_APPKEY,
  reporturl: process.env.PBIE_REPORTURL,
  title: process.env.TITLE,
  usessl: toBooleanConfig(process.env.USESSL)
}