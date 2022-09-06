// All information, source code contained in this document 
// is the property of StrynDev Solutions, LLC. It must not 
// be transmitted to others without the written consent of 
// StrynDev Solutions. It must be returned to StrynDev Solutions 
// when its authorized use is terminated.


import React from 'react';
import redXPic from '../../../assets/redXPic.png';

import styles from './SettingsWhiteBubbleComp.module.css';

const SettingsWhiteBubbleComp = (props) => {

    return (<div className={styles.settingsWhiteBubbleCompContainer}>
        <div className={styles.firstWhiteBubbleInfoRowContainer}>
            <span className={styles.labelTextStyle}>Club:</span>
            <button className={styles.whiteSelectionButtonStyle}>

            </button>
        </div>
        <div className={styles.whiteBubbleInfoRowContainer}>
            <span className={styles.labelTextStyle}>Representative:</span>
            <button className={styles.whiteSelectionButtonStyle}>

            </button>
        </div>
        <div className={styles.whiteBubbleInfoRowContainer}>
            <span className={styles.labelTextStyle}>Reader status:</span>
            <img className={styles.redXGraphicStyle} src={redXPic}>
            </img>
            <button className={styles.whiteSelectionButtonStyle}>
                <span className={styles.connectReaderTextStyle}>connect a reader</span>
            </button>
        </div>
        <div className={styles.whiteBubbleInfoRowContainer}>
            <span className={styles.labelTextStyle}>Authentication:</span>
            <img className={styles.redXGraphicStyle} src={redXPic}>
            </img>
        </div>
    </div>)
}

export default SettingsWhiteBubbleComp;