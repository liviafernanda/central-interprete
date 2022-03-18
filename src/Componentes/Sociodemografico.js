import React, { Component } from "react";
import AppBar from '@material-ui/core/AppBar';
import { ThemeProvider as MuiThemeProvider } from '@material-ui/core/styles';
import { Typography, InputLabel, FormControl, NativeSelect, CssBaseline, Grid, Toolbar, Container } from '@material-ui/core';
import { QuestionAnswer } from '@material-ui/icons';

class Sociodemografico extends Component {

    render(){
        return(

            <MuiThemeProvider>
            <>
              <CssBaseline />
               
                  <AppBar position="relative" title="Enter User Details" >
                    <Toolbar>
                    <QuestionAnswer style={{ marginRight: "8px"}} />
                      <Typography variant="h5"> Questionário Sociodemografico </Typography>
                    </Toolbar>
                  </AppBar>
            </>
            </MuiThemeProvider>

        )
    }
}

export default Sociodemografico;