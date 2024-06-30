def main():
    while True:
        # Pregunta 1
        destination = input("Where are you planning to travel? ").strip().title()
        if not destination:
            print("This question is mandatory.")
            continue

        # Pregunta 2
        marital_status = input("Are you currently Married, Cohab, Engaged, or Single? ").strip().lower()
        if not marital_status:
            print("This question is mandatory.")
            continue

        if marital_status == "single":
            gender = input("Are you male or female? ").strip().lower()
            if not gender:
                print("This question is mandatory.")
                continue
            if gender == "male":
                print("Sorry, you don't qualify at this time. Single males do not qualify.")
                continue
            elif gender == "female":
                age = int(input("What is your age? "))
                if not (28 <= age <= 70 and destination in ["Gatlinburg", "Myrtle Beach", "River Ranch", "Orlando", "Branson", "Virginia", "Las Vegas", "Cocoa Beach"]):
                    print(f"Sorry, you don't qualify at this time. Age {age} does not meet the criteria for this destination.")
                    print(f"Age requirement for {destination} is 28-70.")
                    continue
                speak_english = input("Do you speak English fluently? ").strip().lower()
                if not speak_english:
                    print("This question is mandatory.")
                    continue
                if speak_english != "yes" and destination in ["Branson", "Virginia"]:
                    print("Sorry, you don't qualify at this time. Fluency in English is required for Branson and Virginia.")
                    continue
        else:
            travel_together = input("Will you both be traveling together? ").strip().lower()
            if not travel_together:
                print("This question is mandatory.")
                continue
            if travel_together != "yes":
                print("Sorry, you don't qualify at this time. Traveling together is required for couples.")
                continue

            # Pregunta 4
            speak_english = input("Do you both speak English fluently? ").strip().lower()
            if not speak_english:
                print("This question is mandatory.")
                continue
            if speak_english != "yes":
                if destination in ["Branson", "Virginia"]:
                    print("Sorry, you don't qualify at this time. Fluency in English is required for Branson and Virginia.")
                    continue

            # Pregunta 5
            driver_license = input("Do you currently have a driver license showing the same address? ").strip().lower()
            if not driver_license:
                print("This question is mandatory.")
                continue
            if driver_license != "yes":
                address_proof = input("Do you have any other proof that your address matches? ").strip().lower()
                if not address_proof:
                    print("This question is mandatory.")
                    continue
                if address_proof != "yes":
                    print("Sorry, you don't qualify at this time. Proof of address is required.")
                    continue

            # Pregunta 6
            ages = input("What are both your ages? (Enter ages separated by a space) ").strip().split()
            if len(ages) != 2:
                print("Please enter two ages separated by a space.")
                continue
            age1, age2 = int(ages[0]), int(ages[1])
            if destination in ["Orlando", "Branson", "Virginia", "Cocoa Beach"]:
                if not (25 <= age1 <= 70 and 25 <= age2 <= 70):
                    print("Sorry, you don't qualify at this time. Age requirements for this destination are 25-70.")
                    continue
            elif destination in ["Las Vegas", "Gatlinburg", "Myrtle Beach", "River Ranch"]:
                if not (27 <= age1 <= 70 and 27 <= age2 <= 70):
                    print("Sorry, you don't qualify at this time. Age requirements for this destination are 27-70.")
                    continue

        # Pregunta 7
        gainfully_employed = input("Are you gainfully employed? ").strip().lower()
        if not gainfully_employed:
            print("This question is mandatory.")
            continue
        if gainfully_employed != "yes":
            income_source = input("What is your source of income? ").strip()
            if not income_source:
                print("This question is mandatory.")
                continue

        # Pregunta 8
        if marital_status == "single":
            income = float(input("What is your total income before taxes? "))
        else:
            combined_income = float(input("What is your total combined income before taxes? "))

        if destination in ["Gatlinburg", "Myrtle Beach", "River Ranch", "Orlando", "Branson", "Virginia", "Cocoa Beach"]:
            required_income = 50000
        elif destination == "Las Vegas":
            required_income = 60000

        if (marital_status == "single" and income < required_income) or (marital_status != "single" and combined_income < required_income):
            print(f"Sorry, you don't qualify at this time. The income requirement for {destination} is ${required_income} annually.")
            continue

        # Pregunta 9
        if marital_status == "single":
            us_citizen = input("Are you a US Citizen? ").strip().lower()
        else:
            us_citizen = input("Are both of you US Citizens? ").strip().lower()

        if not us_citizen:
            print("This question is mandatory.")
            continue
        if us_citizen == "yes":
            print("Congratulations, you fully qualify for this spectacular promotion!")
        else:
            print("Sorry, you don't qualify at this time")

        # Pregunta si desea verificar otro prospecto
        if input("Do you want to start another qualification process? (yes/no) ").strip().lower() != "yes":
            break

if __name__ == "__main__":
    main()
