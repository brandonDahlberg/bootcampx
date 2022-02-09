const { Pool } = require('pg');

const pool = new Pool({
	user: 'vagrant',
	password: '123',
	host: 'localhost',
	database: 'bootcampx',
});

const cohort = process.argv[2];
const limit = process.argv[3];

pool
	.query(
		`
SELECT DISTINCT teachers.name as teacher, cohorts.name as cohort
FROM teachers
JOIN assistance_requests ON teacher_id = teachers.id
JOIN students ON student_id = students.id
JOIN cohorts ON cohort_id = cohorts.id
WHERE cohorts.name = '${process.argv[2] || 'JUL02'}'
ORDER BY teacher;
`
	)
	.then(res => {
		console.log(
			res.rows.forEach(user => {
				console.log(`${user.name} has an id of ${user.student_id} and was in the ${user.cohort} cohort. \n`);
			})
		);
	})
	.catch(err => console.error('query error', err.stack));
