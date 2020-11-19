const path = require('path'),
  { getAppJson } = require("miniapp-auto-webpack-plugin"),
  CopyWebpackPlugin = require('copy-webpack-plugin'),
  conf = require("../../../etc/index");

module.exports = function(entryJsonFiles, codePath) {
  if (!entryJsonFiles) {
    return [];
  }
  let entryJson = Object.entries(entryJsonFiles).map(([page, pathurl]) => {
    if (pathurl[0].includes("app.json")) {
      return {
        context: process.cwd(),
        from: pathurl[0],
        to: path.join(codePath, `${page}.json`),
        transform() {
          return JSON.stringify(
            getAppJson({
              autoImportAppConfigPath: conf.autoImportAppConfigPath,
            }),
          );
        },
      };
    }
    return {
      context: process.cwd(),
      from: pathurl[0],
      to: path.join(codePath, `${page}.json`),
    };
  });
  return [new CopyWebpackPlugin([
    ...entryJson
  ])];
};
