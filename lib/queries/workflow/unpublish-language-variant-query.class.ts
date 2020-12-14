import { Observable } from 'rxjs';

import { IManagementClientConfig } from '../../config';
import { Identifiers, WorkflowModels } from '../../models';
import { BaseResponses } from '../../responses';
import { ContentManagementQueryService } from '../../services';
import { BaseQuery } from '../base-query';

export class UnpublishLanguageVariantQuery extends BaseQuery<BaseResponses.EmptyContentManagementResponse> {
    constructor(
        protected config: IManagementClientConfig,
        protected queryService: ContentManagementQueryService,
        public contentItemIdentifier: Identifiers.ContentItemIdentifier,
        public languageIdentifier: Identifiers.LanguageIdentifier,
        public data?: WorkflowModels.IUnpublishLanguageVarianthData
    ) {
        super(config, queryService);
    }

    toObservable(): Observable<BaseResponses.EmptyContentManagementResponse> {
        return this.queryService.unpublishLanguageVariant(this.getUrl(), this.data, this.queryConfig);
    }

    protected getAction(): string {
        return this.apiEndpoints.unpublishLanguageVariant(this.contentItemIdentifier, this.languageIdentifier);
    }
}
