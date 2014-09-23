jquery-showmessage
==================
Show message using jquery-ui dialog without html markup and dialog initialization code

Requirements
----
* jQuery
* jQuery-ui

Usage
----
```javascript
$.message(options);
```
for example:
```javascript
$.message({
    title: $.i18n._("Error"), 
    text: $.i18n._("Unable to save data")
});
```

Default options
----
```javascript
	id: "show_msg_dialog",
	title: "Title",
	text: "Hello world!",
	width: 350,
	autoOpen: false,
	resizable: false,
	modal: true
```