

//  ELEMENTS 
let total = document.getElementById('total');
let interview = document.getElementById('interview');
let rejected = document.getElementById('rejected');
let tabCount = document.getElementById('tabCount');

const allFilterBtn = document.getElementById('all-filter-tab');
const interviewFilterBtn = document.getElementById('interview-filter-tab');
const rejectedFilterBtn = document.getElementById('rejected-filter-tab');

const allCardsSection = document.getElementById('allCards');
const mainContainer = document.querySelector('main');
const noJobsSection = document.getElementById('noJobsSection');

//  COUNT FUNCTION 
function calculateCount() {
    let allCards = document.getElementsByClassName('card');
    total.innerText = allCards.length;
    tabCount.innerText = allCards.length;

    let interviewCount = 0;
    let rejectedCount = 0;

    for (let i = 0; i < allCards.length; i++) {
        let statusEl = allCards[i].getElementsByClassName('status')[0];
        if (statusEl.classList.contains('status-interview')) interviewCount++;
        if (statusEl.classList.contains('status-rejected')) rejectedCount++;
    }

    interview.innerText = interviewCount;
    rejected.innerText = rejectedCount;
}

calculateCount();

//  FILTER FUNCTION 
function toggleStyle(id) {

    // Reset all buttons
    allFilterBtn.classList.remove('bg-[#3B82F6]', 'text-white');
    interviewFilterBtn.classList.remove('bg-[#3B82F6]', 'text-[#ffffff]');
    rejectedFilterBtn.classList.remove('bg-[#3B82F6]', 'text-white');

    allFilterBtn.classList.add('bg-[#ffffff]', 'text-black');
    interviewFilterBtn.classList.add('bg-[#ffffff]', 'text-black');
    rejectedFilterBtn.classList.add('bg-[#ffffff]', 'text-black');

    // Activate selected button
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

    // Show "No jobs available" if no cards in this filtered view
    if (id === 'all-filter-tab' || visibleCount > 0) {
        noJobsSection.classList.add('hidden');
    } else {
        noJobsSection.classList.remove('hidden');
    }
}

//  HELPER TO GET ACTIVE TAB 
function getActiveTab() {
    if (allFilterBtn.classList.contains('bg-[#3B82F6]')) return 'all-filter-tab';
    if (interviewFilterBtn.classList.contains('bg-[#3B82F6]')) return 'interview-filter-tab';
    if (rejectedFilterBtn.classList.contains('bg-[#3B82F6]')) return 'rejected-filter-tab';
}

//  MAIN EVENT LISTENER ===================
mainContainer.addEventListener('click', function(event) {

    let card = event.target.closest('.card');
    if (!card) return;

    let statusElement = card.getElementsByClassName('status')[0];

    // MARK AS INTERVIEW
    if (event.target.classList.contains('interview-btn')) {
        statusElement.innerText = 'INTERVIEW';
        statusElement.classList.remove('status-rejected');
        statusElement.classList.add('status-interview');
        statusElement.classList.remove('bg-[#EEF4FF]');
        statusElement.classList.add('bg-green-200');
    }


    // UPDATE COUNTS AND FILTER VIEW
    calculateCount();
    toggleStyle(getActiveTab());
});