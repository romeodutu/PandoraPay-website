<template>

    <layout :light="true">

        <home-header/>

        <!-- Main Content -->
        <main class="main-content">

            <section class="section text-white" style="background-color: #1b8bf9">
                <div class="container">
                    <div class="row gap-y text-center">

                        <div class="col-12 col-sm-4">
                            <p class="lead-8 mb-0 counted" data-provide="countup" data-from="0" data-to="100">{{this.blocks}}</p>
                            <p class="small text-uppercase ls-2">Blocks</p>
                        </div>

                        <div class="col-12 col-sm-4">
                            <p class="lead-8 mb-0 counted" data-provide="countup" data-from="0" data-to="250">{{this.blocks*23}}</p>
                            <p class="small text-uppercase ls-2">Transactions</p>
                        </div>

                        <div class="col-12 col-sm-4">
                            <p class="lead-8 mb-0 counted" data-provide="countup" data-from="0" data-to="430">{{this.blocks*10}}</p>
                            <p class="small text-uppercase ls-2">Unique Accounts</p>
                        </div>

                        <div class="col-md-12">

                            <p class="small text-uppercase ls-2 text-center">
                                REAL TIME DATA FROM
                                <a class="btn btn-lg btn-round btn-outline-light mw-200" :href="config.explorer"> TEST NET Blockchain Explorer</a>
                            </p>

                        </div>

                    </div>
                </div>
            </section>


            <!--
            |‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒
            | Features
            |‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒
            !-->
            <section class="section py-8">
                <div class="container">

                    <div class="row gap-y align-items-center">
                        <div class="col-md-6 mr-auto">
                            <h2>Anonymous cash for the internet</h2>
                            <p class="lead">World's First Anonymous Decentralized Exchange</p>
                            <p>It's fast, private and secure. With {{config.name}}, you are your own bank. You can send money totally anonymously to anyone knowing that others cannot see your balance or track your activity. </p>
                        </div>

                        <div class="col-md-5">
                            <img src="/public/assets/theme/img/vector/5.png" alt="...">
                        </div>
                    </div>



                </div>

            </section>

            <section class="section py-8 bg-gray">
                <div class="container">
                    <div class="row gap-y align-items-center">
                        <div class="col-md-6 ml-auto">
                            <h2>Get Paid Anonymously</h2>
                            <p class="lead">It's untraceable</p>
                            <p>Sending and receiving addresses as well as transacted amounts are obfuscated by default. Transactions on the {{config.name}} cannot be linked to a particular user or real-world identity.</p>
                        </div>

                        <div class="col-md-5 order-md-first">
                            <img src="/public/assets/theme/img/vector/6.png" alt="...">
                        </div>
                    </div>
                </div>
            </section>


            <!--
            |‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒
            | Video
            |‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒
            !-->
            <section class="section p-0 d-none" style="background-color: #4f8cf2">
                <div class="container-fluid px-0">
                    <div class="row no-gutters">

                        <div class="col-md-6 bg-img video-btn-wrapper order-md-2" style="background-image: url(/public/assets/theme/img/thumb/10.jpg); min-height: 300px;" data-overlay="4">
                            <a class="btn btn-lg btn-circle btn-danger" href="https://www.youtube.com/watch?v=ah4pcPbRi2M" data-provide="lightbox"><i class="fa fa-play"></i></a>
                        </div>


                        <div class="col-10 col-md-4 mx-auto py-7 py-md-9 text-white">
                            <h4>Get an insight look into the system</h4>
                            <p class="mb-0">Fresh fellow even the whole is work outcome them. They original on mountains, drew the support time. The of to graduate. Into to is the to she at return understand every in there transmitting you've he the was and in finger.</p>
                        </div>

                    </div>
                </div>
            </section>


            <!--
            |‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒
            | International Payment
            |‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒
            !-->
            <section class="section text-white" style="background-color: #0b8fe4">
                <div class="container-fluid">
                    <div class="row gap-y align-items-center">

                        <div class="col-md-5 ml-auto">
                            <h3 >Private Digital Currency</h3>
                            <p class="lead" >with a Single Click</p>
                            <p >Never been easier to send and receive money internationally totally anonymously and untraceable.</p>
                        </div>

                        <div class="col-md-4 mx-auto text-center">
                            <img src="/public/assets/theme/img/vector/7.png" alt="...">
                        </div>

                    </div>
                </div>
            </section>




            <!--
            |‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒
            | Security
            |‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒
            !-->
            <section class="section bg-gray">
                <div class="container">
                    <div class="row">

                        <div class="col-md-6 align-self-center pb-7">
                            <h3>You are your own bank</h3>
                            <p>With {{config.name}}, you are your own bank and others cannot see your balances or track your activity. Say hello to {{config.name}}.</p>

                            <div class="row mt-7">
                                <div class="col-6">
                                    <p class="text-danger lead-7"><i class="icon-documents"></i></p>
                                    <h5>{{config.name}} is secure</h5>
                                    <p>Unstoppable by using decentralized blockchain technology secured by a network of users.</p>
                                </div>

                                <div class="col-6">
                                    <p class="text-danger lead-7"><i class="icon-key"></i></p>
                                    <h5>{{config.name}} is private</h5>
                                    <p>You own your own key and nobody can track you.</p>
                                </div>
                            </div>
                        </div>

                        <div class="col-md-6 text-center order-md-first">
                            <img class="mr-40" src="/public/assets/theme/img/vector/8.png" alt="...">
                        </div>

                    </div>
                </div>
            </section>


            <!--
            |‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒
            | CTA
            |‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒
            !-->
            <section class="section text-center py-9" style="background-image: url(/public/assets/theme/img/bg/1.jpg)">
                <div class="overlay opacity-90" style="background-image: linear-gradient(to left, #00c6fb 0%, #005bea 100%);"></div>
                <div class="container">
                    <div class="row">
                        <div class="col-md-8 mx-auto">

                            <h3 class="lead-6 text-white mb-7 fw-2001">Anonymous payments made easy.</h3>
                            <p><a class="btn btn-xl btn-round btn-success" :href="config.wallet">Web Wallet</a></p>

                        </div>
                    </div>
                </div>
            </section>


            <!--
            |‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒
            | More Features
            |‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒
            !-->
            <section class="section">
                <div class="container">
                    <header class="section-header">
                        <h2>Making it perfect for you !</h2>
                        <hr>
                        <p class="lead">World's first anonymous and untraceable stablecoin</p>
                    </header>

                    <div class="row gap-y text-center">

                        <div class="col-md-6 col-xl-4">
                            <div class="media">
                                <div class="lead-6 line-height-1 text-dark mr-5"><i class="ti-key"></i></div>
                                <div class="media-body">
                                    <h5>Private</h5>
                                    <p>Newly cryptographic mechanism Zether that uses Σ-bullets obfuscate the origins, amounts and destinations of all transactions.</p>
                                </div>
                            </div>
                        </div>


                        <div class="col-md-6 col-xl-4">
                            <div class="media">
                                <div class="lead-6 line-height-1 text-dark mr-5"><i class="ti-unlink"></i></div>
                                <div class="media-body">
                                    <h5>Untraceable</h5>
                                    <p>Sending and receiving addresses including transacted amounts are obfuscated by default.</p>
                                </div>
                            </div>
                        </div>


                        <div class="col-md-6 col-xl-4">
                            <div class="media">
                                <div class="lead-6 line-height-1 text-dark mr-5"><i class="ti-lock"></i></div>
                                <div class="media-body">
                                    <h5>Fungible</h5>
                                    <p>Units of {{config.name}} can not be blacklisted by vendors or exchanges due to their association in previous transactions.</p>
                                </div>
                            </div>
                        </div>


                        <div class="col-md-6 col-xl-4">
                            <div class="media">
                                <div class="lead-6 line-height-1 text-dark mr-5"><i class="ti-money"></i></div>
                                <div class="media-body">
                                    <h5>Assets & Currencies</h5>
                                    <p>Anonymous digital assets & currencies that anchor the value of other assets backed by the community.</p>
                                </div>
                            </div>
                        </div>


                        <div class="col-md-6 col-xl-4">
                            <div class="media">
                                <div class="lead-6 line-height-1 text-dark mr-5"><i class="ti-eye"></i></div>
                                <div class="media-body">
                                    <h5>Confidential Blinded Escrow</h5>
                                    <p>Escrows don't know the amount, the real sender and the real destination. Escrows are completely blinded.</p>
                                </div>
                            </div>
                        </div>


                        <div class="col-md-6 col-xl-4">
                            <div class="media">
                                <div class="lead-6 line-height-1 text-dark mr-5"><i class="ti-comments-smiley"></i></div>
                                <div class="media-body">
                                    <h5>Reviews for Traders</h5>
                                    <p>To increase the trust between traders in an untrusted network, anonymous reviews can be written down.</p>
                                </div>
                            </div>
                        </div>

                        <div class="col-md-6 col-xl-4">
                            <div class="media">
                                <div class="lead-6 line-height-1 text-dark mr-5"><i class="ti-comments"></i></div>
                                <div class="media-body">
                                    <h5>Encrypted Chat</h5>
                                    <p>The chat in {{config.name}}  between traders and blinded escrow are encrypted end to end.</p>
                                </div>
                            </div>
                        </div>


                        <div class="col-md-6 col-xl-4">
                            <div class="media">
                                <div class="lead-6 line-height-1 text-dark mr-5"><i class="ti-tag"></i></div>
                                <div class="media-body">
                                    <h5>No deposit</h5>
                                    <p>{{config.name}} is the first decentralized p2p exchange that allows users to start trading without needing to deposit or owning coins. To buy coins or assets, you don't need to own coins</p>
                                </div>
                            </div>
                        </div>


                        <div class="col-md-6 col-xl-4">
                            <div class="media">
                                <div class="lead-6 line-height-1 text-dark mr-5"><i class="ti-check-box"></i></div>
                                <div class="media-body">
                                    <h5>Instant anonymity & HD Wallets</h5>
                                    <p>To verify your own encrypted balances it takes only seconds to decrypted your own balances and your previous transactions. More, it has implemented an advanced HD Wallet.</p>
                                </div>
                            </div>
                        </div>



                    </div>

                </div>
            </section>


        </main>


    </layout>

</template>

<script>

import Layout from "src/components/layout/layout"
import config from "build/config/config";
import HomeHeader from "./home-header"
const fetch = require('node-fetch');

export default {

    components: {Layout, HomeHeader},

    data(){
        return {
            blocks: 0,
        }
    },

    computed:{

        config(){
            return config.app;
        }

    },

    methods:{

        async startDownloadingBlockchainInfo(){

            try{

                const address = "http://pandorapay.ddns.net:8082/blockchain/get-info";
                const data = await fetch(address);

                if (data){
                    const out = await data.json();
                    this.blocks = out.blocks;
                }

            }catch(err){

            }

            setTimeout(this.startDownloadingBlockchainInfo.bind(this), 20*1000 );

        }

    },

    mounted(){
        this.startDownloadingBlockchainInfo();
    }

}
</script>

<style scoped>

</style>