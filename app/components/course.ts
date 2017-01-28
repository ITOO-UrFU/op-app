export class Course{
    constructor(
        public id: number,
        public username: string,
        public start_date: string,
        public type: string,
        public image: string,
        public profession_count: number,
        public program_count: number,
    ) {}
}
