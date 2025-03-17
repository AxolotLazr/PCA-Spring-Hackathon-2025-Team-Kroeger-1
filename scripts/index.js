// Variables
    var scedguel = [
        [['grade#', 'group#'], 'day', ['class start', 'class end'], 'room'],
        [[10,1], 1, [815,945], 210],
        [[10,1], 1, [950,1120], 203],
        [[10,2], 1, [815, 945], 203],
        [[10,2], 1, [950, 1120], 205],
        [[10,2], 1, [1125, 1225], 203],
        [[10,2], 1, [1230, 1320], 'Hub'],
        [[10,2], 1, [1325, 1455], 210],
    ];

// Contents

// Functions
    function isNewInstance () {
        if (!['9','10','11','12'].includes(localStorage.getItem('grade'))) {
            window.open("selectGrade.html", '_self');
        } else if (!['1','2','3'].includes(localStorage.getItem('group'))) {
            if (localStorage.getItem('grade') == '9') {
                window.open("selectGroupGrade9.html", '_self');
            } else {
                window.open("selectGroup.html", '_self');
            };
        };
    };

    function setGrade (grade) {
        localStorage.setItem("grade", grade);

        if (localStorage.getItem('grade') == '9') {
            window.open("selectGroupGrade9.html", '_self');
        } else {
            window.open("selectGroup.html", '_self');
        };
    };
    function setGroup (group) {
        localStorage.setItem("group", group);

        window.open("index.html", '_self');
    };