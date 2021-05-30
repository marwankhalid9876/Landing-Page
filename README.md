# Landing Page Project

Language used: Javascript
What was done: In this project, it was required to develop a dynamic navigation bar. The section that is most visible has a different styling than the others. This section is highlighted in the navigation bar.

## **Adding new sections** ##
Four new sections were added as required in the rubric.

## **Buliding the navigation menu** ##
A navigation menu was built dynamically in order to easily navigate through the sections of the page. This is done by adding lists to the unordered list already present.

## **Event click listener** ##
Each List added in the navigation bar had an event click listener. When clicked, it scrolls down to the specified section.

## **Event scroll listener** ##
A scroll event was used so that, whenver scrolled, we use the function getBoundingClientRect() that calculates the distance from the section. The section that has the least distance 
 is set as an active section by altering its class.