import React, { useState } from 'react';
import { RiMenuSearchFill } from 'react-icons/ri';
import { BiSolidBusiness } from 'react-icons/bi';
import { MdDeveloperMode, MdFeedback } from 'react-icons/md';
import { FaDirections, FaTeamspeak } from 'react-icons/fa';
import './Sidebar.css'; 

const Sidebar = ({ onPhaseSelect }) => {
  const [selectedItem, setSelectedItem] = useState(null);

  const handleItemClick = (phase) => {
    onPhaseSelect(phase);
    setSelectedItem(phase);
  };

  return (
    <nav className='sideBar'>
      <div className='logoDiv'>
        <img src='https://media.licdn.com/dms/image/C4E1BAQHMBRRdMth4qw/company-background_10000/0/1584185768529?e=2147483647&v=beta&t=hcbs8R_2sqEG4HILlA_VdinaLW5oQBeiTq9kYVxpq7k' alt='Lizmotors Logo' />
        <h2>Lizmotors</h2>
      </div>
      <ul className='menuList'>
        <li className={`listItem ${selectedItem === 'Research' ? 'selected' : ''}`} onClick={() => handleItemClick('Research')}>
          <a href='#research' className='menuLink'>
            <RiMenuSearchFill className='icon'/>
            <span>Research</span>
          </a>
        </li>
        <li className={`listItem ${selectedItem === 'Planning' ? 'selected' : ''}`} onClick={() => handleItemClick('Planning')}>
          <a href='#planning' className='menuLink'>
            <BiSolidBusiness className='icon'/>
            <span>Planning</span>
          </a>
        </li>
        <li className={`listItem ${selectedItem === 'Design' ? 'selected' : ''}`} onClick={() => handleItemClick('Design')}>
          <a href='#design' className='menuLink'>
            <MdDeveloperMode className='icon'/>
            <span>Design</span>
          </a>
        </li>
        <li className={`listItem ${selectedItem === 'Manufacturing' ? 'selected' : ''}`} onClick={() => handleItemClick('Manufacturing')}>
          <a href='#manufacturing' className='menuLink'>
            <FaDirections className='icon'/>
            <span>Manufacturing</span>
          </a>
        </li>
        <li className={`listItem ${selectedItem === 'Sales' ? 'selected' : ''}`} onClick={() => handleItemClick('Sales')}>
          <a href='#sales' className='menuLink'>
            <MdFeedback className='icon'/>
            <span>Sales/Marketing</span>
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Sidebar;
