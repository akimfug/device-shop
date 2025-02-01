'use client'
import { useEffect, useState } from "react"
import { Device } from "../device/device"
import styles from './devices.module.scss'

export interface DeviceType {
    id: number,
    name: string,
    price: number,
    rating: number,
    img: string,
    typeId: number,
    brandId: number
}

export const Devices: React.FC = () => {
    const [data, setData] = useState<DeviceType[]>([])
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('http://localhost:3001/api/device');
                if (!response.ok) {
                    throw new Error(`Failed to fetch: ${response.statusText}`);
                }
                const result = await response.json();
                setData(result);
            } catch (err) {
                console.error(err);
            }
        };
        fetchData();
    }, []);

    return (
        <div className={styles.devices}>
            {data.map((device: DeviceType) => {
                return <Device key={device.id} {...device}></Device>
            })}
        </div>
    )
}