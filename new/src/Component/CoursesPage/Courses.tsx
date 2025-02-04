import React from "react";

interface Course {
  category: string;
  courses: {
    title: string;
    duration: string;
    topics: string[];
  }[];
}

const courses: Course[] = [
  {
    category: "Programming Courses",
    courses: [
      {
        title: "C Programming",
        duration: "40 Hrs",
        topics: ["Introduction", "Data Types", "Operators", "Looping Statements", "Functions", "Logical Concepts", "Array", "Pointer", "Union"],
      },
      {
        title: "C++ Programming",
        duration: "40 Hrs",
        topics: ["Introduction", "Functions", "Objects & Classes", "Array & String Arrays", "Inheritance", "Pointers", "Virtual Function", "Streams and Files", "Templates and Exceptions"],
      },
          {
        title: "Python Programming",
        duration: "60 Hrs",
        topics: ["Introduction", "Conditional Statements", "String Manipulation", "Tuples, Sets, Lists", "Dictionaries", "Date and Time", "Functions & File Handling", "Exception Handling", "OOP Concepts"],
      },
      {
        title: "Java Programming",
        duration: "40 Hrs",
        topics: ["Introduction", "Operators & Expressions", "Control Flow Statements", "Methods", "Looping", "Array", "String Handling", "OOP Concepts", "Packages & Interfaces", "Added Courses"],
      },
      {
        title: "J2EE (Java Enterprise Edition)",
        duration: "60 Hrs",
        topics: ["HTML", "CSS", "JavaScript", "JavaServlet", "JDBC-ODBC", "JSP Technology", "RMI", "Grid", "Mini Project"],
      },
      {
        title: "Data Science",
        duration: "40 Hrs",
        topics: ["Numpy", "Pandas", "Matplotlib", "Scipy", "Sympy", "Pillow", "Machine Learning", "SKLearn, MongoDB, PyMongo", "Tableau & SQL"],
      },
    ],
  },
  {
    category: "Full Stack Development",
    courses: [
      {
        title: "Web Level-I",
        duration: "50 Hrs",
        topics: ["Introduction", "HTML", "CSS", "JavaScript", "jQuery", "PHP", "MySQL", "Web Hosting", "Project"],
      },
      {
        title: "Web Level-II",
        duration: "80 Hrs",
        topics: ["Bootstrap", "Introduction to React & JSX", "React Component", "Event Handling in React", "AngularJS Intro", "Components of Angular", "Data & Event Binding", "Services & HTTP Client", "MongoDB"],
      },
      {
        title: "Web Level-III",
        duration: "120 Hrs",
        topics: ["NodeJS Introduction", "Logical Expressions, Loops", ".NET Framework", "C#, OOPS", "SQL Server, ADO.NET", "ASP.NET", "State Management", "Uploading Files", "ASP.NET Web Services"],
      },
    ],
  },
  {
    category: "Infrastructure Courses",
    courses: [
      {
        title: "Hardware & Networking",
        duration: "40 Hrs",
        topics: ["Introduction", "Software Installation", "Hardware Installation", "Storage", "Data Recovery", "Networking Introduction", "Networking Configuration", "Administration", "Troubleshooting"],
      },
      {
        title: "CCNA Certification",
        duration: "60 Hrs",
        topics: ["Networking Concepts", "OSI Model", "TCP/IP Model & IPv4 Addressing", "Subnetting", "Introduction to IPv6", "Basics of Router & Configuration", "IP Routing", "WAN Technologies", "VLAN Configuration"],
      },
    ],
  },
  {
    category: "Graphics & Animations",
    courses: [
      {
        title: "Adobe Photoshop",
        duration: "40 Hrs",
        topics: ["Navigating Photoshop", "Menus and Panels", "Zooming and Planning an Image", "Undoing Steps with History", "Correction", "Animated GIF Creation", "Visiting Card Designing", "Wedding Card Designing"],
      },
      {
        title: "Illustrator",
        duration: "40 Hrs",
        topics: ["Introduction to Vector Art & Illustrator", "Vector and Pixel Graphics", "Object and Landscape Illustration", "Creating Brand Logos", "Apparel Design", "Infographics", "Iconography", "Creating Printing Designs", "Creating 3D Characters"],
      },
      {
        title: "CorelDRAW",
        duration: "40 Hrs",
        topics: ["Introduction", "Drawing Shapes", "Pages and Layout Tools", "Working with Layers", "Working with Text and Bitmaps", "Creating Effects", "Package Designing", "Logo Designing", "Greeting Designing"],
      },
      {
        title: "3DS Max",
        duration: "90 Hrs",
        topics: ["Introduction to 3DS Max", "Viewport Controls", "Zooming Controls", "Boolean, Pro Boolean", "Parametric Modifiers", "Importing 3D AutoCAD Files", "Application of Maps", "Key Frame Association", "Creating Camera & Target Camera"],
      },
    ],
  },
  {
    category: "Software Testing",
    courses: [
      {
        title: "Testing & Automation",
        duration: "60 Hrs",
        topics: ["Manual Testing", "Selenium IDE", "WebDriver Introduction", "Launching AUT and Inspecting Properties of Elements", "Automating Operations on Various Elements", "Automating Keyboard and Mouse Events", "Handling Multiple Windows", "TestNG Framework", "Cucumber Framework"],
      },
    ],
  },
];

const Courses: React.FC = () => {
  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <h1 className="text-3xl font-bold text-center mb-8">Course Catalog</h1>
      {courses.map((category, index) => (
        <div key={index} className="mb-10">
          <h2 className="text-2xl font-semibold mb-4">{category.category}</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {category.courses.map((course, idx) => (
              <div
                key={idx}
                className="bg-white p-6 rounded-lg shadow-lg hover:shadow-2xl transition-transform transform hover:scale-105"
              >
                <h3 className="text-xl font-semibold text-blue-600">{course.title} ({course.duration})</h3>
                <ul className="list-disc list-inside mt-2 text-gray-700">
                  {course.topics.map((topic, id) => (
                    <li key={id}>{topic}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Courses;
