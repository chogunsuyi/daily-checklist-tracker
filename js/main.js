let progressLog = []

class Day {
    constructor(day, item1, item2, item3, item4, item5, item6, item7, item8, item9) {

        const weekday = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];

        this.dayNumber = day,
        this.dayUnixTime = day * 86400 + 1689566400,
        this.fullDate = new Date(this.dayUnixTime * 1000),
        this.dayOfWeek = weekday[this.fullDate.getDay()],
        this.month = this.fullDate.getMonth() + 1,
        this.day = this.fullDate.getDate(),
        this.year = this.fullDate.getFullYear(),
        this.formattedDate = `${this.dayOfWeek} ${this.month}/${this.day}/${this.year}`,
        
        this.item1 = item1,
        this.item2 = item2,
        this.item3 = item3,

        this.item4 = item4,
        this.item5 = item5,
        this.item6 = item6,

        this.item7 = item7,
        this.item8 = item8,
        this.item9 = item9,

        this.check = function () {
            
            const div = document.createElement('div')

            const h1 = document.createElement('h1')
            const dayNode = document.createTextNode(`${this.formattedDate}`)

            const bigSection = document.createElement('section')
            bigSection.setAttribute('class', 'day')
            bigSection.setAttribute('id', `d${day}`)


            const smallSection1 = document.createElement('section')
            smallSection1.setAttribute('class', 'item')
            smallSection1.setAttribute('id', `d${day}-item1`)
            const span1 = document.createElement('span');
            const node1 = document.createTextNode('List Item 1');

            const smallSection2 = document.createElement('section')
            smallSection2.setAttribute('class', 'item')
            smallSection2.setAttribute('id', `d${day}-item2`)
            const span2 = document.createElement('span');
            const node2 = document.createTextNode('List Item 2');

            const smallSection3 = document.createElement('section')
            smallSection3.setAttribute('class', 'item')
            smallSection3.setAttribute('id', `d${day}-item3`)
            const span3 = document.createElement('span');
            const node3 = document.createTextNode('List Item 3');

            const smallSection4 = document.createElement('section')
            smallSection4.setAttribute('class', 'item')
            smallSection4.setAttribute('id', `d${day}-item4`)
            const span4 = document.createElement('span');
            const node4 = document.createTextNode('List Item 4');

            const smallSection5 = document.createElement('section')
            smallSection5.setAttribute('class', 'item')
            smallSection5.setAttribute('id', `d${day}-item5`)
            const span5 = document.createElement('span');
            const node5 = document.createTextNode('List Item 5');

            const smallSection6 = document.createElement('section')
            smallSection6.setAttribute('class', 'item')
            smallSection6.setAttribute('id', `d${day}-item6`)
            const span6 = document.createElement('span');
            const node6 = document.createTextNode('List Item 6');

            const smallSection7 = document.createElement('section')
            smallSection7.setAttribute('class', 'item')
            smallSection7.setAttribute('id', `d${day}-item7`)
            const span7 = document.createElement('span');
            const node7 = document.createTextNode('List Item 7');

            const smallSection8 = document.createElement('section')
            smallSection8.setAttribute('class', 'item')
            smallSection8.setAttribute('id', `d${day}-item8`)
            const span8 = document.createElement('span');
            const node8 = document.createTextNode('List Item 8');

            const smallSection9 = document.createElement('section')
            smallSection9.setAttribute('class', 'item')
            smallSection9.setAttribute('id', `d${day}-item9`)
            const span9 = document.createElement('span');
            const node9 = document.createTextNode('List Item 9');



            h1.appendChild(dayNode)

            span1.appendChild(node1);
            span2.appendChild(node2);
            span3.appendChild(node3);
            span4.appendChild(node4);
            span5.appendChild(node5);
            span6.appendChild(node6);
            span7.appendChild(node7);
            span8.appendChild(node8);
            span9.appendChild(node9);

            smallSection1.appendChild(span1);
            smallSection2.appendChild(span2);
            smallSection3.appendChild(span3);
            smallSection4.appendChild(span4);
            smallSection5.appendChild(span5);
            smallSection6.appendChild(span6);
            smallSection7.appendChild(span7);
            smallSection8.appendChild(span8);
            smallSection9.appendChild(span9);

            bigSection.appendChild(smallSection1);
            bigSection.appendChild(smallSection2);
            bigSection.appendChild(smallSection3);
            bigSection.appendChild(smallSection4);
            bigSection.appendChild(smallSection5);
            bigSection.appendChild(smallSection6);
            bigSection.appendChild(smallSection7);
            bigSection.appendChild(smallSection8);
            bigSection.appendChild(smallSection9);

            div.appendChild(h1);;
            div.appendChild(bigSection);;

            const element = document.querySelector('main');
            element.appendChild(div);

            if (this.item1) {
                document.querySelector(`#d${day}-item1`).classList.add('green');
            } else {
                document.querySelector(`#d${day}-item1`).classList.add('red');
            }

            if (this.item2) {
                document.querySelector(`#d${day}-item2`).classList.add('green');
            } else {
                document.querySelector(`#d${day}-item2`).classList.add('red');
            }

            if (this.item3) {
                document.querySelector(`#d${day}-item3`).classList.add('green');
            } else {
                document.querySelector(`#d${day}-item3`).classList.add('red');
            }

            if (this.item4) {
                document.querySelector(`#d${day}-item4`).classList.add('green');
            } else {
                document.querySelector(`#d${day}-item4`).classList.add('red');
            }

            if (this.item5) {
                document.querySelector(`#d${day}-item5`).classList.add('green');
            } else {
                document.querySelector(`#d${day}-item5`).classList.add('red');
            }

            if (this.item6) {
                document.querySelector(`#d${day}-item6`).classList.add('green');
            } else {
                document.querySelector(`#d${day}-item6`).classList.add('red');
            }

            if (this.item7) {
                document.querySelector(`#d${day}-item7`).classList.add('green');
            } else {
                document.querySelector(`#d${day}-item7`).classList.add('red');
            }

            if (this.item8) {
                document.querySelector(`#d${day}-item8`).classList.add('green');
            } else {
                document.querySelector(`#d${day}-item8`).classList.add('red');
            }

            if (this.item9) {
                document.querySelector(`#d${day}-item9`).classList.add('green');
            } else {
                document.querySelector(`#d${day}-item9`).classList.add('red');
            }
            
        }
    }
}



/*
Enter/Update Data Here
(Example below can be deleted):
*/

    // 7/18/2023
    progressLog.push(new Day(1, true, true, true, true, true, true, true, true, true));

    // 7/19/2023
    progressLog.push(new Day(2, true, false, true, false, true, false, true, false, true));

/*
Example Over
*/


progressLog.forEach(day => {
    day.check();
})