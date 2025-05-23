# React

Practicing React with namaste react <hr>

# parcel ⚡️

- Dev build
- local server
- HMR(reloading and updating the website asa we save the file)
- uses file watching algo
- caching
- image optimization
- minification
- bundling
- compressing
- consistent hashing
- differential bundling (supports old browser)
- diagnostic
- error handling
- HTTPS
- Tree Shaking - removes unused codes for us
- Diff dev and prod bundles
- Transpiling the code (Babel)

# React Hooks

(Normal JS utility functions)

- useState() React keeps UI and Data layer in sync
  - Whenever a state variable changes , react re-renders its components.
- useEffect()
  - when no dependency array - useEffect will be called after every render.
  - when dependency array is empty - useEffect will be called after initial render only(just once).
  - dependency array is filled - [btnName] so useEffect will be called , everytime btnName is changed.

# Reconciliation Algorithm ( React fiber )

- The reconciliation algorithm is a core feature of React that updates the user interface (UI) efficiently
- How it works

- Render virtual DOM: When a component changes, React creates a new virtual DOM tree.
- Diffing: React compares the new virtual DOM tree to the previous one to find differences.
- Update strategy: React determines the most efficient way to update the actual DOM.
- Update DOM: React updates the actual DOM to reflect the differences.
- Ensure updated UI: React ensures that the user sees the updated UI

# Virtual-DOM

- A virtual DOM (VDOM) is a lightweight JavaScript representation of a webpage's Document Object Model (DOM).
- it is a Object (js).

# Diff Algo

- it compares previous virtual DOM and updated virtual DOM
- and then re renders.

# Routing in web apps

- Client side routing(its a single page application , it loads other routes)
- Server side routing(it send api req to server then data comes then page reloads)

# Class components LIFECYCLE

- 1. Parent Constructor is called
- 2. Parent Render is called
- 3. Child Constructor is called
- 4. Child Render is called
     <<DOM UPDATED IN >>
- 5. Child ComponentDidMount is called
- 6. Parent ComponentDidMount is called
     ComponentDidMount (used for API calls).

- MULTIPLE CHILDS
- 1. Parent Constructor is called
- 2. Parent Render is called
- 3. Child1 Constructor is called
- 4. Child1 Render is called
- 5. Child2 Constructor is called
- 6. Child2 Render is called
     <<DOM UPDATED IN SINGLE BATCH>>
- 7. Child1 ComponentDidMount is called
- 8. Child2 ComponentDidMount is called
- 9. Parent ComponentDidMount is called
     // React batches up the render phase of multiple childrens then goes in the DOM updating and ComponentDidMOunt process.(coz DOM manipulation is a expensive task)

# REACT LIFECYCLE DIAGRAM

- MOUNTING CYCLE

- Constructor is called (dummy data)
- Render is called(dummy data)
  <<DOM UPDATED dummy data rendered>>
- ComponentDidMount is called
  <<API CALL>>
  <<this.set.state>>

- UPDATE CYCLE

- render (API data)
  <<DOM UPDATED api data rendered>>
- ComponentDidUpdate

- UNMOUNTING CYCLE

- ComponentWillUnmount will be called (when component is gone from that page). It does clearInterval after unmounting.
- ComponentDidUpdate does what when we need to render after some state variable changes , similar to dependency array in useEffect.

# Custom Hooks

- it is used to increase modularity on code
- helping us to test our code better and increasing the efficiency
- it is created normally as another js functio inside utils folder
- to make our program follow SINGLE RESPONSIBILITY PRINCIPLE.

# Optimization

- we do chunking /code splitting / lazy loading for optimization our app
- chunking means bundling in multiple files
- we use this by named importing lazy and suspense modules from react.
- and we just import those components with lazy method.
  .
- native CSS
- SCSS
- inline CSS
- Component libraries - materialUI , BaseUI , AntUI
- Styled Components
  .
- # Tailwind CSS Framework
- (PROS)
- css on the go (same file)
- Reusability
- less bundle size
- Flexible UI(customizable)
- (CONS)
- not readable (big components)

# props drilling :

passing data (props) from a parent component down through multiple levels of nested components, even when intermediate components don't directly use that data, to reach a deeply nested child.

# React Context

React Context is a way to share state or data across multiple components in a React application without having to pass props down manually at every level of the component tree.

# Redux

Redux is a state management library for JavaScript apps, commonly used with React. It helps manage and centralize application state in a predictable way.

# Redux Toolkit

Redux Toolkit (RTK) is the official, recommended way to write Redux logic.
It removes a lot of boilerplate code and simplifies common patterns.

Think of it as Redux but faster, cleaner, and more developer-friendly.

-When u click on a button it dispatches an ACTION which calls REDUCER function which updates the SLICE of redux STORE (write to store)

-SELECTOR subscribes to the store and gets the data from store (read from store )

# jest -

Jest is a JavaScript testing framework that is often used for testing React applications,
