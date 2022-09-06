// All information, source code contained in this document 
// is the property of StrynDev Solutions, LLC. It must not 
// be transmitted to others without the written consent of 
// StrynDev Solutions. It must be returned to StrynDev Solutions 
// when its authorized use is terminated.

import React from 'react';

import styles from './MenuCheckoutCategorySectionComp.module.css';
import MenuCheckoutItemComp from './MenuCheckoutItemComp/MenuCheckoutItemComp';

const MenuCheckoutCategorySectionComp = (props) => {


    return (<div className={styles.menuCheckoutCategorySectionCompContainer}>
        <div className={styles.menuCategorySectionRowContainer}>
            <span className={styles.menuCategoryTextStyle}>{props.menuCategory}</span>
        </div>
        <div className={styles.menuItemListContainer}>
            {props.dataInfo.map((dataElement, index) => (
                <MenuCheckoutItemComp
                    menuItemElement={dataElement}
                    key={index}></MenuCheckoutItemComp>
            ))}
        </div>
    </div>)
}

export default MenuCheckoutCategorySectionComp;