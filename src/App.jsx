import { useState } from 'react'
import './App.css'

function DropdownItem({item}) {
  const [isHovered, setHovered] = useState(false);
  return (
    <li 
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style = {{color: isHovered ? '#5380F7' :'#666'}}
    >
      <a href="#">{item}</a>
    </li>
  )
}

function DropdownList({list, isVisible}) {
  return (
    <ul className='dropdown' style={{ visibility: isVisible }}>
      {list.map( item => (
        <DropdownItem item={item} key={item}/>
      ))}  
    </ul>
  )
}

function Dropdown() {
  const [isVisible, setShow] = useState('hidden');
  const list = [
    'Profile Information',
    'Change Password',
    'Become PRO',
    'Help',
    'Log Out',
  ];
  const onShow = (isVisible) => {
    isVisible === 'hidden' ? setShow('visible') : setShow('hidden');
  }
  return (
    <div className='dropdown-wrapper'>
      <button className='btn' onClick={() => onShow(isVisible)}>
          <span>account settings</span>
          <i className="material-icons">public</i>
      </button>
      <DropdownList list={list} isVisible={isVisible}/>
    </div>
  )
}

function App() {
  return (
  <div className='container'>
    <Dropdown/>
  </div>
  )
}

export default App
