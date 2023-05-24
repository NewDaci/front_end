// import styles from '..styles/footer.css'

function Footer() {
    return (
        <footer className="text-gray-600 body-font"
        style={{    
            width: "100%",
            float: "left",
            background: "#065e3e",
            margin: "0",
            boxSizing: "border-box",
            padding: "0"
        }}
        >
            <div >
                <ul>
                    <li><a href="https://www.facebook.com/dps.jaipur.1/?ref=br_tf" target="_blank"><i class="fa fa-facebook"></i></a></li>
                    <li><a href="https://www.instagram.com/dps_jaipur_official/" target="_blank"><i class="fa fa-instagram"></i></a></li>
                    <li><a href="https://www.youtube.com/channel/UCZET6hMeeritb2oo2z5QdJQ" target="_blank"><i class="fa fa-youtube"></i></a></li>
                    <li><a href="https://twitter.com/DPSJaipur" target="_blank"><i class="fa fa-twitter"></i></a></li>
                </ul>
            </div>

            {/* first-footer */}
            <div
                className="first-footer"
                style={{
                    width: "100%",
                    float: "left",
                    textAlign: "center",
                    padding: "30px 0 20px",
                    borderBottom: "1px solid #065e3e"
                }}
            >
                <div className="footer-logo foot-box"
                style={{    
                    width: "100%",
                    display: "block"
                }}>
                    <img src="/dpslogo.png" alt="DPS Jaipur"/>
                </div>
                
                <div class="quick-links foot-box">
                    <h3>Quick Links</h3>
                    <ul>
                        <li><a href="Facilities">Facilities</a></li>
                        <li><a href="Facilities-Infrastructure">Infrastructure</a></li>
                        <li><a href="Registration-Form">Registration Form</a></li>
                        <li><a href="RFID">RFID</a></li>
                        <li><a href="upload/RTE-Notification-2021-DPS.PDF-(2).jpg" target="_blank">RTE Notification 2021</a></li>
                        <li><a href="upload/attach/933981681293940_new_RTE.pdf" target="_blank">RTE Notification 2023</a></li>
                        <li><a href="upload/attach/367921598538685_Important_Circulars.pdf" target="_blank">Important Circulars</a></li>
                        <li><a href="Contact.php">Contact Us</a></li>
                        <li><a href="https://www.dpsjaipur.com/message.html" target="_blank">PTA Registration</a></li>
                        <li><a href="https://epathshala.nic.in/">NCERT e books</a></li>
                    </ul>
                </div>
                <div class="box foot-box">
                    <h3>Contact us</h3>
                    <div class="conatct-box">
                        <div class="contact">
                            <p>Delhi Public School, Jaipur, Ajmer Road Branch NH-8, Jaipur Ajmer Highway, Jaipur Pin code – 302026</p>
                            <p>Phone: +91-829-056-5656, +91-9680006938/</p>
                            <p>For Admission Enquiry: +91-9116405333, +91-9828982987</p>
                            <p>E-mail: <a href="mailto:info@dpsjaipur.com">info@dpsjaipur.com</a>,</p>
                            <p><a href="mailto:admission@dpsjaipur.com">admission@dpsjaipur.com</a></p>
                            <p>
                                <a href="#" title="DPS Jaipur">Visitor Counter - <img style={{ width: '142px', marginLeft: '5px' }} src="https://counter8.stat.ovh/private/freecounterstat.php?c=1arxsltycyq6fpg8rz2wgbjkusdu6hg9" border="0" title="Visitor Counter" alt="DPS Jaipur" /></a>
                            </p>
                        </div>
                    </div>
                </div>

            </div>

            <footer className="bottom"
            style={{
                width: '100%',
                float: 'left',
                padding: '5px 30px',
                background: '#db9c27',
                textAlign: 'center',
                borderTop: '1px solid #db9c27'
            }}
            >
                <p style={{
                    float: "left",
                    color: "#fff",
                    fontSize: "12px",
                    marginTop: "7px"
                    }}
                    >
                    © 2023 All rights reserved with DPS Jaipur</p>
                <div
                    className="ecis"
                    style={{    
                        float: "right",
                        margin: "0 0 0 10px"
                    }}
                >
                    <p 
                    style={{
                        float: "left",
                        fontSize: "12px",
                        marginTop: "6px"
                        }}>
                        Powered by :{' '}
                        <a style={{ color: '#fff' }} href="https://edunexttechnologies.com/">Edunext Technologies</a>
                    </p>
                </div>
            </footer>
        </footer >
    )
}
export default Footer;
