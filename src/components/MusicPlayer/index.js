import React from 'react';
import Iframe from 'react-iframe';
import { connect } from "react-redux";

import SearchResults from "../SearchResults";
import MusicForm from '../MusicForm';
import PeopleResults from "../PeopleResults";

import './styles.css';
import * as selectors from "../../reducers";
import * as userActions from '../../actions/users'
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import {createMuiTheme, makeStyles, ThemeProvider} from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import reverse from "lodash/reverse";
import Post from "../Post";
import Index from "../PeopleForm";
import {Link} from "react-router-dom";

// const type = 'tracks';
// const id = '457602422';
// const searchTerm = 'Kendrick Lamar';
// const getInfoWithID = `https://api.deezer.com/${type}/${id}`;
// const getIDWithInfo = `https://api.deezer.com/search/${type}/?q=${searchTerm}&index=0&limit=1&output=json`;
// const url = `https://www.deezer.com/plugins/player?format=classic&autoplay=true&playlist=true&width=432&height=350&color=F59320&layout=dark&size=medium&type=${type}&id=${id}&app_id=1`;
/*const corsURLID = `https://cors-anywhere.herokuapp.com/${getInfoWithID}`;
const corsURLInfo = `https://cors-anywhere.herokuapp.com/${getIDWithInfo}`;
const axios = require('axios').default;*/
/*axios.get(corsURLInfo).then(function (response) {
    console.log(response.data.data[0].id)
});*/



const height = content => {
    const result = Math.ceil(content.length/64) * 27 + 148;
    return result;
}


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

const MusicPlayer = ({ allForms, songs, currentlySelected, isEmpty = true, isActive = false, peopleForms, lookedUp, selectOwnUser}) =>{
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
                        <Index allForms={peopleForms}/>
                        {lookedUp ? <PeopleResults/>:<p>Busca a un usuario</p>}
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
        lookedUp:selectors.getSearchedParameter(state)
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
