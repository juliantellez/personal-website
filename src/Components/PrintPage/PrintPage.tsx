import * as React from 'react';

import Printer from '../Icons/Printer';

import * as styles from './PrintPage.scss';

const onClick = () => {
    window.print();
};

const PrintPage = () => (
    <div className={styles.print} onClick={onClick}>
        <Printer />
    </div>
);

export default PrintPage;
