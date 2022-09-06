// All information, source code contained in this document 
// is the property of StrynDev Solutions, LLC. It must not 
// be transmitted to others without the written consent of 
// StrynDev Solutions. It must be returned to StrynDev Solutions 
// when its authorized use is terminated.

import React from 'react';

import styles from './MenuItemDisplayTemplate.module.css';

const MenuItemDisplayTemplate = (props) => {


    return (<div className={props.selected ? styles.menuItemDisplayTemplateContainerSelected : styles.menuItemDisplayTemplateContainer}>
        <div className={styles.menuItemNameContainer}>
            <span className={styles.menuItemNameTextStyle}>bottle of champaigne</span>
        </div>
        <div className={props.selected ? styles.menuItemSizeContainerSelected : styles.menuItemSizeContainer }>
            <span>sm</span>
        </div>
        <div className={props.selected ? styles.menuItemPriceContainerSelected : styles.menuItemPriceContainer}>
            <span>$32</span>
        </div>
        <div className={styles.menuItemQuantityContainer}>
            <div className={styles.buttonControlContainer}>
                <div className={styles.minusButtonContainer}>
                    <span className={props.selected ? styles.minusButtonTextStyleSelected : styles.minusButtonTextStyle}>-</span>
                </div> 
                <div className={styles.numberLabelContainer}>
                    <span className={ props.selected ? styles.numberLabelTextStyleSelected : styles.numberLabelTextStyle }>0</span>
                </div>
                <div className={styles.plusButtonContainer}>
                    <span className={ props.selected ? styles.plusButtonTextStyleSelected : styles.plusButtonTextStyle}>+</span>
                </div>
            </div>
        </div>
    </div>)
}

export default MenuItemDisplayTemplate;