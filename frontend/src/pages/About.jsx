import React from "react";
import { Container, Row, Col } from "reactstrap";
import experienceImg from '../assets/images/experience.png';
import CommonSection from "../shared/CommonSection";
import ServiceList from "../services/ServiceList";
import Subtitle from './../shared/Subtitle';
import Testimonials from "../components/Testimonial/Testimonials";

const About = () => {
    return ( 
        <>
        <CommonSection title={'About'}/>
        {/* ================= Hero Section End ================*/}
        <section>
            <Container>
                <Row>
                    <Col lg='3'>
                        <h5 className="services__subtitle">What we serve</h5>
                        <h2 className="services__title">We offer our best services</h2>
                    </Col>
                    <ServiceList />
                </Row>
            </Container>
        </section>
        {/* ================= Featured Tour Section Start ================*/}

        {/* ================= Experience Section Start ================*/}
        <Container>
            <Row>
                <Col lg='6'>
                    <div className="experience__content">
                    <Subtitle subtitle={"Experience"} />
                    <h2>
                        With our all experience <br /> we will serve you
                    </h2>
                    <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                    <br />
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                    </p>
                    </div>

                    <div className="counter__wrapper d-flex align-center gap-5">
                        <div className="counter__box">
                            <span>12k+</span>
                            <h6>Successful Trip</h6>
                        </div>
                        <div className="counter__box">
                            <span>2k+</span>
                            <h6>Regular clients</h6>
                        </div>
                        <div className="counter__box">
                            <span>15</span>
                            <h6>Years experience</h6>
                        </div>
                    </div>
                </Col>
                <Col lg='6'>
                    <div className="experience__img">
                        <img src={experienceImg} alt=""/>
                    </div>
                </Col>
            </Row>
        </Container>
        {/* ================= Experience Section End ================*/}
        {/* ================= Testimonial Section Start ================*/}
        <section>
            <Container>
                <Row>
                    <Col lg='12'>
                        <Subtitle subtitle={'Fans Love'} />
                        <h2 className="testimonial__title">What our fans say about us</h2>
                    </Col>
                    <Col lg=''>
                        <Testimonials />
                    </Col>
                </Row>
            </Container>
        </section>
        {/* ================= Testimonial Section End ================*/}
        </>
     );
}

export default About;