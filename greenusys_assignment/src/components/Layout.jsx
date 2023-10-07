import React from 'react'
import styles from "./Layout.module.css";
import { MdSearch } from "react-icons/md";
import {MdOutlineCalendarMonth } from "react-icons/md";
import {MdPeople } from "react-icons/md";

const tabs = ["Banglore", "Chennai", "Delhi", "Gurgaon", "Hyderabad", "Kolkata", "Mumbai", "Noida"];

const Layout = () => {
    return (
        <>
            <div className={styles.nav} >
                <div className={styles.tabs}>
                    {tabs.map((el, index) => {
                        return <div key={index}>
                            <select  className={styles.tab}>
                                <option value={el}>{el}</option>
                            </select>
                        </div>
                    })}
                </div>
                <div className={styles.searchBox}>
                    <div className={styles.search}>
                        <input type="text" className={styles.input} placeholder='Search Cities'/>
                    </div>
                    <div className={styles.searchIcon}>
                        <MdSearch  size={"20px"} className={styles.icon}/>
                    </div>
                </div>
                
                        <ul>
                            <li>X
                            <div className={styles.dropDown}>
                            {tabs.map((el, index) => {
                        return <div key={index}>
                            <select  className={styles.dropList}>
                                <option value={el}>{el}</option>
                            </select>
                        </div>
                    })}
                            </div>
                            </li>
                        </ul>
                

            </div>
            <div className={styles.backGround}>
                <div className={styles.banquet}>
                    <p className={styles.heading1}>Find <span className={styles.span}>Banquet</span> near by</p>
                    <p className={styles.heading2}>at best prices</p>
                    <button className={styles.startedButton}>Get Started!</button>
                </div>
                <div className={styles.midDiv}>
                            <div className={styles.cities}>
                                Badarpur New Delhi
                            </div>
                            <div className={styles.date}> 
                            <div className={styles.dateContent}>Jan 27-29 Jan</div>
                            <MdOutlineCalendarMonth size={"20px"} className={styles.calendar}/>
                            </div>
                            <div className={styles.peoples}>
                                <div className={styles.dateContent}>People 500</div>
                                <MdPeople size={"20px"} className={styles.calendar}/>
                            </div>
                            <div className={styles.searchDiv}>
                                <div><MdSearch size={"20px"} className={styles.miniIcon}/></div>
                                Search
                            </div>
                </div>
            </div>
        </>
    )
}

export default Layout
