// All information, source code contained in this document 
// is the property of StrynDev Solutions, LLC. It must not 
// be transmitted to others without the written consent of 
// StrynDev Solutions. It must be returned to StrynDev Solutions 
// when its authorized use is terminated.

import React from 'react';
import TableCheckoutItemComp from './TableCheckoutItemComp/TableCheckoutItemComp';

import styles from './TableCheckoutSectionComp.module.css';

const TableCheckoutSectionComp = (props) => {

    return (<div className={styles.tableCheckoutSectionCompStyle}>
        <div className={styles.tableHeaderRowContainer}>
            <span className={styles.tablesTextStyle}>Tables</span>
        </div>
        <div className={styles.tableItemListContainer}>
            {props.tableInfo.map((tableItem, index) => (
                <TableCheckoutItemComp
                    key={index}
                    price={tableItem.price}
                    size={tableItem.size}
                    qty={tableItem.qty}
                    type={tableItem.type}></TableCheckoutItemComp>
            ))}
        </div>
    </div>)
}
export default TableCheckoutSectionComp;