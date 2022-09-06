// All information, source code contained in this document 
// is the property of StrynDev Solutions, LLC. It must not 
// be transmitted to others without the written consent of 
// StrynDev Solutions. It must be returned to StrynDev Solutions 
// when its authorized use is terminated.


import React from 'react';

import styles from './CheckoutOverviewScreen.module.css';
import CheckoutOverviewWhiteBubbleComp from './CheckoutOverviewWhiteBubbleCom/CheckoutOverviewWhiteBubbleComp';
import leftRedArrowPic from '../../assets/redarrownewleft.svg';

const CheckoutOverviewScreen = (props) => {

    let dynamicMaxBubbleHeightRemValue = 0;

    if (window.innerHeight > 1000) {
        dynamicMaxBubbleHeightRemValue = 50;
    } else {
        dynamicMaxBubbleHeightRemValue = 40;
    }

    return (<div className={styles.checkoutOverviewScreenContainer}>
        <div className={styles.innerExpandableOverviewInfoContainer}>
            <div className={styles.upperCheckoutHeaderContainer}>
                <div className={styles.checkoutLabelContainer}>
                    <span>Checkout</span>
                </div>
            </div>
            <div className={styles.middleCheckoutBodyContainer}>
                <CheckoutOverviewWhiteBubbleComp
                    maxBubbleHeightRemValue={dynamicMaxBubbleHeightRemValue}></CheckoutOverviewWhiteBubbleComp>
            </div>
            <div className={styles.lowerButtonFooterContainer}>
                <div className={styles.backButtonContainer}>
                    <button className={styles.backButtonStyle}>
                        <img className={styles.redLeftArrowPicStyle} src={leftRedArrowPic}></img>
                        <span>back</span>
                    </button>
                </div>
            </div>
        </div>
    </div>)
}

export default CheckoutOverviewScreen;