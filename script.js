var array = [
    { type: "item", title: "Crump", picture: "http://developer.telerik.com/wp-content/uploads/userphoto/71.png" },
    { type: "item", title: "Fritz", picture: "http://developer.telerik.com/wp-content/uploads/userphoto/61.jpeg" },
    { type: "item", title: "Basu", picture: "http://developer.telerik.com/wp-content/uploads/userphoto/161.jpeg" }
];
var bindingList = new WinJS.Binding.List(array);

WinJS.Namespace.define("DefaultData", {
    bindingList: bindingList,
    array: array
});
WinJS.UI.processAll();