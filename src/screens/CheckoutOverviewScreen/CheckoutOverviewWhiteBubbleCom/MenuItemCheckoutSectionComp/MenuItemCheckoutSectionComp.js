// All information, source code contained in this document 
// is the property of StrynDev Solutions, LLC. It must not 
// be transmitted to others without the written consent of 
// StrynDev Solutions. It must be returned to StrynDev Solutions 
// when its authorized use is terminated.

import React from 'react';

import MenuCheckoutCategorySectionComp from './MenuCheckoutCategorySectionComp/MenuCheckoutCategorySectionComp';
import styles from './MenuItemCheckoutSectionComp.module.css';


const MenuItemCheckoutSectionComp = (props) => {

    const menuInfoCategories = Object.keys(props.menuInfo);


    return (<div className={styles.menuItemCheckoutSectionCompContainer}>
        <div className={styles.menuItemHeaderRowContainer}>
            <span className={styles.menuTextStyles}>Menu Items</span>
        </div>
        {menuInfoCategories.map((category, index) => (
            <MenuCheckoutCategorySectionComp
                menuCategory={category}
                dataInfo={props.menuInfo[category]}
                key={index}></MenuCheckoutCategorySectionComp>
        ))}
    </div>);
}

export default MenuItemCheckoutSectionComp;