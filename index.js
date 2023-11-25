function Student(name, rollNo, className, section, marks) {
    this.name = name;
    this.rollNo = rollNo;
    this.className = className;
    this.section = section;
    this.marks = marks;
  
    this.printTop3Subjects = function () {
      // Extract subjects and marks from the marks object
      const subjects = Object.keys(this.marks);
      
      // Sort subjects based on marks in descending order
      const sortedSubjects = subjects.sort((a, b) => this.marks[b] - this.marks[a]);
  
      // Print the top three subjects
      console.log("Top 3 Subjects:");
      for (let i = 0; i < 3; i++) {
        console.log(${i + 1}. ${sortedSubjects[i]});
      }
    };
  
    this.printReportCard = function () {
      // Display the student's report card
      console.log("Report Card");
      console.log(Name: ${this.name});
      console.log(Roll No: ${this.rollNo});
      console.log(Class: ${this.className});
      console.log(Section: ${this.section});
      
      // Display marks for each subject
      console.log("Marks:");
      Object.keys(this.marks).forEach(subject => {
        console.log(${subject}: ${this.marks[subject]});
      });
    };
  }
  
  // Example usage:
  const student1 = new Student("John Doe", "12345", "10th", "A", {
    science: 72,
    maths: 75,
    "social science": 79,
    english: 80,
    hindi: 67,
  });
  
  // Print top 3 subjects
  student1.printTop3Subjects();
  
  // Print report card
  student1.printReportCard();