const SideBar = ({scrollToSection, one, two, three, four, five}) => {
  return (
    <div className='sideBar'>
      <div className='verticalLine'></div>
      <div className='menuItemsWrapper'>
        <div onClick={() => scrollToSection(one)} className='menuItem'></div>
        <div onClick={() => scrollToSection(two)} className='menuItem'></div>
        <div onClick={() => scrollToSection(three)} className='menuItem'></div>
        <div onClick={() => scrollToSection(four)} className='menuItem'></div>
        <div onClick={() => scrollToSection(five)} className='menuItem'></div>
      </div>
      <div className='verticalLine'></div>
    </div>
  );
};

export default SideBar;
