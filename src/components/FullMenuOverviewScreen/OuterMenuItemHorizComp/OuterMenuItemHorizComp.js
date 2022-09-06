// All information, source code contained in this document 
// is the property of StrynDev Solutions, LLC. It must not 
// be transmitted to others without the written consent of 
// StrynDev Solutions. It must be returned to StrynDev Solutions 
// when its authorized use is terminated.

import React, { useState } from 'react';
import styles from './OuterMenuItemHorizComp.module.css';

import InnerMenuItemHorizComp from './InnerMenuItemHorizComp/InnerMenuItemHorizComp';
import MenuItemSizeHorizComp from './MenuItemSizeHorizComp/MenuItemSizeHorizComp';

const OuterMenuItemHorizComp = (props) => {

    const [ elementSelected, setElementSelected ] = useState(false);

    const handleOuterMenutItemClick = () => {

       setElementSelected((state) => !state);

    }

    let menuItemComponentRender = null;

    if (elementSelected) {

        menuItemComponentRender = (
            <div className={styles.menuItemSizeListContainer}>
                {props.menuItemData.itemSizes.map((itemSizeElement, index) => (
                    <MenuItemSizeHorizComp
                        key={index}
                        menuItemSizeData={itemSizeElement}
                        ></MenuItemSizeHorizComp>
                ))}
            </div>
        );

    }

    return (<div className={styles.outerMenuItemHorizCompContainer}>
        <InnerMenuItemHorizComp
            mainItemInfo={props.menuItemData}
            selected={elementSelected}
            onSelectedAction={handleOuterMenutItemClick}></InnerMenuItemHorizComp>
        {menuItemComponentRender}
    </div>)
}

export default OuterMenuItemHorizComp;