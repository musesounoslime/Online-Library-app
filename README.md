# Online-Library-app
React + Spring Boot Online library project

1. Established a full stack online library application for user to borrow books.
2. Implemented RESTful APIs enabling full CRUD using Spring Boot, with data based on MySQL.
3. Created front-end user interface using TypeScript and React.js, integrating Bootstrap to enhance webpage design and user experience.
4. Implemented user authentication and authorization with Okta, only allowing registered users to check out books and leave reviews.
5. Constructed a robust payment gateway using Stripe to facilitate secure online transactions.
6. Conducted testing using JUnit, Mockito, and MockMvc to ensure the application’s reliability and robustness.

Steps:
1. At react-library folder, run "npm install"
2. At spring-boot-library folder, run "mvn install"
3. Run SQL scripts in sequence.
4. Run backend file: spring-boot-library/src/main/java/com/luv2code/springbootlibrary/SpringBootLibraryApplication.java
5. Run command "npm start" at react-library.
6. Normal user: testuser@email.com Password: test1234!
7. Admin user: admin@email.com Password: jz2166603

http://ec2-44-202-239-32.compute-1.amazonaws.com/home
It still has problems with deployed on HTTPS, now can only be accessed by http, I will fix it soonly.
