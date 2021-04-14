const router = require('express').Router();
const fetch = require('node-fetch');
const fs = require('fs');
const path = require('path').resolve(__dirname, '../data');
const axios = require('axios');
const { json } = require('express');

// Internal Fetch of Original DATA.

router.get('/internal', (req, res) => {
  fetch('https://jan6evidence.com/data/evidence.json')
    .then((res) => {
      return res.json();
    })
    .then((data) => {
      fs.writeFile(path + '/jan6.json', JSON.stringify(data), () => {});
    })
    .catch((err) => {
      console.log(err);
    });
  res.send('File Sent');
});

router.get('/', (req, res) => {
  fs.readFile(path + '/jan6.json', 'utf8', (err, data) => {
    if (err) {
      console.error(err);
      return;
    }
    data = JSON.parse(data);
    const arr = [];
    const all = {};
    data.forEach((evidence) => {
      let suspects = evidence.suspectTags;
      // console.log(suspects);
      suspects.forEach((suspect) => {
        arr.push(suspect);
      });
      // console.log(arr);
    });
    arr.forEach((key) => {
      all[key] = (all[key] || 0) + 1;
    });
    const sortable = Object.entries(all)
      .sort(([, a], [, b]) => b - a)
      .reduce((r, [k, v]) => ({ ...r, [k]: v }), {});
    const suspectObj = [];
    let id = 0;
    for (const suspect in sortable) {
      let individualSuspectObj = {
        id: ++id,
        name: suspect,
        count: sortable[suspect]
      };
      suspectObj.push(individualSuspectObj);
    }

    // console.log(suspectObj[0]);
    res.send(suspectObj);
  });
});

router.get('/:name', (req, res) => {
  suspectName = req.params.name;
  // console.log(suspectName);

  fs.readFile(path + '/jan6.json', 'utf8', (err, data) => {
    if (err) {
      console.error(err);
      return;
    }
    data = JSON.parse(data);
    const vidArray = [];
    // const all = {};
    const videoList = [];
    data.forEach((evidence) => {
      let suspects = evidence.suspectTags;
      // console.log(suspects);
      suspects.forEach((suspect) => {
        // vidArray.push(suspect);
        // console.log(evidence._id);
        // console.log(suspect);
        // console.log(suspectName);
        if (suspect == suspectName) {
          videoList.push(evidence._id);
          //   // console.log('matched!');
        }
      });
      console.log(videoList);
      let unique = [...new Set(videoList)];
      // console.log(unique);
    });
  });

  // fs.readFile(path + '/jan6.json', 'utf8', (err, data) => {
  //   if (err) {
  //     console.error(err);
  //     return;
  //   }
  //   data = JSON.parse(data);
  //   let neededData = data.find(
  //     (important) => important.suspectTags.length > 20
  //   );
});

// Reading File + Filter or Other Sorting.
// fs.readFile(path + '/jan6.json', 'utf8', (err, data) => {
//   if (err) {
//     console.error(err);
//     return;
//   }
//   data = JSON.parse(data);
//   let neededData = data.filter(
//     (important) => important.suspectTags.length > 20
//   );
// console.log(neededData.length);
// console.log(neededData);
// });

module.exports = router;
