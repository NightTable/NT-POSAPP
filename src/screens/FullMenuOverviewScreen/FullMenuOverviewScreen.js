// All information, source code contained in this document 
// is the property of StrynDev Solutions, LLC. It must not 
// be transmitted to others without the written consent of 
// StrynDev Solutions. It must be returned to StrynDev Solutions 
// when its authorized use is terminated.


import React from 'react';
import MenuCategorySectionComp from '../../components/FullMenuOverviewScreen/MenuCategorySectionComp/MenuCategorySectionComp';

import styles from './FullMenuOverviewScreen.module.css';

import leftRedArrowPic from '../../assets/redarrownewleft.svg';
import greenArrowPic from '../../assets/newrightgreenarrowpic.svg';

const FullMenuOverviewScreen = (props) => {

    const dummyMenuData = [
        {
            menuCategoryName: "Wine",
            menuItems: [
                {
                    itemName: "champaigne bottle",
                    sizes: 3,
                    price: "-",
                    itemSizes: [
                        {
                            sizeLabel: "small",
                            price: 89
                        },
                        {
                            sizeLabel: "medium",
                            price: 150
                        },
                        {
                            sizeLabel: "large",
                            price: 210
                        }
                    ]
                },
                {
                    itemName: "sample wine brand",
                    sizes: 1,
                    price: 200,
                    itemSizes: []
                }
            ]
        },
        {
            menuCategoryName: "Beer",
            menuItems: [
                {
                    itemName: "smaple beer brand 1",
                    sizes: 1,
                    price: 200,
                    itemSizes: []
                },
                {
                    itemName: "smaple beer brand 2",
                    sizes: 1,
                    price: 200,
                    itemSizes: []
                },
                {
                    itemName: "smaple beer brand 3",
                    sizes: 1,
                    price: 200,
                    itemSizes: []
                }
            ]
        }
    ];

    return (<div className={styles.fullMenuOverviewScreenContainer}>
        <div className={styles.fullMenuUpperHeaderContainer}>
            <div className={styles.leftSideHeaderLabelContainer}>
                <span>Full Menu</span>
            </div>
            <div className={styles.rightSideCartButtonContainer}>
                <button className={styles.cartButtonStyle}>Cart (2)</button>
            </div>
        </div>
        <div className={styles.fullMenuMainBodyContainer}>

            <div className={styles.outerMenuListSectionContainer}>
                <div className={styles.menuListContainer}>
                    {dummyMenuData.map((menuCategory, index) => (
                        <MenuCategorySectionComp
                            key={index}
                            categoryData={menuCategory}
                            ></MenuCategorySectionComp>  
                    ))}
                </div>
            </div>
            <div className={styles.toggleSectionMenuButtonContainer}>
                <button className={styles.toggleSectionMenuButton}>toggle section menu</button>
            </div>
        </div>
        <div className={styles.fullMenuLowerFooterContainer}>
            <div className={styles.leftSideCheckoutButtonContainer}>
                <button className={styles.footerButtonStyleRed}>
                    <img className={styles.redLeftArrowPicStyle} src={leftRedArrowPic}></img>
                    <span>back</span>
                </button>
            </div>
            <div className={styles.rightSideCheckoutButtonContainer}>
                <button className={styles.footerButtonStyleGreen}>
                    <span className={styles.checkoutLabelTextStyle}>checkout</span>
                    <img className={styles.greenRightArrowPicStyle} src={greenArrowPic}></img>
                </button>
            </div>
        </div>
    </div>)
}

export default FullMenuOverviewScreen;