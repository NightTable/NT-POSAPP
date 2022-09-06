// All information, source code contained in this document 
// is the property of StrynDev Solutions, LLC. It must not 
// be transmitted to others without the written consent of 
// StrynDev Solutions. It must be returned to StrynDev Solutions 
// when its authorized use is terminated.

import React from 'react';

import styles from './PosTransactionHorizComp.module.css';

const PosTransactionHorizComp = (props) => {

    return (<div className={styles.posTransactionHorizCompContainer}>
        <div className={styles.purchaseNameContainer}>
            <span className={styles.purchaseNameTextStyle}>Amanda May</span>
        </div>
        <div className={styles.purchaseTypeContainer}>
            <span>Menu</span>
        </div>
        <div className={styles.chargedContainer}>
            <span>$392.1</span>
        </div>
        <div className={styles.dateContainer}>
            <span>fri 1-14-22 10:08 PM</span>
        </div>
    </div>)
}

export default PosTransactionHorizComp;