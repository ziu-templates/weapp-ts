const merge = require('lodash.merge'),
  { prjEnvComp } = require('./envCompare'),
  envData = require('../envData/getEnvData'),
  distPkg = require('../../etc/project.config');
module.exports = function(content = '{}') {
  let appid = '';
  try {
    appid = JSON.parse(envData || '{}').APP_ID || '';
    content = JSON.stringify(merge(JSON.parse(content), appid ? { appid } : ''));
  } catch (e) {
    console.error(e);
  }
  let pkgConf = '';
  if (prjEnvComp('development')) {
    try {
      pkgConf = JSON.parse(content);
    } catch (e) {
      throw e;
    }
    if (pkgConf.projectname.includes(process.env.PRJ_ENV)) {
      return JSON.stringify(pkgConf);
    }
    pkgConf.projectname = `${process.env.PRJ_ENV}-${pkgConf.projectname}`;
    return JSON.stringify(pkgConf);
  }
  try {
    pkgConf = merge(JSON.parse(content), distPkg);
    if (pkgConf.projectname.includes(process.env.PRJ_ENV)) {
      return JSON.stringify(pkgConf);
    }
    pkgConf.projectname = `${process.env.PRJ_ENV}-${pkgConf.projectname.replace("development-", "")}`;
    pkgConf = JSON.stringify(pkgConf);
  } catch (e) {
    throw e;
  }
  return pkgConf;
}