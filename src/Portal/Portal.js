import React from 'react';
import Form from './Form';
import './Portal.css';

class Portal extends React.Component {
    state = {
        cards: []
    };
    addNewCard = (cardInfo) => {
        this.setState(prevState => ({
            cards: prevState.cards.concat(cardInfo)
        }));
    };
    render() {
        return (
            <div>
                <Form onSubmit={this.addNewCard} />
                <CardList cards={this.state.cards} />
            </div>
        );
    }
}


const Card = (props) => {
    return (
        <div className="card">
            <img src={props.avatar_url}   alt=" "/>
            <div className="card-info">
                <div>  {props.name} </div>
                <div> {props.company} </div>
            </div>
        </div>
    );
};

const CardList = (props) => {
    return (
        <div>
            {props.cards.map(card => <Card key={card.id} {...card} />)}
        </div>
    );
}

export default Portal;

/* octocat jeyshah9  */