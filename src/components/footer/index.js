import "./style.css";
import { useContext } from "react";
import { DefaultContext } from "../../Contexts";

export const Footer = () => {
    const { theme } = useContext(DefaultContext);

    return (
        <footer style={{backgroundColor: theme==='light'?'white':'#151515', color: theme==='light'?'black':'white'}}>
            <div className="text">The Star Wars franchise depicts the adventures of characters "A long time ago in a galaxy far, far away", in which humans and many species of aliens (often humanoid) co-exist with robots (typically referred to in the films as 'droids'), who may assist them in their daily routines; space travel between planets is common due to lightspeed hyperspace technology.
</div>
            <div className="links">
            <div> <a href="https://starwars.fandom.com" target="_blank">Fandom</a></div>
            <div> <a href="https://www.starwars.com" target="_blank">Official website</a></div>
            </div>
        </footer>
    )
}