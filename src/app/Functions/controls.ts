export class ControlBase {

    id: number; // internal use only
    fieldName: string;
    label: string;
    controlType;
    constructor(id: number, label: string, fieldName: string, controlType: string
    ) {
        this.controlType = controlType;
        this.id = id;
        this.label = label;
        this.fieldName = fieldName;
    }
}


/*
export class TextBoxControl extends ControlBase {

    controlType: string = 'textbox';
    defaultValue: string;
    constructor(id: number, label: string, fieldName: string) {
        super(id, label, fieldName);
    }
}

export class NumberBoxControl extends ControlBase {

    controlType: string = 'numberbox';

    defaultValue: string;
    constructor(id: number, label: string, fieldName: string) {
        super(id, label, fieldName);
    }

}

*/



