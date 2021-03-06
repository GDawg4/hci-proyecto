import React from 'react';
import Iframe from 'react-iframe';
import { connect } from "react-redux";
import {createMuiTheme, makeStyles, ThemeProvider} from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";

import SearchResults from "../SearchResults";
import MusicForm from '../MusicForm';
import PeopleResults from "../PeopleResults";
import PeopleForm from "../PeopleForm";

import './styles.css';
import * as selectors from "../../reducers";
import * as userActions from '../../actions/users'

const useStyles = makeStyles({
    root: {
        flexGrow: 1,
        color: '#f59320',
    },
});

const theme = createMuiTheme({
    palette: {
        primary: {
            main: '#f59320',
        }
    }
})

const MusicPlayer = ({ allForms, songs, currentlySelected, isEmpty = true, isActive = false, peopleForms, lookedUp, isActivePeople = false, isEmptyPeople = true, selectOwnUser}) =>{
    const classes = useStyles();
    const [selectedTab, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };
    return (
        <div className='music-player'>
            <Paper className={classes.root}>
                <ThemeProvider theme={theme}>
                    <Tabs
                        value={selectedTab}
                        onChange={handleChange}
                        indicatorColor="primary"
                        textColor="primary"
                        theme={theme}
                        centered
                    >
                        <Tab label="Canciones"/>
                        <Tab label="Personas"/>
                    </Tabs>
                </ThemeProvider>
            </Paper>
            <div className="bib-content-container">
                { selectedTab === 0 ?
                    <div>
                        <MusicForm allForms={allForms}/>
                        <SearchResults songs={songs} isEmpty={isEmpty} isActive={isActive}/>
                    </div> :
                    <div>
                        <PeopleForm allForms={peopleForms}/>
                        <PeopleResults lookedUp={lookedUp} isEmpty={isEmptyPeople} isActive={isActivePeople}/>
                    </div>
                }
            </div>
            <div className="player-wrapper">
                <Iframe className="responsive-iframe" scrolling="no" frameborder="0" allowTransparency="true"
                        src={`https://www.deezer.com/plugins/player?format=square&autoplay=true&playlist=false&width=400&height=400&color=F59320&layout=&size=big&type=tracks&id=${currentlySelected}&app_id=1`}
                        width="400" height="400"/>
            </div>
        </div>)}


export default  connect(
    state => ({
        allForms: selectors.getFormsSearch(state),
        peopleForms:selectors.getFormsPeople(state),
        songs: selectors.getAllSongs(state),
        currentlySelected: selectors.getCurrentlySelected(state),
        currentUser:selectors.getSelectedUser(state),
        isEmpty: state.form.search ? state.form.search.values === undefined : null,
        isActive: state.form.search ? state.form.search.active !== undefined : null,
        isEmptyPeople: state.form.searchPeople ? state.form.searchPeople.values === undefined : null,
        isActivePeople: state.form.searchPeople ? state.form.searchPeople.active !== undefined : null,
        lookedUp: selectors.getSearchedParameter(state)
    }),
    (dispatch)=>({
        selectUser(currentUser){
            dispatch(userActions.selectUser(currentUser))
        }
    }),
    (stateProps, dispatchProps) => ({
        allForms: stateProps.allForms,
        peopleForms:stateProps.peopleForms,
        songs: stateProps.songs,
        currentlySelected: stateProps.currentlySelected,
        isEmpty: stateProps.isEmpty,
        isActive: stateProps.isActive,
        lookedUp:stateProps.lookedUp,
        selectOwnUser(){
            dispatchProps.selectUser(stateProps.currentUser)
        }
    })
)(MusicPlayer)
