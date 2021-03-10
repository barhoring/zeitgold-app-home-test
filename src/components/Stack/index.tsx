import * as React from "react";

const SEARCH_LINK = "https://codesandbox.io/s/94xlp?file=/demo.js";
const CREATE_APOLLO_APP_LINK =
  "https://www.npmjs.com/package/create-apollo-app";

const App = () => (
  <>
    <h2>Stack & Reference </h2>
    <p>
      <a href={SEARCH_LINK}>Search Input</a>
    </p>
    <p>
      <a href={CREATE_APOLLO_APP_LINK}>Boilerplate React + Apollo</a>
    </p>
  </>
);

export default App;
