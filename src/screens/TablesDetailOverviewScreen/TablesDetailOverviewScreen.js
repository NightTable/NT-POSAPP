// All information, source code contained in this document 
// is the property of StrynDev Solutions, LLC. It must not 
// be transmitted to others without the written consent of 
// StrynDev Solutions. It must be returned to StrynDev Solutions 
// when its authorized use is terminated.

import React from 'react';
import TablesDetailMainBubbleComp from '../../components/TablesDetailOverviewScreen/TablesDetailMainBubbleComp/TablesDetailMainBubbleComp';

import styles from './TablesDetailOverviewScreen.module.css';

import redLeftArrowGraphic from '../../assets/redleftarrow.svg';
import greenRightArrowGraphic from '../../assets/greenarrowright.svg';

const TablesDetailOverviewScreen = (props) => {

    return (<div className={styles.tableDetailOverviewScreenContainer}>
        <div className={styles.upperHorizontalRowContainer}>
            <div className={styles.tablePaymentDetailContainer}>
                <span>Table Payment Details</span>
            </div>
            <div className={styles.cartButtonContainer}>
                <button className={styles.cartButtonStyle}>Cart (2)</button>
            </div>
        </div>
        <div className={styles.mainBodyContainer}>
            <TablesDetailMainBubbleComp></TablesDetailMainBubbleComp>
        </div>
        <div className={styles.lowerFooterButtonContainer}>
            <div className={styles.lowerButtonContainer}>
                <button className={styles.lowerButtonStyleBack}>
                    <img 
                    className={styles.arrowGraphicStyle}
                    src={redLeftArrowGraphic}>
                    </img>
                    <span>back</span>
                </button>
            </div>
            <div className={styles.lowerButtonContainer}>
                <button className={styles.lowerButtonStyleCheckout}>
                    <span>checkout</span>
                    <img 
                        className={styles.arrowGraphicStyle}
                        src={greenRightArrowGraphic}></img>
                </button>
            </div>
        </div>
    </div>)
}

export default TablesDetailOverviewScreen;