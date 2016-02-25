Package.describe({
  name: "hubroedu:semantic-react",
  version: "0.1.3",
  summary: "Semantic-ui as useful react components, based on react-semantify, with additional functionality.",
  git: "https://github.com/hubroedu/semantic-react",
  documentation: "README.md"
});

Package.onUse(function (api) {
  api.versionsFrom("1.1.0.2");
  api.use("ecmascript@0.1.6");
  api.use("jquery@1.11.4");
  api.use("react@0.14.3");
  
  api.use("mquandalle:stylus@1.1.1");
  
  
  api.addFiles([
    "classnames.js",
    
    "mixins/mixins.js",
    "mixins/classGenerator.js",
    "mixins/colorSelector.js",
    "mixins/stateSelector.js",
    "mixins/typeSelector.js",
    "mixins/setInterval.js",
    
    "common/Unit.jsx",
    
    "misc/Right.jsx",
    "misc/Left.jsx",
    "misc/Content.jsx",
    "misc/ExtraContent.jsx",
    "misc/Extra.jsx",
    "misc/Pusher.jsx",
    "misc/Meta.jsx",
    "misc/Description.jsx",
    
    "extensions/range.styl",
    
    
    "elements/Button.jsx",
    "elements/Buttons.jsx",
    "elements/Container.jsx",
    "elements/Divider.jsx",
    "elements/Flag.jsx",
    "elements/Header.jsx",
    "elements/Icon.jsx",
    "elements/Image.jsx",
    "elements/Input.jsx",
    "elements/Label.jsx",
    "elements/List.jsx",
    "elements/Loader.jsx",
    "elements/Rail.jsx",
    "elements/Reveal.jsx",
    "elements/Segment.jsx",
    "elements/Segments.jsx",
    "elements/Step.jsx",
    "elements/Steps.jsx",
    
    "collections/form/Form.jsx",
    "collections/form/Field.jsx",
    "collections/form/Fields.jsx",
    "collections/form/RadioInput.jsx",
    "collections/grid/Grid.jsx",
    "collections/grid/Row.jsx",
    "collections/grid/Column.jsx",
    "collections/menu/Menu.jsx",
    "collections/menu/DropdownItem.jsx",
    "collections/menu/DropdownItem.styl",
    "collections/Message.jsx",
    "collections/Table.jsx",
    "collections/Breadcrumb.jsx",
    
    "views/Advertisement.jsx",
    "views/Card.jsx",
    "views/Cards.jsx",
    "views/Comment.jsx",
    "views/Feed.jsx",
    "views/Item.jsx",
    "views/Items.jsx",
    "views/Statistic.jsx",
    "views/Statistics.jsx",
    
    "modules/Accordion.jsx",
    "modules/Checkbox.jsx",
    "modules/Dimmer.jsx",
    "modules/Dropdown.jsx",
    "modules/Modal.jsx",
    "modules/Popup.jsx",
    "modules/Progress.jsx",
    "modules/Rating.jsx",
    "modules/Search.jsx",
    "modules/Shape.jsx",
    "modules/Sidebar.jsx",
    "modules/Sticky.jsx",
    "modules/Tab.jsx",
    "modules/TabContent.jsx",
    "modules/TabMenu.jsx",
    "modules/Range.jsx",
  ], "client");
  
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
