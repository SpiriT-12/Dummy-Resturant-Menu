import React, { useState } from 'react';
import './style.css';
import Menu from './menuApi';
import MenuCard from './MenuCard';
import Navbar from './Navbar';

const UniqueList = [
   ...new Set(
      Menu.map((curElement) => {
         return curElement.category;
      })
   ),
   'All',
];

const Resturant = () => {
   const [menuData, setMenuData] = useState(Menu);
   // eslint-disable-next-line no-unused-vars
   const [menuList, setMenuList] = useState(UniqueList);

   const filterItem = (category) => {
      if (category === 'All') {
         setMenuData(Menu);
         return;
      }
      const updatedList = Menu.filter((curElement) => {
         return curElement.category === category;
      });
      setMenuData(updatedList);
   };
   return (
      <>
         <Navbar filterItem={filterItem} menuList={menuList} />
         <MenuCard menuData={menuData} />
      </>
   );
};

export default Resturant;
