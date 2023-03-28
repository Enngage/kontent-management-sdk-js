import { SpaceContracts } from '../../contracts';
import { SharedModels } from '../shared/shared-models';

export namespace SpaceModels {

    export type ModifySpaceOperation = 'replace';

    export interface IModifySpaceData {
        op: ModifySpaceOperation;
        property_name: string;
        value: string;
    }

    export interface IAddSpaceData {
        name: string;
        codename?: string;
    }

    export class Space implements SharedModels.IBaseModel<SpaceContracts.ISpaceContract> {

        public id!: string;
        public name!: string;
        public codename!: string;
        public _raw!: SpaceContracts.ISpaceContract;

        constructor(
            data: {
                id: string,
                name: string,
                codename: string,
                _raw: SpaceContracts.ISpaceContract
            }
        ) {
            Object.assign(this, data);
        }
    }
}

