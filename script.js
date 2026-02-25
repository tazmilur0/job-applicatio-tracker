//  ELEMENTS 
let total = document.getElementById('total');
let interview = document.getElementById('interview');
let rejected = document.getElementById('rejected');
let tabCount = document.getElementById('tabCount');

const allFilterBtn = document.getElementById('all-filter-tab');
const interviewFilterBtn = document.getElementById('interview-filter-tab');
const rejectedFilterBtn = document.getElementById('rejected-filter-tab');




    const selected = document.getElementById(id);
    selected.classList.remove('bg-[#ffffff]', 'text-black');
    selected.classList.add('bg-[#3B82F6]', 'text-[#ffffff]');

    let allCards = document.getElementsByClassName('card');
    let visibleCount = 0;

    for (let i = 0; i < allCards.length; i++) {
        let card = allCards[i];
        let status = card.getElementsByClassName('status')[0].innerText;

        if (id === 'all-filter-tab') {
            card.style.display = 'flex';
            visibleCount++;
        } else if (id === 'interview-filter-tab') {
            if (status === 'INTERVIEW') {
                card.style.display = 'flex';
                visibleCount++;
            } else {
                card.style.display = 'none';
            }
        } else if (id === 'rejected-filter-tab') {
            if (status === 'REJECTED') {
                card.style.display = 'flex';
                visibleCount++;
            } else {
                card.style.display = 'none';
            }
        }
    }