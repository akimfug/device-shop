import React from 'react'
import { Accordion } from 'react-bootstrap'
import styles from './filter.module.scss'
import { FilterParameter } from './filterParameter/FilterParameter'
import { group } from 'console'




export const Filter: React.FC = () => {
  const data = [
    {
      groupName: 'Brand',
      options: [
        {
          name: 'Apple'
        },
        {
          name: 'Samsung'
        },
        {
          name: 'Xiaomi'
        }
      ]
    },
    {
      groupName: 'Type',
      options: [
        {
          name: 'Смартфоны'
        },
        {
          name: 'Ноутбуки'
        },
        {
          name: 'Телевизоры'
        }
      ]
    }
    ]
  return (
    <div className={styles.filter}>
      data.map((group, i) => {
        <FilterParameter name={group} items={options}
      }
    </div>
    
  )
}

export default Filter