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
    insertar(nuevo, posicion){
        let aux = this.primero;
        let posCount= 2;
        if(posicion==1){
            nuevo.siguiente = aux;
            this.primero= nuevo;
            console.log(this.primero.siguiente);
            return;
        }
        while(aux!=null){
            if(posCount==posicion){
                nuevo.siguiente = aux.siguiente;
                aux.siguiente= nuevo;
                aux = aux.siguiente;
                console.log(aux);
                return;
            }
            else{
                posCount++;
                aux=aux.siguiente
            }
        } 
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
    listadoInverso(){
        let res = "";
        let aux = this.primero;
        let aux2;
        while(aux!=null){
          aux2 = res;
          res = "";
          res += aux.info() + ""+ aux2;  
          aux = aux.siguiente
        }
        return res;
    }
    buscar(codigo){
        let aux = this.primero;
        while(aux!= null){
            if(aux.codigo==codigo){
                return aux;
            }
            else{
                aux= aux.siguiente;
            }
        }
    }
}