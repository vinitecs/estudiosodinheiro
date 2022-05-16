export class listaJogos{
    public listajogos:Array<any>
    constructor(){}

    public getLista(){
        return this.listajogos
    }
    public setLista(lista:Array<any>){
  
        this.listajogos = lista
    }
}