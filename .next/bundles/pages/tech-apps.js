
          window.__NEXT_REGISTER_PAGE('/tech-apps', function() {
            var comp = module.exports=webpackJsonp([9],{12:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var o=n(15),a=r(o),i=n(0),l=r(i),u=n(1),s=(r(u),n(13)),c=r(s),f=function(e){var t=e.href,n=e.name,r=e.tabsDescription,o=e.icon;return l.default.createElement("li",null,l.default.createElement(a.default,{href:t},l.default.createElement("a",null,l.default.createElement("div",{className:"inner"},r?l.default.createElement("div",{className:"ico"},l.default.createElement("div",{className:"tbl"},l.default.createElement("div",{className:"cell"},l.default.createElement("img",{width:"53",src:"/static/images/svg/"+o+".svg",alt:""})))):l.default.createElement("div",{className:"tbl"},l.default.createElement("div",{className:"cell"},l.default.createElement("img",{width:"53",src:"/static/images/svg/"+o+".svg",alt:""}))),!r||l.default.createElement("span",null,l.default.createElement("span",{className:"ttl"},n),l.default.createElement("span",{className:"ttl-s"},r))),r?null:l.default.createElement("div",{className:"icon-name"},n))))};f.defaultProps={href:"",name:"",tabsDescription:"",icon:""};var d=function(e){var t=e.points,n=e.withDescription;return l.default.createElement("div",{className:"icon-wrap"},l.default.createElement(c.default,{axis:"x",defaultPosition:{x:0,y:0},position:null},l.default.createElement("ul",{className:n?"icon-row icon-d-row":"icon-row"},t.map(function(e){return l.default.createElement(f,{key:e.name,href:e.href,name:e.name,tabsDescription:e.tabsDescription||"",icon:e.icon})}))))};d.defaultProps={points:[],withDescription:!1},t.default=d},13:function(e,t,n){!function(t,r){e.exports=r(n(0),n(16))}(0,function(e,t){return function(e){function t(r){if(n[r])return n[r].exports;var o=n[r]={exports:{},id:r,loaded:!1};return e[r].call(o.exports,o,o.exports,t),o.loaded=!0,o.exports}var n={};return t.m=e,t.c=n,t.p="",t(0)}([function(e,t,n){"use strict";e.exports=n(1).default,e.exports.DraggableCore=n(17).default},function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function l(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var u=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},s=function(){function e(e,t){var n=[],r=!0,o=!1,a=void 0;try{for(var i,l=e[Symbol.iterator]();!(r=(i=l.next()).done)&&(n.push(i.value),!t||n.length!==t);r=!0);}catch(e){o=!0,a=e}finally{try{!r&&l.return&&l.return()}finally{if(o)throw a}}return n}return function(t,n){if(Array.isArray(t))return t;if(Symbol.iterator in Object(t))return e(t,n);throw new TypeError("Invalid attempt to destructure non-iterable instance")}}(),c=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),f=n(2),d=r(f),p=n(3),h=r(p),m=n(11),g=r(m),y=n(12),v=r(y),b=n(13),w=n(16),E=n(14),D=n(17),S=r(D),x=n(19),T=r(x),O=function(e){function t(e){a(this,t);var n=i(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.onDragStart=function(e,t){if((0,T.default)("Draggable: onDragStart: %j",t),!1===n.props.onStart(e,(0,w.createDraggableData)(n,t)))return!1;n.setState({dragging:!0,dragged:!0})},n.onDrag=function(e,t){if(!n.state.dragging)return!1;(0,T.default)("Draggable: onDrag: %j",t);var r=(0,w.createDraggableData)(n,t),o={x:r.x,y:r.y};if(n.props.bounds){var a=o.x,i=o.y;o.x+=n.state.slackX,o.y+=n.state.slackY;var l=(0,w.getBoundPosition)(n,o.x,o.y),u=s(l,2);o.x=u[0],o.y=u[1],o.slackX=n.state.slackX+(a-o.x),o.slackY=n.state.slackY+(i-o.y),r.x=a,r.y=i,r.deltaX=o.x-n.state.x,r.deltaY=o.y-n.state.y}if(!1===n.props.onDrag(e,r))return!1;n.setState(o)},n.onDragStop=function(e,t){if(!n.state.dragging)return!1;if(!1===n.props.onStop(e,(0,w.createDraggableData)(n,t)))return!1;(0,T.default)("Draggable: onDragStop: %j",t);var r={dragging:!1,slackX:0,slackY:0};if(Boolean(n.props.position)){var o=n.props.position,a=o.x,i=o.y;r.x=a,r.y=i}n.setState(r)},n.state={dragging:!1,dragged:!1,x:e.position?e.position.x:e.defaultPosition.x,y:e.position?e.position.y:e.defaultPosition.y,slackX:0,slackY:0,isElementSVG:!1},n}return l(t,e),c(t,[{key:"componentWillMount",value:function(){!this.props.position||this.props.onDrag||this.props.onStop||console.warn("A `position` was applied to this <Draggable>, without drag handlers. This will make this component effectively undraggable. Please attach `onDrag` or `onStop` handlers so you can adjust the `position` of this element.")}},{key:"componentDidMount",value:function(){"undefined"!=typeof SVGElement&&g.default.findDOMNode(this)instanceof SVGElement&&this.setState({isElementSVG:!0})}},{key:"componentWillReceiveProps",value:function(e){!e.position||this.props.position&&e.position.x===this.props.position.x&&e.position.y===this.props.position.y||this.setState({x:e.position.x,y:e.position.y})}},{key:"componentWillUnmount",value:function(){this.setState({dragging:!1})}},{key:"render",value:function(){var e,t={},n=null,r=Boolean(this.props.position),a=!r||this.state.dragging,i=this.props.position||this.props.defaultPosition,l={x:(0,w.canDragX)(this)&&a?this.state.x:i.x,y:(0,w.canDragY)(this)&&a?this.state.y:i.y};this.state.isElementSVG?n=(0,b.createSVGTransform)(l):t=(0,b.createCSSTransform)(l);var s=this.props,c=s.defaultClassName,f=s.defaultClassNameDragging,p=s.defaultClassNameDragged,h=(0,v.default)(this.props.children.props.className||"",c,(e={},o(e,f,this.state.dragging),o(e,p,this.state.dragged),e));return d.default.createElement(S.default,u({},this.props,{onStart:this.onDragStart,onDrag:this.onDrag,onStop:this.onDragStop}),d.default.cloneElement(d.default.Children.only(this.props.children),{className:h,style:u({},this.props.children.props.style,t),transform:n}))}}]),t}(d.default.Component);O.displayName="Draggable",O.propTypes=u({},S.default.propTypes,{axis:h.default.oneOf(["both","x","y","none"]),bounds:h.default.oneOfType([h.default.shape({left:h.default.number,right:h.default.number,top:h.default.number,bottom:h.default.number}),h.default.string,h.default.oneOf([!1])]),defaultClassName:h.default.string,defaultClassNameDragging:h.default.string,defaultClassNameDragged:h.default.string,defaultPosition:h.default.shape({x:h.default.number,y:h.default.number}),position:h.default.shape({x:h.default.number,y:h.default.number}),className:E.dontSetMe,style:E.dontSetMe,transform:E.dontSetMe}),O.defaultProps=u({},S.default.defaultProps,{axis:"both",bounds:!1,defaultClassName:"react-draggable",defaultClassNameDragging:"react-draggable-dragging",defaultClassNameDragged:"react-draggable-dragged",defaultPosition:{x:0,y:0},position:null}),t.default=O},function(t,n){t.exports=e},function(e,t,n){if("production"!=={DRAGGABLE_DEBUG:void 0}.NODE_ENV){var r="function"==typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103,o=function(e){return"object"==typeof e&&null!==e&&e.$$typeof===r};e.exports=n(4)(o,!0)}else e.exports=n(10)()},function(e,t,n){"use strict";var r=n(5),o=n(6),a=n(7),i=n(8),l=n(9);e.exports=function(e,t){function n(e){var t=e&&(S&&e[S]||e[x]);if("function"==typeof t)return t}function u(e,t){return e===t?0!==e||1/e==1/t:e!==e&&t!==t}function s(e){this.message=e,this.stack=""}function c(e){function n(n,u,c,f,d,p,h){if(f=f||T,p=p||c,h!==i)if(t)o(!1,"Calling PropTypes validators directly is not supported by the `prop-types` package. Use `PropTypes.checkPropTypes()` to call them. Read more at http://fb.me/use-check-prop-types");else if("production"!=={DRAGGABLE_DEBUG:void 0}.NODE_ENV&&"undefined"!=typeof console){var m=f+":"+c;!r[m]&&l<3&&(a(!1,"You are manually calling a React.PropTypes validation function for the `%s` prop on `%s`. This is deprecated and will throw in the standalone `prop-types` package. You may be seeing this warning due to a third-party PropTypes library. See https://fb.me/react-warning-dont-call-proptypes for details.",p,f),r[m]=!0,l++)}return null==u[c]?n?new s(null===u[c]?"The "+d+" `"+p+"` is marked as required in `"+f+"`, but its value is `null`.":"The "+d+" `"+p+"` is marked as required in `"+f+"`, but its value is `undefined`."):null:e(u,c,f,d,p)}if("production"!=={DRAGGABLE_DEBUG:void 0}.NODE_ENV)var r={},l=0;var u=n.bind(null,!1);return u.isRequired=n.bind(null,!0),u}function f(e){function t(t,n,r,o,a,i){var l=t[n];if(w(l)!==e)return new s("Invalid "+o+" `"+a+"` of type `"+E(l)+"` supplied to `"+r+"`, expected `"+e+"`.");return null}return c(t)}function d(e){function t(t,n,r,o,a){if("function"!=typeof e)return new s("Property `"+a+"` of component `"+r+"` has invalid PropType notation inside arrayOf.");var l=t[n];if(!Array.isArray(l)){return new s("Invalid "+o+" `"+a+"` of type `"+w(l)+"` supplied to `"+r+"`, expected an array.")}for(var u=0;u<l.length;u++){var c=e(l,u,r,o,a+"["+u+"]",i);if(c instanceof Error)return c}return null}return c(t)}function p(e){function t(t,n,r,o,a){if(!(t[n]instanceof e)){var i=e.name||T;return new s("Invalid "+o+" `"+a+"` of type `"+D(t[n])+"` supplied to `"+r+"`, expected instance of `"+i+"`.")}return null}return c(t)}function h(e){function t(t,n,r,o,a){for(var i=t[n],l=0;l<e.length;l++)if(u(i,e[l]))return null;return new s("Invalid "+o+" `"+a+"` of value `"+i+"` supplied to `"+r+"`, expected one of "+JSON.stringify(e)+".")}return Array.isArray(e)?c(t):("production"!=={DRAGGABLE_DEBUG:void 0}.NODE_ENV&&a(!1,"Invalid argument supplied to oneOf, expected an instance of array."),r.thatReturnsNull)}function m(e){function t(t,n,r,o,a){if("function"!=typeof e)return new s("Property `"+a+"` of component `"+r+"` has invalid PropType notation inside objectOf.");var l=t[n],u=w(l);if("object"!==u)return new s("Invalid "+o+" `"+a+"` of type `"+u+"` supplied to `"+r+"`, expected an object.");for(var c in l)if(l.hasOwnProperty(c)){var f=e(l,c,r,o,a+"."+c,i);if(f instanceof Error)return f}return null}return c(t)}function g(e){function t(t,n,r,o,a){for(var l=0;l<e.length;l++){if(null==(0,e[l])(t,n,r,o,a,i))return null}return new s("Invalid "+o+" `"+a+"` supplied to `"+r+"`.")}return Array.isArray(e)?c(t):("production"!=={DRAGGABLE_DEBUG:void 0}.NODE_ENV&&a(!1,"Invalid argument supplied to oneOfType, expected an instance of array."),r.thatReturnsNull)}function y(e){function t(t,n,r,o,a){var l=t[n],u=w(l);if("object"!==u)return new s("Invalid "+o+" `"+a+"` of type `"+u+"` supplied to `"+r+"`, expected `object`.");for(var c in e){var f=e[c];if(f){var d=f(l,c,r,o,a+"."+c,i);if(d)return d}}return null}return c(t)}function v(t){switch(typeof t){case"number":case"string":case"undefined":return!0;case"boolean":return!t;case"object":if(Array.isArray(t))return t.every(v);if(null===t||e(t))return!0;var r=n(t);if(!r)return!1;var o,a=r.call(t);if(r!==t.entries){for(;!(o=a.next()).done;)if(!v(o.value))return!1}else for(;!(o=a.next()).done;){var i=o.value;if(i&&!v(i[1]))return!1}return!0;default:return!1}}function b(e,t){return"symbol"===e||("Symbol"===t["@@toStringTag"]||"function"==typeof Symbol&&t instanceof Symbol)}function w(e){var t=typeof e;return Array.isArray(e)?"array":e instanceof RegExp?"object":b(t,e)?"symbol":t}function E(e){var t=w(e);if("object"===t){if(e instanceof Date)return"date";if(e instanceof RegExp)return"regexp"}return t}function D(e){return e.constructor&&e.constructor.name?e.constructor.name:T}var S="function"==typeof Symbol&&Symbol.iterator,x="@@iterator",T="<<anonymous>>",O={array:f("array"),bool:f("boolean"),func:f("function"),number:f("number"),object:f("object"),string:f("string"),symbol:f("symbol"),any:function(){return c(r.thatReturnsNull)}(),arrayOf:d,element:function(){function t(t,n,r,o,a){var i=t[n];if(!e(i)){return new s("Invalid "+o+" `"+a+"` of type `"+w(i)+"` supplied to `"+r+"`, expected a single ReactElement.")}return null}return c(t)}(),instanceOf:p,node:function(){function e(e,t,n,r,o){return v(e[t])?null:new s("Invalid "+r+" `"+o+"` supplied to `"+n+"`, expected a ReactNode.")}return c(e)}(),objectOf:m,oneOf:h,oneOfType:g,shape:y};return s.prototype=Error.prototype,O.checkPropTypes=l,O.PropTypes=O,O}},function(e,t){"use strict";function n(e){return function(){return e}}var r=function(){};r.thatReturns=n,r.thatReturnsFalse=n(!1),r.thatReturnsTrue=n(!0),r.thatReturnsNull=n(null),r.thatReturnsThis=function(){return this},r.thatReturnsArgument=function(e){return e},e.exports=r},function(e,t,n){"use strict";function r(e,t,n,r,a,i,l,u){if(o(t),!e){var s;if(void 0===t)s=new Error("Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings.");else{var c=[n,r,a,i,l,u],f=0;s=new Error(t.replace(/%s/g,function(){return c[f++]})),s.name="Invariant Violation"}throw s.framesToPop=1,s}}var o=function(e){};"production"!=={DRAGGABLE_DEBUG:void 0}.NODE_ENV&&(o=function(e){if(void 0===e)throw new Error("invariant requires an error message argument")}),e.exports=r},function(e,t,n){"use strict";var r=n(5),o=r;"production"!=={DRAGGABLE_DEBUG:void 0}.NODE_ENV&&function(){var e=function(e){for(var t=arguments.length,n=Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];var o=0,a="Warning: "+e.replace(/%s/g,function(){return n[o++]});"undefined"!=typeof console&&console.error(a);try{throw new Error(a)}catch(e){}};o=function(t,n){if(void 0===n)throw new Error("`warning(condition, format, ...args)` requires a warning message argument");if(0!==n.indexOf("Failed Composite propType: ")&&!t){for(var r=arguments.length,o=Array(r>2?r-2:0),a=2;a<r;a++)o[a-2]=arguments[a];e.apply(void 0,[n].concat(o))}}}(),e.exports=o},function(e,t){"use strict";e.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"},function(e,t,n){"use strict";function r(e,t,n,r,u){if("production"!=={DRAGGABLE_DEBUG:void 0}.NODE_ENV)for(var s in e)if(e.hasOwnProperty(s)){var c;try{o("function"==typeof e[s],"%s: %s type `%s` is invalid; it must be a function, usually from React.PropTypes.",r||"React class",n,s),c=e[s](t,s,r,n,null,i)}catch(e){c=e}if(a(!c||c instanceof Error,"%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).",r||"React class",n,s,typeof c),c instanceof Error&&!(c.message in l)){l[c.message]=!0;var f=u?u():"";a(!1,"Failed %s type: %s%s",n,c.message,null!=f?f:"")}}}if("production"!=={DRAGGABLE_DEBUG:void 0}.NODE_ENV)var o=n(6),a=n(7),i=n(8),l={};e.exports=r},function(e,t,n){"use strict";var r=n(5),o=n(6);e.exports=function(){function e(){o(!1,"Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types")}function t(){return e}e.isRequired=e;var n={array:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t};return n.checkPropTypes=r,n.PropTypes=n,n}},function(e,n){e.exports=t},function(e,t,n){var r,o;/*!
	  Copyright (c) 2016 Jed Watson.
	  Licensed under the MIT License (MIT), see
	  http://jedwatson.github.io/classnames
	*/
!function(){"use strict";function n(){for(var e=[],t=0;t<arguments.length;t++){var r=arguments[t];if(r){var o=typeof r;if("string"===o||"number"===o)e.push(r);else if(Array.isArray(r))e.push(n.apply(null,r));else if("object"===o)for(var i in r)a.call(r,i)&&r[i]&&e.push(i)}}return e.join(" ")}var a={}.hasOwnProperty;void 0!==e&&e.exports?e.exports=n:(r=[],void 0!==(o=function(){return n}.apply(t,r))&&(e.exports=o))}()},function(e,t,n){"use strict";function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){return x||(x=(0,E.findInArray)(["matches","webkitMatchesSelector","mozMatchesSelector","msMatchesSelector","oMatchesSelector"],function(t){return(0,E.isFunction)(e[t])})),e[x].call(e,t)}function a(e,t,n){var r=e;do{if(o(r,t))return!0;if(r===n)return!1;r=r.parentNode}while(r);return!1}function i(e,t,n){e&&(e.attachEvent?e.attachEvent("on"+t,n):e.addEventListener?e.addEventListener(t,n,!0):e["on"+t]=n)}function l(e,t,n){e&&(e.detachEvent?e.detachEvent("on"+t,n):e.removeEventListener?e.removeEventListener(t,n,!0):e["on"+t]=null)}function u(e){var t=e.clientHeight,n=e.ownerDocument.defaultView.getComputedStyle(e);return t+=(0,E.int)(n.borderTopWidth),t+=(0,E.int)(n.borderBottomWidth)}function s(e){var t=e.clientWidth,n=e.ownerDocument.defaultView.getComputedStyle(e);return t+=(0,E.int)(n.borderLeftWidth),t+=(0,E.int)(n.borderRightWidth)}function c(e){var t=e.clientHeight,n=e.ownerDocument.defaultView.getComputedStyle(e);return t-=(0,E.int)(n.paddingTop),t-=(0,E.int)(n.paddingBottom)}function f(e){var t=e.clientWidth,n=e.ownerDocument.defaultView.getComputedStyle(e);return t-=(0,E.int)(n.paddingLeft),t-=(0,E.int)(n.paddingRight)}function d(e,t){var n=t===t.ownerDocument.body,r=n?{left:0,top:0}:t.getBoundingClientRect();return{x:e.clientX+t.scrollLeft-r.left,y:e.clientY+t.scrollTop-r.top}}function p(e){var t=e.x,n=e.y;return r({},(0,D.browserPrefixToKey)("transform",S.default),"translate("+t+"px,"+n+"px)")}function h(e){return"translate("+e.x+","+e.y+")"}function m(e,t){return e.targetTouches&&(0,E.findInArray)(e.targetTouches,function(e){return t===e.identifier})||e.changedTouches&&(0,E.findInArray)(e.changedTouches,function(e){return t===e.identifier})}function g(e){return e.targetTouches&&e.targetTouches[0]?e.targetTouches[0].identifier:e.changedTouches&&e.changedTouches[0]?e.changedTouches[0].identifier:void 0}function y(e){var t=e.getAttribute("style")||"";N.test(t)||e.setAttribute("style",t+P)}function v(e){var t=e.getAttribute("style")||"";e.setAttribute("style",t.replace(N,""))}function b(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return w({touchAction:"none"},e)}Object.defineProperty(t,"__esModule",{value:!0});var w=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e};t.matchesSelector=o,t.matchesSelectorAndParentsTo=a,t.addEvent=i,t.removeEvent=l,t.outerHeight=u,t.outerWidth=s,t.innerHeight=c,t.innerWidth=f,t.offsetXYFromParent=d,t.createCSSTransform=p,t.createSVGTransform=h,t.getTouch=m,t.getTouchIdentifier=g,t.addUserSelectStyles=y,t.removeUserSelectStyles=v,t.styleHacks=b;var E=n(14),D=n(15),S=function(e){return e&&e.__esModule?e:{default:e}}(D),x="",T=(0,D.getPrefix)("user-select"),O=(0,D.browserPrefixToStyle)("user-select",T),P=";"+O+": none;",N=new RegExp(";?"+O+": none;")},function(e,t){"use strict";function n(e,t){for(var n=0,r=e.length;n<r;n++)if(t.apply(t,[e[n],n,e]))return e[n]}function r(e){return"function"==typeof e||"[object Function]"===Object.prototype.toString.call(e)}function o(e){return"number"==typeof e&&!isNaN(e)}function a(e){return parseInt(e,10)}function i(e,t,n){if(e[t])return new Error("Invalid prop "+t+" passed to "+n+" - do not set this, set it on the child.")}Object.defineProperty(t,"__esModule",{value:!0}),t.findInArray=n,t.isFunction=r,t.isNum=o,t.int=a,t.dontSetMe=i},function(e,t){"use strict";function n(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"transform";if("undefined"==typeof window||void 0===window.document)return"";var t=window.document.documentElement.style;if(e in t)return"";for(var n=0;n<i.length;n++)if(r(e,i[n])in t)return i[n];return""}function r(e,t){return t?""+t+a(e):e}function o(e,t){return t?"-"+t.toLowerCase()+"-"+e:e}function a(e){for(var t="",n=!0,r=0;r<e.length;r++)n?(t+=e[r].toUpperCase(),n=!1):"-"===e[r]?n=!0:t+=e[r];return t}Object.defineProperty(t,"__esModule",{value:!0}),t.getPrefix=n,t.browserPrefixToKey=r,t.browserPrefixToStyle=o;var i=["Moz","Webkit","O","ms"];t.default=n()},function(e,t,n){"use strict";function r(e,t,n){if(!e.props.bounds)return[t,n];var r=e.props.bounds;r="string"==typeof r?r:c(r);var o=p.default.findDOMNode(e);if("string"==typeof r){var a=o.ownerDocument,i=a.defaultView,l=void 0;if("parent"===r)l=o.parentNode;else if(!(l=a.querySelector(r)))throw new Error('Bounds selector "'+r+'" could not find an element.');var u=i.getComputedStyle(o),s=i.getComputedStyle(l);r={left:-o.offsetLeft+(0,f.int)(s.paddingLeft)+(0,f.int)(u.marginLeft),top:-o.offsetTop+(0,f.int)(s.paddingTop)+(0,f.int)(u.marginTop),right:(0,h.innerWidth)(l)-(0,h.outerWidth)(o)-o.offsetLeft+(0,f.int)(s.paddingRight)-(0,f.int)(u.marginRight),bottom:(0,h.innerHeight)(l)-(0,h.outerHeight)(o)-o.offsetTop+(0,f.int)(s.paddingBottom)-(0,f.int)(u.marginBottom)}}return(0,f.isNum)(r.right)&&(t=Math.min(t,r.right)),(0,f.isNum)(r.bottom)&&(n=Math.min(n,r.bottom)),(0,f.isNum)(r.left)&&(t=Math.max(t,r.left)),(0,f.isNum)(r.top)&&(n=Math.max(n,r.top)),[t,n]}function o(e,t,n){return[Math.round(t/e[0])*e[0],Math.round(n/e[1])*e[1]]}function a(e){return"both"===e.props.axis||"x"===e.props.axis}function i(e){return"both"===e.props.axis||"y"===e.props.axis}function l(e,t,n){var r="number"==typeof t?(0,h.getTouch)(e,t):null;if("number"==typeof t&&!r)return null;var o=p.default.findDOMNode(n),a=n.props.offsetParent||o.offsetParent||o.ownerDocument.body;return(0,h.offsetXYFromParent)(r||e,a)}function u(e,t,n){var r=e.state;return(0,f.isNum)(r.lastX)?{node:p.default.findDOMNode(e),deltaX:t-r.lastX,deltaY:n-r.lastY,lastX:r.lastX,lastY:r.lastY,x:t,y:n}:{node:p.default.findDOMNode(e),deltaX:0,deltaY:0,lastX:t,lastY:n,x:t,y:n}}function s(e,t){return{node:t.node,x:e.state.x+t.deltaX,y:e.state.y+t.deltaY,deltaX:t.deltaX,deltaY:t.deltaY,lastX:e.state.x,lastY:e.state.y}}function c(e){return{left:e.left,top:e.top,right:e.right,bottom:e.bottom}}Object.defineProperty(t,"__esModule",{value:!0}),t.getBoundPosition=r,t.snapToGrid=o,t.canDragX=a,t.canDragY=i,t.getControlPosition=l,t.createCoreData=u,t.createDraggableData=s;var f=n(14),d=n(11),p=function(e){return e&&e.__esModule?e:{default:e}}(d),h=n(13)},function(e,t,n){(function(e){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var l=function(){function e(e,t){var n=[],r=!0,o=!1,a=void 0;try{for(var i,l=e[Symbol.iterator]();!(r=(i=l.next()).done)&&(n.push(i.value),!t||n.length!==t);r=!0);}catch(e){o=!0,a=e}finally{try{!r&&l.return&&l.return()}finally{if(o)throw a}}return n}return function(t,n){if(Array.isArray(t))return t;if(Symbol.iterator in Object(t))return e(t,n);throw new TypeError("Invalid attempt to destructure non-iterable instance")}}(),u=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),s=n(2),c=r(s),f=n(3),d=r(f),p=n(11),h=r(p),m=n(13),g=n(16),y=n(14),v=n(19),b=r(v),w={touch:{start:"touchstart",move:"touchmove",stop:"touchend"},mouse:{start:"mousedown",move:"mousemove",stop:"mouseup"}},E=w.mouse,D=function(e){function t(){var e,n,r,i;o(this,t);for(var u=arguments.length,s=Array(u),c=0;c<u;c++)s[c]=arguments[c];return n=r=a(this,(e=t.__proto__||Object.getPrototypeOf(t)).call.apply(e,[this].concat(s))),r.state={dragging:!1,lastX:NaN,lastY:NaN,touchIdentifier:null},r.handleDragStart=function(e){if(r.props.onMouseDown(e),!r.props.allowAnyClick&&"number"==typeof e.button&&0!==e.button)return!1;var t=h.default.findDOMNode(r),n=t.ownerDocument;if(!(r.props.disabled||!(e.target instanceof n.defaultView.Node)||r.props.handle&&!(0,m.matchesSelectorAndParentsTo)(e.target,r.props.handle,t)||r.props.cancel&&(0,m.matchesSelectorAndParentsTo)(e.target,r.props.cancel,t))){var o=(0,m.getTouchIdentifier)(e);r.setState({touchIdentifier:o});var a=(0,g.getControlPosition)(e,o,r);if(null!=a){var i=a.x,l=a.y,u=(0,g.createCoreData)(r,i,l);(0,b.default)("DraggableCore: handleDragStart: %j",u),(0,b.default)("calling",r.props.onStart);!1!==r.props.onStart(e,u)&&(r.props.enableUserSelectHack&&(0,m.addUserSelectStyles)(n.body),r.setState({dragging:!0,lastX:i,lastY:l}),(0,m.addEvent)(n,E.move,r.handleDrag),(0,m.addEvent)(n,E.stop,r.handleDragStop))}}},r.handleDrag=function(e){"touchmove"===e.type&&e.preventDefault();var t=(0,g.getControlPosition)(e,r.state.touchIdentifier,r);if(null!=t){var n=t.x,o=t.y;if(Array.isArray(r.props.grid)){var a=n-r.state.lastX,i=o-r.state.lastY,u=(0,g.snapToGrid)(r.props.grid,a,i),s=l(u,2);if(a=s[0],i=s[1],!a&&!i)return;n=r.state.lastX+a,o=r.state.lastY+i}var c=(0,g.createCoreData)(r,n,o);(0,b.default)("DraggableCore: handleDrag: %j",c);if(!1!==r.props.onDrag(e,c))r.setState({lastX:n,lastY:o});else try{r.handleDragStop(new MouseEvent("mouseup"))}catch(e){var f=document.createEvent("MouseEvents");f.initMouseEvent("mouseup",!0,!0,window,0,0,0,0,0,!1,!1,!1,!1,0,null),r.handleDragStop(f)}}},r.handleDragStop=function(e){if(r.state.dragging){var t=(0,g.getControlPosition)(e,r.state.touchIdentifier,r);if(null!=t){var n=t.x,o=t.y,a=(0,g.createCoreData)(r,n,o),i=h.default.findDOMNode(r),l=i.ownerDocument;r.props.enableUserSelectHack&&(0,m.removeUserSelectStyles)(l.body),(0,b.default)("DraggableCore: handleDragStop: %j",a),r.setState({dragging:!1,lastX:NaN,lastY:NaN}),r.props.onStop(e,a),(0,b.default)("DraggableCore: Removing handlers"),(0,m.removeEvent)(l,E.move,r.handleDrag),(0,m.removeEvent)(l,E.stop,r.handleDragStop)}}},r.onMouseDown=function(e){return E=w.mouse,r.handleDragStart(e)},r.onMouseUp=function(e){return E=w.mouse,r.handleDragStop(e)},r.onTouchStart=function(e){return E=w.touch,r.handleDragStart(e)},r.onTouchEnd=function(e){return E=w.touch,r.handleDragStop(e)},i=n,a(r,i)}return i(t,e),u(t,[{key:"componentWillUnmount",value:function(){var e=h.default.findDOMNode(this),t=e.ownerDocument;(0,m.removeEvent)(t,w.mouse.move,this.handleDrag),(0,m.removeEvent)(t,w.touch.move,this.handleDrag),(0,m.removeEvent)(t,w.mouse.stop,this.handleDragStop),(0,m.removeEvent)(t,w.touch.stop,this.handleDragStop),this.props.enableUserSelectHack&&(0,m.removeUserSelectStyles)(t.body)}},{key:"render",value:function(){return c.default.cloneElement(c.default.Children.only(this.props.children),{style:(0,m.styleHacks)(this.props.children.props.style),onMouseDown:this.onMouseDown,onTouchStart:this.onTouchStart,onMouseUp:this.onMouseUp,onTouchEnd:this.onTouchEnd})}}]),t}(c.default.Component);D.displayName="DraggableCore",D.propTypes={allowAnyClick:d.default.bool,disabled:d.default.bool,enableUserSelectHack:d.default.bool,offsetParent:function(t,n){if(e.browser&&t[n]&&1!==t[n].nodeType)throw new Error("Draggable's offsetParent must be a DOM Node.")},grid:d.default.arrayOf(d.default.number),handle:d.default.string,cancel:d.default.string,onStart:d.default.func,onDrag:d.default.func,onStop:d.default.func,onMouseDown:d.default.func,className:y.dontSetMe,style:y.dontSetMe,transform:y.dontSetMe},D.defaultProps={allowAnyClick:!1,cancel:null,disabled:!1,enableUserSelectHack:!0,offsetParent:null,handle:null,grid:null,transform:null,onStart:function(){},onDrag:function(){},onStop:function(){},onMouseDown:function(){}},t.default=D}).call(t,n(18))},function(e,t){function n(){throw new Error("setTimeout has not been defined")}function r(){throw new Error("clearTimeout has not been defined")}function o(e){if(c===setTimeout)return setTimeout(e,0);if((c===n||!c)&&setTimeout)return c=setTimeout,setTimeout(e,0);try{return c(e,0)}catch(t){try{return c.call(null,e,0)}catch(t){return c.call(this,e,0)}}}function a(e){if(f===clearTimeout)return clearTimeout(e);if((f===r||!f)&&clearTimeout)return f=clearTimeout,clearTimeout(e);try{return f(e)}catch(t){try{return f.call(null,e)}catch(t){return f.call(this,e)}}}function i(){m&&p&&(m=!1,p.length?h=p.concat(h):g=-1,h.length&&l())}function l(){if(!m){var e=o(i);m=!0;for(var t=h.length;t;){for(p=h,h=[];++g<t;)p&&p[g].run();g=-1,t=h.length}p=null,m=!1,a(e)}}function u(e,t){this.fun=e,this.array=t}function s(){}var c,f,d=e.exports={};!function(){try{c="function"==typeof setTimeout?setTimeout:n}catch(e){c=n}try{f="function"==typeof clearTimeout?clearTimeout:r}catch(e){f=r}}();var p,h=[],m=!1,g=-1;d.nextTick=function(e){var t=new Array(arguments.length-1);if(arguments.length>1)for(var n=1;n<arguments.length;n++)t[n-1]=arguments[n];h.push(new u(e,t)),1!==h.length||m||o(l)},u.prototype.run=function(){this.fun.apply(null,this.array)},d.title="browser",d.browser=!0,d.env={},d.argv=[],d.version="",d.versions={},d.on=s,d.addListener=s,d.once=s,d.off=s,d.removeListener=s,d.removeAllListeners=s,d.emit=s,d.binding=function(e){throw new Error("process.binding is not supported")},d.cwd=function(){return"/"},d.chdir=function(e){throw new Error("process.chdir is not supported")},d.umask=function(){return 0}},function(e,t,n){"use strict";function r(){}Object.defineProperty(t,"__esModule",{value:!0}),t.default=r}])})},190:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var o=n(0),a=r(o),i=n(1),l=(r(i),n(2)),u=r(l),s=n(3),c=r(s),f=n(12),d=r(f),p=n(4),h=function(e){var t=e.url;return a.default.createElement(u.default,{currentURL:t},a.default.createElement("div",{className:"content-wrap with-icons"},a.default.createElement(c.default,{url:t,image:"app"}),a.default.createElement("div",{className:"content-block"},a.default.createElement(d.default,{points:p.techApps}),a.default.createElement("div",{className:"content"},a.default.createElement("h2",null,"App Development Services"),a.default.createElement("p",null,"Maybe, there are a few businesses left that can successfully function without any web and software products. But most companies can significantly improve and grow their business with a help of desktop and mobile app development, chatbots, machine learning and artificial intelligence projects, and a lot of more."),a.default.createElement("p",null,"Future-oriented FinTech companies promote themselves with banking apps, E-Commerce businesses integrate the application with other corporate tools and third-party platforms, such as payment systems, CRMs, ERPs etc."),a.default.createElement("p",null,"So here are some tips on what to consider if you want to hire App Developers:"),a.default.createElement("ul",null,a.default.createElement("li",null,"Do not make a decision based on a hasty Google search;"),a.default.createElement("li",null,"Think twice if you want to hire the cheapest app developer possible;"),a.default.createElement("li",null,"Check out company’s portfolio and case studies on their website and professional social networks;"),a.default.createElement("li",null,"If the company offers many different and unrelated services, it is not a good sign;"),a.default.createElement("li",null,"Look for reviews and social proof of your potential partner. If possible, contact their old and/or existing clients.")),a.default.createElement("p",null,"On our Keenethics spaceship, we have strong expertise in Hybrid App Development. Native iOS and native Android development services are time-consuming and usually cost a lot. If you do not have specific requirements and are not sure which platform to choose, hire App Developers to build a multi-platform solution."),a.default.createElement("p",null,"Cross-platform apps help businesses to reach a larger audience. With a hybrid app, you can go upon the Google Play Market and the App Store: one code works for all platforms and devices."),a.default.createElement("p",null,"For app development we use the following technologies:"),a.default.createElement("ul",null,a.default.createElement("li",null,"Phonegap;"),a.default.createElement("li",null,"Cordova;"),a.default.createElement("li",null,"Electron.")),a.default.createElement("p",null,"Also, our astronauts are good at Progressive Web Apps development. Progressive Web App (PWA) is a hybrid of a regular website and a mobile application. This model combines features offered by most popular browsers with the features of mobile experience."),a.default.createElement("h3",null,"Hire App Developers"),a.default.createElement("p",null,"For a lot of companies, in-house app development is unreasonable and very expensive. Hiring local software development service providers is not always as cost-effective as you would probably want it to be. That is why market players from different industries delegate app development to an offshore software development company."),a.default.createElement("p",null,"There are a few essential benefits of hiring an offshore app development company:"),a.default.createElement("ul",null,a.default.createElement("li",null,"Outsourcing is a great tool to cut costs and reduce the workload of your in-house teams."),a.default.createElement("li",null,"You get an efficient solution at a reasonable price."),a.default.createElement("li",null,"There is no need to spend time finding, hiring, and training new employees."),a.default.createElement("li",null,"The overall process of app development takes less time. Teams may work on a product round-the-clock and launch it faster.")),a.default.createElement("p",null,"On our Keenethics spaceship, we believe in Agile software development and do our best to deliver top-notch product to clients. We can build a cross-platform application from scratch or update an existing one. Feel free to contact us, receive a free consultation from our astronauts and hire a team that will develop an app you need.")))))};h.defaultProps={url:{}},t.default=h},429:function(e,t,n){e.exports=n(190)}},[429]);
            return { page: comp.default }
          })
        