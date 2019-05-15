import * as React from "react";

import init from './init';

class ConwaysGameOfLife extends React.Component {
    private containerRef: HTMLDivElement;

  componentDidMount() {
    init(this.containerRef)
  }

  private setContainerRef = element => (this.containerRef = element);

  render() {
    return <canvas ref={this.setContainerRef} />;
  }
}

export default ConwaysGameOfLife;
