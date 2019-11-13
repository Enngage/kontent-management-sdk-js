import { Observable } from 'rxjs';

import { IManagementClientConfig } from '../../config';
import { Identifiers } from '../../models';
import { LanguageVariantResponses } from '../../responses';
import { ContentManagementQueryService } from '../../services';
import { BaseListingQuery } from '../base-listing-query';

export class ListLanguageVariantsOfContentTypeQuery extends BaseListingQuery<
    LanguageVariantResponses.ListLanguageVariantsOfContentTypeResponse
> {
    constructor(
        protected config: IManagementClientConfig,
        protected queryService: ContentManagementQueryService,
        protected identifier: Identifiers.ContentTypeIdentifier
    ) {
        super(config, queryService);
    }

    toObservable(): Observable<LanguageVariantResponses.ListLanguageVariantsOfContentTypeResponse> {
        return this.queryService.listLanguageVariantsOfContentType(this.getUrl(), this.queryConfig);
    }

    protected getAction(): string {
        return this.apiEndpoints.listLanguageVariantsOfContentType(this.identifier);
    }
}
