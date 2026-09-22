# DemoQA Core User Operations - POM Test Plan

## Application Overview

POM-based functional plan for https://demoqa.com. Exploration covered Elements, Forms, Alerts/Frame/Windows, Widgets, Interactions, and Book Store Application. Assume a fresh browser context per test. Use BasePage for navigation, waits, and explicit failures; HomePage for module navigation; and TextBoxPage, WebTablesPage, PracticeFormPage, AlertsPage, DatePickerPage, WidgetsPage, InteractionPage, LoginPage, RegisterPage, BookStorePage, and ProfilePage for business actions. Keep selectors inside page objects, use accessible roles/labels and stable attributes, keep data in fixtures/builders, and assert visible UI, URL, dialogs, table rows, and state changes from tests.

## Test Scenarios

### 1. Navigation and Elements

**Seed:** `tests/seed.spec.ts`

#### 1.1. Navigate to every core module

**File:** `tests/core-navigation/module-navigation.spec.ts`

**Steps:**
  1. Create a fresh browser context and instantiate BasePage and HomePage.
  2. Use HomePage methods to open Elements, Forms, Alerts/Frame/Windows, Widgets, Interactions, and Book Store Application, returning home between checks.
    - expect: Each module reaches its expected URL and displays its expected heading or landing content.
    - expect: The test contains no direct selector usage outside page objects.

#### 1.2. Submit valid and invalid text-box data

**File:** `tests/elements/text-box.spec.ts`

**Steps:**
  1. Navigate to Text Box and instantiate TextBoxPage.
  2. Fill full name, valid email, current address, and permanent address through page-object methods, then submit.
    - expect: The output section shows every submitted value under the correct label.
  3. Start a fresh Text Box state, leave required values blank or enter an invalid email, and submit.
    - expect: Invalid submission is prevented or visibly marked according to the page validation.
    - expect: No stale successful output is accepted.

#### 1.3. Create, search, edit, and delete a web-table record

**File:** `tests/elements/web-tables-crud.spec.ts`

**Steps:**
  1. Navigate to Web Tables and instantiate WebTablesPage.
  2. Open Add, enter a unique valid first name, last name, email, age, salary, and department, then submit.
    - expect: The dialog closes and one matching record appears.
  3. Search for the unique record, edit one field, save, and search again.
    - expect: Filtering returns the record and the edited value is visible.
  4. Delete the created record and submit one incomplete record in a fresh dialog.
    - expect: The deleted record is absent.
    - expect: Incomplete data is rejected and does not create a row.

#### 1.4. Use selection controls, buttons, links, and file operations

**File:** `tests/elements/controls-and-file-operations.spec.ts`

**Steps:**
  1. Use CheckBoxPage to expand the tree and select a leaf and parent; use RadioButtonPage to select each enabled option.
    - expect: Checkbox selection summaries and radio-button result text match the selected controls.
    - expect: Disabled options cannot be selected.
  2. Use ButtonsPage to perform single-click, double-click, and right-click actions.
    - expect: Each action produces only its corresponding confirmation message.
  3. Use UploadDownloadPage to download the provided file and upload a known fixture file.
    - expect: The expected download is received and the uploaded filename is displayed.
  4. Use LinksPage to activate a same-tab link and a new-tab link.
    - expect: The same-tab destination and new-tab destination are correct.

### 2. Forms, asynchronous UI, and interactions

**Seed:** `tests/seed.spec.ts`

#### 2.1. Complete and submit the student practice form

**File:** `tests/forms/practice-form.spec.ts`

**Steps:**
  1. Navigate to Practice Form and instantiate PracticeFormPage.
  2. Fill name, valid email, gender, ten-digit mobile, date of birth, subjects, hobbies, current address, state, city, and an image fixture where available.
  3. Submit through the page object.
    - expect: A confirmation modal appears and displays each submitted value in the correct row.
  4. Start fresh and submit with missing required fields, malformed email, and an invalid mobile length.
    - expect: The form does not show a successful confirmation modal and invalid controls are marked or block submission.

#### 2.2. Handle alerts, dialogs, frames, and windows

**File:** `tests/async-ui/alerts-and-windows.spec.ts`

**Steps:**
  1. Navigate to Alerts and instantiate AlertsPage.
  2. Trigger and accept the immediate alert; trigger the delayed alert and wait for its actual condition before accepting.
    - expect: Alert text is captured and each alert is accepted exactly once.
  3. Exercise both accept and dismiss paths for the confirmation dialog, then accept a prompt with deterministic text and repeat with dismissal.
    - expect: Confirm results distinguish OK and Cancel.
    - expect: Accepted prompt text is shown; dismissal does not report a false value.
  4. Open a new browser window/tab and read normal, nested, and parent frame content through frame-aware page-object methods.
    - expect: The new page and every frame contain the expected text without locator leakage across contexts.

#### 2.3. Use date pickers and common widgets

**File:** `tests/widgets/date-picker-and-controls.spec.ts`

**Steps:**
  1. Navigate to Date Picker and instantiate DatePickerPage.
  2. Select a known date by month/year/day and set a known date-time value.
    - expect: Both inputs contain the selected values in the application format.
  3. Use WidgetsPage to select an autocomplete suggestion, move a slider to boundary and mid-range values, start/reset a progress bar, switch tabs, hover a tooltip, and open a nested menu item.
    - expect: The selected suggestion, slider values, progress/reset state, active tab, tooltip, and menu visibility match the actions.
  4. Repeat autocomplete and date interactions with blank or invalid values.
    - expect: Invalid input does not create an incorrect selected value and valid interaction remains possible.

#### 2.4. Perform drag, drop, sort, select, and resize interactions

**File:** `tests/interactions/drag-drop-sort-select.spec.ts`

**Steps:**
  1. Navigate to Interactions and instantiate InteractionPage.
  2. Drag the source into the droppable target.
    - expect: The target reports the accepted drop state.
  3. Reorder Sortable items and compare the resulting order with the requested order.
    - expect: The order changes and remains stable after the interaction.
  4. Select one and multiple Selectable items, then resize within bounds and attempt an out-of-bounds resize.
    - expect: Selected items have the selected state.
    - expect: The resizable element stays within its permitted minimum and maximum dimensions.

### 3. Book Store Application

**Seed:** `tests/seed.spec.ts`

#### 3.1. Browse and search the book catalog

**File:** `tests/bookstore/catalog-and-search.spec.ts`

**Steps:**
  1. Navigate to Book Store and instantiate BookStorePage.
    - expect: The catalog shows image, title, author, publisher, search, and pagination controls.
  2. Search for a known title fragment, clear the search, open a book detail, and return to the catalog.
    - expect: Search results contain only matching books; clearing restores the catalog; detail metadata matches the selected title; return restores the catalog.
  3. Exercise next and previous pagination when multiple pages are available.
    - expect: Pagination changes the displayed page correctly and prevents invalid navigation.

#### 3.2. Register, log in, and validate bookstore account state

**File:** `tests/bookstore/auth-and-profile.spec.ts`

**Steps:**
  1. Open Login, then New User, and instantiate RegisterPage.
  2. Attempt registration with blank fields, malformed values, and an invalid password.
    - expect: Required-field and password validation is visible and no account is created.
  3. Register a unique valid test account using the supported test-environment CAPTCHA mechanism, then log in through LoginPage.
    - expect: Registration reports explicit success or failure; successful credentials authenticate and expose authenticated navigation.
  4. Open Profile, log out, and attempt login with wrong and blank credentials.
    - expect: Profile identifies the authenticated user and initial collection.
    - expect: Logout removes authenticated state; invalid credentials show failure feedback and do not expose Profile data.

#### 3.3. Add and remove a book from the authenticated collection

**File:** `tests/bookstore/bookshelf-management.spec.ts`

**Steps:**
  1. Start fresh, log in with a dedicated fixture account, and open a known book detail.
  2. Add the book to the collection and open Profile.
    - expect: The application confirms the add and the book appears exactly once in the collection.
  3. Attempt to add the same book again, then remove it from Profile and confirm any dialog.
    - expect: Duplicate behavior is prevented or explicitly reported.
    - expect: The book is absent after removal and remains absent after refresh.
  4. Log out and attempt a protected add/remove operation.
    - expect: The application prompts for authentication or redirects and does not mutate the collection.
