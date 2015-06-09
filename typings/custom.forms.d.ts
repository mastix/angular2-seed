declare module "angular2/forms" {
    export class FormBuilder{
        constructor();
        group(x: any): ControlGroup;
    }
//  export class FormDirectives { constructor(); }
    function formDirectives(): void;
    function FormDirectives(): void;
    export class ControlGroup {
        constructor();
        controls: any;
    }
    export class Validators{
        static required: any;
    }
}