class Producto{
    constructor(codigo,nombre,cantidad,costo){
        this.codigo=codigo;
        this.nombre=nombre;
        this.cantidad=cantidad;
        this.costo=costo;
        this.next=null;
    }
    info(){
        //4> lapiz (10) $20
        return `${this.codigo}> ${this.nombre} (${this.cantidad}) $${this.costo}`; 
    }
    infoHtml(){
        return `<div><h4> codigo: ${this.codigo} nombre: ${this.nombre} cantidad: ${this.cantidad} costo: $${this.costo}</h4></div>`;
    }
}