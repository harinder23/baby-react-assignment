import React, { Component } from 'react';
import './Modal.css';
import profile from '../../../public/profile.png';

class Modal extends Component {
    render() {
        if (this.props.isOpen === false)
            return null

        let modalStyle = {
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            zIndex: '9999',
            background: '#fff'
        }

        let backdropStyle = {
            position: 'absolute',
            width: '100%',
            height: '100%',
            top: '0px',
            left: '0px',
            zIndex: '9998',
            background: 'rgba(0, 0, 0, 0.3)'
        }

        return (
            <div className="modal">
                <div style={modalStyle}>
                    <div className="row">
                        <div className="col-xs-3">
                            <img src={profile} alt="John" style={{ width: '100%' }} />
                        </div>
                        <div className="col-xs-8">
                            <h1>{this.props.data.name}</h1>
                            <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).</p>
                            <div style={{ margin: '20px 0' }}>
                                <a href="#" className="fa fa-facebook"></a>
                                <a href="#" className="fa fa-twitter"></a>
                                <a href="#" className="fa fa-google"></a>
                                <a href="#" className="fa fa-linkedin"></a>
                            </div>
                            <p><button onClick={this.props.close}>Close</button></p>
                        </div>
                        <div className="col-xs-1"></div>
                    </div>
                </div>
                <div style={backdropStyle} onClick={this.props.close} />
            </div>
        )
    }

    close(e) {
        e.preventDefault()

        if (this.props.onClose) {
            this.props.onClose()
        }
    }
};

export default Modal;