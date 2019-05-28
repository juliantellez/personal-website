import * as React from 'react';

import '../../Shared/Styles/global.css';
import ConwaysGameGameOfLife from '../ConwaysGameOfLife/ConwaysGameGameOfLife';

import * as styles from './root.css';

const Root = () => (
    <div className={styles.main}>
        <ConwaysGameGameOfLife />
    </div>
);

export default Root;
