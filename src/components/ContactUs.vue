<template>
    <section class="content-container contact-us">
        <div class="band-photo">
            <img src="../assets/HM-BandPhoto.jpg" alt="High Maintenance Band Members" />
        </div>
        <div class="title">
            <h3 class="bungee-regular">Contact Us</h3>
        </div>
        <div class="contact-form">
            <form>
                <div class="two-column">
                    <div class="half">
                        <label for="firstName">First Name: </label>
                        <input type="text" name="FirstName" id="firstName" />
                    </div>
                    <div class="half">
                        <label for="lastName">Last Name: </label>
                        <input type="text" name="LastName" id="lastName" />
                    </div>
                </div>
                <div class="one-column">
                    <label for="emailAddress">Email Address: </label>
                    <input type="test" name="EmailAddress" id="emailAddress" />
                    <label for="emailMessage">Message: </label>
                    <textarea name="EmailMessage" id="emailMessage"></textarea>
                    <fieldset>
                        <legend>Are you High Maintenance like us?</legend>

                        <div>
                            <input type="radio" id="yes" name="highMaintenance" value="yes" checked />
                            <label for="yes">Yes</label>
                        </div>

                        <div>
                            <input type="radio" id="no" name="highMaintenance" value="dewey" />
                            <label for="no">No</label>
                        </div>
                    </fieldset>
                    <input type="submit" value="Send" />
                </div>
            </form>
        </div>
    </section>
</template>

<style lang="scss" scoped>
.contact-us {
    .band-photo {
        width: 50%;
        margin: 0 auto;
        padding-top: 10px;

        img {
            max-width: 100%;
        }
    }

    .title {
        font-size: 2rem;
        margin: 0.75rem auto;
        text-align: center;
    }

    .contact-form {
        width: 50%;
        margin: 2rem auto 4rem;
        
        form {

            .two-column {
                display: flex;

                .half {
                    width: 50%; 
                    padding: 0 0.5rem;
                    margin-bottom: 1rem;
                }
            }

            .one-column, textarea {
                width: 100%;
                padding: 0 0.5rem;
                margin-bottom: 1rem;

                input {
                    margin-bottom: 1rem;
                }

                textarea {
                    height: 200px;
                    padding-top: 0.5rem;
                    padding-bottom: 0.5rem;
                }

                fieldset {
                    display: flex;

                    div {
                        display: inline-flex;

                        input, label {
                            margin-right: 0.5rem;
                            padding-top: 0.25rem;
                            cursor: pointer;
                        }

                        input {
                            width: 20px;
                        }

                        input:checked {
                            accent-color: var(--brand-alt);
                        }
                    }
                }
            }

            input, textarea {
                width: 100%;
                height: 2.4rem;
                border: 2px solid #aeabab;
                border-radius: 8px;
                font-family: sans-serif;
                font-size: 1.2rem;
                color: var(--brand-dark);
                padding: 0 .6rem;

                &:focus, &:active {
                    border-color: var(--brand-alt);
                    outline: none;
                }
            }

            label {
                display: block;
            }

            input[type=submit] {
                cursor: pointer;
                font-weight: bolder;
            }

            input[type=submit]:hover {
                background-color: var(--brand-alt);
                color: var(--brand-light);
            }
        }
    }
}
</style>