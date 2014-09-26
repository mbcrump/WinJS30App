var array = [
    { type: "item", title: "Paris", picture: "images/1.jpg" },
    { type: "item", title: "Hong Kong", picture: "images/2.jpg" },
    { type: "item", title: "Barcelona", picture: "images/3.jpg" }
];
var bindingList = new WinJS.Binding.List(array);

WinJS.Namespace.define("DefaultData", {
    bindingList: bindingList,
    array: array
});
WinJS.UI.processAll();