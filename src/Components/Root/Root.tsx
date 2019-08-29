import * as React from 'react';

import '../../Shared/Styles/global.css';
import Home from '../../Pages/Home/Home';

import * as styles from './root.css';

const Root = () => (
    <div className={styles.main}>
        <Home />
    </div>
);

export default Root;
