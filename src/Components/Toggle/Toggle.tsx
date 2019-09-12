import * as React from 'react';

import * as styles from './toggle.scss';

class Toggle extends React.Component {
    node = document.documentElement;

    state = {
        checked: true
    }

    componentWillMount() {
        const currentTheme = this.node.getAttribute('data-theme');
        this.setState({
            checked: currentTheme === 'dark' ? false : true,
        })
    }

    onClick = () => {
        const currentTheme = this.node.getAttribute('data-theme');
        const nextTheme = currentTheme === 'dark' ? 'light' : 'dark';
        this.node.setAttribute('data-theme', nextTheme);
    };

    render() {
        return (
            <div>
                <input
                    type="checkbox"
                    id="toggle"
                    defaultChecked={this.state.checked}
                    className={styles.checkbox}
                    onClick={this.onClick}
                />
                <label htmlFor="toggle" className={styles.label} />
            </div>
        );
    }
}

export default Toggle;
