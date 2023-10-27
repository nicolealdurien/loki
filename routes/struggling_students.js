const express = require('express');
const router = express.Router();

function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1) + min); // The maximum is inclusive and the minimum is inclusive
}

let data1 = {
  outcome: 'Name the features of the distribution of a data set using statistical language',
  struggling_students: [
    {
      'Goes By': 'Walt',
      'Roster Name': 'Walter Berg-Fulton',
      pronunciation: null,
      pronouns: ['he/him/his'],
      email: 'walter@uni.edu',
      lti_user_guid: '123456789-10-11-12'
    },
    {
      'Goes By': 'Tuna',
      'Roster Name': 'Tuna Gillenwater',
      pronunciation: 'TOON-uh',
      pronouns: ['I prefer not to answer'],
      email: 'tuna@uni.edu',
      lti_user_guid: '314159265357'
    }
  ]
}

router.get('/', (req, res) => {
  let random = getRandomIntInclusive(1,3)

  

  let data2 = {
    outcome: 'Contribute to an inclusive learning community within this class',
    struggling_students: [
      {
        'Goes By': 'Winnie',
        'Roster Name': 'Winifred Sanderson',
        pronunciation: null,
        pronouns: ['she/her/hers'],
        email: 'winifred@salem.edu',
        lti_user_guid: '123456789-10-11-12'
      },
      {
        'Goes By': 'Mary',
        'Roster Name': 'Mary Sanderson',
        pronunciation: 'MARE-ee',
        pronouns: ['I prefer not to answer'],
        email: 'mary@hogwarts.edu',
        lti_user_guid: '314159265357'
      },
      {
        'Goes By': 'Sarah',
        'Roster Name': 'Sarah Sanderson',
        pronunciation: 'SARE-uh',
        pronouns: null,
        email: 'sarah@beauxbatons.edu',
        lti_user_guid: '1123581321'
      }
    ]
  }

  let data3 = {
    outcome: 'List steps of the statistical investigative process',
    struggling_students: [
      {
        'Goes By': 'Wednesday',
        'Roster Name': 'Wednesday Addams',
        pronunciation: 'WENS-day',
        pronouns: ['she/her/hers'],
        email: 'wednesday@nevermore.edu',
        lti_user_guid: '123456789-10-11-12'
      }
    ]
  }

  switch(random) {
    case 1:
      res.send(data1);
    case 2:
      res.send(data2)
    case 3:
    default:
      res.send(data3)
  }
})

module.exports = router;