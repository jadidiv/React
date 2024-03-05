import Keycloak from 'keycloak-js';

const keycloakConfig = {
    url: 'http://192.168.12.231:8080/auth/',
    realm: 'ISC',
    clientId: 'contact',
};
const keycloak = new Keycloak(keycloakConfig);

export default keycloak;