// Métodos de propiedad

const reproductor = {
    reproducir : function(id) {
        console.log(`Reproduciendo canción con el ID: ${id}`);
    },
    pausar: function(){
        console.log('Pausando...');
    },
    crearPlayList: function(nombre) {
        console.log(`Creando la PlayList: ${nombre}`);
    },
    reproducirPlayList: function(nombre) {
        console.log(`Reproduciendo la PlayList: ${nombre}`);
    }
}

// Se pueden declarar funciones fuera del método
reproductor.borrarCancion = function(id){
    console.log(`Elimnando la canción: ${id}`);
}

reproductor.reproducir(3840);
reproductor.pausar();
reproductor.borrarCancion(20);
reproductor.crearPlayList('Chill 100%');
reproductor.reproducirPlayList('Chill 100%');