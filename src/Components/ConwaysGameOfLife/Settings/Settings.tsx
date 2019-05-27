import * as React from 'react';
import GameOfLife from '../GameOfLife';

import * as styles from './settings.css';

interface ISettings {
    gameOfLife: GameOfLife
}

interface IState {
    rate?: number;
    resolution?: number;
    resumeToggle ?: string;
    generation?: number;
}

class Settings extends React.Component<ISettings> {

    state: IState = {
        generation: 1,
        resumeToggle: 'resume',
    }

    componentWillMount() {
        this.onResumeToggle()
        this.setGenerationChange()
        this.setState({
            rate: this.props.gameOfLife.rules.rate
        })
    }

    setGenerationChange () {
        this.props.gameOfLife.rules.producers.generation$
            .subscribe(generation => {
                this.setState({generation})
            })
    }

    onResolutionChange(event) {
        event.preventDefault();
        const {value} = event.currentTarget

        this.props.gameOfLife.ui.setResolution(value);

        this.setState({
            resolution: value,
        })
    }

    onRateChange(event) {
        event.preventDefault();
        const {value} = event.currentTarget

        this.props.gameOfLife.rules.setRate(value);
        this.props.gameOfLife.rules.producers.start$.next();

        this.setState({
            rate: value,
            resumeToggle: 'pause'
        })
    }

    onResume() {
        this.props.gameOfLife.rules.producers.start$.next();
    }

    onPause() {
        this.props.gameOfLife.rules.producers.stop$.next();
    }

    onResumeToggle() {
        this.setState((prev: IState) => {
            const {resumeToggle} = prev
            let nextResumeToggle

            if (resumeToggle === 'resume') {
                nextResumeToggle = 'pause'
                this.onResume()
            } else {
                nextResumeToggle = 'resume'
                this.onPause()
            }

            return {
                resumeToggle: nextResumeToggle,
            }
        })
    }

    render() {
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
                        onChange={this.onRateChange.bind(this)} />
                    <div>Rate: {this.state.rate}ms</div>
                </div>

                <button className={styles.button} onClick={this.onResumeToggle.bind(this)}>{this.state.resumeToggle}</button>
            </div>
        )
    }
}

export default Settings;
