const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  const data = {
    course_outcome_proficiencies: [
      {
        label: 'List steps of the statistical investigative process',
        guid: '998d28ce-7d9c-4454-a8dc-057ddcc4b70d',
        unassessed_student_total: 60,
        needs_work_student_total: null,
        proficient_student_total: 0
      },
      {
        label: 'Contribute to an inclusive learning community within this class',
        guid: 'b8f0a67d-4a41-4e28-9850-8fe05ccf87db',
        unassessed_student_total: 37,
        needs_work_student_total: 23,
        proficient_student_total: 10
      },
      {
        label: 'Help fellow students feel a sense of academic belonging',
        guid: '60241ab5-6759-4fd9-aa3c-975f3935f36c',
        unassessed_student_total: 22,
        needs_work_student_total: 11,
        proficient_student_total: 27
      },
      {
        label: 'Identify the subject, case, and observational unit of a statistical study',
        guid: 'c4302ed9-e3f6-4b42-919d-fb614c42ac95',
        unassessed_student_total: 0,
        needs_work_student_total: 10,
        proficient_student_total: 50
      },
      {
        label: 'Name and classify variables by type',
        guid: '2809a0c6-fe7a-4ed5-a4a0-34559bfaa8e7',
        unassessed_student_total: 11,
        needs_work_student_total: 9,
        proficient_student_total: 40
      },
      {
        label: 'Create questions that can be answered with statistics',
        guid: 'f9a7c53d-94b3-4a3d-8b58-95e707326a49',
        unassessed_student_total: 0,
        needs_work_student_total: 0,
        proficient_student_total: 60
      },
      {
        label: 'Use effective teamwork skills',
        guid: 'b8967682-51fd-48fc-b942-31e9e3cd5dcb',
        unassessed_student_total: 12,
        needs_work_student_total: 12,
        proficient_student_total: 36
      },
      {
        label: 'Work with fellow students through collaborative learning',
        guid: 'b668cade-4427-46a8-ab77-d19c0fb35962',
        unassessed_student_total: 50,
        needs_work_student_total: 10,
        proficient_student_total: 0
      },
      {
        label: 'Assess data-based models',
        guid: '8675309',
        unassessed_student_total: 60,
        needs_work_student_total: null,
        proficient_student_total: null
      },
      {
        label: 'Learn and apply the tools of formal inference',
        guid: '31415926535897932384626433',
        unassessed_student_total: 50,
        needs_work_student_total: 0,
        proficient_student_total: 10
      }
    ],
    prerequisite_outcome_proficiencies: [
      {
        label: "Describe what data is and what it isn't",
        guid: 'ec48f6a5-70fe-4530-841e-1485c4680db1',
        unassessed_student_total: 18,
        needs_work_student_total: 42,
        proficient_student_total: 0
      },
      {
        label: 'Define inclusive',
        guid: '2caafdaf-7828-40dd-ad40-96c4d610d098',
        unassessed_student_total: 0,
        needs_work_student_total: 5,
        proficient_student_total: 55
      },
      {
        label: 'Write a proportion from a table of data',
        guid: '5877f099-bf4a-464c-80c0-7584e5d850f8',
        unassessed_student_total: 26,
        needs_work_student_total: 11,
        proficient_student_total: 23
      },
      {
        label: 'Use proportions to answer questions',
        guid: 'f70459e6-4c1e-4e86-8c90-ecce453f9e4c',
        unassessed_student_total: 0,
        needs_work_student_total: 0,
        proficient_student_total: 60
      },
      {
        label: 'Simplify fractions',
        guid: '707a11e7-e127-43fa-8bb4-415cf4781e03',
        unassessed_student_total: 59,
        needs_work_student_total: 0,
        proficient_student_total: 1
      },
      {
        label: 'Convert between fractions, decimals, and percents',
        guid: '01d2803a-56bc-4a2c-8607-66aa30ea02e9',
        unassessed_student_total: 0,
        needs_work_student_total: 40,
        proficient_student_total: 20
      },
      {
        label: 'Define variability',
        guid: 'ab191467-6a07-43f2-81f7-447574b71cec',
        unassessed_student_total: 59,
        needs_work_student_total: 1,
        proficient_student_total: 0
      }
    ],
    quiz_summary: {
      percent_above_mastery: 42,
      percent_average_score: 70
    }
  }

  res.send(data);
})

module.exports = router;