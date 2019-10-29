let settings = {
    'btnsClass': "info-header-tab",   // Class name of control elements
    'btnsParentClass': "info-header", // Parent of control elements
    'tabsClass': "info-tabcontent",   // Tabs, controlled by control elements
    'showClass': "show",              // Class that shows a tab
    'hideClass': "hide"               // Class that hides a tab
};

setClickSettings(settings);

function setClickSettings(settingsObj) {
    let ctrlBtnClass = settingsObj.btnsClass,
        ctrlBtnParent = settingsObj.btnsParentClass,
        tabsClass = settingsObj.tabsClass,
        show = settingsObj.showClass,
        hide = settingsObj.hideClass;

    window.addEventListener("DOMContentLoaded", ()=>{
        let tab = document.querySelectorAll("." + ctrlBtnClass),
            info = document.querySelector("." + ctrlBtnParent),
            tabContent = document.querySelectorAll("." + tabsClass);

        function hideTabContent(a) {
            for (let i = a; i < tabContent.length; i++) {
                tabContent[i].classList.remove(show);
                tabContent[i].classList.add(hide);
            }
        }
    
        hideTabContent(1);
    
        function showTabContent(b) {
            if (tabContent[b].classList.contains(hide)) {
                tabContent[b].classList.remove(hide);
                tabContent[b].classList.add(show);
            }
        }
    
        info.addEventListener("click", (event)=>{
            let target = event.target;   

            if (event.target && target.classList.contains(ctrlBtnClass)) {
                for (let i = 0; i < tab.length; i++) {
                    if (target == tab[i]) {
                        hideTabContent(0);
                        showTabContent(i);
                        break;
                    }
                }
            }
        });
    });    
}
