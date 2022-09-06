// All information, source code contained in this document 
// is the property of StrynDev Solutions, LLC. It must not 
// be transmitted to others without the written consent of 
// StrynDev Solutions. It must be returned to StrynDev Solutions 
// when its authorized use is terminated.

import React from 'react';

import styles from './WelcomeTouchScreen.module.css';

const WelcomeTouchScreen = (props) => {

    return (<div className={styles.welcomeTouchScreenContainer}>
        <div className={styles.innerPurpleBubbleContainer}>
            <div className={styles.nightTableHeaderRowContainer}>
                <span className={styles.nightTableHeaderTextStyle}>NightTable</span>
            </div>
            <div className={styles.continueButtonRowContainer}>
                <button className={styles.continueButtonStyle}>
                    <span className={styles.continueTextStyle}>continue</span>
                </button>
            </div>
        </div>
    </div>)
}

export default WelcomeTouchScreen;