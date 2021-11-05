import React, { useEffect } from "react";
import Prism from "prismjs";

Prism.manual = true;
const PrismBlock = () => {
  useEffect(() => {
    Prism.highlightAll();
  }, []);

  return (
    <pre>
      <code className="language-jsx">{`
    import React, { Component, createRef } from "react";
  class PrismCode extends Component {
    render() {
      return (
        <div>Test test</div>
      );
    }
  }
  
  export default PrismCode;
  `}</code>
    </pre>
  );
};

export default PrismBlock;