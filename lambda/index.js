import { SkillBuilders } from 'ask-sdk-core';
import { request, error } from './libs/handlers';

const skillBuilder = SkillBuilders.standard();

export const handler = skillBuilder
    .addRequestHandlers(
        ...request,
    )
    .addErrorHandlers(
        ...error,
    )
    .lambda();
