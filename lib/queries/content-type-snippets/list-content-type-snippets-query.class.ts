import { Observable } from 'rxjs';

import { IManagementClientConfig } from '../../config';
import { ContentTypeSnippetResponses } from '../../responses';
import { ContentManagementQueryService } from '../../services';
import { BaseListingQuery } from '../base-listing-query';

export class ListContentTypeSnippetsQuery extends BaseListingQuery<
    ContentTypeSnippetResponses.ContentTypeSnippetListResponse
> {
    constructor(protected config: IManagementClientConfig, protected queryService: ContentManagementQueryService) {
        super(config, queryService);
    }

    toObservable(): Observable<ContentTypeSnippetResponses.ContentTypeSnippetListResponse> {
        return this.queryService.listContentTypeSnippets(this.getUrl(), this.queryConfig);
    }

    protected getAction(): string {
        return this.apiEndpoints.listContentTypeSnippets();
    }
}
