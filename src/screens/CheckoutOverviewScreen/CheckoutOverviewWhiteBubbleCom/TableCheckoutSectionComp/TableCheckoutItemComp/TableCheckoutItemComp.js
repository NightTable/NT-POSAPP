// All information, source code contained in this document 
// is the property of StrynDev Solutions, LLC. It must not 
// be transmitted to others without the written consent of 
// StrynDev Solutions. It must be returned to StrynDev Solutions 
// when its authorized use is terminated.

import React from 'react';

import styles from './TableCheckoutItemComp.module.css';

const TableCheckoutItemComp = (props) => {

    return (<div className={styles.tableCheckoutItemCompContainer}>
        <div className={styles.tableCheckoutInfoContainer}>
            <span>{props.type}</span>
        </div>
        <div className={styles.tableCheckoutInfoContainer}>
            <span>fits {props.size}</span>
        </div>
        <div className={styles.tableCheckoutInfoContainer}>
            <span>${props.price}</span>
        </div>
        <div className={styles.tableCheckoutInfoContainer}>
            <span className={styles.tableQuantityCheckoutStyle}>qty {props.qty}</span>
        </div>
    </div>)
}

export default TableCheckoutItemComp;