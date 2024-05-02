const fetchCourseData = (url = "") => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (url === "https://example.com/api/courses") {
        resolve({
          status: 200,
          message: "Success",

          user: {
            id: 352984290,
            name: "user1",
            username: "user1",
            email: "user1@example.com",
            profilePic:
              "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMgAAACUCAMAAADhypYgAAAAb1BMVEX///8WFhgAAAD8/PwYGBoTExUXFhoODhAICAvr6+v29vbu7u7y8vL///zR0dH5+fnj4+OVlZbc3Ny7u7vHx8cAAAVBQUGNjY5JSUkuLi+fn585OTmDg4NnZ2esrK00NDVycnJWVlZeXl4jIyV6enrlM56gAAANj0lEQVR4nO1diZaiOBSFLJWgNiA7qIji/3/j5CUBlyIIVtCac+p2T1WPYshN3paXF3ScP/zhD394DVj9xIPv4ZtLfjcw/FV/Bt/Vb/0PqNxQwF7kJ7FE4kceHrjk90J2MfCiZH8qv9AdvsrTPom8oL/sVwNvPH97LmXPOf26AeXyxfK89b3NryWitFjIUtVAf5lrBAOGTaUlbdgmfBgbvz4cBQlCXGomQl1CBJnjofY3n+7xIMJ6n4mxHiVxQ0bMW7avw0/3+hvC6twiLjSh6+kzfJEvjtpz9UuoYPWflxdE6MVX18lHPLzSXSb0hRS51zfzWSLYWdUZZzdzQAUIpQx9A5Nv0NtrGc/q1eddZCB8W7xD3L32jrqaQ3nO69j3Q08g9P24zpVVFmx60YOPcbSLRTPBR4k4ODqg9Fb2GeO8LZrKH+xY4FdN0XLO7uxzig7Rh82wFzPkggpchT475Ml67DPrJD9kV5UCDXIRi7139fkBWLgy7B/uXF+KykPlTxhb7FfC49zOJEMH8UH8Gf+4qgt0o7cIFbkc12e9ke97cV4gdKP1qBBK/3ZA/Orl7bUjwsEVlb9ynCmjqi5Z+VUBDrQfiFZY4jcHxtgJnPBMmZBvqiWD1mGg33vWl/6KIKyplk0qdIXRcygafhcTrLxXUkqxEn5BdAGh/LV4Fm9yEd5/yWZAvI6Jco7vIANKjh1fqyqhRDiCsz9JpL43JT7in4QbgmaUuUik3L5lVuAucWetKGFsV+NXJUJ+sN4xRrTV4Kh+W2wvbl5dIxLGmkgb41eakpMSNVcHyWj1JjWB2KrkHRF0rNZSe18bRfkx7KyrY28Aealir6Uh5kPw6E1mlhi7CD8Dz08kfL1UN/UwyW6ZLD8nMH7xUbtkQlHjjySwvKTaN0V2LMtjVjT7KvFG0l1+g7TCu+kxXjoaBkVIdqjncQkNNwTB354z4e1TLpEKL56dt5H5+vDSM0G7ZFnPKP15784p2q+HlUO8FO2PLOX36ymesuM+GpoU2ch63wc8qF3Yx4umpVYK/0UYyodiIxV97AnnA8tdypG7XzkGCVvlCBqm0oYsvdJqEEw/cQnj+aBKQheF5poX7dI+DBERZiTnTDQNN0DNojScChGtH/xiEvdNRRAx8qDizWo4nhEvXrjWE4KqJXn4neElaB8YfIeX34a034lAoJwPraKguWCPCFFCWPrL8QgPneCj82YwzBXG4DKWZlRg6OINfVb83ZxRp06HZTJF4jbBlqm0AUFZOKwfGDcj6nGdFtTgwfnETphpuaRsGyyh8eK2SabyiISXydAtoGfb3hmMQbig7aDGg6UolWQSLqzCIuGjJwZb9pKKCNVg5WvCXGV3xmiIP4zUQ5+HZmuYU8h/oWaJhAQWoTsl2jSKOHEwDxVmfJzDFTwbUoFATMG66YQLxUs4k7ALTdDJpIX4MEVBXN3Lg6mT4am7024Jfe9cCGsHhQLGLi4nTwgEubFJl+tWG74lnEnY6k7yiylrI5RoOg/RS6MKrC7dvVr7U3LRneQ7f3AcYUJaNlmywLy2hikRMf1OM0EX2zzWnZvj28G7CyXd7EcikwGI6GBjCLqcrSbC0Gj29QVsEZH5dl4a04F+wafsVvUz4vLCGIWspLYJaw/+xia8I9ejaHAhsL0w3WRpKig2tSWciZpdfrTpS7AwWWqwUWlcd69gXUSmm18CK7Ph6YU7lEhNmzBcFn3J6nQzIYZ2vWyWzZLDkhmGG99Myclmajsulaqnx8BAQyxu06dR7yNYGpmGGwc6xcHA3VjDXofvqDJHcfHsCRHtGTuJcaXao3xvj0cXM/AyMl9Uv0JkOEiQiHSYYI6I5qOTLFBO04zg7StEtsbmwHjIa2zJFiyocjU2zB2JRi0TgWjbVcMHWQ4LlksoRXhAepJHJMs2ESFbWqCRWPP+fIEFDSQQjApth0TWG2dklSN5W9YmjoUpwaDGVO0nxSPpv87KzCNSmXVEruTgtlRumVjgoYNBggpTxlrCstWCvHahbyyCSxvuvTO+6DJSX/XPSeaGWjDHifigEZtLp5t2DLDOylHXKAeSSETne3YajRHBlQrwIFdnYUJUVEuf2PN/jlfMj7UKb4yI9F9UR8k/R6C1mJlXD5KINDIziQgzOEbEL7Qjrn5eOvTvKqmH0RJEjGM6dz1C43H/sDlM0M7JRLxe10d5CAdWpNOXIwIkLUwbWB16bf/56uqfE7apGr589ELpwCZVZurpEGZ1zMFK5GqSUwvJFEGES0GVOY8xHhgigCmJXz0fFDz2k/01neBi3AIRrP0DK00b0R0TZ32Z40oouqyf+blEhd3C31gwW9pj093zjZfkOCfTeBwfGYC/0wu6kXXLXCIsGwl9NYJ8zozkz21qlDFrRLDO+bJigpyGp+nZ+ClxR6gcCTEHlzOI6PCcF1NM4OTcFjUv12/gFXq5O7ZumYieyOm5U5Ih/yS7RaaF5puTVSKya/z8PL8ExlT4sKdUCHjXKZUNqzNXtN9MRHZt+1y6mMzoTujbIkQmZPxkDV9QkXScR0qgtmzSjJysEnEVkSmBGwSBq3qsgkOouazqn5ROsKwjisgkq6XqF/yGwjR+0xV4DVFZ4zWtYzatljPHj3QI6wINzQpFqKhnRLJXPzK/398ww7MDVGEHjoR8ydNW1+mAk1VZHeHumgmw6dnnxFoa6uhnGB/UET5YrKqje4c4xM6cijKLsdbk6LcH7n8FmyQ/7CQFvjvkyeZ6lNJ4BvYeFqPfm/XI81GRnQu8yFsp8YG7B+u1563XwAH+X/xeefJ06BQmNtcjjleqFSIbXyFqIpv6BKeSKq9/6foP+W+vgvNJp3ozhUiu9rvT0sZSt1+zN8+vltYKVuOoiPszxjeqjb04QymRZ02mnEFsbK7Zp2ZR4GzLGakCOEKEZle+dzfm2PMrof/kS19wfnoayWYWZUpeC2N1TqnhN75DuIxjU8V+uIIZWYV+XDVHdHcBb9RpJKN3tJnXgkwjl+ftqDHTKMMmXBWI3SdROGJldm4uAs05Kxl6WHUxVFTYGTlkEZfyxpTbyDSKgOOoc7+mOAGG1DtQ/hiTUDgu2Z2l5Iw+5oqIy+nBM8creKtzv0cruV+ZjadjkorlJjuFczl3/SSPJ1vJ/fvU/aJyq93QS6Wd1E42Hjsq8SbaS7PB/RFZsVy+sDmigMrEVJbuZ6ksoZQl39Z2rOhgKaMyrcnxZR5QPZ4MRF9dcSO1uGMFdZ96D3EzVK2Lk/nFG3dMsmTAOWJno/cQZU2rBSbXXd10YFcXQ2Q3r07rEQRl/lBHo0KtNO3s6vaFyy5EKd/22XHgROcfzYfs6jlyHotcsBN3d7VXyNxXPlweZUuo6eHHPGDQH/Ud9xGFzaoaTw86a7+f1q7m74F+B/2+BMSRLjVFZ4ulZzoKHagOiiaksZ6DuOhB/a7VQROi7unQCxyXt6sHCThZECwAOj00vNLluZMXdJOAtWyR+9p87ECKxcqMuKLla7tYVoMqhmeLlYC4L2tI2+DqFOGMBJtTWGoGddn1JAfcIGh1lk96YXvYZPosBNRK9g/JwvncjdwRKjTvRghu0BWw88zy42wqXffL2vVVtvxixg7VM1yrgOHEQtvV/dqujl/1ldj5VbSqOSXkz0BZdRUtXeom7LL1xyd0dQ1cn513nD50sQTUHarC181IZNP2Knhlqs/ON53UxrPqA56Cks6Fbxqt6bxd4ExPZ7iYqxNcm73VCYHaTz1EtdudH7GRKn2E15+z0VoZ/Sx6HyCi08t+V2dkIw30DUJwGdPHTw/ySHCcWpUsIVupLPr3Dt3ZIZZY9SEdZGGDPvWmVsB2eaiyJwfLU28u0aUR1tHVGMpziFCX4hVPdtjmI4XNpLjlRNXcjNdQvkwE/AZl+mToLnJCG/H7PSgKnUitNyk8xWLyPspceE1/VrdYJ1YC+FuIYD5Zd4pO+SLHKTWio2ZCUGPb+ALQvj9MyY/TdsheRFfYQAm3Fy9eQSkn3Ugt4UJuoE2VZaG6hUpHLhCb3EKonnaLdqOTK3TWFZ2W0nPFAwJs2/58CChbL/v0M/n0pfmFyrN5gAdZckbUVsgPM6QTeAzmUO3ykKueuLTu02+RlsPnLO2TCeIjX07Z+TF+23OpnJpaXKzfg1MbmwjTiMCOCFmICSeG59gswgMectTajxkhamwjfYM3EFFk/BNiX8+7NgdfDJ387qmD74FcyDVSvCzNizwrT5oPPHFSrBir17dAh4DKau28bzJuqATxyZ6iUHSKV594aLm8Zdg8f+LRNDDUhB97uqxAkLCfTgo875cilnz4CcyQW0HfijPmgSJ4iM9nAXux/lm4Y/e1BSNUInCiHoX6USJYxV5nMv85CQosJWcVW32ciDyUVB9axN2ZDvLL5ag91OvJtZrvgFc3LUopmczli9AUtc2ccuY3wUu2xbzvVii2ye+jIeuhoviy0992YWRD9bdd7C5xZKN6yTa00Vl58QWK5kaCfPn2JfbUntqvI3IDHNbNTpb/pZzSL/mtMOIXhQezCuyaOvzN3e/QzUxUXU7FrmwBBH6Uu+J0qaL/wUxo3H5r0jqMugcXR+EaD1zye4E7rzDY1//T91hpmEpg39uLP/zhDx3+A1W/spWXhTKHAAAAAElFTkSuQmCC",
            enrolledCourses: [
             
            ],
            completedCourses: [],
            likedCourses: [],
          },

          courseData: [
            {
              id: 1,
              name: "Introduction to React Native",
              instructor: "John Doe",
              description:
                "Learn the basics of React Native development and build your first mobile app.",
              enrollmentStatus: "In Progress",
              thumbnail:
                "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&q=60&w=400&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bW9iaWxlJTIwYXBwc3xlbnwwfHwwfHx8MA%3D%3D",
              duration: "8 weeks",
              schedule: "Tuesdays and Thursdays, 6:00 PM - 8:00 PM",
              location: "Online",
              prerequisites: [
                "Basic JavaScript knowledge",
                "Familiarity with React",
              ],
              syllabus: [
                {
                  week: 1,
                  topic: "Introduction to React Native",
                  content:
                    "Overview of React Native, setting up your development environment.",
                },
                {
                  week: 2,
                  topic: "Building Your First App",
                  content:
                    "Creating a simple mobile app using React Native components.",
                },
                {
                  week: 3,
                  topic: "Navigation in React Native",
                  content:
                    "Exploring navigation techniques and libraries in React Native.",
                },
                {
                  week: 4,
                  topic: "State Management",
                  content:
                    "Managing state in React Native applications using various tools.",
                },
                {
                  week: 5,
                  topic: "Styling and Theming",
                  content:
                    "Customizing the look and feel of your React Native app with styles and themes.",
                },
                {
                  week: 6,
                  topic: "Working with APIs",
                  content:
                    "Integrating external APIs and data into your React Native app.",
                },
                {
                  week: 7,
                  topic: "Advanced Components",
                  content:
                    "Creating complex and custom components for your mobile app.",
                },
                {
                  week: 8,
                  topic: "Testing and Debugging",
                  content:
                    "Testing and debugging techniques for React Native development.",
                },
              ],
              students: [
                {
                  id: 101,
                  name: "Alice Johnson",
                  email: "alice@example.com",
                },
                {
                  id: 102,
                  name: "Bob Smith",
                  email: "bob@example.com",
                },
                {
                  id: 103,
                  name: "Eva Williams",
                  email: "eva@example.com",
                },
                {
                  id: 104,
                  name: "Daniel Davis",
                  email: "daniel@example.com",
                },
                {
                  id: 105,
                  name: "Sophia Lee",
                  email: "sophia@example.com",
                },
                {
                  id: 106,
                  name: "Oliver Brown",
                  email: "oliver@example.com",
                },
                {
                  id: 107,
                  name: "Ava Wilson",
                  email: "ava@example.com",
                },
                {
                  id: 108,
                  name: "Liam Martin",
                  email: "liam@example.com",
                },
              ],
            },

            {
              id: 2,
              name: "Web Development with React",
              instructor: "Jane Smith",
              description:
                "Master web development using React and create dynamic websites.",
              enrollmentStatus: "Open",
              thumbnail:
                "https://images.unsplash.com/photo-1633356122102-3fe601e05bd2?auto=format&fit=crop&q=60&w=400&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cmVhY3R8ZW58MHx8MHx8fDA%3D",
              duration: "10 weeks",
              schedule: "Mondays and Wednesdays, 7:00 PM - 9:00 PM",
              location: "Online",
              prerequisites: ["HTML, CSS, and JavaScript fundamentals"],
              syllabus: [
                {
                  week: 1,
                  topic: "Getting Started with React",
                  content: "Introduction to React, setting up a React project.",
                },
                {
                  week: 2,
                  topic: "Component-Based Development",
                  content: "Creating and using React components.",
                },
                {
                  week: 3,
                  topic: "State and Props",
                  content:
                    "Understanding state and props in React applications.",
                },
                {
                  week: 4,
                  topic: "Event Handling",
                  content:
                    "Handling user interactions and events in React components.",
                },
                {
                  week: 5,
                  topic: "Forms and Validation",
                  content:
                    "Working with forms and implementing validation in React.",
                },
                {
                  week: 6,
                  topic: "Routing and Navigation",
                  content:
                    "Implementing client-side routing and navigation in React applications.",
                },
                {
                  week: 7,
                  topic: "State Management with Redux",
                  content: "Managing application state using Redux in React.",
                },
                {
                  week: 8,
                  topic: "Advanced Topics in React",
                  content:
                    "Exploring advanced concepts and techniques in React development.",
                },
                {
                  week: 9,
                  topic: "Testing React Applications",
                  content:
                    "Testing React components and applications for quality assurance.",
                },
                {
                  week: 10,
                  topic: "Building a Full-Stack App",
                  content:
                    "Building a full-stack web application with React on the front end.",
                },
              ],
              students: [
                {
                  id: 201,
                  name: "Eva Brown",
                  email: "eva@example.com",
                },
                {
                  id: 202,
                  name: "Charlie Wilson",
                  email: "charlie@example.com",
                },
                {
                  id: 203,
                  name: "Mia Smith",
                  email: "mia@example.com",
                },
                {
                  id: 204,
                  name: "Noah Johnson",
                  email: "noah@example.com",
                },
                {
                  id: 205,
                  name: "Isabella Davis",
                  email: "isabella@example.com",
                },
                {
                  id: 206,
                  name: "Lucas Martin",
                  email: "lucas@example.com",
                },
                {
                  id: 207,
                  name: "Sophie Wilson",
                  email: "sophie@example.com",
                },
                {
                  id: 208,
                  name: "Liam Brown",
                  email: "liam@example.com",
                },
                {
                  id: 209,
                  name: "Olivia Lee",
                  email: "olivia@example.com",
                },
                {
                  id: 210,
                  name: "Jackson Smith",
                  email: "jackson@example.com",
                },
              ],
            },
            {
              id: 3,
              name: "Advanced Python Programming",
              instructor: "Sarah Miller",
              description:
                "Dive deep into Python programming with advanced concepts and real-world projects.",
              enrollmentStatus: "Closed",
              thumbnail:
                "https://images.unsplash.com/photo-1526379095098-d400fd0bf935?auto=format&fit=crop&q=60&w=400&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cHl0aG9ufGVufDB8fDB8fHww",
              duration: "8 weeks",
              schedule: "Mondays and Wednesdays, 6:30 PM - 8:30 PM",
              location: "Virtual Classroom",
              prerequisites: ["Intermediate Python knowledge"],
              syllabus: [
                {
                  week: 1,
                  topic: "Python Data Structures",
                  content:
                    "Exploring data structures like lists, dictionaries, and sets.",
                },
                {
                  week: 2,
                  topic: "Object-Oriented Programming",
                  content:
                    "Understanding classes, objects, and inheritance in Python.",
                },
                {
                  week: 3,
                  topic: "File Handling and Input/Output",
                  content:
                    "Working with files and input/output operations in Python.",
                },
                {
                  week: 4,
                  topic: "Error Handling and Exceptions",
                  content:
                    "Handling errors and exceptions in Python applications.",
                },
                {
                  week: 5,
                  topic: "Functional Programming in Python",
                  content:
                    "Exploring functional programming concepts and techniques in Python.",
                },
                {
                  week: 6,
                  topic: "Web Development with Python",
                  content:
                    "Introduction to web development using Python and web frameworks.",
                },
                {
                  week: 7,
                  topic: "Database Integration",
                  content:
                    "Connecting and working with databases in Python applications.",
                },
                {
                  week: 8,
                  topic: "Data Analysis with Python",
                  content:
                    "Analyzing and visualizing data using Python libraries.",
                },
              ],
              students: [
                {
                  id: 301,
                  name: "David Anderson",
                  email: "david@example.com",
                },
                {
                  id: 302,
                  name: "Sophia Adams",
                  email: "sophia@example.com",
                },
                {
                  id: 303,
                  name: "Ethan Clark",
                  email: "ethan@example.com",
                },
                {
                  id: 304,
                  name: "Olivia Taylor",
                  email: "olivia@example.com",
                },
                {
                  id: 305,
                  name: "Liam Wilson",
                  email: "liam@example.com",
                },
                {
                  id: 306,
                  name: "Ava Brown",
                  email: "ava@example.com",
                },
                {
                  id: 307,
                  name: "Noah Martin",
                  email: "noah@example.com",
                },
                {
                  id: 308,
                  name: "Sophie Davis",
                  email: "sophie@example.com",
                },
              ],
            },
            {
              id: 4,
              name: "Data Science Fundamentals",
              instructor: "Maria Rodriguez",
              description:
                "Learn the fundamentals of data science, including data analysis and machine learning.",
              enrollmentStatus: "In Progress",
              thumbnail:
                "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=60&w=400&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8ZGF0YSUyMHNjaWVuY2V8ZW58MHx8MHx8fDA%3D",
              duration: "10 weeks",
              schedule: "Tuesdays and Thursdays, 7:00 PM - 9:00 PM",
              location: "Online",
              prerequisites: ["Basic knowledge of statistics and programming"],
              syllabus: [
                {
                  week: 1,
                  topic: "Introduction to Data Science",
                  content:
                    "Overview of data science, data collection, and data cleaning.",
                },
                {
                  week: 2,
                  topic: "Exploratory Data Analysis",
                  content: "Techniques for exploring and visualizing data.",
                },
                {
                  week: 3,
                  topic: "Statistical Analysis in Data Science",
                  content:
                    "Understanding statistical methods and their role in data analysis.",
                },
                {
                  week: 4,
                  topic: "Data Preprocessing and Cleaning",
                  content:
                    "Cleaning and preparing data for analysis and modeling.",
                },
                {
                  week: 5,
                  topic: "Machine Learning Fundamentals",
                  content:
                    "Introduction to machine learning algorithms and techniques.",
                },
                {
                  week: 6,
                  topic: "Supervised Learning",
                  content:
                    "Exploring supervised learning methods for predictive modeling.",
                },
                {
                  week: 7,
                  topic: "Unsupervised Learning",
                  content:
                    "Understanding unsupervised learning for clustering and dimensionality reduction.",
                },
                {
                  week: 8,
                  topic: "Deep Learning and Neural Networks",
                  content:
                    "Introduction to deep learning and neural network architectures.",
                },
                {
                  week: 9,
                  topic: "Data Science Projects",
                  content:
                    "Working on real-world data science projects and case studies.",
                },
                {
                  week: 10,
                  topic: "Data Science Ethics and Best Practices",
                  content:
                    "Exploring ethical considerations and best practices in data science.",
                },
              ],
              students: [
                {
                  id: 401,
                  name: "Emily Clark",
                  email: "emily@example.com",
                },
                {
                  id: 402,
                  name: "Daniel Brown",
                  email: "daniel@example.com",
                },
                {
                  id: 403,
                  name: "Ava Miller",
                  email: "ava@example.com",
                },
                {
                  id: 404,
                  name: "Noah Wilson",
                  email: "noah@example.com",
                },
                {
                  id: 405,
                  name: "Sophie Taylor",
                  email: "sophie@example.com",
                },
              ],
            },
            {
              id: 5,
              name: "Digital Marketing Strategies",
              instructor: "Michael Turner",
              description:
                "Master the art of digital marketing and create effective online marketing campaigns.",
              enrollmentStatus: "Open",
              thumbnail:
                "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=60&w=400&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8dGVjaG5pY2FsfGVufDB8fDB8fHww",
              duration: "7 weeks",
              schedule: "Mondays and Wednesdays, 6:30 PM - 8:30 PM",
              location: "Virtual Classroom",
              prerequisites: ["Basic understanding of marketing principles"],
              syllabus: [
                {
                  week: 1,
                  topic: "Introduction to Digital Marketing",
                  content:
                    "Overview of digital marketing channels and strategies.",
                },
                {
                  week: 2,
                  topic: "Content Marketing",
                  content:
                    "Creating and promoting engaging content for online audiences.",
                },
                {
                  week: 3,
                  topic: "Search Engine Optimization (SEO)",
                  content:
                    "Optimizing websites for search engines to increase visibility.",
                },
                {
                  week: 4,
                  topic: "Social Media Marketing",
                  content:
                    "Using social media platforms for brand promotion and engagement.",
                },
                {
                  week: 5,
                  topic: "Email Marketing",
                  content:
                    "Designing effective email marketing campaigns and strategies.",
                },
                {
                  week: 6,
                  topic: "Pay-Per-Click (PPC) Advertising",
                  content:
                    "Creating and managing PPC advertising campaigns for targeted traffic.",
                },
                {
                  week: 7,
                  topic: "Analytics and Data Analysis",
                  content:
                    "Measuring and analyzing digital marketing performance using data.",
                },
              ],
              students: [
                {
                  id: 501,
                  name: "Olivia Wilson",
                  email: "olivia@example.com",
                },
                {
                  id: 502,
                  name: "Jacob Harris",
                  email: "jacob@example.com",
                },
                {
                  id: 503,
                  name: "Sophia Turner",
                  email: "sophia@example.com",
                },
                {
                  id: 504,
                  name: "Mason Martin",
                  email: "mason@example.com",
                },
                {
                  id: 505,
                  name: "Liam Clark",
                  email: "liam@example.com",
                },

                {
                  id: 506,
                  name: "Noah Davis",
                  email: "noah@example.com",
                },
                {
                  id: 507,
                  name: "Ava Smith",
                  email: "ava@example.com",
                },
              ],
            },
            {
              id: 6,
              name: "Machine Learning with Python",
              instructor: "Laura Evans",
              description:
                "Explore the world of machine learning using Python and work on real-world projects.",
              enrollmentStatus: "Closed",
              thumbnail:
                "https://images.unsplash.com/photo-1501526029524-a8ea952b15be?auto=format&fit=crop&q=60&w=400&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fG1hY2hpbmUlMjBsZWFybmluZ3xlbnwwfHwwfHx8MA%3D%3D",
              duration: "6 weeks",
              schedule: "Tuesdays and Thursdays, 7:00 PM - 9:00 PM",
              location: "Online",
              prerequisites: [
                "Intermediate Python knowledge",
                "Basic understanding of machine learning",
              ],
              syllabus: [
                {
                  week: 1,
                  topic: "Introduction to Machine Learning",
                  content:
                    "Overview of machine learning, types of algorithms, and data preprocessing.",
                },
                {
                  week: 2,
                  topic: "Supervised Learning",
                  content:
                    "Exploring supervised learning algorithms like regression and classification.",
                },
                {
                  week: 3,
                  topic: "Unsupervised Learning",
                  content:
                    "Understanding unsupervised learning techniques for clustering and dimensionality reduction.",
                },
                {
                  week: 4,
                  topic: "Deep Learning and Neural Networks",
                  content:
                    "Introduction to deep learning, neural network architectures, and applications.",
                },
                {
                  week: 5,
                  topic: "Natural Language Processing (NLP)",
                  content:
                    "Working with text data, NLP techniques, and sentiment analysis.",
                },
                {
                  week: 6,
                  topic: "Computer Vision",
                  content:
                    "Exploring computer vision tasks, image classification, and object detection.",
                },
              ],
              students: [
                {
                  id: 601,
                  name: "Sophia Rodriguez",
                  email: "sophia@example.com",
                },
                {
                  id: 602,
                  name: "Ethan Anderson",
                  email: "ethan@example.com",
                },
                {
                  id: 603,
                  name: "Ava Miller",
                  email: "ava@example.com",
                },
                {
                  id: 604,
                  name: "Liam Wilson",
                  email: "liam@example.com",
                },
                {
                  id: 605,
                  name: "Olivia Harris",
                  email: "olivia@example.com",
                },
                {
                  id: 606,
                  name: "Mason Turner",
                  email: "mason@example.com",
                },
                {
                  id: 607,
                  name: "Noah Brown",
                  email: "noah@example.com",
                },
              ],
            },
            {
              id: 7,
              name: "Graphic Design Fundamentals",
              instructor: "Alex Turner",
              description:
                "Learn the basics of graphic design, including design principles and digital tools.",
              enrollmentStatus: "Open",
              thumbnail:
                "https://images.unsplash.com/photo-1626785774573-4b799315345d?auto=format&fit=crop&q=60&w=400&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Z3JhcGhpYyUyMGRlc2lnbnxlbnwwfHwwfHx8MA%3D%3D",
              duration: "8 weeks",
              schedule: "Mondays and Wednesdays, 6:30 PM - 8:30 PM",
              location: "Virtual Classroom",
              prerequisites: ["No prior design experience required"],
              syllabus: [
                {
                  week: 1,
                  topic: "Design Principles",
                  content:
                    "Fundamental design principles, including layout, color, and typography.",
                },
                {
                  week: 2,
                  topic: "Introduction to Adobe Photoshop",
                  content:
                    "Basic tools and techniques for digital image editing.",
                },
                {
                  week: 3,
                  topic: "Visual Composition",
                  content:
                    "Exploring principles of visual composition and design layout.",
                },
                {
                  week: 4,
                  topic: "Color Theory and Application",
                  content:
                    "Understanding color theory and its practical application in design.",
                },
                {
                  week: 5,
                  topic: "Typography and Text Design",
                  content:
                    "Working with fonts, text layout, and typographic elements in design.",
                },
                {
                  week: 6,
                  topic: "Adobe Photoshop Advanced Techniques",
                  content:
                    "Advanced tools and techniques for Photoshop image editing and manipulation.",
                },
                {
                  week: 7,
                  topic: "Web Design and User Interface (UI) Design",
                  content:
                    "Creating web and UI designs, user experience considerations.",
                },
                {
                  week: 8,
                  topic: "Design Projects and Portfolio Development",
                  content:
                    "Hands-on design projects and building a design portfolio.",
                },
              ],
              students: [
                {
                  id: 701,
                  name: "Ava Harris",
                  email: "ava@example.com",
                },
                {
                  id: 702,
                  name: "Noah Smith",
                  email: "noah@example.com",
                },
                {
                  id: 703,
                  name: "Sophia Turner",
                  email: "sophia@example.com",
                },
                {
                  id: 704,
                  name: "Liam Anderson",
                  email: "liam@example.com",
                },
                {
                  id: 705,
                  name: "Ella Martin",
                  email: "ella@example.com",
                },
                {
                  id: 706,
                  name: "Mason Brown",
                  email: "mason@example.com",
                },
              ],
            },
            {
              id: 8,
              name: "Photography Fundamentals",
              instructor: "Emma Baker",
              description:
                "Master the art of photography, from camera basics to composition and editing.",
              enrollmentStatus: "Closed",
              thumbnail:
                "https://images.unsplash.com/photo-1542038784456-1ea8e935640e?auto=format&fit=crop&q=60&w=400&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8cGhvdG9ncmFwaHl8ZW58MHx8MHx8fDA%3D",
              duration: "10 weeks",
              schedule: "Tuesdays and Thursdays, 6:00 PM - 8:00 PM",
              location: "On-location and virtual sessions",
              prerequisites: ["No prior photography experience required"],
              syllabus: [
                {
                  week: 1,
                  topic: "Camera Basics",
                  content: "Understanding your camera settings and functions.",
                },
                {
                  week: 2,
                  topic: "Composition and Framing",
                  content:
                    "Exploring the art of framing and composition in photography.",
                },
                {
                  week: 3,
                  topic: "Exposure and Aperture",
                  content:
                    "Mastering exposure and aperture settings for better photos.",
                },
                {
                  week: 4,
                  topic: "Shutter Speed and Motion",
                  content:
                    "Controlling shutter speed to capture motion and creativity.",
                },
                {
                  week: 5,
                  topic: "Lighting Techniques",
                  content:
                    "Utilizing various lighting techniques for dramatic effects.",
                },
                {
                  week: 6,
                  topic: "Portrait Photography",
                  content:
                    "Capturing stunning portraits and working with models.",
                },
                {
                  week: 7,
                  topic: "Landscape and Nature Photography",
                  content:
                    "Exploring nature and landscape photography, and dealing with outdoor challenges.",
                },
                {
                  week: 8,
                  topic: "Photo Editing and Post-Processing",
                  content:
                    "Editing and enhancing photos using software and tools.",
                },
                {
                  week: 9,
                  topic: "Photography Styles and Genres",
                  content: "Diving into various photography styles and genres.",
                },
                {
                  week: 10,
                  topic: "Building a Photography Portfolio",
                  content:
                    "Creating a portfolio and showcasing your best work.",
                },
              ],
              students: [
                {
                  id: 801,
                  name: "Liam Turner",
                  email: "liam@example.com",
                },
                {
                  id: 802,
                  name: "Olivia Green",
                  email: "olivia@example.com",
                },
                {
                  id: 803,
                  name: "Noah Martin",
                  email: "noah@example.com",
                },
                {
                  id: 804,
                  name: "Sophia Wilson",
                  email: "sophia@example.com",
                },
              ],
            },
            {
              id: 9,
              name: "Healthy Cooking Workshop",
              instructor: "Sophia Miller",
              description:
                "Learn to prepare delicious and nutritious meals for a healthy lifestyle.",
              enrollmentStatus: "Open",
              thumbnail:
                "https://images.unsplash.com/photo-1547592180-85f173990554?auto=format&fit=crop&q=60&w=400&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8aGVhbHRoeSUyMGZvb2R8ZW58MHx8MHx8fDA%3D",
              duration: "6 weeks",
              schedule: "Mondays and Wednesdays, 5:30 PM - 7:30 PM",
              location: "Cooking School",
              prerequisites: ["No prior cooking experience required"],
              syllabus: [
                {
                  week: 1,
                  topic: "Introduction to Healthy Eating",
                  content: "Understanding the principles of healthy nutrition.",
                },
                {
                  week: 2,
                  topic: "Meal Planning and Prep",
                  content: "Planning and preparing balanced and tasty meals.",
                },
                {
                  week: 3,
                  topic: "Nutrient Analysis and Label Reading",
                  content:
                    "Analyzing nutrients in food and reading nutrition labels.",
                },
                {
                  week: 4,
                  topic: "Weight Management and Portion Control",
                  content:
                    "Managing weight and controlling portion sizes for healthy eating.",
                },
                {
                  week: 5,
                  topic: "Healthy Cooking Techniques",
                  content:
                    "Exploring healthy cooking methods and recipe modifications.",
                },
                {
                  week: 6,
                  topic: "Special Diets and Dietary Restrictions",
                  content:
                    "Adapting to special diets and addressing dietary restrictions.",
                },
              ],
              students: [
                {
                  id: 901,
                  name: "Ella Johnson",
                  email: "ella@example.com",
                },
                {
                  id: 902,
                  name: "William Davis",
                  email: "william@example.com",
                },
                {
                  id: 903,
                  name: "Sophia Martin",
                  email: "sophia@example.com",
                },
                {
                  id: 904,
                  name: "Oliver Clark",
                  email: "oliver@example.com",
                },
                {
                  id: 905,
                  name: "Ethan Turner",
                  email: "ethan@example.com",
                },
                {
                  id: 906,
                  name: "Eva Brown",
                  email: "eva@example.com",
                },
              ],
            },
            {
              id: 10,
              name: "Spanish Language Immersion",
              instructor: "Carlos Sanchez",
              description:
                "Immerse yourself in the Spanish language and culture through interactive lessons and activities.",
              enrollmentStatus: "Open",
              thumbnail:
                "https://images.unsplash.com/photo-1489945052260-4f21c52268b9?auto=format&fit=crop&q=60&w=400&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8c3BhbmlzaHxlbnwwfHwwfHx8MA%3D%3D",
              duration: "8 weeks",
              schedule: "Mondays and Wednesdays, 6:30 PM - 8:30 PM",
              location: "Virtual Classroom",
              prerequisites: ["No prior Spanish language experience required"],
              syllabus: [
                {
                  week: 1,
                  topic: "Basic Spanish Conversations",
                  content:
                    "Introduction to common Spanish phrases and conversations.",
                },
                {
                  week: 2,
                  topic: "Exploring Spanish Culture",
                  content: "Learn about Spanish traditions, food, and customs.",
                },
                {
                  week: 3,
                  topic: "Spanish Vocabulary and Grammar",
                  content:
                    "Building your Spanish vocabulary and understanding grammar rules.",
                },
                {
                  week: 4,
                  topic: "Travel and Survival Spanish",
                  content:
                    "Master essential phrases for travel and communication in Spanish-speaking countries.",
                },
                {
                  week: 5,
                  topic: "Spanish for Business and Work",
                  content:
                    "Learn workplace and business-related Spanish language skills.",
                },
                {
                  week: 6,
                  topic: "Spanish Art and Literature",
                  content: "Explore Spanish art, literature, and famous works.",
                },
                {
                  week: 7,
                  topic: "Spanish Music and Dance",
                  content:
                    "Discover Spanish music genres and traditional dances.",
                },
                {
                  week: 8,
                  topic: "Advanced Spanish Conversations",
                  content:
                    "Engage in more complex and natural Spanish conversations.",
                },
              ],
              students: [
                {
                  id: 1001,
                  name: "Sophie Taylor",
                  email: "sophie@example.com",
                },
                {
                  id: 1002,
                  name: "Mason Clark",
                  email: "mason@example.com",
                },
                {
                  id: 1002,
                  name: "Mason Clark",
                  email: "mason@example.com",
                },
                {
                  id: 1003,
                  name: "Ella Wilson",
                  email: "ella@example.com",
                },
                {
                  id: 1004,
                  name: "Liam Anderson",
                  email: "liam@example.com",
                },
                {
                  id: 1005,
                  name: "Isabella Martin",
                  email: "isabella@example.com",
                },
                {
                  id: 1006,
                  name: "Noah Smith",
                  email: "noah@example.com",
                },
              ],
            },
            {
              id: 11,
              name: "Effective Communication Skills",
              instructor: "Emily Johnson",
              description:
                "Develop essential communication skills for personal and professional success.",
              enrollmentStatus: "Closed",
              thumbnail:
                "https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&q=60&w=400&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8c29mdCUyMHNraWxsc3xlbnwwfHwwfHx8MA%3D%3D",
              duration: "6 weeks",
              schedule: "Tuesdays and Thursdays, 6:30 PM - 8:30 PM",
              location: "Online",
              prerequisites: ["No specific prerequisites"],
              syllabus: [
                {
                  week: 1,
                  topic: "Introduction to Effective Communication",
                  content:
                    "Understanding the importance of effective communication in various contexts.",
                },
                {
                  week: 2,
                  topic: "Active Listening and Empathy",
                  content:
                    "Improving listening skills and developing empathy in communication.",
                },
                {
                  week: 3,
                  topic: "Effective Verbal Communication",
                  content:
                    "Mastering verbal communication techniques and clarity in speech.",
                },
                {
                  week: 4,
                  topic: "Nonverbal Communication and Body Language",
                  content:
                    "Understanding the role of nonverbal cues and body language in communication.",
                },
                {
                  week: 5,
                  topic: "Conflict Resolution and Difficult Conversations",
                  content:
                    "Handling conflicts and challenging conversations with effective communication.",
                },
                {
                  week: 6,
                  topic: "Communication in Professional Settings",
                  content:
                    "Applying effective communication in the workplace and professional environments.",
                },
              ],
              students: [
                {
                  id: 1101,
                  name: "James Smith",
                  email: "james@example.com",
                },
                {
                  id: 1102,
                  name: "Sophia Davis",
                  email: "sophia@example.com",
                },
                {
                  id: 1103,
                  name: "Ella Wilson",
                  email: "ella@example.com",
                },
                {
                  id: 1104,
                  name: "Liam Turner",
                  email: "liam@example.com",
                },
                {
                  id: 1105,
                  name: "Ava Clark",
                  email: "ava@example.com",
                },
                {
                  id: 1106,
                  name: "Noah Anderson",
                  email: "noah@example.com",
                },
                {
                  id: 1107,
                  name: "Isabella Harris",
                  email: "isabella@example.com",
                },
              ],
            },
            {
              id: 12,
              name: "Guitar Playing for Beginners",
              instructor: "Alex Turner",
              description:
                "Learn to play the guitar from scratch, covering basic chords, strumming, and popular songs.",
              enrollmentStatus: "In Progress",
              thumbnail:
                "https://images.unsplash.com/photo-1605020420620-20c943cc4669?auto=format&fit=crop&q=60&w=400&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGd1aXRhcnxlbnwwfHwwfHx8MA%3D%3D",
              duration: "8 weeks",
              schedule: "Mondays and Wednesdays, 7:00 PM - 8:30 PM",
              location: "Local Music School",
              prerequisites: ["No prior guitar playing experience required"],
              syllabus: [
                {
                  week: 1,
                  topic: "Introduction to the Guitar",
                  content:
                    "Understanding the guitar, tuning, and basic playing techniques.",
                },
                {
                  week: 2,
                  topic: "Basic Chords and Strumming",
                  content:
                    "Learning fundamental chords and strumming patterns.",
                },
                {
                  week: 3,
                  topic: "Fingerpicking Techniques",
                  content:
                    "Exploring fingerpicking techniques for melodic playing.",
                },
                {
                  week: 4,
                  topic: "Barre Chords and Power Chords",
                  content:
                    "Mastering barre and power chords for rock and blues styles.",
                },
                {
                  week: 5,
                  topic: "Guitar Scales and Soloing",
                  content:
                    "Understanding scales and soloing techniques for lead guitar playing.",
                },
                {
                  week: 6,
                  topic: "Acoustic and Electric Guitar Styles",
                  content:
                    "Exploring different playing styles on acoustic and electric guitars.",
                },
                {
                  week: 7,
                  topic: "Song Repertoire and Music Theory",
                  content:
                    "Building a repertoire of songs and delving into music theory.",
                },
                {
                  week: 8,
                  topic: "Recording and Performance Tips",
                  content:
                    "Tips for recording your music and performing live on the guitar.",
                },
              ],
              students: [
                {
                  id: 1201,
                  name: "Sophia Martin",
                  email: "sophia@example.com",
                },
                {
                  id: 1202,
                  name: "Ethan Wilson",
                  email: "ethan@example.com",
                },
                {
                  id: 1204,
                  name: "Mason Davis",
                  email: "mason@example.com",
                },
                {
                  id: 1205,
                  name: "Liam Anderson",
                  email: "liam@example.com",
                },
                {
                  id: 1206,
                  name: "Ava Clark",
                  email: "ava@example.com",
                },
                {
                  id: 1207,
                  name: "Noah Smith",
                  email: "noah@example.com",
                },
                {
                  id: 1208,
                  name: "Isabella Harris",
                  email: "isabella@example.com",
                },
              ],
            },
          ],
        });
      } else {
        reject({
          status: 404,
          message: "Course list not found.",
        });
      }
    }, 2000);
  });
};

export default fetchCourseData;
