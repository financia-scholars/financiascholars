var score = 0; // Player score
    var currentScenarioIndex = 0; // Current scenario index
    var scenarios = [
      {
        description: "You received your paycheck. How much will you allocate for your savings?",
        options: [
          { text: "10%", result: "Great! Saving a portion of your income is a smart financial move.", score: 1 },
          { text: "25%", result: "Awesome! You're off to a good start in building your savings.", score: 2 },
          { text: "5%", result: "Consider increasing your savings percentage to build a stronger financial foundation.", score: 0 }
        ]
      },
      {
        description: "Your friend invites you to an expensive dinner. How will you respond?",
        options: [
          { text: "Politely decline and suggest a more budget-friendly activity.", result: "Great decision! It's important to stick to your budget and find alternatives.", score: 2 },
          { text: "Agree to go but suggest splitting the bill.", result: "A reasonable compromise! Sharing the bill can help reduce expenses.", score: 1 },
          { text: "Accept the invitation and offer to pay for the entire dinner.", result: "While it's generous, it may strain your budget. Consider more cost-effective choices.", score: 0 }
        ]
      },
      {
        description: "You received a bonus at work. How will you allocate the extra money?",
        option: [
          {text: "Allocate 50% to savings and use the rest for a vacation.", result: "Great decision! It's important to stick to your budget and find alternatives.", score: 2},
          {text: "Invest the entire amount in stocks for long-term growth.", result: "A reasonable compromise! Sharing the bill can help reduce expenses.", score: 1},
          {text: "Pay off outstanding debts to reduce financial burden", result: "While it's generous, it may strain your budget. Consider more cost-effective choices.", score: 0 }
        ]
      }
    ];

    function displayScenario() {
      var scenarioElement = document.getElementById("scenario");
      var scenario = scenarios[currentScenarioIndex];
      scenarioElement.innerText = scenario.description;

      var optionsElement = document.getElementById("options");
      var buttons = optionsElement.getElementsByClassName("option-button");

      for (var i = 0; i < buttons.length; i++) {
        var button = buttons[i];
        if (i < scenario.options.length) {
          button.style.display = "inline";
          button.innerText = scenario.options[i].text;
        } else {
          button.style.display = "none";
        }
      }
    }

    function chooseOption(optionIndex) {
      var scenario = scenarios[currentScenarioIndex];
      var chosenOption = scenario.options[optionIndex];

      score += chosenOption.score;

      var resultElement = document.getElementById("result");
      resultElement.innerText = chosenOption.result;

      var scoreElement = document.getElementById("score");
      scoreElement.innerText = "Score: " + score;

      currentScenarioIndex++;
      if (currentScenarioIndex >= scenarios.length) {
        endGame();
      } else {
        displayScenario();
      }
    }

    function endGame() {
      var scenarioElement = document.getElementById("scenario");
      scenarioElement.style.display = "none";

      var optionsElement = document.getElementById("options");
      optionsElement.style.display = "none";

      var resultElement = document.getElementById("result");
      resultElement.style.display = "none";

      var scoreElement = document.getElementById("score");
      //scoreElement.style.display = "none";

      var gameOverElement = document.getElementById("game-over");
      gameOverElement.innerText = "Congratulations! You completed the game.";
      scoreElement.innerText = 'Final Score: ' + score;
    }

 
    displayScenario();