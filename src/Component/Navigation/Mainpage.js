import React from 'react'
import Banner from '../Banner/Banner'
import Bannernav from '../Banner/Bannernav'
import Searchbycategory from '../Topslider/Searchbycategory'
import Staticsuspension from '../Nextslider/Staticsuspension'
import Airsuspension from '../Nextslider/Airsuspenison'
import Subscribe from '../Down/Subscribe'
import Last from '../Down/Last'

import Navbar from './Navbar'
export default function Mainpage() {
    return (
        <div>
            <Banner />
            <Bannernav />
            <Searchbycategory id="searchbycategory" />
            <Staticsuspension />
            <Airsuspension />
        </div>
    )
}
