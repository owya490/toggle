import { FlagTypeEnum } from "./types";

export abstract class AbstractFlagType {
    id: string;
    value: FlagTypeEnum;
    defaultServing: any;

    constructor(id: string, value: FlagTypeEnum) {
        this.id = id;
        this.value = value;
    }
}

export class BooleanFlagType extends AbstractFlagType {
    constructor(id: string, defaultServing: boolean) {
        super(id, FlagTypeEnum.BOOLEAN);
        this.defaultServing = defaultServing;
    }
}
