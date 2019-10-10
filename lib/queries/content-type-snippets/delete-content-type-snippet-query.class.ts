import { Observable } from 'rxjs';

import { IManagementClientConfig } from '../../config';
import { Identifiers } from '../../models';
import { BaseResponses } from '../../responses';
import { ContentManagementQueryService } from '../../services';
import { BaseQuery } from '../base-query';

export class DeleteContentTypeSnippetQuery extends BaseQuery<BaseResponses.EmptyContentManagementResponse> {
    constructor(
        protected config: IManagementClientConfig,
        protected queryService: ContentManagementQueryService,
        public identifier: Identifiers.ContentTypeIdentifier
    ) {
        super(config, queryService);
    }

    toObservable(): Observable<BaseResponses.EmptyContentManagementResponse> {
        return this.queryService.deleteContentTypeSnippet(this.getUrl(), this.queryConfig);
    }

    protected getAction(): string {
        return this.apiEndpoints.deleteContentTypeSnippet(this.identifier);
    }
}
