class Inventario{
    constructor(){
        this.primero=null;
    }

    agregar(nuevo){
        if (this.primero==null){
            this.primero=nuevo;
        }
        else{
          let temp=this.primero;
          while (temp.next!=null){
              temp=temp.next;
              temp.next=nuevo;
          }
        }
        console.log(nuevo);
    }
    eliminar(codigo){
        for (let i=0;i< this.productos.length; i++){
            if(this.productos[i].codigo == codigo){
                let aux =this.productos[i];
                for(let j=i;j<this.productos.length;j++){
                    this.productos[j]= this.productos[j+1];
                }
                this.productos[this.productos.length-1]=aux;
                this.productos.pop();
            }
        }
        return null;
    }
    listado(){
        let res="";
        let temp=this.primero;
        while(temp!=null){
            res+=temp.infoHtml() + "  ";
            temp=temp.next;
        }
        return res;
      }
    listadoInverso(){
        let aux="";
        for (let i=this.productos.length-1;i>=0; i--){
            aux+= this.productos[i].infoHtml();
        }
        return aux;
    }
    buscar(codigo){
        let left= 0;
        let right= this.productos.length-1;
        console.log('right ' + right);

        while(left <= right){
            var middle_index =Math.floor((left + right)/2);
            console.log('right ' + right);
            console.log('left ' + left);
            console.log('mid i ' + middle_index);
            let middle_value = this.productos[middle_index].codigo;
            console.log('mid v' + middle_value);

            if(codigo== middle_value){
                return this.productos[middle_index];
            }
            if (codigo < middle_value){
                right= middle_index -1;
            }
            else if (codigo > middle_value){
                left= middle_index +1;
            }
        }
        console.log('mid i ' + middle_index)
        return null;
    }
}