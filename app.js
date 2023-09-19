const autosImportados = require('./autos');

let concesionaria = {
    autos: autosImportados,
    buscarAuto: function (patente) {
        const encontrado = this.autos.find((auto) => {
            return auto.patente === patente;
        });
        return encontrado || null;
    },

    venderAuto: function (patente) {
        let autoModificado = this.buscarAuto(patente);
        if (autoModificado) {
            autoModificado.vendido = true;
        };
        return autoModificado || "Auto no encontrado"
    },

    autosParaLaVenta: function () {
       return this.autos.filter(auto => !auto.vendido);

    },

    autosNuevos : function () {
        //const autosSinVender = this.autosParaLaVenta();
        return this.autosParaLaVenta().filter(auto => auto.km <= 100);
    }



}

console.log(concesionaria.autosNuevos());