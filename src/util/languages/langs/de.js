/**
 * AUTHORS:
 *
 *
 *
 */


import config from "build/config/config";

export default {

    global:{
        webWallet: "WebWallet",
        explorer: `Block Explorer`,
        faq: `FAQ`,
    },

    pages:{

        homepage:{

            title: "Erster Anonyme Exchange Weltweit",
            subTitle: "Einfache Anonyme Zahlungen für Normalverbrauchern",
            blocks: 'Blocks',
            transactions: 'Transaktionen',
            uniqueAccounts: 'Eindeutige Accounts',
            realTimeDataFrom: 'Echtzeitdaten',
            testNetBlockchainExplorer: 'Test net blockchain explorer',

            anonymousCashForTheInternet: 'Anonymes Geld für das Internet',
            worldsFirstAnonymousDecentralizedExchange: "Die erste anonyme dezentralisierte Börse der Welt",
            itsFastPrivateAndSecure: `Ist schnell, vertraulich und sicher. Mit ${config.app.name}, sind Sie ihre eigene Bank. Sie können anonyme Zahlungen tätigen ohne das irgendjemand ihren Kontostand oder ihre Zahlungsaktivitäten sehen kann.`,

            getPaidAnonymously: 'Erhalte anonymisierte Zahlungen',
            itsUntraceable: "Ist nicht zurückverfolgbar",
            sendingReceivingAddressesObfuscated: `Senden und Empfangen von Adressen sowie Zahlungsbeträge werden automatisch verschleiert. Die Transaktionen auf ${config.app.name} können keinem bestimmten User oder einer realen Identität zugeordnet werden.`,

            privateDigitalCurrency: "Private Digitale Währung",
            withASingleClick: "Mit einem einzigen Klick",
            neverBeenEasierToSendAndReceiveMoney: "Es war noch nie leichter Geld international zu senden und zu erhalten und das komplett anonym und nicht zurückverfolgbar.",

            youAreYourOwnBank: `Sie sind ihre eigene Bank`,
            withNameYouAreYourOwnBank: `Mit ${config.app.name}, sind Sie ihre eigene Bank und andere können ihren Kontostand oder ihre Zahlungsaktivitäten nicht sehen. Sagen Sie Hallo zu ${config.app.name}.`,
            nameIsSecure: `${config.app.name} ist sicher`,
            unstoppableByUsingDecentralizedBlockchain: `Unaufhaltsam in dem dezentrale Blockchain-Technologie angewendet wird, welche von einem Netzwerk aus Usern geschützt ist.`,
            nameIsPrivate: `${config.app.name} ist privat`,
            youOwnYourOwnKey: `Sie besitzen ihren eigenen Schlüssel und niemand kann ihre Aktivitäten verfolgen.`,

            anonymousPaymentsMadeEasy: `Anonymes Bezahlen lecicht gemacht.`,

            features:{

                makeItPerfect:`Making it perfect for you !`,
                worldFirstAnonymousExchange:`World's first anonymous and untraceable decentralized exchange`,

                private: `Private`,
                privateZether: `Newly cryptographic mechanism Zether that uses Σ-bullets obfuscate the origins, amounts and destinations of all transactions.`,

                untraceable: `Untraceable`,
                obfuscated: `Sending and receiving addresses including transacted amounts are obfuscated by default.`,

                fungible: `Fungible`,
                noBlacklist: `Units of ${config.app.name} can not be blacklisted by vendors or exchanges due to their association in previous transactions.`,

                assetPlusCurrency: `Assets & Currencies`,
                assetPlusCurrencyAnchor: `Anonymous digital assets & currencies that anchor the value of other assets backed by the community.`,

                confidentialBlindedEscrow: `Confidential Blinded Escrow`,
                completelyBlindEscrow: `Escrows don't know the amount, the real sender and the real destination. Escrows are completely blinded.`,

                reviewsForTraders: `Reviews for Traders`,
                reviewsForTradersAnonymous: `To increase the trust between traders in an untrusted network, anonymous reviews can be written down.`,

                encryptedChat: `Encrypted Chat`,
                encryptedChatEndToEnd: `The chat in ${config.app.name}  between traders and blinded escrow are encrypted end to end.`,

                noDeposit: `No deposit`,
                noDepositNoCoins: `${config.app.name} is the first decentralized p2p exchange that allows users to start trading without needing to deposit or owning coins. To buy coins or assets, you don't need to own coins`,

                instantAnonymity: `Instant anonymity & HD Wallets`,
                advancedHdWallet: `It just takes seconds to decrypt and view your balances and transactions. More, it has an advanced HD Wallet implemented.`,

            },


            finished:{

                timeline: `Timeline for PandoraPay Main Net`,
                launchTimeline: `Timeline for launching PandoraPay. We don't want to offer any specific date, but most of the code has already been implemented`,

                dataStructure: `Data structure`,
                networking: `Networking`,
                cryptoAndRingCT: `Crypto & RingCT - Ring Confidential Signatures`,
                blockchainAndConsensus: `Blockchain & Consensus`,
                exchangeFiftyPerCent: `Exchange - 50%`,
                encryptedMessages: `Encrypted Messages`,
                completelyBlindedEscrow: `Completly Blinded Escrow`,
                finalTests: `Final Tests`,

            },


            gotAQuestion: `Got a question? We've got answers on `,
        },

        contact:{
            people: `People`,
            peopleMeetTheCommunity: `Meet us`,

            team: `Meet our small team that make those great products`,
            teamAlexandruIonutBudisteanu: `Alexandru Ionut Budisteanu`,
            teamFounder: `Founder`,
            teamFounderAchievements: `Alexandru is a Forbes Europe 30 under 30 nominee in industry category. In 2013, he was nominated by Time Magazine as one of the most influential teens of the world. MIT named an asteroid with his name.`,

            contactTheCommunity: `Contact`,
            letsTalk: `Let's Talk`,
            waysToContact: `Here are the ways you can contact us with any questions you have`,

            messageReceivedWaitNow: `We received your message and will contact you back soon.`,
            inputYourName: `Your name`,
            inputYourEmail: `Your email`,
            inputYourMessage: `Message`,
            send: `SEND`,
        },

        faq:{
            weGotAnswers: `Frequently Asked Questions`,
            weGotAllTheAnswers: `Got a question? We are here to answer your questions!`,

            questionTypeOfPaymentAccepted: `What payments will be accepted?`,
            answerTypeOfPaymentAccepted: `All payments will be accepted except the payments that offer easily chargebacks scamming the sellers. ${config.app.name} is not limited and users can define their own payment methods including: Face-to-Face, National/International Bank Transfers, SEPA, AliPay, WeChat Pay, Revolut, BTC, ETH, WEBD etc. Some payments that facilitate easy chargebacks will be discouraged for low-ranking buyers. One such chargeback payment is PayPal because it is easy to do chargebacks claiming that you didn't receive the products.`,

            questionPeerToPeerExchange: `How does the Peer-to-Peer Exchange work?`,
            answerPeerToPeerExchange: `A trade is occurred when a buyer acquires from a seller some coins/tokens. The seller will open a trade selling some assets (tokens) and the buyer pays off-chain to acquire these assets (tokens). After the off-chain payment from the buyer is finalized and confirmed, the buyer will get the assets (tokens) from the seller.`,

            questionIsBuyerProtected: `How is the Buyer protected in ${config.app.name} ?`,
            answerIsBuyerProtected: `The Seller who owns assets and wishes to sell them on the exchange will have to deposit anonymously the assets into a special trade account that is still owned by him. Then the seller sets a blinded escrow to this trade account for trading supervision. Now, the seller can't move funds from the trading account without the permission of the escrow. In case of a dispute the buyer can complain proving that he sent the funds to the seller, but the seller is not willfully sending the funds.`,

            questionCompletelyBlindedEscrow: `What is a Completely Blinded Escrow ?`,
            answerCompletelyBlindedEscrow: `A Completely Blinded Escrow will NOT know the amount traded, the address of the real trader, and the address of the real trader. He also doesn't have power to move the funds by himself, he is only used to assure that the buyer is not moving funds promised to a seller.`,

            questionIsTradeChatEncrypted: `Are the chat messages encrypted in the trades ?`,
            answerIsTradeChatEncrypted: `YES! All the chat messages are encrypted peer-to-peer using cryptographic functions namely ECIES - Elliptic Curve Integrated Encryption Scheme.`,

            questionAddressNeedToKnowOnly: `Does the Buyer, Seller, or the Escrow will know each other addresses ?`,
            answerAddressNeedToKnowOnly: `No! The Buyer will not know the Seller real address. The Seller will not know the Buyer real address. The Escrow will not know the Buyer or Seller real addresses or the amount transacted. The buyer and sellers will only know the Escrow Address.`,

            questionProofOwnerFunds: `How does the Buyer know that the Seller has the promised funds?`,
            answerProofOwnerFunds: `If they agreed on the price, the Buyer will automatically ask a proof from the Seller that he has enough funds to do the trade. The Seller will generate a proof showing that he has enough for the trade.`,

            questionCanWeTradeAnything: `What assets/tokens can be traded ?`,
            answerCanWeTradeAnything: `Any real-world asset can be "tokenized" into a digital form and traded on ${config.app.name}. Anybody can issue assets/tokens on ${config.app.name}. The assets/tokens can be pegged by a real-world asset, can be collateralized by a different asset/crypto or even non-collateralized.`,

            questionRingSignatureUntraceable: `How come ${config.app.name} assets/tokens are untraceable ?`,
            answerRingSignatureUntraceable: `${config.app.name} uses Confidential Ring Signatures (like in Monero) meaning that the amounts are hidden (confidential) and a transaction uses random decoys from the network (a ring transaction).`,
        },

    },

    layout:{

        navbar:{
            logoAlt: `${config.app.name}`,

            home: `Home`,
            contact: `Contact`,
        },

        footer:{

            organization: "Organization",
            aboutUs: "About",
            contact: "Contact",

            blockchain: "Blockchain",
            whyUs:`Why ${config.app.name}?`,
            security: "Security",
            termsAndConditions: "Terms and Conditions",

            community: "Community",
            github: "GitHub",
            telegram: "Telegram",

            support: "Support",
            helpCenter: "Help Center",
            guides: "Guides",
            api: "API",

            footer: `© 2020 ${config.app.name}. It is an open source project created by a community.`

        },

    }



}
