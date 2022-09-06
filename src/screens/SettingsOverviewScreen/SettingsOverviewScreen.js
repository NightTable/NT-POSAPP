// All information, source code contained in this document 
// is the property of StrynDev Solutions, LLC. It must not 
// be transmitted to others without the written consent of 
// StrynDev Solutions. It must be returned to StrynDev Solutions 
// when its authorized use is terminated.


import React from 'react';
import SettingsWhiteBubbleComp from '../../components/SettingsOverviewScreen/SettingsWhiteBubbleComp/SettingsWhiteBubbleComp';

import styles from './SettingsOverviewScreen.module.css';

const SettingsOverviewScreen = (props) => {

    return (<div className={styles.settingsOverviewScreenContainer}>
        <div className={styles.settingsLabelRowContainer}>
            <div className={styles.settingsLabelBlockContainer}>
                <span className={styles.settingsLabelStyle}>Settings</span>
            </div>
        </div>
        <div className={styles.mainBodyOuterContainer}>
            <SettingsWhiteBubbleComp></SettingsWhiteBubbleComp>
        </div>
    </div>)
}

export default SettingsOverviewScreen;