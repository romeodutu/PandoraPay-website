<template>

    <layout>

        <!-- Main Content -->
        <main class="main-content">

            <section class="section">
                <div class="container">
                    <header class="section-header">
                        <small>People</small>
                        <h2>Meet us</h2>
                        <hr>
                        <p class="lead">Meet our small team that make those great products</p>
                    </header>


                    <div class="row gap-y">

                        <div class="offset-md-4 col-md-4 team-2">
                            <a href="#">
                                <img class="team-pic" src="/public/assets/images/team/Alexandru-Ionut-Budisteanu.jpg" alt="Alexandru Ionut Budisteanu" >
                            </a>
                            <h5>Alexandru Ionut Budisteanu</h5>
                            <small>Founder</small>
                            <p>Alexandru is a Forbes Europe 30 under 30 nominee in industry category. In 2013, he was nominated by Time Magazine as one of the most influential teens of the world. MIT named an asteroid with his name..</p>
                            <br>
                            <div class="social social-brand">
                                <a class="social-facebook" href="https://facebook.com/budisteanu.ionut"  target="_blank" ><i class="icon-facebook"></i></a>
                                <a class="social-linkedin" href="https://linkedin.com/in/budisteanu"  target="_blank" ><i class="icon-linkedin"></i></a>
                                <a class="social-bg-light" href="http://budisteanu.net"  target="_blank" ><i class="icon-global"></i></a>
                            </div>
                        </div>

                    </div>

                </div>
            </section>


            <section class="section bg-gray">
                <div class="container">
                    <header class="section-header">
                        <small>Contact</small>
                        <h2 class="display-4">Let's Talk</h2>
                        <hr>
                        <p class="lead">Here are the ways you can contact us with any questions you have</p>
                    </header>

                    <form class="form-row input-border" action="" method="POST" data-form="mailer">
                        <div class="col-12">
                            <div class="alert alert-success d-on-success">We received your message and will contact you back soon.</div>
                        </div>


                        <div class="form-group col-sm-4 offset-sm-2">
                            <input class="form-control form-control-lg" type="text" name="name" placeholder="Your name">
                        </div>

                        <div class="form-group col-sm-4">
                            <input class="form-control form-control-lg" type="email" name="email" placeholder="Your email">
                        </div>

                        <div class="form-group col-8 offset-2">
                            <textarea class="form-control form-control-lg" rows="4" placeholder="Message" name="message"></textarea>
                        </div>

                        <div class="col-8 text-center offset-2">
                            <button class="btn btn-xl btn-block btn-primary" type="submit">SEND</button>
                        </div>
                    </form>

                </div>
            </section>

        </main>


    </layout>

</template>

<script>

    import Layout from "src/components/layout/layout"
    import config from "build/config/config";


    export default {

        components: {Layout},

        computed:{

            config(){
                return config.app;
            }

        },

    }
</script>

<style scoped>

    .team-pic{
        max-width: 128px;
        max-height: 128px;
    }

</style>