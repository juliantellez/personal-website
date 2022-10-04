## Solid Principles

What does solid mean?

- Single responsibility principle
- Open/closed
- Liskov substitution principle
- Interface segregation
- Dependency inversion

## Single Responsibility principle
- A class/module or function should only be responsible for a single part of the functionality

If you find yourself accessing multiple functionality within a scope,
you may be violating this principle

## Open/Closed
- A class/module of function should be open to extension
- Closed for modification

Extend the object through inheritance or composition instead of modifying it.

## Liskov Substitution Principle
You should be able to use a subclass in place of its parent class

## Interface segregation
- A class should not depend on methods that it does not need to implement

Suggests that you should split interfaces into smaller ones so classes don't have to implement methods that aren't needed

## Dependency inversion
- Classes/Modules should depend on abstractions instead of concrete implementations

Decouple dependencies so classes/modules so they don't depend on implementations. Instead they should depend on decoupled abstractions.
