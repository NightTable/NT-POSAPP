// All information, source code contained in this document 
// is the property of StrynDev Solutions, LLC. It must not 
// be transmitted to others without the written consent of 
// StrynDev Solutions. It must be returned to StrynDev Solutions 
// when its authorized use is terminated.

import React from 'react';
import styles from './MenuItemSizeHorizComp.module.css';

const MenuItemSizeHorizComp = (props) => {

    return (<div className={styles.menuItemSizeCompContainer}>
        <div className={styles.innerInformationContainer}>
            <div className={styles.leftSideSizeInfoContainer}>
                <span className={styles.infoLabelStyle}>{props.menuItemSizeData.sizeLabel}</span>
            </div>
            <div className={styles.rightSidePriceInfoContainer}>
                <span className={styles.infoLabelStyle}>${props.menuItemSizeData.price}</span>
            </div>
        </div>
    </div>)
}

export default MenuItemSizeHorizComp;