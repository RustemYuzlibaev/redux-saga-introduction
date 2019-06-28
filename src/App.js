import React from 'react';

class App extends React.Component {
    state = {
        open: false,
        count: 0,
    };

    handleQueue = () => {
        this.props.queueChannelRequests();

        this.setState(prevState => ({ count: prevState.count + 1 }));
    };

    handleFetchClick = () => {
        this.props.fetchStarWarsRequest();
        this.setState({ open: true });
    };

    handleConfirmClick = () => {
        this.props.confirmFetchRequest();
        this.setState({ open: false });
    };

    render() {
        return (
            <div>
                <h1>Redux Saga</h1>

                <div>
                    <h3># of Button Clicks {this.state.count}</h3>
                    {/* <h3># of Saga effects {this.props.starWars.people}</h3> */}
                </div>
                <button onClick={this.props.fetchStarWarsRequest}>
                    Load More
                </button>
                <button onClick={this.handleQueue}>Queue Channel</button>

                <div>
                    {this.props.starWars.people.map((person, i) => (
                        <h4 key={i}>{person.name}</h4>
                    ))}
                </div>
                <div>
                    <div style={!this.state.open ? { display: 'none' } : {}}>
                        <button onClick={this.handleConfirmClick}>
                            Confirm
                        </button>
                    </div>
                </div>
                <div>
                    {this.props.starWars.planet.map((planet, i) => (
                        <h4 key={i}>{planet.name}</h4>
                    ))}
                </div>
                <button onClick={this.handleFetchClick}>Load People</button>
                <button onClick={this.props.fetchStarWarsPlanetRequest}>
                    Load Planets
                </button>
            </div>
        );
    }
}

export default App;
