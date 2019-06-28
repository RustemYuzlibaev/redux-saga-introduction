import { connect } from 'react-redux';
import {
    fetchStarWarsRequest,
    confirmFetchRequest,
    fetchStarWarsPlanetRequest,
    queueChannelRequests,
} from '../actions';
import App from '../App';

const mapStateToProps = ({ starWars }) => ({ starWars });

const mapDispatchToProps = dispatch => ({
    fetchStarWarsRequest: () => dispatch(fetchStarWarsRequest()),
    confirmFetchRequest: () => dispatch(confirmFetchRequest()),
    fetchStarWarsPlanetRequest: () => dispatch(fetchStarWarsPlanetRequest()),
    queueChannelRequests: () => dispatch(queueChannelRequests()),
});

const AppContainer = connect(
    mapStateToProps,
    mapDispatchToProps,
)(App);

export default AppContainer;
