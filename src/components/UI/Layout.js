import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

function Layout({children}){
    const location = useLocation();
    const [backgroundImage, setBackgroundImage] = useState("");

    


    useEffect(() => {
        const mobileQuery = window.matchMedia('(max-width: 480px)');
        const tabletQuery = window.matchMedia('(min-width: 481px) and (max-width: 991px)');
        
        const setImage = () => {
            switch (location.pathname) {
                case "/":
                    if (mobileQuery.matches) {
                        setBackgroundImage("url(../../assets/home/background-home-mobile.jpg)");
                    } else if (tabletQuery.matches) {
                        setBackgroundImage("url(../../assets/home/background-home-tablet.jpg)");
                    } else {                  
                        setBackgroundImage("url(../../assets/home/background-home-desktop.jpg)");
                    }
                    break;
                default:
                    setBackgroundImage("");
            }
        };

        const handleResize = () => {
            setImage();
        };

        window.addEventListener('resize', handleResize);

        console.log("Redimensionando a tela")
    }, [location]); 

    return (
        <div style={{backgroundImage: backgroundImage, backgroundSize: "cover", backgroundPosition: "center", width: "100%", height: "100%"}}>
            {children}
        </div>
    );
}

export default Layout;