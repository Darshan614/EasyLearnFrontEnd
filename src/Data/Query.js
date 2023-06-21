// const newTechnology = new Technology({
//   name: "React",
//   subtopics: [
//     {
//       name: "React Basics",
//       description:
//         "Learn the fundamentals of React, a JavaScript library for building user interfaces",
//       codeSample:
//         "import React from 'react';\nimport ReactDOM from 'react-dom';\n\nfunction App() {\n  return (\n    <div>\n      <h1>Hello, world!</h1>\n      <p>Welcome to React</p>\n    </div>\n  );\n}\n\nReactDOM.render(\n  <App />, document.getElementById('root')\n);",
//       videos: [
//         {
//           url: "https://www.youtube.com/watch?v=DLX62G4lc44",
//           userId: mongoose.Types.ObjectId("615d7d0dc65338319e71a23f"),
//         },
//       ],
//       questions: [
//         {
//           question: "What is React?",
//           answers: [
//             {
//               answer:
//                 "React is an open-source JavaScript library for building user interfaces.",
//               userId: mongoose.Types.ObjectId("615d7d0dc65338319e71a23f"),
//             },
//           ],
//           userId: mongoose.Types.ObjectId("615d7d0dc65338319e71a23f"),
//           upvotes: 4,
//           downvotes: 0,
//         },
//         {
//           question: "What are React components?",
//           answers: [
//             {
//               answer:
//                 "React components are modular and reusable pieces of code that define a specific part of a user interface.",
//               userId: mongoose.Types.ObjectId("615d7d0dc65338319e71a23f"),
//             },
//           ],
//           userId: mongoose.Types.ObjectId("615d7d0dc65338319e71a23f"),
//           upvotes: 3,
//           downvotes: 0,
//         },
//         {
//           question: "What is JSX in React?",
//           answers: [
//             {
//               answer:
//                 "JSX is a syntax extension that allows you to write HTML-like code in JavaScript.",
//               userId: mongoose.Types.ObjectId("615d7d0dc65338319e71a23f"),
//             },
//           ],
//           userId: mongoose.Types.ObjectId("615d7d0dc65338319e71a23f"),
//           upvotes: 5,
//           downvotes: 1,
//         },
//       ],
//     },
//     {
//       name: "Components",
//       description:
//         "React components are the building blocks of React applications. They are modular and reusable pieces of code that define a specific part of a user interface.",
//       codeSample:
//         "function Button(props) { return <button>{props.label}</button> }",
//       videos: [
//         {
//           url: "https://www.youtube.com/watch?v=JPT3bFIwJYA",
//           userId: mongoose.Types.ObjectId("615d7d0dc65338319e71a23f"),
//         },
//       ],
//       questions: [
//         {
//           question: "How do you create a React component?",
//           answers: [
//             {
//               answer:
//                 "You can create a React component by extending the 'React.Component' class and defining a 'render' method that returns the component's UI.",
//               userId: mongoose.Types.ObjectId("615d7d0dc65338319e71a23f"),
//             },
//           ],
//           userId: mongoose.Types.ObjectId("615d7d0dc65338319e71a23f"),
//           upvotes: 10,
//           downvotes: 2,
//         },
//       ],
//     },
//     {
//       name: "State",
//       description:
//         "State in React refers to an object that represents the internal state of a component. It can be modified over time, typically in response to user interactions, network requests, or other asynchronous events. ",
//       codeSample:
//         "import React, { useState } from 'react';\n\nfunction Counter() {\n  const [count, setCount] = useState(0);\n\n  function increment() {\n    setCount(count + 1);\n  }\n\n  return (\n    <div>\n      <p>You clicked {count} times</p>\n      <button onClick={increment}>Click me</button>\n    </div>\n  );\n}",
//       videos: [
//         {
//           url: "https://www.youtube.com/watch?v=sBws8MSXN7A",
//           userId: mongoose.Types.ObjectId("615d7d0dc65338319e71a23f"),
//         },
//       ],
//       questions: [
//         {
//           question: "What is state in React?",
//           answers: [
//             {
//               answer:
//                 "State is an object that stores data that is used by a component. It can be changed over time, and when it is, the component will re-render to show the new data.",
//               userId: mongoose.Types.ObjectId("615d7d0dc65338319e71a23f"),
//             },
//           ],
//           userId: mongoose.Types.ObjectId("615d7d0dc65338319e71a23f"),
//           upvotes: 8,
//           downvotes: 1,
//         },
//         {
//           question: "What is the difference between props and state in React?",
//           answers: [
//             {
//               answer:
//                 "Props are used to pass data from a parent component to a child component, while state is used to store data that is used by a component itself.",
//               userId: mongoose.Types.ObjectId("615d7d0dc65338319e71a23f"),
//             },
//           ],
//           userId: mongoose.Types.ObjectId("615d7d0dc65338319e71a23f"),
//           upvotes: 6,
//           downvotes: 0,
//         },
//       ],
//     },
//     {
//       name: "useEffect Hook",
//       description:
//         "The useEffect hook in React is a built-in hook that allows you to perform side effects in functional components. Side effects may include updating the DOM, fetching data, and subscribing to external events. ",
//       codeSample:
//         "import React, { useState, useEffect } from 'react';\n\nfunction MyComponent(props) {\n  const [count, setCount] = useState(0);\n\n  useEffect(() => {\n    document.title = `You clicked ${count} times`;\n  });\n\n  return (\n    <div>\n      <p>You clicked {count} times</p>\n      <button onClick={() => setCount(count + 1)}>Click me</button>\n    </div>\n  );\n}",
//       videos: [
//         {
//           url: "https://www.youtube.com/watch?v=0gXH3zyF5ZA",
//           userId: mongoose.Types.ObjectId("615d7d0dc65338319e71a23f"),
//         },
//       ],
//       questions: [
//         {
//           question: "What is the useEffect hook in React?",
//           answers: [
//             {
//               answer:
//                 "The useEffect hook is a built-in React hook that allows you to perform side effects in functional components, such as fetching data or manipulating the DOM.",
//               userId: mongoose.Types.ObjectId("615d7d0dc65338319e71a23f"),
//             },
//           ],
//           userId: mongoose.Types.ObjectId("615d7d0dc65338319e71a23f"),
//           upvotes: 7,
//           downvotes: 1,
//         },
//       ],
//     },
//     {
//       name: "React Routing",
//       description:
//         "React Routing is a powerful tool for building Single Page Applications (SPAs) with React. With React Routing, you can easily define and manage different routes and their associated components, allowing you to create a more dynamic user experience. ",
//       codeSample:
//         "import React from 'react';\nimport { BrowserRouter, Route, Switch, Link } from 'react-router-dom';\n\nfunction App() {\n  return (\n    <BrowserRouter>\n      <nav>\n        <ul>\n          <li>\n            <Link to='/'>Home</Link>\n          </li>\n          <li>\n            <Link to='/about'>About</Link>\n          </li>\n          <li>\n            <Link to='/contact'>Contact</Link>\n          </li>\n        </ul>\n      </nav>\n      <Switch>\n        <Route exact path='/' component={Home} />\n        <Route path='/about' component={About} />\n        <Route path='/contact' component={Contact} />\n      </Switch>\n    </BrowserRouter>\n  );\n}\n\nfunction Home() {\n  return <h1>Home</h1>;\n}\n\nfunction About() {\n  return <h1>About</h1>;\n}\n\nfunction Contact() {\n  return <h1>Contact</h1>;\n};",
//       videos: [
//         {
//           url: "https://www.youtube.com/watch?v=Law7wfdg_ls",
//           userId: mongoose.Types.ObjectId("615d7d0dc65338319e71a23f"),
//         },
//       ],
//       questions: [
//         {
//           question: "What is React Router?",
//           answers: [
//             {
//               answer:
//                 "React Router is a popular library used for routing in React applications. It allows you to handle client-side routing and build single-page applications with multiple views.",
//               userId: mongoose.Types.ObjectId("615d7d0dc65338319e71a23f"),
//             },
//           ],
//           userId: mongoose.Types.ObjectId("615d7d0dc65338319e71a23f"),
//           upvotes: 4,
//           downvotes: 0,
//         },
//         {
//           question: "What are some of the components provided by React Router?",
//           answers: [
//             {
//               answer:
//                 "React Router provides several components, such as BrowserRouter, Route, Switch, and Link, that you can use to implement routing in your application.",
//               userId: mongoose.Types.ObjectId("615d7d0dc65338319e71a23f"),
//             },
//           ],
//           userId: mongoose.Types.ObjectId("615d7d0dc65338319e71a23f"),
//           upvotes: 3,
//           downvotes: 0,
//         },
//       ],
//     },
//     {
//       name: "useReducer Hook",
//       description:
//         "The useReducer hook in React is a powerful tool that allows you to manage state in functional components using a reducer function. Instead of using the useState hook, useReducer lets you define a more complex state object and dispatch actions to modify it.",
//       codeSample:
//         "import React, { useReducer } from 'react';\n\nconst initialState = { count: 0 };\n\nfunction reducer(state, action) {\n  switch (action.type) {\n    case 'increment':\n      return { count: state.count + 1 };\n    case 'decrement':\n      return { count: state.count - 1 };\n    default:\n      throw new Error();\n  }\n}\n\nfunction Counter() {\n  const [state, dispatch] = useReducer(reducer, initialState);\n\n  return (\n    <div>\n      <p>Count: {state.count}</p>\n      <button onClick={() => dispatch({ type: 'increment' })}>+</button>\n      <button onClick={() => dispatch({ type: 'decrement' })}>-</button>\n    </div>\n  );\n}",
//       videos: [
//         {
//           url: "https://www.youtube.com/watch?v=5J6fs_BlVC0",
//           userId: mongoose.Types.ObjectId("615d7d0dc65338319e71a23f"),
//         },
//       ],
//       questions: [
//         {
//           question: "What is the useReducer hook in React?",
//           answers: [
//             {
//               answer:
//                 "The useReducer hook is a built-in React hook that allows you to manage state using a reducer function, similar to how state is managed in Redux. It's useful for managing complex state that involves multiple sub-values or when the next state depends on the previous state.",
//               userId: mongoose.Types.ObjectId("615d7d0dc65338319e71a23f"),
//             },
//           ],
//           userId: mongoose.Types.ObjectId("615d7d0dc65338319e71a23f"),
//           upvotes: 8,
//           downvotes: 0,
//         },
//         {
//           question: "How does the useReducer hook work?",
//           answers: [
//             {
//               answer:
//                 "The useReducer hook takes a reducer function and an initial state as arguments, and returns an array with two elements: the current state and a dispatch function. The dispatch function is used to update the state, by calling the reducer function with the current state and an action object, which describes how the state should be updated.",
//               userId: mongoose.Types.ObjectId("615d7d0dc65338319e71a23f"),
//             },
//           ],
//           userId: mongoose.Types.ObjectId("615d7d0dc65338319e71a23f"),
//           upvotes: 6,
//           downvotes: 0,
//         },
//       ],
//     },
//     {
//       name: "useMemo Hook",
//       description:
//         "With useMemo, you can cache the result of a function call and only recompute it if one of its dependencies changes.",
//       codeSample:
//         "import React, { useMemo, useState } from 'react';\n\nfunction MyComponent(props) {\n  const [value1, setValue1] = useState(0);\n  const [value2, setValue2] = useState(0);\n\n  const expensiveValue = useMemo(() => {\n    console.log('Calculating expensiveValue...');\n    return value1 * 100;\n  }, [value1]);\n\n  return (\n    <div>\n      <p>Expensive value: {expensiveValue}</p>\n      <button onClick={() => setValue1(value1 + 1)}>Increment value1</button>\n      <button onClick={() => setValue2(value2 + 1)}>Increment value2</button>\n    </div>\n  );\n}",
//       videos: [
//         {
//           url: "https://www.youtube.com/watch?v=9KJxaFHotqI",
//           userId: mongoose.Types.ObjectId("615d7d0dc65338319e71a23f"),
//         },
//       ],
//       questions: [
//         {
//           question: "What is the useMemo hook in React?",
//           answers: [
//             {
//               answer:
//                 "The useMemo hook is a built-in React hook that allows you to memoize a value so that it is only re-computed when one of its dependencies has changed. It's useful for optimizing expensive computations or for preventing unnecessary re-renders.",
//               userId: mongoose.Types.ObjectId("615d7d0dc65338319e71a23f"),
//             },
//           ],
//           userId: mongoose.Types.ObjectId("615d7d0dc65338319e71a23f"),
//           upvotes: 5,
//           downvotes: 0,
//         },
//         {
//           question: "How does the useMemo hook work?",
//           answers: [
//             {
//               answer:
//                 "The useMemo hook takes a function and an array of dependencies as arguments, and returns the memoized value of the function. The function is only re-computed when one of its dependencies has changed, otherwise the cached value is returned. This can help to optimize expensive computations or prevent unnecessary re-renders.",
//               userId: mongoose.Types.ObjectId("615d7d0dc65338319e71a23f"),
//             },
//           ],
//           userId: mongoose.Types.ObjectId("615d7d0dc65338319e71a23f"),
//           upvotes: 4,
//           downvotes: 0,
//         },
//       ],
//     },
//     {
//       name: "Lazy Loading",
//       description:
//         "Learn how to use lazy loading in React to optimize performance by loading components only when needed.",
//       codeSample:
//         "import React, { lazy, Suspense } from 'react';\n\nconst MyComponent = lazy(() => import('./MyComponent'));\n\nfunction App() {\n  return (\n    <div>\n      <Suspense fallback={<div>Loading...</div>}>\n        <MyComponent />\n      </Suspense>\n    </div>\n  );\n}",
//       videos: [
//         {
//           url: "https://www.youtube.com/watch?v=O6P86uwfdR0",
//           userId: mongoose.Types.ObjectId("615d7d0dc65338319e71a23f"),
//         },
//       ],
//       questions: [
//         {
//           question: "What is lazy loading in React?",
//           answers: [
//             {
//               answer:
//                 "Lazy loading is a technique used to improve the performance of a React application by loading components only when needed, instead of loading everything up front.",
//               userId: mongoose.Types.ObjectId("615d7d0dc65338319e71a23f"),
//             },
//           ],
//           userId: mongoose.Types.ObjectId("615d7d0dc65338319e71a23f"),
//           upvotes: 6,
//           downvotes: 0,
//         },
//         {
//           question: "How do you implement lazy loading in React?",
//           answers: [
//             {
//               answer:
//                 "You can use the lazy() function in React to create a component that is loaded lazily, and then wrap it with the Suspense component to provide a fallback while the component is being loaded.",
//               userId: mongoose.Types.ObjectId("615d7d0dc65338319e71a23f"),
//             },
//           ],
//           userId: mongoose.Types.ObjectId("615d7d0dc65338319e71a23f"),
//           upvotes: 8,
//           downvotes: 0,
//         },
//       ],
//     },
//     {
//       name: "Redux",
//       description:
//         "Learn how to use Redux in React to manage the state of your application.",
//       codeSample:
//         "import { createStore } from 'redux';\n\nconst initialState = {\n  count: 0\n};\n\nfunction reducer(state = initialState, action) {\n  switch (action.type) {\n    case 'INCREMENT':\n      return {\n        count: state.count + 1\n      };\n    case 'DECREMENT':\n      return {\n        count: state.count - 1\n      };\n    default:\n      return state;\n  }\n}\n\nconst store = createStore(reducer);\n\nstore.subscribe(() => console.log(store.getState()));\n\nstore.dispatch({ type: 'INCREMENT' });\nstore.dispatch({ type: 'INCREMENT' });\nstore.dispatch({ type: 'DECREMENT' });",
//       videos: [
//         {
//           url: "https://www.youtube.com/watch?v=93p3LxR9xfM",
//           userId: mongoose.Types.ObjectId("615d7d0dc65338319e71a23f"),
//         },
//       ],
//       questions: [
//         {
//           question: "What is Redux?",
//           answers: [
//             {
//               answer:
//                 "Redux is a predictable state container for JavaScript apps, that helps you manage the state of your application in a predictable way.",
//               userId: mongoose.Types.ObjectId("615d7d0dc65338319e71a23f"),
//             },
//           ],
//           userId: mongoose.Types.ObjectId("615d7d0dc65338319e71a23f"),
//           upvotes: 8,
//           downvotes: 0,
//         },
//         {
//           question: "What are the core concepts of Redux?",
//           answers: [
//             {
//               answer:
//                 "The core concepts of Redux are actions, reducers, and the store. Actions are payloads of information that send data from your application to your store. Reducers specify how the application's state changes in response to actions, and the store is the object that brings them together.",
//               userId: mongoose.Types.ObjectId("615d7d0dc65338319e71a23f"),
//             },
//           ],
//           userId: mongoose.Types.ObjectId("615d7d0dc65338319e71a23f"),
//           upvotes: 10,
//           downvotes: 0,
//         },
//       ],
//     },
//     {
//       name: "Context API",
//       description:
//         "Learn how to use Context API in React to share data between components without passing props through every level of the component tree.",
//       codeSample:
//         "import React, { createContext, useState } from 'react';\nimport ChildComponent from './ChildComponent';\n\nexport const MyContext = createContext();\n\nfunction ParentComponent() {\n  const [name, setName] = useState('John');\n\n  return (\n    <MyContext.Provider value={{ name, setName }}>\n      <ChildComponent />\n    </MyContext.Provider>\n  );\n}\n\nexport default ParentComponent;\n",
//       videos: [
//         {
//           url: "https://www.youtube.com/watch?v=lhMKvyLRWo0",
//           userId: mongoose.Types.ObjectId("615d7d0dc65338319e71a23f"),
//         },
//       ],
//       questions: [
//         {
//           question: "What is Context API?",
//           answers: [
//             {
//               answer:
//                 "Context API is a feature in React that allows you to share data between components without passing props through every level of the component tree.",
//               userId: mongoose.Types.ObjectId("615d7d0dc65338319e71a23f"),
//             },
//           ],
//           userId: mongoose.Types.ObjectId("615d7d0dc65338319e71a23f"),
//           upvotes: 6,
//           downvotes: 0,
//         },
//         {
//           question: "When should you use Context API?",
//           answers: [
//             {
//               answer:
//                 "You should use Context API when you have data that needs to be accessed by many components at different levels of your component tree.",
//               userId: mongoose.Types.ObjectId("615d7d0dc65338319e71a23f"),
//             },
//           ],
//           userId: mongoose.Types.ObjectId("615d7d0dc65338319e71a23f"),
//           upvotes: 7,
//           downvotes: 0,
//         },
//       ],
//     },
//   ],
// });
// newTechnology.save().then((data) => {
//   console.log("save successfull");
// });

// const newTechnology = new Technology({
//   name: "Angular",
//   subtopics: [
//     {
//       name: "Angular Components",
//       description:
//         "Components are the building blocks of Angular applications, encapsulating data, behavior, and presentation. They are reusable and can communicate with other components through inputs and outputs.",
//       codeSample:
//         "import { Component, Input, Output, EventEmitter } from '@angular/core';\n\n@Component({\n  selector: 'my-component',\n  template: `<div>\n    <h1>{{title}}</h1>\n    <p>{{description}}</p>\n    <button (click)='incrementCounter()'>Click me</button>\n  </div>`\n})\nexport class MyComponent {\n  @Input() title: string;\n  @Input() description: string;\n  @Output() counterChanged = new EventEmitter<number>();\n  counter = 0;\n\n  incrementCounter() {\n    this.counter++;\n    this.counterChanged.emit(this.counter);\n  }\n}",
//       videos: [
//         {
//           url: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
//           userId: mongoose.Types.ObjectId("64463307ff6e7f2060c3a6cb"),
//         },
//       ],
//       questions: [
//         {
//           question:
//             "What is the difference between @Input and @Output in Angular Components?",
//           answers: [
//             {
//               answer:
//                 "@Input and @Output are decorators in Angular that allow components to communicate with their parent components. @Input is used to pass data from the parent component to the child component, while @Output is used to emit events from the child component to the parent component.",
//               userId: mongoose.Types.ObjectId("64463307ff6e7f2060c3a6cb"),
//               upvotes: 0,
//               downvotes: 0,
//               upvoters: [],
//               downvoters: [],
//             },
//           ],
//           userId: mongoose.Types.ObjectId("64463307ff6e7f2060c3a6cb"),
//           upvotes: 0,
//           downvotes: 0,
//         },
//         {
//           question: "What is the lifecycle of an Angular Component?",
//           answers: [
//             {
//               answer:
//                 "The lifecycle of an Angular Component starts with the creation of the component, followed by initialization, rendering, and destruction. During each phase, various hooks and methods can be used to perform actions or respond to changes.",
//               userId: mongoose.Types.ObjectId("64463307ff6e7f2060c3a6cb"),
//               upvotes: 0,
//               downvotes: 0,
//               upvoters: [],
//               downvoters: [],
//             },
//           ],
//           userId: mongoose.Types.ObjectId("64463307ff6e7f2060c3a6cb"),
//           upvotes: 0,
//           downvotes: 0,
//         },
//       ],
//     },
//     {
//       name: "Angular Templates",
//       description:
//         "Templates in Angular are used to define the structure and layout of a component. They use a combination of HTML and Angular syntax, and can be used to display data, respond to user input, and apply styles to a component.",
//       codeSample:
//         "import { Component } from '@angular/core';\n\n@Component({\n  selector: 'my-component',\n  template: `\n    <div>\n      <h1>{{title}}</h1>\n      <p>{{description}}</p>\n      <button (click)='incrementCounter()'>Click me</button>\n    </div>\n  `,\n  styles: [`\n    h1 {\n      color: blue;\n    }\n  `]\n})\nexport class MyComponent {\n  title = 'My Component';\n  description = 'This is a sample component';\n  counter = 0;\n\n  incrementCounter() {\n    this.counter++;\n  }\n}",
//       videos: [
//         {
//           url: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
//           userId: mongoose.Types.ObjectId("64463307ff6e7f2060c3a6cb"),
//         },
//       ],
//       questions: [
//         {
//           question: "What is an Angular template?",
//           answers: [
//             {
//               answer:
//                 "An Angular template is a combination of HTML and Angular syntax used to define the structure and layout of a component.",
//               userId: mongoose.Types.ObjectId("64463307ff6e7f2060c3a6cb"),
//               upvotes: 0,
//               downvotes: 0,
//               upvoters: [],
//               downvoters: [],
//             },
//           ],
//           userId: mongoose.Types.ObjectId("64463307ff6e7f2060c3a6cb"),
//           upvotes: 0,
//           downvotes: 0,
//         },
//         {
//           question:
//             "What is the difference between inline and external templates in Angular?",
//           answers: [
//             {
//               answer:
//                 "Inline templates are defined within the component metadata using the template property, while external templates are defined in a separate HTML file and loaded using the templateUrl property.",
//               userId: mongoose.Types.ObjectId("64463307ff6e7f2060c3a6cb"),
//               upvotes: 0,
//               downvotes: 0,
//               upvoters: [],
//               downvoters: [],
//             },
//           ],
//           userId: mongoose.Types.ObjectId("64463307ff6e7f2060c3a6cb"),
//           upvotes: 0,
//           downvotes: 0,
//         },
//       ],
//     },
//     {
//       name: "Angular Directives",
//       description:
//         "Directives are powerful tools in Angular that allow you to attach custom behavior to elements in the DOM. They can be used to add, remove, or modify elements, attributes, or classes in the DOM based on application logic or user interaction.",
//       codeSample:
//         "import { Directive, ElementRef, HostListener, Input } from '@angular/core';\n\n@Directive({\n  selector: '[myHighlight]'\n})\nexport class HighlightDirective {\n  @Input('myHighlight') highlightColor: string;\n\n  constructor(private el: ElementRef) { }\n\n  @HostListener('mouseenter') onMouseEnter() {\n    this.highlight(this.highlightColor || 'yellow');\n  }\n\n  @HostListener('mouseleave') onMouseLeave() {\n    this.highlight(null);\n  }\n\n  private highlight(color: string) {\n    this.el.nativeElement.style.backgroundColor = color;\n  }\n}",
//       videos: [
//         {
//           url: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
//           userId: mongoose.Types.ObjectId("615d7d0dc65338319e71a23f"),
//         },
//       ],
//       questions: [
//         {
//           question:
//             "What is the difference between structural and attribute directives in Angular?",
//           answers: [
//             {
//               answer:
//                 "Structural directives are responsible for altering the structure of the DOM, while attribute directives modify the appearance or behavior of an element by manipulating its attributes or adding new ones. Structural directives are used to add or remove elements from the DOM, while attribute directives can be used to change the color, size, or behavior of an existing element.",
//               userId: mongoose.Types.ObjectId("615d7d0dc65338319e71a23f"),
//               upvotes: 0,
//               downvotes: 0,
//               upvoters: [],
//               downvoters: [],
//             },
//           ],
//           userId: mongoose.Types.ObjectId("615d7d0dc65338319e71a23f"),
//           upvotes: 0,
//           downvotes: 0,
//         },
//         {
//           question: "What is a custom directive in Angular?",
//           answers: [
//             {
//               answer:
//                 "A custom directive is a directive created by the developer that can be used to add custom behavior to an element in the DOM. Custom directives can be used to create reusable components, extend the functionality of existing components, or create new behaviors based on application-specific requirements.",
//               userId: mongoose.Types.ObjectId("615d7d0dc65338319e71a23f"),
//               upvotes: 0,
//               downvotes: 0,
//               upvoters: [],
//               downvoters: [],
//             },
//           ],
//           userId: mongoose.Types.ObjectId("615d7d0dc65338319e71a23f"),
//           upvotes: 0,
//           downvotes: 0,
//         },
//       ],
//     },
//     {
//       name: "Angular Pipes",
//       description:
//         "Pipes are a way to transform data in Angular templates. They can be used to format data, filter data, and much more.",
//       codeSample:
//         "import { Pipe, PipeTransform } from '@angular/core';\n\n@Pipe({\n  name: 'reverse'\n})\nexport class ReversePipe implements PipeTransform {\n  transform(value: string): string {\n    return value.split('').reverse().join('');\n  }\n}",
//       videos: [
//         {
//           url: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
//           userId: mongoose.Types.ObjectId("64463307ff6e7f2060c3a6cb"),
//         },
//       ],
//       questions: [
//         {
//           question: "What are some common use cases for pipes in Angular?",
//           answers: [
//             {
//               answer:
//                 "Pipes can be used to format data (e.g. currency, date, uppercase), filter data (e.g. search), and transform data (e.g. sort). They are especially useful when working with data in Angular templates.",
//               userId: mongoose.Types.ObjectId("64463307ff6e7f2060c3a6cb"),
//               upvotes: 0,
//               downvotes: 0,
//               upvoters: [],
//               downvoters: [],
//             },
//           ],
//           userId: mongoose.Types.ObjectId("64463307ff6e7f2060c3a6cb"),
//           upvotes: 0,
//           downvotes: 0,
//         },
//         {
//           question:
//             "What is the difference between a pure and impure pipe in Angular?",
//           answers: [
//             {
//               answer:
//                 "A pure pipe is called only when Angular detects a change in the value or parameters passed to it. An impure pipe is called for every change detection cycle, even if the value or parameters have not changed. Pure pipes are generally preferred because they are more performant.",
//               userId: mongoose.Types.ObjectId("64463307ff6e7f2060c3a6cb"),
//               upvotes: 0,
//               downvotes: 0,
//               upvoters: [],
//               downvoters: [],
//             },
//           ],
//           userId: mongoose.Types.ObjectId("64463307ff6e7f2060c3a6cb"),
//           upvotes: 0,
//           downvotes: 0,
//         },
//       ],
//     },
//     {
//       name: "Angular Services",
//       description:
//         "Angular Services are a way to share code across components and to keep components lean and focused on their specific tasks. They can provide data, business logic, and other functionality to your application.",
//       codeSample:
//         "import { Injectable } from '@angular/core';\n\n@Injectable({\n  providedIn: 'root'\n})\nexport class MyService {\n  constructor() { }\n\n  getData(): any {\n    return [{ name: 'John', age: 30 }, { name: 'Jane', age: 25 }];\n  }\n}",
//       videos: [
//         {
//           url: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
//           userId: mongoose.Types.ObjectId("64463307ff6e7f2060c3a6cb"),
//         },
//       ],
//       questions: [
//         {
//           question: "What are some common use cases for Angular Services?",
//           answers: [
//             {
//               answer:
//                 "Services can be used to provide data from APIs or other sources, to manage user authentication, to provide business logic, and to share functionality across components.",
//               userId: mongoose.Types.ObjectId("64463307ff6e7f2060c3a6cb"),
//               upvotes: 0,
//               downvotes: 0,
//               upvoters: [],
//               downvoters: [],
//             },
//           ],
//           userId: mongoose.Types.ObjectId("64463307ff6e7f2060c3a6cb"),
//           upvotes: 0,
//           downvotes: 0,
//         },
//         {
//           question: "What is Dependency Injection in Angular Services?",
//           answers: [
//             {
//               answer:
//                 "Dependency Injection is a design pattern used in Angular Services that involves injecting dependencies (such as other services or objects) into a component or service rather than creating them within the component or service. This allows for more modular and testable code.",
//               userId: mongoose.Types.ObjectId("64463307ff6e7f2060c3a6cb"),
//               upvotes: 0,
//               downvotes: 0,
//               upvoters: [],
//               downvoters: [],
//             },
//           ],
//           userId: mongoose.Types.ObjectId("64463307ff6e7f2060c3a6cb"),
//           upvotes: 0,
//           downvotes: 0,
//         },
//       ],
//     },
//     {
//       name: "Dependency Injection in Angular",
//       description:
//         "Dependency Injection (DI) is a core feature of Angular that allows for efficient and modular development. It allows developers to declare their dependencies in a way that makes it easy to manage, reuse, and test code. Angular's DI system is based on the concept of providers, which are used to create and manage instances of dependencies.",
//       codeSample:
//         "import { Component, Injectable } from '@angular/core';\n\n@Injectable()\nexport class UserService {\n  getUsers() {\n    return ['Alice', 'Bob', 'Charlie'];\n  }\n}\n\n@Component({\n  selector: 'app-users',\n  template: '<ul><li *ngFor=\"let user of users\">{{ user }}</li></ul>',\n})\nexport class UsersComponent {\n  users: string[];\n\n  constructor(private userService: UserService) {\n    this.users = this.userService.getUsers();\n  }\n}",
//       videos: [
//         {
//           url: "https://www.youtube.com/watch?v=3LDJOfgY8sE",
//           userId: mongoose.Types.ObjectId("64463307ff6e7f2060c3a6cb"),
//         },
//       ],
//       questions: [
//         {
//           question: "What is Dependency Injection?",
//           answers: [
//             {
//               answer:
//                 "Dependency Injection is a design pattern used in software engineering that allows for the creation of loosely coupled code by decoupling the usage of an object from its creation.",
//               userId: mongoose.Types.ObjectId("64463307ff6e7f2060c3a6cb"),
//               upvotes: 0,
//               downvotes: 0,
//               upvoters: [],
//               downvoters: [],
//             },
//             {
//               answer:
//                 "Dependency Injection is a mechanism to make objects more loosely coupled by passing dependencies into the constructor of an object rather than having the object create them itself.",
//               userId: mongoose.Types.ObjectId("64563307ff6e7f2060c3a6cb"),
//               upvotes: 0,
//               downvotes: 0,
//               upvoters: [],
//               downvoters: [],
//             },
//           ],
//           userId: mongoose.Types.ObjectId("64463307ff6e7f2060c3a6cb"),
//           upvotes: 0,
//           downvotes: 0,
//         },
//         {
//           question: "What is a provider in Angular?",
//           answers: [
//             {
//               answer:
//                 "In Angular, a provider is a recipe for creating an instance of a dependency. Providers can be declared at the component level or at the module level, and can be used to provide different instances of the same dependency depending on the context.",
//               userId: mongoose.Types.ObjectId("64563307ff6e7f2060c3a6cb"),
//               upvotes: 0,
//               downvotes: 0,
//               upvoters: [],
//               downvoters: [],
//             },
//           ],
//           userId: mongoose.Types.ObjectId("64563307ff6e7f2060c3a6cb"),
//           upvotes: 0,
//           downvotes: 0,
//         },
//       ],
//     },
//     {
//       name: "Angular Routing",
//       description:
//         "Routing is a feature in Angular that allows you to define navigation paths and route URLs to different components in your application. With routing, you can create a single-page application that dynamically updates as the user navigates through the different routes.",
//       codeSample:
//         "import { NgModule } from '@angular/core';\nimport { Routes, RouterModule } from '@angular/router';\nimport { HomeComponent } from './home/home.component';\nimport { AboutComponent } from './about/about.component';\n\nconst routes: Routes = [\n  { path: '', component: HomeComponent },\n  { path: 'about', component: AboutComponent }\n];\n\n@NgModule({\n  imports: [RouterModule.forRoot(routes)],\n  exports: [RouterModule]\n})\nexport class AppRoutingModule { }",
//       videos: [
//         {
//           url: "https://www.youtube.com/watch?v=vyiyJCL-_DU",
//           userId: mongoose.Types.ObjectId("64463307ff6e7f2060c3a6cb"),
//         },
//       ],
//       questions: [
//         {
//           question: "What is the purpose of routing in Angular?",
//           answers: [
//             {
//               answer:
//                 "Routing allows you to navigate between different components in your application based on the current URL. It also enables you to create single-page applications that dynamically update as the user navigates through the different routes.",
//               userId: mongoose.Types.ObjectId("64463307ff6e7f2060c3a6cb"),
//               upvotes: 0,
//               downvotes: 0,
//               upvoters: [],
//               downvoters: [],
//             },
//           ],
//           userId: mongoose.Types.ObjectId("64463307ff6e7f2060c3a6cb"),
//           upvotes: 0,
//           downvotes: 0,
//         },
//         {
//           question: "How do you define routes in Angular?",
//           answers: [
//             {
//               answer:
//                 "You define routes in Angular by creating an array of Route objects in your app's routing module. Each Route object maps a URL path to a component that will be displayed when the URL is navigated to.",
//               userId: mongoose.Types.ObjectId("64463307ff6e7f2060c3a6cb"),
//               upvotes: 0,
//               downvotes: 0,
//               upvoters: [],
//               downvoters: [],
//             },
//           ],
//           userId: mongoose.Types.ObjectId("64463307ff6e7f2060c3a6cb"),
//           upvotes: 0,
//           downvotes: 0,
//         },
//       ],
//     },
//     {
//       name: "Observables in Angular",
//       description:
//         "Observables are a powerful feature of Angular that allow you to easily work with asynchronous data streams. They can be used for things like handling user events, making HTTP requests, and more.",
//       codeSample:
//         "import { Observable } from 'rxjs';\n\nconst myObservable = new Observable(observer => {\n  observer.next(1);\n  observer.next(2);\n  observer.next(3);\n  observer.complete();\n});\n\nmyObservable.subscribe(value => console.log(value));",
//       videos: [
//         {
//           url: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
//           userId: mongoose.Types.ObjectId("64463307ff6e7f2060c3a6cb"),
//         },
//       ],
//       questions: [
//         {
//           question: "What are some advantages of using observables in Angular?",
//           answers: [
//             {
//               answer:
//                 "Observables allow you to work with asynchronous data streams in a consistent and easy-to-use way. They can simplify code that deals with complex data flows, make it easier to handle errors and cancellations, and can be combined and transformed in a variety of ways.",
//               userId: mongoose.Types.ObjectId("64463307ff6e7f2060c3a6cb"),
//               upvotes: 0,
//               downvotes: 0,
//               upvoters: [],
//               downvoters: [],
//             },
//           ],
//           userId: mongoose.Types.ObjectId("64463307ff6e7f2060c3a6cb"),
//           upvotes: 0,
//           downvotes: 0,
//         },
//         {
//           question: "How do you handle errors with observables in Angular?",
//           answers: [
//             {
//               answer:
//                 "You can handle errors in an observable stream using the catchError operator. This allows you to gracefully handle errors and potentially recover from them, rather than crashing the application or leaving the user with a broken experience.",
//               userId: mongoose.Types.ObjectId("64463307ff6e7f2060c3a6cb"),
//               upvotes: 0,
//               downvotes: 0,
//               upvoters: [],
//               downvoters: [],
//             },
//           ],
//           userId: mongoose.Types.ObjectId("64463307ff6e7f2060c3a6cb"),
//           upvotes: 0,
//           downvotes: 0,
//         },
//       ],
//     },
//     {
//       name: "Angular Forms",
//       description:
//         "Angular Forms is a powerful module that provides an easy way to build and manage forms in Angular applications. It provides robust form validation, two-way data binding, and many other features that make it easy to build complex forms.",
//       codeSample:
//         "import { Component } from '@angular/core';\nimport { FormBuilder, FormGroup, Validators } from '@angular/forms';\n\n@Component({\n  selector: 'app-my-form',\n  templateUrl: './my-form.component.html',\n  styleUrls: ['./my-form.component.css']\n})\nexport class MyFormComponent {\n  myForm: FormGroup;\n\n  constructor(private fb: FormBuilder) {\n    this.createForm();\n  }\n\n  createForm() {\n    this.myForm = this.fb.group({\n      name: ['', Validators.required ],\n      email: ['', [Validators.required, Validators.email] ],\n      password: ['', [Validators.required, Validators.minLength(6)] ]\n    });\n  }\n\n  onSubmit() {\n    console.log(this.myForm.value);\n  }\n}",
//       videos: [
//         {
//           url: "https://www.youtube.com/watch?v=UxGR7tHu5dM",
//           userId: mongoose.Types.ObjectId("64463307ff6e7f2060c3a6cb"),
//         },
//       ],
//       questions: [
//         {
//           question: "What are some benefits of using Angular Forms?",
//           answers: [
//             {
//               answer:
//                 "Angular Forms provides powerful form validation, two-way data binding, and makes it easy to build complex forms. It also provides a consistent way to manage form state across your application.",
//               userId: mongoose.Types.ObjectId("64463307ff6e7f2060c3a6cb"),
//               upvotes: 0,
//               downvotes: 0,
//               upvoters: [],
//               downvoters: [],
//             },
//           ],
//           userId: mongoose.Types.ObjectId("64463307ff6e7f2060c3a6cb"),
//           upvotes: 0,
//           downvotes: 0,
//         },
//         {
//           question: "What is a FormGroup in Angular Forms?",
//           answers: [
//             {
//               answer:
//                 "A FormGroup is a way to group together multiple FormControls into a single form. It can be used to manage the state of a form as a whole.",
//               userId: mongoose.Types.ObjectId("64463307ff6e7f2060c3a6cb"),
//               upvotes: 0,
//               downvotes: 0,
//               upvoters: [],
//               downvoters: [],
//             },
//           ],
//           userId: mongoose.Types.ObjectId("64463307ff6e7f2060c3a6cb"),
//           upvotes: 0,
//           downvotes: 0,
//         },
//       ],
//     },
//     {
//       name: "NgModule",
//       description:
//         "NgModule is a core building block in Angular that is used to define a cohesive block of code dedicated to a specific feature or functionality in an application. It is used to organize code into reusable and testable units, and allows for easier management of dependencies between different parts of the application.",
//       codeSample:
//         "import { NgModule } from '@angular/core';\nimport { BrowserModule } from '@angular/platform-browser';\nimport { AppComponent } from './app.component';\n\n@NgModule({\n  declarations: [\n    AppComponent\n  ],\n  imports: [\n    BrowserModule\n  ],\n  providers: [],\n  bootstrap: [AppComponent]\n})\nexport class AppModule { }",
//       videos: [
//         {
//           url: "https://www.youtube.com/watch?v=XU_uLZhAJ3Q",
//           userId: mongoose.Types.ObjectId("64463307ff6e7f2060c3a6cb"),
//         },
//       ],
//       questions: [
//         {
//           question: "What is the purpose of NgModule in Angular?",
//           answers: [
//             {
//               answer:
//                 "NgModule is used to organize code into reusable and testable units, and to define a cohesive block of code dedicated to a specific feature or functionality in an application. It allows for easier management of dependencies between different parts of the application.",
//               userId: mongoose.Types.ObjectId("64463307ff6e7f2060c3a6cb"),
//               upvotes: 0,
//               downvotes: 0,
//               upvoters: [],
//               downvoters: [],
//             },
//           ],
//           userId: mongoose.Types.ObjectId("64463307ff6e7f2060c3a6cb"),
//           upvotes: 0,
//           downvotes: 0,
//         },
//         {
//           question: "What are some common features of an NgModule?",
//           answers: [
//             {
//               answer:
//                 "Common features of an NgModule include declarations (components, directives, pipes), imports (other modules used by the module), providers (services, values, factories), and exports (what is available to other modules).",
//               userId: mongoose.Types.ObjectId("64463307ff6e7f2060c3a6cb"),
//               upvotes: 0,
//               downvotes: 0,
//               upvoters: [],
//               downvoters: [],
//             },
//           ],
//           userId: mongoose.Types.ObjectId("64463307ff6e7f2060c3a6cb"),
//           upvotes: 0,
//           downvotes: 0,
//         },
//       ],
//     },
//     {
//       name: "Lifecycle Hooks",
//       description:
//         "Angular provides several lifecycle hooks that allow you to tap into the lifecycle of a component or directive and perform actions at specific points. This gives you fine-grained control over how your components behave, and allows you to integrate with other libraries and frameworks.",
//       codeSample:
//         "import { Component, OnInit, OnDestroy } from '@angular/core';\n\n@Component({\n  selector: 'app-my-component',\n  templateUrl: './my-component.component.html',\n  styleUrls: ['./my-component.component.css']\n})\nexport class MyComponentComponent implements OnInit, OnDestroy {\n\n  constructor() {\n    console.log('constructor called');\n  }\n\n  ngOnInit() {\n    console.log('ngOnInit called');\n  }\n\n  ngOnDestroy() {\n    console.log('ngOnDestroy called');\n  }\n\n}",
//       videos: [
//         {
//           url: "https://www.youtube.com/watch?v=uaGz92JSLWM",
//           userId: mongoose.Types.ObjectId("64463307ff6e7f2060c3a6cb"),
//         },
//       ],
//       questions: [
//         {
//           question: "What is the OnInit interface?",
//           answers: [
//             {
//               answer:
//                 "The OnInit interface is an Angular lifecycle hook that is called after a component or directive has been initialized, and its inputs have been bound for the first time. It is commonly used to perform any initialization logic that needs to happen before the component is fully functional.",
//               userId: mongoose.Types.ObjectId("64463307ff6e7f2060c3a6cb"),
//               upvotes: 0,
//               downvotes: 0,
//               upvoters: [],
//               downvoters: [],
//             },
//           ],
//           userId: mongoose.Types.ObjectId("64463307ff6e7f2060c3a6cb"),
//           upvotes: 0,
//           downvotes: 0,
//         },
//         {
//           question: "What is the OnDestroy interface?",
//           answers: [
//             {
//               answer:
//                 "The OnDestroy interface is an Angular lifecycle hook that is called just before a component or directive is destroyed and removed from the DOM. It is commonly used to perform any cleanup logic that needs to happen, such as unsubscribing from observables or removing event listeners.",
//               userId: mongoose.Types.ObjectId("64463307ff6e7f2060c3a6cb"),
//               upvotes: 0,
//               downvotes: 0,
//               upvoters: [],
//               downvoters: [],
//             },
//           ],
//           userId: mongoose.Types.ObjectId("64463307ff6e7f2060c3a6cb"),
//           upvotes: 0,
//           downvotes: 0,
//         },
//       ],
//     },
//     {
//       name: "Angular Testing",
//       description:
//         "Angular Testing is an essential part of building reliable, high-quality Angular applications. It enables you to write tests for your components, services, and directives, ensuring that your code behaves as expected and that changes don't introduce regressions.",
//       codeSample:
//         "describe('MyComponent', () => {\n  let component: MyComponent;\n  let fixture: ComponentFixture<MyComponent>;\n\n  beforeEach(async(() => {\n    TestBed.configureTestingModule({\n      declarations: [ MyComponent ]\n    })\n    .compileComponents();\n  }));\n\n  beforeEach(() => {\n    fixture = TestBed.createComponent(MyComponent);\n    component = fixture.componentInstance;\n    fixture.detectChanges();\n  });\n\n  it('should create', () => {\n    expect(component).toBeTruthy();\n  });\n});",
//       videos: [
//         {
//           url: "https://www.youtube.com/watch?v=0VwlKVxhBm0",
//           userId: mongoose.Types.ObjectId("64463307ff6e7f2060c3a6cb"),
//         },
//       ],
//       questions: [
//         {
//           question: "What are some benefits of Angular testing?",
//           answers: [
//             {
//               answer:
//                 "Angular testing helps ensure that your application works as expected, even as you make changes to the code. It also helps you catch regressions and bugs early, before they make it into production.",
//               userId: mongoose.Types.ObjectId("64463307ff6e7f2060c3a6cb"),
//               upvotes: 0,
//               downvotes: 0,
//               upvoters: [],
//               downvoters: [],
//             },
//           ],
//           userId: mongoose.Types.ObjectId("64463307ff6e7f2060c3a6cb"),
//           upvotes: 0,
//           downvotes: 0,
//         },
//         {
//           question: "What is TestBed?",
//           answers: [
//             {
//               answer:
//                 "TestBed is an Angular testing utility that creates an Angular testing module in which you can configure dependencies and create instances of your components and services.",
//               userId: mongoose.Types.ObjectId("64463307ff6e7f2060c3a6cb"),
//               upvotes: 0,
//               downvotes: 0,
//               upvoters: [],
//               downvoters: [],
//             },
//           ],
//           userId: mongoose.Types.ObjectId("64463307ff6e7f2060c3a6cb"),
//           upvotes: 0,
//           downvotes: 0,
//         },
//       ],
//     },
//     {
//       name: "Lazy Loading",
//       description:
//         "Lazy loading is a technique used in Angular to load components and modules on demand, instead of loading everything up-front. This can greatly improve the performance of your application, especially for larger applications with many modules and components.",
//       codeSample:
//         "const routes: Routes = [\n  { path: 'home', component: HomeComponent },\n  { path: 'lazy', loadChildren: () => import('./lazy/lazy.module').then(m => m.LazyModule) }\n];",
//       videos: [
//         {
//           url: "https://www.youtube.com/watch?v=5Y5ZmLokbKc",
//           userId: mongoose.Types.ObjectId("64463307ff6e7f2060c3a6cb"),
//         },
//       ],
//       questions: [
//         {
//           question: "What is lazy loading in Angular?",
//           answers: [
//             {
//               answer:
//                 "Lazy loading is a technique used in Angular to load components and modules on demand, instead of loading everything up-front. This can greatly improve the performance of your application, especially for larger applications with many modules and components.",
//               userId: mongoose.Types.ObjectId("64463307ff6e7f2060c3a6cb"),
//               upvotes: 0,
//               downvotes: 0,
//               upvoters: [],
//               downvoters: [],
//             },
//           ],
//           userId: mongoose.Types.ObjectId("64463307ff6e7f2060c3a6cb"),
//           upvotes: 0,
//           downvotes: 0,
//         },
//         {
//           question: "How do you implement lazy loading in Angular?",
//           answers: [
//             {
//               answer:
//                 "You can implement lazy loading in Angular by using the loadChildren method in your routing configuration, and specifying the path to the module that should be loaded lazily. The module should have its own routing configuration that specifies the components that should be loaded lazily.",
//               userId: mongoose.Types.ObjectId("64463307ff6e7f2060c3a6cb"),
//               upvotes: 0,
//               downvotes: 0,
//               upvoters: [],
//               downvoters: [],
//             },
//           ],
//           userId: mongoose.Types.ObjectId("64463307ff6e7f2060c3a6cb"),
//           upvotes: 0,
//           downvotes: 0,
//         },
//       ],
//     },
//   ],
// });

//Observables
// Forms
// NgModules
// Lifecycle hooks
// Change Detection
// HttpClient
// Interceptors
// Guards
// Lazy loading
// Animations
// Testing
// Internationalization (i18n)
// Server-side rendering (SSR)

// Introduction to Node.js: What is Node.js, and why is it popular for building web applications?

// Node.js and JavaScript: What are the differences between Node.js and client-side JavaScript, and how can they work together?

// Asynchronous programming with Node.js: How does Node.js handle asynchronous tasks, and what are some best practices for writing asynchronous code?

// Node.js modules: What are modules in Node.js, and how can you create and use them in your applications?

// Node.js frameworks: What are some popular Node.js frameworks, such as Express.js and Koa.js, and how do they simplify web application development?

// Node.js and databases: How can Node.js be used to interact with databases, such as MongoDB or MySQL?

// Node.js and real-time applications: How can Node.js be used to build real-time applications, such as chat applications or multiplayer games?

// Testing Node.js applications: What are some strategies for testing Node.js applications, and what testing frameworks are available?

// Node.js security: What are some common security risks with Node.js applications, and how can you secure your applications against these risks?

// Node.js deployment: What are some options for deploying Node.js applications, such as using a cloud platform like AWS or Heroku?

// Node.js and microservices: How can Node.js be used to build and deploy microservices, and what are the benefits of this approach?

// Node.js and machine learning: How can Node.js be used in machine learning applications, such as building predictive models or natural language processing systems?
// const newTechnology2 = new Technology({
//   name: "Angular",
//   subtopics: [
//     {
//       name: "Introduction to Node.js",
//       description:
//         "Node.js is a JavaScript runtime built on the V8 JavaScript engine that allows developers to run JavaScript on the server-side. It provides a platform for building fast, scalable, and efficient network applications, and is especially well-suited for building real-time applications and APIs.",
//       codeSample:
//         "const http = require('http');\n\nconst server = http.createServer((req, res) => {\n  res.statusCode = 200;\n  res.setHeader('Content-Type', 'text/plain');\n  res.end('Hello, World!');\n});\n\nserver.listen(port, hostname, () => {\n  console.log(`Server running at http://${hostname}:${port}/`);\n});",
//       videos: [
//         {
//           url: "https://www.youtube.com/watch?v=TlB_eWDSMt4",
//           userId: mongoose.Types.ObjectId("64463307ff6e7f2060c3a6cb"),
//         },
//       ],
//       questions: [
//         {
//           question: "What is Node.js?",
//           answers: [
//             {
//               answer:
//                 "Node.js is a JavaScript runtime built on the V8 JavaScript engine that allows developers to run JavaScript on the server-side. It provides a platform for building fast, scalable, and efficient network applications, and is especially well-suited for building real-time applications and APIs.",
//               userId: mongoose.Types.ObjectId("64463307ff6e7f2060c3a6cb"),
//               upvotes: 0,
//               downvotes: 0,
//               upvoters: [],
//               downvoters: [],
//             },
//           ],
//           userId: mongoose.Types.ObjectId("64463307ff6e7f2060c3a6cb"),
//           upvotes: 0,
//           downvotes: 0,
//         },
//         {
//           question: "What are some key features of Node.js?",
//           answers: [
//             {
//               answer:
//                 "Some key features of Node.js include non-blocking I/O, event-driven architecture, built-in modules, and a package manager (npm) that allows developers to easily share and reuse code.",
//               userId: mongoose.Types.ObjectId("64463307ff6e7f2060c3a6cb"),
//               upvotes: 0,
//               downvotes: 0,
//               upvoters: [],
//               downvoters: [],
//             },
//           ],
//           userId: mongoose.Types.ObjectId("64463307ff6e7f2060c3a6cb"),
//           upvotes: 0,
//           downvotes: 0,
//         },
//       ],
//     },
//     {
//       name: "Node.js and JavaScript",
//       description:
//         "Node.js is built on the JavaScript programming language, and allows developers to run JavaScript on the server-side. As a result, many of the features and concepts in JavaScript can be applied to Node.js development, including asynchronous programming, callbacks, closures, and more.",
//       codeSample:
//         "const fs = require('fs');\n\nfs.readFile('file.txt', 'utf8', (err, data) => {\n  if (err) throw err;\n  console.log(data);\n});",
//       videos: [
//         {
//           url: "https://www.youtube.com/watch?v=JnvKXcSI7yk",
//           userId: mongoose.Types.ObjectId("64463307ff6e7f2060c3a6cb"),
//         },
//       ],
//       questions: [
//         {
//           question: "What is the relationship between Node.js and JavaScript?",
//           answers: [
//             {
//               answer:
//                 "Node.js is built on the JavaScript programming language, and allows developers to run JavaScript on the server-side. As a result, many of the features and concepts in JavaScript can be applied to Node.js development, including asynchronous programming, callbacks, closures, and more.",
//               userId: mongoose.Types.ObjectId("64463307ff6e7f2060c3a6cb"),
//               upvotes: 0,
//               downvotes: 0,
//               upvoters: [],
//               downvoters: [],
//             },
//           ],
//           userId: mongoose.Types.ObjectId("64463307ff6e7f2060c3a6cb"),
//           upvotes: 0,
//           downvotes: 0,
//         },
//         {
//           question:
//             "What are some similarities and differences between JavaScript and Node.js?",
//           answers: [
//             {
//               answer:
//                 "JavaScript and Node.js share many similarities, including their syntax, data types, and basic programming concepts. However, Node.js includes several unique features, such as the ability to access the file system and network, and built-in modules for tasks like HTTP requests and encryption.",
//               userId: mongoose.Types.ObjectId("64463307ff6e7f2060c3a6cb"),
//               upvotes: 0,
//               downvotes: 0,
//               upvoters: [],
//               downvoters: [],
//             },
//           ],
//           userId: mongoose.Types.ObjectId("64463307ff6e7f2060c3a6cb"),
//           upvotes: 0,
//           downvotes: 0,
//         },
//       ],
//     },
//     {
//       name: "Asynchronous Programming with Node.js",
//       description:
//         "Asynchronous programming is a key feature of Node.js that allows developers to perform multiple tasks concurrently, without blocking the event loop. This is accomplished through the use of callbacks, promises, and async/await functions.",
//       codeSample:
//         "const http = require('http');\n\nconst server = http.createServer((req, res) => {\n  res.statusCode = 200;\n  res.setHeader('Content-Type', 'text/plain');\n  res.end('Hello, World!');\n});\n\nserver.listen(3000, () => {\n  console.log('Server running at http://localhost:3000/');\n});",
//       videos: [
//         {
//           url: "https://www.youtube.com/watch?v=8aGhZQkoFbQ",
//           userId: mongoose.Types.ObjectId("64463307ff6e7f2060c3a6cb"),
//         },
//       ],
//       questions: [
//         {
//           question: "What is asynchronous programming in Node.js?",
//           answers: [
//             {
//               answer:
//                 "Asynchronous programming is a key feature of Node.js that allows developers to perform multiple tasks concurrently, without blocking the event loop. This is accomplished through the use of callbacks, promises, and async/await functions.",
//               userId: mongoose.Types.ObjectId("64463307ff6e7f2060c3a6cb"),
//               upvotes: 0,
//               downvotes: 0,
//               upvoters: [],
//               downvoters: [],
//             },
//           ],
//           userId: mongoose.Types.ObjectId("64463307ff6e7f2060c3a6cb"),
//           upvotes: 0,
//           downvotes: 0,
//         },
//         {
//           question:
//             "What are some benefits of asynchronous programming in Node.js?",
//           answers: [
//             {
//               answer:
//                 "Asynchronous programming in Node.js allows for better performance and scalability, as it allows multiple tasks to be performed concurrently without blocking the event loop. This can also lead to a more responsive user experience, as it allows for non-blocking I/O operations.",
//               userId: mongoose.Types.ObjectId("64463307ff6e7f2060c3a6cb"),
//               upvotes: 0,
//               downvotes: 0,
//               upvoters: [],
//               downvoters: [],
//             },
//           ],
//           userId: mongoose.Types.ObjectId("64463307ff6e7f2060c3a6cb"),
//           upvotes: 0,
//           downvotes: 0,
//         },
//       ],
//     },
//     {
//       name: "Node.js Modules",
//       description:
//         "Node.js modules are reusable code blocks that can be used to encapsulate related functionality. Node.js has built-in modules such as fs, http, and path, which can be used to perform various operations such as reading/writing files, creating web servers, and working with file paths. Node.js also supports the creation and use of custom modules, which can be created and exported for use in other parts of an application.",
//       codeSample:
//         "const fs = require('fs');\n\nmodule.exports = {\n  readFile: (filename, encoding, callback) => {\n    fs.readFile(filename, encoding, callback);\n  },\n  writeFile: (filename, data, encoding, callback) => {\n    fs.writeFile(filename, data, encoding, callback);\n  }\n};",
//       videos: [
//         {
//           url: "https://www.youtube.com/watch?v=xHLd36QoS4k",
//           userId: mongoose.Types.ObjectId("64463307ff6e7f2060c3a6cb"),
//         },
//       ],
//       questions: [
//         {
//           question: "What are Node.js modules?",
//           answers: [
//             {
//               answer:
//                 "Node.js modules are reusable code blocks that can be used to encapsulate related functionality. Node.js has built-in modules such as fs, http, and path, which can be used to perform various operations such as reading/writing files, creating web servers, and working with file paths. Node.js also supports the creation and use of custom modules, which can be created and exported for use in other parts of an application.",
//               userId: mongoose.Types.ObjectId("64463307ff6e7f2060c3a6cb"),
//               upvotes: 0,
//               downvotes: 0,
//               upvoters: [],
//               downvoters: [],
//             },
//           ],
//           userId: mongoose.Types.ObjectId("64463307ff6e7f2060c3a6cb"),
//           upvotes: 0,
//           downvotes: 0,
//         },
//         {
//           question: "How do you create and use custom modules in Node.js?",
//           answers: [
//             {
//               answer:
//                 "Custom modules can be created in Node.js by defining functionality in a separate file and exporting it using the module.exports object. The exported functionality can then be imported and used in other parts of the application using the require function.",
//               userId: mongoose.Types.ObjectId("64463307ff6e7f2060c3a6cb"),
//               upvotes: 0,
//               downvotes: 0,
//               upvoters: [],
//               downvoters: [],
//             },
//           ],
//           userId: mongoose.Types.ObjectId("64463307ff6e7f2060c3a6cb"),
//           upvotes: 0,
//           downvotes: 0,
//         },
//       ],
//     },
//     {
//       name: "Node.js Modules",
//       description:
//         "Node.js modules are reusable code blocks that can be used to encapsulate related functionality. Node.js has built-in modules such as fs, http, and path, which can be used to perform various operations such as reading/writing files, creating web servers, and working with file paths. Node.js also supports the creation and use of custom modules, which can be created and exported for use in other parts of an application.",
//       codeSample:
//         "const fs = require('fs');\n\nmodule.exports = {\n  readFile: (filename, encoding, callback) => {\n    fs.readFile(filename, encoding, callback);\n  },\n  writeFile: (filename, data, encoding, callback) => {\n    fs.writeFile(filename, data, encoding, callback);\n  }\n};",
//       videos: [
//         {
//           url: "https://www.youtube.com/watch?v=xHLd36QoS4k",
//           userId: mongoose.Types.ObjectId("64463307ff6e7f2060c3a6cb"),
//         },
//       ],
//       questions: [
//         {
//           question: "What are Node.js modules?",
//           answers: [
//             {
//               answer:
//                 "Node.js modules are reusable code blocks that can be used to encapsulate related functionality. Node.js has built-in modules such as fs, http, and path, which can be used to perform various operations such as reading/writing files, creating web servers, and working with file paths. Node.js also supports the creation and use of custom modules, which can be created and exported for use in other parts of an application.",
//               userId: mongoose.Types.ObjectId("64463307ff6e7f2060c3a6cb"),
//               upvotes: 0,
//               downvotes: 0,
//               upvoters: [],
//               downvoters: [],
//             },
//           ],
//           userId: mongoose.Types.ObjectId("64463307ff6e7f2060c3a6cb"),
//           upvotes: 0,
//           downvotes: 0,
//         },
//         {
//           question: "How do you create and use custom modules in Node.js?",
//           answers: [
//             {
//               answer:
//                 "Custom modules can be created in Node.js by defining functionality in a separate file and exporting it using the module.exports object. The exported functionality can then be imported and used in other parts of the application using the require function.",
//               userId: mongoose.Types.ObjectId("64463307ff6e7f2060c3a6cb"),
//               upvotes: 0,
//               downvotes: 0,
//               upvoters: [],
//               downvoters: [],
//             },
//           ],
//           userId: mongoose.Types.ObjectId("64463307ff6e7f2060c3a6cb"),
//           upvotes: 0,
//           downvotes: 0,
//         },
//       ],
//     },
//     {
//       name: "Node.js Frameworks",
//       description:
//         "Node.js is a popular platform for building server-side applications, and there are many frameworks available that make it easier to develop, test, and deploy Node.js applications. These frameworks provide a range of features and tools, such as routing, middleware, templating engines, and more, that help developers build robust and scalable applications quickly and efficiently.",
//       codeSample:
//         "const express = require('express');\nconst app = express();\n\napp.get('/', (req, res) => {\n  res.send('Hello World!');\n});\n\napp.listen(3000, () => {\n  console.log('Server started on port 3000');\n});",
//       videos: [
//         {
//           url: "https://www.youtube.com/watch?v=zK4Ch6e1zq8",
//           userId: mongoose.Types.ObjectId("64463307ff6e7f2060c3a6cb"),
//         },
//       ],
//       questions: [
//         {
//           question: "What are some popular Node.js frameworks?",
//           answers: [
//             {
//               answer:
//                 "Some popular Node.js frameworks include Express, Koa, Hapi, Nest.js, Sails.js, and Meteor.",
//               userId: mongoose.Types.ObjectId("64463307ff6e7f2060c3a6cb"),
//               upvotes: 0,
//               downvotes: 0,
//               upvoters: [],
//               downvoters: [],
//             },
//           ],
//           userId: mongoose.Types.ObjectId("64463307ff6e7f2060c3a6cb"),
//           upvotes: 0,
//           downvotes: 0,
//         },
//         {
//           question: "What is Express?",
//           answers: [
//             {
//               answer:
//                 "Express is a popular web framework for Node.js that provides a simple and flexible way to build web applications and APIs. It includes a robust set of features for routing, middleware, and templating that make it easy to build high-performance and scalable applications.",
//               userId: mongoose.Types.ObjectId("64463307ff6e7f2060c3a6cb"),
//               upvotes: 0,
//               downvotes: 0,
//               upvoters: [],
//               downvoters: [],
//             },
//           ],
//           userId: mongoose.Types.ObjectId("64463307ff6e7f2060c3a6cb"),
//           upvotes: 0,
//           downvotes: 0,
//         },
//       ],
//     },
//     {
//       name: "Node.js and Databases",
//       description:
//         "Node.js is commonly used for backend web development, which often involves interacting with databases. Node.js offers a variety of database drivers and libraries for connecting to databases such as MySQL, PostgreSQL, MongoDB, and many others. In addition to this, Node.js also provides popular ORM libraries such as Sequelize and Mongoose for easier database integration and management. With Node.js, developers can build efficient, scalable and secure applications with database support.",
//       codeSample:
//         "const mysql = require('mysql');\n\nconst connection = mysql.createConnection({\n  host: 'localhost',\n  user: 'username',\n  password: 'password',\n  database: 'my_db'\n});\n\nconnection.connect((err) => {\n  if (err) throw err;\n  console.log('Connected to MySQL database!');\n});\n\nconnection.query('SELECT * FROM customers', (err, result) => {\n  if (err) throw err;\n  console.log(result);\n});",
//       videos: [
//         {
//           url: "https://www.youtube.com/watch?v=eB9Fq9I5ocs",
//           userId: mongoose.Types.ObjectId("64463307ff6e7f2060c3a6cb"),
//         },
//       ],
//       questions: [
//         {
//           question: "What databases can Node.js connect to?",
//           answers: [
//             {
//               answer:
//                 "Node.js offers a variety of database drivers and libraries for connecting to databases such as MySQL, PostgreSQL, MongoDB, and many others.",
//               userId: mongoose.Types.ObjectId("64463307ff6e7f2060c3a6cb"),
//               upvotes: 0,
//               downvotes: 0,
//               upvoters: [],
//               downvoters: [],
//             },
//           ],
//           userId: mongoose.Types.ObjectId("64463307ff6e7f2060c3a6cb"),
//           upvotes: 0,
//           downvotes: 0,
//         },
//         {
//           question: "What are some popular ORM libraries for Node.js?",
//           answers: [
//             {
//               answer:
//                 "Some popular ORM libraries for Node.js include Sequelize and Mongoose.",
//               userId: mongoose.Types.ObjectId("64463307ff6e7f2060c3a6cb"),
//               upvotes: 0,
//               downvotes: 0,
//               upvoters: [],
//               downvoters: [],
//             },
//           ],
//           userId: mongoose.Types.ObjectId("64463307ff6e7f2060c3a6cb"),
//           upvotes: 0,
//           downvotes: 0,
//         },
//       ],
//     },
//     {
//       name: "Real-time apps with Node.js",
//       description:
//         "Node.js is well-suited for building real-time apps, thanks to its event-driven architecture and non-blocking I/O. With Node.js, you can easily build scalable and efficient real-time applications, such as chat apps, collaborative editing tools, and live streaming services.",
//       codeSample:
//         "const http = require('http');\nconst server = http.createServer();\nconst io = require('socket.io')(server);\n\nio.on('connection', (socket) => {\n  console.log('User connected');\n  socket.on('disconnect', () => {\n    console.log('User disconnected');\n  });\n});\n\nserver.listen(3000, () => {\n  console.log('Server listening on port 3000');\n});",
//       videos: [
//         {
//           url: "https://www.youtube.com/watch?v=3QJtkf4_4Pc",
//           userId: mongoose.Types.ObjectId("64463307ff6e7f2060c3a6cb"),
//         },
//       ],
//       questions: [
//         {
//           question: "What are real-time apps?",
//           answers: [
//             {
//               answer:
//                 "Real-time apps are applications that allow users to interact with each other and receive updates in real-time, without the need for manual refreshes.",
//               userId: mongoose.Types.ObjectId("64463307ff6e7f2060c3a6cb"),
//               upvotes: 0,
//               downvotes: 0,
//               upvoters: [],
//               downvoters: [],
//             },
//           ],
//           userId: mongoose.Types.ObjectId("64463307ff6e7f2060c3a6cb"),
//           upvotes: 0,
//           downvotes: 0,
//         },
//         {
//           question:
//             "What makes Node.js well-suited for building real-time apps?",
//           answers: [
//             {
//               answer:
//                 "Node.js is well-suited for building real-time apps because of its event-driven architecture and non-blocking I/O, which allow it to handle large numbers of concurrent connections without blocking the event loop.",
//               userId: mongoose.Types.ObjectId("64463307ff6e7f2060c3a6cb"),
//               upvotes: 0,
//               downvotes: 0,
//               upvoters: [],
//               downvoters: [],
//             },
//           ],
//           userId: mongoose.Types.ObjectId("64463307ff6e7f2060c3a6cb"),
//           upvotes: 0,
//           downvotes: 0,
//         },
//       ],
//     },
//     {
//       name: "Testing Node.js Applications",
//       description:
//         "Testing Node.js applications is important to ensure that your code is working as expected and to catch bugs before they make it to production. There are several testing frameworks and libraries available for Node.js, including Mocha, Jest, and Ava. These frameworks provide a way to write tests for your code and run them automatically to ensure that everything is working as expected.",
//       codeSample:
//         "describe('My test suite', () => {\n  it('should do something', () => {\n    // test code goes here\n  });\n});",
//       videos: [
//         {
//           url: "https://www.youtube.com/watch?v=MLTRHc5dk6s",
//           userId: mongoose.Types.ObjectId("64463307ff6e7f2060c3a6cb"),
//         },
//       ],
//       questions: [
//         {
//           question: "Why is testing important for Node.js applications?",
//           answers: [
//             {
//               answer:
//                 "Testing Node.js applications is important to ensure that your code is working as expected and to catch bugs before they make it to production.",
//               userId: mongoose.Types.ObjectId("64463307ff6e7f2060c3a6cb"),
//               upvotes: 0,
//               downvotes: 0,
//               upvoters: [],
//               downvoters: [],
//             },
//           ],
//           userId: mongoose.Types.ObjectId("64463307ff6e7f2060c3a6cb"),
//           upvotes: 0,
//           downvotes: 0,
//         },
//         {
//           question: "What are some popular testing frameworks for Node.js?",
//           answers: [
//             {
//               answer:
//                 "There are several testing frameworks and libraries available for Node.js, including Mocha, Jest, and Ava.",
//               userId: mongoose.Types.ObjectId("64463307ff6e7f2060c3a6cb"),
//               upvotes: 0,
//               downvotes: 0,
//               upvoters: [],
//               downvoters: [],
//             },
//           ],
//           userId: mongoose.Types.ObjectId("64463307ff6e7f2060c3a6cb"),
//           upvotes: 0,
//           downvotes: 0,
//         },
//       ],
//     },
//     {
//       name: "Node.js Security",
//       description:
//         "Node.js is a powerful platform for building scalable and efficient applications, but it's important to consider security when developing with Node.js. There are several key security considerations to keep in mind, including input validation, secure communication, and protecting sensitive data.",
//       codeSample:
//         "const express = require('express');\nconst app = express();\n\napp.get('/', (req, res) => {\n  res.send('Hello World!');\n});\n\napp.listen(3000, () => {\n  console.log('Example app listening on port 3000!');\n});",
//       videos: [
//         {
//           url: "https://www.youtube.com/watch?v=dzQKnQEh1sM",
//           userId: mongoose.Types.ObjectId("64463307ff6e7f2060c3a6cb"),
//         },
//       ],
//       questions: [
//         {
//           question:
//             "What are some common security considerations for Node.js applications?",
//           answers: [
//             {
//               answer:
//                 "Some common security considerations for Node.js applications include input validation, secure communication, and protecting sensitive data.",
//               userId: mongoose.Types.ObjectId("64463307ff6e7f2060c3a6cb"),
//               upvotes: 0,
//               downvotes: 0,
//               upvoters: [],
//               downvoters: [],
//             },
//           ],
//           userId: mongoose.Types.ObjectId("64463307ff6e7f2060c3a6cb"),
//           upvotes: 0,
//           downvotes: 0,
//         },
//         {
//           question:
//             "How can you secure communication between a Node.js server and a client?",
//           answers: [
//             {
//               answer:
//                 "You can secure communication between a Node.js server and a client by using HTTPS and SSL/TLS certificates.",
//               userId: mongoose.Types.ObjectId("64463307ff6e7f2060c3a6cb"),
//               upvotes: 0,
//               downvotes: 0,
//               upvoters: [],
//               downvoters: [],
//             },
//           ],
//           userId: mongoose.Types.ObjectId("64463307ff6e7f2060c3a6cb"),
//           upvotes: 0,
//           downvotes: 0,
//         },
//       ],
//     },
//     {
//       name: "Node.js Deployment",
//       description:
//         "Node.js deployment refers to the process of deploying Node.js applications on a server or a cloud-based platform so that they can be accessed over the internet. This involves configuring the server environment, installing dependencies, and deploying the application code.",
//       codeSample:
//         "1. Deploying to a VPS:\n   - Provision a VPS and SSH into it\n   - Install Node.js and other dependencies\n   - Clone the application code from the repository\n   - Configure the environment variables\n   - Start the application with a process manager such as PM2\n\n2. Deploying to a cloud-based platform such as Heroku:\n   - Create a new application on the platform\n   - Connect the application to a Git repository\n   - Configure the environment variables\n   - Deploy the application with a single command or through the platform's web interface",
//       videos: [
//         {
//           url: "https://www.youtube.com/watch?v=Q2XuF4xpxt4",
//           userId: mongoose.Types.ObjectId("64463307ff6e7f2060c3a6cb"),
//         },
//       ],
//       questions: [
//         {
//           question: "What is Node.js deployment?",
//           answers: [
//             {
//               answer:
//                 "Node.js deployment refers to the process of deploying Node.js applications on a server or a cloud-based platform so that they can be accessed over the internet. This involves configuring the server environment, installing dependencies, and deploying the application code.",
//               userId: mongoose.Types.ObjectId("64463307ff6e7f2060c3a6cb"),
//               upvotes: 0,
//               downvotes: 0,
//               upvoters: [],
//               downvoters: [],
//             },
//           ],
//           userId: mongoose.Types.ObjectId("64463307ff6e7f2060c3a6cb"),
//           upvotes: 0,
//           downvotes: 0,
//         },
//         {
//           question:
//             "What are some common ways to deploy a Node.js application?",
//           answers: [
//             {
//               answer:
//                 "Some common ways to deploy a Node.js application include deploying to a virtual private server (VPS) or a cloud-based platform such as Heroku. The deployment process typically involves configuring the server environment, installing dependencies, and deploying the application code.",
//               userId: mongoose.Types.ObjectId("64463307ff6e7f2060c3a6cb"),
//               upvotes: 0,
//               downvotes: 0,
//               upvoters: [],
//               downvoters: [],
//             },
//           ],
//           userId: mongoose.Types.ObjectId("64463307ff6e7f2060c3a6cb"),
//           upvotes: 0,
//           downvotes: 0,
//         },
//       ],
//     },
//     {
//       name: "Node.js and Microservices",
//       description:
//         "Node.js is a popular choice for building microservices due to its lightweight and scalable nature. Microservices architecture involves breaking down a large application into smaller, independent services that communicate with each other through APIs. Node.js makes it easy to build and manage these microservices, as it has a non-blocking I/O model that allows it to handle a large number of concurrent connections with ease. Additionally, Node.js has a vast ecosystem of modules and libraries that make it easy to integrate with other technologies and services, making it an ideal choice for building microservices-based applications.",
//       codeSample:
//         "const express = require('express');\nconst app = express();\n\napp.get('/api/users', (req, res) => {\n  // logic to fetch users from database\n});\n\napp.post('/api/users', (req, res) => {\n  // logic to create a new user\n});\n\napp.listen(3000, () => {\n  console.log('Server listening on port 3000');\n});",
//       videos: [
//         {
//           url: "https://www.youtube.com/watch?v=CjmKVR3E8pU",
//           userId: mongoose.Types.ObjectId("64463307ff6e7f2060c3a6cb"),
//         },
//       ],
//       questions: [
//         {
//           question: "What is microservices architecture?",
//           answers: [
//             {
//               answer:
//                 "Microservices architecture involves breaking down a large application into smaller, independent services that communicate with each other through APIs.",
//               userId: mongoose.Types.ObjectId("64463307ff6e7f2060c3a6cb"),
//               upvotes: 0,
//               downvotes: 0,
//               upvoters: [],
//               downvoters: [],
//             },
//           ],
//           userId: mongoose.Types.ObjectId("64463307ff6e7f2060c3a6cb"),
//           upvotes: 0,
//           downvotes: 0,
//         },
//         {
//           question: "Why is Node.js a good choice for building microservices?",
//           answers: [
//             {
//               answer:
//                 "Node.js is a lightweight and scalable technology that has a non-blocking I/O model, which allows it to handle a large number of concurrent connections with ease. Additionally, Node.js has a vast ecosystem of modules and libraries that make it easy to integrate with other technologies and services.",
//               userId: mongoose.Types.ObjectId("64463307ff6e7f2060c3a6cb"),
//               upvotes: 0,
//               downvotes: 0,
//               upvoters: [],
//               downvoters: [],
//             },
//           ],
//           userId: mongoose.Types.ObjectId("64463307ff6e7f2060c3a6cb"),
//           upvotes: 0,
//           downvotes: 0,
//         },
//       ],
//     },
//   ],
// });
// Introduction to HTML
// HTML Tags and Elements
// HTML Attributes
// HTML Forms and Input
// HTML Tables
// HTML Lists
// HTML Links and Navigation
// HTML Images and Multimedia
// HTML Semantics and SEO
// HTML Accessibility
// HTML Layout and CSS Integration
// HTML5 APIs and Web Components
// Responsive Web Design with HTML
// HTML Email Design
// HTML Best Practices and Standards

// const newTechnology = new Technology({
//   name: "HTML",
//   subtopics: [
//     {
//       name: "Introduction to HTML",
//       description:
//         "HTML (Hypertext Markup Language) is a markup language used for creating web pages and web applications. HTML describes the structure of web pages using markup tags and attributes, which are used to define the layout, content, and functionality of a web page. HTML is the foundation of the web and is used in conjunction with other technologies like CSS and JavaScript to create modern web applications.",
//       codeSample:
//         "<!DOCTYPE html>\n<html>\n  <head>\n    <title>My Page</title>\n  </head>\n  <body>\n    <h1>Welcome to My Page</h1>\n    <p>This is my first web page!</p>\n  </body>\n</html>",
//       videos: [
//         {
//           url: "https://www.youtube.com/watch?v=UB1O30fR-EE",
//           userId: mongoose.Types.ObjectId("64463307ff6e7f2060c3a6cb"),
//         },
//       ],
//       questions: [
//         {
//           question: "What is HTML?",
//           answers: [
//             {
//               answer:
//                 "HTML (Hypertext Markup Language) is a markup language used for creating web pages and web applications. HTML describes the structure of web pages using markup tags and attributes, which are used to define the layout, content, and functionality of a web page. HTML is the foundation of the web and is used in conjunction with other technologies like CSS and JavaScript to create modern web applications.",
//               userId: mongoose.Types.ObjectId("64463307ff6e7f2060c3a6cb"),
//               upvotes: 0,
//               downvotes: 0,
//               upvoters: [],
//               downvoters: [],
//             },
//           ],
//           userId: mongoose.Types.ObjectId("64463307ff6e7f2060c3a6cb"),
//           upvotes: 0,
//           downvotes: 0,
//         },
//         {
//           question: "What are some basic HTML tags?",
//           answers: [
//             {
//               answer:
//                 "Some basic HTML tags include <html>, <head>, <title>, <body>, <h1> to <h6>, <p>, <a>, <img>, <ul>, <ol>, <li>, <table>, <tr>, <td>, and <th>.",
//               userId: mongoose.Types.ObjectId("64463307ff6e7f2060c3a6cb"),
//               upvotes: 0,
//               downvotes: 0,
//               upvoters: [],
//               downvoters: [],
//             },
//           ],
//           userId: mongoose.Types.ObjectId("64463307ff6e7f2060c3a6cb"),
//           upvotes: 0,
//           downvotes: 0,
//         },
//       ],
//     },
//     {
//       name: "HTML Tags and Elements",
//       description:
//         "HTML tags are used to define the structure and content of an HTML document. Elements are made up of tags and their content, and can be nested within one another. There are many types of tags and elements available in HTML, including those for text formatting, links, images, tables, forms, and more.",
//       codeSample:
//         "<h1>Welcome to my website!</h1>\n<p>This is a paragraph of text.</p>\n<a href='https://www.example.com'>This is a link to another website.</a>\n<img src='image.jpg' alt='A beautiful sunset'>\n<table>\n  <tr>\n    <th>Header 1</th>\n    <th>Header 2</th>\n  </tr>\n  <tr>\n    <td>Row 1, Cell 1</td>\n    <td>Row 1, Cell 2</td>\n  </tr>\n  <tr>\n    <td>Row 2, Cell 1</td>\n    <td>Row 2, Cell 2</td>\n  </tr>\n</table>",
//       videos: [
//         {
//           url: "https://www.youtube.com/watch?v=UB1O30fR-EE",
//           userId: mongoose.Types.ObjectId("64463307ff6e7f2060c3a6cb"),
//         },
//       ],
//       questions: [
//         {
//           question: "What are HTML tags used for?",
//           answers: [
//             {
//               answer:
//                 "HTML tags are used to define the structure and content of an HTML document.",
//               userId: mongoose.Types.ObjectId("64463307ff6e7f2060c3a6cb"),
//               upvotes: 0,
//               downvotes: 0,
//               upvoters: [],
//               downvoters: [],
//             },
//           ],
//           userId: mongoose.Types.ObjectId("64463307ff6e7f2060c3a6cb"),
//           upvotes: 0,
//           downvotes: 0,
//         },
//         {
//           question: "What are some common HTML elements?",
//           answers: [
//             {
//               answer:
//                 "There are many types of tags and elements available in HTML, including those for text formatting, links, images, tables, forms, and more.",
//               userId: mongoose.Types.ObjectId("64463307ff6e7f2060c3a6cb"),
//               upvotes: 0,
//               downvotes: 0,
//               upvoters: [],
//               downvoters: [],
//             },
//           ],
//           userId: mongoose.Types.ObjectId("64463307ff6e7f2060c3a6cb"),
//           upvotes: 0,
//           downvotes: 0,
//         },
//       ],
//     },
//     {
//       name: "HTML Forms and Input",
//       description:
//         "HTML forms are used to collect user input and send it to a server for processing. They consist of various types of input fields such as text boxes, radio buttons, checkboxes, dropdown lists, and more. HTML input elements allow users to enter and submit information to the server. They have various attributes such as name, value, type, placeholder, and more that help define their behavior and appearance.",
//       codeSample:
//         "<form action='/submit' method='post'>\n  <label for='name'>Name:</label>\n  <input type='text' id='name' name='name' placeholder='Enter your name' required>\n  <label for='email'>Email:</label>\n  <input type='email' id='email' name='email' placeholder='Enter your email' required>\n  <label for='message'>Message:</label>\n  <textarea id='message' name='message' placeholder='Enter your message' required></textarea>\n  <button type='submit'>Submit</button>\n</form>",
//       videos: [
//         {
//           url: "https://www.youtube.com/watch?v=5WYBdVQ4ZyM",
//           userId: mongoose.Types.ObjectId("64463307ff6e7f2060c3a6cb"),
//         },
//       ],
//       questions: [
//         {
//           question: "What are HTML forms?",
//           answers: [
//             {
//               answer:
//                 "HTML forms are used to collect user input and send it to a server for processing. They consist of various types of input fields such as text boxes, radio buttons, checkboxes, dropdown lists, and more.",
//               userId: mongoose.Types.ObjectId("64463307ff6e7f2060c3a6cb"),
//               upvotes: 0,
//               downvotes: 0,
//               upvoters: [],
//               downvoters: [],
//             },
//           ],
//           userId: mongoose.Types.ObjectId("64463307ff6e7f2060c3a6cb"),
//           upvotes: 0,
//           downvotes: 0,
//         },
//         {
//           question: "What are some common HTML input fields?",
//           answers: [
//             {
//               answer:
//                 "Some common HTML input fields are text boxes, radio buttons, checkboxes, dropdown lists, and more.",
//               userId: mongoose.Types.ObjectId("64463307ff6e7f2060c3a6cb"),
//               upvotes: 0,
//               downvotes: 0,
//               upvoters: [],
//               downvoters: [],
//             },
//           ],
//           userId: mongoose.Types.ObjectId("64463307ff6e7f2060c3a6cb"),
//           upvotes: 0,
//           downvotes: 0,
//         },
//       ],
//     },
//     {
//       name: "HTML Tables",
//       description:
//         "HTML tables are used to display tabular data in a structured format. Tables are made up of rows and columns, with each cell in the table containing either a heading or data. HTML provides several elements for creating tables, including the <table>, <tr>, <th>, and <td> elements. The <table> element is used to define the table, while the <tr> element is used to define each row. The <th> element is used to define the heading cells, and the <td> element is used to define the data cells.",
//       codeSample:
//         "<table>\n  <tr>\n    <th>Column 1</th>\n    <th>Column 2</th>\n  </tr>\n  <tr>\n    <td>Row 1, Column 1</td>\n    <td>Row 1, Column 2</td>\n  </tr>\n  <tr>\n    <td>Row 2, Column 1</td>\n    <td>Row 2, Column 2</td>\n  </tr>\n</table>",
//       videos: [
//         {
//           url: "https://www.youtube.com/watch?v=jXkVJnL5xe4",
//           userId: mongoose.Types.ObjectId("64463307ff6e7f2060c3a6cb"),
//         },
//       ],
//       questions: [
//         {
//           question: "What is the purpose of HTML tables?",
//           answers: [
//             {
//               answer:
//                 "HTML tables are used to display tabular data in a structured format.",
//               userId: mongoose.Types.ObjectId("64463307ff6e7f2060c3a6cb"),
//               upvotes: 0,
//               downvotes: 0,
//               upvoters: [],
//               downvoters: [],
//             },
//           ],
//           userId: mongoose.Types.ObjectId("64463307ff6e7f2060c3a6cb"),
//           upvotes: 0,
//           downvotes: 0,
//         },
//         {
//           question: "What HTML elements are used to create tables?",
//           answers: [
//             {
//               answer:
//                 "HTML provides several elements for creating tables, including the <table>, <tr>, <th>, and <td> elements.",
//               userId: mongoose.Types.ObjectId("64463307ff6e7f2060c3a6cb"),
//               upvotes: 0,
//               downvotes: 0,
//               upvoters: [],
//               downvoters: [],
//             },
//           ],
//           userId: mongoose.Types.ObjectId("64463307ff6e7f2060c3a6cb"),
//           upvotes: 0,
//           downvotes: 0,
//         },
//       ],
//     },
//     {
//       name: "HTML Lists",
//       description:
//         "HTML lists are used to group a set of related items together. There are three types of lists in HTML: ordered, unordered, and definition lists. Ordered lists display items in a numbered sequence, while unordered lists display items with bullets or other symbols. Definition lists display a term and its definition. Lists are commonly used for navigation menus, directory listings, and other similar types of content.",
//       codeSample:
//         "<ul>\n  <li>Item 1</li>\n  <li>Item 2</li>\n  <li>Item 3</li>\n</ul>\n\n<ol>\n  <li>Item 1</li>\n  <li>Item 2</li>\n  <li>Item 3</li>\n</ol>\n\n<dl>\n  <dt>Term 1</dt>\n  <dd>Definition 1</dd>\n  <dt>Term 2</dt>\n  <dd>Definition 2</dd>\n</dl>",
//       videos: [
//         {
//           url: "https://www.youtube.com/watch?v=g6AIAcL-5BA",
//           userId: mongoose.Types.ObjectId("64463307ff6e7f2060c3a6cb"),
//         },
//       ],
//       questions: [
//         {
//           question: "What are the three types of lists in HTML?",
//           answers: [
//             {
//               answer:
//                 "The three types of lists in HTML are ordered, unordered, and definition lists.",
//               userId: mongoose.Types.ObjectId("64463307ff6e7f2060c3a6cb"),
//               upvotes: 0,
//               downvotes: 0,
//               upvoters: [],
//               downvoters: [],
//             },
//           ],
//           userId: mongoose.Types.ObjectId("64463307ff6e7f2060c3a6cb"),
//           upvotes: 0,
//           downvotes: 0,
//         },
//         {
//           question: "What are lists commonly used for in HTML?",
//           answers: [
//             {
//               answer:
//                 "Lists are commonly used for navigation menus, directory listings, and other similar types of content.",
//               userId: mongoose.Types.ObjectId("64463307ff6e7f2060c3a6cb"),
//               upvotes: 0,
//               downvotes: 0,
//               upvoters: [],
//               downvoters: [],
//             },
//           ],
//           userId: mongoose.Types.ObjectId("64463307ff6e7f2060c3a6cb"),
//           upvotes: 0,
//           downvotes: 0,
//         },
//       ],
//     },
//     {
//       name: "Images and Multimedia in HTML",
//       description:
//         "HTML provides a variety of tags and attributes to add images and multimedia content to web pages. The <img> tag is used to add images to a web page, and it can be customized with attributes such as 'src' to specify the image source and 'alt' to provide alternate text for the image. HTML also provides tags for adding audio and video content, such as the <audio> and <video> tags. These tags can be customized with attributes such as 'src', 'controls', and 'autoplay' to provide a rich multimedia experience for users.",
//       codeSample:
//         "<img src='image.jpg' alt='A beautiful landscape'>\n\n<video src='video.mp4' controls></video>\n\n<audio src='audio.mp3' controls autoplay></audio>",
//       videos: [
//         {
//           url: "https://www.youtube.com/watch?v=kAkMqc5j6iY",
//           userId: mongoose.Types.ObjectId("64463307ff6e7f2060c3a6cb"),
//         },
//       ],
//       questions: [
//         {
//           question: "What is the <img> tag used for?",
//           answers: [
//             {
//               answer: "The <img> tag is used to add images to a web page.",
//               userId: mongoose.Types.ObjectId("64463307ff6e7f2060c3a6cb"),
//               upvotes: 0,
//               downvotes: 0,
//               upvoters: [],
//               downvoters: [],
//             },
//           ],
//           userId: mongoose.Types.ObjectId("64463307ff6e7f2060c3a6cb"),
//           upvotes: 0,
//           downvotes: 0,
//         },
//         {
//           question: "What attributes can be used with the <video> tag?",
//           answers: [
//             {
//               answer:
//                 "The <video> tag can be customized with attributes such as 'src', 'controls', and 'autoplay' to provide a rich multimedia experience for users.",
//               userId: mongoose.Types.ObjectId("64463307ff6e7f2060c3a6cb"),
//               upvotes: 0,
//               downvotes: 0,
//               upvoters: [],
//               downvoters: [],
//             },
//           ],
//           userId: mongoose.Types.ObjectId("64463307ff6e7f2060c3a6cb"),
//           upvotes: 0,
//           downvotes: 0,
//         },
//       ],
//     },
//     {
//       name: "HTML Semantics and SEO",
//       description:
//         "HTML semantics refers to the use of proper tags and elements to give meaning and structure to content. Proper use of HTML semantics not only makes the code easier to read and maintain, but it also plays a crucial role in Search Engine Optimization (SEO). Search engines use semantic analysis to determine the relevance and quality of web pages, and proper use of HTML semantics can help search engines better understand the content of the page, which can result in better search engine rankings.",
//       codeSample:
//         '<header>\n  <nav>\n    <ul>\n      <li><a href="#">Home</a></li>\n      <li><a href="#">About</a></li>\n      <li><a href="#">Contact</a></li>\n    </ul>\n  </nav>\n</header>\n<main>\n  <article>\n    <h2>Heading</h2>\n    <p>Paragraph</p>\n  </article>\n</main>\n<footer>\n  <p>&copy; 2023 Company Name</p>\n</footer>',
//       videos: [
//         {
//           url: "https://www.youtube.com/watch?v=BNHR6IQJGZs",
//           userId: mongoose.Types.ObjectId("64463307ff6e7f2060c3a6cb"),
//         },
//       ],
//       questions: [
//         {
//           question: "What is HTML semantics?",
//           answers: [
//             {
//               answer:
//                 "HTML semantics refers to the use of proper tags and elements to give meaning and structure to content.",
//               userId: mongoose.Types.ObjectId("64463307ff6e7f2060c3a6cb"),
//               upvotes: 0,
//               downvotes: 0,
//               upvoters: [],
//               downvoters: [],
//             },
//           ],
//           userId: mongoose.Types.ObjectId("64463307ff6e7f2060c3a6cb"),
//           upvotes: 0,
//           downvotes: 0,
//         },
//         {
//           question: "Why is proper use of HTML semantics important for SEO?",
//           answers: [
//             {
//               answer:
//                 "Search engines use semantic analysis to determine the relevance and quality of web pages, and proper use of HTML semantics can help search engines better understand the content of the page, which can result in better search engine rankings.",
//               userId: mongoose.Types.ObjectId("64463307ff6e7f2060c3a6cb"),
//               upvotes: 0,
//               downvotes: 0,
//               upvoters: [],
//               downvoters: [],
//             },
//           ],
//           userId: mongoose.Types.ObjectId("64463307ff6e7f2060c3a6cb"),
//           upvotes: 0,
//           downvotes: 0,
//         },
//       ],
//     },
//     {
//       name: "HTML Best Practices",
//       description:
//         "HTML is a markup language used to structure content on the web. To ensure that your HTML code is optimized for performance, accessibility, and SEO, there are several best practices you should follow. These include using semantic HTML elements, providing descriptive and meaningful text alternatives for non-text content, optimizing page load times, and ensuring accessibility for users with disabilities.",
//       codeSample:
//         '<!DOCTYPE html>\n<html lang="en">\n<head>\n  <meta charset="UTF-8">\n  <meta name="viewport" content="width=device-width, initial-scale=1.0">\n  <title>My Webpage</title>\n  <link rel="stylesheet" href="styles.css">\n</head>\n<body>\n  <header>\n    <nav>\n      <ul>\n        <li><a href="#">Home</a></li>\n        <li><a href="#">About</a></li>\n        <li><a href="#">Contact</a></li>\n      </ul>\n    </nav>\n  </header>\n  <main>\n    <h1>Welcome to my webpage</h1>\n    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla vitae nisl ac est venenatis rhoncus at id sapien.</p>\n    <img src="image.jpg" alt="A beautiful image">\n  </main>\n  <footer>\n    <p>Copyright &copy; 2023</p>\n  </footer>\n</body>\n</html>',
//       videos: [
//         {
//           url: "https://www.youtube.com/watch?v=bk3z3v50bEM",
//           userId: mongoose.Types.ObjectId("64463307ff6e7f2060c3a6cb"),
//         },
//       ],
//       questions: [
//         {
//           question: "What are some best practices for writing HTML?",
//           answers: [
//             {
//               answer:
//                 "Some best practices for writing HTML include using semantic HTML elements, providing descriptive and meaningful text alternatives for non-text content, optimizing page load times, and ensuring accessibility for users with disabilities.",
//               userId: mongoose.Types.ObjectId("64463307ff6e7f2060c3a6cb"),
//               upvotes: 0,
//               downvotes: 0,
//               upvoters: [],
//               downvoters: [],
//             },
//           ],
//           userId: mongoose.Types.ObjectId("64463307ff6e7f2060c3a6cb"),
//           upvotes: 0,
//           downvotes: 0,
//         },
//         {
//           question: "Why is it important to use semantic HTML elements?",
//           answers: [
//             {
//               answer:
//                 "Using semantic HTML elements helps improve the accessibility, SEO, and maintainability of your website by providing contextual meaning to your content.",
//               userId: mongoose.Types.ObjectId("64463307ff6e7f2060c3a6cb"),
//               upvotes: 0,
//               downvotes: 0,
//               upvoters: [],
//               downvoters: [],
//             },
//           ],
//           userId: mongoose.Types.ObjectId("64463307ff6e7f2060c3a6cb"),
//           upvotes: 0,
//           downvotes: 0,
//         },
//       ],
//     },
//     {
//       name: "Layouts and CSS Integration in HTML",
//       description:
//         "HTML provides a structure for web pages, but it is CSS that gives them visual style and layout. With CSS, you can control the presentation of HTML elements, including their size, color, font, and layout. CSS can be applied to HTML in several ways, including inline styles, internal styles, and external stylesheets. In addition, HTML provides several layout elements and attributes that can be used to control the position and arrangement of content on a web page.",
//       codeSample:
//         "<!DOCTYPE html>\n<html>\n  <head>\n    <title>My Website</title>\n    <style>\n      /* Internal styles */\n      body {\n        font-family: Arial, sans-serif;\n      }\n      h1 {\n        color: #333;\n        text-align: center;\n      }\n      .container {\n        max-width: 960px;\n        margin: 0 auto;\n      }\n    </style>\n    <link rel='stylesheet' href='styles.css'>\n  </head>\n  <body>\n    <header>\n      <nav>\n        <ul>\n          <li><a href='#'>Home</a></li>\n          <li><a href='#'>About</a></li>\n          <li><a href='#'>Contact</a></li>\n        </ul>\n      </nav>\n    </header>\n    <main class='container'>\n      <h1>Welcome to my website</h1>\n      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam eget ante commodo, dignissim sapien sit amet, feugiat ante. Donec semper tortor vel metus dictum, nec molestie metus porttitor.</p>\n    </main>\n    <footer>\n      <p>&copy; 2021 My Website</p>\n    </footer>\n  </body>\n</html>",
//       videos: [
//         {
//           url: "https://www.youtube.com/watch?v=ieTHC78giGQ",
//           userId: mongoose.Types.ObjectId("64463307ff6e7f2060c3a6cb"),
//         },
//       ],
//       questions: [
//         {
//           question: "What is CSS and how is it used with HTML?",
//           answers: [
//             {
//               answer:
//                 "CSS stands for Cascading Style Sheets, and it is used to style and layout HTML elements. CSS can be applied to HTML in several ways, including inline styles, internal styles, and external stylesheets.",
//               userId: mongoose.Types.ObjectId("64463307ff6e7f2060c3a6cb"),
//               upvotes: 0,
//               downvotes: 0,
//               upvoters: [],
//               downvoters: [],
//             },
//           ],
//           userId: mongoose.Types.ObjectId("64463307ff6e7f2060c3a6cb"),
//           upvotes: 0,
//           downvotes: 0,
//         },
//         {
//           question: "What layout elements and attributes does HTML provide?",
//           answers: [
//             {
//               answer:
//                 "HTML provides several layout elements and attributes, including div, span, header, footer, section, article, aside, and nav. These elements can be used to control the position and arrangement of content on a web page.",
//               userId: mongoose.Types.ObjectId("64463307ff6e7f2060c3a6cb"),
//               upvotes: 0,
//               downvotes: 0,
//               upvoters: [],
//               downvoters: [],
//             },
//           ],
//           userId: mongoose.Types.ObjectId("64463307ff6e7f2060c3a6cb"),
//           upvotes: 0,
//           downvotes: 0,
//         },
//       ],
//     },
//   ],
// });

// Selectors
// Cascading and inheritance
// Box model
// Layout and positioning
// Typography
// Colors and gradients
// Backgrounds
// Transitions and animations
// Flexbox
// Grid layout
// Responsive design
// Browser compatibility and vendor prefixes

// const newTechnology = new Technology({
//   name: "CSS",
//   subtopics: [
//     {
//       name: "Selectors in CSS",
//       description:
//         "Selectors are used in CSS to target specific HTML elements and apply styles to them. There are many types of selectors in CSS, including element selectors, class selectors, ID selectors, attribute selectors, and pseudo-class selectors. Understanding how to use selectors effectively is crucial for creating well-designed and visually appealing websites.",
//       codeSample:
//         ".my-class {\n  font-size: 16px;\n  color: #333;\n}\n\n#my-id {\n  font-weight: bold;\n}\n\nbutton[type='submit'] {\n  background-color: #007bff;\n  color: #fff;\n  border: none;\n  padding: 10px 20px;\n}\n\na:hover {\n  text-decoration: underline;\n}",
//       videos: [
//         {
//           url: "https://www.youtube.com/watch?v=4ZZfWyZsHzI",
//           userId: mongoose.Types.ObjectId("64463307ff6e7f2060c3a6cb"),
//         },
//       ],
//       questions: [
//         {
//           question: "What are selectors in CSS?",
//           answers: [
//             {
//               answer:
//                 "Selectors are used in CSS to target specific HTML elements and apply styles to them. There are many types of selectors in CSS, including element selectors, class selectors, ID selectors, attribute selectors, and pseudo-class selectors.",
//               userId: mongoose.Types.ObjectId("64463307ff6e7f2060c3a6cb"),
//               upvotes: 0,
//               downvotes: 0,
//               upvoters: [],
//               downvoters: [],
//             },
//           ],
//           userId: mongoose.Types.ObjectId("64463307ff6e7f2060c3a6cb"),
//           upvotes: 0,
//           downvotes: 0,
//           upvoters: [],
//           downvoters: [],
//         },
//         {
//           question: "What are some examples of CSS selectors?",
//           answers: [
//             {
//               answer:
//                 "Some examples of CSS selectors include element selectors, class selectors, ID selectors, attribute selectors, and pseudo-class selectors. Element selectors target HTML elements such as <p> and <h1>, class selectors target elements with a specific class attribute, ID selectors target elements with a specific ID attribute, attribute selectors target elements with a specific attribute value, and pseudo-class selectors target elements based on their state or position (such as :hover or :first-child).",
//               userId: mongoose.Types.ObjectId("64463307ff6e7f2060c3a6cb"),
//               upvotes: 0,
//               downvotes: 0,
//               upvoters: [],
//               downvoters: [],
//             },
//           ],
//           userId: mongoose.Types.ObjectId("64463307ff6e7f2060c3a6cb"),
//           upvotes: 0,
//           downvotes: 0,
//           upvoters: [],
//           downvoters: [],
//         },
//       ],
//     },
//     {
//       name: "Cascading and Inheritance in CSS",
//       description:
//         "Cascading and inheritance are important concepts in CSS that allow styles to be applied consistently and efficiently. Cascading refers to the process by which styles are applied to elements based on their specificity, source order, and importance. Inheritance, on the other hand, allows styles to be passed down from parent elements to their children. By using cascading and inheritance, you can create flexible, modular, and maintainable stylesheets.",
//       codeSample:
//         "/* CSS rules */\nbody {\n  font-family: Arial, sans-serif;\n  font-size: 16px;\n  color: #333;\n}\nh1 {\n  font-size: 32px;\n  color: #666;\n}\n\n/* HTML */\n<body>\n  <h1>Welcome to my website</h1>\n  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam eget ante commodo, dignissim sapien sit amet, feugiat ante. Donec semper tortor vel metus dictum, nec molestie metus porttitor.</p>\n</body>",
//       videos: [
//         {
//           url: "https://www.youtube.com/watch?v=rUOAz6i3I6U",
//           userId: mongoose.Types.ObjectId("64463307ff6e7f2060c3a6cb"),
//         },
//       ],
//       questions: [
//         {
//           question: "What is cascading in CSS?",
//           answers: [
//             {
//               answer:
//                 "Cascading is the process by which styles are applied to elements based on their specificity, source order, and importance. It allows multiple styles to be applied to the same element and determines which styles take precedence over others.",
//               userId: mongoose.Types.ObjectId("64463307ff6e7f2060c3a6cb"),
//               upvotes: 0,
//               downvotes: 0,
//               upvoters: [],
//               downvoters: [],
//             },
//           ],
//           userId: mongoose.Types.ObjectId("64463307ff6e7f2060c3a6cb"),
//           upvotes: 0,
//           downvotes: 0,
//         },
//         {
//           question: "What is inheritance in CSS?",
//           answers: [
//             {
//               answer:
//                 "Inheritance allows styles to be passed down from parent elements to their children. It allows you to create styles that apply to multiple elements at once, without having to repeat the same code over and over again.",
//               userId: mongoose.Types.ObjectId("64463307ff6e7f2060c3a6cb"),
//               upvotes: 0,
//               downvotes: 0,
//               upvoters: [],
//               downvoters: [],
//             },
//           ],
//           userId: mongoose.Types.ObjectId("64463307ff6e7f2060c3a6cb"),
//           upvotes: 0,
//           downvotes: 0,
//         },
//       ],
//     },
//     {
//       name: "Box Model in CSS",
//       description:
//         "The box model is a fundamental concept in CSS that defines how elements are sized and spaced on a web page. Every element on a web page is considered a box, with its own content, padding, border, and margin. Understanding the box model is essential for creating well-designed and responsive layouts in CSS.",
//       codeSample:
//         '/* CSS rules */\n.box {\n  width: 200px;\n  height: 200px;\n  padding: 20px;\n  border: 2px solid #333;\n  margin: 20px;\n}\n\n/* HTML */\n<div class="box">\n  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam eget ante commodo, dignissim sapien sit amet, feugiat ante.</p>\n</div>',
//       videos: [
//         {
//           url: "https://www.youtube.com/watch?v=dYw4meRWGd4",
//           userId: mongoose.Types.ObjectId("64463307ff6e7f2060c3a6cb"),
//           upvotes: 0,
//           downvotes: 0,
//         },
//       ],
//       questions: [
//         {
//           question: "What is the box model in CSS?",
//           answers: [
//             {
//               answer:
//                 "The box model is a fundamental concept in CSS that defines how elements are sized and spaced on a web page. Every element on a web page is considered a box, with its own content, padding, border, and margin.",
//               userId: mongoose.Types.ObjectId("64463307ff6e7f2060c3a6cb"),
//               upvotes: 0,
//               downvotes: 0,
//               upvoters: [],
//               downvoters: [],
//             },
//           ],
//           userId: mongoose.Types.ObjectId("64463307ff6e7f2060c3a6cb"),
//           upvotes: 0,
//           downvotes: 0,
//         },
//         {
//           question: "What are the components of the box model?",
//           answers: [
//             {
//               answer:
//                 "The box model consists of the content area, padding, border, and margin. The content area is where the actual content of the element is displayed. The padding is the space between the content area and the border. The border is the line that surrounds the element, and the margin is the space between the border and other elements on the page.",
//               userId: mongoose.Types.ObjectId("64463307ff6e7f2060c3a6cb"),
//               upvotes: 0,
//               downvotes: 0,
//               upvoters: [],
//               downvoters: [],
//             },
//           ],
//           userId: mongoose.Types.ObjectId("64463307ff6e7f2060c3a6cb"),
//           upvotes: 0,
//           downvotes: 0,
//         },
//       ],
//     },
//     {
//       name: "Layout and Positioning in CSS",
//       description:
//         "Layout and positioning are essential concepts in CSS that allow you to control the visual structure and arrangement of elements on a webpage. By using different layout techniques and positioning properties, you can create complex and responsive layouts that adapt to different screen sizes and devices.",
//       codeSample:
//         '/* CSS rules */\n.container {\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: center;\n}\n.box {\n  width: 100px;\n  height: 100px;\n  margin: 10px;\n  background-color: #ccc;\n}\n\n/* HTML */\n<div class="container">\n  <div class="box"></div>\n  <div class="box"></div>\n  <div class="box"></div>\n</div>',
//       videos: [
//         {
//           url: "https://www.youtube.com/watch?v=qm0IfG1GyZU",
//           userId: mongoose.Types.ObjectId("64463307ff6e7f2060c3a6cb"),
//         },
//       ],
//       questions: [
//         {
//           question: "What is the box model in CSS?",
//           answers: [
//             {
//               answer:
//                 "The box model in CSS is a way to describe the dimensions and spacing of elements on a webpage. It consists of four components: content, padding, border, and margin. By adjusting these components, you can control the size, position, and spacing of elements.",
//               userId: mongoose.Types.ObjectId("64463307ff6e7f2060c3a6cb"),
//               upvotes: 0,
//               downvotes: 0,
//               upvoters: [],
//               downvoters: [],
//             },
//           ],
//           userId: mongoose.Types.ObjectId("64463307ff6e7f2060c3a6cb"),
//           upvotes: 0,
//           downvotes: 0,
//         },
//         {
//           question:
//             "What is the difference between absolute and relative positioning in CSS?",
//           answers: [
//             {
//               answer:
//                 "Absolute positioning in CSS positions an element relative to its closest positioned ancestor, whereas relative positioning positions an element relative to its normal position in the document flow. Absolute positioning takes the element out of the normal flow of the document, whereas relative positioning keeps the element in the flow.",
//               userId: mongoose.Types.ObjectId("64463307ff6e7f2060c3a6cb"),
//               upvotes: 0,
//               downvotes: 0,
//               upvoters: [],
//               downvoters: [],
//             },
//           ],
//           userId: mongoose.Types.ObjectId("64463307ff6e7f2060c3a6cb"),
//           upvotes: 0,
//           downvotes: 0,
//         },
//       ],
//     },
//     {
//       name: "Typography in Web Design",
//       description:
//         "Typography plays a crucial role in web design, as it can affect readability, user experience, and the overall aesthetic of a website. By understanding the principles of typography, you can create effective and visually appealing designs.",
//       codeSample:
//         "/* CSS rules */\nbody {\n  font-family: Arial, sans-serif;\n}\n\nh1 {\n  font-size: 36px;\n  font-weight: bold;\n  color: #333;\n}\n\np {\n  font-size: 16px;\n  line-height: 1.5;\n  color: #666;\n}\n\n/* HTML */\n<h1>Welcome to my website</h1>\n<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris ac ultrices arcu. Donec sit amet sapien ligula. Sed bibendum luctus neque, eget consequat purus.</p>",
//       videos: [
//         {
//           url: "https://www.youtube.com/watch?v=n9q3D1XzVyU",
//           userId: mongoose.Types.ObjectId("64463307ff6e7f2060c3a6cb"),
//         },
//       ],
//       questions: [
//         {
//           question: "What is typography?",
//           answers: [
//             {
//               answer:
//                 "Typography is the art and technique of arranging type to make written language legible, readable, and appealing when displayed. It involves selecting typefaces, point sizes, line lengths, line-spacing, and letter-spacing, and adjusting the space between pairs of letters.",
//               userId: mongoose.Types.ObjectId("64463307ff6e7f2060c3a6cb"),
//               upvotes: 0,
//               downvotes: 0,
//               upvoters: [],
//               downvoters: [],
//             },
//           ],
//           userId: mongoose.Types.ObjectId("64463307ff6e7f2060c3a6cb"),
//           upvotes: 0,
//           downvotes: 0,
//         },
//         {
//           question: "Why is typography important in web design?",
//           answers: [
//             {
//               answer:
//                 "Typography is important in web design because it affects the readability, user experience, and overall aesthetic of a website. By choosing appropriate fonts, sizes, and spacing, you can create designs that are easy to read and visually appealing, which can improve user engagement and satisfaction.",
//               userId: mongoose.Types.ObjectId("64463307ff6e7f2060c3a6cb"),
//               upvotes: 0,
//               downvotes: 0,
//               upvoters: [],
//               downvoters: [],
//             },
//           ],
//           userId: mongoose.Types.ObjectId("64463307ff6e7f2060c3a6cb"),
//           upvotes: 0,
//           downvotes: 0,
//         },
//       ],
//     },
//     {
//       name: "Gradients in CSS",
//       description:
//         "Gradients in CSS allow you to create smooth color transitions between two or more colors. With CSS gradients, you can add depth and dimension to your designs, create backgrounds, and style borders and text.",
//       codeSample:
//         '/* CSS rules */\n.gradient {\n  background-image: linear-gradient(to bottom right, #4e54c8, #8f94fb);\n  width: 200px;\n  height: 200px;\n}\n\n/* HTML */\n<div class="gradient"></div>',
//       videos: [
//         {
//           url: "https://www.youtube.com/watch?v=uebKuCapaJY",
//           userId: mongoose.Types.ObjectId("64463307ff6e7f2060c3a6cb"),
//         },
//       ],
//       questions: [
//         {
//           question: "What are the types of gradients in CSS?",
//           answers: [
//             {
//               answer:
//                 "There are two types of gradients in CSS: linear and radial. Linear gradients create a smooth transition between two or more colors in a straight line, while radial gradients create a smooth transition between two or more colors in a circular or elliptical shape.",
//               userId: mongoose.Types.ObjectId("64463307ff6e7f2060c3a6cb"),
//               upvotes: 0,
//               downvotes: 0,
//               upvoters: [],
//               downvoters: [],
//             },
//           ],
//           userId: mongoose.Types.ObjectId("64463307ff6e7f2060c3a6cb"),
//           upvotes: 0,
//           downvotes: 0,
//         },
//         {
//           question: "How can you create a diagonal gradient in CSS?",
//           answers: [
//             {
//               answer:
//                 "To create a diagonal gradient in CSS, you can use the 'to bottom right' or 'to top left' syntax in the linear-gradient() function. This will create a gradient that starts at the top left corner and ends at the bottom right corner, or vice versa.",
//               userId: mongoose.Types.ObjectId("64463307ff6e7f2060c3a6cb"),
//               upvotes: 0,
//               downvotes: 0,
//               upvoters: [],
//               downvoters: [],
//             },
//           ],
//           userId: mongoose.Types.ObjectId("64463307ff6e7f2060c3a6cb"),
//           upvotes: 0,
//           downvotes: 0,
//         },
//       ],
//     },
//     {
//       name: "CSS Backgrounds",
//       description:
//         "In CSS, you can use backgrounds to style the background of an element, including its color, image, and position. By using different background properties, you can create interesting visual effects and add depth to your designs.",
//       codeSample:
//         "/* CSS rules */\n.container {\n  background-color: #f2f2f2;\n  background-image: url('background.jpg');\n  background-repeat: no-repeat;\n  background-position: center center;\n  background-size: cover;\n}\n\n/* HTML */\n<div class=\"container\">\n  <h1>Hello, world!</h1>\n  <p>This is a sample paragraph.</p>\n</div>",
//       videos: [
//         {
//           url: "https://www.youtube.com/watch?v=8MmWguaaGZo",
//           userId: mongoose.Types.ObjectId("64463307ff6e7f2060c3a6cb"),
//         },
//       ],
//       questions: [
//         {
//           question:
//             "What is the difference between background-color and background-image in CSS?",
//           answers: [
//             {
//               answer:
//                 "background-color sets the color of an element's background, while background-image sets an image to be used as the background. You can use both properties together to create a background that consists of both a color and an image.",
//               userId: mongoose.Types.ObjectId("64463307ff6e7f2060c3a6cb"),
//               upvotes: 0,
//               downvotes: 0,
//               upvoters: [],
//               downvoters: [],
//             },
//           ],
//           userId: mongoose.Types.ObjectId("64463307ff6e7f2060c3a6cb"),
//           upvotes: 0,
//           downvotes: 0,
//         },
//         {
//           question: "How do you position a background image in CSS?",
//           answers: [
//             {
//               answer:
//                 "You can use the background-position property to specify where the background image should be positioned relative to the element. For example, you can use 'background-position: center center' to center the image both horizontally and vertically.",
//               userId: mongoose.Types.ObjectId("64463307ff6e7f2060c3a6cb"),
//               upvotes: 0,
//               downvotes: 0,
//               upvoters: [],
//               downvoters: [],
//             },
//           ],
//           userId: mongoose.Types.ObjectId("64463307ff6e7f2060c3a6cb"),
//           upvotes: 0,
//           downvotes: 0,
//         },
//       ],
//     },
//     {
//       name: "CSS Transitions",
//       description:
//         "CSS transitions allow you to smoothly animate changes to an element's properties, such as color, size, and position, over a specified duration. By specifying the transition property and values, you can control the animation timing, delay, and easing function.",
//       codeSample:
//         "/* CSS */\n.box {\n  width: 100px;\n  height: 100px;\n  background-color: blue;\n  transition: background-color 1s ease-in-out;\n}\n\n/* JavaScript */\nconst box = document.querySelector('.box');\nbox.addEventListener('click', () => {\n  box.style.backgroundColor = 'red';\n});",
//       videos: [
//         {
//           url: "https://www.youtube.com/watch?v=ty7WnXrLj68",
//           userId: mongoose.Types.ObjectId("64463307ff6e7f2060c3a6cb"),
//         },
//       ],
//       questions: [
//         {
//           question: "What are the four transition properties in CSS?",
//           answers: [
//             {
//               answer:
//                 "The four transition properties in CSS are transition-property, transition-duration, transition-timing-function, and transition-delay.",
//               userId: mongoose.Types.ObjectId("64463307ff6e7f2060c3a6cb"),
//               upvotes: 0,
//               downvotes: 0,
//               upvoters: [],
//               downvoters: [],
//             },
//           ],
//           userId: mongoose.Types.ObjectId("64463307ff6e7f2060c3a6cb"),
//           upvotes: 0,
//           downvotes: 0,
//         },
//         {
//           question: "What is an easing function in CSS?",
//           answers: [
//             {
//               answer:
//                 "An easing function in CSS is a mathematical function that describes how the animation should progress over time. It determines the speed and acceleration of the animation.",
//               userId: mongoose.Types.ObjectId("64463307ff6e7f2060c3a6cb"),
//               upvotes: 0,
//               downvotes: 0,
//               upvoters: [],
//               downvoters: [],
//             },
//           ],
//           userId: mongoose.Types.ObjectId("64463307ff6e7f2060c3a6cb"),
//           upvotes: 0,
//           downvotes: 0,
//         },
//       ],
//     },
//     {
//       name: "Flexbox",
//       description:
//         "Flexbox is a powerful layout mode in CSS that allows you to create flexible and responsive layouts with ease. It provides a simple way to distribute space among elements in a container, and can be used to achieve a wide range of layout designs.",
//       codeSample:
//         '/* CSS rules */\n.container {\n  display: flex;\n  flex-direction: row;\n  justify-content: center;\n  align-items: center;\n}\n.box {\n  flex: 1;\n  height: 100px;\n  margin: 10px;\n  background-color: #ccc;\n}\n\n/* HTML */\n<div class="container">\n  <div class="box"></div>\n  <div class="box"></div>\n  <div class="box"></div>\n</div>',
//       videos: [
//         {
//           url: "https://www.youtube.com/watch?v=JJSoEo8JSnc",
//           userId: mongoose.Types.ObjectId("64463307ff6e7f2060c3a6cb"),
//         },
//       ],
//       questions: [
//         {
//           question: "What is the flexbox layout mode in CSS?",
//           answers: [
//             {
//               answer:
//                 "Flexbox is a powerful layout mode in CSS that allows you to create flexible and responsive layouts with ease. It provides a simple way to distribute space among elements in a container, and can be used to achieve a wide range of layout designs.",
//               userId: mongoose.Types.ObjectId("64463307ff6e7f2060c3a6cb"),
//               upvotes: 0,
//               downvotes: 0,
//               upvoters: [],
//               downvoters: [],
//             },
//           ],
//           userId: mongoose.Types.ObjectId("64463307ff6e7f2060c3a6cb"),
//           upvotes: 0,
//           downvotes: 0,
//         },
//         {
//           question: "What are some common use cases for flexbox?",
//           answers: [
//             {
//               answer:
//                 "Flexbox can be used for a wide range of layout designs, such as navigation menus, card layouts, form layouts, and even entire page layouts. It's particularly useful for responsive designs, as it allows you to easily change the layout of elements based on screen size and device type.",
//               userId: mongoose.Types.ObjectId("64463307ff6e7f2060c3a6cb"),
//               upvotes: 0,
//               downvotes: 0,
//               upvoters: [],
//               downvoters: [],
//             },
//           ],
//           userId: mongoose.Types.ObjectId("64463307ff6e7f2060c3a6cb"),
//           upvotes: 0,
//           downvotes: 0,
//         },
//       ],
//     },
//     {
//       name: "Grid Layout in CSS",
//       description:
//         "Grid layout is a powerful CSS layout system that allows you to create complex and flexible layouts on a webpage. By defining a grid container and grid items, you can easily arrange elements into rows and columns, and control their size, position, and alignment. With grid layout, you can create responsive and dynamic layouts that adapt to different screen sizes and devices.",
//       codeSample:
//         '/* CSS rules */\n.grid-container {\n  display: grid;\n  grid-template-columns: repeat(3, 1fr);\n  grid-template-rows: repeat(2, 1fr);\n  gap: 10px;\n}\n.grid-item {\n  background-color: #ccc;\n}\n\n/* HTML */\n<div class="grid-container">\n  <div class="grid-item"></div>\n  <div class="grid-item"></div>\n  <div class="grid-item"></div>\n  <div class="grid-item"></div>\n  <div class="grid-item"></div>\n  <div class="grid-item"></div>\n</div>',
//       videos: [
//         {
//           url: "https://www.youtube.com/watch?v=EFafSYg-PkI",
//           userId: mongoose.Types.ObjectId("64463307ff6e7f2060c3a6cb"),
//         },
//       ],
//       questions: [
//         {
//           question:
//             "What is the difference between grid layout and flexbox layout?",
//           answers: [
//             {
//               answer:
//                 "Grid layout is a two-dimensional layout system that arranges elements into rows and columns, whereas flexbox is a one-dimensional layout system that arranges elements in a single row or column. Grid layout is ideal for creating complex and grid-based layouts, whereas flexbox is better suited for simpler and more flexible layouts.",
//               userId: mongoose.Types.ObjectId("64463307ff6e7f2060c3a6cb"),
//               upvotes: 0,
//               downvotes: 0,
//               upvoters: [],
//               downvoters: [],
//             },
//           ],
//           userId: mongoose.Types.ObjectId("64463307ff6e7f2060c3a6cb"),
//           upvotes: 0,
//           downvotes: 0,
//         },
//         {
//           question: "How do you create a grid layout in CSS?",
//           answers: [
//             {
//               answer:
//                 "To create a grid layout in CSS, you first need to define a grid container using the display: grid; property. You can then define the grid columns and rows using the grid-template-columns and grid-template-rows properties, and specify the gap between the grid items using the gap property. Finally, you can place the grid items using the grid-column and grid-row properties.",
//               userId: mongoose.Types.ObjectId("64463307ff6e7f2060c3a6cb"),
//               upvotes: 0,
//               downvotes: 0,
//               upvoters: [],
//               downvoters: [],
//             },
//           ],
//           userId: mongoose.Types.ObjectId("64463307ff6e7f2060c3a6cb"),
//           upvotes: 0,
//           downvotes: 0,
//         },
//       ],
//     },
//     {
//       name: "Responsive Web Design",
//       description:
//         "Responsive web design is a design approach that aims to create websites that provide an optimal viewing experience across different devices, including desktops, laptops, tablets, and smartphones. By using responsive design techniques, designers and developers can ensure that their websites are easy to use and navigate, regardless of the device being used.",
//       codeSample:
//         '/* CSS rules */\n@media (max-width: 768px) {\n  .container {\n    flex-direction: column;\n  }\n}\n\n/* HTML */\n<div class="container">\n  <div class="box"></div>\n  <div class="box"></div>\n  <div class="box"></div>\n</div>',
//       videos: [
//         {
//           url: "https://www.youtube.com/watch?v=GY7Ps8fqGdc",
//           userId: mongoose.Types.ObjectId("64463307ff6e7f2060c3a6cb"),
//         },
//       ],
//       questions: [
//         {
//           question: "What is a responsive design?",
//           answers: [
//             {
//               answer:
//                 "Responsive design is a design approach that aims to create websites that provide an optimal viewing experience across different devices, including desktops, laptops, tablets, and smartphones. By using responsive design techniques, designers and developers can ensure that their websites are easy to use and navigate, regardless of the device being used.",
//               userId: mongoose.Types.ObjectId("64463307ff6e7f2060c3a6cb"),
//               upvotes: 0,
//               downvotes: 0,
//               upvoters: [],
//               downvoters: [],
//             },
//           ],
//           userId: mongoose.Types.ObjectId("64463307ff6e7f2060c3a6cb"),
//           upvotes: 0,
//           downvotes: 0,
//         },
//         {
//           question: "What are some responsive design techniques?",
//           answers: [
//             {
//               answer:
//                 "Some responsive design techniques include using media queries to adjust the layout and styling of a website based on the screen size of the device being used, using flexible grids and images that can scale to fit different screen sizes, and optimizing performance by reducing the file size of images and other resources.",
//               userId: mongoose.Types.ObjectId("64463307ff6e7f2060c3a6cb"),
//               upvotes: 0,
//               downvotes: 0,
//               upvoters: [],
//               downvoters: [],
//             },
//           ],
//           userId: mongoose.Types.ObjectId("64463307ff6e7f2060c3a6cb"),
//           upvotes: 0,
//           downvotes: 0,
//         },
//       ],
//     },
//     {
//       name: "CSS Animations",
//       description:
//         "CSS animations allow you to add visual effects to your web page elements. By animating the values of CSS properties over time, you can create dynamic and engaging user experiences that draw attention to important elements or convey information. CSS animations can be used for simple effects like hover states or more complex animations like loading spinners.",
//       codeSample:
//         '/* CSS rules */\n.box {\n  width: 100px;\n  height: 100px;\n  background-color: red;\n  animation: pulse 2s infinite;\n}\n\n@keyframes pulse {\n  0% {\n    transform: scale(1);\n  }\n  50% {\n    transform: scale(1.2);\n  }\n  100% {\n    transform: scale(1);\n  }\n}\n\n/* HTML */\n<div class="box"></div>',
//       videos: [
//         {
//           url: "https://www.youtube.com/watch?v=Ukg_U3CnJWI",
//           userId: mongoose.Types.ObjectId("64463307ff6e7f2060c3a6cb"),
//         },
//       ],
//       questions: [
//         {
//           question: "What are some benefits of using CSS animations?",
//           answers: [
//             {
//               answer:
//                 "CSS animations can make your website more engaging and dynamic, drawing the user's attention to important elements or conveying information in a fun and interactive way. They can also improve the user experience by making transitions and interactions smoother and more visually appealing.",
//               userId: mongoose.Types.ObjectId("64463307ff6e7f2060c3a6cb"),
//               upvotes: 0,
//               downvotes: 0,
//               upvoters: [],
//               downvoters: [],
//             },
//           ],
//           userId: mongoose.Types.ObjectId("64463307ff6e7f2060c3a6cb"),
//           upvotes: 0,
//           downvotes: 0,
//         },
//         {
//           question:
//             "What is the difference between CSS animations and transitions?",
//           answers: [
//             {
//               answer:
//                 "CSS animations are more complex and allow you to define multiple keyframes with different CSS property values. Transitions, on the other hand, only allow you to animate a single property from one value to another over a specified duration. CSS animations are more versatile and can be used for a wider range of effects, while transitions are best for simple animations like hover states.",
//               userId: mongoose.Types.ObjectId("64463307ff6e7f2060c3a6cb"),
//               upvotes: 0,
//               downvotes: 0,
//               upvoters: [],
//               downvoters: [],
//             },
//           ],
//           userId: mongoose.Types.ObjectId("64463307ff6e7f2060c3a6cb"),
//           upvotes: 0,
//           downvotes: 0,
//         },
//       ],
//     },
//   ],
// });
