// Handle dropdown/select 
let opened = null
function dropdownFunc(el) {
    const menu = el.parentElement;
    if (!opened) {
        opened = menu
        opened.classList.toggle('active');
    } else if (menu == opened) {
        menu.classList.toggle('active')
        opened = null
    } else {
        opened.classList.toggle('active')
        opened = menu
        opened.classList.toggle('active')
    }
}

// Tab children in tabs
window.addEventListener("load", function() {
    var theTabs = document.querySelectorAll(".nav-tabs .tab-items");

    function theTabClicks(tabClickEvent) {
        var clickedTab = tabClickEvent.currentTarget;
        var tabParent = tabClickEvent.currentTarget.parentNode.parentNode.parentNode;
        var theTabs = tabParent.querySelectorAll(".nav-tabs .tab-items");
        for (var i = 0; i < theTabs.length; i++) {
            theTabs[i].classList.remove("active-tab-selector");
        }
        
        clickedTab.classList.add("active-tab-selector");
        tabClickEvent.preventDefault();
        var contentPanes = tabParent.querySelectorAll(".tab-panel");
        for (i = 0; i < contentPanes.length; i++) {
            contentPanes[i].classList.remove("active");
        }
        var anchorReference = tabClickEvent.target;
        var activePaneId = anchorReference.getAttribute("href");
        var activePane = tabParent.querySelector(activePaneId);
        activePane.classList.add("active");
    }
    for (i = 0; i < theTabs.length; i++) {
        theTabs[i].addEventListener("click", theTabClicks)
    }
});

//Function dropdown
const activeDropdown = (classClick, classActive) => {
    let el = document.querySelector(classActive);
    if (document.querySelector(classClick) !== null) {
        document.querySelector(classClick).addEventListener('click', function (e) {
            el.classList.toggle('active');
            document.querySelector(classClick).classList.toggle('active');
        });
    };
};

activeDropdown('.more-option', '.stripe-additional');
activeDropdown('.user-wrap', '.user-menu-v2'); //Dropdown nav menu 
activeDropdown('.btn-notification', '.notification-news'); // Dropdown notifications news
activeDropdown('.btn-noti-sms', '.notification-sms.step-1'); // Dropdown notifications sms
activeDropdown('.btn-filter-noti', '.filter-dropdown'); //Dropdown actives
activeDropdown('.btn-list-friends', '.dropdown-list-friends'); //Dropdown list friends
activeDropdown('.perpagebtn', '.dropdown-perpage'); //Dropdown per page
activeDropdown('.dropbtn', '.nav-menu');
activeDropdown('.add-btn', '.add-menu');
activeDropdown('.help-btn', '.nav-help');
activeDropdown('.questlog-btn', '.questlog-menu');
activeDropdown('.btn-display', '.chartjs-content');
activeDropdown('.btn-tags', '.tags-group');
activeDropdown('.btn-items', '.dropdown-item');
activeDropdown('.btn-add-service', '.wrap-dropdown-add-service');
activeDropdown('.btn-edit-photo', '.modal-choose-avatar'); //Choose a file avatar setting user
activeDropdown('.dropbtn-save', '.dropdown-save');
activeDropdown('.dropbtn-more', '.contact-more');
activeDropdown('.dropbtn-addcontact', '.dropdown-addcontact');
activeDropdown('.btn-messaging', '.dropdown-messaging');
activeDropdown('.btn-morecard', '.dropdown-card');
activeDropdown('.btn-addmethod', '.dropdown-addmethod');
activeDropdown('.btn-view', '.dropdown-view');
activeDropdown('.btn-taglabel', '.dropdown-taglabel');
activeDropdown('.btn-viewuser', '.dropdown-viewuser');
activeDropdown('.btn-schedule', '.list-chedule');
activeDropdown('.btn-assignto', '.dropdown-assignto');
activeDropdown('.dropdown-calendarcolor', '.list-calendarcolor');
activeDropdown('.btn-agenda', '.list-agenda');
activeDropdown('.dropdown-bach', '.list-bach');
activeDropdown('.dropdown-broadcast', '.list-broadcast');
activeDropdown('.btn-chooseday', '.dropdown-chooseday');
activeDropdown('.btn-statusjobs', '.dropdown-statusjobs');
activeDropdown('.dropdown-listname', '.dropdown-listname'); // Dropdown List name Job Preview
activeDropdown('.btn-job-workpool', '.dropdown-job-workpool'); // Dropdown Job Status WorkPool
activeDropdown('.btn-job-preview', '.dropdown-jobpreview'); // Dropdown Job Status Preview
activeDropdown('.currency', '.showmore-amount');
activeDropdown('.time', '.list-time');

const activeDropdownOrther = (classClick, classActive, ortherActive) => {
    let el = document.querySelector(classActive);
    if (document.querySelector(classClick) !== null) {
        document.querySelector(classClick).addEventListener('click', function () {
            el.classList.toggle('active');
            document.querySelector(classClick).classList.toggle('active');
            if (document.querySelector(ortherActive) !== null) {
                document.querySelector(ortherActive).classList.toggle('active');
            }
        });
    };
};

activeDropdownOrther('.btn-sidebar', '.sidebar-container', '.gorilladesk');
activeDropdownOrther('.close-news', '.notification-news', '.btn-notification');
activeDropdownOrther('.close-sms-step-1', '.notification-sms.step-1', '.btn-noti-sms');
activeDropdownOrther('.close-sms-step-2', '.notification-sms.step-2', '.btn-noti-sms');
activeDropdownOrther('.close-sms-step-3', '.notification-sms.step-3', '.btn-noti-sms');
activeDropdownOrther('.items-noti-news', '.notification-sms.step-2', '.notification-sms.step-1');
activeDropdownOrther('.btn-plus', '.notification-sms.step-3', '.notification-sms.step-1');
activeDropdownOrther('.btn-listname', '.dropdown-listname'); // Dropdown Job Preview
activeDropdownOrther('.btn-job-workpool', '.dropdown-menu'); // Dropdown Job Status WorkPool
activeDropdownOrther('.btn-job-preview', '.dropdown-menu'); // Dropdown Job Status Preview


// Check Outsite
const checkClickOut = (btnClick, moduleClick, overlay = false) => {
    if (document.querySelector(btnClick) && document.querySelector(moduleClick)) {
        document.addEventListener("click", function (e) {
            const check = document.querySelector(btnClick).contains(e.target);
            const inside = document.querySelector(moduleClick).contains(e.target);
            if (!check && !inside) {
                document.querySelector(btnClick).classList.remove('active');
                document.querySelector(moduleClick).classList.remove('active');
                if (overlay) {
                    document.querySelector(overlay).classList.remove('active');
                }
            }
        });
    }
}

// checkClickOut('.dropbtn', '.dropdown'); // Dropdown all
checkClickOut('.btn-edit-photo', '.modal-choose-avatar');
checkClickOut('.btn-items', '.dropdown-item');
checkClickOut('.btn-add-service', '.wrap-dropdown-add-service');
checkClickOut('.dropbtn-save', '.dropdown-save');
checkClickOut('.dropbtn-more', '.contact-more');
checkClickOut('.dropbtn-addcontact', '.dropdown-addcontact');
checkClickOut('.btn-messaging', '.dropdown-messaging');
checkClickOut('.btn-morecard', '.dropdown-card');
checkClickOut('.btn-addmethod', '.dropdown-addmethod');
checkClickOut('.btn-view', '.dropdown-view');
checkClickOut('.btn-taglabel', '.dropdown-taglabel');
checkClickOut('.btn-viewuser', '.dropdown-viewuser');
checkClickOut('.btn-list-friends', '.dropdown-list-friends');
checkClickOut('.btn-schedule', '.list-chedule');
checkClickOut('.btn-assignto', '.dropdown-assignto');
checkClickOut('.dropdown-calendarcolor', '.list-calendarcolor');
checkClickOut('.btn-agenda', '.list-agenda');
checkClickOut('.dropdown-bach', '.list-bach');
checkClickOut('.dropdown-broadcast', '.list-broadcast');
checkClickOut('.btn-filter-noti', '.filter-dropdown'); //Dropdown actives
checkClickOut('.nav-notification', '.notification-news'); // Dropdown notifications news
checkClickOut('.btn-chooseday', '.dropdown-chooseday');
checkClickOut('.btn-statusjobs', '.dropdown-statusjobs');
checkClickOut('.btn-job-workpool', '.dropdown-job-workpool'); // Dropdown Job Status WorkPool
checkClickOut('.btn-job-preview', '.dropdown-jobpreview'); // Dropdown Job Status Preview
checkClickOut('.currency', '.showmore-amount');
checkClickOut('.time', '.list-time');
checkClickOut('.btn-select-user', '.list-select-user'); // Dropdown select user on Commissions
checkClickOut('.btn-commission', '.list-commission'); // Dropdown select commission on Commissions
checkClickOut('.btn-staff', '.list-staff'); // Dropdown select Staff on Commissions
checkClickOut('.btn-invoice-status', '.list-invoice-status'); // Dropdown select Invoice Status on Commissions
checkClickOut('.btn-methods', '.list-methods'); // Dropdown select Methods Status on Commissions 
checkClickOut('.dropbtn', '.nav-menu');
checkClickOut('.dropbtn', '.checkin'); // Dropdown Checkin
checkClickOut('.dropbtn', '.checkout'); // Dropdown Checkout

const activePhoneMessage = () => {
    if (document.querySelector('.btn-phone-message') !== null) {
        document.querySelector('.btn-phone-message').addEventListener('click', function () {
            document.querySelector('.btn-phone-message').classList.toggle('active');
            document.querySelector('.dropdown-list-phone-message').classList.toggle('active');
            if (document.querySelector('.text-message-chat') !== null) {
                document.querySelector('.text-message-chat').classList.add('active');
            }
        });
    };
}
activePhoneMessage();

// Function
(function () {    
    // Handle list filter on drip
    function viewListFilter() {
        var btnViewList = document.getElementsByClassName('js-filter-toggle');

        for (var i = 0; i < btnViewList.length; i++) {
            btnViewList[i].onclick = function () {
                var parentList = this.closest(".body-modal");
                parentList.classList.toggle('body-modal--viewfilter');
            }
        }
    }

    // Handle job detail device action
    function manageDevice() {
        var btnManageArea = document.getElementsByClassName('manage-area');
        var btnManageTypes = document.getElementsByClassName('manage-types');
        var btnManageStatus = document.getElementsByClassName('manage-status');
        var btnManageLevel = document.getElementsByClassName('manage-level');

        for (var i = 0; i < btnManageArea.length; i++) {
            btnManageArea[i].onclick = function () {
                var parentFormDevice = this.closest(".form-devices");
                parentFormDevice.classList.add('has-manages-area');
            }
        }
        for (var i = 0; i < btnManageTypes.length; i++) {
            btnManageTypes[i].onclick = function () {
                var parentFormDevice = this.closest(".form-devices");
                parentFormDevice.classList.add('has-manages-types');
            }
        }
        for (var i = 0; i < btnManageStatus.length; i++) {
            btnManageStatus[i].onclick = function () {
                var parentFormDevice = this.closest(".form-devices");
                parentFormDevice.classList.add('has-manages-status');
            }
        }
        for (var i = 0; i < btnManageLevel.length; i++) {
            btnManageLevel[i].onclick = function () {
                var parentFormDevice = this.closest(".form-devices");
                parentFormDevice.classList.add('has-manages-level');
            }
        }
    }

    // Auto focus form summernote
    function focusSummerNote() {
        var boxFocus = document.getElementsByClassName('field-input');

        for (var i = 0; i < boxFocus.length; i++) {
            boxFocus[i].onfocus = function () {
                var parentHasEffect = this.closest(".description-box");
                parentHasEffect.classList.add('auto-focus');
            }
        }
        for (var i = 0; i < boxFocus.length; i++) {
            boxFocus[i].onblur = function () {
                var parentHasEffect = this.closest(".description-box");
                parentHasEffect.classList.remove('auto-focus');
            }
        }
    }
    // Add docs
    function addDocs() {
        var addDocs = document.getElementsByClassName('add-docs');

        for (var i = 0; i < addDocs.length; i++) {
            addDocs[i].onclick = function () {
                var parentRowsDocs = this.closest(".document-rows");

                parentRowsDocs.classList.add('active');
            }
        }
    }
    // Remove docs
    function deleteDocs() {
        var removeDoc = document.getElementsByClassName('remove-docs');

        for (var i = 0; i < removeDoc.length; i++) {
            removeDoc[i].onclick = function () {
                var parentRowsDocs = this.closest(".document-rows");

                parentRowsDocs.classList.remove('active');
            }
        }
    }  
    // Handle open new popup in job detail
    function newPopupJob() {
        var btnAddPopup = document.getElementsByClassName('has-popup');

        for (var i = 0; i < btnAddPopup.length; i++) {
            btnAddPopup[i].onclick = function () {
                if(document.getElementById('addTaskCalendar').classList.contains("open")) {
                    document.getElementById('addTaskCalendar').classList.add('contain-jobdetail');                    
                }
            }
        }
    }
    // Handle edit invoice/estimate
    function actionInvoiceTemplate() {
        var btnEditForm = document.getElementsByClassName('action-edit');
        for (var i = 0; i < btnEditForm.length; i++) {
            btnEditForm[i].onclick = function () {
                var parentForm = this.closest(".form-tabpane-details");
                parentForm.classList.add('show-form-edit');
            }
        }

        var btnCancelEditForm = document.getElementsByClassName('cancel-action');
        for (var i = 0; i < btnCancelEditForm.length; i++) {
            btnCancelEditForm[i].onclick = function () {
                var parentForm = this.closest(".tab-conts");
                parentForm.classList.remove('show-form-edit');
                parentForm.classList.remove('show-addpayment');
                parentForm.classList.remove('show-repeat-inv');
                parentForm.classList.remove('show-form-schedule');
                parentForm.classList.remove('has-manages-area');
                parentForm.classList.remove('has-manages-types');
                parentForm.classList.remove('has-manages-level');
                parentForm.classList.remove('has-manages-status');
            }
        }

        var btnAddPayment = document.getElementsByClassName('add-payment');
        for (var i = 0; i < btnAddPayment.length; i++) {
            btnAddPayment[i].onclick = function () {
                var parentForm = this.closest(".form-tabpane-details");
                parentForm.classList.add('show-addpayment');
            }
        }

        var btnRepeatInvoice = document.getElementsByClassName('action-repeats');
        for (var i = 0; i < btnRepeatInvoice.length; i++) {
            btnRepeatInvoice[i].onclick = function () {
                var parentForm = this.closest(".form-tabpane-details");
                parentForm.classList.add('show-repeat-inv');
            }
        }

        var btnshowSchedule = document.getElementsByClassName('open-schedule');
        for (var i = 0; i < btnshowSchedule.length; i++) {
            btnshowSchedule[i].onclick = function () {
                var parentForm = this.closest(".dashboard-job-detail");
                parentForm.classList.add('show-form-schedule');
            }
        }
    }
    // Add class Active for btn Done task sidebar caledar
    function activeDonebtn() {
        var activeDonetask = document.getElementsByClassName('task-done');

        for (var i = 0; i < activeDonetask.length; i++) {
            activeDonetask[i].onclick = function () {
                var parentDonetasks = this.closest(".box-task");
                parentDonetasks.classList.toggle('done');
            }
        }
    }
    // See more description task sidebar caledar
    function moreDescriptionTask() {
        var seemoreDescription = document.getElementsByClassName('see-more');

        for (var i = 0; i < seemoreDescription.length; i++) {
            seemoreDescription[i].onclick = function () {
                var parentDescription = this.closest(".detail-note");
                parentDescription.classList.toggle('active');
            }
        }
    }

    // Focus search input
    function focusSearchInput() {
        var fieldSearchInput = document.getElementsByClassName('search-input');

        for (var i = 0; i < fieldSearchInput.length; i++) {
            fieldSearchInput[i].onclick = function () {
                var parentSearchInput = this.closest('.search-jobs');
                parentSearchInput.classList.add('active');
            }
        }
    }
    // Out focus search input
    function outfocusSearchInput() {
        var itemsResultSearch = document.getElementsByClassName('result-items');

        for (var i = 0; i < itemsResultSearch.length; i++) {
            itemsResultSearch[i].onclick = function () {
                var parentSearchInput = this.closest('.search-jobs');

                parentSearchInput.classList.remove('active');
                parentSearchInput.classList.add('show');
            }
        }
    }

    // Add user assign to
    function addUserAssign() {
        var btnAddAssign = document.getElementsByClassName('btn-adduser');

        for (var i = 0; i < btnAddAssign.length; i++) {
            btnAddAssign[i].onclick = function () {
                var parentAddAssignto = this.closest(".content-addtask");
                parentAddAssignto.classList.add('show');
            }
        }
    }
    // Remove user assign to
    function deletedUserAssign() {
        var btnrRemoveAssign = document.getElementsByClassName('remove-user');

        for (var i = 0; i < btnrRemoveAssign.length; i++) {
            btnrRemoveAssign[i].onclick = function () {
                var parentAddAssignto = this.closest(".content-addtask");
                parentAddAssignto.classList.remove('show');
            }
        }
    }
    
    // Handle checkin time on tab Devices
    function checkinTime() {
        var btnCheckIn = document.getElementsByClassName('time-checkin');

        for (var i = 0; i < btnCheckIn.length; i++) {
            btnCheckIn[i].onclick = function () {
                var parentCheckTime = this.closest(".boxs-checktime");
                parentCheckTime.classList.add('has-checktime'); 
            }
        }
    }

    // 
    function addStripeCustomer() {
        var btnAddStripe = document.getElementsByClassName('add-stripe');
        var closeFormStripe = document.getElementsByClassName('close-stripe');
        

        for (var i = 0; i < btnAddStripe.length; i++) {
            btnAddStripe[i].onclick = function () {
                var formStripe = this.closest(".dropdown-addmethod");
                formStripe.classList.add('show'); 
                formStripe.classList.remove('active'); 
            }
        }
        for (var i = 0; i < closeFormStripe.length; i++) {
            closeFormStripe[i].onclick = function () {
                var formStripe = this.closest(".dropdown-addmethod");
                formStripe.classList.remove('show');
            }
        }
    }

    // Handling domready event IE9+
    function ready(fn) {
        if (document.readyState != 'loading') {
            fn();
        } else {
            document.addEventListener('DOMContentLoaded', fn);
        }
    }
    ready(newPopupJob);
    ready(addDocs);
    ready(deleteDocs);
    ready(activeDonebtn);
    ready(moreDescriptionTask);
    ready(focusSearchInput);
    ready(outfocusSearchInput);
    ready(addUserAssign);
    ready(deletedUserAssign);
    ready(actionInvoiceTemplate);
    ready(focusSummerNote);
    ready(checkinTime);
    ready(manageDevice);
    ready(addStripeCustomer);
    ready(viewListFilter);
}());

// Accordion
var accordion = document.getElementsByClassName("accordion-item");
var iPanel;

for (iPanel = 0; iPanel < accordion.length; iPanel++) {
    accordion[iPanel].addEventListener("click", function () {
        this.parentElement.classList.toggle("active");
        var panel = this.nextElementSibling;
        if (panel.style.display === "block") {
            panel.style.display = "none";
        } else {
            panel.style.display = "block";
        }
    });
}

// Accordion parents
let accordionParent = document.getElementsByClassName("accordion-item-button");
let iPanelParent;
if (accordionParent) {
    for (iPanelParent = 0; iPanelParent < accordionParent.length; iPanelParent++) {
        accordionParent[iPanelParent].addEventListener("click", function () {
            this.parentElement.parentElement.classList.toggle("active");
            this.parentElement.parentElement.nextElementSibling.classList.toggle('active');
        });
    }
}

// Tabs content
function tabs() {
    var accessibleTabsContainers = document.querySelectorAll('.accessible-tabs-container');
    var tabSelector = document.querySelectorAll('.tab-selectors > .tab-items');
    var tabContent = document.querySelectorAll('.tab-contents > div');
    var largeRandNumber = Math.floor((Math.random() * 1000) + 1000);

    accessibleTabsContainers.forEach(function (elem, indexAccessibleTabContainer) {
        elem.setAttribute('data-id', indexAccessibleTabContainer);

        tabSelector.forEach(function (singleTabSelector, i) {

            var tabSelectorId = 'tab-selector-' + largeRandNumber + '_' + i + '_' + indexAccessibleTabContainer;
            var tabContentId = 'tab-content-' + largeRandNumber + '_' + i + '_' + indexAccessibleTabContainer;

            singleTabSelector.setAttribute('data-id', i);
            singleTabSelector.setAttribute('id', tabSelectorId);
            singleTabSelector.setAttribute('aria-controls', tabContentId);

            tabContent[i].setAttribute('data-id', i);
            tabContent[i].setAttribute('tabindex', 0);
            tabContent[i].setAttribute('role', 'tabpanel');
            tabContent[i].setAttribute('id', tabContentId);
            tabContent[i].setAttribute('aria-labeledby', tabSelectorId);

            if (i === 0) {
                singleTabSelector.setAttribute('aria-pressed', 'true');
            } else {
                singleTabSelector.setAttribute('aria-pressed', 'false');
                singleTabSelector.setAttribute('tabindex', -1);
            }
        });
    });


    function onTabSelectorClick(e) {

        var tabSelectorSelected = e.target;
        var accessibleTabsContainerSelected = tabSelectorSelected.closest('.accessible-tabs-container');
        var tabSelectorsSelectedFromTabs = accessibleTabsContainerSelected.querySelectorAll('.tab-selectors > .tab-items');
        var tabContentsSelectedFromContainer = accessibleTabsContainerSelected.querySelectorAll('.tab-contents > div');

        if (!tabSelectorSelected.classList.contains('active-tab-selector')) {
            tabSelectorsSelectedFromTabs.forEach(function (singleTabSelected, i) {
                if (tabSelectorSelected.getAttribute('data-id') === tabContentsSelectedFromContainer[i].getAttribute('data-id')) {
                    singleTabSelected.classList.add('active-tab-selector');
                    singleTabSelected.setAttribute('tabindex', 0);
                    singleTabSelected.setAttribute('aria-pressed', 'true');
                    tabContentsSelectedFromContainer[i].classList.add('tab-content-active');
                } else {
                    singleTabSelected.classList.remove('active-tab-selector');
                    singleTabSelected.setAttribute('tabindex', -1);
                    singleTabSelected.setAttribute('aria-pressed', 'false');
                    tabContentsSelectedFromContainer[i].classList.remove('tab-content-active');
                }

            });
        }
        map.resize();

    }

    tabSelector.forEach(function (tabSelector) {
        tabSelector.addEventListener('click', onTabSelectorClick);
    });
}
tabs();

// Hide Expand Plan on Header
function hideExpandPlan() {
    document.getElementsByClassName("bg-feauture")[0].style.display = 'none';
}

function checkboxMessage(elm) {
    document.getElementsByClassName(elm)[0].classList.toggle('disable');
}

function switchAddAccount(elm) {
    document.getElementsByClassName(elm)[0].classList.toggle('switch');
}
// Close Trial Bar
function closeTrialBar(btnClose) {
    btnClose.closest(".gorilladesk").classList.remove("has-trial-bar");
}

// Modal SMS Charge Failed
function closeChargeFailed() {
    var modalSMSChargeFailed = document.getElementById("smsChargeFailed");

    modalSMSChargeFailed.classList.remove("open");
}

// Close delete edit item invoice
function cancelDeleteItem() {
    document.getElementById("delete_items").classList.remove("active");
}

// Remove active Message Preference
function showMessagePreference(btnShowMess) {
    btnShowMess.closest(".dashboard-job-detail").classList.add("show-message-prefer");
}

function cancelMessagePreference(btnCancelMess) {
    btnCancelMess.closest(".dashboard-job-detail").classList.remove("show-message-prefer");
}
// Active Additional Options form add card
function toggleAdditionCard() {
    document.getElementById("addStripe").classList.toggle("active");
}