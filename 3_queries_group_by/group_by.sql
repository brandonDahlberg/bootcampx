SELECT students.name 
as name, count(assignment_submissions.*) 
as total_submissions 
FROM assignment_submissions 
JOIN students 
ON student_id = students.id 
WHERE students.end_date IS NULL 
GROUP BY name 
HAVING count(assignment_submissions.*) < 100
ORDER BY total_submissions DESC;

SELECT day, count(*) as total_assignments 
FROM assignments 
GROUP BY day 
HAVING count(*) >= 10
ORDER BY day;