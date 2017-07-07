//Since there's an internally defined [[Get]] operation for getting a value from a property, it should be obvious there's also a default [[Put]] operation.
//If the property is present, the [[Put]] algorithm will roughly check:
    //1.Is the property an accessor descriptor (see "Getters & Setters" section below)? If so, call the setter, if any.
    //2.Is the property a data descriptor with writable of false? If so, silently fail in non-strict mode, or throw TypeError in strict mode.
    //3.Otherwise, set the value to the existing property as normal.

