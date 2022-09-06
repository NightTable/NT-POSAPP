// All information, source code contained in this document 
// is the property of StrynDev Solutions, LLC. It must not 
// be transmitted to others without the written consent of 
// StrynDev Solutions. It must be returned to StrynDev Solutions 
// when its authorized use is terminated.

import React from 'react';
import PosTransactionHorizComp from './PosTransactionHorizComp/PosTransactionHorizComp';

import styles from './PosTransactionListOverviewScreen.module.css';

const PosTransactionListOverviewScreen = (props) => {

    return (<div className={styles.posTransactionOverviewListScreenContainer}>
        <div className={styles.upperHeaderRowContainer}>
            <div className={styles.pastTransactionTextContainer}>
                <span className={styles.pastTransactionTextStyle}>Past Transactions: </span>
            </div>
            <div className={styles.upperRightPosButtonContainer}>
                <button className={styles.posButtonStyleSelected}>
                    <span>Local POS</span>
                </button>
                <button className={styles.posButtonStyle}>
                    <span>Global</span>
                </button>
            </div>
        </div>
        <div className={styles.categoryHeaderRowContainer}>
            <div className={styles.purchaseNameContainer}>
                <span>Name on purchase</span>
            </div>
            <div className={styles.purchaseTypeContainer}>
                <span>Purchase Type</span>
            </div>
            <div className={styles.chargedContainer}>
                <span>Charged</span>
            </div>
            <div className={styles.dateContainer}>
                <span>Date</span>
            </div>
        </div>
        <PosTransactionHorizComp></PosTransactionHorizComp>
        <PosTransactionHorizComp></PosTransactionHorizComp>
        <PosTransactionHorizComp></PosTransactionHorizComp>
        <PosTransactionHorizComp></PosTransactionHorizComp>
        <PosTransactionHorizComp></PosTransactionHorizComp>
    </div>)
}

export default PosTransactionListOverviewScreen;