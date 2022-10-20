class Inventario{
    constructor(){
        this.primero=null;
    }

    agregar(nuevo){ // LISTA ENLAZADA LISTO
        if (this.primero==null)
            this.primero=nuevo;
        else{
            let temp=this.primero;
            while (temp.siguiente!=null)
            temp=temp.siguiente;
            temp.siguiente=nuevo;
        }
        console.log(nuevo);
    }
    eliminar(codigo){
        if(this.primero.codigo==codigo){
            this.primero=this.primero.siguiente;
            return;
        }
        else{
            let aux=this.primero;
            while(aux!=null){
                if(aux.siguiente.codigo==codigo){
                    aux.siguiente=aux.siguiente.siguiente;
                    return;
                }
                else{
                    aux=aux.siguiente;
                }
            }
        }
    }
    listado(){
        let res="";
        let aux=this.primero;
        while (aux!=null){
            res += aux.info();
            aux=aux.siguiente;
        }
        return res;
      }
    buscar(codigo){
        
    }
}