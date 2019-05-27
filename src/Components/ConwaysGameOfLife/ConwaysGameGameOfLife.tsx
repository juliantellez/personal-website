import * as React from 'react';

import GameOfLife from './GameOfLife'
import Settings from './Settings/Settings';

interface IState {
    gameOfLife ?: GameOfLife;
}

class ConwaysGameOfLife extends React.Component {
    private containerRef: HTMLCanvasElement;
    private gameOfLife: GameOfLife;

    state: IState = {}

    componentDidMount() {
        this.gameOfLife = new GameOfLife(this.containerRef)
        this.gameOfLife.mount();
        this.setState({gameOfLife: this.gameOfLife})
    }

    componentWillUnmount() {
        this.gameOfLife.unmount();
    }

    private setContainerRef = element => (this.containerRef = element);

    render() {
        return (
            <React.Fragment>
                <canvas ref={this.setContainerRef} />
                {this.state.gameOfLife && <Settings gameOfLife={this.state.gameOfLife} />}
            </React.Fragment>
        )
    }
}

export default ConwaysGameOfLife;
