import React, { Component } from 'react';
import Dialog from '@material-ui/core/Dialog';
import AppBar from '@material-ui/core/AppBar';
import { ThemeProvider as MuiThemeProvider } from '@material-ui/core/styles';
import { Player } from 'video-react';
import "../../node_modules/video-react/dist/video-react.css";
import  obrigado  from "../assets/videos/obrigado.mp4";

export class Successo extends Component {

  render() {
    return (
      <MuiThemeProvider>
        <>
          <Dialog
            open
            fullWidth
            maxWidth='sm'
            
          >
            <div style={{padding: '15px'}}>
            <AppBar title="Success" />
            <h1>Obrigado pela confirmação</h1>

            <Player 
            playsInline
            autoplay
            src={obrigado}
            videoId="obrigado"
            />
            {/* <p>Você receberá uma mensagem em seu email cadastrado contendo mais informações sobre sua solicitação.</p> */}
            </div>
          </Dialog>
        </>
      </MuiThemeProvider>
    );
  }
}

export default Successo;