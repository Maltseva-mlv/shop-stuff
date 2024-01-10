const Footer = () => {
    return ( 
        <footer className="footer">

                <div className="footer__inner">
                    {/* <div className="footerlogo"> */}
                        <img src="/public/img/logo.svg" alt="" />
                    {/* </div> */}

                    <div className="dev">
                        Developed by
                        <span>Tomkovich</span> 
                    </div>

                    <div className="social">
                        <img src="/img/youtube.svg" alt="" className="social--icon" />
                        <img src="/img/facebook.svg" alt="" className="social--icon" />
                        <img src="/img/instagram.svg" alt="" className="social--icon" />
                    </div>
                </div>
        </footer>
    );
}
 
export default Footer;