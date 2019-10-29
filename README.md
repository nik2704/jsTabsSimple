# Simple example of Tabs using native JS
## (syntax ES6)
____

Usage example: HTML document contains several buttons implemented as DIV,
clicking on which leads to the display of one of the sections (and to hide the rest).
Each section is a DIV whose style is defined in a CSS file.

Settings:
* btnsClass - class name of DIVs, that plays the role of buttons
* btnsParentClass: - class name of DIV - parent for btnsClass
* tabsClass: - class name of DIVs that controlled by btnsClass
* showClass: "show" - class name used to show DIV
* hideClass: "hide" - class name used to hide DIV

Example of CSS with show and hide classes:
###### .content .info .hide {
######   display: none;
###### }
###### .content .info .show {
######   display: -webkit-box;
######   display: -webkit-flex;
######   display: -ms-flexbox;
######   display: flex;
###### }
