# React

Practicing React with namaste react <hr>

#parcel ⚡️

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

-

-

-

-

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
