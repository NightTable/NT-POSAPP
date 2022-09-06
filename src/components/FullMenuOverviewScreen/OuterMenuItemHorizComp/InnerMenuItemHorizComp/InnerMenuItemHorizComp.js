// All information, source code contained in this document 
// is the property of StrynDev Solutions, LLC. It must not 
// be transmitted to others without the written consent of 
// StrynDev Solutions. It must be returned to StrynDev Solutions 
// when its authorized use is terminated.

import React from 'react';
import styles from './InnerMenuItemHorizComp.module.css';

import rightArrowExpandPic from '../../../../assets/rightexpandarrow.svg';
import downArrowCollapsePic from '../../../../assets/downarrowright.svg';

const InnerMenuItemHorizComp = (props) => {


    return (<div 
            onClick={props.mainItemInfo.sizes > 1 && props.onSelectedAction} 
            className={props.selected ? styles.innerMenuItemHorizCompContainerSelected : styles.innerMenuItemHorizCompContainer }>
        <div className={styles.innerItemAttributeDataContainer}>
            { props.mainItemInfo.sizes > 1 ? 
            <img className={styles.rightArrowPicStyle} src={props.selected ? downArrowCollapsePic : rightArrowExpandPic}></img>
             : <div className={styles.rightArrowPicStyle}></div>}
            <span className={styles.itemLabelStyle}>{props.mainItemInfo.itemName}</span>
        </div>
        <div className={styles.innerSizeAttributeDataContainer}>
            <span className={styles.sizeLabelStyle}>{props.mainItemInfo.sizes}</span>
        </div>
        <div className={styles.innerPriceAttributeDataContainer}>
            <span className={styles.priceLabelStyle}>{props.mainItemInfo.sizes > 1 ? props.mainItemInfo.price : `$${props.mainItemInfo.price}`}</span>
        </div>
    </div>)
}

export default InnerMenuItemHorizComp;