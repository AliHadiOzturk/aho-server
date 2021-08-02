export default class AppResponse {
    status: number = 200;
    result: boolean = true;
    data: any;
    /**
     *
     */
    constructor(data: any) {
        this.data = data;
    }
}