import React, { Component } from 'react';
import AppBar from '@material-ui/core/AppBar';
import { Typography, CssBaseline, Grid, Toolbar, Container } from '@material-ui/core';
import { ThemeProvider as MuiThemeProvider } from '@material-ui/core/styles';
import { Link } from 'react-router-dom';
import { List, ListItem, ListItemText } from '@material-ui/core/';
import Button from '@material-ui/core/Button';
import { Done, Copyright } from '@material-ui/icons'

class Confirmacao extends Component {
  constructor(props){
    super(props);
    this.state={
        value:this.props.location.state,
    }

}

render() {

    return (
      <MuiThemeProvider>
        <>
        <div style={{ minHeight: "550px"}}>
          <CssBaseline />
            <AppBar title="Confirmação" >
              <Toolbar>
                <Done spacing={1} />
                <Typography variant="h5">
                  Confirmação
                </Typography>
              </Toolbar>
            </AppBar>

            <main>
              <div id="confirmacao">
                <Container maxWidth="sm" style={{ marginTop: '100px'}}>
                
                <List>
                    <ListItem>
                      <ListItemText primary="Local da aula" secondary={this.props.location.state.localAula} />
                    </ListItem>
                    <ListItem>
                      <ListItemText primary="Assunto da aula" secondary={this.props.location.state.assuntoAula} />
                    </ListItem>
                    <ListItem>
                      <ListItemText primary="Data da aula" secondary={this.props.location.state.dataAula} />
                    </ListItem>
                    <ListItem>
                      <ListItemText primary="Hora inicial" secondary={this.props.location.state.horaInicial} />
                    </ListItem>
                    <ListItem>
                      <ListItemText primary="Hora final" secondary={this.props.location.state.horaFinal} />
                    </ListItem>
                    <ListItem>
                      <ListItemText primary="Intérprete" secondary={this.props.location.state.interprete} />
                    </ListItem>
                    
                  </List>
                  <br />

                  <div>
                    <Grid container spacing={2} justify="center">
                      <Grid item>
                        <Link to="/" >
                        <Button
                          color="secondary"
                          variant="contained"
                          id="botaoVoltar"
                          
                        >Voltar</Button>
                        </Link>
                      </Grid>
                      <Grid item>
                        <Link to="/sucesso">
                        <Button
                          color="primary"
                          id="botaoConfirmar"
                          variant="contained"
                          
                        >Confirmar e Continuar</Button>
                        </Link>
                      </Grid>
                    </Grid>
                  </div>

                </Container>
              </div>
            </main>
            </div>
            <footer id="footer" >
            <AppBar position="relative" title="Enter User Details" >
              <Toolbar>
              <Copyright justify="center" />
                <p>2022 - Todos os direitos reservados.</p>
              </Toolbar>
            </AppBar>

            </footer>
            
         
        </>
      </MuiThemeProvider>
    );
  }
}

export default Confirmacao;