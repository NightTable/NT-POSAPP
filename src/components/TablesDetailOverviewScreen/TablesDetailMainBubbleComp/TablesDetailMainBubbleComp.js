// All information, source code contained in this document 
// is the property of StrynDev Solutions, LLC. It must not 
// be transmitted to others without the written consent of 
// StrynDev Solutions. It must be returned to StrynDev Solutions 
// when its authorized use is terminated.

import React from 'react';

import styles from './TablesDetailMainBubbleComp.module.css';

const TablesDetailMainBubbleComp = (props) => {

    return (<div className={styles.tablesDetailMainBubbleCompContainer}>
        <div className={styles.upperWhiteBubbleInfoContainer}>
            <div className={styles.leftTableInfoContainer}>
                <div className={styles.innerTableInfoRowContainer}>
                    <span className={styles.labelInputStyle}>Type:</span>
                    <span className={styles.boldLabelValueStyle}>floor</span>
                </div>
                <div className={styles.innerTableInfoRowContainer}>
                    <span className={styles.labelInputStyle}>Price:</span>
                    <span className={styles.boldLabelValueStyle}>$800</span>
                </div>
                <div className={styles.innerTableInfoRowContainer}>
                    <span className={styles.labelInputStyle}>Fits:</span>
                    <span className={styles.boldLabelValueStyle}>8</span>
                </div>
                <div className={styles.innerTableInfoRowContainer}>
                    <span className={styles.labelInputStyle}>Quantity:</span>
                    <div className={styles.buttonControlContainer}>
                        <button className={styles.plusMinusButtonStyle}>
                            <span>-</span>
                        </button>
                        <span className={styles.numberCountValueStyle}>1</span>
                        <button className={styles.plusMinusButtonStyle}>
                            <span>+</span>
                        </button>
                    </div>
                </div>
            </div>
            <div className={styles.rightAvailabilityContainer}>
                <span>8 available</span>
            </div>
        </div>
        <div className={styles.lowerCartButtonRowContainer}>
            <div className={styles.addToCartButtonContainer}>
                <button className={styles.addToCartButtonStyle}>add to cart</button>
            </div>
        </div>
    </div>)
}

export default TablesDetailMainBubbleComp;