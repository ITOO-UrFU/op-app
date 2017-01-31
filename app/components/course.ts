export class Course{
 /*   public id: number;
    public title: string;
    public start_date: string;
    public type: string;
    public image: string;
    public profession_count: number;
    public program_count: number;
    public duration: number;
    public results_text: string;
    public authors: any;
    public workload: any;
    public video: any;
    public results: any;
    public slug: any;
    public sessions: any;
    public points: any;
    public description: any;
    public about: any;
    public external_link: any;
    public authors_ordering: any;*/

    constructor(obj: any) {
        for(let el in obj){
            this[el] = obj[el];
        }
    }
}


/*       id: number
       title: string,
        start_date: string,
        type: string,
        image: string,
        profession_count: number,
        program_count: number,
        duration: number,
        results_text: string,
        authors: any,
        workload: any,
        video: any,
        results: any,
        slug: any,
        sessions: any,
        points: any,
        description: any,
        about: any,
        external_link: any,
        authors_ordering: any*/