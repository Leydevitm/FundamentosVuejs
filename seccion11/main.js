const app = Vue.createApp({
    data(){
        return {
            titulo: "Mi banco con VUE.js",
            cantidad:1000,
            enlace: "https://youtube.com/bluuweb",
            estado:true,
            servicios: [
                'transferencias',
                'pagos',
                'giros'
            ],
            desactivar:false
        }
    },
    methods: {
        agregarSalto() {
            this.cantidad += 100;
        },
        disminuirSalto(valor){
            if(this.cantidad ===0){
                this.desactivar =true
                alert('salto en 0');
                
                return 
            }

            this.cantidad= this.cantidad -valor;
        }
    },
    computed:{
        colorCantidad(){
            return this.cantidad > 500 ? 'text-success' : 'text-danger'
        },
        mayusculaTexto(){
            return this.titulo.toUpperCase();
        }
    }
});
