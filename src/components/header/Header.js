import React from 'react';
import logo from '../../../public/logo.png';

const Header = () => {
    return (
        <header>
            <div className="mdc-toolbar__row">
                <section className="mdc-toolbar__section mdc-toolbar__section--align-start">
                    <span className="mdc-toolbar__title"><img src={logo} width='50%'/></span>
                    <nav id="basic-tab-bar" className="mdc-tab-bar">
                        <a className="mdc-tab mdc-tab--active" href="#one">Home</a>
                        <a className="mdc-tab" href="#two">Services</a>
                        <a className="mdc-tab" href="#three">About</a>
                        <a className="mdc-tab" href="#three">Work</a>
                        <a className="mdc-tab" href="#three">Contacts</a>
                        <span className="mdc-tab-bar__indicator"></span>
                    </nav>
                </section>
            </div>
        </header>
    );
};

export default Header;