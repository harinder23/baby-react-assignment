import React, { Component } from 'react';
import Card from './Card/Card';
import Modal from '../Modal/Modal';
import { connect } from 'react-redux';
import * as actions from '../../../actions/actions';
import profile from '../../../public/profile.png';

class Cards extends Component {

    render() {
        return (
            <div className="row">
                <div className="col-xs-2"></div>
                {this.props.cardt.map((card,index) => (
                    <Card key={card.id} name={card.name} designation={card.designation} clicked={() => this.props.openModal(index)} />)
                )
                }
                <div className="col-xs-2"></div>
                <Modal isOpen={this.props.modalStatus} onClose={() => this.props.closeModal()}>
                    <div className="row">
                        <div className="col-xs-3">
                            <img src={profile} alt="John" style={{ width: '100%' }} />
                        </div>
                        <div className="col-xs-8">
                            <h1>{this.props.modalData.name}</h1>
                            <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).</p>
                            <div style={{ margin: '20px 0' }}>
                                <a href="#" className="fa fa-facebook"></a>
                                <a href="#" className="fa fa-twitter"></a>
                                <a href="#" className="fa fa-google"></a>
                                <a href="#" className="fa fa-linkedin"></a>
                            </div>
                            <p><button onClick={() => this.props.closeModal()}>Close</button></p>
                        </div>
                        <div className="col-xs-1"></div>
                    </div>
                </Modal>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        cardt: state.cardList,
        modalStatus: state.isModalOpen,
        modalData : state.opened
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        openModal: (id) => dispatch(actions.modalOpen(id)),
        closeModal: () => dispatch(actions.modalClose())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Cards);