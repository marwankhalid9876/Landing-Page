
let sectionsLists = [];
//getting the navigation bar unordered list
let navigation = document.querySelector('#navbar__list');
let counter=0;

//create three new sections
let newSection4 = document.createElement('section');
newSection4.innerHTML=` <div class="landing__container">
        <h2>Section 4</h2>
        <p>This is section 4</p>
      </div>`
newSection4.id='section4';
let newSection5 = document.createElement('section');
newSection5.innerHTML=` <div class="landing__container">
        <h2>Section 5</h2>
        <p>This is section 5</p>
      </div>`
newSection5.id='section5';
let newSection6 = document.createElement('section');
newSection6.innerHTML=` <div class="landing__container">
        <h2>Section 6</h2>
        <p>This is section 6</p>
      </div>`
newSection6.id='section6';

let newSection7 = document.createElement('section');
newSection7.innerHTML=` <div class="landing__container">
        <h2>Section 7</h2>
        <p>This is section 7</p>
      </div>`
newSection7.id='section6';


//Adding the new sections to the main tag
let mainTag = document.querySelector('main');
mainTag.insertAdjacentElement('beforeend', newSection4);
mainTag.insertAdjacentElement('beforeend', newSection5);
mainTag.insertAdjacentElement('beforeend', newSection6);
mainTag.insertAdjacentElement('beforeend', newSection7);




//getting all the sections
let allSections = document.querySelectorAll('section');


//creating the list elements of the unordered list of the navigation

for(let sec of allSections)
{
	let newList = document.createElement('li');
	navigation.insertAdjacentElement('beforeend',newList);
	newList.innerHTML="Section " + counter++;
	//on clicking on the section in the navigation bar, bring me to the section
	newList.addEventListener('click',function()
	{
		//scroll smoothly to the section
		sec.scrollIntoView({behavior: "smooth", block: "end", inline: "start"});
	});
	let sectionList = {section: sec, list:newList};
	sectionsLists.push(sectionList);
	
}

//when scrolling, change the element holder of the active class
document.addEventListener('scroll',function(){
	//first we reset the current active class
	document.querySelector('.your-active-class').classList.remove('your-active-class');
	//then we search for the section that has the least distance from the current view of the page
	let newSection = document.querySelector('#section1');
	let minDistance = Infinity;
  for(let sec of allSections){
    let secDistance = Math.abs(sec.getBoundingClientRect().y);
    if(secDistance<minDistance){
	  newSection = sec;
      minDistance = secDistance;
    }
  }
  //setting the new section as the active one
  newSection.setAttribute('class','your-active-class');
  for(sectionList of sectionsLists)
  {
	  if(sectionList.section.classList.contains('your-active-class'))
		  sectionList.list.classList.add('active-list');
	  else
		  sectionList.list.classList.remove('active-list');
  }

})

