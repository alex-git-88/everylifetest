Feature: Add A Resident To The EveryLife Application

  Scenario Outline: Logs in, adds a new resident and checks that the stored resident details are correct
    Given I have logged into the PASS Genius website as a care manager
      And I wait for a few seconds
      And I have clicked on the Residents tab
      And I have clicked on the Add New Resident button
      And I have selected Mr for the resident <Title> on the Add Resident page
      And I have entered John for the resident <FirstName> on the Add Resident page
      And I have entered Black for the resident <Surname> on the Add Resident page
      And I have entered Jack for the resident <KnownAs> on the Add Resident page
      And I have selected Male for the resident <Sex> on the Add Resident page
      And I wait for a few seconds
      #And I have selected 09/05/1947 for the resident <DOB> on the Add Resident page
      And I wait for a few seconds
      And I have entered 19267 for the resident <SocialServicesNumber> on the Add Resident page
      And I have entered 180 for the resident <Weight> on the Add Resident page
      And I have entered 190 for the resident <Height> on the Add Resident page
      #And I have entered 09/05/2017 for the resident <StartDate> on the Add Resident page
      And I have entered <Street> for the resident <Address1> on the Add Resident page
      And I have entered <Area> for the resident <Address2> on the Add Resident page
      And I have entered Durham for the resident <City> on the Add Resident page
      And I have entered Durham for the resident <County> on the Add Resident page
      And I have entered <PostCodeValue> for the resident <Postcode> on the Add Resident page
      And I have entered UK for the resident <Country> on the Add Resident page
      And I have entered 07799234523 for the resident <Tel> on the Add Resident page
      And I have entered jackblack@gmail.com for the resident <Email> on the Add Resident page
      And I have entered 07799234524 for the resident <Mobile> on the Add Resident page
      And I have entered Specialised for the resident <AccessDetails> on the Add Resident page
      And I have entered Pollen for the resident <Allergies> on the Add Resident page
      And I have entered <KinName> for the resident <NextOfKin> on the Add Resident page
      And I have entered 07799234525 for the resident <NextOfKinTel> on the Add Resident page
      And I have entered <DoctorName> for the resident <Doctor> on the Add Resident page
      And I have entered <PracticeName> for the resident <Surgery> on the Add Resident page
      And I have entered 07799234526 for the resident <SurgeryTel> on the Add Resident page
      And I have clicked on the Save button
      And I have clicked on the resident's Details tab
      #And I have set the Status to ACTIVE on the resident details page with <Reason>
      #And I have clicked on the element labelled Save
      #And I have clicked on the element labelled Residents
      #And I have searched for the resident <FirstNameValue> <SurnameValue>
      #And I have clicked on the tab for the resident named <TitleValue> <FirstNameValue> <SurnameValue>
  #When I have clicked on the element labelled Details
  Then the resident details page displays the correct data for the new resident
        | title   | firstname    |  surname     |  nickname     |  sex      | dob |ssNumber              | admissionWeightInKilograms   |  admissionHeightInMeters    |  startDate      |  address1        | Dean Street      | Midtown     | address2    | city     |  county      | D6 6PG        | postcode   |  country     |  tel    |  email    | mobile   |  accessDetails   | allergies     | May Black     |  nextofkin     |  nextofkintel    |  Dr Chris White  | doctor    |  West Side Practice | surgery    | surgerytel  | New Patient|


Examples: 

        | Title   | FirstName    |  Surname     |  KnownAs      |  Sex      | DOB |SocialServicesNumber  | Weight                       |  Height                     |  StartDate      |  Address1        | Street           |  Area       | Address2    | City     |  County      | PostcodeValue | Postcode   |  Country     |  Tel    |  Email    | Mobile   |  AccessDetails   | Allergies     | KinName       |  NextOfKin     |  NextOfKinTel    |  DoctorName      | Doctor    |  PracticeName       | Surgery    | SurgeryTel  | Reason     |
        | title   | firstname    |  surname     |  nickname     |  sex      | dob |ssNumber              | admissionWeightInKilograms   |  admissionHeightInMeters    |  startDate      |  address1        | Dean Street      | Midtown     | address2    | city     |  county      | D6 6PG        | postcode   |  country     |  tel    |  email    | mobile   |  accessDetails   | allergies     | May Black     |  nextofkin     |  nextofkintel    |  Dr Chris White  | doctor    |  West Side Practice | surgery    | surgerytel  | New Patient|