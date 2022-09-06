// All information, source code contained in this document 
// is the property of StrynDev Solutions, LLC. It must not 
// be transmitted to others without the written consent of 
// StrynDev Solutions. It must be returned to StrynDev Solutions 
// when its authorized use is terminated.

import React from 'react';
import MenuDisplayTemplateComp from '../../components/MenuSectionOverviewScreen/MenuDisplayTemplateComp/MenuDisplayTemplateComp';
import styles from './MenuSectionOverviewScreen.module.css';

import greenRightArrowPic from '../../assets/greenarrowright.svg';

const MenuSectionOverviewScreen = (props) => {


    return (<div className={styles.menuSectionOverviewScreenContainer}>
        <div className={styles.menuSectionOverviewHeaderContainer}>
            <div className={styles.smallLeftOuterContainer}>
                <span className={styles.availableMenuItemLabel}>
                    Available Menu Items
                </span>
            </div>
            <div className={styles.middleButtonContainer}>
                <button className={styles.menuButtonHeaderStyleSelected}>Wine</button>
                <button className={styles.menuButtonHeaderStyle}>Beer</button>
                <button className={styles.menuButtonHeaderStyle}>Snacks</button>
            </div>
            <div className={styles.smallRightOuterContainer}>
                <button className={styles.upperRightCartButtonStyle}>Cart (2)</button>
            </div>
        </div>
        <div className={styles.menuSectionOverviewBodyContainer}>
            <div className={styles.innerBubbleBodyContainer}>
                <MenuDisplayTemplateComp></MenuDisplayTemplateComp>
            </div>
        </div>
        <div className={styles.menuSectionFooterOverviewContainer}>
            <div className={styles.paymentInfoButtonContainer}>
                <button className={styles.paymentInfoButtonStyle}>
                    <span>payment info</span>
                    <img className={styles.greenRightArrowStyle} src={greenRightArrowPic}></img>
                </button>
            </div>
        </div>
    </div>)


}

export default MenuSectionOverviewScreen;