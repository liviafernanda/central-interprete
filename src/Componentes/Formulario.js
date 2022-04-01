import React, { Component } from "react";
import { Typography, Tooltip, InputLabel, FormControl, NativeSelect, CssBaseline, Grid, Toolbar, Container } from '@material-ui/core';
import AppBar from '@material-ui/core/AppBar';
import { ThemeProvider as MuiThemeProvider } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { AttachFile, Copyright } from '@material-ui/icons';
import { Player } from 'video-react';
import { Link } from 'react-router-dom';

import "../../node_modules/video-react/dist/video-react.css";

import video1 from "../assets/videos/9.mp4";
import video2 from "../assets/videos/10.mp4";
import video3 from "../assets/videos/11.mp4";
import Swal from "sweetalert2";


class Formulario extends Component {
    constructor(){
        super();
        this.state = { localAula: '', assuntoAula: '', dataAula: '', horaInicial: '', horaFinal: '', interprete: '' }
    }

    camposVazios=(e)=>{
        const { localAula, assuntoAula, dataAula, horaInicial, horaFinal, interprete } = this.state;

        if(!localAula){
        e.preventDefault();
        Swal.fire({
            icon: 'warning', 
            title: "<strong>insira o local da aula.<strong>",
            html: '<video width="400" id="erroLocal" src="https://liviafernanda.github.io/repositoriovideos/static/media/12.a735b3fa6bc2a4564624.mp4" controls></video>',
        });
        return false;
    }

        if(!assuntoAula){
            e.preventDefault();
            Swal.fire({
                icon: 'warning', 
                title: "<strong>insira o assunto da aula.<strong>",
                html: '<video width="400" id="erroAssunto" src="https://liviafernanda.github.io/repositoriovideos/static/media/13.aacbcd18f97701babcb5.mp4" controls></video>',
            });
            return false;
        }

        if(!dataAula){
            e.preventDefault();
            Swal.fire({
                icon: 'warning', 
                title: "<strong>insira a data da aula.<strong>",
                html: '<video width="400" id="erroData" src="https://liviafernanda.github.io/repositoriovideos/static/media/14.dc1f17f3f913c6cb3c5a.mp4" controls></video>',
            });
            return false;
        }

        if(!interprete){
            e.preventDefault();
            Swal.fire({
                icon: 'warning', 
                title: "<strong>insira o intérprete da aula.<strong>",
                html: '<video width="400" id="erroInterprete" src="https://liviafernanda.github.io/repositoriovideos/static/media/16.836fde94ca12de733240.mp4" controls></video>',
            });
            return false;
        }
}

     
    render(){
        const { localAula, assuntoAula, dataAula, horaInicial, horaFinal, interprete } = this.state;

        return(
            <MuiThemeProvider>
            <>
              <CssBaseline />
               
                  <AppBar position="relative" title="Enter User Details" >
                    <Toolbar>
                    <AttachFile />
                      <Typography variant="h5"> Requerimento de Solicitação </Typography>
                    </Toolbar>
                  </AppBar>

                  <main>
                      <div>
                          <form onSubmit={event => this.requerimento(event)}>
                          <Container maxWidth="sm" style={{ marginTop: '50px'}} >
                          
                          <Player
                            playsInline
                            src={video1}
                            videoId="video1"
                            />
                            <Typography variant="body1">Coloque as informações sobre a aula</Typography>

                            <TextField
                            placeholder="Local da aula"
                            label="Local da aula"
                            id="local"
                            value={localAula} 
                            onChange={(e) => this.setState({localAula: e.target.value})}
                            margin="normal"
                            fullWidth
                            />
                            <TextField
                            placeholder="Assunto da aula"
                            label="Assunto da aula"
                            id="assunto"
                            value={assuntoAula} 
                            onChange={(e) => this.setState({assuntoAula: e.target.value})}
                            margin="normal"
                            fullWidth
                            />
                        <br /><br />
                        <Player 
                            playsInline
                            src={video2} videoId="video2"/>
                        <Typography variant="body1">Coloque o dia e a hora da aula</Typography>
                        <TextField
                            placeholder="Digite a data"
                            id="data"
                            label="Data da aula"
                            value={dataAula} 
                            onChange={(e) => this.setState({dataAula: e.target.value})}
                            margin="normal"
                            fullWidth
                            
                        />
                        
                        <Grid container spacing={2} justify="center">
                            <Grid item xs={6}>
                            <TextField
                            placeholder="Digite a hora inicial"
                            label="Hora Inicial"
                            id="horaInicio"
                            value={this.state.horaInicial} 
                            onChange={(e) => this.setState({horaInicial: e.target.value})}
                            margin="normal"
                            fullWidth
                        />
                            </Grid>
                            <Grid item xs={6}>
                            <TextField
                            placeholder="Dgite a hora final"
                            label="Hora final"
                            id="horaFim"
                            value={this.state.horaFinal} 
                            onChange={(e) => this.setState({horaFinal: e.target.value})}
                            margin="normal"
                            fullWidth
                        />
                            </Grid>
                        </Grid>
                        <br /><br/>
                        <Player 
                            playsInline
                            src={video3} videoId="video3"/>
                        <Typography variant="body1">Escolha o intérprete para a aula</Typography>
                        <br /> <br/>
                        <FormControl fullWidth>
                            <InputLabel variant="standard" htmlFor="interpretes">
                            Intérprete
                            </InputLabel>
                            <NativeSelect
                            value={interprete} 
                            onChange={(e) => this.setState({interprete: e.target.value})}
                            inputProps={{
                                name: 'interprete',
                                id: 'interpretes',
                            }}
                            >
                            <option value={1}>Selecione...</option>
                            <option value={"Maria da Silva"}>Maria da Silva</option>
                            <option value={"João Pedro Santos"}>João Pedro Santos</option>
                            <option value={"Daniela Alves"}>Daniela Alves</option>
                            
                            </NativeSelect>
                        </FormControl>
                        <br />
                        <br />

                            <div style={{ marginTop: '20px' }}>
                            <Grid container spacing={2} justify="center">
                                <Grid item>
                               
                               <Link to={{
                                   pathname: "/confirmacao", 
                                   state: {localAula: this.state.localAula, assuntoAula: this.state.assuntoAula, dataAula: this.state.dataAula, horaInicial: this.state.horaInicial, horaFinal: this.state.horaFinal, interprete: this.state.interprete}
                                   }}>
                                <Tooltip arrow title="Requerimento enviar">
                                <Button
                                onClick={this.camposVazios}
                                color="primary"
                                variant="contained"
                                id="botaoSalvar"
                                                                
                                >Salvar</Button>
                                </Tooltip>
                                </Link>
                                </Grid>
                            </Grid>
                            </div>

                            
                              
                          </Container>
                          </form>
                      </div>
                  </main>

                  <footer id="footer" style={{ marginTop: '50px' }}>
                    <AppBar position="relative" title="Enter User Details" >
                    <Toolbar>
                    <Copyright justify="center" />
                        <p>2022 - Todos os direitos reservados.</p>
                    </Toolbar>
                    </AppBar>

                </footer>

            </>
            </MuiThemeProvider>
            
            
        )
            
        
    }

}

export default Formulario;