import React, { Component } from 'react';
import Card from './Card/Card';
import Modal from '../Modal/Modal';

class Cards extends Component {

    state = {
        cardList: [
            { id: 1, name: 'ANTON PETROV', designation: 'General Menager' },
            { id: 2, name: 'KIRL DONCHEV', designation: 'Design Master' },
            { id: 3, name: 'ILIAN BONEV', designation: 'Developer Ninja' },
            { id: 4, name: 'DONI STAMOV', designation: 'Seo Guru' }
        ],
        isModalOpen: false,
    };

    openModal() {
        this.setState({ isModalOpen: true })
    }

    closeModal() {
        this.setState({ isModalOpen: false })
    }


    render() {
        return (
            <div className="row">
                <div className="col-xs-2"></div>
                {this.state.cardList.map(card => (
                    <Card key={card.id} name={card.name} designation={card.designation} clicked={() => this.openModal()} />)
                )
                }
                <div className="col-xs-2"></div>
                <Modal isOpen={this.state.isModalOpen} onClose={() => this.closeModal()}>
                    <h1>KIRL DONCHEV</h1>
                    <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).</p>
                    <div style={{ margin: '20px 0' }}>
                        <a href="#" className="fa fa-facebook"></a>
                        <a href="#" className="fa fa-twitter"></a>
                        <a href="#" className="fa fa-google"></a>
                        <a href="#" className="fa fa-linkedin"></a>
                    </div>
                    <p><button onClick={() => this.closeModal()}>Close</button></p>
                </Modal>
            </div>
        );
    }
}

export default Cards;