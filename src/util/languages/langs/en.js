import config from "build/config/config";

export default {

    global:{
        webWallet: "WebWallet",
    },

    pages:{

        homepage:{
            title: "World's First Anonymous Exchange",
            subTitle: "Anonymous payments made easy for average Joe",
            blocks: 'Blocks',
            transactions: 'Transactions',
            uniqueAccounts: 'Unique Accounts',
            realTimeDataFrom: 'Real time data from',
            testNetBlockchainExplorer: 'Test net blockchain explorer',

            anonymousCashForTheInternet: 'Anonymous cash for the internet',
            worldsFirstAnonymousDecentralizedExchange: "World's First Anonymous Decentralized Exchange",
            itsFastPrivateAndSecure: `It's fast, private and secure. With ${config.app.name}, you are your own bank. You can send money totally anonymously to anyone knowing that others cannot see your balance or track your activity.`,

            getPaidAnonymously: 'Get Paid Anonymously',
            itsUntraceable: "It's untraceable",
            sendingReceivingAddressesObfuscated: `Sending and receiving addresses as well as transacted amounts are obfuscated by default. Transactions on the ${config.app.name} cannot be linked to a particular user or real-world identity.`,

            privateDigitalCurrency: "Private Digital Currency",
            withASingleClick: "with a Single Click",
            neverBeenEasierToSendAndReceiveMoney: "Never been easier to send and receive money internationally totally anonymously and untraceable.",

            youAreYourOwnBank: `You are your own bank`,
            withNameYouAreYourOwnBank: `With ${config.app.name}, you are your own bank and others cannot see your balances or track your activity. Say hello to ${config.app.name}.`,
            nameIsSecure: `${config.app.name} is secure`,
            unstoppableByUsingDecentralizedBlockchain: `Unstoppable by using decentralized blockchain technology secured by a network of users.`,
            nameIsPrivate: `${config.app.name} is private`,
            youOwnYourOwnKey: `You own your own key and nobody can track you.`,

        },

        contact:{

        },

        faq:{

        }

    },

    layout:{

        header:{

            navbar:{

            },

        },

        footer:{

        },

    }



}