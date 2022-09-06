// All information, source code contained in this document 
// is the property of StrynDev Solutions, LLC. It must not 
// be transmitted to others without the written consent of 
// StrynDev Solutions. It must be returned to StrynDev Solutions 
// when its authorized use is terminated.

import React from 'react';

import TableConfigurationBubbleComp from '../../components/TablesOverviewListScreen/TableConfigurationBubbleComp/TableConfigurationBubbleComp';
import styles from './TablesOverviewListScreen.module.css';

import whiteCurve from '../../assets/scalablevectorwhitecurveimg.svg';

import leftArrowPurplePic from '../../assets/leftarrowpurple.svg';
import rightArrowPurplePic from '../../assets/rightarrowpurple.svg';
import rightArrowGreenPic from '../../assets/greenarrowright.svg';

const TablesOverviewListScreen = (props) => {

    return (<div className={styles.tablesOverviewListScreenContainer}>
        <img src={whiteCurve} className={styles.whiteCurveImage}>
        
        </img>
        <div className={styles.tablesOverviewHeaderContainer}>
            <div className={styles.availableTableTypeLabelContainer}>
                <span>Available Table Types</span>
            </div>
            <div className={styles.cartButtonContainer}>
                <button className={styles.cartButtonStyle}>Cart</button>
            </div>
        </div>
        <div className={styles.upperTableConfigRowContainer}>
            <TableConfigurationBubbleComp></TableConfigurationBubbleComp>
            <TableConfigurationBubbleComp></TableConfigurationBubbleComp>
            <TableConfigurationBubbleComp></TableConfigurationBubbleComp>
        </div>
        <div className={styles.lowerTableConfigRowContainer}>
            <TableConfigurationBubbleComp></TableConfigurationBubbleComp>
        </div>
        <div className={styles.lowerFooterContainer}>
            <div className={styles.lowerButtonContainer}>
                <button className={styles.continueButtonStyle}>
                    <span className={styles.continueLabelText}>continue</span>
                    <img className={styles.rightGreenArrowPic} src={rightArrowGreenPic}></img>
                </button>
            </div>
        </div>
    </div>)
}

export default TablesOverviewListScreen;