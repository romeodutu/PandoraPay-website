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

            anonymousPaymentsMadeEasy: `Anonymous payments made easy.`,
            webDWallet:`Web Wallet`,

            makeItPerfect:`Making it perfect for you !`,
            worldFirstAnonymousStablecoin:`World's first anonymous and untraceable stablecoin`,

            descriptionOfCharacterPrivate: `Private`,
            descriptionOfCharacterPrivateZether: `Newly cryptographic mechanism Zether that uses Σ-bullets obfuscate the origins, amounts and destinations of all transactions.`,

            descriptionOfCharacterUntraceable: `Untraceable`,
            descriptionOfCharacterObfuscated: `Sending and receiving addresses including transacted amounts are obfuscated by default.`,

            descriptionOfCharacterFungible: `Fungible`,
            descriptionOfCharacterNoBlacklist: `Units of ${config.app.name} can not be blacklisted by vendors or exchanges due to their association in previous transactions.`,

            descriptionOfCharacterAssetPlusCurrency: `Assets & Currencies`,
            descriptionOfCharacterAssetPlusCurrencyAnchor: `Anonymous digital assets & currencies that anchor the value of other assets backed by the community.`,

            descriptionOfCharacterConfidentialBlindedEscrow: `Confidential Blinded Escrow`,
            descriptionOfCharacterCompletelyBlindEscrow: `Escrows don't know the amount, the real sender and the real destination. Escrows are completely blinded.`,

            descriptionOfCharacterReviewsForTraders: `Reviews for Traders`,
            descriptionOfCharacterReviewsForTradersAnonymous: `To increase the trust between traders in an untrusted network, anonymous reviews can be written down.`,

            descriptionOfCharacterEncryptedChat: `Encrypted Chat`,
            descriptionOfCharacterEncryptedChatEndToEnd: `The chat in ${config.app.name}  between traders and blinded escrow are encrypted end to end.`,

            descriptionOfCharacterNoDeposit: `No deposit`,
            descriptionOfCharacterNoDepositNoCoins: `${config.app.name} is the first decentralized p2p exchange that allows users to start trading without needing to deposit or owning coins. To buy coins or assets, you don't need to own coins`,

            descriptionOfCharacterInstantAnonymity: `Instant anonymity & HD Wallets`,
            descriptionOfCharacterAdvancedHdWallet: `It just takes seconds to decrypt and view your balances and transactions. More, it has an advanced HD Wallet implemented.`,

            mainNetTimeline: `Timeline for PandoraPay Main Net`,
            launchTimeline: `Timeline for launching PandoraPay. We don't want to offer any specific date, but most of the code has already been implemented`,

            featuresTimelineDataStructure: `Data structure`,
            featuresTimelineNetworking: `Networking`,
            featuresTimelineCryptoAndRingCT: `Crypto & RingCT - Ring Confidential Signatures`,
            featuresTimelineBlockchainAndConsensus: `Blockchain & Consensus`,
            featuresTimelineExchangeFiftyPerCent: `Exchange - 50%`,
            featuresTimelineEncryptedMessages: `Encrypted Messages`,
            featuresTimelineCompletlyBlindedEscrow: `Completly Blinded Escrow`,
            featuresTimelineFinalTests: `Final Tests`,

            gotAQuestion: `Got a question? We've got answers on `,
            gotAQuestionFaq: "FAQ",
        },

        contact:{
            powerToThePeople: `People`,
            powerToThePeopleMeetTheCommunity: `Meet us`,

            aFewGoodMen: `Meet our small team that make those great products`,
            aFewGoodMenAlexandruIonutBudisteanu: `Alexandru Ionut Budisteanu`,
            aFewGoodMenAbi: `Alexandru Ionut Budisteanu`,
            aFewGoodMenFounder: `Founder`,
            aFewGoodMenFounderAchievements: `Alexandru is a Forbes Europe 30 under 30 nominee in industry category. In 2013, he was nominated by Time Magazine as one of the most influential teens of the world. MIT named an asteroid with his name.`,

            powerToThePeopleContactTheCommunity: `Contact`,
            powerToThePeopleTalkToTheCommunity: `Let's Talk`,
            powerToThePeopleWaysToContact: `Here are the ways you can contact us with any questions you have`,

            messageReceivedWaitNow: `We received your message and will contact you back soon.`,
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
            answerIsTradeChatEncrypted: `YES! All the chat messages are encrypted peer-to-peer using cryptographic functions.`,

            questionAddressNeedToKnowOnly: `Does the Buyer, Seller, or the Escrow will know each other addresses ?`,
            answerAddressNeedToKnowOnly: `No! The Buyer will not know the Seller real address. The Seller will not know the Buyer real address. The Escrow will not know the Buyer or Seller real addresses or the amount transacted. The buyer and sellers will only know the Escrow Address.`,

            questionPromiseFulfilled: `How does the Buyer know that the Seller has the promised funds?`,
            answerPromiseFulfilled: `If they agreed on the price, the Buyer will automatically ask a proof from the Seller that he has enough funds to do the trade. The Seller will generate a proof showing that he has enough for the trade.`,

            questionCanWeTradeAnything: `What assets/tokens can be traded ?`,
            answerCanWeTradeAnything: `Any real-world asset can be "tokenized" into a digital form and traded on ${config.app.name}. Anybody can issue assets/tokens on ${config.app.name}. The assets/tokens can be pegged by a real-world asset, can be collateralized by a different asset/crypto or even non-collateralized.`,

            questionRingSignatureUntraceable: `How come ${config.app.name} assets/tokens are untraceable ?`,
            answerRingSignatureUntraceable: `${config.app.name} uses Confidential Ring Signatures (like in Monero) meaning that the amounts are hidden (confidential) and a transaction uses random decoys from the network (a ring transaction).`,
        },

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
