// Function for submitting a question by clicking the select button
// Check to see if element exists, then only proceed if the element is present in DOM
var submission = document.getElementById("submitButton");
if (submission) {
    submission.addEventListener("click", async function() {
        document.getElementById("submitOutput").innerText = "Thank you for the question!";
        var currEmail = document.getElementById("emailInput").value;
        var currQuestion = document.getElementById("questionInput").value;
        // Make sure elements are not empty
        if (currEmail == "" || !currEmail.includes("@")) {
            document.getElementById("submitOutput").innerText = "Please enter a valid email.";
        }
        else if (currQuestion == "") {
            document.getElementById("submitOutput").innerText = "Please eneter a valid question.";
        }
        else {
            document.getElementById("submitOutput").innerText = "Thank you for the question!";
        }
    });
}

// Function for the quiz question on info page
var correct1 = document.getElementById("correctAnswer1");
var correct2 = document.getElementById("correctAnswer2");
var correct3 = document.getElementById("correctAnswer3");
if (correct1) {
    correct1.addEventListener("click", function() {
        document.getElementById("quizOutput1").innerText = "Correct!";
    });
}
if (correct2) {
    correct2.addEventListener("click", function() {
        document.getElementById("quizOutput2").innerText = "Correct!";
    });
}
if (correct3) {
    correct3.addEventListener("click", function() {
        document.getElementById("quizOutput3").innerText = "Correct!";
    });
}

var incorrect11 = document.getElementById("incorrectAnswer11");
var incorrect12 = document.getElementById("incorrectAnswer12");
var incorrect13 = document.getElementById("incorrectAnswer13");
var incorrect21 = document.getElementById("incorrectAnswer21");
var incorrect22 = document.getElementById("incorrectAnswer22");
var incorrect31 = document.getElementById("incorrectAnswer31");
var incorrect32 = document.getElementById("incorrectAnswer32");
var incorrect33 = document.getElementById("incorrectAnswer33");
if (incorrect11) {
    incorrect11.addEventListener("click", function() {
        document.getElementById("quizOutput1").innerText = "Inorrect!";
    });
}
if (incorrect12) {
    incorrect12.addEventListener("click", function() {
        document.getElementById("quizOutput1").innerText = "Inorrect!";
    });
}
if (incorrect13) {
    incorrect13.addEventListener("click", function() {
        document.getElementById("quizOutput1").innerText = "Inorrect!";
    });
}
if (incorrect21) {
    incorrect21.addEventListener("click", function() {
        document.getElementById("quizOutput2").innerText = "Inorrect!";
    });
}
if (incorrect22) {
    incorrect22.addEventListener("click", function() {
        document.getElementById("quizOutput2").innerText = "Inorrect!";
    });
}
if (incorrect31) {
    incorrect31.addEventListener("click", function() {
        document.getElementById("quizOutput3").innerText = "Inorrect!";
    });
}
if (incorrect32) {
    incorrect32.addEventListener("click", function() {
        document.getElementById("quizOutput3").innerText = "Inorrect!";
    });
}
if (incorrect33) {
    incorrect33.addEventListener("click", function() {
        document.getElementById("quizOutput3").innerText = "Inorrect!";
    });
}

// Code to reveal definitions when word is clicked on
var words = document.querySelectorAll(".highlight");
var definitions = {
    "radioisotopes": "An unstable form of a chemical element that releases radiation",
    "radioactive series": "A sequence of nuclear decays where an unstable radioactive nucleus transforms into other radioactive nuclei",
    "high energy particles": "These are particles like protons, neutrons, or alpha particles that carry significant kinetic energy",
    "nucleons": "A proton or neutron",
    "Coulomb forces": "Attraction or repulsion of particles or objects because of their electric charge",
    "half-lives": "The time taken for the radioactivity of a specified isotope to fall to half its original value",
    "tumor": "A swelling of a part of the body, generally without inflammation, caused by an abnormal growth of tissue, whether benign or malignant",
    "superficial tissue": "tissue located near the surface of the body, specifically under the skin"
};

for(var i = 0; i < words.length; i++) {
    words[i].addEventListener("click", function() {
        var term = this.textContent;
        var definition = definitions[term];
        
        if(definition) {
            alert(`${term}: ${definition}`);
        }
    });
};

// Code to add the dropdown menus
var dropdownButton = document.querySelector(".showDropdown");
var extraInfo = document.querySelector(".extraInfo");
var homepageExtra = document.querySelector("#homepageExtra");
var infopageExtra = document.querySelector("#infopageExtra");
var homepageExtraInfo = "Cancer is a genetic disease, meaning that it is the result of changes to genes in our DNA that control cell growth and division. The most common type of cancer is carcinoma, which is formed by epithelial cells. Depending on the type of epithelial cell that the cancer forms in, the carcinoma has a different name. There are many different subclasses of carcinoma depending on the affected area of the body. For example, many cancers of the prostate are called adenocarcinoma because the cancer is affecting epithelial cells that produce fluids and mucus.";
var infopageExtraInfo = "There are a few different treatment options with brachytherapy, but the most common treatment option is low-dose rate (LDR) brachytherapy, which involves the placement of permanent radiation seeds. There is also high-dose rate (HDR) brachytherapy, which involves the placement of temporary, concentrated radiation seeds, and medium-dose rate (MDR) brachytherapy, which is less common.  Brachytherapy seed works by delivering “rays” produced by the radioactive decay of isotopes. The specific isotope used in treatment varies, but parameters such as the isotopes half-life and exposure rate constant (which is the exposure rate of an isotope due to gamma rays at a distance of one centimeter) determine the configuration of the seeds, which is whether they should be delivered as sealed capsules, wires, needles, etcetera.";

if (dropdownButton) {
    dropdownButton.addEventListener("click", function() {
        if (homepageExtra) {
            extraInfo.innerText = homepageExtraInfo;
        }
        else if (infopageExtra) {
            extraInfo.innerText = infopageExtraInfo;
        }
    });
}

// Code to zoom in on images
var image = document.querySelector(".Image");
// Function will continously rescale the image until it reaches double its original size
var scale = 1;
var zoomedIn = false;
function animateIn() {
    if (scale < 2) {
        scale = scale + 0.01;
        image.style.transform = "scale(" + scale + ")";
        requestAnimationFrame(animateIn);
    }
    zoomedIn = true;
}

function animateOut() {
    if (scale > 1) {
        scale = scale - 0.01;
        image.style.transform = "scale(" + scale + ")";
        requestAnimationFrame(animateOut);
    }
    zoomedIn = false;
}

if (image) {
    image.addEventListener("click", function() {
        if (!zoomedIn) {
            requestAnimationFrame(animateIn);
        }
        else {
            requestAnimationFrame(animateOut);
        }
    });
}

//Code for flipcards
var cards = document.querySelectorAll(".Card");

for(var i = 0; i < cards.length; i++) {
  cards[i].addEventListener("click", function() {
    this.classList.toggle("showAnswer");
  });
}

// Function for calculating the amount of radioactive decay for palladium 103 over a given number of days
function calculateActivity() {
    var days = document.getElementById("calcInput").value;
    var halfLife = 17; // days
    var lambda = Math.log(2) / halfLife;
    activity = 10 * Math.exp(-lambda * days);
    document.getElementById("calcOutput").innerText = `Starting from 10 Ci, after allowing decay to occur for ${days} days, there is ${activity} Ci remaining`;
}

var calcButton = document.getElementById("calcButton");
if (calcButton) {
    calcButton.addEventListener("click", calculateActivity);
}


// Code to send user to the top of the page
var toTop = document.getElementById("topOfPage")
toTop.addEventListener("click", function() {
    window.scrollTo({top:0});
});

// Code for the live clock
setInterval(function() {
    var currTime = new Date();
    document.getElementById("Clock").innerText = "Current time: " + currTime.toLocaleTimeString();
}, 1000);

// Code for the color picker
var color = document.getElementById("colorPicker").value;
document.getElementById("colorButton").addEventListener("click", function() {
    var color = document.getElementById("colorPicker").value;
    document.body.style.color = color;
});

// Adding advanced event handling so when the mouse goes over a button, it changes color
var buttons = document.querySelectorAll("button");

for(var i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener("mouseover", function() {
        this.style.backgroundColor = "#f0c0f0"; // Upon hovering, the button will turn light pink
    });
}

// Dark mode toggle code
var darkModeButton = document.getElementById("darkMode");
if (darkModeButton){
    darkModeButton.addEventListener("click", function() {
        document.body.classList.toggle("darkMode");
    });
}