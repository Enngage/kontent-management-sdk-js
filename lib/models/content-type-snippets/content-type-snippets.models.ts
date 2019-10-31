import { ElementsInContentType } from '../content-types/content-type-elements.builder';
import { ElementModels } from '../elements/elements.models';

export namespace ContentTypeSnippetModels {
    export class ContentTypeSnippet {
        public id!: string;
        public name!: string;
        public codename!: string;
        public lastModified!: Date;
        public elements!: ElementModels.ElementModel[] | ElementModels.MultipleChoiceElementModel[];

        constructor(data: {
            id: string;
            name: string;
            codename: string;
            lastModified: Date;
            elements: ElementModels.ElementModel[] | ElementModels.MultipleChoiceElementModel[];
        }) {
            Object.assign(this, data);
        }
    }

    export interface IAddContentTypeSnippetData {
        name: string;
        external_id?: string;
        elements: ElementsInContentType.IElementInContentType[];
    }
}
