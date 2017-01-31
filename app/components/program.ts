export class Program{
    /*public id: number;
    public title: string;
    public modules: string[];*/

    constructor(obj: any) {
       for(let el in obj){
            this[el] = obj[el];
        }
    }
}