// All information, source code contained in this document 
// is the property of StrynDev Solutions, LLC. It must not 
// be transmitted to others without the written consent of 
// StrynDev Solutions. It must be returned to StrynDev Solutions 
// when its authorized use is terminated.

import React from 'react';
import OuterMenuItemHorizComp from '../OuterMenuItemHorizComp/OuterMenuItemHorizComp';

import styles from './MenuCategorySectionComp.module.css';

const MenuCategorySectionComp = (props) => {


    return (<div className={styles.menuCategorySectionCompContainer}>
        <div className={styles.menuSectionHeaderRowContainer}>
            <span className={styles.menuSectionHeaderLabelStyle}>{props.categoryData.menuCategoryName}</span>
        </div>
        <div className={styles.menuSectionCategoryHeaderContainer}>
            <div className={styles.categoryItemAttributeContainer}>
                <span className={styles.itemLabelTextStyle}>item</span>
            </div>
            <div className={styles.categoryAttributeContainer}>
                <span className={styles.itemLabelTextStyle}>sizes</span>
            </div>
            <div className={styles.categoryAttributeContainer}>
                <span className={styles.itemLabelTextStyle}>price</span>
            </div>
        </div>
        <div className={styles.menuSectionItemListContainer}>
            {props.categoryData.menuItems.map((menuItem, index) => (
                <OuterMenuItemHorizComp
                    key={index}
                    menuItemData={menuItem}></OuterMenuItemHorizComp>
            ))}
        </div>
    </div>)
}

export default MenuCategorySectionComp;