// All information, source code contained in this document 
// is the property of StrynDev Solutions, LLC. It must not 
// be transmitted to others without the written consent of 
// StrynDev Solutions. It must be returned to StrynDev Solutions 
// when its authorized use is terminated.

import React from 'react';

import styles from './PosTransactionDetailOverviewScreen.module.css';
import TransactionHorizComp from './TransactionHorizComp/TransactionHorizComp';


import leftArrowGraphic from '../../assets/leftarrowpurple.svg';

const PosTransactionDetailOverviewScreen = (props) => {

    return (<div className={styles.posTransactionDetailScreenContainer}>
        <div className={styles.transactionOverviewTextContainer}>
            <span className={styles.transactionOverviewTextStyle}>Transaction Overview</span>
        </div>
        <div className={styles.whiteTransactionContainerBubble}>
            <div className={styles.upperInfoSection}>
                <div className={styles.upperFirstRowContainer}>
                    <div className={styles.leftSideRowContainer}>
                        <span className={styles.nameOnPurchaseTextStyle}>
                            Name on purchase:
                        </span>
                        <span className={styles.purchasePersonTextStyle}>
                            Amanda May
                        </span>
                    </div>
                    <div className={styles.rightSideRowContainer}>
                        <span className={styles.chargeTextStyle}>Charge: $392.1</span>
                    </div>
                </div>
                <div className={styles.upperSecondRowContainer}>
                    <div className={styles.purchaseTypeContainer}>
                        <span className={styles.purchaseTypeTextStyle}>Purchase Type: </span>
                        <span className={styles.menuTextTypeStyle}>Menu</span>
                    </div>
                </div>
                <div className={styles.upperThirdRowContainer}>
                    <div className={styles.tablePurchaseContainer}>
                        <span className={styles.associatedTablePurchaseTextStyle}>Associated Table Purchase</span>
                        <span className={styles.tablePurchaseNumberIdStyle}>039348474</span>
                    </div>
                </div>
            </div>
            <div className={styles.lowerInfoSection}>
                <div className={styles.categoryRowContainer}>
                    <div className={styles.itemHeadingContainer}>
                        <span className={styles.categoryTextStyle}>Items:</span>
                    </div>
                    <div className={styles.listPriceHeadingContainer}>
                        <span className={styles.categoryTextStyle}>List Price: </span>
                    </div>
                    <div className={styles.qtyHeadingContainer}>
                        <span className={styles.categoryTextStyle}>Qty: </span>
                    </div>
                </div>
                <TransactionHorizComp></TransactionHorizComp>
                <TransactionHorizComp></TransactionHorizComp>
            </div>
            <div className={styles.lowestFooterSectionContainer}>
                <div className={styles.backButtonContainer}>
                    <button className={styles.backButtonStyle}>
                        <img src={leftArrowGraphic} className={styles.leftArrowPicStyle}></img>
                        <span className={styles.backText}>back</span>
                    </button>
                </div>
            </div>
        </div>
    </div>)
}

export default PosTransactionDetailOverviewScreen;