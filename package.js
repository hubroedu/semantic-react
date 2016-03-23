Package.describe({
  name: "hubroedu:semantic-react",
  version: "0.2.0",
  summary: "Semantic-ui as useful react components, based on react-semantify, with additional functionality.",
  git: "https://github.com/hubroedu/semantic-react",
  documentation: "README.md"
});

Npm.depends({
  react: '0.14.3'
});

Package.onUse(function (api) {
  api.versionsFrom("1.3-rc.8");

  api.use("ecmascript@0.4.1-rc.8");
  api.use("mquandalle:stylus@1.1.1");
  
  api.addFiles([
    "extensions/range.styl",
    "collections/menu/DropdownItem.styl",
  ], "client");
  
  api.mainModule("index.js", "client");
});
