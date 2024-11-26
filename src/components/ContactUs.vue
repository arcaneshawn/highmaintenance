<template>
    <section id="contact-us" class="content-container contact-us">
        <div class="band-photo">
            <img src="../assets/HM-BandPhoto.jpg" alt="High Maintenance Band Members" />
        </div>
        <div class="title">
            <h3 class="bungee-regular">Contact Us</h3>
        </div>
        <div class="contact-form">
            <form id="contact-hm" name="contact-hm" @submit.prevent="processFormInput">
                <div class="two-column">
                    <div class="half">
                        <label for="firstName">First Name: </label>
                        <input type="text" name="FirstName" id="firstName" v-model="firstName" @blur="validateFirstName" required />
                        <div class="error">
                            <p class="error-message" v-if="errors.firstName">* Field is required.</p>
                        </div>
                    </div>
                    <div class="half">
                        <label for="lastName">Last Name: </label>
                        <input type="text" name="LastName" id="lastName" v-model="lastName" @blur="validateLastName" required />
                        <div class="error">
                            <p class="error-message" v-if="errors.lastName">* Field is required.</p>
                        </div>
                    </div>
                </div>
                <div class="one-column">
                    <label for="emailAddress">Email Address: </label>
                    <input type="text" name="emailAddress" id="emailAddress" v-model="emailAddress" @blur="validateEmailAddress" required />
                    <div class="error">
                        <p class="error-message" v-if="errors.emailAddress">P* Field is required.</p>
                    </div>

                    <label for="phoneNumber">Phone Number: </label>
                    <input type="text" name="phoneNumber" id="phoneNumber" v-model="phoneNumber" @blur="validatePhoneNumber" required />
                    <div class="error">
                        <p class="error-message" v-if="errors.phoneNumber">P* Field is required.</p>
                    </div>

                    <label for="messageBody">Message: </label>
                    <textarea name="messageBody" id="messageBody" v-model="messageBody" @blur="validateComments"></textarea>
                    <div class="error">
                        <p class="error-message" v-if="errors.messageBody">* Field is required.</p>
                    </div>

                    <fieldset id="highMaintenance">
                        <legend>Are you High Maintenance like us?</legend>

                        <div>
                            <input type="radio" id="yes" name="highMaintenance" value="yes" checked />
                            <label for="yes">Yes</label>
                        </div>

                        <div>
                            <input type="radio" id="also-yes" name="highMaintenance" value="also-yes" />
                            <label for="also-yes">I'm here, aren't I? <span class="cheeky">(Sassy, we like it!)</span></label>
                        </div>
                    </fieldset>
                    <input type="submit" name="submit" value="Submit" />
                </div>
            </form>
            <div class="success-message" v-show="showSuccessMessage">
                <p>Thank you for reaching out!  We have recieved your email.</p>
            </div>
            <div class="failure-message" v-show="showErrorMessage">
                <p>Uh-oh!  Something went wrong and we did not recieve your message.  If the issue continues, please reach out to us through our <a href="https://www.facebook.com/highmaintenanceeventband" title="High Maintenance Facebook Page" target="_blank">Facebook Page</a>.  We apologize for the inconvenience.</p>
            </div>
        </div>
    </section>
</template>

<script>
import axios from 'axios'

export default {
  data() {
    return {
      firstName: '',
      lastName: '',
      emailAddress: '',
      phoneNumber: '',
      messageBody: '',
      errors: {
        firstName: false,
        lastName: false,
        emailAddress: false,
        phoneNumber: false,
        messageBody: false
      },
      showSuccessMessage: false,
      showErrorMessage: false
    }
  },
  methods: {
    processFormInput: function(event) {
      event.preventDefault();
      if (!this.errors.firstName && !this.errors.lastName && !this.errors.emailAddress && !this.errors.phoneNumber && !this.errors.messageBody) {
        let formData = {
          firstName: this.firstName,
          lastName: this.lastName,
          emailAddress: this.emailAddress,
          phoneNumber: this.phoneNumber,
          messageBody: this.messageBody
        };
        this.sendData(formData);
      }
    },
    sendData: function(data) {
      
      const componentInstance = this;

      axios.post('/api/email', { data })
      .then(function () {
        componentInstance.firstName = '';
        componentInstance.lastName = '';
        componentInstance.emailAddress = '';
        componentInstance.phoneNumber = '';
        componentInstance.messageBody = '';
        componentInstance.showSuccessMessage = true;
        if (componentInstance.showErrorMessage) {
          componentInstance.showErrorMessage = false;
        }
      })
      .catch(function () {
        componentInstance.showErrorMessage = true;
      });
    },
    validateFirstName: function() {
      const isValid = !isEmpty(this.firstName);
      this.errors.firstName = !isValid;
    },
    validateLastName: function() {
      const isValid = !isEmpty(this.lastName);
      this.errors.lastName = !isValid;
    },
    validateEmailAddress: function() {
      const isValid = isValidEmail(this.emailAddress) && !isEmpty(this.emailAddress);
      this.errors.emailAddress = !isValid;
    },
    validatePhoneNumber: function() {
      const isValid = isValidPhoneNumber(this.phoneNumber) && !isEmpty(this.phoneNumber);
      this.errors.phoneNumber = !isValid;
    },
    validateComments: function() {
      const isValid = !isEmpty(this.messageBody);
      this.errors.messageBody = !isValid;
    }
  }
}

function isValidEmail(email) {
  var reg = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return reg.test(email);
}

function isValidPhoneNumber(phoneNumber) {
  var reg = /^(\+\d{1,2}\s)?\(?\d{3}\)?[\s.-]?\d{3}[\s.-]?\d{4}$/;
  return reg.test(phoneNumber);
}

function isEmpty(value) {
  return (value == null || value == '');
}

</script>

<style lang="scss" scoped>
.contact-us {
    .band-photo {
        width: 80%;
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
        width: 100%;
        margin: 2rem auto 4rem;
        
        form {
            p {
                margin-bottom: 0;
            }

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

                    .cheeky {
                        display: none;
                    }

                    #also-yes:checked + label .cheeky {
                        display: inline;
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
                background-color: #fdfdfd;

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
                background-color: #faebd7;
            }

            input[type=submit]:hover {
                background-color: var(--brand-alt);
                color: var(--brand-light);
            }
        }
    }
}

.error {
    min-width: 100%;
    min-height: 1.8rem;
}

.error-message {
    color: red;
}

@media (min-width: 768px) {
    .contact-us .band-photo, .contact-us .contact-form {
            width: 70%;
    }
}

@media (min-width: 1024px) {
    .contact-us .band-photo, .contact-us .contact-form {
            width: 50%;
    }
}
</style>