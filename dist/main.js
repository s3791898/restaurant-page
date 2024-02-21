/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/contact.js":
/*!************************!*\
  !*** ./src/contact.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ loadContact)\n/* harmony export */ });\nfunction createContact() {\n  const contact = document.createElement(\"div\");\n  contact.classList.add(\"contact\");\n\n  const restaurantLocation = document.createElement(\"img\");\n  restaurantLocation.src = \"/dist/images/location.PNG\";\n  restaurantLocation.alt = \"Korean Palace Location\";\n\n  contact.appendChild(restaurantLocation);\n\n  return contact;\n}\n\nfunction loadContact() {\n  const main = document.getElementById(\"main\");\n  main.textContent = \"\";\n  main.appendChild(createContact());\n}\n\n\n//# sourceURL=webpack://restaurant-page/./src/contact.js?");

/***/ }),

/***/ "./src/home.js":
/*!*********************!*\
  !*** ./src/home.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ loadHome)\n/* harmony export */ });\nfunction createHome() {\n  const home = document.createElement(\"div\");\n  home.classList.add(\"home\");\n\n  const chefsImage = document.createElement(\"img\");\n  chefsImage.src = \"/dist/images/chefs.jpg\";\n  chefsImage.alt = \"Korean Food\";\n  home.appendChild(chefsImage);\n\n  const paragraph1 = createParagraph(\n    \"Welcome to Korean Palace, your destination for authentic Korean cuisine!\"\n  );\n  const paragraph2 = createParagraph(\n    \"At Korean Palace, we pride ourselves on serving delicious and flavorful dishes that capture the essence of Korean flavors.\"\n  );\n  const paragraph3 = createParagraph(\n    \"From spicy kimchi to savory tteokbokki, our menu offers a wide variety of options to satisfy your cravings for korean cuisine.\"\n  );\n\n  home.appendChild(paragraph1);\n  home.appendChild(paragraph2);\n  home.appendChild(paragraph3);\n\n  return home;\n}\n\nfunction createParagraph(text) {\n  const paragraph = document.createElement(\"p\");\n  paragraph.textContent = text;\n  return paragraph;\n}\n\nfunction loadHome() {\n  const main = document.getElementById(\"main\");\n  main.textContent = \"\";\n  main.appendChild(createHome());\n}\n\n\n//# sourceURL=webpack://restaurant-page/./src/home.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _website_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./website.js */ \"./src/website.js\");\n\n\n(0,_website_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\n\n\n//# sourceURL=webpack://restaurant-page/./src/index.js?");

/***/ }),

/***/ "./src/menu.js":
/*!*********************!*\
  !*** ./src/menu.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ loadMenu)\n/* harmony export */ });\nfunction createMenu() {\n  const menu = document.createElement(\"div\");\n  menu.classList.add(\"menu\");\n\n  menu.appendChild(\n    createMenuItem(\n      \"Bibimbap\",\n      \"Delicious Korean rice dish with mixed vegetables, meat, sesame oil, and gochujang\"\n    )\n  );\n  menu.appendChild(\n    createMenuItem(\n      \"Jajangmyeon\",\n      \"Korean noodle dish consisting of a rich, dark sauce made from black bean paste then poured over fresh noodles\"\n    )\n  );\n  menu.appendChild(\n    createMenuItem(\n      \"Kimbap\",\n      \"Made from cooked rice, vegetables, egg and meat rolled in gim (a dried sheet of seaweed)\"\n    )\n  );\n  menu.appendChild(\n    createMenuItem(\n      \"Naengmyeon\",\n      \"Buckwheat noodles served in a cold broth made with beef brisket or beef shank\"\n    )\n  );\n  menu.appendChild(\n    createMenuItem(\n      \"Samgyetang\",\n      \"Traditional korean soup made with a whole young chicken stuffed with sticky rice, ginseng, jujube, garlic and ginger\"\n    )\n  );\n  menu.appendChild(\n    createMenuItem(\n      \"Tteokbokki\",\n      \"Korean street food made with chewy rice cakes stir-fried in a spicy-sweet gochujang sauce\"\n    )\n  );\n}\n\nfunction createMenuItem(name, description) {\n  const menuItem = document.createElement(\"div\");\n  menuItem.classList.add(\"menu-item\");\n\n  const menuItemName = document.createElement(\"h2\");\n  menuItemName.textContent = name;\n\n  const menuItemDescription = document.createElement(\"p\");\n  menuItemDescription.textContent = description;\n\n  const menuItemImage = document.createElement(\"img\");\n  menuItemImage.src = `/dist/images/korean-food/${name.toLowerCase()}.png`;\n\n  menuItem.appendChild(menuItemName);\n  menuItem.appendChild(menuItemImage);\n  menuItem.appendChild(menuItemDescription);\n\n  return menuItem;\n}\n\nfunction loadMenu() {\n  const main = document.getElementById(\"main\");\n  main.textContent = \"\";\n  main.appendChild(createMenu());\n}\n\n\n//# sourceURL=webpack://restaurant-page/./src/menu.js?");

/***/ }),

/***/ "./src/website.js":
/*!************************!*\
  !*** ./src/website.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ generateWebsite)\n/* harmony export */ });\n/* harmony import */ var _home__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home */ \"./src/home.js\");\n/* harmony import */ var _menu__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./menu */ \"./src/menu.js\");\n/* harmony import */ var _contact__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./contact */ \"./src/contact.js\");\n\n\n\n\nfunction createHeader() {\n  const header = document.createElement(\"header\");\n  header.classList.add(\"header\");\n\n  const restaurantName = document.createElement(\"h1\");\n  restaurantName.classList.add(\"title\");\n  restaurantName.textContent = \"Korean Palace\";\n\n  header.appendChild(restaurantName);\n  header.appendChild(createNav());\n\n  return header;\n}\n\nfunction createNav() {\n  const nav = document.createElement(\"nav\");\n  nav.classList.add(\"nav\");\n\n  const homeBtn = document.createElement(\"button\");\n  homeBtn.classList.add(\"nav-btn\");\n  homeBtn.textContent = \"Home\";\n  homeBtn.addEventListener(\"click\", (e) => {\n    (0,_home__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\n  });\n\n  const menuBtn = document.createElement(\"button\");\n  menuBtn.classList.add(\"nav-btn\");\n  menuBtn.textContent = \"Menu\";\n  menuBtn.addEventListener(\"click\", (e) => {\n    (0,_menu__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\n  });\n\n  const contactBtn = document.createElement(\"button\");\n  contactBtn.classList.add(\"nav-btn\");\n  contactBtn.textContent = \"Contact\";\n  contactBtn.addEventListener(\"click\", (e) => {\n    (0,_contact__WEBPACK_IMPORTED_MODULE_2__[\"default\"])();\n  });\n\n  nav.appendChild(homeBtn);\n  nav.appendChild(menuBtn);\n  nav.appendChild(contactBtn);\n\n  return nav;\n}\n\nfunction createMain() {\n  const main = document.createElement(\"main\");\n  main.classList.add(\"main\");\n  main.setAttribute(\"id\", \"main\");\n\n  return main;\n}\n\nfunction createFooter() {\n  const footer = document.createElement(\"footer\");\n  footer.classList.add(\"footer\");\n\n  const copyright = document.createElement(\"p\");\n  copyright.textContent = `Copyright © ${new Date().getFullYear()} s3791898`;\n\n  const githubLink = document.createElement(\"a\");\n  githubLink.href = \"https://github.com/s3791898\";\n\n  const githubIcon = document.createElement(\"i\");\n  githubIcon.classList.add(\"fab\");\n  githubIcon.classList.add(\"fa-github\");\n\n  githubLink.appendChild(githubIcon);\n  footer.appendChild(copyright);\n  footer.appendChild(githubLink);\n\n  return footer;\n}\n\nfunction generateWebsite() {\n  const content = document.getElementById(\"content\");\n\n  content.appendChild(createHeader());\n  content.appendChild(createMain());\n  content.appendChild(createFooter());\n\n  (0,_home__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\n}\n\n\n//# sourceURL=webpack://restaurant-page/./src/website.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;