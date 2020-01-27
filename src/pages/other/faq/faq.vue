<template>

    <section class="section">
        <div class="container">
            <header class="section-header">
                <h2>Frequently Asked Questions</h2>
                <hr>
                <p>Got a question? We are some answers to your questions!</p>
            </header>

            <div class="row">
                <div class="col-md-8 mx-auto">

                    <div class="accordion accordion-connected accordion-arrow-right">

                        <div class="card" id="what-payments-will-be-accepted">
                            <h5 class="card-title">
                                <router-link to="/faq/#what-payments-will-be-accepted" class="collapsed">What payments will be accepted?</router-link>
                            </h5>

                            <div class="collapse show">
                                <div class="card-body">
                                    All payments will be accepted except the payments that offers easily chargebacks scamming the sellers. {{config.name}} is not limited and users can define their own payment methods including: Face to Face, National/International Bank Transfers, SEPA, AliPay, WeChat Pay, Revolut, BTC, ETH, WEBD etc. Some payments that facilitate easy chargebacks will be discouraged for low-ranking buyers. One such chargeback payment is PayPal because it is easy to do chargebacks claiming that you didn't receive the products.
                                </div>
                            </div>
                        </div>

                        <div class="card" id="how-the-peer-to-peer-exchange-works">
                            <h5 class="card-title">
                                <router-link to="/faq/#how-the-peer-to-peer-exchange-works" class="collapsed">How the Peer to Peer Exchange works?</router-link>
                            </h5>

                            <div class="collapse show">
                                <div class="card-body">
                                    A trade is occurred when a buyer acquires from a seller some coins/tokens. The seller will open a trade selling some assets (tokens) and the buyer pays off-chain to acquire these assets (tokens). After the off-chain payment from the buyer is finalized and confirmed, the buyer will get the assets (tokens) from the seller.
                                </div>
                            </div>
                        </div>

                        <div class="card" id="how-is-the-buyer-protected">
                            <h5 class="card-title">
                                <router-link to="/faq/#how-is-the-buyer-protected" class="collapsed">How is the Buyer protected in {{config.name}}?</router-link>
                            </h5>

                            <div class="collapse show">
                                <div class="card-body">
                                    The Seller who owns assets and wishes to sell them on the exchange will have to deposit anonymously the assets into a special trade account that is still owned by him. Then the seller sets a blinded escrow to this trade account for trading supervision. Now, the seller can't move funds from the trading account without the permission of the escrow. In case of a dispute the buyer can complain proving that he sent the funds to the seller, but the seller is not willfully sending the funds.
                                </div>
                            </div>
                        </div>

                        <div class="card" id="what-is-a-Completely-Blinded-Escrow">
                            <h5 class="card-title">
                                <router-link to="/faq/#what-is-a-Completely-Blinded-Escrow" class="collapsed">What is a Completely Blinded Escrow?</router-link>
                            </h5>

                            <div class="collapse show" >
                                <div class="card-body">
                                    A Completely Blinded Escrow will NOT know The amount traded, the address of the real trader and the address of the real trader. He also doesn't have power to move the funds by himself, he is only used to assure that the buyer is not moving funds promised to a seller.
                                </div>
                            </div>
                        </div>

                        <div class="card" id="are-the-chat-messages-encrypted-in-the-trades">
                            <h5 class="card-title">
                                <router-link to="/faq/#are-the-chat-messages-encrypted-in-the-trades" class="collapsed">Are the chat messages encrypted in the trades?</router-link>
                            </h5>

                            <div class="collapse show" >
                                <div class="card-body">
                                    YES! All the chat messages are encrypted peer to peer using cryptographic functions.
                                </div>
                            </div>
                        </div>

                        <div class="card" id="does-the-Buyer-Seller-or-Escrow-will-know-each-other-addresses">
                            <h5 class="card-title">
                                <router-link to="/faq/#does-the-Buyer-Seller-or-Escrow-will-know-each-other-addresses" class="collapsed">Does the Buyer, Seller or the Escrow will know each other addresses?</router-link>
                            </h5>

                            <div class="collapse show" >
                                <div class="card-body">
                                    No! The Buyer will not know the Seller real address. The Seller will not know the Buyer real address. The Escrow will not known the Buyer or Seller real addresses or the amount transacted. The buyer and sellers will only know the Escrow Address.
                                </div>
                            </div>
                        </div>

                        <div class="card" id="how-the-Buyer-knows-that-the-Seller-has-enough-funds-promised-to-sell">
                            <h5 class="card-title">
                                <router-link to="/faq/#how-the-Buyer-knows-that-the-Seller-has-enough-funds-promised-to-sell" class="collapsed">How the Buyer knows that the Seller has enough funds promised to sell?</router-link>
                            </h5>

                            <div class="collapse show" >
                                <div class="card-body">
                                    If they agreed on the price, the buyer will automatically ask a proof from the Seller that he has enough funds to do the trade. The seller will generate a proof showing that he has enough for the trade.
                                </div>
                            </div>
                        </div>

                        <div class="card" id="what-assets-tokens-can-be-traded">
                            <h5 class="card-title">
                                <router-link to="/faq/#what-assets-tokens-can-be-traded" class="collapsed">What assets/tokens can be traded?</router-link>
                            </h5>

                            <div class="collapse show" >
                                <div class="card-body">
                                    Any real-world asset can be "tokenized" into a digital form and traded on the {{config.name}}. Anybody can issue assets/tokens on {{config.name}}. The assets/tokens can be pegged by a real-world asset, can be collateralized by a different asset/crypto or even non-collateralized.
                                </div>
                            </div>
                        </div>


                        <div class="card" id="how-assets-tokens-are-untraceable">
                            <h5 class="card-title">
                                <router-link to="/faq/#how-assets-tokens-are-untraceable" class="collapsed">How {{config.name}} assets/tokens are untraceable?</router-link>
                            </h5>

                            <div class="collapse show" >
                                <div class="card-body">
                                    {{config.name}} uses Confidential Ring Signatures (like in Monero) meaning that the amounts are hidden (confidential) and a transaction uses random decoys from the network (a ring transaction).
                                </div>
                            </div>
                        </div>

                    </div>

                </div>
            </div>

        </div>
    </section>

</template>

<script>
import config from "build/config/config";
export default {

    computed:{
        route(){
            return this.$router.currentRoute.hash;
        },
        config(){
            return config.app;
        }
    },



}
</script>

<style scoped>
</style>