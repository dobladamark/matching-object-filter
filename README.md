# matching-object-filter

📖 Overview

whatIsInAName checks a list of objects and returns only the objects that match all the key–value pairs specified in a source object.

Think of it like filtering data based on required details.

🧠 How It Works
1. Get the keys from the source

The function looks at what properties the source object wants to match.
Example:
If source is { last: "Capulet" }, the key is "last".

2. Check every item in the collection

The function goes through every object in the list (collection).

For each object, it assumes the item matches unless proven otherwise.

3. Compare values

For each required key from the source:

It checks if the item has the same value for that key.

If any key doesn’t match, the item is marked as not a match.

4. Store the matching items

If an item matches all key–value pairs, it is added to the result.

5. Return the final filtered list

At the end, the function returns only the objects that matched every condition.

🎯 Purpose

This function is useful when you want to:

Filter a database-like dataset

Find objects that meet specific criteria

Match multiple properties (e.g., { first: "John", age: 20 })
