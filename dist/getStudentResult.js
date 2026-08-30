"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const calculateCartTotal = (student) => {
    const marks = student.marks;
    const totalMarks = marks.reduce((sum, mark) => sum + mark, 0);
    return totalMarks;
};
console.log(calculateCartTotal({
    name: "Siam",
    marks: [80, 75, 90, 85]
}));
//# sourceMappingURL=getStudentResult.js.map