# Casino application

This is a casino!!!

## Getting Started

**Install the following**

[Git](https://git-scm.com/downloads), [Node.js](https://nodejs.org/en/download/), [MySQL](https://www.mysql.com/downloads/)

**Clone the repository**

`git clone https://github.com/jerrylee17/casino.git`

**Install dependencies**

`npm install`

**Start backend and frontend**
In one tab run `npm run server`
In another tab run `npm run frontend`

**Create your own branch and edit there**

`git checkout -b [YOUR BRANCH NAME]`

**If you want to push, you must rebase first to get the latest files from master (fix all merge conflicts)**

- `git checkout master`

- `git fetch origin master`

- `git pull origin master`

- `git checkout [YOUR BRANCH NAME]`

- `git rebase master`

**Pushing your changes**

`git add .`

`git commit -m "Enter a description"`

`git push origin [YOUR BRANCH NAME]`

**Open a pull request to merge into master (request review from members)**

## Frontend/Backend Tutorial

Note: Make sure to import jQuery

`import $ from 'jquery';`

**Send data from Node.js to React.js**

```
Node.js
app.get("/api/test", (req, res) => {
  const test = [
    { id: 1, name: "Name1" },
    { id: 2, name: "Name2" }
  ];
  res.json(test);
});
```

```
React.js
$.get("http://localhost:5000/api/test", function(data) {
    console.log(data);
});
```

**Send data from React.js to Node.js**

```
Node.js
app.post("/api/login", function(req, res) {
  console.log(req.body);
  res.send("response");
});
```

```
React.js
$.post("http://localhost:5000/api/login", {
    user: "testUser",
    password: "hashedPassword"
});
```
