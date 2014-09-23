var array = [
    { type: "item", title: "Michael Crump", picture: "http://developer.telerik.com/wp-content/uploads/userphoto/71.png" },
    { type: "item", title: "Burke Holland", picture: "http://developer.telerik.com/wp-content/uploads/userphoto/1.png" },
    { type: "item", title: "Jeff Fritz", picture: "http://developer.telerik.com/wp-content/uploads/userphoto/61.jpeg" },
    { type: "item", title: "Brian Rinaldi", picture: "http://developer.telerik.com/wp-content/uploads/userphoto/11.jpeg" },
    { type: "item", title: "Sam Basu", picture: "http://developer.telerik.com/wp-content/uploads/userphoto/161.jpeg" }

];
var bindingList = new WinJS.Binding.List(array);

WinJS.Namespace.define("DefaultData", {
    bindingList: bindingList,
    array: array
});
WinJS.UI.processAll();