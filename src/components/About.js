import React from 'react';
import myImage from '../assets/img/aboutmeimage.png';

const About = () => {
    return (
        <section id="about" className="about">
            <div className="about-me container">
                <div className="section-title">
                    <h2>About</h2>
                    {/* <p>Learn more about me</p> */}
                </div>
                <div className="row">
                    {/* <div className="col-lg-4" data-aos="fade-right">
                        <img src={myImage} className="img-fluid" alt="" />
                    </div> */}
                    <div className="col-lg-8 pt-4 pt-lg-0 content" data-aos="fade-left">
                        <h3>Sr Web Developer</h3>
                        <p>
                            I am a highly skilled Software Engineer with over 7 years of experience, specializing in front-end development. My expertise lies in creating responsive, user-friendly designs using HTML, CSS, Bootstrap, and jQuery. I am proficient in WordPress CMS, with extensive hands-on experience working with popular page builders such as Divi, Beaver Builder, and Elementor.</p>

                        <p>Additionally, I have knowledge of ReactJS and Shopify, having successfully worked on various Shopify projects and contributed to product development using ReactJS.
                        </p>
                        <div className="row">
                            <div className="col-lg-6">
                                <ul>
                                    <li><i className="bi bi-chevron-right"></i> <strong>Email:</strong> <a href="mailto:muqthiyarahmed153@gmail.com"><span>muqthiyarahmed153@gmail.com</span></a></li>
                                    <li><i className="bi bi-chevron-right"></i> <strong>City:</strong> <span>Davanagere, Karnataka, India</span></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};


export default About;