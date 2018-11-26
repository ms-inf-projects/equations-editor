# Project structure

## Overview

The project is based on Vue.js library. It uses component structure.

## Components

The project consist of following components:

- Root component - `App.vue`
- Views:
    - `MainView.vue`
- Panel components:
    - `HeaderPanel.vue`
    - `EditorPanel.vue`
    - `ToolboxPanel.vue`
    - `ExportPanel.vue`
- Math symbol components
    - `AboveBelowInput.vue`
    - `Basic.vue`
    - `Fraction.vue`
    - `Index.vue`
    - `MathSymbol.vue`
    - `Root.vue`
- Components that allows nesting other components - `EquationInput.vue`
- Other
    - `MathSymbolButton.vue`
  
## Details

#### Views

Views represent a single page containing all nested components.

#### Panel components

Panel components represent the main sections of the view.

#### Math symbol components

Each component is the visual and interactable representation of a group of mathematical symbols.
Groups are based on similarities between the structure of symbols. Some components represent a single symbol while others can handle more depending on their complexity.
For example:
Root has its own component while integral and sum are handled by the same math symbol component.

#### Recursive nesting

The `EquationInput.vue` component provides the ability to nest instances of math symbol components inside it. This mechanism makes it possible to recursively nest any number of equation inputs.
