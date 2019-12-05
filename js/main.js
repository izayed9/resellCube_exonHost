const btn = [...document.querySelectorAll('.accrodian-btn')];


function accrodianOperation(ev) {
  const contentId = ev.target.attributes['data-accordion-id'].value;
  const content = document.querySelector(`#${contentId}`)

  if (hasClass('active', content)) {
    content.classList.remove('active');
  } else {
    content.classList.add('active');
  }
};

function hasClass(className, element) {
  return element.classList.value.includes(className);
};


btn.map((item) => {
  item.addEventListener('click', accrodianOperation)
});