import * as React from 'react';

import Card from '../../../../Components/Article';

import * as styles from './Content.css'

const Content = () => {
    return (
        <div className={styles.content}>
            <Card />
            <Card />
            <Card />
            <Card />
        </div>
    )
}

export default Content;
