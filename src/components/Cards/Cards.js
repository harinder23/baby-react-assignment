import React, { Component } from 'react';
import Card from './Card/Card';
import Modal from '../Modal/Modal';
import { connect } from 'react-redux';
import * as actions from '../../../actions/actions';

class Cards extends Component {

    render() {
        return (
            <div className="row">
                <div className="col-lg-2"></div>
                {this.props.cardt.map((card,index) => (
                    <Card key={card.id} name={card.name} designation={card.designation} clicked={() => this.props.openModal(index)} />)
                )
                }
                <div className="col-lg-2"></div>
                <Modal isOpen={this.props.modalStatus} close={() => this.props.closeModal()} data={this.props.modalData} />
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