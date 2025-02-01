'use client'
import Image from "next/image";
import styles from "./page.module.css";
import { Devices } from "@/components/devices/devices";
import { Filter } from "@/components/filter/filter";
import { Header } from "@/components/header/header";
import { useEffect, useState, createContext } from "react";
import UserStore from "@/store/UserStore";
import DeviceStore from "@/store/DeviceStore";
import FilterStore from '@/store/FilterStore'
interface ContextType {
  user: UserStore;
  device: DeviceStore;
  filter: FilterStore
}

export const Context = createContext<ContextType | null>(null);

export default function Home () {
  return (
    <Context.Provider value={{
      user: new UserStore(),
      device: new DeviceStore(),
      filter: new FilterStore()
    }}>
      <div className={styles.page}>
        <main className={styles.main}>
          <div className={styles.content}>
            <Filter></Filter>
            <Devices></Devices>
          </div>
          
        </main>
      </div>
    </Context.Provider>
  );
}
