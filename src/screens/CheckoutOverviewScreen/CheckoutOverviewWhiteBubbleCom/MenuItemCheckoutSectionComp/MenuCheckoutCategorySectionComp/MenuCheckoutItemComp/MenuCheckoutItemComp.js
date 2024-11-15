// All information, source code contained in this document 
// is the property of StrynDev Solutions, LLC. It must not 
// be transmitted to others without the written consent of 
// StrynDev Solutions. It must be returned to StrynDev Solutions 
// when its authorized use is terminated.

import React from 'react';

import styles from './MenuCheckoutItemComp.module.css';

const MenuCheckoutItemComp = (props) => {

    return (<div className={styles.menuCheckoutItemCompContainer}>
        <div className={styles.menuInfoContainer}>
            <span>{props.menuItemElement.name}</span>
        </div>
        <div className={styles.menuInfoContainer}>
            <span className={styles.menuPurpleTextStyle}>{props.menuItemElement.size}</span>
        </div>
        <div className={styles.menuInfoContainer}>
            <span className={styles.menuPurpleTextStyle}>${props.menuItemElement.price}</span>
        </div>
        <div className={styles.menuInfoContainer}>
            <span className={styles.menuPurpleTextStyle}>qty {props.menuItemElement.qty}</span>
        </div>
    </div>)
}

export default MenuCheckoutItemComp;