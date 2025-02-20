import { BaseResponses } from '../../../lib';
import { cmClient, getTestClientWithJson, testEnvironmentId } from '../setup';

describe('Change workflow of language variant', () => {
    let response: BaseResponses.EmptyContentManagementResponse;

    beforeAll(async () => {
        response = await getTestClientWithJson(undefined)
            .changeWorkflowOfLanguageVariant()
            .byItemCodename('x')
            .byLanguageCodename('y')
            .withData({
                step_identifier: {
                    codename: 'x'
                },
                workflow_identifier: {
                    codename: 'y'
                },
                contributors: [
                    {
                        id: 'x'
                    }
                ],
                due_date: {
                    value: '2024-02-26T06:04:00.7069564Z'
                },
                note: 'x'
            })
            .toPromise();
    });

    it(`url should be correct`, () => {
        const w1Url = cmClient
            .changeWorkflowOfLanguageVariant()
            .byItemCodename('x')
            .byLanguageCodename('y')
            .withData({
                step_identifier: {
                    codename: 'x'
                },
                workflow_identifier: {
                    codename: 'y'
                }
            })
            .getUrl();
        const w2Url = cmClient
            .changeWorkflowOfLanguageVariant()
            .byItemCodename('x')
            .byLanguageCodename('y')
            .withData({
                step_identifier: {
                    codename: 'x'
                },
                workflow_identifier: {
                    codename: 'y'
                }
            })
            .getUrl();

        expect(w1Url).toEqual(
            `https://manage.kontent.ai/v2/projects/${testEnvironmentId}/items/codename/x/variants/codename/y/change-workflow`
        );
        expect(w2Url).toEqual(
            `https://manage.kontent.ai/v2/projects/${testEnvironmentId}/items/codename/x/variants/codename/y/change-workflow`
        );
    });

    it(`response should be instance of EmptyContentManagementResponse class`, () => {
        expect(response).toEqual(jasmine.any(BaseResponses.EmptyContentManagementResponse));
    });

    it(`response should contain debug data`, () => {
        expect(response.debug).toBeDefined();
    });

    it(`response should NOT contain data`, () => {
        expect(response.data).toBeUndefined();
    });
});
