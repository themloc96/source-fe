// Install calendar
// Personal
document.addEventListener('DOMContentLoaded', function () {

    var calendarEl = document.getElementById('calendar');
    var calendar = new FullCalendar.Calendar(calendarEl, {
        timeZone: 'UTC',
        selectable: true,
        // initialView: 'timeGridWeek',
        // views: {
        //     timeGridWeek: {
        //         type: 'timeGrid',
        //         duration: { days: 8 },
        //     },
        // },
        select: function (info) {
            document.getElementById('modal_addjob').classList.add('open');

            var closeAddJob = document.querySelectorAll('#closeAddjob');
            if (document.querySelector('.open') !== null) {
                for (var i = 0; i < closeAddJob.length; i++) {
                    closeAddJob[i].onclick = function () {
                        var parentContainthis = this.closest("#modal_addjob");
                        parentContainthis.classList.remove('open');
                    }
                }
            }
        }
    });

    calendar.render();
});
// One day
document.addEventListener('DOMContentLoaded', function () {

    var calendarEl = document.getElementById('calendar_oneday');

    var calendar = new FullCalendar.Calendar(calendarEl, {
        timeZone: 'UTC',
        initialView: 'timeGridDay',
        // editable: true,
        dayMaxEventRows: 4,
        // eventLimit: true,
        eventTextColor: '#555b64',
        eventBackgroundColor: '#f9f9f9',
        eventBorderColor: '#f9f9f9',
        slotLabelFormat: {
            hour: 'numeric',
            minute: '2-digit',
            hour12: false,
            meridiem: true,
        },
        views: {
            timeGridDay: {
                type: 'timeGrid',
                duration: { days: 1 },
            },
        },

        events: [
            {
                groupId: 'allday',
                title: 'Cllam laboriosam esse provident sit voluptate qui beatae. Aut voluptas occaecati. Nisi quia ea at voluptas excepturi perferendis.',
                start: '2021-01-25',
                classNames: 'event-task',
            },
            {
                groupId: 'allday',
                title: 'Cllam laboriosam esse provident sit voluptate qui beatae. Aut voluptas occaecati. Nisi quia ea at voluptas excepturi perferendis.',
                start: '2021-01-25',
                classNames: 'event-task',
            },
            {
                groupId: 'allday',
                title: 'Cllam laboriosam esse provident sit voluptate qui beatae. Aut voluptas occaecati. Nisi quia ea at voluptas excepturi perferendis.',
                start: '2021-01-25',
                classNames: 'event-task',
            },
            {
                groupId: 'allday',
                title: 'Cllam laboriosam esse provident sit voluptate qui beatae. Aut voluptas occaecati. Nisi quia ea at voluptas excepturi perferendis.',
                start: '2021-01-25',
                classNames: 'event-task',
            },
            {
                groupId: 'allday',
                title: 'Cllam laboriosam esse provident sit voluptate qui beatae. Aut voluptas occaecati. Nisi quia ea at voluptas excepturi perferendis.',
                start: '2021-01-25',
                classNames: 'event-task',
            },
            {
                groupId: 'allday',
                title: 'Cllam laboriosam esse provident sit voluptate qui beatae. Aut voluptas occaecati. Nisi quia ea at voluptas excepturi perferendis.',
                start: '2021-01-25',
                classNames: 'event-task',
            },
            {
                title: 'Hide',
                start: '2021-01-25',
                classNames: 'btn-expandtask event-task',
                backgroundColor: 'transparent',
                borderColor: 'transparent',
                isHide: true,
            },
        ],

        eventClick: function (info) {
            if (info.event._def.extendedProps.isHide) {
                var parentHidePopover = document.querySelectorAll('.fc-popover');
                parentHidePopover[0].classList.add('hide');

            } else {
                document.getElementById('addTaskCalendar').classList.add('open');
            }
        },
    });
    console.clear();

    calendar.render();
    calendar.gotoDate("2021-01-25");
});
// Team
document.addEventListener('DOMContentLoaded', function () {

    var calendarEl = document.getElementById('calendar_team');

    var calendar = new FullCalendar.Calendar(calendarEl, {
        timeZone: 'UTC',
        initialView: 'resourceTimeGridFourDay',
        // editable: true,
        dayMaxEventRows: 5,
        // eventLimit: true,
        eventTextColor: '#555b64',
        eventBackgroundColor: '#f9f9f9',
        eventBorderColor: '#f9f9f9',
        slotLabelFormat: {
            hour: 'numeric',
            minute: '2-digit',
            hour12: false,
            meridiem: true,
        },
        views: {
            resourceTimeGridFourDay: {
                type: 'resourceTimeGrid',
                duration: { days: 3 },
                buttonText: 'Mode 3 users',
            },
        },
        resources: [
            { id: 'a', title: '10' },
            { id: 'b', title: '11' },
            { id: 'c', title: '12' },
            { id: 'd', title: '13' },
            { id: 'e', title: '14' }
        ],

        events: [
            {
                id: '1',
                resourceIds: ['a', 'b', 'c', 'd', 'e'],
                groupId: '11',
                title: 'Ayinnaya Chinedu',
                start: '2021-01-25',
                classNames: 'event-task calendar-user',
                daysOfWeek: [1, 2, 3, 4, 5, 6],
                isHide: true,
            },
            {
                resourceIds: ['a', 'b', 'c', 'd', 'e'],
                groupId: 'allday',
                title: 'Cllam laboriosam esse provident sit voluptate qui beatae. Aut voluptas occaecati. Nisi quia ea at voluptas excepturi perferendis.',
                start: '2021-01-25',
                classNames: 'event-task',
                daysOfWeek: [1, 2, 3, 5, 6],
            },
            {
                resourceIds: ['a', 'b', 'c', 'd', 'e'],
                groupId: 'allday',
                title: 'Cllam laboriosam esse provident sit voluptate qui beatae. Aut voluptas occaecati. Nisi quia ea at voluptas excepturi perferendis.',
                start: '2021-01-25',
                classNames: 'event-task',
                daysOfWeek: [1, 2, 3, 5, 6],
            },
            {
                resourceIds: ['a', 'b', 'c', 'd'],
                groupId: 'allday',
                title: 'Cllam laboriosam esse provident sit voluptate qui beatae. Aut voluptas occaecati. Nisi quia ea at voluptas excepturi perferendis.',
                start: '2021-01-25',
                classNames: 'event-task',
                daysOfWeek: [1, 3, 5, 6],
            },
            {
                resourceIds: ['a', 'b', 'c', 'd', 'e'],
                groupId: 'allday',
                title: 'Cllam laboriosam esse provident sit voluptate qui beatae. Aut voluptas occaecati. Nisi quia ea at voluptas excepturi perferendis.',
                start: '2021-01-25',
                classNames: 'event-task',
                daysOfWeek: [1, 3, 5, 6],
            },
            {
                resourceIds: ['a', 'b', 'c', 'd'],
                groupId: 'allday',
                title: 'Cllam laboriosam esse provident sit voluptate qui beatae. Aut voluptas occaecati. Nisi quia ea at voluptas excepturi perferendis.',
                start: '2021-01-25',
                classNames: 'event-task',
                daysOfWeek: [1, 2, 3, 4, 6],
            },
            {
                resourceIds: ['a', 'b', 'c', 'd', 'e'],
                groupId: 'allday',
                title: 'Cllam laboriosam esse provident sit voluptate qui beatae. Aut voluptas occaecati. Nisi quia ea at voluptas excepturi perferendis.',
                start: '2021-01-25',
                classNames: 'event-task',
                daysOfWeek: [1, 2, 3, 5, 6],
            },
            {
                resourceIds: ['a', 'b', 'c', 'd', 'e'],
                groupId: 'allday',
                title: 'Cllam illum assumenda at corporis necessitatibus sint nesciunt id et. Et velit et laborum in id. Doloribus ut architecto fugit sed sed velit aut et neque.',
                start: '2021-01-25',
                classNames: 'event-task',
                daysOfWeek: [1, 2, 3, 5, 6],
            },
            {
                resourceIds: ['a', 'b', 'c', 'd', 'e'],
                groupId: 'allday',
                title: 'Cllam task text',
                start: '2021-01-25',
                classNames: 'event-task',
                daysOfWeek: [1, 2, 3, 5, 6],
            },
            {
                resourceIds: ['a', 'b', 'c', 'd', 'e'],
                title: 'Hide',
                start: '2021-01-25',
                classNames: 'btn-expandtask event-task',
                backgroundColor: 'transparent',
                borderColor: 'transparent',
                daysOfWeek: [1, 2, 3, 5, 6],
                isHide: true,
            },
        ],

        eventClick: function (info) {
            if (info.event._def.extendedProps.isHide) {
                var parentHidePopover = document.querySelectorAll('.fc-popover');
                parentHidePopover[0].classList.add('hide');

            } else {
                document.getElementById('addTaskCalendar').classList.add('open');
            }
        },
        

    });

    calendar.render();
    calendar.gotoDate("2021-01-25");
});
// Week calendar_week
document.addEventListener('DOMContentLoaded', function () {

    var calendarEl = document.getElementById('calendar_week');

    var calendar = new FullCalendar.Calendar(calendarEl, {
        timeZone: 'UTC',
        initialView: 'timeGridFourDay',
        dayMaxEventRows: 4,
        // eventLimit: true,
        eventTextColor: '#555b64',
        eventBackgroundColor: '#f9f9f9',
        eventBorderColor: '#f9f9f9',
        slotLabelFormat: {
            hour: 'numeric',
            minute: '2-digit',
            hour12: false,
            meridiem: true,
        },
        views: {
            timeGridFourDay: {
                type: 'timeGrid',
                duration: { days: 6 }
            },
        },
        events: [
            {
                groupId: 'allday',
                title: 'Cllam laboriosam esse provident sit voluptate qui beatae. Aut voluptas occaecati. Nisi quia ea at voluptas excepturi perferendis.',
                start: '2021-01-25',
                classNames: 'event-task',
                daysOfWeek: [1, 2, 3, 5, 6],
            },
            {
                groupId: 'allday',
                title: 'Cllam laboriosam esse provident sit voluptate qui beatae. Aut voluptas occaecati. Nisi quia ea at voluptas excepturi perferendis.',
                start: '2021-01-25',
                classNames: 'event-task',
                daysOfWeek: [1, 2, 3, 5, 6],
            },
            {
                groupId: 'allday',
                title: 'Cllam laboriosam esse provident sit voluptate qui beatae. Aut voluptas occaecati. Nisi quia ea at voluptas excepturi perferendis.',
                start: '2021-01-25',
                classNames: 'event-task',
                daysOfWeek: [1, 3, 5, 6],
            },
            {
                groupId: 'allday',
                title: 'Cllam laboriosam esse provident sit voluptate qui beatae. Aut voluptas occaecati. Nisi quia ea at voluptas excepturi perferendis.',
                start: '2021-01-25',
                classNames: 'event-task',
                daysOfWeek: [1, 3, 5, 6],
            },
            {
                groupId: 'allday',
                title: 'Cllam laboriosam esse provident sit voluptate qui beatae. Aut voluptas occaecati. Nisi quia ea at voluptas excepturi perferendis.',
                start: '2021-01-25',
                classNames: 'event-task',
                daysOfWeek: [1, 2, 3, 4, 6],
            },
            {
                groupId: 'allday',
                title: 'Cllam laboriosam esse provident sit voluptate qui beatae. Aut voluptas occaecati. Nisi quia ea at voluptas excepturi perferendis.',
                start: '2021-01-25',
                classNames: 'event-task',
                daysOfWeek: [1, 2, 3, 5, 6],
            },
            {
                groupId: 'allday',
                title: 'Cllam illum assumenda at corporis necessitatibus sint nesciunt id et. Et velit et laborum in id. Doloribus ut architecto fugit sed sed velit aut et neque.',
                start: '2021-01-25',
                classNames: 'event-task',
                daysOfWeek: [1, 2, 3, 5, 6],
            },
            {
                groupId: 'allday',
                title: 'Cllam task text',
                start: '2021-01-25',
                classNames: 'event-task',
                daysOfWeek: [1, 2, 3, 5, 6],
            },
            {
                title: 'Hide',
                start: '2021-01-25',
                classNames: 'btn-expandtask event-task',
                backgroundColor: 'transparent',
                borderColor: 'transparent',
                daysOfWeek: [1, 2, 3, 5, 6],
                isHide: true,
            },
        ],

        eventClick: function (info) {
            if (info.event._def.extendedProps.isHide) {
                var parentHidePopover = document.querySelectorAll('.fc-popover');
                parentHidePopover[0].classList.add('hide');

            } else {
                document.getElementById('addTaskCalendar').classList.add('open');
            }
        },

    });

    calendar.render();
    calendar.gotoDate("2021-01-25");
    console.clear();
});

// Check & Add class small-tasks / regular-tasks / large-tasks for btn on Toolbar
function clickToViewSmall() {
    var btnViewSmall = document.getElementById('view-small');
    var btnViewRegular = document.getElementById('view-regular');
    var btnViewLarge = document.getElementById('view-large');
    var allTaskItem = document.getElementsByClassName('task-item');

    clickToViewTaskSize(btnViewSmall, btnViewRegular, btnViewLarge, "regular-tasks", "large-tasks", "small-tasks");

    for (var i = 0; i < allTaskItem.length; i++) {
        allTaskItem[i].classList.remove("active");
    }
}

function clickToViewRegular() {
    var btnViewSmall = document.getElementById('view-small');
    var btnViewRegular = document.getElementById('view-regular');
    var btnViewLarge = document.getElementById('view-large');

    clickToViewTaskSize(btnViewRegular, btnViewSmall, btnViewLarge, "small-tasks", "large-tasks", "regular-tasks");
}

function clickToViewLarge() {
    var btnViewSmall = document.getElementById('view-small');
    var btnViewRegular = document.getElementById('view-regular');
    var btnViewLarge = document.getElementById('view-large');

    clickToViewTaskSize(btnViewLarge, btnViewSmall, btnViewRegular, "small-tasks", "regular-tasks", "large-tasks");
}

function clickToViewSmalldefault() {
    var divResourceWrapper = document.getElementById('calendar_horizontal');

    divResourceWrapper.closest(".full-calendar").classList.add("small-tasks");
}

function clickToViewTaskSize(btnMainClick, btnCheckExistOne, btnCheckExistTwo, classNameOne, classNameTwo, classNameToAdd) {
    var divResourceWrapper = document.getElementById('calendar_horizontal');

    checkExistClassname(divResourceWrapper, btnCheckExistOne, classNameOne);
    checkExistClassname(divResourceWrapper, btnCheckExistTwo, classNameTwo);
    divResourceWrapper.closest(".full-calendar").classList.add(classNameToAdd);
    btnMainClick.classList.toggle('active');
}

function checkExistClassname(el, btnEl, className) {
    if (el.closest(".full-calendar").classList.contains(className)) {
        el.closest(".full-calendar").classList.remove(className);
    }

    if (btnEl.classList.contains("active")) {
        btnEl.classList.remove("active");
    }
}

function showAddTaskCalendar() {
    var modalAddTask = document.getElementById('addTaskCalendar');

    modalAddTask.classList.add("open");
}

// End Check & Add class small-tasks / regular-tasks / large-tasks for btn on Toolbar

// Slider affects the horizontal scale of the line 
function viewZoomOut() {
    var rangeInput = document.getElementById("jobRange");
    var rangeInputValue = Number(rangeInput.value);
    var minValue = rangeInput.getAttribute("min");
    var resetRangeValue = rangeInputValue - 5;

    if (resetRangeValue >= minValue) {
        rangeInput.setAttribute("value", resetRangeValue);
        updateJobWidth(resetRangeValue);
    }
}

function viewZoomIn() {
    var rangeInput = document.getElementById("jobRange");
    var rangeInputValue = Number(rangeInput.value);
    var maxValue = rangeInput.getAttribute("max");
    var resetRangeValue = rangeInputValue + 5;

    if (resetRangeValue <= maxValue) {
        rangeInput.setAttribute("value", resetRangeValue);
        updateJobWidth(resetRangeValue);
    }
}

function updateJobWidth(rWidthValue) {
    var allEvents = document.getElementsByClassName("events-job");

    for (var i = 0; i < allEvents.length; i++) {
        var classNames = allEvents[i].getAttribute("class");
        var numberClass = classNames.split("resize-");

        if (numberClass)
            allEvents[i].classList.remove("resize-" + numberClass[1]);

        allEvents[i].classList.add("resize-" + rWidthValue);
    }
}
// End Slider affects the horizontal scale of the line

// Timeline Calendar Row View
document.addEventListener('DOMContentLoaded', function () {
    var calendarEl = document.getElementById('calendar_horizontal');
    var calendar = new FullCalendar.Calendar(calendarEl, {
        refetchResourcesOnNavigate: false,
        aspectRatio: 1.5,
        initialView: 'resourceTimelineDay',
        scrollTime: '08:00',
        // timezone: 'local',
        defaultDate: '2021-03-01',
        slotLabelFormat: {
            hour: 'numeric',
            minute: '2-digit',
            hour12: false,
            // meridiem: true, //lowercase, short, narrow, false (display of AM/PM)
        },
        views: {
            timeGridDay: {
                type: 'timeGrid',
                duration: { days: 1 },
            },
        },
        resourceAreaWidth: '241px',
        resourceAreaHeaderContent: {
            html: '<span id="view-small" onclick="clickToViewSmall()" class="btn-view view-small hover-yellow active"></span>\n' +
                '<span id="view-regular" onclick="clickToViewRegular()" class="btn-view view-regular hover-yellow"></span>\n' +
                '<span id="view-large" onclick="clickToViewLarge()" class="btn-view view-large hover-yellow"></span>\n' +
                '<span class="zoom-bar">\n' +
                '<span class="btn-view btn-zoomout" onclick="viewZoomOut()"></span>\n' +
                '<span class="slidecontainer">\n' +
                '<input type="range" min="31" max="335" value="167" class="slider" id="jobRange" onchange="updateJobWidth(this.value);">\n' +
                '</span>\n' +
                '<span class="btn-view btn-zoomin" onclick="viewZoomIn()"></span>\n' +
                '</span>\n'
        },
        resourceGroupField: 'groupId',
        resourceLabelContent: function (arg) {
            if (arg.resource.extendedProps.name) {
                var htmlGroupTitle = '';
                var className = '';

                if (arg.resource.extendedProps.classNames)
                    className = arg.resource.extendedProps.classNames;

                htmlGroupTitle += '<span class="username hidden-view-large btn-view-tasks ' + className + '">';
                htmlGroupTitle += '<span class="avt-img relative">';
                htmlGroupTitle += '<img src="' + arg.resource.extendedProps.avtLink + '">';
                htmlGroupTitle += '<span class="status online"></span>';
                htmlGroupTitle += '</span>';
                htmlGroupTitle += '<span class="user-info">';
                htmlGroupTitle += '<span class="name">' + arg.resource.extendedProps.name + '</span>';
                htmlGroupTitle += '<span class="phone">' + arg.resource.extendedProps.phone + '</span>';
                htmlGroupTitle += '</span>';
                htmlGroupTitle += '<span class="col-icon">';
                htmlGroupTitle += '<a class="view-chatbox ' + arg.resource.extendedProps.hasNotifyMessage + '" href="#">';
                htmlGroupTitle += '<span class="budget">' + arg.resource.extendedProps.messageBudget + '</span>';
                htmlGroupTitle += '</a>';
                htmlGroupTitle += '<a class="view-listtask ' + arg.resource.extendedProps.hasNotifyTask + ' btn-modal" href="' + arg.resource.extendedProps.hrefPopupTask + '">';
                htmlGroupTitle += '<span class="budget">' + arg.resource.extendedProps.taskBudget + '</span>';
                htmlGroupTitle += '</a></span>';
                htmlGroupTitle += '</span>';
                htmlGroupTitle += '<span class="username btn-view-tasks datetime ' + className + '">';
                htmlGroupTitle += '<span class="date-number">' + arg.resource.extendedProps.dateNumber + '</span><span class="month-day">' + arg.resource.extendedProps.monthDay + '</span>';
                htmlGroupTitle += '</span>';

                return { html: htmlGroupTitle };
            }

            if (arg.resource.extendedProps.childrenTitle) {
                var htmlChildrenTitle = '';

                htmlChildrenTitle += '<a onclick="showAddTaskCalendar()" class="task-item event-task ' + arg.resource.extendedProps.classNames + '" href="#">' + arg.resource.extendedProps.childrenTitle + '</a>';

                return { html: htmlChildrenTitle };
            }

            var dataClassname = arg.resource.extendedProps.dataClassName;

            if (arg.resource.extendedProps.elseTitle) {
                var htmlelseTitle = '';

                htmlelseTitle += '<!-- we will customize style inline code when we apply code with React Template in future. --><a class="task-item else-tasks ' + arg.resource.extendedProps.classNames + '" dataClassname="' + dataClassname + '" href="#" style="margin-top: -8px !important;">Else&nbsp;<span class="else-task-number">4</span></a>';

                return { html: htmlelseTitle };
            }

            return { html: arg.resource.title };
        },
        resources: [
            {
                id: 'a',
                groupId: '1',
                dateNumber: '10',
                monthDay: 'September, Mon',
                avtLink: 'https://unsplash.it/25/25',
                name: 'Xian Zhou',
                phone: '(662) 700-7272',
                hasNotifyMessage: 'has-notify',
                hasNotifyTask: '',
                messageBudget: '12',
                taskBudget: '12',
                hrefPopupTask: '#',
                classNames: "no-border-top",
                children: [
                    { "id": "c1", "childrenTitle": "Task one text 1", "classNames": "list-task-one show-first" },
                    { "id": "c2", "childrenTitle": "Task one text 2", "classNames": "list-task-one show-first" },
                    { "id": "c3", "childrenTitle": "Task one text 3", "classNames": "list-task-one show-first" },
                    { "id": "c4", "childrenTitle": "Task one text 4", "classNames": "list-task-one show-second" },
                    { "id": "c5", "childrenTitle": "Task one text 5", "classNames": "list-task-one show-second" },
                    { "id": "c6", "childrenTitle": "Task one text 6", "classNames": "list-task-one show-second" },
                    { "id": "c7", "childrenTitle": "Task one text 7", "classNames": "list-task-one show-second" },
                    { "id": "c8", "elseTitle": "Else", "classNames": "list-task-one show-first", "dataClassName": 'list-task-one' },
                ]
            },
            {
                id: 'b',
                groupId: '2',
                dateNumber: '11',
                monthDay: 'September, Tue',
                avtLink: 'https://unsplash.it/25/25',
                name: 'Malin Quist',
                phone: '(662) 700-7272',
                hasNotifyMessage: '',
                hasNotifyTask: 'has-notify',
                messageBudget: '12',
                taskBudget: '12',
                hrefPopupTask: '#openPopupTask',
                children: [
                    { "id": "d1", "childrenTitle": "Task two text 1", "classNames": "list-task-two show-first" },
                    { "id": "d2", "childrenTitle": "Task two text 2", "classNames": "list-task-two show-first" },
                    { "id": "d3", "childrenTitle": "Task two text 3", "classNames": "list-task-two show-first" },
                    { "id": "d4", "childrenTitle": "Task two text 4", "classNames": "list-task-two show-second" },
                    { "id": "d5", "childrenTitle": "Task two text 5", "classNames": "list-task-two show-second" },
                    { "id": "d6", "childrenTitle": "Task two text 6", "classNames": "list-task-two show-second" },
                    { "id": "d7", "childrenTitle": "Task two text 7", "classNames": "list-task-two show-second" },
                    { "id": "d8", "elseTitle": "Else", "classNames": "list-task-two show-first", "dataClassName": 'list-task-two' },
                ]
            },
            {
                id: 'c',
                groupId: '3',
                dateNumber: '12',
                monthDay: 'September, Wed',
                avtLink: 'https://unsplash.it/25/25',
                name: 'Joana Leite',
                phone: '(662) 700-7272',
                hasNotifyMessage: 'has-notify',
                hasNotifyTask: 'has-notify',
                messageBudget: '12',
                taskBudget: '12',
                hrefPopupTask: '#openPopupTask',
                children: [
                    { "id": "e1", "childrenTitle": "Task three text 1", "classNames": "list-task-three show-first" },
                    { "id": "e2", "childrenTitle": "Task three text 2", "classNames": "list-task-three show-first" },
                    { "id": "e3", "childrenTitle": "Task three text 3", "classNames": "list-task-three show-first" },
                    { "id": "e4", "childrenTitle": "Task three text 4", "classNames": "list-task-three show-second" },
                    { "id": "e5", "childrenTitle": "Task three text 5", "classNames": "list-task-three show-second" },
                    { "id": "e6", "childrenTitle": "Task three text 6", "classNames": "list-task-three show-second" },
                    { "id": "e7", "childrenTitle": "Task three text 7", "classNames": "list-task-three show-second" },
                    { "id": "e8", "elseTitle": "Else", "classNames": "list-task-three show-first", "dataClassName": 'list-task-three' },
                ]
            },
            {
                id: 'd',
                groupId: '4',
                dateNumber: '13',
                monthDay: 'September, Thur',
                avtLink: 'https://unsplash.it/25/25',
                name: 'Nguyễn Diệp Chi',
                phone: '(662) 700-7272',
                hasNotifyMessage: 'has-notify',
                hasNotifyTask: 'has-notify',
                messageBudget: '12',
                taskBudget: '12',
                hrefPopupTask: '#openPopupTask',
                children: [
                    { "id": "f1", "childrenTitle": "Task four text 1", "classNames": "list-task-four show-first" },
                    { "id": "f2", "childrenTitle": "Task four text 2", "classNames": "list-task-four show-first" },
                    { "id": "f3", "childrenTitle": "Task four text 3", "classNames": "list-task-four show-first" },
                    { "id": "f4", "childrenTitle": "Task four text 4", "classNames": "list-task-four show-second" },
                    { "id": "f5", "childrenTitle": "Task four text 5", "classNames": "list-task-four show-second" },
                    { "id": "f6", "childrenTitle": "Task four text 6", "classNames": "list-task-four show-second" },
                    { "id": "f7", "childrenTitle": "Task four text 7", "classNames": "list-task-four show-second" },
                    { "id": "f8", "elseTitle": "Else", "classNames": "list-task-four show-first", "dataClassName": 'list-task-four' },
                ]
            },
            {
                id: 'd',
                groupId: '5',
                dateNumber: '14',
                monthDay: 'September, Fri',
                avtLink: 'https://unsplash.it/25/25',
                name: 'Riley Cooper',
                phone: '(662) 700-7272',
                hasNotifyMessage: '',
                hasNotifyTask: 'has-notify',
                messageBudget: '12',
                taskBudget: '12',
                hrefPopupTask: '#openPopupTask',
                children: [
                    { "id": "g1", "childrenTitle": "Task five text 1", "classNames": "list-task-five show-first" },
                    { "id": "g2", "childrenTitle": "Task five text 2", "classNames": "list-task-five show-first" },
                    { "id": "g3", "childrenTitle": "Task five text 3", "classNames": "list-task-five show-first" },
                    { "id": "g4", "childrenTitle": "Task five text 4", "classNames": "list-task-five show-second" },
                    { "id": "g5", "childrenTitle": "Task five text 5", "classNames": "list-task-five show-second" },
                    { "id": "g6", "childrenTitle": "Task five text 6", "classNames": "list-task-five show-second" },
                    { "id": "g7", "childrenTitle": "Task five text 7", "classNames": "list-task-five show-second" },
                    { "id": "g8", "elseTitle": "Else", "classNames": "list-task-five show-first", "dataClassName": 'list-task-five' },
                ]
            },
            {
                id: 'e',
                groupId: '6',
                dateNumber: '15',
                monthDay: 'September, Sat',
                avtLink: 'https://unsplash.it/25/25',
                name: 'Eva Lee',
                phone: '(662) 700-7272',
                hasNotifyMessage: '',
                hasNotifyTask: '',
                messageBudget: '12',
                taskBudget: '12',
                hrefPopupTask: '#',
                children: [
                    { "id": "h1", "childrenTitle": "Task six text 1", "classNames": "list-task-six show-first" },
                    { "id": "h2", "childrenTitle": "Task six text 2", "classNames": "list-task-six show-first" },
                    { "id": "h3", "childrenTitle": "Task six text 3", "classNames": "list-task-six show-first" },
                    { "id": "h4", "childrenTitle": "Task six text 4", "classNames": "list-task-six show-second" },
                    { "id": "h5", "childrenTitle": "Task six text 5", "classNames": "list-task-six show-second" },
                    { "id": "h6", "childrenTitle": "Task six text 6", "classNames": "list-task-six show-second" },
                    { "id": "h7", "childrenTitle": "Task six text 7", "classNames": "list-task-six show-second" },
                    { "id": "h8", "elseTitle": "Else", "classNames": "list-task-six show-first", "dataClassName": 'list-task-six' },
                ]
            },
            {
                id: 'f',
                groupId: '7',
                dateNumber: '16',
                monthDay: 'September, Sun',
                avtLink: 'https://unsplash.it/25/25',
                name: 'Lu Zhou',
                phone: '(662) 700-7272',
                hasNotifyMessage: 'has-notify',
                hasNotifyTask: 'has-notify',
                messageBudget: '12',
                taskBudget: '12',
                hrefPopupTask: '#openPopupTask',
                children: [
                    { "id": "u1", "childrenTitle": "Task seven text 1", "classNames": "list-task-seven show-first" },
                    { "id": "u2", "childrenTitle": "Task seven text 2", "classNames": "list-task-seven show-first" },
                    { "id": "u3", "childrenTitle": "Task seven text 3", "classNames": "list-task-seven show-first" },
                    { "id": "u4", "childrenTitle": "Task seven text 4", "classNames": "list-task-seven show-second" },
                    { "id": "u5", "childrenTitle": "Task seven text 5", "classNames": "list-task-seven show-second" },
                    { "id": "u6", "childrenTitle": "Task seven text 6", "classNames": "list-task-seven show-second" },
                    { "id": "u7", "childrenTitle": "Task seven text 7", "classNames": "list-task-seven show-second" },
                    { "id": "u8", "elseTitle": "Else", "classNames": "list-task-seven show-first", "dataClassName": 'list-task-seven' },
                ]
            },
            {
                id: 'g',
                groupId: '8',
                dateNumber: '17',
                monthDay: 'September, Mon',
                avtLink: 'https://unsplash.it/25/25',
                name: 'Amacheah ChuZhou',
                phone: '(662) 700-7272',
                hasNotifyMessage: '',
                hasNotifyTask: 'has-notify',
                messageBudget: '12',
                taskBudget: '12',
                hrefPopupTask: '#openPopupTask',
                children: [
                    { "id": "o1", "childrenTitle": "Task eight text 1", "classNames": "list-task-eight show-first" },
                    { "id": "o2", "childrenTitle": "Task eight text 2", "classNames": "list-task-eight show-first" },
                    { "id": "o3", "childrenTitle": "Task eight text 3", "classNames": "list-task-eight show-first" },
                    { "id": "o4", "childrenTitle": "Task eight text 4", "classNames": "list-task-eight show-second" },
                    { "id": "o5", "childrenTitle": "Task eight text 5", "classNames": "list-task-eight show-second" },
                    { "id": "o6", "childrenTitle": "Task eight text 6", "classNames": "list-task-eight show-second" },
                    { "id": "o7", "childrenTitle": "Task eight text 7", "classNames": "list-task-c show-second" },
                    { "id": "o8", "elseTitle": "Else", "classNames": "list-task-eight show-first", "dataClassName": 'list-task-eight' },
                ]
            },
            {
                id: 'h',
                groupId: '9',
                dateNumber: '18',
                monthDay: 'September, Tue',
                avtLink: 'https://unsplash.it/25/25',
                name: 'María Paula Morou',
                phone: '(662) 700-7272',
                hasNotifyMessage: 'has-notify',
                hasNotifyTask: 'has-notify',
                messageBudget: '12',
                taskBudget: '12',
                hrefPopupTask: '#openPopupTask',
                children: [
                    { "id": "p1", "childrenTitle": "Task nine text 1", "classNames": "list-task-nine show-first" },
                    { "id": "p2", "childrenTitle": "Task nine text 2", "classNames": "list-task-nine show-first" },
                    { "id": "p3", "childrenTitle": "Task nine text 3", "classNames": "list-task-nine show-first" },
                    { "id": "p4", "childrenTitle": "Task nine text 4", "classNames": "list-task-nine show-second" },
                    { "id": "p5", "childrenTitle": "Task nine text 5", "classNames": "list-task-nine show-second" },
                    { "id": "p6", "childrenTitle": "Task nine text 6", "classNames": "list-task-nine show-second" },
                    { "id": "p7", "childrenTitle": "Task nine text 7", "classNames": "list-task-nine show-second" },
                    { "id": "p8", "elseTitle": "Else", "classNames": "list-task-nine show-first last-item", "dataClassName": 'list-task-nine' },
                ]
            }
        ],
        eventColor: 'green',
        eventTextColor: '#555b64',
        eventBackgroundColor: '#f9f9f9',
        eventBorderColor: '#f9f9f9',
        events: [
            {
                groupId: 'allday',
                title: 'Cllam laboriosam esse provident sit voluptate qui beatae. Aut voluptas occaecati. Nisi quia ea at voluptas excepturi perferendis.',
                start: '2021-03-01',
                classNames: 'event-task',
            },
        ],
    });

    calendar.render();
    // ----------------------------------
    // Show list tasks on every username
    var elseTasksBtn = document.querySelectorAll(".else-tasks");


    for (let i = 0; i < elseTasksBtn.length; i++) {
        elseTasksBtn[i].addEventListener('click', (evt) => {
            var targetEl = evt.target;
            var classSelect = targetEl.getAttribute("dataClassname");
            var allTasks = document.getElementsByClassName(classSelect);

            if (targetEl.classList.contains("hide-all-task")) {
                targetEl.innerHTML = 'Else&nbsp;<span class="else-task-number">4</span>';
                targetEl.classList.remove("hide-all-task");
                targetEl.setAttribute("style", "margin-top: -8px !important;");

                for (let n = 0; n < allTasks.length; n++) {
                    allTasks[n].classList.remove("active");
                }
            } else {
                targetEl.innerHTML = 'Hide';
                targetEl.classList.add("hide-all-task");
                targetEl.removeAttribute("style");

                for (let u = 0; u < allTasks.length; u++) {
                    if (allTasks[u].classList.contains("show-second")) {
                        allTasks[u].classList.add("active");
                    }
                }
            }
        });
    }

    // End Show list tasks on every username
});
// End Timeline Calendar Row View

// Install mapbox
mapboxgl.accessToken = 'pk.eyJ1IjoibmhpZGFuZyIsImEiOiJja2p3YWU5YW4wMWJsMnF0OHZ2MWxrOXRxIn0.a-OeW8cKGNtyvFqinwbAYQ';
var map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/mapbox/streets-v11',
    center: [12.550343, 55.665957],
    zoom: 9,
    trackResize: true
});
map.resize();
// Show map on Calendar
(function () {
    // View mapbox
    function viewMapbox() {
        var btnswitchHorizontal = document.getElementsByClassName('mode-horizontal');
        var activeMapbox = document.getElementsByClassName('view-mapbox');

        for (var i = 0; i < btnswitchHorizontal.length; i++) {
            btnswitchHorizontal[i].onclick = function () {
                var parentContainMap = this.closest(".calendar-container");
                var btnswitchVertical = document.querySelectorAll('.mode-vertical');

                parentContainMap.classList.replace("display-vertical", "display-horizontal");
                parentContainMap.classList.replace('calendar-mode-vertical', 'calendar-mode-horizontal');
                this.classList.add('active');
                this.nextElementSibling.classList.remove('active');

                if (document.querySelector('.display-horizontal') !== null) {
                    for (var i = 0; i < btnswitchVertical.length; i++) {
                        btnswitchVertical[i].onclick = function () {
                            parentContainMap.classList.replace('display-horizontal', 'display-vertical');
                            parentContainMap.classList.replace('calendar-mode-horizontal', 'calendar-mode-vertical');
                            this.classList.toggle('active');
                            this.previousElementSibling.classList.remove('active');
                            map.resize();
                        }
                    }
                }
                map.resize();
            }
        }

        for (var i = 0; i < activeMapbox.length; i++) {
            activeMapbox[i].onclick = function () {
                var parentContainMap = this.closest(".calendar-container");
                var checkMode = document.getElementById('displayView');
                const isVertical = checkMode.classList.contains('calendar-mode-horizontal');                
                map.resize();
                
                if (document.querySelector('.display-horizontal') == null) {
                    if (!isVertical) {
                        parentContainMap.classList.toggle("display-vertical");
                        document.querySelector('.mode-vertical').classList.add('active');
                        document.querySelector('.mode-horizontal').classList.remove('active');
                        this.classList.toggle('active');
                        map.resize();
                    } else {
                        parentContainMap.classList.toggle("display-horizontal");
                        document.querySelector('.mode-vertical').classList.remove('active');
                        document.querySelector('.mode-horizontal').classList.add('active');
                        this.classList.toggle('active');
                        map.resize();
                    }
                    map.resize();
                } else {
                    if (!isVertical) {
                        parentContainMap.classList.remove('display-horizontal');
                        this.classList.remove('active');
                        document.querySelector('.mode-horizontal').classList.remove('active');
                        map.resize();
                    } else {
                        parentContainMap.classList.toggle("display-horizontal");
                        this.classList.remove('active');
                        map.resize();
                    }
                }
            }
        }
    }

    function switchViewCalendar() {
        var btnSwitchMode = document.getElementsByClassName('btn-viewtask');

        for (var i = 0; i < btnSwitchMode.length; i++) {
            btnSwitchMode[i].onclick = function () {
                var parentContaincalendar = this.closest(".calendar-container");
                var checkMode = document.getElementById('displayView');
                var viewSmallTask = document.getElementById('calendar_horizontal');
                const isVertical = checkMode.classList.contains('display-vertical');
                
                map.resize();

                if (document.querySelector('.calendar-mode-vertical') !== null) {

                    if (!isVertical) {
                        parentContaincalendar.classList.replace('calendar-mode-vertical', 'calendar-mode-horizontal');
                        this.classList.add('btn-horizontal');
                        viewSmallTask.closest(".full-calendar").classList.add('small-tasks'); // View default is small task
                        map.resize();
                    } else {
                        parentContaincalendar.classList.replace('display-vertical', 'display-horizontal');
                        parentContaincalendar.classList.replace('calendar-mode-vertical', 'calendar-mode-horizontal');
                        this.classList.add('btn-horizontal');
                        document.querySelector('.mode-vertical').classList.remove('active');
                        document.querySelector('.mode-horizontal').classList.add('active');
                        map.resize();
                    }
                } else {
                    parentContaincalendar.classList.replace('calendar-mode-horizontal', 'calendar-mode-vertical');
                    parentContaincalendar.classList.replace('display-horizontal', 'display-vertical');
                    this.classList.remove('btn-horizontal');
                    // this.previousElementSibling.classList.remove('active');
                    map.resize();
                }
                map.resize();
            }
        }

        var btnswitchVertical = document.querySelectorAll('.mode-vertical');
        for (var i = 0; i < btnswitchVertical.length; i++) {
            btnswitchVertical[i].onclick = function () {
                var parentContainMap = this.closest(".calendar-container");
                parentContainMap.classList.replace('display-horizontal', 'display-vertical');
                parentContainMap.classList.replace('calendar-mode-horizontal', 'calendar-mode-vertical');
                this.classList.toggle('active');
                this.previousElementSibling.classList.remove('active');
                map.resize();
            }
        }
    }

    // Focus input search on mapbox
    function focusSearchip() {
        var inputSearch = document.getElementsByClassName('field-search');

        for (var i = 0; i < inputSearch.length; i++) {
            inputSearch[i].onfocus = function () {
                var parentSearch = this.closest(".map-header");
                parentSearch.classList.add('hasfocus');
            }
        }
    }
    function outfocusSearchip() {
        var inputSearch = document.getElementsByClassName('field-search');

        for (var i = 0; i < inputSearch.length; i++) {
            inputSearch[i].onblur = function () {
                var parentSearch = this.closest(".map-header");
                parentSearch.classList.remove('hasfocus');
            }
        }
    }
    // Add class active for dropdown mapbox
    function addActiveclass() {
        var itemActive = document.getElementsByClassName('item-action');

        for (var i = 0; i < itemActive.length; i++) {
            itemActive[i].onclick = function () {
                this.classList.toggle('active');
            }
        }
    }
    // View sms message
    function viewSMSMessage() {
        var btnViewSMS = document.getElementsByClassName('view-chatbox');

        for (var i = 0; i < btnViewSMS.length; i++) {
            btnViewSMS[i].onclick = function () {
                var boxMessage = document.querySelectorAll('.sms-message');
                var btnNotifyHeader = document.querySelectorAll('.btn-noti-sms');

                boxMessage[0].classList.toggle('active');
                btnNotifyHeader[0].classList.toggle('active');
            }
        }
    }

    // Add new job focus input search
    function actionFocusIpSearch() {
        var ipNewJobModal = document.getElementsByClassName('select-seach-newjob');
        for (var i = 0; i < ipNewJobModal.length; i++) {
            ipNewJobModal[i].onclick = function () {
                var parentBoxs = this.closest('.boxs-job');
                var itemsResult = document.querySelectorAll('.customer-info');
                parentBoxs.classList.add('has-focus-search');

                for (var i = 0; i < itemsResult.length; i++) {
                    itemsResult[i].onclick = function () {
                        parentBoxs.classList.remove('has-focus-search');
                        parentBoxs.classList.add('has-result-search');
                        document.querySelector('.boxadd-location').classList.add('active');
                        document.querySelector('.box-last').classList.add('hide');

                    }
                }

                var nextStepShowService = document.querySelectorAll('.location-info');
                for (var i = 0; i < nextStepShowService.length; i++) {
                    nextStepShowService[i].onclick = function () {
                        parentBoxs.classList.remove('has-focus-search');
                        parentBoxs.classList.add('has-result-search');
                        document.querySelector('.boxadd-service').classList.add('active');
                        document.querySelector('.button').classList.add('active');
                        document.querySelector('.btn-create').classList.remove('inactive');
                        document.querySelector('.box-second').classList.add('hide');
                    }
                }
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
    
    ready(focusSearchip);
    ready(outfocusSearchip);
    ready(addActiveclass);
    ready(viewMapbox);
    ready(switchViewCalendar);
    ready(viewSMSMessage);
    ready(actionFocusIpSearch);
})();

/* Joblist Header */
// Shown list item jobs
var dropdownBtn = document.querySelector('.btn-job-list');
var jobListContent = document.querySelector('.job-list-items');

dropdownBtn.addEventListener('click', () => {
    jobListContent.classList.toggle("active");
});

// Close All Item Job
var closeAllJobList = document.getElementById("closeAllJobList");
var hasJobTab = document.querySelectorAll(".has-jobtabs");

closeAllJobList.addEventListener('click', () => {
    const jobListItems = document.getElementById("jobListItems");
    const jobGroup = document.getElementById("jobGroup");

    while (jobListItems.firstChild) {
        jobListItems.removeChild(jobListItems.lastChild);
    }

    while (jobGroup.firstChild) {
        jobGroup.removeChild(jobGroup.lastChild);
    }

    // ------Set height of Container-----
    jobGroup.style.display = "none";
    for (var elem of hasJobTab) {
        elem.classList.remove("has-jobtabs");
    }
});

// Close on item in job list

var btnCloseItem = document.querySelectorAll('.close-item-job');

for (i = 0; i < btnCloseItem.length; ++i) {

    btnCloseItem[i].addEventListener('click', function (event) {

        var self = event.target;

        self.parentNode.remove();

    });

}
/* End Job List Header */

/* List name - Job Preview */
var btnCloseName = document.querySelectorAll('.btn-close-name');

for (i = 0; i < btnCloseName.length; ++i) {
    btnCloseName[i].addEventListener('click', function (event) {
        var self = event.target;
        self.closest(".listname-item").remove();
    });
}
/* End List name - Job Preview */

/* Switch time off and New job */
var btnTimeOff = document.getElementsByClassName("btn-timeoff");
var btnNewJob = document.getElementsByClassName("btn-newjob");

for (i = 0; i < btnTimeOff.length; ++i) {
    var modalAddJob = btnTimeOff[i].closest(".modal-addjob");

    btnTimeOff[i].addEventListener('click', () => {
        modalAddJob.classList.add("switch-timeoff");
    });
}

for (i = 0; i < btnNewJob.length; ++i) {
    var modalAddJob = btnNewJob[i].closest(".modal-addjob");

    btnNewJob[i].addEventListener('click', () => {
        modalAddJob.classList.remove("switch-timeoff");
    });
}

/* End Switch time off and New job */

/* Time off - checkbox All Day */
function checkAllDay(checkboxElem) {
    var timeoffSetting = document.getElementsByClassName("time-off");

    if (checkboxElem.checked) {
        for (i = 0; i < timeoffSetting.length; ++i) {
            timeoffSetting[i].classList.add("disabled");
        }
    } else {
        for (i = 0; i < timeoffSetting.length; ++i) {
            timeoffSetting[i].classList.remove("disabled");
        }
    }
}
/* End Time off - checkbox All Day */

/* Time off - Repeat Setting Switch */
function switchRepeatEdit(switchEl) {
    switchEl.closest(".box-repeat").classList.toggle("has-edit");
}
/* End Time off - Repeat Setting Switch */

/* Time off - Repeat Edit Modal */
var btnCloseModalRepeat = document.getElementById("btn-close-repeat");
var modalRepeat = document.getElementById("modalRepeat");

btnCloseModalRepeat.addEventListener('click', () => {
    modalRepeat.classList.remove("open");
});
/* End Time off - Repeat Edit Modal */

/* Open Job Preview */
var eventJob = document.getElementsByClassName("event");
var jobPreview = document.getElementsByClassName("job-preview");

for (i = 0; i < eventJob.length; ++i) {
    eventJob[i].addEventListener('click', function () {
        var eventJobClass = this.getElementsByClassName('events-job')[0];

        isEventJobActive();
        eventJobClass.classList.add("active");
        jobPreview[0].classList.add("active");

        // Show dropdown Users
        const button = document.querySelector('#button');
        const tooltip = document.querySelector('#tooltip');

        Popper.createPopper(button, tooltip, {
            placement: 'left-start',
            modifiers: [
                {
                    name: 'offset',
                    enabled: true,
                    options: {
                        offset: [29, -134],
                    },
                }, {
                    name: 'flip',
                    enabled: true,
                    options: {
                        offset: [29, -134],
                    },
                },
            ],
        });
    });
}

function isEventJobActive() {
    var eventJobs = document.getElementsByClassName("events-job");

    for (i = 0; i < eventJobs.length; ++i) {
        eventJobs[i].classList.remove("active");
    }
}

function closeJobPreview(btnClose) {
    var jobPreview = btnClose.closest(".job-preview");
    jobPreview.classList.remove("active");
}
/* End Open Job Preview */
   
/* Route Optimizer */
var btnViewMap = document.getElementsByClassName("btn-viewmap");
btnViewMap[0].addEventListener('click', function () {
    map.resize();
});

// Install Calendar
document.addEventListener('DOMContentLoaded', function () {
    var calendarEl = document.getElementById('calendarRouteOptimizer');

    var calendar = new FullCalendar.Calendar(calendarEl, {
        timeZone: 'UTC',
        initialView: 'timeGridWeek',
        headerToolbar: false,
        dayHeaderFormat: { weekday: 'long' },
    });

    calendar.render();
});

/* End Route Optimizer */

/* Modal Route Optimizer */
function closeModalRouteOptimizer() {
    var modalRouteOptimizer = document.getElementById("routeOptimizer");
    modalRouteOptimizer.classList.remove("open");
}

// Close Modal Job detail
function closeJobDetails() {
    document.getElementById("openJobDetails").classList.remove("open");
}


/* Checkin / Checkout on Job detail */
function saveTime(btnSaveTime) {
    var dropdownBox = btnSaveTime.closest(".dropdown");
    var btnResetTime = dropdownBox.querySelector(".btn-reset-time");
    var btnTimeCheckout = document.querySelector(".time-checkout");

    if(dropdownBox.classList.contains("set-custom-time-active")) {
        dropdownBox.classList.remove("set-custom-time-active");
    }

    if(btnTimeCheckout) {
        btnTimeCheckout.classList.remove("btn-disabled");
    }

    dropdownBox.classList.remove("save-time-active", "active");
    dropdownBox.classList.add("reset-time-active");
    btnResetTime.classList.remove("hidden");
}

function setCustomTime(btnSetCustomTime) {
    var dropdownBox = btnSetCustomTime.closest(".dropdown");
    var btnResetTime = dropdownBox.querySelector(".btn-reset-time");

    if(btnResetTime.classList.contains("hidden") === false) {
        btnResetTime.classList.add("hidden");
    }

    dropdownBox.classList.remove("save-time-active");
    dropdownBox.classList.add("set-custom-time-active");
}

function resetTime(btnResetTime) {
    var dropdownBox = btnResetTime.closest(".dropdown");
    var btnResetTime = dropdownBox.querySelector(".btn-reset-time");

    dropdownBox.classList.remove("reset-time-active", "active");
    dropdownBox.classList.add("save-time-active");
    btnResetTime.classList.add("hidden");
}


function cancelTime(btnCancelTime) {
    var dropdownBox = btnCancelTime.closest(".dropdown");

    dropdownBox.classList.remove("set-custom-time-active", "active");
    dropdownBox.classList.add("save-time-active");
}
/* End Checkin / Checkout */