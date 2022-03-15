import React from "react"
import Formulario from './Formulario';
import Confirmacao from './Confirmacao';
import Sucesso from './Sucesso';
import Sociodemografico from './Sociodemografico';
import { Switch, Route } from "react-router-dom";


export const Rotas = () => {
    return (
        <Switch>
            <Route path="/" component={Formulario} exact/>
            <Route path="/confirmacao" component={Confirmacao} />
            <Route path="/sucesso" component={Sucesso} />
            <Route path="/sociodemografico" component={Sociodemografico} />
            <Route component={() => <h1>Erro 404!</h1>} />
        </Switch>
    )
}