const cds = require('@sap/cds');

<% if(v2support){ -%>
const proxy = require('@sap/cds-odata-v2-adapter-proxy');
<% } -%>

cds.on('bootstrap', app => {

<% if(v2support){ -%>
    app.use(proxy());
<% } -%>

<% if(multiTenant){ -%>
    cds.mtx.in(app).then(async () => {
        const provisioning = await cds.connect.to('ProvisioningService');
        provisioning.impl(require('./provisioning'));
    });
<% } -%>

});

module.exports = cds.server;
