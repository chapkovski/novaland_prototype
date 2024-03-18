<template>
  <v-app app>
    <v-main app>
      <h1>Welcome to Novaland</h1>
      <v-sheet> 
        
        
      </v-sheet>  
      <SurveyComponent :survey="survey"></SurveyComponent>
      </v-main  ></v-app>
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
