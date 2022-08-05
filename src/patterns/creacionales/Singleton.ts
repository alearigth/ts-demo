class Singleton {
    private static instance: Singleton

    private constructor() { }

    public static getInstance(): Singleton {
        if (!Singleton.instance) {
            Singleton.instance = new Singleton(); // se crea la instancia compartida a nivel de la aplicacion
        }

        return Singleton.instance;
    }
    public mostrarPorConsola() {
        console.log("metodo de singleton")
    }
}