
import { Tab, TabList, TabPanel, Tabs } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import orderCoverImg from '../../../assets/shop/banner2.jpg'
import Cover from '../../Shared/Cover/Cover';
import { useParams, useSearchParams } from 'react-router-dom';
import { useState } from 'react';
import useMenu from '../../../hooks/useMenu';
import FoodCard from '../../../Components/FoodCard/FoodCard';
import OrderTab from '../OrderTab/OrderTab';
import { Helmet } from 'react-helmet-async';
const Order = () => {
    const categories =['salad','pizza','soup','dessert','drinks']
    const {category}=useParams();
    const initialIndex = categories.indexOf(category)
    const [tabIndex,setTabIndex]=useState(initialIndex)
    const [menu]=useMenu()
    
    console.log(category)

    const desserts =menu.filter(item=>item.category==='dessert')
    const soup =menu.filter(item=>item.category==='soup')
    const salad =menu.filter(item=>item.category==='salad')
    const pizza =menu.filter(item=>item.category==='pizza')
    
    const drinks =menu.filter(item=>item.category==='drinks')
    
    return (
        <div>
            <Helmet>
        <title>Bistro Boss | Order Food</title>
        
      </Helmet>
            <Cover title="Order Food" img={orderCoverImg}></Cover>
            <Tabs defaultIndex={tabIndex} onSelect={(index) =>setTabIndex(index)}>
                <TabList>
                    <Tab>Salad</Tab>
                    <Tab>Pizza</Tab>
                    <Tab>Soup</Tab>
                    <Tab>Dessert</Tab>
                    <Tab>Drink</Tab>
                   
                </TabList>
                <TabPanel>
                    <OrderTab items={salad}></OrderTab>
                </TabPanel>
                <TabPanel>
                 <OrderTab items={pizza}></OrderTab>
                </TabPanel>
                <TabPanel>
                 <OrderTab items={soup}></OrderTab>
                </TabPanel>
                <TabPanel>
                 <OrderTab items={desserts}></OrderTab>
                </TabPanel>
                <TabPanel>
                 <OrderTab items={drinks}></OrderTab>
                </TabPanel>
            </Tabs>
        </div>
    );
};

export default Order;