import React from 'react';

export default class ContactInfo extends React.Component {
    render(){
        return (
            <>
                <section className="contact-info p-5">
                    <div className="container">
                        <div className="row">
                            <div className="col-xl-4 col-lg-4">
                                {/* Contact Info Single */}
                                <div className="contact-info__single">
                                    <h4 className="contact-info__title">About</h4>
                                    <p className="contact-info__text">The system streamlines CUET's security operations for a safer campus.</p>
                                </div>
                            </div>
                            <div className="col-xl-4 col-lg-4">
                                {/* Contact Info Single */}
                                <div className="contact-info__single">
                                    <h4 className="contact-info__title">Address</h4>
                                    <p className="contact-info__text">PaharTali, Raozan<br />
                                    Chittagong, <br /> Bangladesh. </p>
                                </div>
                            </div>
                            <div className="col-xl-4 col-lg-4">
                                {/* Contact Info Single */}
                                <div className="contact-info__single contact-info__single-3">
                                    <h4 className="contact-info__title">Contact</h4>
                                    <p className="contact-info__email-phone">
                                        <a href="mailto:needhelp@company.com"
                                            className="contact-info__email">register@cuet.ac.bd</a>
                                        <a href="tel:13077760608" className="contact-info__phone">+031******</a>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </>
        )
    }
}