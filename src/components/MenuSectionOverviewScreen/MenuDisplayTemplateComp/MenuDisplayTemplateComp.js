// All information, source code contained in this document 
// is the property of StrynDev Solutions, LLC. It must not 
// be transmitted to others without the written consent of 
// StrynDev Solutions. It must be returned to StrynDev Solutions 
// when its authorized use is terminated.

import React from 'react';

import styles from './MenuDisplayTemplateComp.module.css';
import MenuItemDisplayTemplate from './MenuItemDisplayTemplate/MenuItemDisplayTemplate';

const MenuDisplayTemplateComp = (props) => {

    return (<div className={styles.menuDisplayTemplateCompContainer}>
        <div className={styles.titleRowHeadingContainer}>
            <span className={styles.headerLabelStyle}>Wine</span>
        </div>
        <div className={styles.categoryRowHeaderContainer}>
            <div className={styles.nameCategoryContainerStyle}>
                <span>Name: </span>
            </div>
            <div className={styles.sizeCategoryContainerStyle}>
                <span>Size: </span>
            </div>
            <div className={styles.priceCategoryContainerStyle}>
                <span>Price: </span>
            </div>
            <div className={styles.quantityCategoryContainerStyle}>
                <span>Qty: </span>
            </div>
        </div>
        <div className={styles.outerItemListContainer}>
            <div className={styles.innerItemListContainer}>
                <MenuItemDisplayTemplate></MenuItemDisplayTemplate>
                <MenuItemDisplayTemplate selected></MenuItemDisplayTemplate>
                <MenuItemDisplayTemplate></MenuItemDisplayTemplate>
                <MenuItemDisplayTemplate></MenuItemDisplayTemplate>
            </div>
        </div>
        <div className={styles.menuSectionFooterRowContainer}>
            <div className={styles.toggleFullMenuButtonContainer}>
                <button className={styles.lowerButtonStyle}>toggle full menu</button>
            </div> 
            <div className={styles.addToCartButtonContainer}>
                <button className={styles.lowerButtonStyle}>add to cart</button>
            </div>

        </div>
    </div>)
}

export default MenuDisplayTemplateComp;