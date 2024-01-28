import React from 'react'
import '../Components/style.css'

function Description() {
  return (
    <div className='outlet-course' style={{height:"100%"}}>
      <div>
        <h3>Description:</h3>
        <p>
          Node.js is an open-source, cross-platform JavaScript runtime
          environment that executes JavaScript code outside of a web browser. It
          allows developers to use JavaScript for server-side scripting and
          enables the development of scalable and high-performance network
          applications.
        </p>
        <p>
          {" "}
          Here are some key aspects of Node.js: JavaScript Runtime: Node.js is
          built on the V8 JavaScript runtime engine, which is developed by
          Google for use in the Chrome browser. It compiles JavaScript code into
          machine code for faster execution. The style attribute of each button
          is conditionally set based on the activeComponent. If the button
          corresponds to the active component, its background color is set to
          green; otherwise, it uses the default background color ('inherit')
        </p>
        <div>
          <h3>Curriculum:</h3>
          <p>
            The Outlet component is responsible for rendering the appropriate
            component based on the value of componentToShow. The App component
            manages the state (currentComponent) and provides a way to change
            it, which triggers the dynamic rendering of components in the
            outlet. This pattern allows you to keep your conditional rendering
            logic centralized in one place (Outlet component), making your code
            more maintainable and modular.
          </p>
        </div>
    
      </div>
    </div>
  );
}

export default Description
