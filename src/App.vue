<template>
  <v-app app>
    <v-main app>
      <v-container>
        <v-row>
          <h1>Welcome to Novaland</h1>
        </v-row>
        <v-row>
          <v-col cols="6">
            <v-card outlined>
              <v-card-title>Personal information</v-card-title>
              <v-card-text>
                <!-- v-list iwth data -->
                <v-list>
                  <v-list-item>
                    <v-list-item-content>
                      <v-list-item-title>First Name</v-list-item-title>
                      <v-list-item-subtitle>John</v-list-item-subtitle>
                    </v-list-item-content>
                  </v-list-item>
                  <v-list-item>
                    <v-list-item-content>
                      <v-list-item-title>Last Name</v-list-item-title>
                      <v-list-item-subtitle>Doe</v-list-item-subtitle>
                    </v-list-item-content>
                  </v-list-item>
                </v-list>
              </v-card-text>
            </v-card>
          </v-col>
          <v-col cols="6">
            <v-card>
              <v-card-title>Group information</v-card-title>
              <v-card-text>
                <v-list>
                  <v-list-item>
                    <v-list-item-content>
                      <v-list-item-title>Your group is:</v-list-item-title>
                      <v-list-item-subtitle>A</v-list-item-subtitle>
                    </v-list-item-content>
                  </v-list-item>
                  <v-list-item>
                    <v-list-item-content>
                      <v-list-item-title>Group description</v-list-item-title>
                      Group A constitutes approximately 80% of Novaland's population. These
                        individuals have ancestral ties to
                        Novaland that extend back multiple generations. This majority group is associated with a
                        historical
                        adherence to the traditions and values established in the country. 
                    </v-list-item-content>
                  </v-list-item>
                </v-list>


              </v-card-text>

            </v-card>
          </v-col>
        </v-row>
        <v-row>
          <v-col>
            <v-card>
              <v-card-title>Situation to consider:</v-card-title>
              <v-card-text>
                
                  You have recently completed your driving lessons and feel well prepared to take your driving test. With all the necessary documents in hand, you make your way to the local TÜV to make your appointment for the theory test. Upon your arrival at the TÜV, you approach the service desk, ready to take the next step toward obtaining your driver's license. The clerk, after reviewing the appointment calendar, informs you that the slots are quite full.
                  <span style="color: green">
                  Despite your best efforts to find an earlier date, you're told that the earliest available slot is not until three months later.</span>
                  <span style="color: red">
                  You are told that the earliest available slot is in three months, and you are not given any other options.
                  </span>
              </v-card-text>



            </v-card>
          </v-col>
        </v-row>
        <v-row>
          <v-col>
            <SurveyComponent :survey="survey"></SurveyComponent>
          </v-col>
        </v-row>
      </v-container>
    </v-main></v-app>
</template>

<script setup>
import { ref } from "vue";
import { Model } from "survey-core";
import "./index.css";
import { json } from "./json";

const survey = new Model(json);
// You can delete the line below if you do not use a customized theme

survey.onComplete.add((sender, options) => {
  console.log(JSON.stringify(sender.data, null, 3));
});
survey.data = {
  "nps-score": 9,
  "promoter-features": ["performance", "ui"],
};

const msg = ref("World");
</script>
