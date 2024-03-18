export const json ={
  "title": "Community Support and Political Preferences Survey",
  "showProgressBar": "top",
  "startSurveyText": "Start Survey",
  "pages": [
    {
      "questions": [
        {
          "type": "radiogroup",
          "name": "politicalParty",
          "title": "Which party would you vote for?",
          "isRequired": true,
          "choices": [
            "Party A",
            "Party B"
          ]
        }
      ]
    },
    {
      "questions": [
        {
          "type": "text",
          "name": "donationAmount",
          "title": "How much money would you donate to your fellow who suffered in a fire?",
          "isRequired": true,
          "inputType": "number",
          "placeHolder": "Amount in USD"
        }
      ]
    },
    {
      "questions": [
        {
          "type": "radiogroup",
          "name": "taxIncreaseSupport",
          "title": "Would you support the increase of taxes to fund community support programs?",
          "isRequired": true,
          "choices": [
            "Yes",
            "No"
          ]
        }
      ]
    }
  ],
  "completedHtml": "<h3>Thank you for completing the survey!</h3><h5>Your input is valuable to us.</h5>"
}
