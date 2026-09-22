# Playwright Agents – DemoQA

AI-assisted Playwright test automation suite for [DemoQA](https://demoqa.com), built with **Playwright**, **TypeScript**, and the **Page Object Model (POM)**.

This project was created using **Playwright Agents** to explore AI-assisted test planning, test generation, and test healing while applying a maintainable automation framework structure.

## What this project demonstrates

* Playwright test automation with TypeScript
* Page Object Model (POM)
* AI-assisted test generation using Playwright Agents
* AI-assisted test planning and test healing
* Reusable page objects
* Playwright locators and assertions
* Functional UI test coverage across multiple DemoQA modules
* Test configuration and execution with Playwright
* GitHub-based version control and CI configuration

## Project Structure

```text
Playwright_Agents/
├── .github/
│   ├── agents/
│   │   ├── playwright-test-generator.agent.md
│   │   ├── playwright-test-healer.agent.md
│   │   └── playwright-test-planner.agent.md
│   └── workflows/
│       └── copilot-setup-steps.yml
│
├── pages/
│   ├── AlertsPage.ts
│   ├── BasePage.ts
│   ├── BookStorePage.ts
│   ├── DatePickerPage.ts
│   ├── HomePage.ts
│   ├── InteractionPage.ts
│   ├── LoginPage.ts
│   ├── PracticeFormPage.ts
│   ├── ProfilePage.ts
│   ├── RegisterPage.ts
│   ├── TextBoxPage.ts
│   └── WebTablesPage.ts
│
├── specs/
│   └── README.md
│
├── tests/
│   ├── alerts.spec.ts
│   ├── bookstore.spec.ts
│   ├── controls.spec.ts
│   ├── date-picker.spec.ts
│   ├── interactions.spec.ts
│   ├── login.spec.ts
│   ├── module-navigation.spec.ts
│   ├── practice-form.spec.ts
│   ├── seed.spec.ts
│   ├── text-box.spec.ts
│   └── web-tables.spec.ts
│
├── demoqa-core-pom-test-plan.md
├── playwright.config.ts
├── package.json
└── package-lock.json
```

## Test Coverage

The suite currently covers areas of DemoQA including:

* Alerts
* Book Store
* Buttons and controls
* Date Picker
* Interactions
* Login
* Module navigation
* Practice Form
* Text Box
* Web Tables

The project also contains a test-plan document describing the intended test coverage and automation approach.

## Playwright Agents

This project includes agent definitions for:

### Test Planner

Used to assist with analysing application functionality and producing structured test plans before automation.

### Test Generator

Used to assist with generating Playwright tests from the planned scenarios.

### Test Healer

Used to assist with diagnosing and updating tests when automation failures occur.

The purpose of using these agents is not to replace test engineering decisions, but to explore how AI-assisted tooling can support the test automation lifecycle.

## Framework Approach

The project uses a Page Object Model to separate:

**Test intent**

from

**Page interaction and locator implementation**

For example:

```text
Test
 │
 ├── LoginPage
 │
 ├── BookStorePage
 │
 └── WebTablesPage
        │
        └── Playwright interactions
```

This keeps test specifications focused on behaviour while page objects encapsulate UI interaction details.

## Technology Stack

| Technology        | Purpose                                           |
| ----------------- | ------------------------------------------------- |
| TypeScript        | Test programming language                         |
| Playwright        | Browser automation and test framework             |
| Playwright Agents | AI-assisted test planning, generation and healing |
| DemoQA            | Application under test                            |
| Git / GitHub      | Source control and portfolio repository           |

## Running the Tests

Install dependencies:

```bash
npm install
```

Run the Playwright test suite:

```bash
npx playwright test
```

Run tests with the browser visible:

```bash
npx playwright test --headed
```

Open the HTML report after a test run:

```bash
npx playwright show-report
```

## Learning & Portfolio Context

This project forms part of my wider QA automation development work, alongside UI and API automation projects.

The focus here is specifically on gaining practical experience with **AI-augmented testing and agentic automation workflows**, while maintaining conventional QA automation principles such as:

* Maintainability
* Reusability
* Risk-based test thinking
* Positive and negative testing
* Clear separation of test intent and implementation
* Appropriate use of Page Object Model
* Reliable assertions and locators

The project is intended as a practical exploration of how AI-assisted tooling can complement, rather than replace, core QA engineering skills.
