export class Person{
    private id: string;
    private firstname: string;
    private lastname: string;

    constructor(theId:string, theFirstname:string, theLastname:string){
        this.id = theId;
        this.firstname = theFirstname;
        this.lastname = theLastname;
    }

    public getFirstName(){
        return this.firstname;
    }

    public getLastName(){
        return this.lastname;
    }

    public getId(){
        return this.id;
    }
}