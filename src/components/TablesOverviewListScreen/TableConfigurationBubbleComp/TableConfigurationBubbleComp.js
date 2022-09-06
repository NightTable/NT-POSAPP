// All information, source code contained in this document 
// is the property of StrynDev Solutions, LLC. It must not 
// be transmitted to others without the written consent of 
// StrynDev Solutions. It must be returned to StrynDev Solutions 
// when its authorized use is terminated.

import React from 'react';

import styles from './TableConfigurationBubbleComp.module.css';

const TableConfigurationBubbleComp = (props) => {


    return (<div className={styles.tableConfigurationBubbleCompContainer}>
        <div className={styles.leftRowComponent}>
            <span>Floor</span>
            <span>$800</span>
            <span>Fits 8</span>
        </div>
        <div className={styles.rightRowComponent}>
            <span className={styles.availabilityNumberStyle}>8</span>
            <span className={styles.availabilityTextLabelStyle}>available</span>
        </div>
    </div>)
}

export default TableConfigurationBubbleComp;