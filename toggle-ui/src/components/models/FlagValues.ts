import { FlagTypeEnum } from "./types";

export abstract class AbstractFlagType {
    value: FlagTypeEnum;
    defaultServing: any;

    constructor(value: FlagTypeEnum) {
        this.value = value;
    }
}

export class BooleanFlagType extends AbstractFlagType {
    constructor(defaultServing: boolean) {
        super(FlagTypeEnum.BOOLEAN);
        this.defaultServing = defaultServing;
    }
}
