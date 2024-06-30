function main() {
    const destinations = ["orlando", "branson", "virginia", "las vegas", "gatlinburg", "myrtle beach", "river ranch", "cocoa beach"];

    while (true) {
        let attempts = 0;
        let maxAttempts = 3;
        let validInput = false;

        // Pregunta 1
        let destination;
        while (attempts < maxAttempts) {
            destination = prompt("Where are you planning to travel?").trim().toLowerCase();
            if (!destination || !destinations.includes(destination)) {
                alert("Please enter a valid destination from the list: Orlando, Branson, Virginia, Las Vegas, Gatlinburg, Myrtle Beach, River Ranch, Cocoa Beach");
                attempts++;
            } else {
                validInput = true;
                break;
            }
        }
        if (!validInput) {
            alert("Max attempts reached. Exiting qualification process.");
            break;
        }

        attempts = 0;
        validInput = false;

        // Pregunta 2
        let marital_status_options = ["married", "cohab", "engaged", "single"];
        let marital_status;
        while (attempts < maxAttempts) {
            marital_status = prompt("Are you currently Married, Cohab, Engaged, or Single?").trim().toLowerCase();
            if (!marital_status || !marital_status_options.includes(marital_status)) {
                alert("Please enter a valid marital status: Married, Cohab, Engaged, or Single");
                attempts++;
            } else {
                validInput = true;
                break;
            }
        }
        if (!validInput) {
            alert("Max attempts reached. Exiting qualification process.");
            break;
        }

        if (marital_status === "single") {
            attempts = 0;
            validInput = false;

            // Pregunta 3
            let gender_options = ["male", "female"];
            let gender;
            while (attempts < maxAttempts) {
                gender = prompt("Are you male or female?").trim().toLowerCase();
                if (!gender || !gender_options.includes(gender)) {
                    alert("Please enter a valid gender: Male or Female");
                    attempts++;
                } else {
                    validInput = true;
                    break;
                }
            }
            if (!validInput) {
                alert("Max attempts reached. Exiting qualification process.");
                break;
            }

            if (gender === "female") {
                attempts = 0;
                validInput = false;

                // Pregunta 4
                let age;
                while (attempts < maxAttempts) {
                    age = parseInt(prompt("What is your age?"));
                    if (isNaN(age) || age < 28 || age > 70) {
                        alert("Age must be between 28 and 70.");
                        attempts++;
                    } else {
                        validInput = true;
                        break;
                    }
                }
                if (!validInput) {
                    alert("Max attempts reached. Exiting qualification process.");
                    break;
                }

                attempts = 0;
                validInput = false;

                // Pregunta 5
                let speak_english;
                while (attempts < maxAttempts) {
                    speak_english = prompt("Do you speak English fluently? (yes/no)").trim().toLowerCase();
                    if (speak_english !== "yes" && speak_english !== "no") {
                        alert("Please enter a valid answer: Yes or No");
                        attempts++;
                    } else {
                        validInput = true;
                        break;
                    }
                }
                if (!validInput) {
                    alert("Max attempts reached. Exiting qualification process.");
                    break;
                }

                if (speak_english !== "yes" && destinations.includes(destination)) {
                    alert("Sorry, you don't qualify at this time. Fluency in English is required for Branson and Virginia.");
                    continue;
                }
            }
        } else {
            attempts = 0;
            validInput = false;

            // Pregunta 6
            let travel_together;
            while (attempts < maxAttempts) {
                travel_together = prompt("Will you both be traveling together? (yes/no)").trim().toLowerCase();
                if (travel_together !== "yes" && travel_together !== "no") {
                    alert("Please enter a valid answer: Yes or No");
                    attempts++;
                } else {
                    validInput = true;
                    break;
                }
            }
            if (!validInput) {
                alert("Max attempts reached. Exiting qualification process.");
                break;
            }

            if (travel_together !== "yes") {
                alert("Sorry, you don't qualify at this time. Traveling together is required for couples.");
                continue;
            }

            attempts = 0;
            validInput = false;

            // Pregunta 7
            while (attempts < maxAttempts) {
                speak_english = prompt("Do you both speak English fluently? (yes/no)").trim().toLowerCase();
                if (speak_english !== "yes" && speak_english !== "no") {
                    alert("Please enter a valid answer: Yes or No");
                    attempts++;
                } else {
                    validInput = true;
                    break;
                }
            }
            if (!validInput) {
                alert("Max attempts reached. Exiting qualification process.");
                break;
            }

            if (speak_english !== "yes" && destinations.includes(destination)) {
                alert("Sorry, you don't qualify at this time. Fluency in English is required for Branson and Virginia.");
                continue;
            }

            attempts = 0;
            validInput = false;

            // Pregunta 8
            let driver_license;
            while (attempts < maxAttempts) {
                driver_license = prompt("Do you currently have a driver license showing the same address? (yes/no)").trim().toLowerCase();
                if (driver_license !== "yes" && driver_license !== "no") {
                    alert("Please enter a valid answer: Yes or No");
                    attempts++;
                } else {
                    validInput = true;
                    break;
                }
            }
            if (!validInput) {
                alert("Max attempts reached. Exiting qualification process.");
                break;
            }

            if (driver_license !== "yes") {
                let address_proof;
                attempts = 0;
                validInput = false;

                while (attempts < maxAttempts) {
                    address_proof = prompt("Do you have any other proof that your address matches? (yes/no)").trim().toLowerCase();
                    if (address_proof !== "yes" && address_proof !== "no") {
                        alert("Please enter a valid answer: Yes or No");
                        attempts++;
                    } else {
                        validInput = true;
                        break;
                    }
                }
                if (!validInput) {
                    alert("Max attempts reached. Exiting qualification process.");
                    break;
                }

                if (address_proof !== "yes") {
                    alert("Sorry, you don't qualify at this time. Proof of address is required.");
                    continue;
                }
            }

            attempts = 0;
            validInput = false;

            // Pregunta 9
            let ages;
            while (attempts < maxAttempts) {
                ages = prompt("What are both your ages? (Enter ages separated by a space)").trim().split(" ");
                if (ages.length !== 2 || isNaN(parseInt(ages[0])) || isNaN(parseInt(ages[1])) || !((25 <= parseInt(ages[0]) && parseInt(ages[0]) <= 70) && (25 <= parseInt(ages[1]) && parseInt(ages[1]) <= 70))) {
                    alert("Please enter two valid ages between 25 and 70 separated by a space.");
                    attempts++;
                } else {
                    validInput = true;
                    break;
                }
            }
            if (!validInput) {
                alert("Max attempts reached. Exiting qualification process.");
                break;
            }

            if (destination === "orlando" || destination === "branson" || destination === "virginia" || destination === "cocoa beach") {
                if (!((25 <= parseInt(ages[0]) && parseInt(ages[0]) <= 70) && (25 <= parseInt(ages[1]) && parseInt(ages[1]) <= 70))) {
                    alert("Sorry, you don't qualify at this time. Age requirements for this destination are 25-70.");
                    continue;
                }
            } else if (destination === "las vegas" || destination === "gatlinburg" || destination === "myrtle beach" || destination === "river ranch") {
                if (!((27 <= parseInt(ages[0]) && parseInt(ages[0]) <= 70) && (27 <= parseInt(ages[1]) && parseInt(ages[1]) <= 70))) {
                    alert("Sorry, you don't qualify at this time. Age requirements for this destination are 27-70.");
                    continue;
                }
            }
        }

        attempts = 0;
        validInput = false;

        // Pregunta 10
        let gainfully_employed;
        while (attempts < maxAttempts) {
            gainfully_employed = prompt("Are you gainfully employed? (yes/no)").trim().toLowerCase();
            if (gainfully_employed !== "yes" && gainfully_employed !== "no") {
                alert("Please enter a valid answer: Yes or No");
                attempts++;
            } else {
                validInput = true;
                break;
            }
        }
        if (!validInput) {
            alert("Max attempts reached. Exiting qualification process.");
            break;
        }

        // Pregunta 11
        if (marital_status === "single") {
            let income;
            attempts = 0;
            validInput = false;

            while (attempts < maxAttempts) {
                income = parseFloat(prompt("What is your total income before taxes?"));
                if (isNaN(income) || income < 0) {
                    alert("Please enter a valid income amount.");
                    attempts++;
                } else {
                    validInput = true;
                    break;
                }
            }
            if (!validInput) {
                alert("Max attempts reached. Exiting qualification process.");
                break;
            }

            if (destination === "las vegas") {
                if (income < 60000) {
                    alert(`Sorry, you don't qualify at this time. The income requirement for ${destination} is $60000 annually.`);
                    continue;
                }
            } else {
                if (income < 50000) {
                    alert(`Sorry, you don't qualify at this time. The income requirement for ${destination} is $50000 annually.`);
                    continue;
                }
            }
        } else {
            let combined_income;
            attempts = 0;
            validInput = false;

            while (attempts < maxAttempts) {
                combined_income = parseFloat(prompt("What is your total combined income before taxes?"));
                if (isNaN(combined_income) || combined_income < 0) {
                    alert("Please enter a valid income amount.");
                    attempts++;
                } else {
                    validInput = true;
                    break;
                }
            }
            if (!validInput) {
                alert("Max attempts reached. Exiting qualification process.");
                break;
            }

            if (destination === "las vegas") {
                if (combined_income < 60000) {
                    alert(`Sorry, you don't qualify at this time. The combined income requirement for ${destination} is $60000 annually.`);
                    continue;
                }
            } else {
                if (combined_income < 50000) {
                    alert(`Sorry, you don't qualify at this time. The combined income requirement for ${destination} is $50000 annually.`);
                    continue;
                }
            }
        }

        attempts = 0;
        validInput = false;

        // Pregunta 12
        let us_citizen;
        while (attempts < maxAttempts) {
            if (marital_status === "single") {
                us_citizen = prompt("Are you a US Citizen? (yes/no)").trim().toLowerCase();
            } else {
                us_citizen = prompt("Are both of you US Citizens? (yes/no)").trim().toLowerCase();
            }
            if (us_citizen !== "yes" && us_citizen !== "no") {
                alert("Please enter a valid answer: Yes or No");
                attempts++;
            } else {
                validInput = true;
                break;
            }
        }
        if (!validInput) {
            alert("Max attempts reached. Exiting qualification process.");
            break;
        }

        if (us_citizen === "yes") {
            alert("Congratulations, you fully qualify for this spectacular promotion!");
        } else {
            alert("Sorry, you don't qualify at this time.");
        }

        // Pregunta si desea verificar otro prospecto
        if (prompt("Do you want to start another qualification process? (yes/no)").trim().toLowerCase() !== "yes") {
            break;
        }
    }
}

main();
