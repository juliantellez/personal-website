import * as React from 'react';

import GameOfLife from '../GameOfLife';

import * as styles from './settings.css';

interface ISettings {
    gameOfLife: GameOfLife;
}

interface IState {
    rate?: number;
    resolution?: number;
    resumeToggle?: string;
    generation?: number;
}

class Settings extends React.Component<ISettings> {
    public state: IState = {
        generation: 1,
        resumeToggle: 'resume'
    };

    public componentWillMount(): void {
        this.onResumeToggle();
        this.setGenerationChange();
        this.setState({
            rate: this.props.gameOfLife.rules.rate
        });
    }

    public setGenerationChange(): void {
        this.props.gameOfLife.rules.producers.generation$.subscribe(
            generation => {
                this.setState({generation});
            }
        );
    }

    public onResolutionChange(event): void {
        event.preventDefault();
        const {value} = event.currentTarget;

        this.props.gameOfLife.ui.setResolution(value);

        this.setState({
            resolution: value
        });
    }

    public onRateChange(event): void {
        event.preventDefault();
        const {value} = event.currentTarget;

        this.props.gameOfLife.rules.setRate(value);
        this.props.gameOfLife.rules.producers.start$.next();

        this.setState({
            rate: value,
            resumeToggle: 'pause'
        });
    }

    public onResume(): void {
        this.props.gameOfLife.rules.producers.start$.next();
    }

    public onPause(): void {
        this.props.gameOfLife.rules.producers.stop$.next();
    }

    public onResumeToggle(): void {
        this.setState((prev: IState) => {
            const {resumeToggle} = prev;
            let nextResumeToggle;

            if (resumeToggle === 'resume') {
                nextResumeToggle = 'pause';
                this.onResume();
            } else {
                nextResumeToggle = 'resume';
                this.onPause();
            }

            return {
                resumeToggle: nextResumeToggle
            };
        });
    }

    public render(): React.ReactElement {
        return (
            <div className={styles.main}>
                <div>Generation: {this.state.generation}</div>
                {/* <div>
                    <input
                        type="range"
                        min="10"
                        max="100"
                        onChange={this.onResolutionChange.bind(this)} />
                    <div>Resolution: {this.state.resolution}</div>
                </div> */}

                <div>
                    <input
                        type="range"
                        min="10"
                        max="500"
                        onChange={this.onRateChange.bind(this)}
                    />
                    <div>Rate: {this.state.rate}ms</div>
                </div>

                <button
                    className={styles.button}
                    onClick={this.onResumeToggle.bind(this)}
                >
                    {this.state.resumeToggle}
                </button>
            </div>
        );
    }
}

export default Settings;
