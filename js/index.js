const DATA_LIST_ID = [
    { name: 'ariel', age: 35, class: 'angular'},
    { name: 'yakov', age: 33, class: 'angular 2'},
    { name: 'asher', age: 44, class: 'angular 2'},
    { name: 'shuli', age: 55, class: 'angular 3'},
    { name: 'avi', age: 6, class: 'angular 4'},
];

  
document.addEventListener('DOMContentLoaded', () => {
    const loadButton = document.getElementById('loadList');
    if (!loadButton) {
        console.error('Load button not found!');
        return;
    }
    
    loadButton.addEventListener('click', handleClickLoadList);
});


/*
    handle the click event on the load button
    and render the list in the list container
*/ 
function handleClickLoadList() {       
    const template = document.getElementById('template_student').innerHTML;
    const listContainer = document.getElementById('myList');
    
    if (!template || !listContainer) {
        console.error('Template or list container not found!');
        return;
    }

    try {
        // render the list
        listContainer.innerHTML = render(template, DATA_LIST_ID);
    } catch (error) {
        console.error('Error rendering list:', error);
    }
}

/*
    this function should get a template string and an array of data objects
    and it will render the template with the data array
    and return the html string of the rendered list
*/
function render(template, dataArr){
    let html =''
    let regex = /\[(.*)\]/g;
    // get the properties in the template
    let propertiesInTemplate = template.match(regex) 
    
    // remove the brackets from the properties
    propertiesInTemplate.forEach((p, i) => {
        propertiesInTemplate[i] = p.replace('[', '').replace(']', '');
    })

    // iterate over the data array and replace the properties in the template
    dataArr.forEach(studentItem => {
        let itemHtml = template;
        // replace the properties in the template
        propertiesInTemplate.forEach(p =>{
            let propValue = studentItem[p];
            itemHtml = itemHtml.replace(`[${p}]`, propValue);
        });
        html += itemHtml;
    })
    return html
}