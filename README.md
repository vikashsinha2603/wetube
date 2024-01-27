Debouncing: 


typing slow = 200ms
typing fast = 30ms


Perfomance: 
 - iphone pro max = 14 letter * 1000  = 140000
 - with debouncing= 3 API calls * 1000 = 3000



 Debouncing with 200ms
 - if difference between 2 key strokes is <200ms - DECLINE API call
- >200ms make an API call






Cache: 
time complexity tro search in array = O(n)
time complexity tro search in Object = O(1)

[i, ip, iph, iphone]

{
    i: 
    ip:
    iph: 
    iphone:
}

new Map();

before making project first ask you to interviewer about requirement .. whether searchbar is avail or not, coment features, tech stack-- redux, tailwind, router dom, bundler, jest react testing library 5 min in this and other 5 min planing make arch of your prjlike header, sidebar, video container, watch v.c, 
setupp react , tailwind

head
body
  sidebar
    menu items
  maincontainer
    buttonlist
    video container
      video card  

      grid used to devide screen into 12 section
      creating  hamburger icon working to expand and collapes sidebar icon if I use state then where it will present it's confusing so make a redux store --global space-- utils-store, slices
make reducer of name togglemenu.. dispatch an action in head to toggle and useselector in sidebar 

after sidebar make buttons like breadcrumb component

video section== video container ... fetching api from google dev console then fetch data in this file containes lots of cards first set data into one card test it if it work fine the scale it through map function
watch page pe sidebar collapse hone ke liye alag reducer banao

search params in watch page -- study through react router  ..
through params get video id and display into the watch page->iframe ke video src me embedd kro searchparam ko

homework== sare video api se banao

higher order component -- receive a component return a new component--
1 component ko naye fn me wrap krke usko achha modify bana do like advideocard 

searchbar== give suggestion by taking ap call .. not make api call on every type this thing called load 

youtube search suggestion api
make the ap call in every ey press but if the diff between 2 api calls is <200ms decline the api call

key-i
render the component
useeffect()
start timer=> make api call after 200ms

key-ip
destroy the component(useeffect return method)
re-render the component
useeffect
start timer=> make api call after 200 sec

debouncing
set(Timeout200ms)-- make an api call after 200ms

search ko cache me save krna uske liye redux kaa kaam kro phle search slice banao

cache: t.c to search in array = o(n)
     t.c to search in object = o(1)

if searchquery is present in cache then give result through cache

nested comment
use recursion for creating multiple comment reply

infinite sroll>> pagination
live chat

get data live, update the ui
1.> web sockets=>  make handshake between ui and server, no regular interval eg= trading apps, whatsapp
2.> long or api polling ... regular interval.. s to ui
eg = gmail which takes time, crickbuzz because it loading comment every bowl takes 25 sec so after that app call api..

youtube calls api through api polling
delete chat older message

for pooling == useeffect, setinterval, append the data using redux ;;; keep updating 

pushing lots of live chat  explode the DOM
so delete chats after fix interval of time 
make form to upload your chat to live then preventdefault  use redux and dispatcher
