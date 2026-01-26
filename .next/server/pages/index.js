module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/pages/index.tsx");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/pages/index.tsx":
/*!*****************************!*\
  !*** ./src/pages/index.tsx ***!
  \*****************************/
/*! exports provided: default, getStaticProps */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Home; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getStaticProps\", function() { return getStaticProps; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\nvar _jsxFileName = \"/workspaces/blog-next/src/pages/index.tsx\";\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\nconst getPosts = async () => {\n  const response = await fetch('http://localhost:1337/api/posts');\n  const jsonPosts = await response.json();\n  return jsonPosts.data;\n};\nfunction Home({\n  posts\n}) {\n  // const [posts, setPosts] = useState<PostData[]>([]);\n\n  // useEffect(() => {\n  //   getPosts().then((response) => setPosts(response));\n  // }, [posts]);\n\n  return __jsx(\"div\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 24,\n      columnNumber: 5\n    }\n  }, posts.map(post => __jsx(\"h2\", {\n    key: post.title,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 26,\n      columnNumber: 9\n    }\n  }, post.title)));\n}\nconst getStaticProps = async context => {\n  const posts = await getPosts();\n  return {\n    props: {\n      posts\n    },\n    revalidate: 60\n  };\n};//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvcGFnZXMvaW5kZXgudHN4PzQxZTAiXSwibmFtZXMiOlsiZ2V0UG9zdHMiLCJyZXNwb25zZSIsImZldGNoIiwianNvblBvc3RzIiwianNvbiIsImRhdGEiLCJIb21lIiwicG9zdHMiLCJfX2pzeCIsIl9fc2VsZiIsIl9fc291cmNlIiwiZmlsZU5hbWUiLCJfanN4RmlsZU5hbWUiLCJsaW5lTnVtYmVyIiwiY29sdW1uTnVtYmVyIiwibWFwIiwicG9zdCIsImtleSIsInRpdGxlIiwiZ2V0U3RhdGljUHJvcHMiLCJjb250ZXh0IiwicHJvcHMiLCJyZXZhbGlkYXRlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUlBLE1BQU1BLFFBQVEsR0FBRyxNQUFBQSxDQUFBLEtBQWlDO0VBQ2hELE1BQU1DLFFBQVEsR0FBRyxNQUFNQyxLQUFLLENBQUMsaUNBQWlDLENBQUM7RUFDL0QsTUFBTUMsU0FBUyxHQUFHLE1BQU1GLFFBQVEsQ0FBQ0csSUFBSSxDQUFDLENBQUM7RUFFdkMsT0FBT0QsU0FBUyxDQUFDRSxJQUFJO0FBQ3ZCLENBQUM7QUFNYyxTQUFTQyxJQUFJQSxDQUFDO0VBQUNDO0FBQWdCLENBQUMsRUFBRTtFQUMvQzs7RUFFQTtFQUNBO0VBQ0E7O0VBRUEsT0FDRUMsS0FBQTtJQUFBQyxNQUFBO0lBQUFDLFFBQUE7TUFBQUMsUUFBQSxFQUFBQyxZQUFBO01BQUFDLFVBQUE7TUFBQUMsWUFBQTtJQUFBO0VBQUEsR0FDR1AsS0FBSyxDQUFDUSxHQUFHLENBQUNDLElBQUksSUFDYlIsS0FBQTtJQUFJUyxHQUFHLEVBQUVELElBQUksQ0FBQ0UsS0FBTTtJQUFBVCxNQUFBO0lBQUFDLFFBQUE7TUFBQUMsUUFBQSxFQUFBQyxZQUFBO01BQUFDLFVBQUE7TUFBQUMsWUFBQTtJQUFBO0VBQUEsR0FBRUUsSUFBSSxDQUFDRSxLQUFVLENBQ3RDLENBQ0UsQ0FBQztBQUVWO0FBRU8sTUFBTUMsY0FBOEIsR0FBRyxNQUFPQyxPQUFPLElBQUs7RUFDL0QsTUFBTWIsS0FBSyxHQUFHLE1BQU1QLFFBQVEsQ0FBQyxDQUFDO0VBRTlCLE9BQU87SUFDTHFCLEtBQUssRUFBRztNQUNOZDtJQUNGLENBQUM7SUFDRGUsVUFBVSxFQUFFO0VBQ2QsQ0FBQztBQUNILENBQUMiLCJmaWxlIjoiLi9zcmMvcGFnZXMvaW5kZXgudHN4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IFBvc3REYXRhIH0gZnJvbSAnLi4vZG9tYWluL3Bvc3RzL3Bvc3QnO1xuaW1wb3J0IHsgR2V0U3RhdGljUHJvcHMgfSBmcm9tICduZXh0JztcblxuY29uc3QgZ2V0UG9zdHMgPSBhc3luYyAoKTogUHJvbWlzZTxQb3N0RGF0YVtdPiA9PiB7XG4gIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goJ2h0dHA6Ly9sb2NhbGhvc3Q6MTMzNy9hcGkvcG9zdHMnKTtcbiAgY29uc3QganNvblBvc3RzID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xuXG4gIHJldHVybiBqc29uUG9zdHMuZGF0YTtcbn07XG5cbmV4cG9ydCB0eXBlIEhvbWVQcm9wcyA9IHtcbiAgcG9zdHM6IFBvc3REYXRhW107XG59O1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBIb21lKHtwb3N0c306IEhvbWVQcm9wcykge1xuICAvLyBjb25zdCBbcG9zdHMsIHNldFBvc3RzXSA9IHVzZVN0YXRlPFBvc3REYXRhW10+KFtdKTtcblxuICAvLyB1c2VFZmZlY3QoKCkgPT4ge1xuICAvLyAgIGdldFBvc3RzKCkudGhlbigocmVzcG9uc2UpID0+IHNldFBvc3RzKHJlc3BvbnNlKSk7XG4gIC8vIH0sIFtwb3N0c10pO1xuXG4gIHJldHVybiAoXG4gICAgPGRpdj5cbiAgICAgIHtwb3N0cy5tYXAocG9zdCA9PiAoXG4gICAgICAgIDxoMiBrZXk9e3Bvc3QudGl0bGV9Pntwb3N0LnRpdGxlfTwvaDI+XG4gICAgICApKX1cbiAgICA8L2Rpdj5cbiAgKTtcbn1cblxuZXhwb3J0IGNvbnN0IGdldFN0YXRpY1Byb3BzOiBHZXRTdGF0aWNQcm9wcyA9IGFzeW5jIChjb250ZXh0KSA9PiB7XG4gIGNvbnN0IHBvc3RzID0gYXdhaXQgZ2V0UG9zdHMoKTtcblxuICByZXR1cm4ge1xuICAgIHByb3BzIDoge1xuICAgICAgcG9zdHNcbiAgICB9LFxuICAgIHJldmFsaWRhdGU6IDYwLFxuICB9XG59XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/pages/index.tsx\n");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdFwiPzU4OGUiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoicmVhY3QuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///react\n");

/***/ })

/******/ });