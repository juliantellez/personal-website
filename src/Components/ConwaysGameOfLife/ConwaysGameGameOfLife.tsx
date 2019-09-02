import * as React from 'react';

import GameOfLife from './GameOfLife';
import Settings from './Settings/Settings';
import Body from '../Body/Body';

interface IState {
    gameOfLife?: GameOfLife;
}

class ConwaysGameOfLife extends React.Component {
    public state: IState = {};
    private containerRef: HTMLCanvasElement;
    private gameOfLife: GameOfLife;

    public componentDidMount(): void {
        this.gameOfLife = new GameOfLife(this.containerRef);
        this.gameOfLife.mount();
        this.setState({gameOfLife: this.gameOfLife});
    }

    public componentWillUnmount(): void {
        this.gameOfLife.unmount();
    }

    public render(): React.ReactElement {
        return (
            <Body>
                <canvas ref={this.setContainerRef} />
                {this.state.gameOfLife && (
                    <Settings gameOfLife={this.state.gameOfLife} />
                )}
            </Body>
        );
    }

    private setContainerRef = element => (this.containerRef = element);
}

export default ConwaysGameOfLife;
