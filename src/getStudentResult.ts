interface Student {
    name: string
    marks: number[]
}

interface Result {
    name: string
    average: number
    result: string
}

const calculateCartTotal = (student: Student):number=>{
     const marks: number[] = student.marks;

     const totalMarks:number = marks.reduce((sum, mark)=> sum+ mark,0)

     return totalMarks;
}

console.log(calculateCartTotal({
    name: "Siam",
    marks: [80,75,90,85]
}));