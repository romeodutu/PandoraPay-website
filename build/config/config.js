module.exports = {

    port: 8000,

    app: {
        name: "PandoraPay",
        version: "0.1",
        description: "World's First Anonymous Decentralized P2P Exchange",
        logo: "/public/assets/images/pandora-pay-logo",
        image: "/public/assets/images/pandora-cover-image",
        keywords: ["decentralized", "pandora pay", "zero"],

        wallet: "http://pandorapay.ddns.net:8080",
        explorer: "http://pandorapay.ddns.net:8080/explorer",
    },

    consensus: [{
        address: "http://localhost:4000",
    }],

}