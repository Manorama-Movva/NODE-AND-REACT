const express =require('express');
const { ROUTE_CONSTANTS } = require('./route_constants');
const bodyParser= require("body-parser");
const app =express();
//route,callback func
app.use(bodyParser.urlencoded({ extended: false }))
 
// parse application/json
app.use(bodyParser.json())
app.get(ROUTE_CONSTANTS.DEFAULT,function(req,res){
 res.send("<h1>Welcome to Pegasys</h1>");
});
app.get(ROUTE_CONSTANTS.GET_LOGIN,function(req,res){
    res.sendFile(__dirname+'/pages/login.html')
    //here we copy pasted one code from snippets in pages folder in login.html file
    //"res.sendFile(__dirname+'/pages/login.html')" 
    //in localhost:3000/login we get that login page
});
app.get(ROUTE_CONSTANTS.GET_REGISTER,function(req,res){
    res.sendFile(__dirname+'/pages/register.html')
});
app.post(ROUTE_CONSTANTS.POST_REGISTER,function(req,res){
    console.log(req.body)
    res.send("registered successfully")
});
app.get(ROUTE_CONSTANTS.GET_PRODUCTS,function(req,res){
    

    const productsData= [
        {
          "_id": "5f5860b371a9a4b892294840",
          "index": 0,
          "guid": "39c0c2fd-aaae-47df-862a-16d7f5444464",
          "isActive": true,
          "balance": "$3,696.60",
          "picture": "http://placehold.it/32x32",
          "age": 40,
          "eyeColor": "green",
          "name": "Lott Hunter",
          "gender": "male",
          "company": "ENERVATE",
          "email": "lotthunter@enervate.com",
          "phone": "+1 (992) 483-3091",
          "address": "131 Ridge Court, Kerby, Nevada, 5817",
          "about": "Ad ut id irure et esse eu sunt ad amet est quis esse. Irure et ipsum cupidatat amet aliquip ullamco esse sint exercitation pariatur ad quis. Laboris aliqua magna et occaecat excepteur sit anim dolore mollit minim. Irure ad elit consequat eiusmod reprehenderit. Eiusmod voluptate culpa excepteur ut dolor magna ut enim labore labore et dolore do sint. Irure tempor aute consectetur enim mollit adipisicing nulla. Mollit dolor id excepteur voluptate consectetur.\r\n",
          "registered": "2019-07-02T06:07:37 -06:-30",
          "latitude": 80.499295,
          "longitude": -101.542572,
          "tags": [
            "magna",
            "voluptate",
            "qui",
            "minim",
            "reprehenderit",
            "reprehenderit",
            "nulla"
          ],
          "friends": [
            {
              "id": 0,
              "name": "Graham Dillon"
            },
            {
              "id": 1,
              "name": "Gamble Rollins"
            },
            {
              "id": 2,
              "name": "Hanson Fleming"
            }
          ],
          "greeting": "Hello, Lott Hunter! You have 9 unread messages.",
          "favoriteFruit": "banana"
        },
        {
          "_id": "5f5860b3e69e21500eb23ad2",
          "index": 1,
          "guid": "12fec969-e9c5-48d4-9182-0054099f0501",
          "isActive": false,
          "balance": "$2,459.63",
          "picture": "http://placehold.it/32x32",
          "age": 32,
          "eyeColor": "brown",
          "name": "Madelyn Joyce",
          "gender": "female",
          "company": "GLASSTEP",
          "email": "madelynjoyce@glasstep.com",
          "phone": "+1 (914) 416-3830",
          "address": "946 Rockaway Parkway, Bethpage, Virgin Islands, 837",
          "about": "Eiusmod amet elit veniam sit labore irure laboris irure ullamco eiusmod. Elit in id incididunt in ex veniam. Veniam fugiat adipisicing qui fugiat quis. Reprehenderit excepteur cillum Lorem veniam qui officia. Id pariatur dolore ullamco pariatur. Amet duis mollit occaecat culpa eiusmod ad dolore mollit anim est nostrud Lorem. Veniam in eu culpa Lorem ullamco labore laboris aute.\r\n",
          "registered": "2020-01-22T09:23:41 -06:-30",
          "latitude": 2.195516,
          "longitude": -2.54582,
          "tags": [
            "elit",
            "dolor",
            "adipisicing",
            "commodo",
            "amet",
            "ex",
            "et"
          ],
          "friends": [
            {
              "id": 0,
              "name": "Allen Harper"
            },
            {
              "id": 1,
              "name": "Haley Ryan"
            },
            {
              "id": 2,
              "name": "Gallagher Farrell"
            }
          ],
          "greeting": "Hello, Madelyn Joyce! You have 9 unread messages.",
          "favoriteFruit": "strawberry"
        },
        {
          "_id": "5f5860b326f3f7a06abb30fb",
          "index": 2,
          "guid": "786a84d5-50d0-4325-baf6-ead2fdb33cd3",
          "isActive": false,
          "balance": "$1,255.55",
          "picture": "http://placehold.it/32x32",
          "age": 40,
          "eyeColor": "green",
          "name": "Ilene Dickson",
          "gender": "female",
          "company": "OULU",
          "email": "ilenedickson@oulu.com",
          "phone": "+1 (949) 524-3347",
          "address": "150 Bergen Avenue, Camino, Pennsylvania, 7301",
          "about": "Qui minim tempor dolor occaecat. Laboris tempor duis aliquip qui culpa nisi ipsum elit qui cillum quis excepteur esse non. Ipsum ex est laborum consequat sit sit in laboris pariatur veniam. Non ipsum mollit excepteur quis id cillum.\r\n",
          "registered": "2014-04-12T12:44:34 -06:-30",
          "latitude": 31.452736,
          "longitude": 152.993902,
          "tags": [
            "consectetur",
            "sit",
            "dolore",
            "nulla",
            "veniam",
            "et",
            "reprehenderit"
          ],
          "friends": [
            {
              "id": 0,
              "name": "Luann Logan"
            },
            {
              "id": 1,
              "name": "Holder Valentine"
            },
            {
              "id": 2,
              "name": "Judy Mann"
            }
          ],
          "greeting": "Hello, Ilene Dickson! You have 9 unread messages.",
          "favoriteFruit": "strawberry"
        },
        {
          "_id": "5f5860b3ead8a2b6cf29f2f6",
          "index": 3,
          "guid": "e7904c3a-4233-4665-91f2-e45b613e0656",
          "isActive": true,
          "balance": "$2,910.72",
          "picture": "http://placehold.it/32x32",
          "age": 37,
          "eyeColor": "brown",
          "name": "Jordan Norman",
          "gender": "female",
          "company": "COMTEXT",
          "email": "jordannorman@comtext.com",
          "phone": "+1 (832) 481-3606",
          "address": "764 Fanchon Place, Croom, Nebraska, 3366",
          "about": "Tempor aliqua tempor aute qui enim eu ipsum ullamco id proident. Ex tempor minim cillum ex incididunt fugiat ea nisi duis ut voluptate. Qui tempor laborum officia occaecat ipsum duis reprehenderit commodo consectetur Lorem.\r\n",
          "registered": "2020-05-29T12:37:21 -06:-30",
          "latitude": -30.821114,
          "longitude": -11.887129,
          "tags": [
            "exercitation",
            "id",
            "magna",
            "adipisicing",
            "amet",
            "in",
            "dolor"
          ],
          "friends": [
            {
              "id": 0,
              "name": "Stout Davis"
            },
            {
              "id": 1,
              "name": "Rosalinda Rodriguez"
            },
            {
              "id": 2,
              "name": "Clay Oliver"
            }
          ],
          "greeting": "Hello, Jordan Norman! You have 1 unread messages.",
          "favoriteFruit": "banana"
        },
        {
          "_id": "5f5860b3ea4867ea3110b165",
          "index": 4,
          "guid": "df40286a-fc90-49eb-b168-159b591bc064",
          "isActive": false,
          "balance": "$2,330.55",
          "picture": "http://placehold.it/32x32",
          "age": 38,
          "eyeColor": "green",
          "name": "Galloway Phelps",
          "gender": "male",
          "company": "MITROC",
          "email": "gallowayphelps@mitroc.com",
          "phone": "+1 (875) 464-3102",
          "address": "856 Vanderveer Place, Castleton, Indiana, 3340",
          "about": "Ut incididunt dolore fugiat reprehenderit do in ipsum officia Lorem. Nulla id amet commodo amet cillum fugiat minim irure. Nostrud ea sit culpa cupidatat enim aliquip enim pariatur magna magna. Consequat deserunt nulla aute eu pariatur veniam Lorem mollit velit ipsum.\r\n",
          "registered": "2014-02-12T04:05:08 -06:-30",
          "latitude": 24.19016,
          "longitude": -114.312637,
          "tags": [
            "elit",
            "do",
            "do",
            "veniam",
            "adipisicing",
            "dolore",
            "est"
          ],
          "friends": [
            {
              "id": 0,
              "name": "Chambers Mcdonald"
            },
            {
              "id": 1,
              "name": "Erickson Contreras"
            },
            {
              "id": 2,
              "name": "Coleen Lloyd"
            }
          ],
          "greeting": "Hello, Galloway Phelps! You have 5 unread messages.",
          "favoriteFruit": "strawberry"
        }
      ]
    res.json(productsData)
});
app.get(ROUTE_CONSTANTS.GET_FILE,function(req,res){
    res.sendFile(__dirname+'/file.pdf');
})

app.listen(3000)