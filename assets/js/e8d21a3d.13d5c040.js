(self.webpackChunk=self.webpackChunk||[]).push([[3898],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return p},kt:function(){return h}});var a=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=a.createContext({}),l=function(e){var t=a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},p=function(e){var t=l(e.components);return a.createElement(c.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,c=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),u=l(n),h=o,m=u["".concat(c,".").concat(h)]||u[h]||d[h]||r;return n?a.createElement(m,s(s({ref:t},p),{},{components:n})):a.createElement(m,s({ref:t},p))}));function h(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,s=new Array(r);s[0]=u;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:o,s[1]=i;for(var l=2;l<r;l++)s[l]=n[l];return a.createElement.apply(null,s)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},4030:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return i},contentTitle:function(){return c},metadata:function(){return l},toc:function(){return p},default:function(){return u}});var a=n(2122),o=n(9756),r=(n(7294),n(3905)),s=["components"],i={id:"reducing-boilerplate",title:"Reducing Boilerplate"},c="Reducing Boilerplate",l={unversionedId:"usage/reducing-boilerplate",id:"usage/reducing-boilerplate",isDocsHomePage:!1,title:"Reducing Boilerplate",description:"Redux is in part inspired by Flux, and the most common complaint about Flux is how it makes you write a lot of boilerplate. In this recipe, we will consider how Redux lets us choose how verbose we'd like our code to be, depending on personal style, team preferences, longer term maintainability, and so on.",source:"@site/../docs/usage/ReducingBoilerplate.md",sourceDirName:"usage",slug:"/usage/reducing-boilerplate",permalink:"/usage/reducing-boilerplate",version:"current",frontMatter:{id:"reducing-boilerplate",title:"Reducing Boilerplate"},sidebar:"docs",previous:{title:"Initializing State",permalink:"/usage/structuring-reducers/initializing-state"},next:{title:"Deriving Data with Selectors",permalink:"/usage/deriving-data-selectors"}},p=[{value:"Actions",id:"actions",children:[]},{value:"Action Creators",id:"action-creators",children:[{value:"Generating Action Creators",id:"generating-action-creators",children:[]}]},{value:"Async Action Creators",id:"async-action-creators",children:[]},{value:"Reducers",id:"reducers",children:[{value:"Generating Reducers",id:"generating-reducers",children:[]}]}],d={toc:p};function u(e){var t=e.components,n=(0,o.Z)(e,s);return(0,r.kt)("wrapper",(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"reducing-boilerplate"},"Reducing Boilerplate"),(0,r.kt)("p",null,"Redux is in part ",(0,r.kt)("a",{parentName:"p",href:"/understanding/history-and-design/prior-art"},"inspired by Flux"),", and the most common complaint about Flux is how it makes you write a lot of boilerplate. In this recipe, we will consider how Redux lets us choose how verbose we'd like our code to be, depending on personal style, team preferences, longer term maintainability, and so on."),(0,r.kt)("h2",{id:"actions"},"Actions"),(0,r.kt)("p",null,"Actions are plain objects describing what happened in the app, and serve as the sole way to describe an intention to mutate the data. It's important that ",(0,r.kt)("strong",{parentName:"p"},"actions being objects you have to dispatch is not boilerplate, but one of the ",(0,r.kt)("a",{parentName:"strong",href:"/understanding/thinking-in-redux/three-principles"},"fundamental design choices")," of Redux"),"."),(0,r.kt)("p",null,"There are frameworks claiming to be similar to Flux, but without a concept of action objects. In terms of being predictable, this is a step backwards from Flux or Redux. If there are no serializable plain object actions, it is impossible to record and replay user sessions, or to implement ",(0,r.kt)("a",{parentName:"p",href:"https://www.youtube.com/watch?v=xsSnOQynTHs"},"hot reloading with time travel"),". If you'd rather modify data directly, you don't need Redux."),(0,r.kt)("p",null,"Actions look like this:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"{ type: 'ADD_TODO', text: 'Use Redux' }\n{ type: 'REMOVE_TODO', id: 42 }\n{ type: 'LOAD_ARTICLE', response: { ... } }\n")),(0,r.kt)("p",null,"It is a common convention that actions have a constant type that helps reducers (or Stores in Flux) identify them. We recommend that you use strings and not ",(0,r.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Symbol"},"Symbols")," for action types, because strings are serializable, and by using Symbols you make recording and replaying harder than it needs to be."),(0,r.kt)("p",null,"In Flux, it is traditionally thought that you would define every action type as a string constant:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"const ADD_TODO = 'ADD_TODO'\nconst REMOVE_TODO = 'REMOVE_TODO'\nconst LOAD_ARTICLE = 'LOAD_ARTICLE'\n")),(0,r.kt)("p",null,"Why is this beneficial? ",(0,r.kt)("strong",{parentName:"p"},"It is often claimed that constants are unnecessary, and for small projects, this might be correct.")," For larger projects, there are some benefits to defining action types as constants:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"It helps keep the naming consistent because all action types are gathered in a single place."),(0,r.kt)("li",{parentName:"ul"},"Sometimes you want to see all existing actions before working on a new feature. It may be that the action you need was already added by somebody on the team, but you didn't know."),(0,r.kt)("li",{parentName:"ul"},"The list of action types that were added, removed, and changed in a Pull Request helps everyone on the team keep track of scope and implementation of new features."),(0,r.kt)("li",{parentName:"ul"},"If you make a typo when importing an action constant, you will get ",(0,r.kt)("inlineCode",{parentName:"li"},"undefined"),". Redux will immediately throw when dispatching such an action, and you'll find the mistake sooner.")),(0,r.kt)("p",null,"It is up to you to choose the conventions for your project. You may start by using inline strings, and later transition to constants, and maybe later group them into a single file. Redux does not have any opinion here, so use your best judgment."),(0,r.kt)("h2",{id:"action-creators"},"Action Creators"),(0,r.kt)("p",null,"It is another common convention that, instead of creating action objects inline in the places where you dispatch the actions, you would create functions generating them."),(0,r.kt)("p",null,"For example, instead of calling ",(0,r.kt)("inlineCode",{parentName:"p"},"dispatch")," with an object literal:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"// somewhere in an event handler\ndispatch({\n  type: 'ADD_TODO',\n  text: 'Use Redux'\n})\n")),(0,r.kt)("p",null,"You might write an action creator in a separate file, and import it into your component:"),(0,r.kt)("h4",{id:"actioncreatorsjs"},(0,r.kt)("inlineCode",{parentName:"h4"},"actionCreators.js")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"export function addTodo(text) {\n  return {\n    type: 'ADD_TODO',\n    text\n  }\n}\n")),(0,r.kt)("h4",{id:"addtodojs"},(0,r.kt)("inlineCode",{parentName:"h4"},"AddTodo.js")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"import { addTodo } from './actionCreators'\n\n// somewhere in an event handler\ndispatch(addTodo('Use Redux'))\n")),(0,r.kt)("p",null,"Action creators have often been criticized as boilerplate. Well, you don't have to write them! ",(0,r.kt)("strong",{parentName:"p"},"You can use object literals if you feel this better suits your project.")," There are, however, some benefits for writing action creators you should know about."),(0,r.kt)("p",null,"Let's say a designer comes back to us after reviewing our prototype, and tells us that we need to allow three todos maximum. We can enforce this by rewriting our action creator to a callback form with ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/gaearon/redux-thunk"},"redux-thunk")," middleware and adding an early exit:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"function addTodoWithoutCheck(text) {\n  return {\n    type: 'ADD_TODO',\n    text\n  }\n}\n\nexport function addTodo(text) {\n  // This form is allowed by Redux Thunk middleware\n  // described below in \u201cAsync Action Creators\u201d section.\n  return function (dispatch, getState) {\n    if (getState().todos.length === 3) {\n      // Exit early\n      return\n    }\n    dispatch(addTodoWithoutCheck(text))\n  }\n}\n")),(0,r.kt)("p",null,"We just modified how the ",(0,r.kt)("inlineCode",{parentName:"p"},"addTodo")," action creator behaves, completely invisible to the calling code. ",(0,r.kt)("strong",{parentName:"p"},"We don't have to worry about looking at each place where todos are being added, to make sure they have this check.")," Action creators let you decouple additional logic around dispatching an action, from the actual components emitting those actions. It's very handy when the application is under heavy development, and the requirements change often."),(0,r.kt)("h3",{id:"generating-action-creators"},"Generating Action Creators"),(0,r.kt)("p",null,"Some frameworks like ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/acdlite/flummox"},"Flummox")," generate action type constants automatically from the action creator function definitions. The idea is that you don't need to both define ",(0,r.kt)("inlineCode",{parentName:"p"},"ADD_TODO")," constant and ",(0,r.kt)("inlineCode",{parentName:"p"},"addTodo()")," action creator. Under the hood, such solutions still generate action type constants, but they're created implicitly so it's a level of indirection and can cause confusion. We recommend creating your action type constants explicitly."),(0,r.kt)("p",null,"Writing simple action creators can be tiresome and often ends up generating redundant boilerplate code:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"export function addTodo(text) {\n  return {\n    type: 'ADD_TODO',\n    text\n  }\n}\n\nexport function editTodo(id, text) {\n  return {\n    type: 'EDIT_TODO',\n    id,\n    text\n  }\n}\n\nexport function removeTodo(id) {\n  return {\n    type: 'REMOVE_TODO',\n    id\n  }\n}\n")),(0,r.kt)("p",null,"You can always write a function that generates an action creator:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"function makeActionCreator(type, ...argNames) {\n  return function (...args) {\n    const action = { type }\n    argNames.forEach((arg, index) => {\n      action[argNames[index]] = args[index]\n    })\n    return action\n  }\n}\n\nconst ADD_TODO = 'ADD_TODO'\nconst EDIT_TODO = 'EDIT_TODO'\nconst REMOVE_TODO = 'REMOVE_TODO'\n\nexport const addTodo = makeActionCreator(ADD_TODO, 'text')\nexport const editTodo = makeActionCreator(EDIT_TODO, 'id', 'text')\nexport const removeTodo = makeActionCreator(REMOVE_TODO, 'id')\n")),(0,r.kt)("p",null,"There are also utility libraries to aid in generating action creators, such as ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/pauldijou/redux-act"},"redux-act")," and ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/acdlite/redux-actions"},"redux-actions"),". These can help reduce boilerplate code and enforce adherence to standards such as ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/acdlite/flux-standard-action"},"Flux Standard Action (FSA)"),"."),(0,r.kt)("h2",{id:"async-action-creators"},"Async Action Creators"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/understanding/thinking-in-redux/glossary#middleware"},"Middleware")," lets you inject custom logic that interprets every action object before it is dispatched. Async actions are the most common use case for middleware."),(0,r.kt)("p",null,"Without any middleware, ",(0,r.kt)("a",{parentName:"p",href:"/api/store#dispatchaction"},(0,r.kt)("inlineCode",{parentName:"a"},"dispatch"))," only accepts a plain object, so we have to perform AJAX calls inside our components:"),(0,r.kt)("h4",{id:"actioncreatorsjs-1"},(0,r.kt)("inlineCode",{parentName:"h4"},"actionCreators.js")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"export function loadPostsSuccess(userId, response) {\n  return {\n    type: 'LOAD_POSTS_SUCCESS',\n    userId,\n    response\n  }\n}\n\nexport function loadPostsFailure(userId, error) {\n  return {\n    type: 'LOAD_POSTS_FAILURE',\n    userId,\n    error\n  }\n}\n\nexport function loadPostsRequest(userId) {\n  return {\n    type: 'LOAD_POSTS_REQUEST',\n    userId\n  }\n}\n")),(0,r.kt)("h4",{id:"userinfojs"},(0,r.kt)("inlineCode",{parentName:"h4"},"UserInfo.js")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"import { Component } from 'react'\nimport { connect } from 'react-redux'\nimport {\n  loadPostsRequest,\n  loadPostsSuccess,\n  loadPostsFailure\n} from './actionCreators'\n\nclass Posts extends Component {\n  loadData(userId) {\n    // Injected into props by React Redux `connect()` call:\n    const { dispatch, posts } = this.props\n\n    if (posts[userId]) {\n      // There is cached data! Don't do anything.\n      return\n    }\n\n    // Reducer can react to this action by setting\n    // `isFetching` and thus letting us show a spinner.\n    dispatch(loadPostsRequest(userId))\n\n    // Reducer can react to these actions by filling the `users`.\n    fetch(`http://myapi.com/users/${userId}/posts`).then(\n      response => dispatch(loadPostsSuccess(userId, response)),\n      error => dispatch(loadPostsFailure(userId, error))\n    )\n  }\n\n  componentDidMount() {\n    this.loadData(this.props.userId)\n  }\n\n  componentDidUpdate(prevProps) {\n    if (prevProps.userId !== this.props.userId) {\n      this.loadData(this.props.userId)\n    }\n  }\n\n  render() {\n    if (this.props.isFetching) {\n      return <p>Loading...</p>\n    }\n\n    const posts = this.props.posts.map(post => (\n      <Post post={post} key={post.id} />\n    ))\n\n    return <div>{posts}</div>\n  }\n}\n\nexport default connect(state => ({\n  posts: state.posts,\n  isFetching: state.isFetching\n}))(Posts)\n")),(0,r.kt)("p",null,"However, this quickly gets repetitive because different components request data from the same API endpoints. Moreover, we want to reuse some of this logic (e.g., early exit when there is cached data available) from many components."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Middleware lets us write more expressive, potentially async action creators.")," It lets us dispatch something other than plain objects, and interprets the values. For example, middleware can \u201ccatch\u201d dispatched Promises and turn them into a pair of request and success/failure actions."),(0,r.kt)("p",null,"The simplest example of middleware is ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/gaearon/redux-thunk"},"redux-thunk"),". ",(0,r.kt)("strong",{parentName:"p"},"\u201cThunk\u201d middleware lets you write action creators as \u201cthunks\u201d, that is, functions returning functions.")," This inverts the control: you will get ",(0,r.kt)("inlineCode",{parentName:"p"},"dispatch")," as an argument, so you can write an action creator that dispatches many times."),(0,r.kt)("blockquote",null,(0,r.kt)("h5",{parentName:"blockquote",id:"note"},"Note"),(0,r.kt)("p",{parentName:"blockquote"},"Thunk middleware is just one example of middleware. Middleware is not about \u201cletting you dispatch functions\u201d. It's about letting you dispatch anything that the particular middleware you use knows how to handle. Thunk middleware adds a specific behavior when you dispatch functions, but it really depends on the middleware you use.")),(0,r.kt)("p",null,"Consider the code above rewritten with ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/gaearon/redux-thunk"},"redux-thunk"),":"),(0,r.kt)("h4",{id:"actioncreatorsjs-2"},(0,r.kt)("inlineCode",{parentName:"h4"},"actionCreators.js")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"export function loadPosts(userId) {\n  // Interpreted by the thunk middleware:\n  return function (dispatch, getState) {\n    const { posts } = getState()\n    if (posts[userId]) {\n      // There is cached data! Don't do anything.\n      return\n    }\n\n    dispatch({\n      type: 'LOAD_POSTS_REQUEST',\n      userId\n    })\n\n    // Dispatch vanilla actions asynchronously\n    fetch(`http://myapi.com/users/${userId}/posts`).then(\n      response =>\n        dispatch({\n          type: 'LOAD_POSTS_SUCCESS',\n          userId,\n          response\n        }),\n      error =>\n        dispatch({\n          type: 'LOAD_POSTS_FAILURE',\n          userId,\n          error\n        })\n    )\n  }\n}\n")),(0,r.kt)("h4",{id:"userinfojs-1"},(0,r.kt)("inlineCode",{parentName:"h4"},"UserInfo.js")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"import { Component } from 'react'\nimport { connect } from 'react-redux'\nimport { loadPosts } from './actionCreators'\n\nclass Posts extends Component {\n  componentDidMount() {\n    this.props.dispatch(loadPosts(this.props.userId))\n  }\n\n  componentDidUpdate(prevProps) {\n    if (prevProps.userId !== this.props.userId) {\n      this.props.dispatch(loadPosts(this.props.userId))\n    }\n  }\n\n  render() {\n    if (this.props.isFetching) {\n      return <p>Loading...</p>\n    }\n\n    const posts = this.props.posts.map(post => (\n      <Post post={post} key={post.id} />\n    ))\n\n    return <div>{posts}</div>\n  }\n}\n\nexport default connect(state => ({\n  posts: state.posts,\n  isFetching: state.isFetching\n}))(Posts)\n")),(0,r.kt)("p",null,"This is much less typing! If you'd like, you can still have \u201cvanilla\u201d action creators like ",(0,r.kt)("inlineCode",{parentName:"p"},"loadPostsSuccess")," which you'd use from a container ",(0,r.kt)("inlineCode",{parentName:"p"},"loadPosts")," action creator."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Finally, you can write your own middleware.")," Let's say you want to generalize the pattern above and describe your async action creators like this instead:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"export function loadPosts(userId) {\n  return {\n    // Types of actions to emit before and after\n    types: ['LOAD_POSTS_REQUEST', 'LOAD_POSTS_SUCCESS', 'LOAD_POSTS_FAILURE'],\n    // Check the cache (optional):\n    shouldCallAPI: state => !state.posts[userId],\n    // Perform the fetching:\n    callAPI: () => fetch(`http://myapi.com/users/${userId}/posts`),\n    // Arguments to inject in begin/end actions\n    payload: { userId }\n  }\n}\n")),(0,r.kt)("p",null,"The middleware that interprets such actions could look like this:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"function callAPIMiddleware({ dispatch, getState }) {\n  return next => action => {\n    const { types, callAPI, shouldCallAPI = () => true, payload = {} } = action\n\n    if (!types) {\n      // Normal action: pass it on\n      return next(action)\n    }\n\n    if (\n      !Array.isArray(types) ||\n      types.length !== 3 ||\n      !types.every(type => typeof type === 'string')\n    ) {\n      throw new Error('Expected an array of three string types.')\n    }\n\n    if (typeof callAPI !== 'function') {\n      throw new Error('Expected callAPI to be a function.')\n    }\n\n    if (!shouldCallAPI(getState())) {\n      return\n    }\n\n    const [requestType, successType, failureType] = types\n\n    dispatch(\n      Object.assign({}, payload, {\n        type: requestType\n      })\n    )\n\n    return callAPI().then(\n      response =>\n        dispatch(\n          Object.assign({}, payload, {\n            response,\n            type: successType\n          })\n        ),\n      error =>\n        dispatch(\n          Object.assign({}, payload, {\n            error,\n            type: failureType\n          })\n        )\n    )\n  }\n}\n")),(0,r.kt)("p",null,"After passing it once to ",(0,r.kt)("a",{parentName:"p",href:"/api/applymiddleware"},(0,r.kt)("inlineCode",{parentName:"a"},"applyMiddleware(...middlewares)")),", you can write all your API-calling action creators the same way:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"export function loadPosts(userId) {\n  return {\n    types: ['LOAD_POSTS_REQUEST', 'LOAD_POSTS_SUCCESS', 'LOAD_POSTS_FAILURE'],\n    shouldCallAPI: state => !state.posts[userId],\n    callAPI: () => fetch(`http://myapi.com/users/${userId}/posts`),\n    payload: { userId }\n  }\n}\n\nexport function loadComments(postId) {\n  return {\n    types: [\n      'LOAD_COMMENTS_REQUEST',\n      'LOAD_COMMENTS_SUCCESS',\n      'LOAD_COMMENTS_FAILURE'\n    ],\n    shouldCallAPI: state => !state.comments[postId],\n    callAPI: () => fetch(`http://myapi.com/posts/${postId}/comments`),\n    payload: { postId }\n  }\n}\n\nexport function addComment(postId, message) {\n  return {\n    types: [\n      'ADD_COMMENT_REQUEST',\n      'ADD_COMMENT_SUCCESS',\n      'ADD_COMMENT_FAILURE'\n    ],\n    callAPI: () =>\n      fetch(`http://myapi.com/posts/${postId}/comments`, {\n        method: 'post',\n        headers: {\n          Accept: 'application/json',\n          'Content-Type': 'application/json'\n        },\n        body: JSON.stringify({ message })\n      }),\n    payload: { postId, message }\n  }\n}\n")),(0,r.kt)("h2",{id:"reducers"},"Reducers"),(0,r.kt)("p",null,"Redux reduces the boilerplate of Flux stores considerably by describing the update logic as a function. A function is simpler than an object, and much simpler than a class."),(0,r.kt)("p",null,"Consider this Flux store:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"const _todos = []\n\nconst TodoStore = Object.assign({}, EventEmitter.prototype, {\n  getAll() {\n    return _todos\n  }\n})\n\nAppDispatcher.register(function (action) {\n  switch (action.type) {\n    case ActionTypes.ADD_TODO:\n      const text = action.text.trim()\n      _todos.push(text)\n      TodoStore.emitChange()\n  }\n})\n\nexport default TodoStore\n")),(0,r.kt)("p",null,"With Redux, the same update logic can be described as a reducing function:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"export function todos(state = [], action) {\n  switch (action.type) {\n    case ActionTypes.ADD_TODO:\n      const text = action.text.trim()\n      return [...state, text]\n    default:\n      return state\n  }\n}\n")),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"switch")," statement is ",(0,r.kt)("em",{parentName:"p"},"not")," the real boilerplate. The real boilerplate of Flux is conceptual: the need to emit an update, the need to register the Store with a Dispatcher, the need for the Store to be an object (and the complications that arise when you want a universal app)."),(0,r.kt)("p",null,"It's unfortunate that many still choose Flux framework based on whether it uses ",(0,r.kt)("inlineCode",{parentName:"p"},"switch")," statements in the documentation. If you don't like ",(0,r.kt)("inlineCode",{parentName:"p"},"switch"),", you can solve this with a single function, as we show below."),(0,r.kt)("h3",{id:"generating-reducers"},"Generating Reducers"),(0,r.kt)("p",null,"Let's write a function that lets us express reducers as an object mapping from action types to handlers. For example, if we want our ",(0,r.kt)("inlineCode",{parentName:"p"},"todos")," reducers to be defined like this:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"export const todos = createReducer([], {\n  [ActionTypes.ADD_TODO]: (state, action) => {\n    const text = action.text.trim()\n    return [...state, text]\n  }\n})\n")),(0,r.kt)("p",null,"We can write the following helper to accomplish this:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"function createReducer(initialState, handlers) {\n  return function reducer(state = initialState, action) {\n    if (handlers.hasOwnProperty(action.type)) {\n      return handlers[action.type](state, action)\n    } else {\n      return state\n    }\n  }\n}\n")),(0,r.kt)("p",null,"This wasn't difficult, was it? Redux doesn't provide such a helper function by default because there are many ways to write it. Maybe you want it to automatically convert plain JS objects to Immutable objects to hydrate the server state. Maybe you want to merge the returned state with the current state. There may be different approaches to a \u201ccatch all\u201d handler. All of this depends on the conventions you choose for your team on a specific project."),(0,r.kt)("p",null,"The Redux reducer API is ",(0,r.kt)("inlineCode",{parentName:"p"},"(state, action) => newState"),", but how you create those reducers is up to you."))}u.isMDXComponent=!0}}]);