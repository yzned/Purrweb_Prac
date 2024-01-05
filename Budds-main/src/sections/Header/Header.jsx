import "./Header.css"
import logoBudss from './logoBudss.svg';
import MyButton from '../../UI/MyButton/MyButton';
import MenuButton from './menuButton.svg'
import Apple from './Apple.svg'
import Google from './Google.svg'
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
const Header = () => {
  const [width, setWidth] = useState(window.innerWidth);
  useEffect(() => {
    const handleResizeWindow = () => setWidth(window.innerWidth);
    window.addEventListener("resize", handleResizeWindow);
    return () => {
      window.removeEventListener("resize", handleResizeWindow);
    };
    }, []);
    const [userType,setUserType] = useState("Busines");
    return (
        <div className='Header'>
            <nav>
                <button className='navButton' onClick={()=> setUserType("Busines")}>For Busines</button>
                <button className='navButton' onClick={()=> setUserType("Customer")}>For Customers</button>
            </nav>
            <div className='Fixed_Section'>
                <div className="Fixed_Section_Content">
                    <img src={logoBudss} alt="^-^"/>
                    {width > 800 ?
                        <div>
                            {userType === "Busines" ?
                                <MyButton>Contact sales</MyButton>
                                :
                                <div className="Fixed_section_markets"> 
                                    <img src={Google} alt="" className="Fixed_section_market" style={{paddingRight:14}}/>
                                    <img src={Apple} alt="" className="Fixed_section_market" style={{paddingLeft:14,borderLeft:"1px solid gray"}}/>
                                </div>
                            }
                        </div>
                        :
                            <Link to="/Menu"><img src={MenuButton} alt="^_^"/></Link>
                    }
                </div>
            </div>
        </div>
    );
};

export default Header;