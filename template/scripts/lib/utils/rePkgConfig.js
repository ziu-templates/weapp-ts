const merge = require("lodash.merge"),
  { prjEnvComp } = require("./envCompare"),
  envData = require("../envData/getEnvData"),
  distPkg = require("../../etc/project.config");
module.exports = function (content = "{}") {
  let appid = "";
  try {
    appid = JSON.parse(envData || "{}").APP_ID || "";
    content = JSON.stringify(
      merge(JSON.parse(content), appid ? { appid } : ""),
    );
  } catch (e) {
    console.error(e);
  }
  let pkgConf = "";
  try {
    pkgConf = JSON.parse(content);
  } catch (e) {
    throw e;
  }
  if (!pkgConf.projectname.includes(process.env.PRJ_ENV)) {
    const projectName = prjEnvComp("development") ? pkgConf.projectname : pkgConf.projectname.replace("development-", "");
    pkgConf.projectname = `${process.env.PRJ_ENV}-${projectName}`;
  }

  if (prjEnvComp("development")) {
    return JSON.stringify(pkgConf);
  }

  try {
    pkgConf = merge(pkgConf, distPkg);
  } catch (e) {
    throw e;
  }
  return JSON.stringify(pkgConf);
};
