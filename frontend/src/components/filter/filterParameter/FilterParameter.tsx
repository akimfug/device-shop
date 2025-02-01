'use client';

import React, { useEffect } from 'react'
import { useState } from 'react';
import clsx from 'clsx';
import styles from './filterParameter.module.scss'
import Image from 'next/image'
import { filterStore } from '@/store/FilterStore';

interface FilterParameterProps {
    name: string;
    items: Array<FilterItem>;
}
interface FilterItem {
    name: string
}


export const FilterParameter: React.FC<FilterParameterProps> = ({ name, items }) => {
    const [active, setActive] = useState(false)
    const [data, setData] = useState(() => {
        return items.reduce((acc, item) => ({ ...acc, [item.name]: false }), {});
    });
    // filterStore.setFilterParameters()

    function switchActive () {
        setActive(!active)
    }

    function addData(e: React.ChangeEvent<HTMLInputElement>) {
        setData((prev) => ({...prev, [e.target.id]: {
            stateBoolean: e.target.checked,
            groupName: e.target.name 
        }


        }))
    }
    useEffect(() => {
        console.log(data)
    })

    const classActive = active ? 'active' : ''
    return (
        <div className={styles.filterSection}>
            <div className={styles.filterParameter} onClick={switchActive}>
                <div>{name}</div>
                <Image src="/triangle.png" alt="^" width={20} height={15} className={clsx(styles.triangle, styles[classActive])}></Image>
            </div>
            <div className={clsx(styles.filterItems, styles[classActive])}>
                {items.map((item, i) => {
                    console.log(item)
                    return (
                        
                        <label key={i} htmlFor={item.name} className={styles.filterItem}>
                            <input className={styles.filterItem__input} type='checkbox' name='brand' id={item.name} onChange={(e) => addData(e)}  />
                            <div className={styles.filterItem__title}>{item.name}</div>
                        </label>
                    )
                })}
            </div>
        </div>
        
    )
}
