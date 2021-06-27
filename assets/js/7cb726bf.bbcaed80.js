(self.webpackChunk=self.webpackChunk||[]).push([[3660],{3905:function(t,e,n){"use strict";n.d(e,{Zo:function(){return d},kt:function(){return m}});var o=n(7294);function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function a(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);e&&(o=o.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,o)}return n}function i(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?a(Object(n),!0).forEach((function(e){r(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function c(t,e){if(null==t)return{};var n,o,r=function(t,e){if(null==t)return{};var n,o,r={},a=Object.keys(t);for(o=0;o<a.length;o++)n=a[o],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);for(o=0;o<a.length;o++)n=a[o],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}var s=o.createContext({}),p=function(t){var e=o.useContext(s),n=e;return t&&(n="function"==typeof t?t(e):i(i({},e),t)),n},d=function(t){var e=p(t.components);return o.createElement(s.Provider,{value:e},t.children)},u={inlineCode:"code",wrapper:function(t){var e=t.children;return o.createElement(o.Fragment,{},e)}},l=o.forwardRef((function(t,e){var n=t.components,r=t.mdxType,a=t.originalType,s=t.parentName,d=c(t,["components","mdxType","originalType","parentName"]),l=p(n),m=r,h=l["".concat(s,".").concat(m)]||l[m]||u[m]||a;return n?o.createElement(h,i(i({ref:e},d),{},{components:n})):o.createElement(h,i({ref:e},d))}));function m(t,e){var n=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var a=n.length,i=new Array(a);i[0]=l;var c={};for(var s in e)hasOwnProperty.call(e,s)&&(c[s]=e[s]);c.originalType=t,c.mdxType="string"==typeof t?t:r,i[1]=c;for(var p=2;p<a;p++)i[p]=n[p];return o.createElement.apply(null,i)}return o.createElement.apply(null,n)}l.displayName="MDXCreateElement"},3029:function(t,e,n){"use strict";n.r(e),n.d(e,{frontMatter:function(){return c},contentTitle:function(){return s},metadata:function(){return p},toc:function(){return d},default:function(){return l}});var o=n(2122),r=n(9756),a=(n(7294),n(3905)),i=["components"],c={id:"bindactioncreators",title:"bindActionCreators",hide_title:!0,description:"API > bindActionCreators: wrapping action creators for dispatching"},s=void 0,p={unversionedId:"api/bindactioncreators",id:"api/bindactioncreators",isDocsHomePage:!1,title:"bindActionCreators",description:"API > bindActionCreators: wrapping action creators for dispatching",source:"@site/../docs/api/bindActionCreators.md",sourceDirName:"api",slug:"/api/bindactioncreators",permalink:"/api/bindactioncreators",version:"current",frontMatter:{id:"bindactioncreators",title:"bindActionCreators",hide_title:!0,description:"API > bindActionCreators: wrapping action creators for dispatching"},sidebar:"docs",previous:{title:"applyMiddleware",permalink:"/api/applymiddleware"},next:{title:"compose",permalink:"/api/compose"}},d=[],u={toc:d};function l(t){var e=t.components,n=(0,r.Z)(t,i);return(0,a.kt)("wrapper",(0,o.Z)({},u,n,{components:e,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"bindactioncreatorsactioncreators-dispatch"},(0,a.kt)("inlineCode",{parentName:"h1"},"bindActionCreators(actionCreators, dispatch)")),(0,a.kt)("p",null,"Turns an object whose values are ",(0,a.kt)("a",{parentName:"p",href:"/understanding/thinking-in-redux/glossary#action-creator"},"action creators"),", into an object with the same keys, but with every action creator wrapped into a ",(0,a.kt)("a",{parentName:"p",href:"/api/store#dispatchaction"},(0,a.kt)("inlineCode",{parentName:"a"},"dispatch"))," call so they may be invoked directly."),(0,a.kt)("p",null,"Normally you should just call ",(0,a.kt)("a",{parentName:"p",href:"/api/store#dispatchaction"},(0,a.kt)("inlineCode",{parentName:"a"},"dispatch"))," directly on your ",(0,a.kt)("a",{parentName:"p",href:"/api/store"},(0,a.kt)("inlineCode",{parentName:"a"},"Store"))," instance. If you use Redux with React, ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/gaearon/react-redux"},"react-redux")," will provide you with the ",(0,a.kt)("a",{parentName:"p",href:"/api/store#dispatchaction"},(0,a.kt)("inlineCode",{parentName:"a"},"dispatch"))," function so you can call it directly, too."),(0,a.kt)("p",null,"The only use case for ",(0,a.kt)("inlineCode",{parentName:"p"},"bindActionCreators")," is when you want to pass some action creators down to a component that isn't aware of Redux, and you don't want to pass ",(0,a.kt)("a",{parentName:"p",href:"/api/store#dispatchaction"},(0,a.kt)("inlineCode",{parentName:"a"},"dispatch"))," or the Redux store to it."),(0,a.kt)("p",null,"For convenience, you can also pass an action creator as the first argument, and get a dispatch wrapped function in return."),(0,a.kt)("h4",{id:"parameters"},"Parameters"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("inlineCode",{parentName:"p"},"actionCreators")," (",(0,a.kt)("em",{parentName:"p"},"Function")," or ",(0,a.kt)("em",{parentName:"p"},"Object"),"): An ",(0,a.kt)("a",{parentName:"p",href:"/understanding/thinking-in-redux/glossary#action-creator"},"action creator"),", or an object whose values are action creators.")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("inlineCode",{parentName:"p"},"dispatch")," (",(0,a.kt)("em",{parentName:"p"},"Function"),"): A ",(0,a.kt)("a",{parentName:"p",href:"/api/store#dispatchaction"},(0,a.kt)("inlineCode",{parentName:"a"},"dispatch"))," function available on the ",(0,a.kt)("a",{parentName:"p",href:"/api/store"},(0,a.kt)("inlineCode",{parentName:"a"},"Store"))," instance."))),(0,a.kt)("h4",{id:"returns"},"Returns"),(0,a.kt)("p",null,"(",(0,a.kt)("em",{parentName:"p"},"Function")," or ",(0,a.kt)("em",{parentName:"p"},"Object"),"): An object mimicking the original object, but with each function immediately dispatching the action returned by the corresponding action creator. If you passed a function as ",(0,a.kt)("inlineCode",{parentName:"p"},"actionCreators"),", the return value will also be a single function."),(0,a.kt)("h4",{id:"example"},"Example"),(0,a.kt)("h4",{id:"todoactioncreatorsjs"},(0,a.kt)("inlineCode",{parentName:"h4"},"TodoActionCreators.js")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"export function addTodo(text) {\n  return {\n    type: 'ADD_TODO',\n    text\n  }\n}\n\nexport function removeTodo(id) {\n  return {\n    type: 'REMOVE_TODO',\n    id\n  }\n}\n")),(0,a.kt)("h4",{id:"somecomponentjs"},(0,a.kt)("inlineCode",{parentName:"h4"},"SomeComponent.js")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"import { Component } from 'react'\nimport { bindActionCreators } from 'redux'\nimport { connect } from 'react-redux'\n\nimport * as TodoActionCreators from './TodoActionCreators'\nconsole.log(TodoActionCreators)\n// {\n//   addTodo: Function,\n//   removeTodo: Function\n// }\n\nclass TodoListContainer extends Component {\n  constructor(props) {\n    super(props)\n\n    const { dispatch } = props\n\n    // Here's a good use case for bindActionCreators:\n    // You want a child component to be completely unaware of Redux.\n    // We create bound versions of these functions now so we can\n    // pass them down to our child later.\n\n    this.boundActionCreators = bindActionCreators(TodoActionCreators, dispatch)\n    console.log(this.boundActionCreators)\n    // {\n    //   addTodo: Function,\n    //   removeTodo: Function\n    // }\n  }\n\n  componentDidMount() {\n    // Injected by react-redux:\n    let { dispatch } = this.props\n\n    // Note: this won't work:\n    // TodoActionCreators.addTodo('Use Redux')\n\n    // You're just calling a function that creates an action.\n    // You must dispatch the action, too!\n\n    // This will work:\n    let action = TodoActionCreators.addTodo('Use Redux')\n    dispatch(action)\n  }\n\n  render() {\n    // Injected by react-redux:\n    let { todos } = this.props\n\n    return <TodoList todos={todos} {...this.boundActionCreators} />\n\n    // An alternative to bindActionCreators is to pass\n    // just the dispatch function down, but then your child component\n    // needs to import action creators and know about them.\n\n    // return <TodoList todos={todos} dispatch={dispatch} />\n  }\n}\n\nexport default connect(state => ({ todos: state.todos }))(TodoListContainer)\n")),(0,a.kt)("h4",{id:"tips"},"Tips"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"You might ask: why don't we bind the action creators to the store instance right away, like in classical Flux? The problem is that this won't work well with universal apps that need to render on the server. Most likely you want to have a separate store instance per request so you can prepare them with different data, but binding action creators during their definition means you're stuck with a single store instance for all requests.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"If you use ES5, instead of ",(0,a.kt)("inlineCode",{parentName:"p"},"import * as")," syntax you can just pass ",(0,a.kt)("inlineCode",{parentName:"p"},"require('./TodoActionCreators')")," to ",(0,a.kt)("inlineCode",{parentName:"p"},"bindActionCreators")," as the first argument. The only thing it cares about is that the values of the ",(0,a.kt)("inlineCode",{parentName:"p"},"actionCreators")," properties are functions. The module system doesn't matter."))))}l.isMDXComponent=!0}}]);