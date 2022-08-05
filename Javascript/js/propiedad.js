//metodos de propiedad
//tiene sintaxis de metodo
const reproductor = {
    //reproducir es objeto
    reproduir : function(id)
    {
    console.log(`Reproduciendo Cancion: ${id}`)
    },

    pausar : function()
    {
        console.log(`Pausando`);
    },
    createPlaylist: function(id) {
        console.log(`creando la playlist: ${id}`);

    },
    playPlaylist: function(id) {
        console.log(`Reproduciendo la playlist: ${id}`);

    }
}

//agregamos por fuera del objeto
reproductor.borrarCancion = function(id)
{
    console.log(`eliminacion cancion ${id}`)
}

//llamar el metodo
reproductor.reproduir(1);
reproductor.pausar();
reproductor.borrarCancion(1);
reproductor.createPlaylist('Desamor');
reproductor.playPlaylist('Desamor')