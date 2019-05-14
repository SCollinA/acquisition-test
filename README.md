# Acquisition Tracker

## For Devs

### Clone the repo
`git clone git@github.com:SCollinA/acquisition-tracker.git`<br>
### Navigate to the directory
`cd acquisition-tracker`<br>
### Install dependencies (just React)
`npm i`<br>
### Start application in development mode (runs on http://localhost:3000/ by default)
`npm start`<br>


## For Users

### Login
The password is "password1"
Press return or click 'Login'

### Search for target companies
Type a target company name, address, or contact name into the search box to return a list of matching companies. Click the 'Clear' button to clear the search box.

### See all details for all target companies
Click 'Show All Details' and scroll through the list.

### Sort target companies
- Click 'Show Sort' - sort options are displayed.<br>
- Click appropriate options to sort target companies.<br>
- Clicking once sorts targets in descending order (A to Z for Name, largest to smallest for numeric values, and most recent to least recent for Date). The sort option will display green.<br>
- Clicking twice sorts targets in ascending order. The sort option will display red.<br>
- A third click will remove that sort option. The sort option will return to yellow.<br>
- Sort options are applied in the order they are selected (which is displayed next to the option name). In other words, each target company will be compared to the next target company on each option selected. If one is sorted first on one option but second on the other, no change will be made in their order.<br>
- Click 'Remove Sort' to remove all sort options.<br>
- Click 'Hide Sort' to hide the sort options.<br>
- It is helpful to use 'Show All Details' while sorting in order to view the fields being sorted on for all target companies.

### Add new target company
- Click 'Add Target'. A modal is displayed with fields for entering information about the company. All fields other than status are optional, however, 'No Name' and 'No Address' will be displayed in the list if they are not provided, as this is basic information for the target company.
- Click 'Add Contact' to add a contact for this company. Name and phone number fields are provided, and both are optional. Click 'Remove' to remove this contact.
- Click 'Delete' to remove the target company entirely. A confirmation will appear, as this action cannot be undone.
- Click 'Cancel' to undo any changes and exit the edit modal.
- Click 'Reset' to undo any changes and remain in the edit modal.
- Click 'Save', or click outside the modal, to save changes to the target company.

### View details of a target company
- Click any target company to view it's details.
- Clicking 'Edit' will open the same modal as when you add a new company, but pre-filled with the target company's information.
- Clicking the target company again will collapse it's detailed view.

## Future Enhancements
### Compare select targets
Select several targets for comparison, then click 'Compare Targets' to view charts and graphs showing the information for each company side-by-side.
### Add data points over time
Add new data points for target companies with a timestamp to see how a target company grows over time.
### View a history of updates to target companies
After every edit, a log entry will be made detailing the changes made to the target company. See a history of the changes to the target company's information and status.