import React from 'react';
import "./footer.css";
import instagram from "./images/instagram.svg";
import github from "./images/github.svg";
import linkedln from "./images/linkedln.svg";
import twitter from "./images/twitter.svg";

const Footer = ({userName,profileLink,githubLink,instaLink,linkedlnLink,twitterLink}) => {
    return (
        <div className="footer1">
            <p>Developed by <a className="footer1-primary-link" href={profileLink}>{userName}</a> </p>

            <div className="footer1-icons-container">
                
                    {instaLink && <a className="footer1-icon-container" href={instaLink}>
                        <img src={instagram} className="footer1-icon"/>
                    </a>}

                    {githubLink && <a className="footer1-icon-container" href={githubLink}>
                        <img src={github} className="footer1-icon"/>
                    </a>}

                    { linkedlnLink && <a className="footer1-icon-container" href={linkedlnLink}>
                        <img src={linkedln} className="footer1-icon"/>
                    </a>}

                    {twitterLink  && <a className="footer1-icon-container" href={twitterLink}>
                        <img src={twitter} className="footer1-icon"/>
                    </a>}
                
            </div>

        </div>
    );
};
export default Footer;