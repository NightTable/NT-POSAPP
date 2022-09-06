// All information, source code contained in this document 
// is the property of StrynDev Solutions, LLC. It must not 
// be transmitted to others without the written consent of 
// StrynDev Solutions. It must be returned to StrynDev Solutions 
// when its authorized use is terminated.

import React from 'react';
import MenuItemCheckoutSectionComp from './MenuItemCheckoutSectionComp/MenuItemCheckoutSectionComp';
import TableCheckoutSectionComp from './TableCheckoutSectionComp/TableCheckoutSectionComp';

import styles from './CheckoutOverviewWhiteBubbleComp.module.css';

const CheckoutOverviewWhiteBubbleComp = (props) => {

    const whiteBubbleCompStyle = { 
        display: 'flex',
        backgroundColor: '#f3f3f3',
        height: '100%',
        maxHeight: `${props.maxBubbleHeightRemValue}rem`,
        width: '95%',
        borderRadius: '3rem',
        flexDirection: 'column',
        overflow: 'scroll',
        boxShadow: '0px 0px 3px black'
    }

    const dummyData = {
        tableInfo: [
            {
                type: 'floor',
                size: 8,
                price: 500,
                qty: 1
            }
        ],
        menuInfo: {
            wine: [
                {
                    name: 'bottle of champaigne',
                    size: 'sm',
                    price: 32,
                    qty: 1,
                },
                {
                    name: 'bottle of champaigne',
                    size: 'sm',
                    price: 32,
                    qty: 1
                }
            ],
            beer: [],
            snacks: []
        }
    }

    return (<div className={styles.checkoutWhiteBubbleCompContainer} style={whiteBubbleCompStyle}>
        <div className={styles.innerExpandableOverviewBubbleContainer}>
            <div className={styles.overviewHeaderRowContainer}>
                <span className={styles.overviewTextStyle}>Overview</span>
            </div>
            <TableCheckoutSectionComp
                tableInfo={dummyData.tableInfo}></TableCheckoutSectionComp>
            <MenuItemCheckoutSectionComp
                menuInfo={dummyData.menuInfo}></MenuItemCheckoutSectionComp>
            <div className={styles.subTotalInformationContainer}>
                <div className={styles.leftSubtotalTaxContainer}>
                    <div className={styles.subTotalLineContainer}>
                        <span className={styles.subTotalCategoryHeaderText}>subtotal:</span>
                        <span className={styles.subTotalCategoryValueText}>$54</span>
                    </div>
                    <div className={styles.taxLineContainer}>
                        <span className={styles.subTotalCategoryHeaderText}>tax: </span>
                        <span className={styles.subTotalCategoryValueText}>$4</span>
                    </div>
                </div>
                <div className={styles.rightTotalContainer}>
                    <span className={styles.subTotalCategoryHeaderText}>total: </span>
                    <span className={styles.subTotalCategoryValueText}>$68</span>
                </div>
            </div>
            <div className={styles.checkoutButtonContainer}>
                <div className={styles.checkoutButtonDividerContainer}>
                    <button className={styles.enterCreditCardInfoButtonStyle}>
                        <span>enter credit card info</span>
                    </button>
                </div>
                <div className={styles.checkoutButtonDividerContainer}>
                    <button className={styles.useReaderButtonStyle}>
                        <span>use reader</span>
                    </button>
                </div>
                <div className={styles.checkoutButtonDividerContainer}>
                    <button className={styles.payWithCashButtonStyle}>
                        <span>pay with cash</span>
                    </button>
                </div>
            </div>
        </div>
    </div>)
}

export default CheckoutOverviewWhiteBubbleComp;