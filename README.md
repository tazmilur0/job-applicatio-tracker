1. What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll?
  1.	 getElementById()
    •	একটিমাত্র element return করে
    •	শুধু id দিয়ে খুঁজে
    •	খুব fast
  2.	 getElementsByClassName()
    •	class দিয়ে খুঁজে
    •	Multiple element return করে
    •	Returns HTMLCollection
    •	Live collection (DOM change হলে update হয়)
  3.	 querySelector()
    •	CSS selector ব্যবহার করে
    •	প্রথম matching element return করে
  4.	 querySelectorAll()
    1.	CSS selector ব্যবহার করে
    2.	সব matching element return করে
    3.	Returns NodeList
    4.	Static (auto update হয় না)
2. How do you create and insert a new element into the DOM?
Ans: 
const mainContainer = document.getElementById('main-conatiner');
const playerSection =document.createElement('section');

mainContainer.appendChild(playerSection); 

const h1 = document.createElement('h1');
playerSection.appendChild(h1)
h1.innerText = 'This is a Heading tag'

const listItem  = document.createElement('ul');
playerSection.appendChild(listItem);

const item = document.createElement('li');
listItem.appendChild(item);
item.innerText = 'Tazmilur';
const item2 = document.createElement('li');
listItem.appendChild(item2);
item2.innerText = 'Tazmilur';

3. What is Event Bubbling? And how does it work?
Ans: Event Bubbling হলো এমন একটি প্রক্রিয়া যেখানে কোনো child element-এ event ঘটলে সেই event ধাপে ধাপে উপরের parent element গুলোর দিকে উঠে যায়।
browser এ event flow তিন ধাপে হয়:
  •	Capturing Phase (উপরে থেকে নিচে আসে)
  •	 Target Phase (যেখানে click হয়েছে)
  •	 Bubbling Phase (নিচ থেকে উপরে যায়)

4. What is Event Delegation in JavaScript? Why is it useful?
Ans: Event Delegation হলো এমন একটি technique যেখানে child element গুলোর জন্য আলাদা আলাদা event না দিয়ে  তাদের parent element এ একটাই event listener বসানো হয়।
  Event Delegation useful?
    •	Performance ভালো হয়
    •	Dynamic Element এ কাজ করে
    •	Code clean থাকে

5.What is the difference between preventDefault() and stopPropagation() methods?
preventDefault() : এই পদ্ধতিটি ব্রাউজারকে নির্বাচিত উপাদানের ডিফল্ট আচরণ সম্পাদন করতে বাধা দেয়। ইভেন্ট বাতিলযোগ্য হলেই এই পদ্ধতিটি ইভেন্টটি বাতিল করতে পারে।
stopPropagation(): একটি রোড ব্লক করার মত। এটি ইভেন্টকে বলে ‡Kv_vq _vg‡Z n‡e  Dom tree আর উপরে (বা নিচে) যাবেন না।
