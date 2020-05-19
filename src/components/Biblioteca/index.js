import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';

import './styles.css';

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

const Biblioteca = () => {
    const classes = useStyles();
    const [selectedTab, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return(
        <div>
            <div className="bib-screen-container">
                <div className="bib-header-container">
                    
                </div>
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
                            <Tab label="Canciones" />
                            <Tab label="Posts" />
                        </Tabs>
                    </ThemeProvider>
                </Paper>
            </div>
        </div>
    )
}

export default Biblioteca;