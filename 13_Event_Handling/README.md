# Summary

## State in React

State is private data of a component. These data can only used inside of its component and can't be accessed by another components. The characteristics of State:

1. Modifiable data by using setState
2. Every time there is a modification, there will be a re-render
3. Asynchronous
4. Used in Class component

## Statefull VS Stateless

Statefull component is the Class component that have state. The advantages of Class component is it has lifecycle.

Stateless component is the component that have not state. Generally, stateless components are created using Function because the code is more concise.

<p align="center">
    Below is the differrences between stateless component with statefull component:
    <br><br>
    
| Stateless Component               | Statefull Component                   |
| --------------------------------- | ------------------------------------- |
| Don't know about the app          | Know about the app                    |
| Data not fetching                 | Fetching data                         |
| The main purpose is visualization | Interaction with the app              |
| Reusable                          | Not reusable                          |
| Only communicate with the parent  | Forward status and data to the childs |

</p>

## Event Handling in React

Event handling is a method for handling an event that received from the user to the component. Besides that, event is an incident triggered by the useron a component, for example button pressed. The example of list Event:

1. Clipboard Events (promise fulfilled)
2. Form Events (onChange, onSubmit)
3. Mouse Events (onClick, onDoubleClick, onMouseOver)
4. Generic Events (onError, onLoad)
