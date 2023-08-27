export interface Toggle {
    id: string;
    name: string;
    type: ToggleTypes;
    default: boolean;
}

export interface CreateToggle {
    name: string;
    type: ToggleTypes;
    default: boolean;
}

export enum ToggleTypes {
    BOOLEAN,
    INTEGER,
    STRING,
}
