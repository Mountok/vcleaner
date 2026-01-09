
function cleanPage() {
  const selectorsToRemove = [
    '.supbar.supbar--top',  
    '.rotator.feed-page__banner',  
    '.rotator.rotator--limitless',
    '.sticky-stack-sidebar__section'
  ];
  let totalRemoved = 0;
  selectorsToRemove.forEach(selector => {
    const elements = document.querySelectorAll(selector);
    elements.forEach(el => {
      el.remove();
      totalRemoved++;
    });
  });
}
cleanPage();
const observer = new MutationObserver((mutations) => {
  cleanPage();
});
observer.observe(document.body, { childList: true, subtree: true });