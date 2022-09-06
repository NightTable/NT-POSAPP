// All information, source code contained in this document 
// is the property of StrynDev Solutions, LLC. It must not 
// be transmitted to others without the written consent of 
// StrynDev Solutions. It must be returned to StrynDev Solutions 
// when its authorized use is terminated.

import React from 'react';
import TablesOverviewListScreen from '../TablesOverviewListScreen/TablesOverviewListScreen';
import MenuSectionOverviewScreen from '../MenuSectionOverviewScreen/MenuSectionOverviewScreen';
import FullMenuOverviewScreen from '../FullMenuOverviewScreen/FullMenuOverviewScreen';
import styles from './MainLayoutOverviewScreen.module.css';
import CheckoutOverviewScreen from '../CheckoutOverviewScreen/CheckoutOverviewScreen';
import PosTransactionDetailOverviewScreen from '../PosTransactionDetailOverviewScreen/PosTransactionDetailOverviewScreen';
import PosTransactionListOverviewScreen from '../PosTransactionListOverviewScreen/PosTransactionListOverviewScreen';
import SettingsOverviewScreen from '../SettingsOverviewScreen/SettingsOverviewScreen';
import TablesDetailOverviewScreen from '../TablesDetailOverviewScreen/TablesDetailOverviewScreen';

const MainLayoutOverviewScreen = (props) => {

    return (<div className={styles.mainLayoutOverviewScreenContainer}>
        <div className={styles.leftColumnContainer}>
            <div className={styles.leftMenuItemContainer}>
                <span className={styles.leftMenuTextUnderlined}>tables</span>
            </div>
            <div className={styles.leftMenuItemContainer}>
                <span className={styles.leftMenuText}>menu</span>
            </div>
            <div className={styles.leftMenuItemContainer}>
                <span className={styles.leftMenuText}>transactions</span>
            </div>
            <div className={styles.leftMenuItemContainer}>
                <span className={styles.leftMenuText}>settings</span>
            </div>
        </div>
        <div className={styles.mainBodyContainer}>
            {/* <TablesDetailOverviewScreen></TablesDetailOverviewScreen> */}
            {/* {<CheckoutOverviewScreen></CheckoutOverviewScreen>} */}
            {/* <PosTransactionDetailOverviewScreen></PosTransactionDetailOverviewScreen> */}
            {/* <MenuSectionOverviewScreen></MenuSectionOverviewScreen> */}
            {/* <PosTransactionListOverviewScreen></PosTransactionListOverviewScreen> */}
            {/* <TablesOverviewListScreen></TablesOverviewListScreen> */}
            {/* <FullMenuOverviewScreen></FullMenuOverviewScreen> */}
            <SettingsOverviewScreen></SettingsOverviewScreen>
        </div>
    </div>)
}

export default MainLayoutOverviewScreen;