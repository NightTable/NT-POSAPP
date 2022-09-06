// All information, source code contained in this document 
// is the property of StrynDev Solutions, LLC. It must not 
// be transmitted to others without the written consent of 
// StrynDev Solutions. It must be returned to StrynDev Solutions 
// when its authorized use is terminated.

import React from 'react';

import styles from './TransactionHorizComp.module.css';

const TransactionHorizComp = (props) => {

    return (<div className={styles.transactionHorizCompContainer}>
        <div className={styles.itemContainer}>
            <span className={styles.itemTextStyle}>bottle of champaigne</span>
        </div>
        <div className={styles.listPriceContainer}>
            <span className={styles.priceTextStyle}>$98.03</span>
        </div>
        <div className={styles.qtyContainer}>
            <span className={styles.qtyTextStyle}>2</span>
        </div>
    </div>)
}

export default TransactionHorizComp;