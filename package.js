Package.describe({
  name: "hubroedu:semantic-react",
  version: "0.2.0",
  summary: "Semantic-ui as useful react components, based on react-semantify, with additional functionality.",
  git: "https://github.com/hubroedu/semantic-react",
  documentation: "README.md"
});

Npm.depends({
  
});

Package.onUse(function (api) {
  api.versionsFrom("1.3-rc.12");

  api.use("ecmascript@0.4.1-rc.8");
  api.use("mquandalle:stylus@1.1.1");
  
  api.mainModule("index.js", "client");
  
  api.export([
    "classSet",
    "Mixins",
    "Left",
    "ExtraContent",
    "Extra",
    "Right",
    "Button",
    "Range",
    "Buttons",
    "RadioGroup",
    "RadioInput",
    "Meta",
    "Description",
    "Elements",
    "Container",
    "Divider",
    "Content",
    "Pusher",
    "Flag",
    "Title",
    "Header",
    "SubHeader",
    "Icon",
    "Image",
    "Input",
    "DropdownItem",
    "Label",
    "List",
    "Loader",
    "Rail",
    "Reveal",
    "Segment",
    "Segments",
    "Step",
    "Steps",
    "Collections",
    "Breadcrumb",
    "Form",
    "Field",
    "Fields",
    "Grid",
    "Column",
    "Row",
    "Menu",
    "Message",
    "Table",
    "Views",
    "Advertisement",
    "Card",
    "Cards",
    "Comment",
    "Feed",
    "Item",
    "Items",
    "Statistic",
    "Statistics",
    "Accordion",
    "Checkbox",
    "Dimmer",
    "Dropdown",
    "Modal",
    "Popup",
    "Progress",
    "Rating",
    "Search",
    "Shape",
    "Sidebar",
    "Sticky",
    "Tab",
    "TabContent",
    "TabMenu"
  ]);
});
