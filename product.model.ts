export class Product{
    constructor(
        public id?: number,
        public name?: string,
        public category?: string | undefined | null,
        public description?: string,
        public price?: number) { }
}