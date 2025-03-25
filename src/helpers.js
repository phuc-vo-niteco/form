const { supportsVersion, applePayCapabilities, canMakePayments, canMakePaymentsWithActiveCard } = window.ApplePaySession;
const logs = [];

export default pipeLines = {
    hooks: [
        {
            action: supportsVersion,
            type: 'supportsVersion'
        },
        {
            action: applePayCapabilities,
            type: 'applePayCapabilities',
        },
        {
            action: canMakePayments,
            type: 'canMakePayments',
        },
        {
            action: canMakePaymentsWithActiveCard,
            type: 'canMakePaymentsWithActiveCard',
        }
    ]
};

pipeLines.hooks.forEach(hook => {
    if (hook.action) {

    } else {
        logs.push(`NA - ${hook.action}`);
    }
});