# Comunicacion entre Padre - Hijo


### Comunicacion de Padre a Hijo mediante Input de tal manera que el Padre se comunica a traves de una variable compartida


# Comunicacion entre Hijo - Padre


### Comunicacion de Hijo a Padre mediante un evento que es detonado por un Boton

#### El evento es de tipo Output ( instancia de un EventEmitter ) el cual envia un parametro $event


#### El parametro $event es recogido por el padre a traves de un metodo ligado a dicho evento ( evento_hijo ) = metodoAceptador($event)
